// Baldwin & Co. — Language Toggle (EN / ES)
// Rebuilt to remove duplicate keys. Every key below appears exactly once.
// English values match each page's live HTML source of truth (see AUDIT-REPAIR-BEFORE-STATE.md).
const TRANSLATIONS = {

  // ── NAV ──────────────────────────
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'nav.faq': { en: 'FAQ', es: 'Preguntas' },
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.process': { en: 'Process', es: 'Proceso' },
  'nav.services': { en: 'Blueprint', es: 'Blueprint' },
  'nav.summer': { en: 'Summer Digital Reset', es: 'Summer Digital Reset' },

  // ── FOOTER ──────────────────────────
  'footer.apply_btn': { en: 'Start Your Project', es: 'Comenzar tu Proyecto' },
  'footer.apply_lbl': { en: 'Apply', es: 'Aplicar' },
  'footer.copyright': { en: '©2026 Baldwin &amp; Co. All Rights Reserved.', es: '©2026 Baldwin & Co. Todos los derechos reservados.' },
  'footer.navigate': { en: 'Navigate', es: 'Navegar' },
  'footer.privacy': { en: 'Privacy Policy', es: 'Política de Privacidad' },
  'footer.send': { en: 'Send an <em>inquiry.</em>', es: 'Envía una consulta.' },
  'footer.terms': { en: 'Terms', es: 'Términos' },
  'footer.top': { en: 'Back to Top ↑', es: 'Volver arriba ↑' },

  // ── INDEX ──────────────────────────
  'index.founder_body_full': { en: 'Kate Baldwin spent years helping businesses market themselves, grow, and evolve. What she discovered along the way was that most business owners are not lacking talent — they are lacking clarity. Baldwin &amp; Co. exists to fix that. We help business owners define who they are, what they offer, and how to communicate it — then build the brand and digital presence to match.', es: 'Kate Baldwin pasó años ayudando a los negocios a posicionarse, crecer y evolucionar. Lo que descubrió en el camino fue que la mayoría de los dueños de negocios no carecen de talento — carecen de claridad. Baldwin &amp; Co. existe para resolver eso. Ayudamos a los dueños de negocios a definir quiénes son, qué ofrecen y cómo comunicarlo — y luego construimos la marca y la presencia digital para acompañarlo.' },
  'index.founder_btn': { en: 'Let\'s Talk', es: 'Eleva Tu Marca' },
  'index.founder_heading': { en: 'Meet the<br>Founder', es: 'Conoce a la<br>Fundadora' },
  'index.founder_sub': { en: 'Designing with<br>Intention &amp; Impact', es: 'Diseñando con<br>Intención e<br>Impacto' },
  'index.hero_cta1': { en: 'Explore Our Services', es: 'Ver Nuestros Servicios' },
  'index.hero_cta2': { en: 'Start Your Project', es: 'Comenzar tu Proyecto' },
  'index.hero_eyebrow': { en: 'BOUTIQUE BRAND STRATEGY &amp; DIGITAL DESIGN', es: 'ESTRATEGIA DE MARCA BOUTIQUE Y DISEÑO DIGITAL' },
  'index.hero_sub': { en: 'Most business owners have outgrown their message, their website, and their brand — long before they recognize it. Baldwin &amp; Co. helps you organize years of experience into a clear direction, refined identity, and digital presence that reflects where you are today.', es: 'La mayoría de los dueños de negocios han superado su mensaje, su sitio web y su marca — mucho antes de reconocerlo. Baldwin & Co. te ayuda a organizar años de experiencia en una dirección clara, una identidad refinada y una presencia digital que refleja dónde estás hoy.' },
  'index.hero_title': { en: 'YOUR BUSINESS HAS EVOLVED.<br>HAS YOUR BRAND KEPT UP?', es: 'TU NEGOCIO HA EVOLUCIONADO.<br>¿TU MARCA HA SEGUIDO EL RITMO?' },
  'index.hero_vertical': { en: 'Website &amp; Brand Design', es: 'Diseño Web y de Marca' },
  'index.hiw_cta': { en: 'Request a Proposal', es: 'Inicia Tu Proyecto' },
  'index.hiw_eyebrow': { en: 'THE BALDWIN &amp; CO. METHOD', es: 'EL MÉTODO BALDWIN & CO.' },
  'index.hiw_s1_body': { en: 'You answer a short questionnaire by voice. No typing, no long forms. We capture your story in your own words.', es: 'Respondes un breve cuestionario por voz. Sin escribir, sin formularios largos. Capturamos tu historia en tus propias palabras.' },
  'index.hiw_s1_title': { en: 'The AI Voice Onboarding', es: 'El Onboarding por Voz con IA' },
  'index.hiw_s2_body': { en: 'We audit everything. What is working, what is outdated, and what is invisible. You leave with a clear plan.', es: 'Auditamos todo. Lo que funciona, lo que está desactualizado y lo que es invisible. Sales con un plan claro.' },
  'index.hiw_s2_title': { en: 'The Gaps &amp; Strategy Session', es: 'La Sesión de Estrategia' },
  'index.hiw_s3_body': { en: 'We redesign, rewrite, and rebuild while your business keeps running. No downtime, no disruption.', es: 'Rediseñamos, reescribimos y reconstruimos mientras tu negocio sigue funcionando. Sin interrupciones.' },
  'index.hiw_s3_title': { en: 'The Rebuild &amp; Elevate', es: 'La Reconstrucción y Elevación' },
  'index.hiw_s4_body': { en: 'We go live together. Every asset, login, and guide is handed directly to you. You own everything from day one.', es: 'Lanzamos juntos. Cada activo, acceso y guía se entrega directamente a ti. Eres dueño de todo desde el primer día.' },
  'index.hiw_s4_title': { en: 'The Turnkey Launch &amp; Hand-Off', es: 'El Lanzamiento y Entrega' },
  'index.hiw_title': { en: 'Four steps from scattered to strategic.', es: 'Cinco pasos de lo disperso a lo estratégico.' },
  'index.stuck_eyebrow': { en: 'FEELING STUCK?', es: '¿TE SIENTES ESTANCADO/A?' },
  'index.stuck_p1': { en: 'Your website doesn\'t look like the business you\'ve built.<br>Your message feels scattered — or worse, outdated.<br>Clients can\'t tell what you do or why you\'re the right choice.', es: 'Sabes que tu negocio ha evolucionado.<br>Sabes que tu sitio web ya no refleja quién eres.<br>Sabes que tu mensaje se siente disperso.' },
  'index.stuck_p2': { en: 'You know something needs to change. You\'re just not sure where to start.', es: 'Pero no estás seguro/a de por dónde empezar.' },
  'index.stuck_p3': { en: 'That is exactly where Baldwin &amp; Co. comes in.', es: 'Ahí es donde entra Baldwin &amp; Co.' },
  'index.stuck_p4': { en: 'We help established business owners get clear, get aligned, and get a brand and digital presence that matches the level they\'ve reached.', es: 'Ayudamos a los dueños de negocios a organizar años de ideas en un mensaje claro, una marca refinada y una presencia digital que refleja dónde están hoy.' },
  'index.summer_btn': { en: 'View the Summer Digital Reset', es: 'Ver el Summer Digital Reset' },
  'index.summer_eyebrow': { en: 'LIMITED SUMMER OFFER', es: 'OFERTA DE VERANO LIMITADA' },
  'index.summer_price': { en: 'Investment: <strong>$999</strong>', es: 'Inversión: <strong>$999</strong>' },
  'index.summer_sub': { en: 'Four pages, one flat fee, and a clean result your clients will actually take seriously. Built for small businesses that are done with DIY.', es: 'Un paquete de sitio web de cuatro páginas para pequeños negocios que necesitan una presencia en línea pulida y profesional.' },
  'index.summer_title': { en: 'The $999 Summer Digital Reset', es: 'El Summer Digital Reset de $999' },

  // ── BLUEPRINT ──────────────────────────
  'bp.hero_eyebrow': { en: 'SERVICES', es: 'SERVICIOS' },
  'bp.hero_sub': { en: 'Every engagement starts with understanding where you are and what you actually need. Nothing gets built before that\'s clear.', es: 'Cada proyecto comienza con entender tu negocio, tu audiencia y tus objetivos. Lo que se construye depende de lo que realmente necesitas.' },
  'bp.hero_title': { en: 'Built Around Your Business.', es: 'Claridad Antes del Diseño.' },
  'bp.intro_body': { en: 'Most business owners arrive with years of expertise and a digital presence that doesn\'t reflect any of it. We close that gap — starting with strategy, not decoration. The prices below are starting points. Final scope and investment are always confirmed before anything begins.', es: 'La mayoría de los dueños de negocios llegan a nosotros con años de experiencia y una presencia digital que no lo refleja. Cerramos esa brecha. Los servicios a continuación representan inversiones iniciales — el alcance y el precio finales siempre se confirman antes de que comience cualquier trabajo.' },
  'bp.intro_display2': { en: 'You\'ve Built Something Real. Let\'s Make It Look That Way.', es: 'Estrategia Antes de Decoración.' },
  'bp.intro_label2': { en: 'ABOUT OUR SERVICES', es: 'SOBRE NUESTROS SERVICIOS' },
  'bp.label_about': { en: 'ABOUT', es: 'ACERCA DE' },
  'bp.label_deliverables': { en: 'DELIVERABLES', es: 'ENTREGABLES' },
  'bp.outro_btn': { en: 'Let\'s Figure It Out Together', es: 'Reservar una Sesión de Claridad' },
  'bp.outro_heading': { en: 'Not sure which service is right for you?', es: '¿No sabes por dónde empezar?' },
  'bp.s0_cta': { en: 'Book a Clarity Session', es: 'Reservar una Sesión de Claridad' },
  'bp.s0_deliverables': { en: '90-minute working session · One-page brand direction summary · Core message development · Audience definition · Service clarity · Next step recommendations', es: 'Posicionamiento de marca · Desarrollo del mensaje principal · Definición de audiencia · Claridad de servicios · Hoja de ruta de dirección · Recomendaciones de próximos pasos' },
  'bp.s0_desc': { en: 'A focused 90-minute working session for business owners who need direction without committing to a larger project. You walk in with questions and walk out with a clear message, a defined audience, and a specific next step — not a vague to-do list.', es: 'Una sesión de estrategia enfocada diseñada para ayudar a los dueños de negocios a definir su mensaje, aclarar sus servicios, identificar su audiencia y trazar sus próximos pasos. Este es el primer paso antes de que comience cualquier proyecto de diseño o sitio web.' },
  'bp.s0_price': { en: 'Starting at $350', es: 'Desde $350' },
  'bp.s0_tag': { en: 'BRAND CLARITY SESSION', es: 'SESIÓN DE CLARIDAD DE MARCA' },
  'bp.s1_cta': { en: 'Start With Strategy', es: 'Comenzar con Estrategia' },
  'bp.s1_deliverables': { en: 'Half-day working session · Written brand strategy brief · Brand positioning · Audience definition · Brand voice direction · Messaging pillars · Competitive differentiation · Actionable brand roadmap', es: 'Posicionamiento de marca · Definición de audiencia · Dirección de voz de marca · Dirección visual · Diferenciación competitiva · Hoja de ruta de marca' },
  'bp.s1_desc': { en: 'A half-day working session for businesses preparing to invest in design or a full rebuild. You get a written brand strategy brief covering positioning, audience, voice, and messaging pillars — something you can hand to any designer or developer with full confidence.', es: 'Una sesión de estrategia enfocada para negocios que necesitan claridad antes de invertir en diseño.' },
  'bp.s1_price': { en: 'Starting at $450', es: 'Desde $450' },
  'bp.s1_tag': { en: 'BRAND STRATEGY &amp; IDENTITY', es: 'INTENSIVO DE ESTRATEGIA DE MARCA' },
  'bp.s2_cta': { en: 'Refresh My Brand', es: 'Renovar Mi Marca' },
  'bp.s2_deliverables': { en: 'Existing logo refinement · Updated color palette · Typography system · Brand messaging refinement · Social and digital visual direction · Mini brand guide', es: 'Refinamiento de logo existente · Paleta de colores actualizada · Sistema tipográfico · Refinamiento de mensajería · Dirección visual digital y social · Mini guía de marca' },
  'bp.s2_desc': { en: 'For businesses that have outgrown their current look but don\'t need to start from scratch. We take what you have and bring it up to the level you\'re actually operating at.', es: 'Para negocios establecidos que han superado su apariencia actual pero no necesitan empezar de cero.' },
  'bp.s2_price': { en: 'Starting at $1,250', es: 'Desde $1,250' },
  'bp.s2_tag': { en: 'BRAND REFRESH', es: 'RENOVACIÓN DE MARCA' },
  'bp.s3_cta': { en: 'Build My Brand', es: 'Construir Mi Marca' },
  'bp.s3_deliverables': { en: 'Brand strategy · Logo direction · Primary and secondary logo variations · Color palette · Typography system · Brand voice · Core messaging · Supporting brand elements · Brand guidelines', es: 'Estrategia de marca · Dirección de logo · Variaciones primarias y secundarias del logo · Paleta de colores · Sistema tipográfico · Voz de marca · Mensajería principal · Elementos de apoyo · Guías de marca' },
  'bp.s3_desc': { en: 'A complete visual and verbal identity built around your business, your audience, and where you\'re headed. Everything you need to show up consistently and professionally — across every touchpoint.', es: 'Una identidad visual y verbal completa creada alrededor del negocio, la audiencia y los objetivos.' },
  'bp.s3_price': { en: 'Starting at $5,000', es: 'Desde $5,000' },
  'bp.s3_tag': { en: 'COMPLETE BRAND IDENTITY', es: 'IDENTIDAD DE MARCA COMPLETA' },
  'bp.s4_cta': { en: 'Build My Website', es: 'Construir Mi Sitio Web' },
  'bp.s4_deliverables': { en: 'Custom page strategy · Responsive website design · Mobile optimization · Website copy direction · Foundational SEO · AI-search-ready structure · Contact form integration · Domain and launch support · Basic website training', es: 'Estrategia de páginas · Diseño web responsivo · Optimización móvil · Dirección de contenido · SEO fundamental · Estructura lista para IA · Integración de formulario · Soporte de dominio y lanzamiento · Capacitación básica' },
  'bp.s4_desc': { en: 'A custom website built specifically around your brand, your services, and how your clients make decisions. Not a template. Not a theme. A site that does what it\'s supposed to do.', es: 'Un sitio web personalizado construido alrededor de la marca, la audiencia, los servicios y los objetivos del negocio.' },
  'bp.s4_price': { en: 'Starting at $5,000', es: 'Desde $5,000' },
  'bp.s4_tag': { en: 'WEBSITE STRATEGY &amp; DESIGN', es: 'ESTRATEGIA Y DISEÑO WEB' },
  'bp.s5_cta': { en: 'Transform My Brand', es: 'Transformar Mi Marca' },
  'bp.s5_deliverables': { en: 'Brand strategy · Complete visual identity · Brand messaging · Website copy development · Custom website design · Mobile optimization · SEO foundations · AI visibility structure · Technical setup · Launch support', es: 'Estrategia de marca · Identidad visual completa · Mensajería de marca · Desarrollo de contenido web · Diseño web personalizado · Optimización móvil · Bases de SEO · Estructura de visibilidad IA · Configuración técnica · Soporte de lanzamiento' },
  'bp.s5_desc': { en: 'The full Baldwin &amp; Co. experience. Strategy, identity, messaging, website design, and launch support — all in one focused engagement. Walk away with a brand and digital presence that finally match the business you\'ve built.', es: 'La experiencia completa de Baldwin & Co., combinando estrategia, identidad, mensajería, diseño web personalizado y soporte de lanzamiento.' },
  'bp.s5_price': { en: 'Starting at $4,500', es: 'Desde $4,500' },
  'bp.s5_tag': { en: 'COMPLETE BRAND TRANSFORMATION', es: 'TRANSFORMACIÓN COMPLETA DE MARCA' },
  'bp.s6_cta': { en: 'Strengthen My Message', es: 'Fortalecer Mi Mensaje' },
  'bp.s6_deliverables': { en: 'Website copy · Professional business bios · Service descriptions · Social media messaging · Directory consistency · Foundational SEO · AI search optimization · Google Business profile recommendations', es: 'Contenido web · Bios profesionales · Descripciones de servicios · Mensajería en redes sociales · Consistencia en directorios · SEO fundamental · Optimización para búsqueda IA · Recomendaciones de perfil de Google Business' },
  'bp.s6_desc': { en: 'For businesses that don\'t need a full redesign — just tighter messaging and a more consistent presence. We clean up what\'s there, sharpen how you sound, and make sure your business shows up clearly online.', es: 'Comunicación estratégica y soporte de visibilidad digital para negocios que necesitan mensajería más sólida.' },
  'bp.s6_price': { en: 'Starting at $750', es: 'Desde $750' },
  'bp.s6_tag': { en: 'DIGITAL PRESENCE CLEANUP', es: 'LIMPIEZA DE PRESENCIA DIGITAL' },
  'bp.s7_cta': { en: 'Apply for the Summer Digital Reset', es: 'Aplicar para el Summer Digital Reset' },
  'bp.s7_deliverables': { en: 'Custom four-page website · Mobile-responsive design · Foundational brand polish · Website copy organization · Foundational SEO · AI-search-ready structure · Contact form integration · Domain and launch assistance · 30 days post-launch support', es: 'Sitio web personalizado de cuatro páginas · Diseño responsivo para móvil · Pulido básico de marca · Organización del contenido web · SEO fundamental · Estructura lista para búsqueda IA · Integración de formulario · Asistencia de dominio y lanzamiento · 30 días de soporte post-lanzamiento' },
  'bp.s7_desc': { en: 'A focused package that gets you a clean, custom four-page website — without committing to a full brand transformation. You get professional design, foundational SEO, and a site that\'s ready to represent your business from day one. Investment is $999 flat, split 50/50.', es: 'Un paquete enfocado de $999 que incluye un sitio web personalizado de cuatro páginas, pulido básico de marca y configuración técnica lista para IA. Diseñado para dueños de negocios que necesitan una presencia en línea limpia y profesional sin comprometerse con una transformación completa de marca. La inversión es $999 fijo, dividido 50/50.' },
  'bp.s7_price': { en: '$999 Flat', es: '$999 Fijo' },
  'bp.s7_tag': { en: '$999 SUMMER DIGITAL RESET', es: '$999 SUMMER DIGITAL RESET' },

  // ── PROCESS ──────────────────────────
  'proc.band_i1_body': { en: 'Logo, colors, typography, and layout system — cohesive and premium.', es: 'Logo, colores, tipografía y sistema de diseño — cohesivo y premium.' },
  'proc.band_i1_title': { en: 'A Refreshed Visual Brand', es: 'Una Marca Visual Renovada' },
  'proc.band_i2_body': { en: 'Fast, editorial-quality design built around your existing tools and workflow.', es: 'Diseño rápido de calidad editorial construido alrededor de tus herramientas y flujo de trabajo.' },
  'proc.band_i2_title': { en: 'A High-End Web Presence', es: 'Una Presencia Web de Alto Nivel' },
  'proc.band_i3_body': { en: 'Optimized so map engines, AI tools, and conversational search recommend you first.', es: 'Optimizado para que motores de mapas, herramientas IA y búsqueda conversacional te recomienden primero.' },
  'proc.band_i3_title': { en: 'AI Search Visibility', es: 'Visibilidad en Búsqueda IA' },
  'proc.band_i4_body': { en: 'Every asset, login, and platform credential — organized and transferred to you.', es: 'Cada activo, acceso y credencial de plataforma — organizados y transferidos a ti.' },
  'proc.band_i4_title': { en: 'Full Ownership &amp; Control', es: 'Propiedad y Control Total' },
  'proc.band_i5_body': { en: 'Plain-English walkthroughs so anyone on your team can manage the system.', es: 'Tutoriales claros para que cualquier miembro de tu equipo pueda administrar el sistema.' },
  'proc.band_i5_title': { en: 'Video Guides for Your Team', es: 'Guías en Video para tu Equipo' },
  'proc.band_i6_body': { en: 'No retainer, no monthly fees, no one holding your brand hostage.', es: 'Sin contrato, sin cuotas mensuales, nadie reteniendo tu marca.' },
  'proc.band_i6_title': { en: 'Zero Agency Dependency', es: 'Cero Dependencia de Agencias' },
  'proc.band_label': { en: 'What You Walk Away With', es: 'Con Qué Te Vas' },
  'proc.band_title': { en: 'Everything built. Everything yours. Nothing left behind.', es: 'Todo construido. Todo tuyo. Nada queda atrás.' },
  'proc.cta_btn': { en: 'Apply for the Summer Digital Reset', es: 'Aplicar para el Summer Digital Reset' },
  'proc.cta_heading': { en: 'Ready to get clear?', es: '¿Lista para aclarar tu camino?' },
  'proc.cta_sub': { en: 'Every engagement starts with a clarity conversation. Tell us about your business and where you are trying to go.', es: 'Cada proyecto comienza con una conversación de claridad. Cuéntanos sobre tu negocio y a dónde quieres llegar.' },
  'proc.hero_eyebrow': { en: 'THE BALDWIN &amp; CO. METHOD', es: 'EL MÉTODO BALDWIN & CO.' },
  'proc.hero_sub': { en: 'Every project is different. Every result is built on the same four-step foundation.', es: 'Cada proyecto es diferente. Cada resultado se basa en la misma fundación de cinco pasos.' },
  'proc.hero_title': { en: 'From Scattered to Strategic.', es: 'De lo Disperso a lo Estratégico.' },
  'proc.intro_sub': { en: 'Every project is different. Every result is intentional. Here is how we move from your initial inquiry to a launched, polished digital presence — without wasted time, unclear expectations, or agency dependency.', es: 'Cada proyecto es diferente. Cada resultado es intencional. Así es como pasamos de tu consulta inicial a una presencia digital pulida y lanzada — sin tiempo perdido, expectativas poco claras, ni dependencia de agencias.' },
  'proc.timeline_note': { en: 'Most projects are completed within two to six weeks, depending on scope, selected services, and content readiness.', es: 'La mayoría de los proyectos se completan en dos a seis semanas, dependiendo del alcance, los servicios seleccionados y la preparación del contenido.' },

  // ── SUMMER SPECIAL / SUMMER DIGITAL RESET SALES PAGE ──────────────────────────
  'ss.cta_btn': { en: 'Apply for the Summer Digital Reset', es: 'Aplicar para el Summer Digital Reset' },
  'ss.cta_heading': { en: 'Ready to get started?', es: '¿Lista para aplicar?' },
  'ss.cta_sub': { en: 'Fill out the inquiry form and we\'ll confirm fit and scope before anything begins. Fast to start, clean to finish.', es: 'Cada proyecto del Especial de Verano comienza con un breve formulario de consulta. Confirmamos la compatibilidad y el alcance antes de comenzar.' },
  'ss.d1': { en: 'Custom Homepage', es: 'Página de Inicio Personalizada' },
  'ss.d10': { en: 'Contact Form Integration', es: 'Integración de Formulario de Contacto' },
  'ss.d11': { en: 'Domain and Launch Assistance', es: 'Asistencia de Dominio y Lanzamiento' },
  'ss.d12': { en: '30 Days of Post-Launch Support', es: '30 Días de Soporte Post-Lanzamiento' },
  'ss.d2': { en: 'About Page', es: 'Página de Nosotros' },
  'ss.d3': { en: 'Services Page', es: 'Página de Servicios' },
  'ss.d4': { en: 'Contact Page', es: 'Página de Contacto' },
  'ss.d5': { en: 'Mobile-Responsive Design', es: 'Diseño Responsivo para Móvil' },
  'ss.d6': { en: 'Foundational Brand Polish', es: 'Pulido Básico de Marca' },
  'ss.d7': { en: 'Website Copy Organization', es: 'Organización del Contenido Web' },
  'ss.d8': { en: 'Foundational SEO', es: 'SEO Fundamental' },
  'ss.d9': { en: 'AI-Search-Ready Structure', es: 'Estructura Lista para Búsqueda IA' },
  'ss.deliverables_heading': { en: 'WHAT IS INCLUDED', es: 'Qué Incluye' },
  'ss.disclaimer': { en: 'This package is intentionally focused. If you need complete branding, advanced functionality, booking integrations, ecommerce, extensive copywriting, or more than four pages, we\'ll put together a custom proposal that fits your project properly.', es: 'Este paquete es intencionalmente simplificado. Los negocios que requieran branding completo, funcionalidad avanzada, integraciones de reservas, comercio electrónico, redacción extensa, aplicaciones personalizadas o más de cuatro páginas recibirán una propuesta personalizada.' },
  'ss.fit_heading': { en: 'IS THIS RIGHT FOR YOU?', es: '¿Es Esto Para Ti?' },
  'ss.fit_no_1': { en: 'A complete visual brand transformation', es: 'Una transformación visual completa de marca' },
  'ss.fit_no_2': { en: 'Advanced booking or scheduling functionality', es: 'Funcionalidad avanzada de reservas o citas' },
  'ss.fit_no_3': { en: 'Ecommerce or payment integrations', es: 'Integraciones de comercio electrónico o pagos' },
  'ss.fit_no_4': { en: 'A website with more than four pages', es: 'Un sitio web con más de cuatro páginas' },
  'ss.fit_no_5': { en: 'Extensive custom copywriting', es: 'Redacción personalizada extensa' },
  'ss.fit_no_6': { en: 'Complex third-party integrations', es: 'Integraciones complejas de terceros' },
  'ss.fit_no_7': { en: 'A custom user experience', es: 'Una experiencia de usuario personalizada' },
  'ss.fit_no_heading': { en: 'A Custom Website Design may be a better fit if you need:', es: 'Un Diseño Web Personalizado puede ser mejor si necesitas:' },
  'ss.fit_yes_1': { en: 'A newer business ready to establish a first professional online presence', es: 'Un negocio nuevo estableciendo tu primera presencia profesional en línea' },
  'ss.fit_yes_2': { en: 'A small local business with an outdated site that no longer represents you well', es: 'Un pequeño negocio local reemplazando un sitio web básico u obsoleto' },
  'ss.fit_yes_3': { en: 'A business with clear services and straightforward website needs', es: 'Un negocio con servicios claros y necesidades de sitio web simples' },
  'ss.fit_yes_4': { en: 'Ready for a polished, professional result — without a full brand overhaul', es: 'Listo para un resultado limpio y pulido sin una revisión completa de marca' },
  'ss.fit_yes_heading': { en: 'This is the right fit if you are:', es: 'El Especial de Verano es ideal si eres:' },
  'ss.hero_eyebrow': { en: 'LIMITED SUMMER OFFER', es: 'OFERTA DE VERANO LIMITADA' },
  'ss.hero_sub': { en: 'A clean, custom four-page website for small businesses that are done with DIY — and ready for something that actually looks the part. No full brand transformation required.', es: 'Un paquete de sitio web simplificado creado para pequeños negocios que necesitan una presencia en línea limpia y pulida sin comprometerse a una transformación completa de marca y sitio web.' },
  'ss.hero_title': { en: 'The $999 Summer Digital Reset', es: 'El Summer Digital Reset de $999' },
  'ss.investment_heading': { en: 'INVESTMENT', es: 'Inversión' },
  'ss.investment_price': { en: '$999', es: '$999' },
  'ss.payment_terms': { en: '50% due at signing. 50% due when the site is completed, approved, and ready to launch. No surprises.', es: '50% al firmar. 50% cuando el sitio esté completado, aprobado y listo para lanzar.' },

  // ── CONNECT ──────────────────────────
  'cn.broken_all': { en: 'All of It', es: 'Todo' },
  'cn.broken_branding': { en: 'Branding', es: 'Marca' },
  'cn.broken_label_new': { en: 'What feels broken right now? (select all that apply)', es: '¿Qué sientes que está roto ahora? (selecciona todo lo que aplique)' },
  'cn.broken_messaging': { en: 'Messaging', es: 'Mensajería' },
  'cn.broken_visibility': { en: 'Visibility', es: 'Visibilidad' },
  'cn.broken_website': { en: 'Website', es: 'Sitio Web' },
  'cn.form_desc_main': { en: 'Fill out the form below and we\'ll be in touch within one business day. Prefer to reach out directly? Email <a href="mailto:kate@keywestkate.com">kate@keywestkate.com</a> or text <a href="sms:3052407828">(305) 240-7828</a>.', es: 'Llena el formulario, escríbenos a <a href="mailto:kate@keywestkate.com">kate@keywestkate.com</a>, o envíanos un mensaje al <a href="sms:3052407828">(305) 240-7828</a>.' },
  'cn.form_title_main': { en: 'Start the conversation.', es: 'Cuéntanos sobre tu proyecto.' },
  'cn.hero_sub_new': { en: 'Tell us where you are, what\'s not working, and where you want to go.', es: 'Cuéntanos sobre tu negocio y lo que estás lista para cambiar.' },
  'cn.hero_title': { en: 'Let\'s Talk.', es: 'Vamos a Aclarar.' },
  'cn.label_btype': { en: 'What type of business do you have?', es: '¿Qué tipo de negocio tienes?' },
  'cn.label_budget': { en: 'Approximate Budget', es: 'Presupuesto Aproximado' },
  'cn.label_business': { en: 'Business Name', es: 'Nombre del Negocio' },
  'cn.label_email': { en: 'Email Address', es: 'Correo Electrónico' },
  'cn.label_ig': { en: 'Instagram URL', es: 'URL de Instagram' },
  'cn.label_message': { en: 'Your Message', es: 'Tu Mensaje' },
  'cn.label_name': { en: 'Your Name', es: 'Tu Nombre' },
  'cn.label_phone': { en: 'Phone Number', es: 'Número de Teléfono' },
  'cn.label_service': { en: 'Service You Are Interested In', es: 'Servicio de tu Interés' },
  'cn.label_timeline': { en: 'Ideal Project Timeline', es: 'Cronograma Ideal del Proyecto' },
  'cn.label_website': { en: 'Website URL', es: 'URL del Sitio Web' },
  'cn.label_website_q': { en: 'Do you currently have a website?', es: '¿Tienes un sitio web actualmente?' },
  'cn.select_one': { en: 'Select one', es: 'Selecciona una opción' },
  'cn.submit_new': { en: 'Send My Inquiry', es: 'Inicia Tu Proyecto' },
  'cn.summer_label_new': { en: 'I am interested in the $999 Summer Digital Reset', es: 'Estoy interesada en el Summer Digital Reset de $999' },

  // ── FAQ ──────────────────────────
  'faq.a10_new': { en: '<p>When someone asks ChatGPT, Perplexity, or Google Gemini for a business recommendation, those tools pull from well-structured web content to generate their answers. If your website is not built to be understood by AI, you will not be recommended. Every Baldwin &amp; Co. website is structured so AI tools can correctly read, understand, and cite your business.</p>', es: '<p>Cuando alguien le pide a ChatGPT, Perplexity o Google Gemini una recomendación de negocio, esas herramientas extraen de contenido web bien estructurado para generar sus respuestas. Si tu sitio web no está construido para ser entendido por IA, no serás recomendada. Cada sitio web de Baldwin &amp; Co. está estructurado para que las herramientas de IA puedan leer, entender y citar correctamente tu negocio.</p>' },
  'faq.a11_new': { en: '<p>The $999 Summer Digital Reset is a focused package that includes a custom four-page website, foundational brand polish, and AI-ready technical setup. It is designed for business owners who need a clean, professional online presence without committing to a full brand transformation. Investment is $999 flat, split 50/50.</p>', es: '<p>El Summer Digital Reset de $999 es un paquete enfocado que incluye un sitio web personalizado de cuatro páginas, pulido básico de marca y configuración técnica lista para IA. Está diseñado para dueños de negocios que necesitan una presencia en línea limpia y profesional sin comprometerse con una transformación completa de marca. La inversión es $999 fijo, dividido 50/50.</p>' },
  'faq.a12_new': { en: '<p>The $999 Summer Digital Reset does not include complete brand identity development, custom logo design from scratch, ecommerce, booking integrations, advanced functionality, more than four pages, or extensive custom copywriting. Businesses with those needs will receive a custom proposal.</p>', es: '<p>El Summer Digital Reset de $999 no incluye desarrollo completo de identidad de marca, diseño de logo desde cero, comercio electrónico, integraciones de reservas, funcionalidad avanzada, más de cuatro páginas, ni redacción personalizada extensa. Los negocios con esas necesidades recibirán una propuesta personalizada.</p>' },
  'faq.a13_new': { en: '<p>All projects include 30 days of post-delivery support for questions, minor adjustments, and clarifications. Ongoing support beyond that window is available as a separate engagement.</p>', es: '<p>Todos los proyectos incluyen 30 días de soporte post-entrega para preguntas, ajustes menores y aclaraciones. El soporte continuo más allá de esa ventana está disponible como un proyecto separado.</p>' },
  'faq.a14_new': { en: '<p>No. We work with business owners nationwide. Kate is based in Key West, and that is part of her story — but Baldwin &amp; Co. is not a local marketing company. We serve established business owners wherever they are.</p>', es: '<p>No. Trabajamos con dueños de negocios en todo el país. Kate está basada en Key West, y eso es parte de su historia — pero Baldwin &amp; Co. no es una empresa de marketing local. Servimos a dueños de negocios establecidos dondequiera que estén.</p>' },
  'faq.a15_new': { en: '<p>Kate personally reviews every inquiry within one to two business days. If the project sounds like a good fit, she will follow up to schedule a short conversation about your goals, your business, and where you want to go. From there, you will receive a clear proposal with scope and pricing — no pressure, no commitment required.</p>', es: '<p>Kate revisa personalmente cada consulta dentro de uno a dos días hábiles. Si el proyecto parece una buena combinación, hará un seguimiento para programar una breve conversación sobre tus objetivos, tu negocio y a dónde quieres llegar. A partir de ahí, recibirás una propuesta clara con alcance y precios — sin presión, sin compromiso requerido.</p>' },
  'faq.a1_new': { en: '<p>Baldwin &amp; Co. is a boutique brand strategy and digital design studio. We help established business owners gain clarity on their message, refine their brand identity, and build a digital presence that reflects where their business actually is today. We work with business owners nationwide.</p>', es: '<p>Baldwin &amp; Co. es un estudio boutique de estrategia de marca y diseño digital. Ayudamos a los dueños de negocios establecidos a ganar claridad sobre su mensaje, refinar su identidad de marca y construir una presencia digital que refleje dónde está su negocio hoy. Trabajamos con dueños de negocios en todo el país.</p>' },
  'faq.a2_new': { en: '<p>We work with established business owners who have built something real — but whose brand, messaging, or digital presence has not kept up with where they are. If you feel stuck, scattered, or like your business looks smaller than it actually is, you are exactly who we built this for.</p>', es: '<p>Trabajamos con dueños de negocios establecidos que han construido algo real — pero cuya marca, mensajería o presencia digital no ha seguido el ritmo de donde están. Si te sientes estancado, disperso o sientes que tu negocio parece más pequeño de lo que realmente es, eres exactamente para quien creamos esto.</p>' },
  'faq.a3_new': { en: '<p>Everywhere. Baldwin &amp; Co. works with business owners across the country. All projects are completed remotely. Kate is based in Key West, Florida, and has worked with clients from South Florida to the Gulf Coast, the Southeast, and beyond.</p>', es: '<p>En todas partes. Baldwin &amp; Co. trabaja con dueños de negocios en todo el país. Todos los proyectos se completan de forma remota. Kate está basada en Key West, Florida, y ha trabajado con clientes desde el sur de Florida hasta la Costa del Golfo, el sureste y más allá.</p>' },
  'faq.a4_new': { en: '<p>A Brand Clarity Session is a focused strategy engagement designed to help you define your message, clarify your services, identify your audience, and map your next steps. It is the best starting point for business owners who feel unclear, stuck, or ready to make a change — before committing to a larger project.</p>', es: '<p>Una Sesión de Claridad de Marca es un compromiso de estrategia enfocado diseñado para ayudarte a definir tu mensaje, aclarar tus servicios, identificar tu audiencia y trazar tus próximos pasos. Es el mejor punto de partida para los dueños de negocios que se sienten poco claros, estancados o listos para hacer un cambio — antes de comprometerse con un proyecto más grande.</p>' },
  'faq.a5_new': { en: '<p>Starting investments: Brand Clarity Session from $350. Brand Strategy Intensive from $450. Brand Refresh from $1,250. Complete Brand Identity from $5,000. Website Strategy &amp; Design from $5,000. Digital Presence Cleanup from $750. Complete Brand Transformation from $4,500. The Summer Digital Reset is a flat $999. All pricing is confirmed in writing before any work begins.</p>', es: '<p>Inversiones iniciales: Sesión de Claridad de Marca desde $350. Intensivo de Estrategia de Marca desde $450. Renovación de Marca desde $1,250. Identidad de Marca Completa desde $5,000. Estrategia y Diseño Web desde $5,000. Limpieza de Presencia Digital desde $750. Transformación Completa de Marca desde $4,500. El Summer Digital Reset tiene un precio fijo de $999. Todo el precio se confirma por escrito antes de que comience cualquier trabajo.</p>' },
  'faq.a6_new': { en: '<p>Starting at means the listed price is the floor — the minimum investment for that service at its most straightforward scope. Final pricing depends on content complexity, number of pages or assets, copywriting requirements, functionality needs, and timeline. We provide a clear proposal before any work begins.</p>', es: '<p>"Desde" significa que el precio indicado es el mínimo — la inversión mínima para ese servicio en su alcance más simple. El precio final depende de la complejidad del contenido, número de páginas o activos, requisitos de redacción, necesidades de funcionalidad y cronograma. Proporcionamos una propuesta clara antes de que comience cualquier trabajo.</p>' },
  'faq.a7_new': { en: '<p>Most projects are completed within two to six weeks, depending on the selected service, your content readiness, and the scope of the work. A Brand Clarity Session can be completed in one to two weeks. A complete brand and website transformation typically takes four to six weeks.</p>', es: '<p>La mayoría de los proyectos se completan en dos a seis semanas, dependiendo del servicio seleccionado, la preparación del contenido y el alcance del trabajo. Una Sesión de Claridad de Marca puede completarse en una a dos semanas. Una transformación completa de marca y sitio web generalmente toma cuatro a seis semanas.</p>' },
  'faq.a8_new': { en: '<p>All projects are structured as 50% at signing and 50% upon completion and approval. You never pay the full balance until you are satisfied with the result.</p>', es: '<p>Todos los proyectos están estructurados como 50% al firmar y 50% al completar y aprobar. Nunca pagas el saldo completo hasta que estés satisfecha con el resultado.</p>' },
  'faq.a9_new': { en: '<p>Yes. Every file, login, domain credential, hosting account, and brand asset is transferred to you at the end of the project. There are no ongoing fees, no platform lock-in, and no dependency on Baldwin &amp; Co. after delivery.</p>', es: '<p>Sí. Cada archivo, acceso, credencial de dominio, cuenta de hosting y activo de marca se transfiere a ti al finalizar el proyecto. No hay tarifas continuas, ni bloqueo de plataforma, ni dependencia de Baldwin &amp; Co. después de la entrega.</p>' },
  'faq.hero_title': { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
  'faq.left_btn': { en: 'Start Your Project', es: 'Inicia Tu Proyecto' },
  'faq.left_heading_new': { en: 'Everything you need to know.', es: 'Todo lo que necesitas saber.' },
  'faq.left_sub': { en: 'Questions about our services, process, pricing, and what to expect.', es: 'Preguntas sobre nuestros servicios, proceso, precios y qué esperar.' },
  'faq.q10_new': { en: 'What is AI Search Visibility?', es: '¿Qué es la Visibilidad en Búsqueda de IA?' },
  'faq.q11_new': { en: 'What is the $999 Summer Digital Reset?', es: '¿Qué es el Summer Digital Reset de $999?' },
  'faq.q12_new': { en: 'What is not included in the $999 Summer Digital Reset?', es: '¿Qué no incluye el Summer Digital Reset de $999?' },
  'faq.q13_new': { en: 'Do you provide ongoing support?', es: '¿Ofrecen soporte continuo?' },
  'faq.q14_new': { en: 'Is Baldwin &amp; Co. only for businesses in the Florida Keys?', es: '¿Baldwin &amp; Co. es solo para negocios en los Florida Keys?' },
  'faq.q15_new': { en: 'What happens after I reach out?', es: '¿Qué pasa después de contactarlos?' },
  'faq.q1_new': { en: 'What does Baldwin &amp; Co. do?', es: '¿Qué hace Baldwin & Co.?' },
  'faq.q2_new': { en: 'Who is Baldwin &amp; Co. for?', es: '¿Para quién es Baldwin &amp; Co.?' },
  'faq.q3_new': { en: 'Where do you work?', es: '¿Dónde trabajan?' },
  'faq.q4_new': { en: 'What is a Brand Clarity Session?', es: '¿Qué es una Sesión de Claridad de Marca?' },
  'faq.q5_new': { en: 'How much do projects cost?', es: '¿Cuánto cuestan los proyectos?' },
  'faq.q6_new': { en: 'What does "Starting at" mean?', es: '¿Qué significa "Desde"?' },
  'faq.q7_new': { en: 'How long does a project take?', es: '¿Cuánto tiempo toma un proyecto?' },
  'faq.q8_new': { en: 'Do you offer payment plans?', es: '¿Ofrecen planes de pago?' },
  'faq.q9_new': { en: 'Will I own everything when we are done?', es: '¿Seré dueña de todo cuando terminemos?' },
};

// ── ENGINE ───────────────────────────────────────────────────
(function () {
  // Reads the visitor's saved language preference. Falls back to English
  // only when nothing valid is stored — this used to be hardcoded to 'en'
  // on every load, which silently reset the language on every navigation.
  function getSavedLang() {
    var stored;
    try {
      stored = localStorage.getItem('bc_lang');
    } catch (e) {
      stored = null;
    }
    return stored === 'es' ? 'es' : 'en';
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const entry = TRANSLATIONS[key];
      // Fail safe: an unrecognized key leaves the existing HTML content in
      // place instead of writing "undefined" or blanking the element.
      if (entry && entry[lang] !== undefined) {
        el.innerHTML = entry[lang];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const entry = TRANSLATIONS[key];
      if (entry && entry[lang] !== undefined) {
        el.innerHTML = entry[lang];
      }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const entry = TRANSLATIONS[key];
      if (entry && entry[lang] !== undefined) {
        el.setAttribute('placeholder', entry[lang]);
      }
    });
    try {
      localStorage.setItem('bc_lang', lang);
    } catch (e) {
      // localStorage unavailable (private browsing, etc.) — language choice
      // just won't persist across page loads; the toggle still works in-page.
    }
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.querySelectorAll('.lang-toggle__en, .lang-toggle__es').forEach(s => s.style.display = 'none');
      const spanToShow = btn.querySelector(lang === 'en' ? '.lang-toggle__en' : '.lang-toggle__es');
      if (spanToShow) spanToShow.style.display = '';
      btn.setAttribute('data-current', lang);
      // Programmatic state for assistive tech, matching the visual toggle state.
      btn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getSavedLang();
    // English is already the language the HTML is authored in, so the
    // English case does not need a DOM rewrite on initial load — this is
    // what previously let a stale/duplicate lang.js value silently
    // overwrite correct HTML content even for English-only visitors.
    // Spanish still needs to apply on load so a returning Spanish-reading
    // visitor sees Spanish immediately, and the toggle buttons' visual
    // state always needs to sync to the saved preference either way.
    if (savedLang === 'es') {
      applyLang('es');
    } else {
      document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.querySelectorAll('.lang-toggle__en, .lang-toggle__es').forEach(s => s.style.display = 'none');
        const spanToShow = btn.querySelector('.lang-toggle__en');
        if (spanToShow) spanToShow.style.display = '';
        btn.setAttribute('data-current', 'en');
        btn.setAttribute('aria-pressed', 'false');
      });
    }

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = btn.getAttribute('data-current') || 'en';
        applyLang(current === 'en' ? 'es' : 'en');
      });
    });
  });
})();
