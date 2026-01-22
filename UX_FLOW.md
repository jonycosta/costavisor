# Estructura de Pantallas y Flujo UX - CostaVisor

Este documento define la estructura visual y el viaje del usuario (User Journey) diseñado para maximizar la conversión y simplificar la experiencia del turista extranjero.

## 1. Principios de Diseño
*   **"Mobile First & Thumb Friendly":** Áreas de interacción al alcance del pulgar.
*   **Minimalismo Premium:** Fotos grandes de alta calidad, poco texto, tipografía clara.
*   **Transparencia:** Precios finales visibles desde el principio. Sin sorpresas.
*   **Inmersivo:** Uso de videos cortos en el fondo de las cabeceras.

## 2. Mapa de Pantallas (Site Map)

### 🏠 Home (Inicio)
El escaparate principal.
*   **Header:** Video hero de la Costa del Sol + Buscador simple ("¿Qué te apetece hacer hoy?").
*   **Categorías Rápidas:** Iconos grandes (Motos, Barcos, Packs, Relax).
*   **Destacados:** "Top Holiday Packs" (Carrusel).
*   **Botón Flotante:** Chat "CostaVisor Care".

### 📂 Catálogo / Listado
*   **Filtros:** Fecha, Precio, Tipo de grupo (Familia, Pareja).
*   **Tarjetas:** Foto + Título + Precio "Desde" + Valoración.
*   **Vista Mapa:** Ver experiencias cerca de mi ubicación.

### 📄 Detalle de Experiencia (Ficha de Producto)
*   **Galería Multimedia:** Fotos/Video deslizables.
*   **Info Clave:** Duración, Idioma, Qué incluye.
*   **Descripción:** Emocional y breve.
*   **Selector:** Fecha + Nº Personas.
*   **CTA (Call To Action):** Botón grande "Reservar Ahora" (Sticky footer en móvil).

### 🛒 Checkout (Proceso de Reserva) - ¡Solo 2-3 pasos!
1.  **Resumen:** Revisa tu selección.
2.  **Datos:** Nombre + Email (Autocompletado si logueado) + Notas especiales.
3.  **Pago:** Tarjeta / Google Pay / Apple Pay. Opción "Pagar 20% señal".
4.  **Éxito:** Pantalla de confirmación con QR del ticket + Botón "Añadir a Wallet".

### 💬 CostaVisor Care (Centro de Ayuda)
*   **Chat:** Interfaz tipo WhatsApp.
*   **FAQs:** Preguntas rápidas antes de abrir chat.
*   **Estado:** Indicador de "Agente Escribiendo...".

### 👤 Mi Perfil (My Trips)
*   **Próximos viajes:** Vouchers y fechas.
*   **Historial:** Viajes pasados.
*   **Datos:** Editar perfil y preferencias.

## 3. Flujo Crítico: Reserva de Moto de Agua (Ejemplo)

1.  **Inicio:** Usuario pulsa icono "Motos de Agua".
2.  **Ficha:** Ve fotos, elige "Día 24, 10:00 AM" y "2 Motos". Pulsa "Reservar (120€)".
3.  **Checkout:** Ingresa email y tarjeta. Pulsa "Pagar".
4.  **Fin:** Recibe confirmación y QR.

## 4. Flujo CostaVisor Care (Asistencia)

1.  **Problema:** Usuario tiene una duda sobre el pack. Pulsa botón flotante Chat.
2.  **Chat:** Se abre ventana. Escribe "Hola, ¿el pack incluye bebidas?".
3.  **Respuesta:** Agente (o bot inicial) responde al instante.
4.  **Acción:** Agente envía un "Link de pago personalizado" al chat si el cliente decide comprar ahí mismo.

## 5. Menú de Navegación (App Bar / Nav Bar)
*   **Inicio**
*   **Buscar** (Catálogo)
*   **Mis Viajes** (Reservas)
*   **Care** (Chat)
*   **Perfil**
