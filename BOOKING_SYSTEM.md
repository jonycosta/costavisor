# Sistema de Reservas y Pagos - CostaVisor

Este documento detalla la lógica de negocio técnica para el motor de reservas (`Booking Engine`) y pasarela de pagos, asegurando integridad financiera y operativa.

## 1. Modelo de Pagos Flexibles
Soportamos dos modalidades configurables por servicio:
*   **Pago 100% (Instantáneo):** El cliente paga el total al reservar. Común en alquileres pequeños (Motos de agua, Kayak).
*   **Pago Señal / Depósito (Partial Payment):** El cliente paga un % (ej: 20%) para bloquear la fecha, y el resto se paga presencialmente o mediante un segundo link días antes.
    *   *Implementación:* La tabla `Bookings` tiene `total_amount` (ej: 100€) y `paid_amount` (ej: 20€).
    *   *Estado:* `payment_status` será `PARTIAL`. El sistema genera automáticamente el recordatorio de cobro restante.

## 2. Flujo de Reserva y Prevención de Overbooking
Para evitar que dos personas reserven la misma moto a la vez (Race Condition), utilizamos **Bloqueos Atómicos en Base de Datos**.

1.  **Selección:** Usuario A selecciona "Moto Agua - 10:00".
2.  **Hold Tempora (Soft Lock):** Al pulsar "Ir a Pagar", el sistema crea un bloqueo temporal de 10 minutos en Redis/DB para esa plaza. Nadie más la ve disponible.
3.  **Pago:**
    *   *Éxito:* Se confirma la reserva (`CONFIRMED`). El `capacity_booked` se incrementa permanentemente.
    *   *Fallo/Tiempo agotado:* Se libera el bloqueo. La plaza vuelve a estar libre.

## 3. Sincronización Real-Time (Web <-> App)
Gracias a la arquitectura unificada y WebSockets (Socket.io / Supabase Realtime):
*   **Inventario Compartido:** Si alguien reserva la "Última plaza del barco" en la Web, el servidor emite un evento `inventory_update`.
*   **Actualización UI:** La App móvil recibe el evento y deshabilita el botón "Reservar" o muestra "Agotado" instantáneamente, sin que el usuario tenga que refrescar.

## 4. Confirmaciones y Notificaciones
El sistema usa un bus de eventos para disparar acciones post-reserva.

### A. Al Usuario (Cliente)
*   **Email Automático:** Plantilla HTML premium con resumen, QR del voucher y ubicación Google Maps.
*   **Push Notification (App):** "¡Reserva confirmada! Prepara tu bañador."

### B. A CostaVisor (Administración)
*   **Email Crítico:** Se envía un correo estructurado a `grupocostavisor@gmail.com`.
    *   *Asunto:* `[NUEVA RESERVA] #12345 - Moto de Agua - Juan Pérez`
    *   *Cuerpo:* Detalles completos, teléfono del cliente, y estado del pago.
*   **Dashboard Real-time:** La reserva aparece al instante en el panel de control del equipo.

## 5. Casos Borde y Soluciones
*   **Pago Fallido:** La reserva queda en estado `PENDING_PAYMENT` brevemente y luego se cancela automáticamente, liberando el stock.
*   **Cancelaciones:** Si el usuario cancela (según política), el sistema puede emitir un reembolso automático a Stripe parcial o total, y actualiza el stock de nuevo a disponible.

## 6. Diagrama de Estados de Reserva
`DRAFT` (Seleccionando) -> `AWAITING_PAYMENT` (En pasarela) -> `CONFIRMED` (Pagado) -> `COMPLETED` (Servicio disfrutado).
`CANCELLED` (Puede ocurrir desde Confirmed o Awaiting).
