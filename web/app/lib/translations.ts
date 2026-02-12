export const translations = {
    es: {
        nav: {
            home: "Inicio",
            accommodations: "Villas & Suites",
            experiences: "Experiencias",
            packages: "Packs de Vacaciones",
            services: "Concierge",
            investors: "Inversores",
            book: "Diseñar mi Viaje"
        },
        hero: {
            tag: "Nerja & Frigiliana | Luxury Services",
            h1: "El Secreto Mejor Guardado de la Costa del Sol",
            p: "Accede a villas privadas, experiencias en barco y rincones de Nerja y Frigiliana que no salen en las guías. Somos tu anfitrión local para un viaje diferente, exclusivo y sin complicaciones.",
            cta: "Descubrir Experiencias",
            cta2: "Nuestros Servicios",
            localPrideShort: "Proyecto 100% Local: Nacidos en Nerja, apoyando al comercio de nuestra zona."
        },
        services: {
            tag: "Servicios de Concierge",
            h2: "Atención personalizada para gustos exigentes",
            p: "Nos encargamos de cada detalle para que su única ocupación sea disfrutar del paraíso.",
            items: [
                {
                    title: "Villas & Suites con Encanto",
                    desc: "Selección curada de las propiedades más singulares. Lejos del ruido, cerca de la esencia.",
                    features: ["Staff Privado", "Ubicaciones Prime", "Privacidad Total"]
                },
                {
                    title: "Experiencias de Autor",
                    desc: "Desde navegar en zonas vírgenes hasta chefs privados en tu villa. Diseñamos momentos que recordarás siempre.",
                    features: ["Acceso Exclusivo", "Guías Locales", "Totalmente a Medida"]
                },
                {
                    title: "Concierge 24/7",
                    desc: "Tu asistente personal en destino. Reservas VIP, transporte y cualquier capricho que necesites.",
                    features: ["Atención Bilingüe", "Respuesta Rápida", "Conocimiento Local"]
                }
            ]
        },
        portfolio: {
            tag: "Experiencias Exclusivas",
            h2: "Reserve su Momento CostaVisor",
            p: "Selección de actividades privadas diseñadas para superar sus expectativas más altas.",
            depositNote: "Para reservar solo abonarás el 20% del precio; el resto lo abonas a la llegada.",
            payNow: "Reservar Ahora (Pagar Fianza)",
            inquireText: "Solicitar Información VIP",
            items: [
                {
                    title: "Navegación Privada Acantilados",
                    category: "Exclusivo",
                    image: "/exp-boat.png",
                    slug: "sunset-boat-trip",
                    price: "desde 350",
                    duration: "4h",
                    maxPax: "8",
                    location: "Puerto de Nerja / Maro",
                    description: "Disfruta de la Costa del Sol desde una perspectiva única. Navegaremos en una embarcación premium por los impresionantes acantilados de Maro, visitando cascadas marinas y calas cristalinas inaccesibles por tierra.\n\nEsta experiencia es ideal para familias que buscan un día diferente, grupos de amigos, despedidas de solteros o pequeñas fiestas privadas. Nuestro equipo les guiará y asesorará en todo momento para que la jornada sea perfecta. \n\nRecuerde: si necesita algún servicio o detalle que no ve en nuestra web, haremos lo posible por ayudarle con su petición.",
                    highlights: ["Yate premium privado", "Ideal familias y grupos", "Despedidas y Fiestas", "Asesoramiento completo"]
                },
                {
                    title: "Cocktail Experience",
                    category: "Eventos",
                    image: "/exp-cocktail.jpg",
                    slug: "cocktail-experience",
                    price: "Consultar",
                    duration: "A medida",
                    maxPax: "Sin límite",
                    location: "A domicilio",
                    description: "Haz de tu reunión, celebración o evento algo diferente con nuestra barra a domicilio. Disfruta de cócteles clásicos y de autor preparados en tu propia villa.",
                    highlights: ["Barra móvil", "Diferente", "Cócteles de autor", "Servicio premium"]
                },
                {
                    title: "Ruta Acebuchal",
                    category: "Ruta Privada",
                    image: "/exp-acebuchal.jpg",
                    slug: "ruta-acebuchal",
                    price: "Consultar",
                    duration: "4h",
                    maxPax: "8",
                    location: "El Acebuchal",
                    description: "Un viaje al pasado en el corazón de la Axarquía. Descubre 'El Pueblo Fantasma', su historia de resistencia y su gastronomía auténtica. Opción extra: Ruta en Moto 125cc.",
                    highlights: ["Pueblo reconstruido", "Gastronomía local", "Ruta escénica", "Opción Moto 125cc"]
                },
                {
                    title: "Rutas en Motos 125",
                    category: "Aventura",
                    image: "/exp-moto.jpg",
                    slug: "moto-route",
                    price: "70€ (1p) / 110€ (2p)",
                    duration: "3h",
                    maxPax: "6",
                    location: "Costa del Sol",
                    description: "Siente la brisa en tu cara recorriendo las carreteras más espectaculares de la costa y los pueblos blancos en nuestras motos 125cc con guía local.",
                    highlights: ["Motos nuevas", "Guía local", "Aperitivo incluido", "Ruta escénica"]
                },
                {
                    title: "Rutas en Bicicletas",
                    category: "Deporte",
                    image: "/exp-bike.jpg",
                    slug: "bike-route",
                    price: "50",
                    duration: "2-3h",
                    maxPax: "10",
                    location: "Nerja / Maro",
                    description: "Una forma saludable y divertida de explorar los alrededores. Rutas adaptadas a todos los niveles por senderos naturales y costeros.",
                    highlights: ["Bicis de alta gama", "Casco incluido", "Hidratación", "Guía deportivo"]
                },
                {
                    title: "Rutas en Buggys",
                    category: "Adrenalina",
                    image: "/exp-buggy.jpg",
                    slug: "buggy-route",
                    price: "200",
                    duration: "2h min.",
                    maxPax: "8",
                    location: "Montañas de Nerja",
                    description: "Para los que aman la adrenalina esta es tu experiencia, ya que recorrerás caminos rurales, montañas y paisajes naturales de la mano de un guía local. Una experiencia totalmente segura y divertida.",
                    highlights: ["Adrenalina pura", "Caminos rurales", "Guía experto", "Seguridad 100%"]
                },
                {
                    title: "Tennis y Catering",
                    category: "Lifestyle",
                    image: "/exp-tennis.jpg",
                    slug: "tennis-catering",
                    price: "30",
                    duration: "3h",
                    maxPax: "4",
                    location: "Club Privado",
                    description: "Disfruta de una jornada de tenis con tus amigos o familia y disfruta de un catering casero con productos locales.",
                    highlights: ["Pista privada", "Mín. 30€ por persona", "Catering casero", "Productos locales"]
                },
                {
                    title: "Chef Privado: Magic Table",
                    category: "Gastronomía",
                    image: "/exp-magic.jpg",
                    slug: "magic-table",
                    price: "75",
                    duration: "Sesión privada",
                    maxPax: "Mín. 4",
                    location: "Su Propio Alojamiento (Home Service)",
                    description: "Chef privado + show de magia, una experiencia única y diferente. Si nos conociste en New Town Restaurante Nerja, disfrutaste de nuestras tapas sorpresa. Ahora llevamos la esencia de New Town a tu casa. También podrás disfrutar de nuestras paellas o barbacoas. Diseñamos la experiencia a tu gusto y escuchamos tus sugerencias.",
                    highlights: ["Show de magia privado", "Esencia New Town", "Mínimo 4 personas", "Paellas & Barbacoas"],
                    externalLink: "https://www.google.com/search?q=newtown+restaurante+nerja",
                    partnerLogo: "/logo-newtown.jpg"
                },
                {
                    title: "Diving Costa del Sol",
                    category: "Aventura",
                    image: "/exp-diving.jpg",
                    slug: "diving",
                    price: "Consultar",
                    duration: "3h",
                    maxPax: "6",
                    location: "Reserva Natural de Maro",
                    description: "Descubre el mundo submarino de la Costa del Sol. Inmersiones adaptadas a tu nivel en aguas cristalinas llenas de vida marina.",
                    highlights: ["Equipo completo", "Instrucción PADI", "Fotos bajo el agua", "Aguas cristalinas"]
                },
                {
                    title: "Barranquismo",
                    category: "Extremo",
                    image: "/exp-canyoning.jpg",
                    slug: "canyoning",
                    price: "65",
                    duration: "4h",
                    maxPax: "10",
                    location: "Río Verde / Chillar",
                    description: "Desciende por cañones naturales, salta a pozas de agua turquesa y disfruta de la geología más salvaje de la mano de expertos.",
                    highlights: ["Arnés y Neopreno", "Guías titulados", "Seguro incluido", "Aventura máxima"]
                },
                {
                    title: "Fly Costa del Sol",
                    category: "Aire",
                    image: "/exp-fly.jpg",
                    slug: "fly-costa-del-sol",
                    price: "180",
                    duration: "20-30min",
                    maxPax: "1",
                    location: "Despegue desde la Costa",
                    description: "Siente la libertad absoluta sobrevolando el Mediterráneo. Una experiencia de vuelo única con las mejores vistas panorámicas de Nerja.",
                    highlights: ["Piloto biplaza", "Vistas increíbles", "Grabación HD opt.", "Sensación única"]
                },
                {
                    title: "Yoga & Relax",
                    category: "Bienestar",
                    image: "/exp-yoga.jpg",
                    slug: "yoga-relax",
                    price: "0",
                    duration: "90min",
                    maxPax: "15",
                    location: "Villa / Playa",
                    description: "Sesión personalizada de yoga y relajación profunda. Opción de reservar un spa, masaje o ambos si lo desea para completar una jornada de desconexión total.",
                    highlights: ["Mats incluidos", "Masaje/Spa opcional", "Reserva Masaje + Spa", "Paz interior"]
                },
                {
                    title: "Fábrica de Ron Motril",
                    category: "Cultural",
                    image: "/exp-rum.jpg",
                    slug: "ron-granada",
                    price: "35",
                    duration: "2h",
                    maxPax: "20",
                    location: "Motril (Granada)",
                    description: "Es una de las únicas bodegas abiertas al público en Motril (Granada). Te explicarán su proceso de elaboración y podrás disfrutar de una cata auténtica de su ron legendario.",
                    highlights: ["Cata incluida", "Acceso bodega", "Historia local", "Regalo exclusivo"]
                },
                {
                    title: "Ruta Granada Histórica",
                    category: "Cultural",
                    image: "/exp-granada.jpg",
                    slug: "granada-historica",
                    price: "0",
                    duration: "",
                    maxPax: "15",
                    location: "Granada",
                    description: "Descubre los secretos de la Alhambra, el Generalife y la exquisita gastronomía granadina en una visita guiada exclusiva. Explora los barrios históricos del Albaicín y Sacromonte con expertos locales, sumergiéndote en la rica historia y cultura de Granada.",
                    highlights: ["Entrada y guía Alhambra + Generalife", "Recorrido Albaicín y Sacromonte", "Transporte privado desde Nerja", "Guía experto en historia local"]
                },
                {
                    title: "Málaga Arte y Puerto",
                    category: "Cultural",
                    image: "/exp-malaga.jpg",
                    slug: "malaga-arte-puerto",
                    price: "0",
                    duration: "",
                    maxPax: "15",
                    location: "Málaga Capital",
                    description: "Sumérgete en el arte y la cultura malagueña visitando el Museo Picasso, la Alcazaba musulmana y el vibrante centro histórico. Termina el día disfrutando del Puerto de Málaga y su gastronomía.",
                    highlights: ["Museo Picasso y Alcazaba", "Centro histórico guiado", "Puerto de Málaga", "Transporte incluido desde Nerja"]
                },
                {
                    title: "Ronda Pueblos Blancos",
                    category: "Ruta Privada",
                    image: "/exp-nature.png",
                    slug: "ronda-pueblos-blancos",
                    price: "70",
                    duration: "",
                    maxPax: "12",
                    location: "Ronda y Serranía",
                    description: "Visita una de las ciudades más espectaculares de Andalucía. Cruza el icónico Puente Nuevo, explora el casco histórico y descubre un auténtico pueblo blanco en la ruta de regreso. Un viaje inolvidable por la Serranía de Ronda.",
                    highlights: ["Puente Nuevo y Tajo de Ronda", "Casco histórico y plaza de toros", "Pueblo blanco en ruta", "Guía local experto"]
                }
            ]
        },
        customTravel: {
            tag: "Viajes a Medida",
            title: "Diseña Tu Ruta Ideal",
            subtitle: "Costa del Sol, Granada, Málaga y toda Andalucía",
            description: "¿Quieres visitar un lugar específico o diseñar tu propio itinerario? Organizamos tu viaje perfecto a cualquier destino. Tú decides el lugar, nosotros nos encargamos del resto.",
            features: [
                {
                    title: "Rutas guiadas por expertos locales",
                    desc: "Conocimiento profundo de cada destino"
                },
                {
                    title: "Transporte privado incluido",
                    desc: "Comodidad desde tu alojamiento"
                },
                {
                    title: "Adaptamos el itinerario a tus gustos",
                    desc: "Totalmente personalizable y flexible"
                },
                {
                    title: "Desde 2 hasta 50 personas",
                    desc: "Para parejas, familias o grupos grandes"
                }
            ],
            destinations: "Granada • Málaga • Córdoba • Sevilla • Ronda • Pueblos Blancos • Y mucho más",
            cta: "Planificar Mi Viaje"
        },
        specialRequest: {
            title: "¿No encuentras lo que buscas?",
            message: "Si hay algo que te gustaría tener pero no lo encuentras en nuestra página web, no te preocupes. Dinos de qué se trata y haremos todo lo posible por conseguírtelo: un servicio especial, una actividad única o cualquier petición personalizada.",
            cta: "Dinos qué necesitas"
        },
        localServices: {
            tag: "Servicios Locales",
            h2: "Todo lo que necesita para su estancia",
            p: "Gestionamos sus desplazamientos y alquileres con asistencia personalizada y recomendaciones locales.",
            vipAssistance: "Asistencia VIP",
            items: [
                {
                    title: "Traslados al Aeropuerto",
                    desc: "Recogida y entrega directa en su alojamiento con total comodidad.",
                    image: "/exp-villa.png"
                },
                {
                    title: "Alquiler de Coches",
                    desc: "Selección de vehículos premium con ayuda en todo el trámite.",
                    image: "/exp-villa.png"
                },
                {
                    title: "Alquiler de Motos",
                    desc: "Muévase con agilidad por la costa y los pueblos blancos.",
                    image: "/exp-nature.png"
                },
                {
                    title: "Alquiler de Autocaravanas",
                    desc: "Explore a su aire con recomendaciones de las mejores rutas.",
                    image: "/exp-nature.png"
                }
            ]
        },
        guide: {
            tag: "Manual del Buen Vivir",
            h2: "Nerja & Frigiliana Insider",
            p: "Los secretos mejor guardados para el viajero distinguido."
        },
        testimonials: {
            tag: "Nuestros Clientes",
            h2: "Voces de Confianza",
            p: "La satisfacción de quienes exigen lo mejor.",
            items: [
                {
                    name: "Marta Sánchez",
                    role: "Propietaria en Frigiliana",
                    content: "Desde que llevan mi villa, no me preocupo de nada. Son súper cercanos y se nota que saben lo que hacen. ¡Un alivio total!",
                    stars: 5
                },
                {
                    name: "James Wilson",
                    role: "Inversionista Internacional",
                    content: "La salida en barco por Maro fue brutal, lo mejor del viaje sin duda. El trato de 10. Repetiremos seguro.",
                    stars: 5
                },
                {
                    name: "Pedro Gómez",
                    role: "Family Office Manager",
                    content: "Me buscaron la casa perfecta y ahora me lo gestionan todo. Da gusto encontrar gente tan profesional y apañada por aquí.",
                    stars: 5
                }
            ]
        },
        accommodations: {
            tag: "Villas & Suites",
            h2: "Su Refugio en la Costa del Sol",
            p: "Descubra nuestra colección privada de propiedades premium, seleccionadas por su diseño, ubicación y exclusividad.",
            filters: {
                all: "Todas las propiedades",
                villa: "Villas de Lujo",
                apartment: "Apartamentos Premium",
                countryside: "Fincas Exclusivas",
                hotel: "Boutique Hotels",
                hostel: "Suites Design"
            },
            items: [
                { id: 1, type: "villa", title: "Villa Panorama Real", loc: "Punta Lara, Nerja", price: "Desde 450€/noche", image: "/exp-villa.png" },
                { id: 2, type: "apartment", title: "Penthouse Blue Horizon", loc: "Playa Burriana", price: "Desde 200€/noche", image: "/exp-apt.png" },
                { id: 3, type: "countryside", title: "Cortijo Los Olivos", loc: "Camino de Frigiliana", price: "Desde 320€/noche", image: "/exp-nature.png" },
                { id: 4, type: "hotel", title: "Suites Boutique Centro", loc: "Nerja Casco Antiguo", price: "Desde 280€/noche", image: "/exp-villa.png" }
            ],
            cta: {
                checkAvailability: "Consultar Disponibilidad",
                exceptionalTitle: "¿Busca algo realmente excepcional?",
                exceptionalDesc: "Nuestro equipo de concierge diseña vacaciones a medida para los gustos más exigentes. Desde transporte privado hasta chefs privados exclusivos.",
                exceptionalBtn: "Solicitar Presupuesto de Lujo"
            }
        },
        modal: {
            h3: "Solicitud de Concierge",
            p: "Personalizamos cada detalle de su estancia. Díganos qué necesita y nuestro equipo de expertos diseñará una propuesta a su medida.",
            personalize: "Deseo presupuesto personalizado de vacaciones de lujo",
            name: "Nombre y Apellidos",
            email: "Email de contacto",
            phone: "Teléfono",
            message: "¿Cómo podemos hacer su estancia inolvidable?",
            property: "Interesado en:",
            send: "Enviar Solicitud VIP",
            payDeposit: "Pagar fianza y reservar ahora",
            thanks: "¡Gracias por su confianza!",
            success: "Un gestor personal le contactará en menos de 24 horas."
        },
        site: {
            title: "CostaVisor | Luxury Vacations & Services in Nerja",
            description: "Servicios VIP en Nerja y Frigiliana. Villas de lujo, yates privados y concierge personalizado."
        },
        footer: {
            about: "Tu aliado local en Nerja y Frigiliana. Rastreamos los mejores presupuestos y servicios para que vivas la Costa del Sol sin pagar de más.",
            contact: "Atención al Cliente",
            links: "Explorar",
            services: "Presupuestos & Viajes",
            localPride: "CostaVisor es un proyecto local que nace en Nerja y está gestionado por personas de aquí. Al elegirnos, también estás apoyando al comercio local de nuestra zona.",
            ctaH3: "¿Hablamos?",
            ctaP: "Nuestro equipo está a tu disposición para cualquier petición especial o presupuesto a medida.",
            ctaButton: "Enviar Email Directo",
            rights: "CostaVisor © 2026. Todos los derechos reservados.",
            instagram: "costavisor",
            facebook: "nerja experience"
        },
        investors: {
            nav: { investor: "Inversores", home: "Inicio" },
            hero: {
                tag: "Relaciones con Inversores",
                h1: "Invirtiendo en el Futuro del Ocio",
                p: "En CostaVisor creemos en las relaciones de confianza. Unimos la eficiencia de la tecnología con el trato cercano de un socio local, haciendo que la gestión de servicios premium en la Costa del Sol sea sencilla, transparente y humana.",
                cta: "Contactar con nosotros"
            },
            whyUs: {
                title: "¿Por qué CostaVisor como su aliado?",
                desc: "Somos su mano derecha a la hora de comprar su propiedad, ya que somos locales y conocemos la zona perfectamente. Nuestro servicio es el de ayudarle y acompañarle en todo el proceso desde el inicio hasta el final.",
                items: [
                    {
                        title: "Búsqueda de Propiedades a Medida",
                        desc: "Si quieres te ayudamos a encontrar tu casa ideal en la Costa del Sol. Solo dinos tus gustos (montaña, vistas al mar, nº habitaciones...) y nos ponemos manos a la obra. Todas tus preferencias son ordenes para nosotros."
                    },
                    {
                        title: "Asesoramiento Completo",
                        desc: "Le acompañamos en todo el proceso de compra, ofreciéndole consejos expertos y transparencia total, sin letra pequeña."
                    },
                    {
                        title: "Reformas y Personalización",
                        desc: "Si su nueva vivienda necesita mejoras, le ayudamos con ello trabajando con las mejores empresas locales del sector."
                    },
                    {
                        title: "Gestión de Inversión",
                        desc: "Si su intención es invertir para alquiler vacacional, le ayudamos a gestionarlo para maximizar su rentabilidad."
                    }
                ],
                footer: "Siempre es mejor tener de aliado a alguien local de Nerja. Somos totalmente transparentes."
            },
            pillars: {
                title: "Nuestro Compromiso con la Transparencia",
                items: [
                    {
                        title: "Crecimiento Escalable",
                        desc: "Tecnología propia diseñada para escalar en regiones costeras de todo el mundo, empezando por el hub turístico más fuerte de España.",
                    },
                    {
                        title: "Gestión de Riesgos",
                        desc: "Trabajamos solo con proveedores de confianza y mantenemos un control riguroso de la calidad para garantizar tranquilidad a inversores y clientes.",
                    },
                    {
                        title: "Excelencia Operativa",
                        desc: "Gestión integral a cargo de expertos locales, orientada a construir relaciones duraderas con clientes y generar ingresos recurrentes.",
                    }
                ]
            },
            market: {
                tag: "Potencial de Mercado",
                h2: "Capturando el Auge Digital de la Costa del Sol",
                p: "Donde otros ven dispersión, nosotros vemos la necesidad de unir fuerzas. CostaVisor centraliza la excelencia local en una plataforma segura, ofreciendo a inversores y clientes la garantía de un ecosistema digital transparente, ordenado y de máxima calidad.",
                items: [
                    "Conexión directa y cercana con el residente internacional.",
                    "Nos ocupamos de todo: cuidado de la casa y atención personal 24/7.",
                    "Cuentas claras: transparencia total en ingresos y gestión.",
                    "Un modelo real que ya funciona y genera confianza en la zona."
                ],
                stat: "12M+",
                statDesc: "Visitantes Anuales"
            },
            form: {
                h2: "Conviértase en Socio Estratégico",
                p: "Deje sus datos y nos pondremos en contacto con usted para explorar cómo podemos colaborar en su próxima inversión.",
                name: "Nombre Completo",
                email: "Correo Electrónico",
                profile: "Perfil Profesional / Firma",
                profilePlaceholder: "Capital de Riesgo / Private Equity / Family Office",
                cta: "Enviar Consulta"
            }
        },
        blog: {
            readMore: "Leer más",
            posts: [
                {
                    slug: "frigiliana-nerja-secretos",
                    title: "Qué ver en Frigiliana y Nerja: Planes y Secretos",
                    excerpt: "Desde el Balcón de Europa hasta el barrio morisco. Descubra rutas de tapas auténticas, los mejores atardeceres y rincones con encanto local que solo nosotros conocemos.",
                },
                {
                    slug: "calas-secretas-barco",
                    title: "Calas Secretas de Nerja: Experiencia en Barco",
                    excerpt: "Navegue hacia Maro y Cantarriján para un día inolvidable lejos de las multitudes. Pregunte por nuestro servicio de catering a bordo para una experiencia perfecta de lujo y privacidad.",
                }
            ]
        },
        guide_posts: {
            "frigiliana-nerja-secretos": {
                title: "Qué ver en Frigiliana y Nerja: Planes y Secretos",
                image: "/exp-nature.png",
                content: `
                    Explorar Nerja y Frigiliana es sumergirse en la esencia más pura de Andalucía. Aquí te revelamos algunos de nuestros secretos mejor guardados:
                    
                    1. **El Barrio Morisco de Frigiliana**: Piérdete por sus calles de noche, cuando el silencio y la iluminación suave te transportan a otra época.
                    2. **Vistas desde el 'Bendito'**: Un rincón menos conocido que el Balcón de Europa con unas vistas espectaculares y más tranquilidad.
                    3. **Rutas de Tapas Auténticas**: Evita las trampas para turistas. Te llevaremos a esos bares donde el pulpo o la magreta son leyendas locales.
                    4. **Atardeceres en el Chillar**: El reflejo del sol en las pozas naturales al final del día es mágico.
                    
                    ¿Buscas algo más específico? Si necesitas un guía privado, una reserva en el restaurante más exclusivo o cualquier otra petición que no veas en nuestra web, **haremos lo posible por ayudarle**.
                `
            },
            "calas-secretas-barco": {
                title: "Calas Secretas de Nerja: Experiencia en Barco",
                image: "/exp-boat.png",
                content: `
                    Navegar por los acantilados de Maro-Cerro Gordo es entrar en un paraíso virgen. Nuestra experiencia en barco va mucho más allá de un simple paseo:
                    
                    *   **Privacidad Total**: Solo tú y los tuyos. Sin aglomeraciones, sin prisas.
                    *   **Acceso Exclusivo**: Visitamos calas y cascadas que solo se pueden ver desde el mar.
                    *   **Ideal para Eventos**: Ya sea una reunión familiar, un grupo de amigos, una despedida de soltero o una fiesta privada, diseñamos la salida a tu medida.
                    *   **Catering a Bordo**: Podemos organizar desde un aperitivo de productos locales hasta un almuerzo gourmet mientras fondeas en aguas cristalinas.
                    
                    Nuestro equipo actúa como tu anfitrión local, asesorándote sobre las mejores zonas para fondear según el viento y el mar para que tu única preocupación sea disfrutar.
                    
                    **Peticiones Especiales**: Si sueñas con una pedida de mano en el mar, música en vivo a bordo o cualquier otra idea loca, dínoslo. **Si no está en la web, lo buscaremos para ti**.
                `
            }
        },

        vacationPackages: {
            tag: "Packs de Vacaciones",
            h2: "Packs de Vacaciones Personalizados",
            p: "Diseña tu escapada ideal o elige entre nuestras propuestas curadas. Nos encargamos de todo para que solo tengas que disfrutar.",
            whatIncludes: {
                title: "¿Qué incluye nuestro servicio?",
                items: [
                    {
                        title: "Alojamiento Ideal",
                        desc: "Buscamos la opción perfecta según zona, estilo y presupuesto."
                    },
                    {
                        title: "Transparencia Total",
                        desc: "Te mostramos fotos, descripción y ubicación exacta antes de reservar."
                    },
                    {
                        title: "Precio Cerrado",
                        desc: "Sin sorpresas. Te damos un precio final. Nada se cierra sin tu OK previo."
                    },
                    {
                        title: "Gestión Completa",
                        desc: "Contactamos, confirmamos y gestionamos todas las reservas por ti."
                    },
                    {
                        title: "Soporte Continuo",
                        desc: "Te ayudamos antes de decidir y durante tu estancia si tienes dudas."
                    }
                ]
            },
            packages: [
                {
                    id: "essential",
                    name: "Pack Essential",
                    tagline: "El básico inteligente",
                    badge: "Económico & Real",
                    description: "Ideal para quienes buscan calidad y autenticidad sin pagar de más. Todo lo necesario a precio local.",
                    includes: [
                        "Búsqueda de alojamiento económico (apartamento, hostal o habitación privada)",
                        "Billetes de bus desde el aeropuerto",
                        "Gestión completa de reservas",
                        "Recomendaciones locales de restaurantes y playas",
                        "Soporte por WhatsApp durante tu estancia"
                    ],
                    idealFor: "Viajeros conscientes del presupuesto que quieren asistencia sin pagar de más.",
                    youReceive: [
                        "Propuesta detallada de alojamiento con fotos y ubicación",
                        "Instrucciones de transporte paso a paso",
                        "Reserva confirmada y documentos de viaje",
                        "Guía local con sitios recomendados"
                    ]
                },
                {
                    id: "comfort",
                    name: "Pack Comfort",
                    tagline: "El favorito de los locales",
                    badge: "Más Popular",
                    description: "El equilibrio perfecto entre comodidad, experiencias auténticas y ahorro real.",
                    includes: [
                        "Alojamiento de calidad media-alta (apartamento premium o hotel boutique)",
                        "Coche de alquiler o traslados privados desde el aeropuerto",
                        "2 experiencias incluidas (Ruta Acebuchal + Yoga & Relax)",
                        "Gestión completa de reservas",
                        "Asistencia VIP durante tu estancia"
                    ],
                    idealFor: "Familias y parejas que buscan unas vacaciones completas sin estrés.",
                    youReceive: [
                        "Propuesta detallada de alojamiento premium",
                        "Vehículo de alquiler reservado o traslados confirmados",
                        "Confirmación de 2 experiencias exclusivas",
                        "Itinerario personalizado día a día",
                        "Asistencia VIP 24/7"
                    ]
                },
                {
                    id: "premium",
                    name: "Pack Premium",
                    tagline: "La experiencia VIP definitiva",
                    badge: "Acceso Exclusivo",
                    description: "El nivel más alto de exclusividad. Disfruta de la Costa del Sol con privilegios de local VIP y servicios de lujo sin límites.",
                    includes: [
                        "Villa privada de lujo con vistas o suite premium con servicios cinco estrellas",
                        "Traslado privado VIP desde el aeropuerto",
                        "4 experiencias exclusivas (Magic Table + Ruta en Barco + Buggy + Diving)",
                        "Chef privado a domicilio (1 sesión)",
                        "Concierge dedicado 24/7",
                        "Gestión integral: desde reservas hasta recomendaciones personalizadas"
                    ],
                    idealFor: "Quienes buscan lo mejor sin límites y desean ser atendidos como VIPs.",
                    youReceive: [
                        "Propuesta detallada de villa de lujo o suite premium",
                        "Conductor privado en vehículo premium",
                        "Confirmación de 4 experiencias exclusivas",
                        "Chef privado reservado con menú personalizado",
                        "Itinerario VIP diseñado a medida",
                        "Asistencia de concierge dedicado"
                    ]
                }
            ],
            customize: {
                title: "¿Quieres diseñar tu propio pack?",
                description: "Explora nuestro catálogo completo de experiencias y elige tus favoritas. Con tu selección, diseñaremos un paquete a tu medida, adaptado a tus gustos y presupuesto.",
                buttonText: "Ver Todas las Experiencias"
            },
            cta: {
                buttonText: "Solicitar Información",
                title: "¿Listo para tu escapada perfecta?",
                description: "Cuéntanos tus preferencias y diseñaremos el pack ideal para ti."
            }
        },
        tracking: {
            title: "¿Qué rastreamos por ti?",
            items: [
                {
                    icon: "🏡",
                    title: "Alojamientos con valor real",
                    desc: "Filtramos villas y suites que no solo son bonitas, sino que tienen un precio justo y una ubicación estratégica. Sin sorpresas al llegar."
                },
                {
                    icon: "🍽️",
                    title: "Gastronomía sin 'tasa turística'",
                    desc: "Te decimos dónde comen los locales. Los mejores sabores de la Axarquía sin pagar por la etiqueta o la ubicación frente al mar."
                },
                {
                    icon: "🌿",
                    title: "Experiencias de Insider",
                    desc: "Rastreamos actividades auténticas que no aparecen en los folletos de hoteles. La verdadera esencia de Málaga, lejos de las masas."
                },
                {
                    icon: "🛠️",
                    title: "Soporte Local Premium",
                    desc: "Desde reservas de último minuto hasta soluciones rápidas durante tu estancia. Estamos aquí para lo que surja."
                },
                {
                    icon: "💼",
                    title: "Oportunidades de Inversión",
                    desc: "Análisis honesto del mercado. Buscamos propiedades con potencial real de rentabilidad, sin 'maquillaje' comercial."
                }
            ]
        },
        vacationDesigner: {
            step1: {
                title: "¿Qué estílo de viaje buscas?",
                subtitle: "Elige la vibra que mejor encaja contigo",
                options: {
                    relax: "Relax & Desconexión",
                    adventure: "Aventura & Naturaleza",
                    culture: "Cultura & Gastronomía",
                    party: "Fiesta & Eventos"
                }
            },
            step2: {
                title: "¿Quién te acompaña?",
                subtitle: "Para ajustar el alojamiento y las actividades",
                options: {
                    couple: "En Pareja",
                    family: "Familia con Niños",
                    friends: "Grupo de Amigos",
                    solo: "Viajero Solo"
                }
            },
            step3: {
                title: "¿Cuántos días?",
                subtitle: "Duración aproximada de tu estancia",
                days: "días"
            },
            step4: {
                title: "¿Cuál es tu presupuesto ideal?",
                subtitle: "Nivel de exclusividad y servicios",
                options: {
                    smart: {
                        label: "Smart Local",
                        desc: "Lo mejor de la zona a precio local. Calidad sin lujos innecesarios."
                    },
                    premium: {
                        label: "Premium Comfort",
                        desc: "Villas con encanto, experiencias privadas y más comodidad."
                    },
                    luxury: {
                        label: "Lujo Total",
                        desc: "Sin límites. Yates, chefs privados y las mejores villas de la costa."
                    }
                }
            },
            result: {
                title: "Tu Viaje Ideal Estimado",
                subtitle: "Basado en tus preferencias",
                priceRange: "Rango de Precio Estimado",
                perPerson: "por persona",
                disclaimer: {
                    title: "Nota Importante sobre el Precio",
                    text: "Este presupuesto es una estimación orientativa basada en precios medios de temporada. Los costes de alojamiento en la Costa del Sol varían dinámica según la fecha exacta y la disponibilidad. Para un precio cerrado y garantizado, contáctanos."
                },
                cta: "Solicitar Disponibilidad Real",
                whatsappMessage: "Hola CostaVisor, he diseñado mi viaje: {style}, {company}, {days} días, Nivel {budget}. Presupuesto est: {price}. ¿Podemos ver opciones reales?"
            }
        },
        investors: {
            nav: { investor: "Inversores (y tranquilidad)", home: "Inicio" },
            hero: {
                tag: "Inversión Sin Dolores de Cabeza",
                h1: "Invertir en Nerja debería ser <span class='text-secondary italic'>fácil y rentable</span>",
                p: "Olvídate de las agencias que solo quieren venderte la casa y desaparecer. Nosotros somos tu socio local: te ayudamos a comprar, reformamos lo que haga falta y gestionamos el alquiler. Todo en uno.",
                cta: "Hablemos de Números"
            },
            whyUs: {
                title: "¿Por qué confiar en CostaVisor?",
                desc: "Porque vivimos aquí, conocemos cada calle y tenemos las herramientas para cuidar tu inversión como si fuera nuestra.",
                items: [
                    {
                        title: "Compramos Bien (Con Datos)",
                        desc: "No nos dejamos llevar por 'corazonadas'. Analizamos qué propiedades tienen potencial real de alquiler turístico para que tu dinero rinda desde el día uno."
                    },
                    {
                        title: "Reformas Sin Sorpresas",
                        desc: "Con nuestra constructora (JD Builders), transformamos propiedades viejas en joyas turísticas. Precio cerrado y fecha garantizada. Sin líos."
                    },
                    {
                        title: "Gestión Total (De verdad)",
                        desc: "Limpieza, check-in, mantenimiento... Tú no tienes que levantar un dedo. Solo recibes los informes y los ingresos cada mes."
                    },
                    {
                        title: "Tu Socio Local",
                        desc: "Si hay una fuga de agua o un papel que firmar, ahí estamos nosotros. Eres dueño de una casa en la playa, no de un problema."
                    }
                ],
                footer: "Más que una inmobiliaria, somos tu equipo sobre el terreno en Nerja."
            },
            pillars: {
                title: "Nuestro Método: Tranquilidad Total",
                items: [
                    {
                        title: "1. Encontramos",
                        desc: "Buscamos esa 'joya oculta' con potencial que otros no ven.",
                    },
                    {
                        title: "2. Transformamos",
                        desc: "La convertimos en un alojamiento 5 estrellas (si hace falta).",
                    },
                    {
                        title: "3. Rentabilizamos",
                        desc: "La llenamos de huéspedes felices que pagan tarifas premium.",
                    }
                ]
            },
            market: {
                tag: "El Momento es Ahora",
                h2: "Nerja está de moda, pero hay que saber moverse",
                p: "El turismo en la Costa del Sol no para de crecer. Pero para ganar dinero de verdad, necesitas destacar. Nosotros hacemos que tu propiedad sea la que todos quieren reservar.",
                items: [
                    "Trato directo y cercano (somos personas, no robots).",
                    "Cuidamos tu casa mejor que la nuestra.",
                    "Cuentas claras: transparencia total en gastos e ingresos.",
                    "Experiencia real: ya gestionamos con éxito propiedades en la zona."
                ],
                stat: "Top",
                statDesc: "Destino Turístico"
            },
            form: {
                h2: "¿Te interesa invertir sin líos?",
                p: "Déjanos tus datos. Sin compromiso. Nos tomamos un café (o una videollamada) y vemos cómo podemos ayudarte a ganar dinero en Nerja.",
                name: "Tu Nombre",
                email: "Tu Correo",
                profile: "¿Qué buscas? (Ej: Comprar, Reformar, Gestionar...)",
                profilePlaceholder: "Busco comprar para alquilar...",
                cta: "Contactar con el Equipo"
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            accommodations: "Villas & Suites",
            experiences: "Experiences",
            packages: "Vacation Packages",
            services: "Concierge",
            investors: "Investors",
            book: "Design My Trip"
        },
        vacationDesigner: {
            step1: {
                title: "What is your travel style?",
                subtitle: "Choose the vibe that fits you best",
                options: {
                    relax: "Relax & Disconnect",
                    adventure: "Adventure & Nature",
                    culture: "Culture & Gastronomy",
                    party: "Party & Events"
                }
            },
            step2: {
                title: "Who are you traveling with?",
                subtitle: "To adjust accommodation and activities",
                options: {
                    couple: "Couple",
                    family: "Family with Kids",
                    friends: "Group of Friends",
                    solo: "Solo Traveler"
                }
            },
            step3: {
                title: "How many days?",
                subtitle: "Approximate duration of your stay",
                days: "days"
            },
            step4: {
                title: "What is your ideal budget?",
                subtitle: "Level of exclusivity and services",
                options: {
                    smart: {
                        label: "Smart Local",
                        desc: "The best of the area at local prices. Quality without unnecessary luxury."
                    },
                    premium: {
                        label: "Premium Comfort",
                        desc: "Charming villas, private experiences, and extra comfort."
                    },
                    luxury: {
                        label: "Total Luxury",
                        desc: "No limits. Yachts, private chefs, and the best villas on the coast."
                    }
                }
            },
            result: {
                title: "Your Estimated Ideal Trip",
                subtitle: "Based on your preferences",
                priceRange: "Estimated Price Range",
                perPerson: "per person",
                disclaimer: {
                    title: "Important Price Note",
                    text: "This budget is an indicative estimate based on average seasonal prices. Accommodation costs on the Costa del Sol vary dynamically depending on exact dates and availability. Contact us for a guaranteed final price."
                },
                cta: "Request Real Availability",
                whatsappMessage: "Hi CostaVisor, I designed my trip: {style}, {company}, {days} days, {budget} Level. Est budget: {price}. Can we check real options?"
            }
        },
        hero: {
            tag: "Nerja & Frigiliana | Luxury Services",
            h1: "Nerja & Frigiliana's Best Kept Secret",
            p: "Access private villas, boat experiences, and hidden spots not found in guidebooks. We are your local host for a different, exclusive, and hassle-free journey.",
            cta: "Explore Experiences",
            cta2: "Our Services",
            localPrideShort: "100% Local Project: Born in Nerja, supporting the commerce of our area."
        },
        services: {
            tag: "Concierge Services",
            h2: "Bespoke attention for demanding tastes",
            p: "We handle every detail so your only task is to enjoy paradise.",
            items: [
                {
                    title: "Charming Villas & Suites",
                    desc: "A curated selection of unique properties. Far from the noise, close to the essence.",
                    features: ["Private Staff", "Prime Locations", "Total Privacy"]
                },
                {
                    title: "Signature Experiences",
                    desc: "From sailing in untouched areas to private chefs in your villa. We design moments you'll remember forever.",
                    features: ["Exclusive Access", "Local Guides", "Fully Tailored"]
                },
                {
                    title: "Concierge 24/7",
                    desc: "Your personal assistant at the destination. VIP reservations, transport, and any whim you may have.",
                    features: ["Bilingual Support", "Fast Response", "Local Knowledge"]
                }
            ]
        },
        portfolio: {
            tag: "Exclusive Experiences",
            h2: "Book Your CostaVisor Moment",
            p: "Selection of private activities designed to exceed your highest expectations.",
            depositNote: "To book, you will only pay 20% of the price; the rest is paid on arrival.",
            payNow: "Book Now (Pay Deposit)",
            inquireText: "Request VIP Information",
            items: [
                {
                    title: "Private Coastline Navigation",
                    category: "Exclusive",
                    image: "/exp-boat.png",
                    slug: "sunset-boat-trip",
                    price: "from 350",
                    duration: "4h",
                    maxPax: "8",
                    location: "Nerja Harbor / Maro",
                    description: "Enjoy the Costa del Sol from a unique perspective. Sail on a premium vessel along the stunning Maro cliffs, visiting sea caves and crystal-clear coves inaccessible by land.\n\nThis experience is ideal for families looking for a different day out, groups of friends, bachelor/bachelorette parties, or private celebrations. Our team will guide and advise you at all times to ensure the day is perfect.\n\nRemember: if you need any service or detail not shown on our website, we will do our best to help with your request.",
                    highlights: ["Private premium yacht", "Ideal for families & groups", "Parties & Celebrations", "Full local guidance"]
                },
                {
                    title: "Cocktail Experience",
                    category: "Events",
                    image: "/exp-cocktail.jpg",
                    slug: "cocktail-experience",
                    price: "Inquire",
                    duration: "Custom",
                    maxPax: "Up to 50",
                    location: "Your Villa / Event",
                    description: "We bring the best cocktails to your private event. Professional bartenders, mobile bar, and a cocktail menu designed for you.",
                    highlights: ["Mobile Bar", "PRO Mixologists", "Custom Menu", "Setup Included"]
                },
                {
                    title: "Acebuchal Route",
                    category: "Private Route",
                    image: "/exp-acebuchal.jpg",
                    slug: "acebuchal-route",
                    price: "Inquire",
                    duration: "4h",
                    maxPax: "8",
                    location: "El Acebuchal",
                    description: "A journey to the past in the heart of Axarquia. Discover 'The Ghost Village', its history of resilience, and authentic cuisine. Optional extra: 125cc Motorbike Route.",
                    highlights: ["Rebuilt village", "Local gastronomy", "Scenic route", "Moto 125cc Option"]
                },
                {
                    title: "Frigiliana Retreat",
                    category: "Wellness",
                    image: "/exp-nature.png",
                    slug: "hiking-nature",
                    price: "0",
                    duration: "Full Day",
                    maxPax: "12",
                    location: "Frigiliana",
                    description: "Connect with nature in Spain's most beautiful village. Guided hiking through the natural park, followed by meditation overlooking the Mediterranean.",
                    highlights: ["Local expert guide", "Gourmet picnic", "Panoramic views"]
                },
                {
                    title: "Motorbike 125 Routes",
                    category: "Adventure",
                    image: "/exp-moto.jpg",
                    slug: "moto-route",
                    price: "95",
                    duration: "3h",
                    maxPax: "6",
                    location: "Costa del Sol",
                    description: "Feel the breeze on your face riding through the most spectacular roads of the coast and white villages on our 125cc motorcycles with a local guide.",
                    highlights: ["New motorbikes", "Local guide", "Snack included", "Scenic route"]
                },
                {
                    title: "Bike Routes",
                    category: "Sport",
                    image: "/exp-bike.jpg",
                    slug: "bike-route",
                    price: "50",
                    duration: "2-3h",
                    maxPax: "10",
                    location: "Nerja / Maro",
                    description: "A healthy and fun way to explore the surroundings. Routes adapted to all levels through natural and coastal trails.",
                    highlights: ["High-end bikes", "Helmet included", "Hydration", "Sports guide"]
                },
                {
                    title: "Buggy Routes",
                    category: "Adventure",
                    image: "/exp-buggy.jpg",
                    slug: "buggy-route",
                    price: "200",
                    duration: "2h",
                    maxPax: "8",
                    location: "Nerja Mountains",
                    description: "For adrenaline lovers, this is your experience. Explore rural paths, mountains, and natural landscapes with a local guide. A totally safe and fun experience.",
                    highlights: ["Pure adrenaline", "Rural paths", "Expert guide", "100% Safety"]
                },
                {
                    title: "Tennis & Catering",
                    category: "Lifestyle",
                    image: "/exp-tennis.jpg",
                    slug: "tennis-catering",
                    price: "30",
                    duration: "3h",
                    maxPax: "4",
                    location: "Private Club",
                    description: "Enjoy a tennis day with your friends or family on a private court and enjoy a homemade catering with local products.",
                    highlights: ["Private court", "Min. 30€ per person", "Homemade catering", "Local products"]
                },
                {
                    title: "Magic Table",
                    category: "Gastronomy",
                    image: "/exp-magic.jpg",
                    slug: "magic-table",
                    price: "75",
                    duration: "Private session",
                    maxPax: "Min. 4",
                    location: "Your Own Accommodation (Home Service)",
                    description: "Private chef + magic show, a unique and different experience. If you met us at New Town Restaurant Nerja, you enjoyed our surprise tapas. Now we bring the essence of New Town to your home. You can also enjoy our paellas or BBQs. We design the experience to your liking and listen to your suggestions.",
                    highlights: ["Private magic show", "New Town Essence", "Minimum 4 people", "Paellas & BBQs"],
                    externalLink: "https://www.google.com/search?q=newtown+restaurante+nerja",
                    partnerLogo: "/logo-newtown.jpg"
                },
                {
                    title: "Diving Costa del Sol",
                    category: "Adventure",
                    image: "/exp-diving.jpg",
                    slug: "diving",
                    price: "Inquire",
                    duration: "3h",
                    maxPax: "6",
                    location: "Maro Natural Reserve",
                    description: "Discover the underwater world of the Costa del Sol. Dives adapted to your level in crystal-clear waters full of marine life.",
                    highlights: ["Full equipment", "PADI instruction", "Underwater photos", "Crystal waters"]
                },
                {
                    title: "Canyoning",
                    category: "Extreme",
                    image: "/exp-canyoning.jpg",
                    slug: "canyoning",
                    price: "65",
                    duration: "4h",
                    maxPax: "10",
                    location: "Rio Verde / Chillar",
                    description: "Descend through natural canyons, jump into turquoise water pools, and enjoy the wildest geology with experts.",
                    highlights: ["Harness and Wetsuit", "Qualified guides", "Insurance included", "Maximum adventure"]
                },
                {
                    title: "Fly Costa del Sol",
                    category: "Air",
                    image: "/exp-fly.jpg",
                    slug: "fly-costa-del-sol",
                    price: "180",
                    duration: "20-30min",
                    maxPax: "1",
                    location: "Takeoff from Coast",
                    description: "Feel absolute freedom flying over the Mediterranean. A unique flight experience with the best panoramic views of Nerja.",
                    highlights: ["Tandem pilot", "Amazing views", "Opt. HD Recording", "Unique feeling"]
                },
                {
                    title: "Yoga & Relax",
                    category: "Wellness",
                    image: "/exp-yoga.jpg",
                    slug: "yoga-relax",
                    price: "0",
                    duration: "90min",
                    maxPax: "15",
                    location: "Villa / Beach",
                    description: "Personalized yoga and deep relaxation session. Option to book a spa, massage, or both if you wish to complete a day of total disconnection. Price per session.",
                    highlights: ["Mats included", "Opt. Massage/Spa", "Book Massage + Spa", "Inner peace"]
                },
                {
                    title: "Motril Rum Factory",
                    category: "Cultural",
                    image: "/exp-rum.jpg",
                    slug: "ron-granada",
                    price: "35",
                    duration: "2h",
                    maxPax: "20",
                    location: "Motril (Granada)",
                    description: "It is one of the only wineries open to the public in Motril (Granada). They will explain their production process and you can enjoy an authentic tasting of their legendary rum.",
                    highlights: ["Tasting included", "Winery access", "Local history", "Exclusive gift"]
                },
                {
                    title: "Historic Granada Tour",
                    category: "Cultural",
                    image: "/exp-granada.jpg",
                    slug: "granada-historica",
                    price: "0",
                    duration: "",
                    maxPax: "15",
                    location: "Granada",
                    description: "Discover the secrets of the Alhambra, the Generalife, and the exquisite gastronomy of Granada on an exclusive guided visit. Explore the historic neighborhoods of Albaicín and Sacromonte with local experts, immersing yourself in Granada's rich history and culture.",
                    highlights: ["Alhambra + Generalife entry & guide", "Albaicín and Sacromonte tour", "Private transport from Nerja", "Expert local history guide"]
                },
                {
                    title: "Malaga Art & Port",
                    category: "Cultural",
                    image: "/exp-malaga.jpg",
                    slug: "malaga-arte-puerto",
                    price: "0",
                    duration: "",
                    maxPax: "15",
                    location: "Malaga City",
                    description: "Immerse yourself in Malaga's art and culture by visiting the Picasso Museum, the Moorish Alcazaba, and the vibrant historic center. End the day enjoying Malaga Port and its gastronomy.",
                    highlights: ["Picasso Museum and Alcazaba", "Guided historic center", "Malaga Port", "Transport included from Nerja"]
                },
                {
                    title: "Ronda White Villages",
                    category: "Private Route",
                    image: "/exp-nature.png",
                    slug: "ronda-pueblos-blancos",
                    price: "70",
                    duration: "",
                    maxPax: "12",
                    location: "Ronda & Mountains",
                    description: "Visit one of Andalusia's most spectacular cities. Cross the iconic New Bridge, explore the historic center, and discover an authentic white village on the way back. An unforgettable journey through the Serrania de Ronda.",
                    highlights: ["New Bridge and Ronda Gorge", "Historic center and bullring", "White village enroute", "Expert local guide"]
                }
            ]
        },
        customTravel: {
            tag: "Custom Trips",
            title: "Design Your Ideal Route",
            subtitle: "Costa del Sol, Granada, Malaga and all of Andalusia",
            description: "Want to visit a specific place or design your own itinerary? We organize your perfect trip to any destination. You decide the place, we take care of the rest.",
            features: [
                {
                    title: "Guided routes by local experts",
                    desc: "Deep knowledge of each destination"
                },
                {
                    title: "Private transportation included",
                    desc: "Comfort from your accommodation"
                },
                {
                    title: "We adapt the itinerary to your tastes",
                    desc: "Fully customizable and flexible"
                },
                {
                    title: "From 2 up to 50 people",
                    desc: "For couples, families or large groups"
                }
            ],
            destinations: "Granada • Malaga • Cordoba • Seville • Ronda • White Villages • And much more",
            cta: "Plan My Trip"
        },
        specialRequest: {
            title: "Can't find what you're looking for?",
            message: "If there is something you would like to have but you don't find it on our website, don't worry. Tell us what it is and we will do our best to get it for you: a special service, a unique activity, or any personalized request.",
            cta: "Tell us what you need"
        },
        localServices: {
            tag: "Smart Local Services",
            h2: "Your trusted logistics on the coast",
            p: "We manage your transfers and rentals with the guarantee that you're not paying a penny more.",
            vipAssistance: "Local Expert Assistance",
            items: [
                {
                    title: "Airport Transfers",
                    desc: "Direct pickup with no waits or hidden fees. Local comfort at the best price.",
                    image: "/exp-villa.png"
                },
                {
                    title: "Car Rental",
                    desc: "Access the most modern local fleet with transparent conditions and real assistance.",
                    image: "/exp-villa.png"
                },
                {
                    title: "Motorbike Rental",
                    desc: "The best way to move around the white villages avoiding tourist traffic jams.",
                    image: "/exp-nature.png"
                },
                {
                    title: "Motorhome Rental",
                    desc: "Explore the coast with total freedom and recommendations of the best routes.",
                    image: "/exp-nature.png"
                }
            ]
        },
        guide: {
            tag: "The Good Life Guide",
            h2: "Nerja & Frigiliana Insider",
            p: "Best-kept secrets for the distinguished traveler."
        },
        testimonials: {
            tag: "Our Clients",
            h2: "Voices of Trust",
            p: "The satisfaction of those who demand the best.",
            items: [
                {
                    name: "Marta Sánchez",
                    role: "Homeowner in Frigiliana",
                    content: "The management of my villa has been flawless since I trusted CostaVisor. Professionalism and closeness at all times.",
                    stars: 5
                },
                {
                    name: "James Wilson",
                    role: "International Investor",
                    content: "The boat trip along the Maro cliffs was the highlight of our vacation. Top-notch service!",
                    stars: 5
                },
                {
                    name: "Pedro Gómez",
                    role: "Family Office Manager",
                    content: "They helped me find the perfect property and now they handle everything with an European quality standard.",
                    stars: 5
                }
            ]
        },
        accommodations: {
            tag: "Villas & Suites",
            h2: "Your Mediterranean Sanctuary at Local Prices",
            p: "Discover our private collection of premium properties, selected for their design, location, and real value.",
            filters: {
                all: "All properties",
                villa: "Luxury Villas",
                apartment: "Premium Apartments",
                countryside: "Exclusive Estates",
                hotel: "Boutique Hotels",
                hostel: "Design Suites"
            },
            items: [
                { id: 1, type: "villa", title: "Royal Panorama Villa", loc: "Punta Lara, Nerja", price: "From 450€/night", image: "/exp-villa.png" },
                { id: 2, type: "apartment", title: "Blue Horizon Penthouse", loc: "Burriana Beach", price: "From 200€/night", image: "/exp-apt.png" },
                { id: 3, type: "countryside", title: "Olive Grove Estate", loc: "Frigiliana Road", price: "From 320€/night", image: "/exp-nature.png" },
                { id: 4, type: "hotel", title: "Old Town Boutique Suites", loc: "Nerja Historic Center", price: "From 280€/night", image: "/exp-villa.png" }
            ],
            cta: {
                checkAvailability: "Check Availability",
                exceptionalTitle: "Looking for something truly exceptional?",
                exceptionalDesc: "Our concierge team designs bespoke vacations for the most discerning tastes. From private transport to exclusive private chefs.",
                exceptionalBtn: "Request Luxury Quote"
            }
        },
        modal: {
            h3: "Concierge Request",
            p: "We personalize every detail of your stay. Tell us what you need and our expert team will design a bespoke proposal.",
            personalize: "I want a personalized luxury vacation quote",
            name: "Full Name",
            email: "Contact Email",
            phone: "Phone Number",
            message: "How can we make your stay unforgettable?",
            property: "Interested in:",
            send: "Submit VIP Request",
            payDeposit: "Pay deposit and book now",
            thanks: "Thank you for your trust!",
            success: "A personal manager will contact you within 24 hours."
        },
        site: {
            title: "CostaVisor | Luxury Vacations & Services in Nerja",
            description: "VIP services in Nerja and Frigiliana. Luxury villas, private yachts, and personalized concierge."
        },
        footer: {
            about: "Your local ally in Nerja and Frigiliana. We track the best quotes and services so you can enjoy the Costa del Sol without overpaying.",
            contact: "Customer Support",
            links: "Explore",
            services: "Quotes & Travel",
            localPride: "CostaVisor is a local project born in Nerja and managed by local people. By choosing us, you are also supporting the local commerce of our area.",
            ctaH3: "Want to talk?",
            ctaP: "Our team is at your disposal for any special request or custom quote.",
            ctaButton: "Send Direct Email",
            rights: "CostaVisor © 2026. All rights reserved.",
            instagram: "costavisor",
            facebook: "nerja experience"
        },
        investors: {
            nav: { investor: "Investors (Peace of Mind)", home: "Home" },
            hero: {
                tag: "Hassle-Free Investment",
                h1: "Investing in Nerja should be <span class='text-secondary italic'>easy and profitable</span>",
                p: "Forget about agencies that just want to sell you the house and disappear. We are your local partner: we help you buy, we renovate what's needed, and we manage the rental. All in one.",
                cta: "Let's Talk Numbers"
            },
            whyUs: {
                title: "Why trust CostaVisor?",
                desc: "Because we live here, we know every street, and we have the tools to care for your investment as if it were our own.",
                items: [
                    {
                        title: "We Buy Well (Data-Driven)",
                        desc: "We don't go by 'hunches'. We analyze which properties have real vacation rental potential so your money works for you from day one."
                    },
                    {
                        title: "Renovations Without Surprises",
                        desc: "With our construction company (JD Builders), we transform old properties into tourist gems. Fixed price and guaranteed date. No mess."
                    },
                    {
                        title: "Total Management (For Real)",
                        desc: "Cleaning, check-in, maintenance... You don't have to lift a finger. You just receive the reports and income every month."
                    },
                    {
                        title: "Your Local Partner",
                        desc: "If there is a water leak or a paper to sign, we are there. You own a beach house, not a problem."
                    }
                ],
                footer: "More than a real estate agency, we are your team on the ground in Nerja."
            },
            pillars: {
                title: "Our Method: Total Peace of Mind",
                items: [
                    {
                        title: "1. We Find",
                        desc: "We look for that 'hidden gem' with potential that others don't see.",
                    },
                    {
                        title: "2. We Transform",
                        desc: "We turn it into a 5-star accommodation (if needed).",
                    },
                    {
                        title: "3. We Monetize",
                        desc: "We fill it with happy guests paying premium rates.",
                    }
                ]
            },
            market: {
                tag: "The Time is Now",
                h2: "Nerja is trending, but you need to know how to move",
                p: "Tourism in the Costa del Sol keeps growing. But to make real money, you need to stand out. We make your property the one everyone wants to book.",
                items: [
                    "Direct and close treatment (we are people, not robots).",
                    "We care for your house better than our own.",
                    "Clear accounts: total transparency in expenses and income.",
                    "Real experience: we already manage successful properties in the area."
                ],
                stat: "Top",
                statDesc: "Tourist Destination"
            },
            form: {
                h2: "Interested in investing without the hassle?",
                p: "Leave us your details. No strings attached. Let's have a coffee (or a video call) and see how we can help you make money in Nerja.",
                name: "Your Name",
                email: "Your Email",
                profile: "What are you looking for? (e.g., Buy, Renovate, Manage...)",
                profilePlaceholder: "Looking to buy to rent...",
                cta: "Contact the Team"
            }
        },
        blog: {
            readMore: "Leer más",
            posts: [
                {
                    slug: "frigiliana-nerja-secretos",
                    title: "Qué ver en Frigiliana y Nerja: Planes y Secretos",
                    excerpt: "Desde el Balcón de Europa hasta el barrio morisco. Descubra rutas de tapas auténticas, los mejores atardeceres y rincones con encanto local que solo nosotros conocemos.",
                },
                {
                    slug: "calas-secretas-barco",
                    title: "Calas Secretas de Nerja: Experiencia en Barco",
                    excerpt: "Navegue hacia Maro y Cantarriján para un día inolvidable lejos de las multitudes. Pregunte por nuestro servicio de catering a bordo para una experiencia perfecta de lujo y privacidad.",
                }
            ]
        },
        guide_posts: {
            "frigiliana-nerja-secretos": {
                title: "What to see in Frigiliana and Nerja: Plans and Secrets",
                image: "/exp-nature.png",
                content: `
                    Exploring Nerja and Frigiliana is to immerse yourself in the purest essence of Andalusia. Here we reveal some of our best-kept secrets:
                    
                    1. **The Moorish Quarter of Frigiliana**: Lose yourself in its streets at night, when silence and soft lighting transport you to another era.
                    2. **Views from 'Bendito'**: A lesser-known corner than the Balcón de Europa with spectacular views and more tranquility.
                    3. **Authentic Tapas Routes**: Avoid tourist traps. We will take you to those bars where octopus or 'magreta' are local legends.
                    4. **Sunsets in the Chillar**: The reflection of the sun on the natural pools at the end of the day is magical.
                    
                    Looking for something more specific? If you need a private guide, a reservation at the most exclusive restaurant, or any other request not on our website, **we will do our best to help you**.
                `
            },
            "calas-secretas-barco": {
                title: "Secret Coves of Nerja: Boat Experience",
                image: "/exp-boat.png",
                content: `
                    Sailing through the Maro-Cerro Gordo cliffs is to enter a virgin paradise. Our boat experience goes far beyond a simple stroll:
                    
                    *   **Total Privacy**: Just you and yours. No crowds, no rush.
                    *   **Exclusive Access**: We visit coves and waterfalls that can only be seen from the sea.
                    *   **Ideal for Events**: Whether it's a family gathering, a group of friends, a bachelor/bachelorette party, or a private celebration, we design the outing to your measure.
                    *   **Onboard Catering**: We can organize everything from a snack of local products to a gourmet lunch while you anchor in crystal-clear waters.
                    
                    Our team acts as your local host, advising you on the best areas to anchor according to the wind and sea so your only concern is to enjoy.
                    
                    **Special Requests**: If you dream of a wedding proposal at sea, live music on board, or any other crazy idea, tell us. **If it's not on the web, we'll find it for you**.
                `
            }
        },
        maintenance: {
            tag: "Looking for a home quote?",
            h2: "Click here if you are looking for a renovation quote for your home",
            p: "Don't waste time comparing alone. We track Nerja, Frigiliana, and the Costa del Sol to get you the best value in quotes for your home. We speak native Spanish and English for close management. Because there's nothing more rewarding than investing in the comfort of your own home; live in a space designed exactly to your liking, where every detail reflects your style and well-being.",
            ctaMain: "Request Quote Comparison",
            ctaWhatsapp: "Contact: +34 643 216 427",
            phone: "+34 643 216 427",
            sections: {
                individuals: {
                    title: "For Individuals",
                    desc: "We care for your home as if it were our own. Maximum discretion and flawless finishes.",
                    items: [
                        { title: "Cleaning & Setup", desc: "Deep cleaning and preparation services for stays." },
                        { title: "Repairs & Utilities", desc: "Plumbing, electricity, and home repairs 24/7." },
                        { title: "Gardening & Pools", desc: "Comprehensive exterior maintenance for a flawless state." },
                        { title: "Luxury Renovations", desc: "From aesthetic updates to full structural reforms." }
                    ]
                },
                realEstate: {
                    title: "For Real Estate",
                    desc: "Your technical arm on the Costa del Sol. We back your management with speed and professionalism.",
                    items: [
                        { title: "Express Repairs", desc: "Quick solutions to ensure no sales or rentals are lost." },
                        { title: "Key Management", desc: "Secure custody and delivery of keys." },
                        { title: "Technical Reports", desc: "Property status evaluation with detailed reporting." },
                        { title: "Preventive Maintenance", desc: "Annual plans to preserve the value of your portfolio." }
                    ]
                }
            },
            features: [
                { title: "Total Bilingualism", desc: "Fluent communication in Spanish and English for your peace of mind." },
                { title: "Local Partners", desc: "We work with the most reliable companies in Nerja and Frigiliana." },
                { title: "Quality Guarantee", desc: "Only trusted and fully validated services and materials." }
            ],
            bottomCTA: {
                h2: "Request your quote without commitment. If you are looking for a complete renovation or periodic maintenance for your vacation rental, we design a plan tailored to you.",
                cta: "Request Information"
            },
            note: {
                title: "Informative Note",
                text: "With our help, the renovation or management process is much more comfortable. Forget slow and frustrating Spanish bureaucracy; we act as your local ally so everything flows smoothly."
            }
        },
        vacationPackages: {
            tag: "Vacation Packages",
            h2: "Personalized Vacation Packages",
            p: "Design your ideal getaway or choose from our curated options. We handle everything so you just enjoy.",
            whatIncludes: {
                title: "What does our service include?",
                items: [
                    {
                        title: "Ideal Accommodation",
                        desc: "We find the perfect option based on area, style, and budget."
                    },
                    {
                        title: "Total Transparency",
                        desc: "We show you photos, description, and exact location before booking."
                    },
                    {
                        title: "Fixed Price",
                        desc: "No surprises. We give you a final price. Nothing is confirmed without your prior OK."
                    },
                    {
                        title: "Complete Management",
                        desc: "We contact, confirm, and manage all reservations for you."
                    },
                    {
                        title: "Continuous Support",
                        desc: "We help you before deciding and during your stay if you have questions."
                    }
                ]
            },
            packages: [
                {
                    id: "essential",
                    name: "Essential Pack",
                    tagline: "The smart basic",
                    badge: "Budget-Friendly & Real",
                    description: "Ideal for those seeking quality and authenticity without overpaying. Everything you need at local prices.",
                    includes: [
                        "Budget accommodation search (apartment, hostel, or private room)",
                        "Bus tickets from the airport",
                        "Complete booking management",
                        "Local restaurant and beach recommendations",
                        "WhatsApp support during your stay"
                    ],
                    idealFor: "Budget-conscious travelers who want assistance without overpaying.",
                    youReceive: [
                        "Detailed accommodation proposal with photos and location",
                        "Step-by-step transport instructions",
                        "Confirmed booking and travel documents",
                        "Local guide with recommended spots"
                    ]
                },
                {
                    id: "comfort",
                    name: "Comfort Pack",
                    tagline: "The local favorite",
                    badge: "Most Popular",
                    description: "The perfect balance between comfort, authentic experiences, and real savings.",
                    includes: [
                        "Mid-to-high quality accommodation (premium apartment or boutique hotel)",
                        "Rental car or private transfers from the airport",
                        "2 included experiences (Acebuchal Route + Yoga & Relax)",
                        "Complete booking management",
                        "VIP assistance during your stay"
                    ],
                    idealFor: "Families and couples looking for a complete stress-free vacation.",
                    youReceive: [
                        "Detailed premium accommodation proposal",
                        "Reserved rental vehicle or confirmed transfers",
                        "Confirmation of 2 exclusive experiences",
                        "Personalized day-by-day itinerary",
                        "24/7 VIP assistance"
                    ]
                },
                {
                    id: "premium",
                    name: "Premium Pack",
                    tagline: "Unforgettable experience",
                    badge: "Total Luxury",
                    description: "The highest level of exclusivity, comfort, and unique experiences on the Costa del Sol.",
                    includes: [
                        "Private luxury villa with views or premium suite with five-star services",
                        "VIP private transfer from the airport",
                        "4 exclusive experiences (Magic Table + Boat Trip + Buggy + Diving)",
                        "Private chef at home (1 session)",
                        "Dedicated concierge 24/7",
                        "Comprehensive management: from bookings to personalized recommendations"
                    ],
                    idealFor: "Those seeking the best without limits and wanting VIP treatment.",
                    youReceive: [
                        "Detailed luxury villa or premium suite proposal",
                        "Private driver in premium vehicle",
                        "Confirmation of 4 exclusive experiences",
                        "Private chef booked with personalized menu",
                        "Bespoke VIP itinerary",
                        "Dedicated concierge assistance"
                    ]
                }
            ],
            customize: {
                title: "Want to design your own package?",
                description: "Explore our complete catalog of experiences and choose your favorites. With your selection, we'll design a tailor-made package, adapted to your tastes and budget.",
                buttonText: "View All Experiences"
            },
            cta: {
                buttonText: "Request Information",
                title: "Ready for your perfect getaway?",
                description: "Tell us your preferences and we'll design the ideal package for you."
            }
        },
        tracking: {
            title: "What do we track for you?",
            items: [
                {
                    icon: "🏡",
                    title: "Accommodation with real value",
                    desc: "We filter villas and suites that are not just beautiful, but have a fair price and a strategic location. No surprises on arrival."
                },
                {
                    icon: "🍽️",
                    title: "Dining without 'tourist tax'",
                    desc: "We tell you where the locals eat. The best flavors of Axarquía without paying for the label or the seafront location."
                },
                {
                    icon: "🌿",
                    title: "Insider Experiences",
                    desc: "We track authentic activities that don't appear in hotel brochures. The true essence of Malaga, away from the crowds."
                },
                {
                    icon: "🛠️",
                    title: "Trusted Local Services",
                    desc: "We only work with providers we know personally. Maintenance, renovations, and 24/7 help with expert hands."
                },
                {
                    icon: "💼",
                    title: "Investment Opportunities",
                    desc: "Honest market analysis. We seek properties with real potential for profitability, without commercial 'makeup'."
                }
            ]
        }
    }
};
