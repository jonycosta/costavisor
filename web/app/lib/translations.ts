export const translations = {
  es: {
    nav: {
      services: "Servicios",
      experiences: "Experiencias",
      packs: "Packs",
      accommodations: "Alojamientos",
      localNetwork: "Red Local",
      contact: "Contacto",
    },
    hero: {
      h1: "El Secreto Mejor Guardado de la Costa del Sol ahora es tuyo",
      p: "Descubre Nerja y Frigiliana de la mano de quienes mejor conocen sus rincones. Experiencias exclusivas, alojamientos únicos y una red local a tu servicio.",
      cta: "Explorar Experiencias",
      secondaryCta: "Diseñar mi Viaje",
      jdBuilders: {
        title: "JD Elite Builders",
        description: "Tranquilidad Total: Nos encargamos de todo para que tú no tengas que preocuparte por nada. Reformas y Mantenimiento: Soluciones integrales para tu propiedad. Asesoramiento Legal: Apoyo experto cuando lo necesites.",
        cta: "Más información JD Elite",
      },
      localNetwork: {
        title: "Nuestra Red Local",
        description: "Nuestra red no nació en internet. Nació viviendo aquí. Son personas que forman parte de nuestro día a día en Nerja y Frigiliana. Profesionales que conocemos por su nombre, por su forma de trabajar y por su compromiso. Cuando confías en nosotros, confías también en ellos. Y esa confianza no se improvisa: se construye con el tiempo.",
        cta: "Conoce a nuestros socios",
        partners: [
          {
            name: "Antonio el Pescador",
            description: "Experiencias náuticas auténticas y pescado fresco del día.",
            logo: "/partner-antonio.png",
          },
          {
            name: "La Huerta de María",
            description: "Productos de kilómetro 0 cultivados con amor en la Axarquía.",
            logo: "/partner-huerta.png",
          },
          {
            name: "Artesanía de Frigiliana",
            description: "Cerámica y productos tradicionales hechos a mano.",
            logo: "/partner-artesania.png",
          },
          {
            name: "Fly Costa del Sol",
            description: "Vuelos en parapente y paramotor con David Tejeiro, más de 20 años de experiencia.",
            logo: "/partner-fly.png",
          },
        ],
      },
    },
    localNetworkPage: {
      title: "Red Local CostaVisor",
      subtitle: "Experiencias auténticas junto a colaboradores locales seleccionados.",
      intro: "Colaboramos con profesionales locales cuidadosamente seleccionados para crear experiencias auténticas. Todo lo que ves en nuestra web está seleccionado y gestionado por nosotros: profesionales locales, actividades y atención cercana, para que disfrutes sin preocuparte de nada.",
      partners: [
        {
          id: "gatygo",
          name: "GatyGo Rent",
          description: "GatyGo Rent es un proyecto local dedicado al alquiler de scooters y vehículos para descubrir Nerja. En CostaVisor utilizamos sus scooters y vehículos bien cuidados como parte de algunas de nuestras rutas guiadas.",
          image: "/partner-gatygo.jpg",
          cta: "Organizar con CostaVisor",
          catalogCta: "Ver Catálogo de Experiencias",
        },
        {
          id: "raw-lounge",
          name: "Raw Lounge",
          description: "Cocina mediterránea creativa frente al mar. El lugar perfecto para disfrutar de la gastronomía local con las mejores vistas.",
          image: "/partner-raw.jpg",
          cta: "Organizar con CostaVisor",
        },
        {
          id: "hydroxperience",
          name: "HydroXperience",
          description: "Actividades náuticas y excursiones en la costa. Descubre los acantilados de Maro desde el mar.",
          image: "/partner-hydro.jpg",
          cta: "Consultar disponibilidad",
        },
        {
          id: "kafune",
          name: "Kafuné",
          description: "Café de especialidad y brunch artesanal. El rincón favorito de los locales para empezar el día.",
          image: "/partner-kafune.jpg",
          cta: "Organizar con CostaVisor",
        },
      ],
      viewAll: "Ver todas las experiencias",
    },
    vacationPackages: {
      tag: "Packs Vacaciones",
      h2: "Todo incluido para tu estancia perfecta",
      p: "Disfruta de la Costa del Sol sin preocupaciones con nuestros paquetes diseñados a medida.",
      whatIncludes: {
        title: "¿Qué incluyen nuestros packs?",
        items: [
          { title: "Alojamiento", desc: "Villas y suites seleccionadas." },
          { title: "Experiencias", desc: "Actividades exclusivas incluidas." },
          { title: "Traslados", desc: "Transporte privado a tu disposición." },
        ],
      },
      packages: [
        {
          id: "essential",
          name: "Pack Esencial",
          tagline: "Lo mejor de Nerja",
          badge: "Popular",
          description: "Ideal para una primera toma de contacto con la zona.",
          includes: ["Alojamiento 3 noches", "Traslado Aeropuerto", "1 Experiencia Local"],
          idealFor: "Parejas y amigos",
          youReceive: "Guía digital personalizada",
        },
      ],
      customize: {
        title: "Personaliza tu Pack",
        description: "¿Buscas algo diferente? Diseñamos tu estancia desde cero.",
        buttonText: "Diseñar a medida",
      },
      cta: {
        title: "¿Hablamos?",
        description: "Estamos aquí para ayudarte a planificar tus vacaciones perfectas.",
        buttonText: "Solicitar Información",
      },
    },
    portfolio: {
      tag: "Experiencias",
      h2: "Momentos inolvidables",
      p: "Descubre nuestra selección exclusiva de actividades diseñadas para que vivas la Costa del Sol de una forma única.",
      depositNote: "Reserva con depósito",
      items: [
        {
          title: "Experiencia Malaguista",
          category: "Deporte",
          image: "/exp-boat.png",
          slug: "experiencia-malaguista",
          price: "Consultar",
        },
        {
          title: "Fiesta Secreta",
          category: "Exclusivo",
          image: "/exp-nature.png",
          slug: "fiesta-secreta",
          price: "Consultar",
        },
      ],
    },
    testimonials: {
      tag: "Testimonios",
      h2: "Lo que dicen nuestros clientes",
      p: "Nuestra prioridad es tu satisfacción. Aquí tienes algunas opiniones de quienes ya han confiado en nosotros.",
      items: [
        {
          name: "Juan Pérez",
          role: "Viajero",
          content: "Una experiencia increíble. Todo estuvo perfecto.",
          stars: 5,
        },
      ],
    },
    customTravel: {
      tag: "Viajes a Medida",
      title: "Tu Viaje, Tus Reglas",
      subtitle: "Diseñamos tu viaje ideal desde cero",
      description: "Adaptamos cada detalle a tus gustos y necesidades para crear una experiencia irrepetible.",
      features: [
        { title: "Atención 24/7", desc: "Estamos contigo en cada paso." },
        { title: "Guías Locales", desc: "Expertos que conocen cada rincón." },
        { title: "Transporte Privado", desc: "Muévete con total comodidad." },
      ],
      destinations: "Nerja · Frigiliana · Maro",
      cta: "Empezar a Diseñar",
    },
    blog: {
      tag: "Guía Local",
      h2: "Descubre los secretos de la zona",
      p: "Nuestra selección personal de los mejores rincones de Nerja y Frigiliana.",
      readMore: "Leer más",
      posts: [
        {
          title: "Las mejores calas de Maro",
          excerpt: "Descubre los rincones más vírgenes y cristalinos de la costa.",
          slug: "calas-maro",
        },
        {
          title: "Ruta por Frigiliana",
          excerpt: "Un paseo por el pueblo más bonito de España.",
          slug: "ruta-frigiliana",
        },
      ],
    },
    faq: {
      tag: "Ayuda",
      title: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Cómo reservo una experiencia?",
          a: "Puedes contactarnos directamente por email o a través de los botones de la web.",
        },
        {
          q: "¿Qué incluye el servicio de JD Elite?",
          a: "Ofrecemos gestión integral, mantenimiento y reformas para tu propiedad.",
        },
      ],
    },
    accommodations: {
      tag: "Alojamientos",
      h2: "Tu hogar en el paraíso",
      p: "Selección exclusiva de villas y apartamentos con encanto.",
      items: [
        {
          title: "Villa con Vistas",
          description: "Espectacular villa con piscina privada y vistas al mar.",
          image: "/exp-boat.png",
          price: "Desde 200€/noche",
        },
      ],
    },
    investors: {
      tag: "Inversores",
      h2: "Oportunidades de Inversión",
      p: "Te ayudamos a encontrar y gestionar tu propiedad en la Costa del Sol.",
      nav: {
        investor: "Inversor",
      },
      hero: {
        tag: "Oportunidad",
        title: "Invierte con Seguridad",
        subtitle: "Gestión integral para inversores exigentes.",
        p: "Maximizamos la rentabilidad de tu inversión con total tranquilidad.",
        cta: "Contactar ahora",
      },
      pillars: {
        title: "Nuestros Pilares",
        items: [
          { title: "Rentabilidad", desc: "Buscamos las mejores oportunidades del mercado." },
          { title: "Seguridad", desc: "Asesoramiento legal y técnico completo." },
          { title: "Gestión", desc: "Nos encargamos de todo el proceso." },
        ],
      },
      whyUs: {
        title: "¿Por qué CostaVisor?",
        desc: "Nuestra experiencia local es tu mayor activo.",
        footer: "Tu éxito es nuestro compromiso.",
        items: [
          { title: "Conocimiento Local", desc: "Sabemos dónde y cuándo invertir." },
          { title: "Red de Contactos", desc: "Acceso a propiedades exclusivas." },
        ],
      },
      market: {
        tag: "Mercado",
        h2: "Un mercado en crecimiento",
        p: "La Costa del Sol sigue siendo uno de los destinos más atractivos.",
        items: ["Alta demanda", "Revalorización constante"],
        stat: "+15%",
        statDesc: "Crecimiento anual",
      },
      form: {
        h2: "¿Hablamos de tu próxima inversión?",
        p: "Déjanos tus datos y nos pondremos en contacto contigo.",
        name: "Nombre",
        email: "Email",
        profile: "Perfil de inversor",
        profilePlaceholder: "Particular, empresa, fondo...",
        cta: "Enviar solicitud",
      },
    },
    vacationDesigner: {
      subtitle: "Diseñador de Vacaciones",
      step1: {
        title: "¿Cuál es tu estilo de viaje?",
        subtitle: "Elige la experiencia que mejor se adapte a ti.",
        options: {
          relax: "Relax",
          adventure: "Aventura",
          culture: "Cultura",
          party: "Fiesta",
        },
      },
      step2: {
        title: "¿Con quién viajas?",
        subtitle: "Queremos saber quiénes te acompañan.",
        options: {
          couple: "En pareja",
          family: "En familia",
          friends: "Con amigos",
          solo: "Solo/a",
        },
      },
      step3: {
        title: "¿Cuántos días?",
        subtitle: "Dinos la duración de tu estancia.",
      },
      step4: {
        title: "¿Cuál es tu presupuesto?",
        subtitle: "Para ofrecerte las mejores opciones.",
        options: {
          smart: { label: "Smart", desc: "Calidad al mejor precio" },
          premium: { label: "Premium", desc: "Experiencias exclusivas" },
          luxury: { label: "Luxury", desc: "Lujo sin límites" },
        },
      },
      result: {
        title: "Tu Viaje Ideal",
        subtitle: "Basado en tus preferencias, este es tu plan.",
        whatsappMessage: "Hola CostaVisor! He diseñado mi viaje ideal: Estilo {style}, para {company}, durante {days} días con un presupuesto {budget}. Estimación: {price}. ¿Me ayudáis a hacerlo realidad?",
      },
    },
    footer: {
      rights: "© 2024 CostaVisor. Todos los derechos reservados.",
      links: [
        { label: "Aviso Legal", href: "/legal" },
        { label: "Privacidad", href: "/privacidad" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  },
  en: {
    nav: {
      services: "Services",
      experiences: "Experiences",
      packs: "Packs",
      accommodations: "Accommodations",
      localNetwork: "Local Network",
      contact: "Contact",
    },
    hero: {
      h1: "The Best Kept Secret of the Costa del Sol is now yours",
      p: "Discover Nerja and Frigiliana with those who know their corners best. Exclusive experiences, unique accommodations, and a local network at your service.",
      cta: "Explore Experiences",
      secondaryCta: "Design my Trip",
      jdBuilders: {
        title: "JD Elite Builders",
        description: "Total Peace of Mind: We take care of everything so you don't have to worry about anything. Renovations and Maintenance: Comprehensive solutions for your property. Legal Advice: Expert support when you need it.",
        cta: "More info JD Elite",
      },
      localNetwork: {
        title: "Our Local Network",
        description: "Our network wasn't born on the internet. It was born living here. They are people who are part of our daily lives in Nerja and Frigiliana. Professionals we know by name, by their way of working, and by their commitment. When you trust us, you trust them too. And that trust isn't improvised: it's built over time.",
        cta: "Meet our partners",
        partners: [
          {
            name: "Antonio the Fisherman",
            description: "Authentic nautical experiences and fresh fish of the day.",
            logo: "/partner-antonio.png",
          },
          {
            name: "Maria's Orchard",
            description: "Kilometer 0 products grown with love in the Axarquía.",
            logo: "/partner-huerta.png",
          },
          {
            name: "Frigiliana Crafts",
            description: "Handmade ceramics and traditional products.",
            logo: "/partner-artesania.png",
          },
          {
            name: "Fly Costa del Sol",
            description: "Paragliding and paramotor flights with David Tejeiro, over 20 years of experience.",
            logo: "/partner-fly.png",
          },
        ],
      },
    },
    localNetworkPage: {
      title: "CostaVisor Local Network",
      subtitle: "Authentic experiences with selected local collaborators.",
      intro: "We collaborate with carefully selected local professionals to create authentic experiences. Everything you see on our website is selected and managed by us: local professionals, activities, and close attention, so you can enjoy without worrying about anything.",
      partners: [
        {
          id: "gatygo",
          name: "GatyGo Rent",
          description: "GatyGo Rent is a local project dedicated to renting scooters and vehicles to discover Nerja. At CostaVisor we use their well-maintained scooters and vehicles as part of some of our guided routes.",
          image: "/partner-gatygo.jpg",
          cta: "Organize with CostaVisor",
          catalogCta: "View Experience Catalog",
        },
        {
          id: "raw-lounge",
          name: "Raw Lounge",
          description: "Creative Mediterranean cuisine facing the sea. The perfect place to enjoy local gastronomy with the best views.",
          image: "/partner-raw.jpg",
          cta: "Organize with CostaVisor",
        },
        {
          id: "hydroxperience",
          name: "HydroXperience",
          description: "Nautical activities and excursions on the coast. Discover the cliffs of Maro from the sea.",
          image: "/partner-hydro.jpg",
          cta: "Check availability",
        },
        {
          id: "kafune",
          name: "Kafuné",
          description: "Specialty coffee and artisanal brunch. The favorite corner of locals to start the day.",
          image: "/partner-kafune.jpg",
          cta: "Organize with CostaVisor",
        },
      ],
      viewAll: "View all experiences",
    },
    vacationPackages: {
      tag: "Vacation Packs",
      h2: "All-inclusive for your perfect stay",
      p: "Enjoy the Costa del Sol without worries with our custom-designed packages.",
      whatIncludes: {
        title: "What do our packs include?",
        items: [
          { title: "Accommodation", desc: "Selected villas and suites." },
          { title: "Experiences", desc: "Exclusive activities included." },
          { title: "Transfers", desc: "Private transport at your disposal." },
        ],
      },
      packages: [
        {
          id: "essential",
          name: "Essential Pack",
          tagline: "The best of Nerja",
          badge: "Popular",
          description: "Ideal for a first contact with the area.",
          includes: ["3 nights accommodation", "Airport Transfer", "1 Local Experience"],
          idealFor: "Couples and friends",
          youReceive: "Personalized digital guide",
        },
      ],
      customize: {
        title: "Customize Your Pack",
        description: "Looking for something different? We design your stay from scratch.",
        buttonText: "Custom Design",
      },
      cta: {
        title: "Shall we talk?",
        description: "We are here to help you plan your perfect vacation.",
        buttonText: "Request Information",
      },
    },
    portfolio: {
      tag: "Experiences",
      h2: "Unforgettable moments",
      p: "Discover our exclusive selection of activities designed for you to experience the Costa del Sol in a unique way.",
      depositNote: "Book with deposit",
      items: [
        {
          title: "Malaguista Experience",
          category: "Sport",
          image: "/exp-boat.png",
          slug: "malaguista-experience",
          price: "Consult",
        },
        {
          title: "Secret Party",
          category: "Exclusive",
          image: "/exp-nature.png",
          slug: "secret-party",
          price: "Consult",
        },
      ],
    },
    testimonials: {
      tag: "Testimonials",
      h2: "What our clients say",
      p: "Our priority is your satisfaction. Here are some opinions from those who have already trusted us.",
      items: [
        {
          name: "John Doe",
          role: "Traveler",
          content: "An incredible experience. Everything was perfect.",
          stars: 5,
        },
      ],
    },
    customTravel: {
      tag: "Custom Travel",
      title: "Your Trip, Your Rules",
      subtitle: "We design your ideal trip from scratch",
      description: "We adapt every detail to your tastes and needs to create a unique experience.",
      features: [
        { title: "24/7 Support", desc: "We are with you every step of the way." },
        { title: "Local Guides", desc: "Experts who know every corner." },
        { title: "Private Transport", desc: "Move with total comfort." },
      ],
      destinations: "Nerja · Frigiliana · Maro",
      cta: "Start Designing",
    },
    blog: {
      tag: "Local Guide",
      h2: "Discover the secrets of the area",
      p: "Our personal selection of the best corners of Nerja and Frigiliana.",
      readMore: "Read more",
      posts: [
        {
          title: "The best coves of Maro",
          excerpt: "Discover the most pristine and crystalline corners of the coast.",
          slug: "maro-coves",
        },
        {
          title: "Frigiliana Route",
          excerpt: "A walk through the most beautiful village in Spain.",
          slug: "frigiliana-route",
        },
      ],
    },
    faq: {
      tag: "Help",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How do I book an experience?",
          a: "You can contact us directly by email or through the buttons on the website.",
        },
        {
          q: "What does the JD Elite service include?",
          a: "We offer comprehensive management, maintenance, and renovations for your property.",
        },
      ],
    },
    accommodations: {
      tag: "Accommodations",
      h2: "Your home in paradise",
      p: "Exclusive selection of charming villas and apartments.",
      items: [
        {
          title: "Villa with Views",
          description: "Spectacular villa with private pool and sea views.",
          image: "/exp-boat.png",
          price: "From €200/night",
        },
      ],
    },
    investors: {
      tag: "Investors",
      h2: "Investment Opportunities",
      p: "We help you find and manage your property on the Costa del Sol.",
      nav: {
        investor: "Investor",
      },
      hero: {
        tag: "Opportunity",
        title: "Invest with Security",
        subtitle: "Comprehensive management for demanding investors.",
        p: "We maximize the return on your investment with total peace of mind.",
        cta: "Contact now",
      },
      pillars: {
        title: "Our Pillars",
        items: [
          { title: "Profitability", desc: "We look for the best market opportunities." },
          { title: "Security", desc: "Complete legal and technical advice." },
          { title: "Management", desc: "We take care of the entire process." },
        ],
      },
      whyUs: {
        title: "Why CostaVisor?",
        desc: "Our local experience is your greatest asset.",
        footer: "Your success is our commitment.",
        items: [
          { title: "Local Knowledge", desc: "We know where and when to invest." },
          { title: "Network", desc: "Access to exclusive properties." },
        ],
      },
      market: {
        tag: "Market",
        h2: "A growing market",
        p: "The Costa del Sol remains one of the most attractive destinations.",
        items: ["High demand", "Constant revaluation"],
        stat: "+15%",
        statDesc: "Annual growth",
      },
      form: {
        h2: "Shall we talk about your next investment?",
        p: "Leave us your details and we will get in touch with you.",
        name: "Name",
        email: "Email",
        profile: "Investor profile",
        profilePlaceholder: "Individual, company, fund...",
        cta: "Send request",
      },
    },
    vacationDesigner: {
      subtitle: "Vacation Designer",
      step1: {
        title: "What is your travel style?",
        subtitle: "Choose the experience that best suits you.",
        options: {
          relax: "Relax",
          adventure: "Adventure",
          culture: "Culture",
          party: "Party",
        },
      },
      step2: {
        title: "Who are you traveling with?",
        subtitle: "We want to know who is coming with you.",
        options: {
          couple: "As a couple",
          family: "As a family",
          friends: "With friends",
          solo: "Solo",
        },
      },
      step3: {
        title: "How many days?",
        subtitle: "Tell us the duration of your stay.",
      },
      step4: {
        title: "What is your budget?",
        subtitle: "To offer you the best options.",
        options: {
          smart: { label: "Smart", desc: "Quality at the best price" },
          premium: { label: "Premium", desc: "Exclusive experiences" },
          luxury: { label: "Luxury", desc: "Limitless luxury" },
        },
      },
      result: {
        title: "Your Ideal Trip",
        subtitle: "Based on your preferences, this is your plan.",
        whatsappMessage: "Hi CostaVisor! I've designed my ideal trip: Style {style}, for {company}, for {days} days with a {budget} budget. Estimate: {price}. Can you help me make it happen?",
      },
    },
    footer: {
      rights: "© 2024 CostaVisor. All rights reserved.",
      links: [
        { label: "Legal Notice", href: "/legal" },
        { label: "Privacy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  },
};
