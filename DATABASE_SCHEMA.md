# Diseño del Modelo de Base de Datos - CostaVisor

Este documento detalla el esquema de base de datos relacional (PostgreSQL) diseñado para soportar la escalabilidad, el multi-idioma y la integridad transaccional de CostaVisor.

## 1. Consideraciones de Diseño
*   **Multi-idioma (i18n):** Se utilizará un enfoque híbrido. Campos clave (nombres, descripciones) usarán tipos de datos `JSONB` para almacenar traducciones directamente (ej: `{"es": "Ruta en Moto", "en": "Moto Route"}`) o tablas de traducción satélite dependiendo de la complejidad. Para este diseño, asumiremos uso de `JSONB` por su flexibilidad y rendimiento en PostgreSQL.
*   **Moneda y Precios:** Todos los montos se almacenan en enteros (céntimos/centavos) para evitar errores de coma flotante.
*   **Timezones:** Todas las fechas se almacenan en UTC.

## 2. Tablas Principales

### 👤 Usuarios (Users)
Centraliza la información de todos los actores: Turistas, Residentes, Admins.
*   `id` (UUID): Identificador único.
*   `email` (String): Único, para login y notificaciones.
*   `password_hash` (String): Encriptada.
*   `full_name` (String): Nombre completo.
*   `role` (Enum): `CLIENT`, `ADMIN`, `SUPPORT`.
*   `phone` (String): Para contacto rápido (WhatsApp/Llamada).
*   `language_pref` (String): Preferencia de idioma (es/en) para notificaciones.
*   `created_at`: Fecha registro.

### 📦 Catálogo de Servicios (Services)
Tabla maestra para Experiencias, Holiday Packs, Motos, etc.
*   `id` (UUID): Identificador.
*   `type` (Enum): `PACK`, `ACTIVITY`, `RENTAL`, `TRANSFER`.
*   `slug` (String): URL amigable (ej: `moto-route-sunset`).
*   `title` (JSONB): Título traducible.
*   `description` (JSONB): Descripción detallada traducible.
*   `base_price` (Integer): Precio base en céntimos.
*   `currency` (String): Default 'EUR'.
*   `images` (Array<String>): URLs de imágenes.
*   `is_active` (Boolean): Para activar/desactivar sin borrar.
*   `metadata` (JSONB): Campos flexibles según tipo (ej: "duración", "dificultad" para rutas; "nº habitaciones" para packs).

### 📅 Disponibilidad y Agenda (ServiceAvailability)
Gestiona el stock real y slots de tiempo.
*   `id` (UUID)
*   `service_id` (FK -> Services)
*   `date` (Date): Día específico.
*   `start_time` (Time): Hora inicio (si aplica).
*   `end_time` (Time): Hora fin (si aplica).
*   `capacity_total` (Int): Cupo total (ej: 4 motos).
*   `capacity_booked` (Int): Cupo ocupado.
*   *Restricción:* `capacity_booked` nunca puede superar `capacity_total`.

### 📝 Reservas (Bookings)
El corazón transaccional.
*   `id` (UUID)
*   `user_id` (FK -> Users): Quién reserva.
*   `total_amount` (Integer): Precio final pactado.
*   `status` (Enum): `PENDING_PAYMENT`, `CONFIRMED`, `COMPLETED`, `CANCELLED`.
*   `payment_status` (Enum): `UNPAID`, `PARTIAL`, `PAID`, `REFUNDED`.
*   `special_requests` (Text): Notas del cliente.
*   `created_at`: Fecha creación.

### 🧾 Detalle de Reserva (BookingItems)
Permite que una reserva incluya múltiples servicios (ej: Pack Hotel + Moto de Agua).
*   `id` (UUID)
*   `booking_id` (FK -> Bookings)
*   `service_id` (FK -> Services)
*   `quantity` (Int): Número de personas/unidades.
*   `unit_price` (Int): Precio congelado al momento de compra.
*   `scheduled_at` (DateTime): Fecha/Hora reservada para esta actividad.

### 💳 Pagos (Payments)
Registro de transacciones financieras.
*   `id` (UUID)
*   `booking_id` (FK -> Bookings)
*   `provider` (Enum): `STRIPE`, `PAYPAL`, `MANUAL`.
*   `transaction_id` (String): ID externo (Stripe ID).
*   `amount` (Integer): Cantidad pagada.
*   `status` (Enum): `SUCCESS`, `FAILED`, `PENDING`.
*   `created_at`: Fecha pago.

### 💬 CostaVisor Care (Conversations & Messages)
*   **Conversations:**
    *   `id` (UUID)
    *   `user_id` (FK -> Users)
    *   `status` (Enum): `OPEN`, `RESOLVED`, `ARCHIVED`.
    *   `last_message_at`: Para ordenar buzón de entrada.
*   **Messages:**
    *   `id` (UUID)
    *   `conversation_id` (FK -> Conversations)
    *   `sender_type` (Enum): `USER`, `AGENT`, `SYSTEM`.
    *   `content` (Text): Mensaje.
    *   `is_read` (Boolean).
    *   `created_at`: Timestamp.

## 3. Diagrama Relacional Simplificado

`Users` 1:N `Bookings`
`Bookings` 1:N `BookingItems`
`Bookings` 1:N `Payments`
`Services` 1:N `BookingItems`
`Services` 1:N `ServiceAvailability`
`Users` 1:N `Conversations`
`Conversations` 1:N `Messages`

## 4. Escalabilidad
1.  **Índices:** Se aplicarán índices en campos de búsqueda frecuentes (`slug`, `start_time`, `user_id`).
2.  **Particionamiento:** En fase avanzada, la tabla `Messages` o `Bookings` se puede particionar por año.
3.  **Caché:** Las consultas a `Services` (Catálogo) se cachearán en Redis para lectura ultrarrápida.
