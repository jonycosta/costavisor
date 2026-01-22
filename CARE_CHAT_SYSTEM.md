# CostaVisor Care - Sistema de Chat Integrado

Este documento detalla la lógica y arquitectura del sistema de atención `CostaVisor Care`, el "botón mágico" de la plataforma.

## 1. Experiencia de Usuario (El Cliente)
*   **Acceso Universal:** Un botón flotante "Ayuda" visible e idéntico en Web y App.
*   **Sin Burocracia:** Si el usuario está logueado, inicia el chat directamente. Si no, solo pide nombre y WhatsApp (opcional).
*   **Contexto Inteligente:** Si abre el chat desde la ficha "Moto de Agua", el primer mensaje del sistema incluirá ese contexto para el agente: *"El usuario está viendo: Motos de Agua"*.
*   **Multimedia:** Permite enviar fotos (ej: DNI para reserva) y ubicación.

## 2. Panel de Administración Unificado (El Equipo)
Todos los mensajes (Web, App) llegan a una única bandeja de entrada en el Backoffice.
*   **Interfaz:** Estilo Zendesk/Intercom simplificado.
*   **Perfil Enriquecido:** A la derecha del chat, el agente ve:
    *   Nombre y valoración del cliente (VIP, Familia).
    *   Historial de reservas pasadas.
    *   Links rápidos para enviar: "Pago de señal", "Ficha técnica Barco".
*   **Asignación:** Los chats se pueden asignar a agentes específicos ("Juan - Especialista Barcos").

## 3. Flujo Técnico de Comunicación
Utilizamos **WebSockets** para comunicación bidireccional en tiempo real.
1.  **Usuario envía:** "Hola, busco barco para mañana".
2.  **Servidor:** Guarda mensaje en DB -> Emite evento `new_message` al canal Admin.
3.  **Admin:** Recibe notificación sonora y visual. Responde: "Claro, tengo este disponible...".
4.  **Usuario:** Recibe respuesta instantánea. Si cerró la app, recibe **Push Notification**. Si es Web y salió, recibe **Email** de "Tienes mensajes no leídos".

## 4. Automatización y Futuro (Roadmap AI)
*   **Fase 1 (MVP):** Respuestas rápidas ("Canned Responses").
    *   Ej: `/wifi` -> "La clave del wifi del barco es..."
*   **Fase 2 (Chatbot Híbrido):**
    *   Un bot saluda, pide datos básicos y clasifica la duda.
    *   Si detecta palabras clave ("Urgente", "Cancelación"), deriva a humano.
*   **Fase 3 (AI Agent):** Integración con LLM (tipo GPT) entrenado con las fichas de CostaVisor para responder dudas técnicas de horarios y precios automáticamente.

## 5. Escalabilidad de Notificaciones
*   **Email Digest:** Si un agente no responde en 5 min, se envía alerta al email `grupocostavisor@gmail.com`.
*   **WhatsApp Bridge (Opcional):** Posibilidad de redirigir el chat a WhatsApp Business API para responder desde el móvil del agente en movimiento.
