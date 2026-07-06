// Baldwin & Co. — Language Toggle (EN / ES)
const TRANSLATIONS = {

  // ── INDEX (new keys) ────────────────────────────
  'index.stuck_eyebrow': { en: 'FEELING STUCK?', es: '¿TE SIENTES ESTANCADO/A?' },
  'index.stuck_p1':      { en: 'You know your business has evolved.<br>You know your website no longer reflects who you are.<br>You know your messaging feels scattered.', es: 'Sabes que tu negocio ha evolucionado.<br>Sabes que tu sitio web ya no refleja quién eres.<br>Sabes que tu mensaje se siente disperso.' },
  'index.stuck_p2':      { en: 'But you are not sure where to start.', es: 'Pero no estás seguro/a de por dónde empezar.' },
  'index.stuck_p3':      { en: 'That is where Baldwin &amp; Co. comes in.', es: 'Ahí es donde entra Baldwin &amp; Co.' },
  'index.stuck_p4':      { en: 'We help business owners organize years of ideas into a clear message, refined brand, and digital presence that reflects where they are today.', es: 'Ayudamos a los dueños de negocios a organizar años de ideas en un mensaje claro, una marca refinada y una presencia digital que refleja dónde están hoy.' },
  'index.svc_eyebrow':  { en: 'SERVICES', es: 'SERVICIOS' },
  'index.svc_heading':  { en: 'What We Build Together', es: 'Lo Que Construimos Juntos' },
  'index.svc_intro':    { en: 'Every business is different. Every engagement starts with understanding where you are, where you are going, and what is getting in the way. From there, we build exactly what you need — nothing more, nothing less.', es: 'Cada negocio es diferente. Cada proyecto comienza con entender dónde estás, a dónde vas y qué está en el camino. A partir de ahí, construimos exactamente lo que necesitas — nada más, nada menos.' },
  'index.svc1_tag':     { en: 'BRAND STRATEGY & IDENTITY', es: 'ESTRATEGIA DE MARCA E IDENTIDAD' },
  'index.svc1_price':   { en: 'Starting at $450', es: 'Desde $450' },
  'index.svc1_desc':    { en: 'Clarify your positioning, refine your message, and create a visual identity that reflects the true caliber of your business.', es: 'Clarifica tu posicionamiento, refina tu mensaje y crea una identidad visual que refleje el verdadero calibre de tu negocio.' },
  'index.svc1_btn':     { en: 'Explore Branding Services', es: 'Ver Servicios de Branding' },
  'index.svc2_tag':     { en: 'CUSTOM WEBSITE DESIGN', es: 'DISEÑO WEB PERSONALIZADO' },
  'index.svc2_price':   { en: 'Starting at $2,500', es: 'Desde $2,500' },
  'index.svc2_desc':    { en: 'Strategic, editorial-quality websites built to communicate clearly, convert confidently, and perform beautifully across every screen.', es: 'Sitios web de calidad editorial construidos para comunicar con claridad, convertir con confianza y verse impecables en cualquier pantalla.' },
  'index.svc2_btn':     { en: 'Explore Website Design', es: 'Ver Diseño Web' },
  'index.svc3_tag':     { en: 'BRAND & WEBSITE TRANSFORMATION', es: 'TRANSFORMACIÓN DE MARCA Y SITIO WEB' },
  'index.svc3_price':   { en: 'Starting at $4,500', es: 'Desde $4,500' },
  'index.svc3_desc':    { en: 'A complete brand and digital transformation combining strategy, identity, messaging, website design, and launch support.', es: 'Una transformación completa de marca y digital que combina estrategia, identidad, mensajería, diseño web y soporte de lanzamiento.' },
  'index.svc3_btn':     { en: 'Explore the Full Experience', es: 'Ver la Experiencia Completa' },
  'index.svc4_tag':     { en: 'CUSTOM CREATIVE PROJECTS', es: 'PROYECTOS CREATIVOS PERSONALIZADOS' },
  'index.svc4_price':   { en: 'Call for a Custom Quote', es: 'Llama para una Cotización' },
  'index.svc4_desc':    { en: 'Creative direction, marketing collateral, campaign design, social media branding, additional website pages, and custom digital projects.', es: 'Dirección creativa, materiales de marketing, diseño de campañas, branding para redes sociales, páginas web adicionales y proyectos digitales personalizados.' },
  'index.svc4_btn':     { en: 'Request a Quote', es: 'Solicitar Cotización' },
  'index.summer_eyebrow': { en: 'LIMITED SUMMER OFFER', es: 'OFERTA DE VERANO LIMITADA' },
  'index.summer_title': { en: 'The Summer Website Special', es: 'El Especial de Verano' },
  'index.summer_sub':   { en: 'A streamlined four-page website package for small businesses that need a polished, professional online presence.', es: 'Un paquete de sitio web de cuatro páginas para pequeños negocios que necesitan una presencia en línea pulida y profesional.' },
  'index.summer_price': { en: 'Investment: <strong>$999</strong>', es: 'Inversión: <strong>$999</strong>' },
  'index.summer_btn':   { en: 'View the Summer Special', es: 'Ver el Especial de Verano' },
  'index.hiw_heading':  { en: 'Your new brand, built in weeks — not months.', es: 'Tu nueva marca, construida en semanas — no meses.' },
  'index.hiw_cta':      { en: 'Start Your Project', es: 'Inicia Tu Proyecto' },
  'index.founder_eyebrow': { en: 'ABOUT', es: 'ACERCA DE' },
  'index.founder_name': { en: 'Kate Baldwin', es: 'Kate Baldwin' },
  'index.founder_title_str': { en: 'Founder, Baldwin & Co.', es: 'Fundadora, Baldwin & Co.' },

  // ── BLUEPRINT (new keys) ─────────────────────────
  'bp.s0_tag':          { en: 'BRAND CLARITY SESSION', es: 'SESIÓN DE CLARIDAD DE MARCA' },
  'bp.s0_price':        { en: 'Starting at $350', es: 'Desde $350' },
  'bp.s0_desc':         { en: 'A focused strategy session designed to help business owners define their message, clarify their services, identify their audience, and map their next steps. This is the first step before any design or website project begins.', es: 'Una sesión de estrategia enfocada diseñada para ayudar a los dueños de negocios a definir su mensaje, aclarar sus servicios, identificar su audiencia y trazar sus próximos pasos. Este es el primer paso antes de que comience cualquier proyecto de diseño o sitio web.' },
  'bp.s0_deliverables': { en: 'Brand positioning · Core message development · Audience definition · Service clarity · Direction roadmap · Next step recommendations', es: 'Posicionamiento de marca · Desarrollo del mensaje principal · Definición de audiencia · Claridad de servicios · Hoja de ruta de dirección · Recomendaciones de próximos pasos' },
  'bp.s0_cta':          { en: 'Book a Clarity Session', es: 'Reservar una Sesión de Claridad' },
  'bp.intro_body':      { en: 'Most business owners come to us with years of expertise and a digital presence that does not reflect it. We close that gap. The services below represent starting investments — final scope and pricing are always confirmed before any work begins.', es: 'La mayoría de los dueños de negocios llegan a nosotros con años de experiencia y una presencia digital que no lo refleja. Cerramos esa brecha. Los servicios a continuación representan inversiones iniciales — el alcance y el precio finales siempre se confirman antes de que comience cualquier trabajo.' },
  'bp.s1_tag':          { en: 'BRAND STRATEGY INTENSIVE', es: 'INTENSIVO DE ESTRATEGIA DE MARCA' },
  'bp.s1_price':        { en: 'Starting at $450', es: 'Desde $450' },
  'bp.s1_desc':         { en: 'A focused strategy session for businesses that need clarity before investing in design.', es: 'Una sesión de estrategia enfocada para negocios que necesitan claridad antes de invertir en diseño.' },
  'bp.s1_cta':          { en: 'Start with Strategy', es: 'Comenzar con Estrategia' },
  'bp.s2_tag':          { en: 'BRAND REFRESH', es: 'RENOVACIÓN DE MARCA' },
  'bp.s2_price':        { en: 'Starting at $1,250', es: 'Desde $1,250' },
  'bp.s2_desc':         { en: 'For established businesses that have outgrown their current look but do not need to start from scratch.', es: 'Para negocios establecidos que han superado su apariencia actual pero no necesitan empezar de cero.' },
  'bp.s2_cta':          { en: 'Refresh My Brand', es: 'Renovar Mi Marca' },
  'bp.s3_tag':          { en: 'COMPLETE BRAND IDENTITY', es: 'IDENTIDAD DE MARCA COMPLETA' },
  'bp.s3_price':        { en: 'Starting at $2,500', es: 'Desde $2,500' },
  'bp.s3_desc':         { en: 'A complete visual and verbal identity built around the business, the audience, and the goals.', es: 'Una identidad visual y verbal completa creada alrededor del negocio, la audiencia y los objetivos.' },
  'bp.s3_cta':          { en: 'Build My Brand', es: 'Construir Mi Marca' },
  'bp.s4_tag':          { en: 'WEBSITE STRATEGY & DESIGN', es: 'ESTRATEGIA Y DISEÑO WEB' },
  'bp.s4_price':        { en: 'Starting at $2,500', es: 'Desde $2,500' },
  'bp.s4_desc':         { en: 'A custom website built around the business brand, audience, services, and goals.', es: 'Un sitio web personalizado construido alrededor de la marca, la audiencia, los servicios y los objetivos del negocio.' },
  'bp.s4_cta':          { en: 'Build My Website', es: 'Construir Mi Sitio Web' },
  'bp.s5_tag':          { en: 'COMPLETE BRAND TRANSFORMATION', es: 'TRANSFORMACIÓN COMPLETA DE MARCA' },
  'bp.s5_price':        { en: 'Starting at $4,500', es: 'Desde $4,500' },
  'bp.s5_desc':         { en: 'The complete Baldwin & Co. experience, combining strategy, identity, messaging, custom website design, and launch support.', es: 'La experiencia completa de Baldwin & Co., combinando estrategia, identidad, mensajería, diseño web personalizado y soporte de lanzamiento.' },
  'bp.s5_cta':          { en: 'Transform My Brand', es: 'Transformar Mi Marca' },
  'bp.s6_tag':          { en: 'DIGITAL PRESENCE CLEANUP', es: 'LIMPIEZA DE PRESENCIA DIGITAL' },
  'bp.s6_price':        { en: 'Starting at $750', es: 'Desde $750' },
  'bp.s6_desc':         { en: 'Strategic communication and digital visibility support for businesses that need stronger messaging.', es: 'Comunicación estratégica y soporte de visibilidad digital para negocios que necesitan mensajería más sólida.' },
  'bp.s6_cta':          { en: 'Strengthen My Message', es: 'Fortalecer Mi Mensaje' },
  'bp.s7_tag':          { en: 'SUMMER DIGITAL RESET', es: 'SUMMER DIGITAL RESET' },
  'bp.s7_price':        { en: '$999 Flat', es: '$999 Fijo' },
  'bp.s7_desc':         { en: 'A focused $999 package that includes a custom four-page website, foundational brand polish, and AI-ready technical setup. Designed for business owners who need a clean, professional online presence without committing to a full brand transformation. Investment is $999 flat, split 50/50.', es: 'Un paquete enfocado de $999 que incluye un sitio web personalizado de cuatro páginas, pulido básico de marca y configuración técnica lista para IA. Diseñado para dueños de negocios que necesitan una presencia en línea limpia y profesional sin comprometerse con una transformación completa de marca. La inversión es $999 fijo, dividido 50/50.' },
  'bp.s7_cta':          { en: 'Book the Summer Digital Reset', es: 'Reservar el Summer Digital Reset' },
  'bp.outro_heading':   { en: 'Not sure where to start?', es: '¿No sabes por dónde empezar?' },
  'bp.outro_btn':       { en: 'Book a Clarity Session', es: 'Reservar una Sesión de Claridad' },

  // ── PROCESS (new keys) ───────────────────────────
  'proc.hero_eyebrow':  { en: 'THE BALDWIN & CO. METHOD', es: 'EL MÉTODO BALDWIN & CO.' },
  'proc.hero_sub':      { en: 'Every project is different. Every result is built on the same five-step foundation.', es: 'Cada proyecto es diferente. Cada resultado se basa en la misma fundación de cinco pasos.' },
  'proc.step1_title':   { en: 'Discover', es: 'Descubrir' },
  'proc.step1_body':    { en: 'We start by understanding where your business has been and where it is going. We look at your current brand, messaging, digital presence, and goals — and identify what is working and what is not.', es: 'Comenzamos por entender dónde ha estado tu negocio y hacia dónde va. Analizamos tu marca actual, mensajería, presencia digital y objetivos — e identificamos lo que funciona y lo que no.' },
  'proc.step2_title':   { en: 'Clarify', es: 'Clarificar' },
  'proc.step2_body':    { en: 'We define your core message, your audience, and your direction. This becomes the strategic foundation that every creative decision is built on. Nothing moves forward until the direction is clear.', es: 'Definimos tu mensaje principal, tu audiencia y tu dirección. Esto se convierte en la base estratégica sobre la que se toma cada decisión creativa. Nada avanza hasta que la dirección sea clara.' },
  'proc.step3_title':   { en: 'Refine', es: 'Refinar' },
  'proc.step3_body':    { en: 'We align your content, branding, and digital presence with the strategy. This is where your positioning gets polished and your visual identity gets tightened.', es: 'Alineamos tu contenido, branding y presencia digital con la estrategia. Aquí es donde tu posicionamiento se pule y tu identidad visual se define.' },
  'proc.step4_title':   { en: 'Build', es: 'Construir' },
  'proc.step4_body':    { en: 'We create the tools you need — website, brand assets, messaging, or all of the above. Everything is built to support your goals and reflect where your business actually is today.', es: 'Creamos las herramientas que necesitas — sitio web, activos de marca, mensajería, o todo lo anterior. Todo se construye para apoyar tus objetivos y reflejar dónde está tu negocio hoy.' },
  'proc.step5_title':   { en: 'Review', es: 'Revisar' },
  'proc.step5_body':    { en: 'You review the work and provide organized feedback. We keep revisions focused and efficient.', es: 'Revisas el trabajo y proporcionas retroalimentación organizada. Mantenemos las revisiones enfocadas y eficientes.' },
  'proc.step6_title':   { en: 'Polish', es: 'Pulir' },
  'proc.step6_body':    { en: 'We apply your feedback, finalize the details, and prepare everything for delivery.', es: 'Aplicamos tu retroalimentación, finalizamos los detalles y preparamos todo para la entrega.' },
  'proc.step7_title':   { en: 'Launch', es: 'Lanzar' },
  'proc.step7_body':    { en: 'We finalize, transfer, and launch. You walk away owning everything — with a clear brand, a polished digital presence, and the confidence to present your business at its true level.', es: 'Finalizamos, transferimos y lanzamos. Te vas siendo dueña de todo — con una marca clara, una presencia digital pulida y la confianza para presentar tu negocio a su nivel real.' },
  'proc.timeline_note': { en: 'Most projects are completed within two to six weeks, depending on scope, selected services, and content readiness.', es: 'La mayoría de los proyectos se completan en dos a seis semanas, dependiendo del alcance, los servicios seleccionados y la preparación del contenido.' },
  'proc.cta_heading':   { en: 'Ready to get clear?', es: '¿Lista para aclarar tu camino?' },
  'proc.cta_sub':       { en: 'Every engagement starts with a clarity conversation. Tell us about your business and where you are trying to go.', es: 'Cada proyecto comienza con una conversación de claridad. Cuéntanos sobre tu negocio y a dónde quieres llegar.' },
  'proc.cta_btn':       { en: 'Book a Clarity Session', es: 'Reservar una Sesión de Claridad' },

  // ── SUMMER SPECIAL (new keys) ────────────────────
  'ss.hero_eyebrow':    { en: 'LIMITED SUMMER OFFER', es: 'OFERTA DE VERANO LIMITADA' },
  'ss.hero_title':      { en: 'A Focused Four-Page Website for $999', es: 'Un Sitio Web de Cuatro Páginas por $999' },
  'ss.hero_sub':        { en: 'A streamlined website package created for small businesses that need a clean, polished online presence without committing to a complete brand and website transformation.', es: 'Un paquete de sitio web simplificado creado para pequeños negocios que necesitan una presencia en línea limpia y pulida sin comprometerse a una transformación completa de marca y sitio web.' },
  'ss.deliverables_heading': { en: "What's Included", es: 'Qué Incluye' },
  'ss.d1':              { en: 'Custom Homepage', es: 'Página de Inicio Personalizada' },
  'ss.d2':              { en: 'About Page', es: 'Página de Nosotros' },
  'ss.d3':              { en: 'Services Page', es: 'Página de Servicios' },
  'ss.d4':              { en: 'Contact Page', es: 'Página de Contacto' },
  'ss.d5':              { en: 'Mobile-Responsive Design', es: 'Diseño Responsivo para Móvil' },
  'ss.d6':              { en: 'Foundational Brand Polish', es: 'Pulido Básico de Marca' },
  'ss.d7':              { en: 'Website Copy Organization', es: 'Organización del Contenido Web' },
  'ss.d8':              { en: 'Foundational SEO', es: 'SEO Fundamental' },
  'ss.d9':              { en: 'AI-Search-Ready Structure', es: 'Estructura Lista para Búsqueda IA' },
  'ss.d10':             { en: 'Contact Form Integration', es: 'Integración de Formulario de Contacto' },
  'ss.d11':             { en: 'Domain and Launch Assistance', es: 'Asistencia de Dominio y Lanzamiento' },
  'ss.d12':             { en: '30 Days of Post-Launch Support', es: '30 Días de Soporte Post-Lanzamiento' },
  'ss.investment_heading': { en: 'Investment', es: 'Inversión' },
  'ss.investment_price': { en: '$999', es: '$999' },
  'ss.payment_terms':   { en: '50% due at signing. 50% due when the website is completed, approved, and ready to launch.', es: '50% al firmar. 50% cuando el sitio esté completado, aprobado y listo para lanzar.' },
  'ss.disclaimer':      { en: 'This package is intentionally streamlined. Businesses requiring complete branding, advanced functionality, booking integrations, ecommerce, extensive copywriting, custom applications, or more than four pages will receive a custom proposal.', es: 'Este paquete es intencionalmente simplificado. Los negocios que requieran branding completo, funcionalidad avanzada, integraciones de reservas, comercio electrónico, redacción extensa, aplicaciones personalizadas o más de cuatro páginas recibirán una propuesta personalizada.' },
  'ss.fit_heading':     { en: 'Is This Right For You?', es: '¿Es Esto Para Ti?' },
  'ss.fit_yes_heading': { en: 'The Summer Special is a great fit if you are:', es: 'El Especial de Verano es ideal si eres:' },
  'ss.fit_yes_1':       { en: 'A newer business establishing your first professional online presence', es: 'Un negocio nuevo estableciendo tu primera presencia profesional en línea' },
  'ss.fit_yes_2':       { en: 'A small local business replacing a basic or outdated website', es: 'Un pequeño negocio local reemplazando un sitio web básico u obsoleto' },
  'ss.fit_yes_3':       { en: 'A business with clear, straightforward services and simple website needs', es: 'Un negocio con servicios claros y necesidades de sitio web simples' },
  'ss.fit_yes_4':       { en: 'Ready for a clean, polished result without a full brand overhaul', es: 'Listo para un resultado limpio y pulido sin una revisión completa de marca' },
  'ss.fit_no_heading':  { en: 'A Custom Website Design may be a better fit if you need:', es: 'Un Diseño Web Personalizado puede ser mejor si necesitas:' },
  'ss.fit_no_1':        { en: 'A complete visual brand transformation', es: 'Una transformación visual completa de marca' },
  'ss.fit_no_2':        { en: 'Advanced booking or scheduling functionality', es: 'Funcionalidad avanzada de reservas o citas' },
  'ss.fit_no_3':        { en: 'Ecommerce or payment integrations', es: 'Integraciones de comercio electrónico o pagos' },
  'ss.fit_no_4':        { en: 'A website with more than four pages', es: 'Un sitio web con más de cuatro páginas' },
  'ss.fit_no_5':        { en: 'Extensive custom copywriting', es: 'Redacción personalizada extensa' },
  'ss.fit_no_6':        { en: 'Complex third-party integrations', es: 'Integraciones complejas de terceros' },
  'ss.fit_no_7':        { en: 'A custom user experience', es: 'Una experiencia de usuario personalizada' },
  'ss.cta_heading':     { en: 'Ready to apply?', es: '¿Lista para aplicar?' },
  'ss.cta_sub':         { en: 'Every Summer Special engagement begins with a short inquiry form. We confirm fit and scope before anything begins.', es: 'Cada proyecto del Especial de Verano comienza con un breve formulario de consulta. Confirmamos la compatibilidad y el alcance antes de comenzar.' },
  'ss.cta_btn':         { en: 'Apply for the Summer Special', es: 'Aplicar para el Especial de Verano' },

  // ── CONNECT (new keys) ───────────────────────────
  'cn.hero_sub_new':    { en: 'Tell us about your business and what you are ready to change.', es: 'Cuéntanos sobre tu negocio y lo que estás lista para cambiar.' },
  'cn.select_one_new':  { en: 'Select one', es: 'Selecciona uno' },
  'cn.broken_label_new': { en: 'What feels broken right now? (select all that apply)', es: '¿Qué sientes que está roto ahora? (selecciona todo lo que aplique)' },
  'cn.summer_label_new': { en: 'I am interested in the $999 Summer Website Special.', es: 'Estoy interesada en el Especial de Verano de $999.' },
  'cn.submit_new':      { en: 'Start Your Project', es: 'Inicia Tu Proyecto' },

  // ── FAQ (new keys) ───────────────────────────────
  'faq.left_heading_new': { en: 'Everything you need to know.', es: 'Todo lo que necesitas saber.' },
  'faq.left_sub':       { en: 'Questions about our services, process, pricing, and what to expect.', es: 'Preguntas sobre nuestros servicios, proceso, precios y qué esperar.' },
  'faq.left_btn':       { en: 'Start Your Project', es: 'Inicia Tu Proyecto' },
  'faq.q1_new':         { en: 'What does Baldwin & Co. do?', es: '¿Qué hace Baldwin & Co.?' },
  'faq.q2_new':         { en: 'Who is Baldwin &amp; Co. for?', es: '¿Para quién es Baldwin &amp; Co.?' },
  'faq.q3_new':         { en: 'Where do you work?', es: '¿Dónde trabajan?' },
  'faq.q4_new':         { en: 'What is a Brand Clarity Session?', es: '¿Qué es una Sesión de Claridad de Marca?' },
  'faq.q5_new':         { en: 'How much do projects cost?', es: '¿Cuánto cuestan los proyectos?' },
  'faq.q6_new':         { en: 'What does "Starting at" mean?', es: '¿Qué significa "Desde"?' },
  'faq.q7_new':         { en: 'How long does a project take?', es: '¿Cuánto tiempo toma un proyecto?' },
  'faq.q8_new':         { en: 'Do you offer payment plans?', es: '¿Ofrecen planes de pago?' },
  'faq.q9_new':         { en: 'Will I own everything when we are done?', es: '¿Seré dueña de todo cuando terminemos?' },
  'faq.q10_new':        { en: 'What is AI Search Visibility?', es: '¿Qué es la Visibilidad en Búsqueda de IA?' },
  'faq.q11_new':        { en: 'What is the Summer Digital Reset?', es: '¿Qué es el Summer Digital Reset?' },
  'faq.q12_new':        { en: 'What is not included in the Summer Digital Reset?', es: '¿Qué no incluye el Summer Digital Reset?' },
  'faq.q13_new':        { en: 'Do you provide ongoing support?', es: '¿Ofrecen soporte continuo?' },
  'faq.q14_new':        { en: 'Is Baldwin &amp; Co. only for businesses in the Florida Keys?', es: '¿Baldwin &amp; Co. es solo para negocios en los Florida Keys?' },
  'faq.q15_new':        { en: 'What happens after I reach out?', es: '¿Qué pasa después de contactarlos?' },
  'faq.a1_new':         { en: '<p>Baldwin &amp; Co. is a boutique brand strategy and digital design studio. We help established business owners gain clarity on their message, refine their brand identity, and build a digital presence that reflects where their business actually is today. We work with business owners nationwide.</p>', es: '<p>Baldwin &amp; Co. es un estudio boutique de estrategia de marca y diseño digital. Ayudamos a los dueños de negocios establecidos a ganar claridad sobre su mensaje, refinar su identidad de marca y construir una presencia digital que refleje dónde está su negocio hoy. Trabajamos con dueños de negocios en todo el país.</p>' },
  'faq.a2_new':         { en: '<p>We work with established business owners who have built something real — but whose brand, messaging, or digital presence has not kept up with where they are. If you feel stuck, scattered, or like your business looks smaller than it actually is, you are exactly who we built this for.</p>', es: '<p>Trabajamos con dueños de negocios establecidos que han construido algo real — pero cuya marca, mensajería o presencia digital no ha seguido el ritmo de donde están. Si te sientes estancado, disperso o sientes que tu negocio parece más pequeño de lo que realmente es, eres exactamente para quien creamos esto.</p>' },
  'faq.a3_new':         { en: '<p>Everywhere. Baldwin &amp; Co. works with business owners across the country. All projects are completed remotely. Kate is based in Key West, Florida, and has worked with clients from South Florida to the Gulf Coast, the Southeast, and beyond.</p>', es: '<p>En todas partes. Baldwin &amp; Co. trabaja con dueños de negocios en todo el país. Todos los proyectos se completan de forma remota. Kate está basada en Key West, Florida, y ha trabajado con clientes desde el sur de Florida hasta la Costa del Golfo, el sureste y más allá.</p>' },
  'faq.a4_new':         { en: '<p>A Brand Clarity Session is a focused strategy engagement designed to help you define your message, clarify your services, identify your audience, and map your next steps. It is the best starting point for business owners who feel unclear, stuck, or ready to make a change — before committing to a larger project.</p>', es: '<p>Una Sesión de Claridad de Marca es un compromiso de estrategia enfocado diseñado para ayudarte a definir tu mensaje, aclarar tus servicios, identificar tu audiencia y trazar tus próximos pasos. Es el mejor punto de partida para los dueños de negocios que se sienten poco claros, estancados o listos para hacer un cambio — antes de comprometerse con un proyecto más grande.</p>' },
  'faq.a5_new':         { en: '<p>Starting investments: Brand Clarity Session from $350. Brand Refresh from $1,250. Website Strategy &amp; Design from $2,500. Digital Presence Cleanup from $750. Complete Brand Transformation from $4,500. The Summer Digital Reset is a flat $999. All pricing is confirmed in writing before any work begins.</p>', es: '<p>Inversiones iniciales: Sesión de Claridad de Marca desde $350. Renovación de Marca desde $1,250. Estrategia y Diseño Web desde $2,500. Limpieza de Presencia Digital desde $750. Transformación Completa de Marca desde $4,500. El Summer Digital Reset es un precio fijo de $999. Todo el precio se confirma por escrito antes de que comience cualquier trabajo.</p>' },
  'faq.a6_new':         { en: '<p>Starting at means the listed price is the floor — the minimum investment for that service at its most straightforward scope. Final pricing depends on content complexity, number of pages or assets, copywriting requirements, functionality needs, and timeline. We provide a clear proposal before any work begins.</p>', es: '<p>"Desde" significa que el precio indicado es el mínimo — la inversión mínima para ese servicio en su alcance más simple. El precio final depende de la complejidad del contenido, número de páginas o activos, requisitos de redacción, necesidades de funcionalidad y cronograma. Proporcionamos una propuesta clara antes de que comience cualquier trabajo.</p>' },
  'faq.a7_new':         { en: '<p>Most projects are completed within two to six weeks, depending on the selected service, your content readiness, and the scope of the work. A Brand Clarity Session can be completed in one to two weeks. A complete brand and website transformation typically takes four to six weeks.</p>', es: '<p>La mayoría de los proyectos se completan en dos a seis semanas, dependiendo del servicio seleccionado, la preparación del contenido y el alcance del trabajo. Una Sesión de Claridad de Marca puede completarse en una a dos semanas. Una transformación completa de marca y sitio web generalmente toma cuatro a seis semanas.</p>' },
  'faq.a8_new':         { en: '<p>All projects are structured as 50% at signing and 50% upon completion and approval. You never pay the full balance until you are satisfied with the result.</p>', es: '<p>Todos los proyectos están estructurados como 50% al firmar y 50% al completar y aprobar. Nunca pagas el saldo completo hasta que estés satisfecha con el resultado.</p>' },
  'faq.a9_new':         { en: '<p>Yes. Every file, login, domain credential, hosting account, and brand asset is transferred to you at the end of the project. There are no ongoing fees, no platform lock-in, and no dependency on Baldwin &amp; Co. after delivery.</p>', es: '<p>Sí. Cada archivo, acceso, credencial de dominio, cuenta de hosting y activo de marca se transfiere a ti al finalizar el proyecto. No hay tarifas continuas, ni bloqueo de plataforma, ni dependencia de Baldwin &amp; Co. después de la entrega.</p>' },
  'faq.a10_new':        { en: '<p>When someone asks ChatGPT, Perplexity, or Google Gemini for a business recommendation, those tools pull from well-structured web content to generate their answers. If your website is not built to be understood by AI, you will not be recommended. Every Baldwin &amp; Co. website is structured so AI tools can correctly read, understand, and cite your business.</p>', es: '<p>Cuando alguien le pide a ChatGPT, Perplexity o Google Gemini una recomendación de negocio, esas herramientas extraen de contenido web bien estructurado para generar sus respuestas. Si tu sitio web no está construido para ser entendido por IA, no serás recomendada. Cada sitio web de Baldwin &amp; Co. está estructurado para que las herramientas de IA puedan leer, entender y citar correctamente tu negocio.</p>' },
  'faq.a11_new':        { en: '<p>The Summer Digital Reset is a focused $999 package that includes a custom four-page website, foundational brand polish, and AI-ready technical setup. It is designed for business owners who need a clean, professional online presence without committing to a full brand transformation. Investment is $999 flat, split 50/50.</p>', es: '<p>El Summer Digital Reset es un paquete enfocado de $999 que incluye un sitio web personalizado de cuatro páginas, pulido básico de marca y configuración técnica lista para IA. Está diseñado para dueños de negocios que necesitan una presencia en línea limpia y profesional sin comprometerse con una transformación completa de marca. La inversión es $999 fijo, dividido 50/50.</p>' },
  'faq.a12_new':        { en: '<p>The Summer Digital Reset does not include complete brand identity development, custom logo design from scratch, ecommerce, booking integrations, advanced functionality, more than four pages, or extensive custom copywriting. Businesses with those needs will receive a custom proposal.</p>', es: '<p>El Summer Digital Reset no incluye desarrollo completo de identidad de marca, diseño de logo desde cero, comercio electrónico, integraciones de reservas, funcionalidad avanzada, más de cuatro páginas, ni redacción personalizada extensa. Los negocios con esas necesidades recibirán una propuesta personalizada.</p>' },
  'faq.a13_new':        { en: '<p>All projects include 30 days of post-delivery support for questions, minor adjustments, and clarifications. Ongoing support beyond that window is available as a separate engagement.</p>', es: '<p>Todos los proyectos incluyen 30 días de soporte post-entrega para preguntas, ajustes menores y aclaraciones. El soporte continuo más allá de esa ventana está disponible como un proyecto separado.</p>' },
  'faq.a14_new':        { en: '<p>No. We work with business owners nationwide. Kate is based in Key West, and that is part of her story — but Baldwin &amp; Co. is not a local marketing company. We serve established business owners wherever they are.</p>', es: '<p>No. Trabajamos con dueños de negocios en todo el país. Kate está basada en Key West, y eso es parte de su historia — pero Baldwin &amp; Co. no es una empresa de marketing local. Servimos a dueños de negocios establecidos dondequiera que estén.</p>' },
  'faq.a15_new':        { en: '<p>Kate personally reviews every inquiry within one to two business days. If the project sounds like a good fit, she will follow up to schedule a short conversation about your goals, your business, and where you want to go. From there, you will receive a clear proposal with scope and pricing — no pressure, no commitment required.</p>', es: '<p>Kate revisa personalmente cada consulta dentro de uno a dos días hábiles. Si el proyecto parece una buena combinación, hará un seguimiento para programar una breve conversación sobre tus objetivos, tu negocio y a dónde quieres llegar. A partir de ahí, recibirás una propuesta clara con alcance y precios — sin presión, sin compromiso requerido.</p>' },

  // ── NAV (all pages) ──────────────────────────────
  'nav.home':          { en: 'Home',           es: 'Inicio' },
  'nav.included':      { en: "What's Included", es: 'Lo que Incluye' },
  'nav.timeline':      { en: 'Timeline',        es: 'Cronograma' },
  'nav.process':       { en: 'Process',         es: 'Proceso' },
  'nav.faq':           { en: 'FAQ',             es: 'Preguntas' },
  'nav.get_in_touch':  { en: 'Get in Touch',    es: 'Contáctanos' },

  // ── FOOTER (all pages) ───────────────────────────
  'footer.navigate':   { en: 'Navigate',        es: 'Navegar' },
  'footer.apply_lbl':  { en: 'Apply',           es: 'Aplicar' },
  'footer.send':       { en: 'Send an inquiry.', es: 'Envía una consulta.' },
  'footer.apply_btn':  { en: 'Start Your Project', es: 'Comenzar tu Proyecto' },
  'footer.copyright':  { en: '©2026 Baldwin & Co. All Rights Reserved.', es: '©2026 Baldwin & Co. Todos los derechos reservados.' },
  'footer.privacy':    { en: 'Privacy Policy',  es: 'Política de Privacidad' },
  'footer.terms':      { en: 'Terms',           es: 'Términos' },
  'footer.top':        { en: 'Back to Top ↑',   es: 'Volver arriba ↑' },

  // ── INDEX ────────────────────────────────────────
  'index.hero_vertical': { en: 'Website &amp; Brand Design', es: 'Diseño Web y de Marca' },
  'index.editorial_eyebrow': { en: "You Can't Afford to Be Ignored", es: 'No Puedes Permitirte Ser Ignorado' },
  'index.editorial_line1': { en: 'ELEVATE Your BRAND',        es: 'ELEVA Tu MARCA' },
  'index.editorial_line2': { en: 'BOOK Your DREAM CLIENTS',   es: 'ATRAE a Tus CLIENTES IDEALES' },
  'index.editorial_line3': { en: 'Transform Your Business',   es: 'Transforma Tu Negocio' },
  'index.editorial_body':  { en: "In today's market, you need a digital presence that moves as fast as you do, messaging as strong as your real-world reputation, and a website as unique, creative, and original as you are. Small businesses cannot afford to get lost in a sea of browser tabs, digital noise, and short attention spans. We restructure your online presence to ensure you stand out clearly. Our high-end layouts are built strategically to convert casual visitors into loyal customers — transforming your business from just another option into the only option.", es: 'En el mercado actual, necesitas una presencia digital que se mueva tan rápido como tú, un mensaje tan sólido como tu reputación en el mundo real, y un sitio web tan único, creativo y original como tú. Los pequeños negocios no pueden permitirse perderse en un mar de pestañas, ruido digital y cortos períodos de atención. Reestructuramos tu presencia en línea para que destaques con claridad. Nuestros diseños de alto nivel están creados estratégicamente para convertir visitantes ocasionales en clientes leales — transformando tu negocio de una opción más a la única opción.' },

  'index.htl_label1':  { en: 'Bespoke Branding',  es: 'Marca a Medida' },
  'index.htl_text1':   { en: 'Crafting refined brand identities built for modern, high-end business owners who are ready to be seen.', es: 'Creando identidades de marca refinadas para dueños de negocios modernos y de alto nivel que están listos para ser vistos.' },
  'index.htl_label2':  { en: 'Website Design',     es: 'Diseño Web' },
  'index.htl_text2':   { en: 'Luxury web builds that move fast, look elevated, and convert — no generic templates, no shortcuts.', es: 'Sitios web de lujo que cargan rápido, lucen elegantes y convierten — sin plantillas genéricas ni atajos.' },
  'index.htl_label3':  { en: 'Refresh Brands',     es: 'Renovar Marcas' },
  'index.htl_text3':   { en: 'Taking what you have already built and transforming it into the polished, premium presence it deserves.', es: 'Tomando lo que ya has construido y transformándolo en la presencia pulida y premium que merece.' },
  'index.htl_band':    { en: 'Timeless. Refined. Intentional.', es: 'Atemporal. Refinado. Intencional.' },

  'index.founder_heading': { en: 'Meet the<br>Founder',              es: 'Conoce a la<br>Fundadora' },
  'index.founder_sub':     { en: 'Designing with<br>Intention &amp;<br>Impact', es: 'Diseñando con<br>Intención e<br>Impacto' },
  'index.founder_body':    { en: 'Baldwin &amp; Co. was built by Kate Baldwin, a Key West business owner, Realtor, marketer, and brand strategist who understands what it feels like to build a real business from scratch — and then outgrow the messy digital pieces that once held it together. This is not template design. This is digital cleanup for business owners who are ready to look as established online as they already are in real life.', es: 'Baldwin &amp; Co. fue creado por Kate Baldwin, empresaria en Key West, Agente de Bienes Raíces, mercadóloga y estratega de marca que sabe lo que se siente construir un negocio real desde cero — y luego superar los desordenados elementos digitales que lo frenaban. Esto no es diseño de plantillas. Es limpieza digital para empresarios listos para verse tan establecidos en línea como ya lo son en la vida real.' },
  'index.founder_btn':     { en: 'Elevate Your Brand', es: 'Eleva Tu Marca' },

  'index.services_kicker':  { en: 'Hey, Small Business Owner:', es: 'Hola, Pequeño Empresario:' },
  'index.services_display': { en: 'Are you<br>feeling<br>stuck?', es: '¿Te sientes<br>estancado?' },
  'index.services_sub':     { en: "You have all the ideas in your head while driving. Then you get to pen and paper and everything is gone — it's blank.", es: 'Tienes todas las ideas en la cabeza mientras manejas. Luego llegas al papel y todo desaparece — en blanco.' },
  'index.services_aside':   { en: "You're in the<br>right place", es: 'Estás en el<br>lugar correcto' },

  'index.svc1_label':  { en: 'Service 1',  es: 'Servicio 1' },
  'index.svc1_title':  { en: 'The Signature Elite Refresh', es: 'El Reinicio Elite' },
  'index.svc1_desc':   { en: "You don't need a chaotic, months-long agency retainer. You need an elite refresh that brings your digital footprint up to speed with your actual caliber. In exactly 30 days, we rebuild your brand asset architecture, deploy a high-converting web presence, and optimize your infrastructure for modern AI search.", es: 'No necesitas un contrato caótico de meses con una agencia. Necesitas un reinicio elite que ponga tu presencia digital al nivel de tu verdadero calibre. En exactamente 30 días, reconstruimos tu arquitectura de marca, desplegamos una presencia web de alta conversión y optimizamos tu infraestructura para la búsqueda moderna de IA.' },
  'index.svc1_learn':  { en: 'learn more', es: 'saber más' },

  'index.svc2_label':  { en: 'Service 2',  es: 'Servicio 2' },
  'index.svc2_title':  { en: 'The Scope',  es: 'El Alcance' },
  'index.svc2_item1':  { en: '<strong>The Brand Polish</strong><br>Turning your existing flyers, logos, and ideas into a cohesive, high-end editorial visual system.', es: '<strong>El Pulido de Marca</strong><br>Transformando tus volantes, logos e ideas existentes en un sistema visual editorial cohesivo y de alto nivel.' },
  'index.svc2_item2':  { en: '<strong>Digital Reconstruction</strong><br>Building a fast, beautiful web presence that matches your true quality — no generic boxes.', es: '<strong>Reconstrucción Digital</strong><br>Construyendo una presencia web rápida y hermosa que refleje tu verdadera calidad — sin cajas genéricas.' },
  'index.svc2_item3':  { en: '<strong>Geo-AI Optimization</strong><br>Updating your digital footprint so AI search tools, map engines, and conversational grids know exactly who you are and recommend you first.', es: '<strong>Optimización Geo-IA</strong><br>Actualizando tu huella digital para que las herramientas de búsqueda por IA, motores de mapas y grids conversacionales sepan exactamente quién eres y te recomienden primero.' },
  'index.svc2_learn':  { en: 'learn more', es: 'saber más' },

  'index.svc3_label':  { en: 'Service 3',  es: 'Servicio 3' },
  'index.svc3_title':  { en: 'How It Works', es: 'Cómo Funciona' },
  'index.svc3_item1':  { en: '<strong>The Asset Dump</strong><br>You hand over your existing marketing materials, flyers, and notes. No formal brief required.', es: '<strong>La Entrega de Materiales</strong><br>Nos entregas tus materiales de marketing existentes, volantes y notas. No se requiere brief formal.' },
  'index.svc3_item2':  { en: '<strong>The Modern Refresh</strong><br>We distill your years of hard work into a clean, luxury aesthetic inspired by editorial design.', es: '<strong>La Renovación Moderna</strong><br>Destilamos años de trabajo duro en una estética limpia y lujosa inspirada en el diseño editorial.' },
  'index.svc3_learn':  { en: 'learn more', es: 'saber más' },

  'index.hiw_eyebrow': { en: 'THE BALDWIN & CO. METHOD', es: 'EL MÉTODO BALDWIN & CO.' },
  'index.hiw_title':   { en: 'Five steps from scattered to strategic.', es: 'Cinco pasos de lo disperso a lo estratégico.' },
  'index.hiw_s1_title':{ en: 'The AI Voice Onboarding',      es: 'El Onboarding por Voz con IA' },
  'index.hiw_s1_body': { en: 'You answer a short questionnaire by voice. No typing, no long forms. We capture your story in your own words.', es: 'Respondes un breve cuestionario por voz. Sin escribir, sin formularios largos. Capturamos tu historia en tus propias palabras.' },
  'index.hiw_s2_title':{ en: 'The Gaps &amp; Strategy Session', es: 'La Sesión de Estrategia' },
  'index.hiw_s2_body': { en: 'We audit everything. What is working, what is outdated, and what is invisible. You leave with a clear plan.', es: 'Auditamos todo. Lo que funciona, lo que está desactualizado y lo que es invisible. Sales con un plan claro.' },
  'index.hiw_s3_title':{ en: 'The Rebuild &amp; Elevate',    es: 'La Reconstrucción y Elevación' },
  'index.hiw_s3_body': { en: 'We redesign, rewrite, and rebuild while your business keeps running. No downtime, no disruption.', es: 'Rediseñamos, reescribimos y reconstruimos mientras tu negocio sigue funcionando. Sin interrupciones.' },
  'index.hiw_s4_title':{ en: 'The Turnkey Launch &amp; Hand-Off', es: 'El Lanzamiento y Entrega' },
  'index.hiw_s4_body': { en: 'We go live together. Every asset, login, and guide is handed directly to you. You own everything from day one.', es: 'Lanzamos juntos. Cada activo, acceso y guía se entrega directamente a ti. Eres dueño de todo desde el primer día.' },
  'index.hiw_btn':     { en: 'See the Full Process', es: 'Ver el Proceso Completo' },

  'index.cta_eyebrow': { en: 'Ready to start?', es: '¿Lista para empezar?' },
  'index.cta_sub':     { en: 'Every engagement begins with a short inquiry. We review fit and scope before anything begins — no pressure, no commitment.', es: 'Todo compromiso comienza con una breve consulta. Revisamos la compatibilidad antes de comenzar — sin presión, sin compromiso.' },
  'index.cta_btn':     { en: 'Apply for a Website Reset', es: 'Solicitar un Reinicio Web' },

  // ── BLUEPRINT ────────────────────────────────────
  'bp.eyebrow':        { en: '30-Day',           es: '30 Días' },
  'bp.title':          { en: 'Launch Blueprint',  es: 'Plan de Lanzamiento' },
  'bp.sub':            { en: 'Scattered to Streamlined in Under a Month', es: 'De lo Disperso a lo Organizado en Menos de un Mes' },
  'bp.intro_label':    { en: 'The Scope of Deliverables', es: 'El Alcance de los Entregables' },
  'bp.intro_display':  { en: 'What walks out the door with you at Day 30.', es: 'Lo que te llevas contigo al Día 30.' },
  'bp.d1_tag':         { en: 'Deliverable',       es: 'Entregable' },
  'bp.d1_days':        { en: 'Brand Identity',    es: 'Identidad de Marca' },
  'bp.d1_title':       { en: 'Brand Identity Polish', es: 'Pulido de Identidad de Marca' },
  'bp.d2_tag':         { en: 'Deliverable',       es: 'Entregable' },
  'bp.d2_days':        { en: 'Web Framework',     es: 'Marco Web' },
  'bp.d2_title':       { en: 'Custom 4-Page Website Framework', es: 'Marco de Sitio Web de 4 Páginas' },
  'bp.d3_tag':         { en: 'Deliverable',       es: 'Entregable' },
  'bp.d3_days':        { en: 'Geo-AI Tech',       es: 'Tecnología Geo-IA' },
  'bp.d3_title':       { en: 'Geo-AI Technical Infrastructure &amp; Launch', es: 'Infraestructura Técnica Geo-IA y Lanzamiento' },
  'bp.cta_title':      { en: 'Ready to start your 30-day clock?', es: '¿Lista para iniciar tu cuenta regresiva de 30 días?' },
  'bp.cta_sub':        { en: 'Every engagement begins with a short inquiry. We review fit before anything begins.', es: 'Todo compromiso comienza con una breve consulta. Revisamos la compatibilidad antes de comenzar.' },
  'bp.cta_btn':        { en: 'Apply for a Website Reset', es: 'Solicitar un Reinicio Web' },

  // ── TIMELINE ─────────────────────────────────────
  'tl.eyebrow':        { en: '30-Day',            es: '30 Días' },
  'tl.title':          { en: 'The Timeline',       es: 'El Cronograma' },
  'tl.intro_title':    { en: 'The 30-Day Launch Blueprint', es: 'El Plan de Lanzamiento de 30 Días' },
  'tl.intro_sub':      { en: 'Scattered to Streamlined in Under a Month', es: 'De lo Disperso a lo Organizado en Menos de un Mes' },
  'tl.intro_body':     { en: 'Here is the exact, scannable breakdown of how we take your brand from a scattered digital footprint to a polished, live, AI-optimized online presence in less than 30 days.', es: 'Aquí está el desglose exacto y escaneable de cómo llevamos tu marca de una huella digital dispersa a una presencia en línea pulida, en vivo y optimizada para IA en menos de 30 días.' },
  'tl.w1_label':       { en: 'Week 1',             es: 'Semana 1' },
  'tl.w1_title':       { en: 'Gather + Strategy',  es: 'Recopilar + Estrategia' },
  'tl.w2_label':       { en: 'Week 2',             es: 'Semana 2' },
  'tl.w2_title':       { en: 'Build + Copy',        es: 'Construir + Copiar' },
  'tl.w3_label':       { en: 'Week 3',             es: 'Semana 3' },
  'tl.w3_title':       { en: 'Refine + Optimize',  es: 'Refinar + Optimizar' },
  'tl.w4_label':       { en: 'Launch + 30-Day Support', es: 'Lanzamiento + 30 Días de Soporte' },
  'tl.w4_title':       { en: 'Go Live',            es: 'Ir en Vivo' },

  // ── PROCESS ──────────────────────────────────────
  'proc.title':        { en: 'The Process',        es: 'El Proceso' },
  'proc.sub':          { en: 'Polished. Strategic. Built Around You.', es: 'Pulido. Estratégico. Construido para Ti.' },
  'proc.s1_title':     { en: 'Step 01: The AI Voice Onboarding', es: 'Paso 01: El Onboarding por Voz con IA' },
  'proc.s2_title':     { en: 'Step 02: The Gaps &amp; Strategy Session', es: 'Paso 02: La Sesión de Estrategia' },
  'proc.s3_title':     { en: 'Step 03: The Rebuild &amp; Elevate', es: 'Paso 03: La Reconstrucción y Elevación' },
  'proc.s4_title':     { en: 'Step 04: The Turnkey Launch &amp; Hand-Off', es: 'Paso 04: El Lanzamiento y Entrega' },
  'proc.cta_btn':      { en: 'Apply for a Website Reset', es: 'Solicitar un Reinicio Web' },

  // ── CONNECT ──────────────────────────────────────
  'cn.hero_title':     { en: 'Apply',              es: 'Aplicar' },
  'cn.hero_sub':       { en: "Let's build something worth showing.", es: 'Construyamos algo que valga la pena mostrar.' },
  'cn.form_title':     { en: "Tell us what you're<br>ready to clean up.", es: 'Cuéntanos qué estás<br>lista para limpiar.' },
  'cn.form_desc':      { en: 'Fill out the form, email us at <a href="mailto:kate@keywestkate.com">kate@keywestkate.com</a>, or text us first at <a href="sms:3052407828">(305) 240-7828</a>.', es: 'Llena el formulario, escríbenos a <a href="mailto:kate@keywestkate.com">kate@keywestkate.com</a>, o envíanos un mensaje de texto primero al <a href="sms:3052407828">(305) 240-7828</a>.' },
  'cn.label_name':     { en: 'Your Name',          es: 'Tu Nombre' },
  'cn.label_email':    { en: 'Email Address',       es: 'Correo Electrónico' },
  'cn.label_phone':    { en: 'Phone Number',        es: 'Número de Teléfono' },
  'cn.label_business': { en: 'Business Name',       es: 'Nombre del Negocio' },
  'cn.label_ig':       { en: 'Instagram URL',       es: 'URL de Instagram' },
  'cn.label_website':  { en: 'Website URL',         es: 'URL del Sitio Web' },
  'cn.label_message':  { en: 'Your Message',        es: 'Tu Mensaje' },
  'cn.label_summer':   { en: "I am interested in booking the Summer Special '26", es: "Estoy interesada en el Especial de Verano '26" },
  'cn.label_btype':    { en: 'What type of business do you have?', es: '¿Qué tipo de negocio tienes?' },
  'cn.label_btype_ph': { en: 'e.g. Real estate, boutique, consulting...', es: 'ej. Bienes raíces, boutique, consultoría...' },
  'cn.label_website_q':{ en: 'Do you currently have a website?',   es: '¿Tienes un sitio web actualmente?' },
  'cn.select_one':     { en: 'Select one', es: 'Selecciona una opción' },
  'cn.select_yes':     { en: 'Yes',        es: 'Sí' },
  'cn.select_no':      { en: 'No',         es: 'No' },
  'cn.label_broken':   { en: 'What feels broken right now? (select all that apply)', es: '¿Qué sientes que está roto ahora? (selecciona todo lo que aplique)' },
  'cn.submit':         { en: 'Submit form', es: 'Enviar formulario' },

  // ── FAQ ──────────────────────────────────────────
  'faq.hero_title':    { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
  'faq.left_heading':  { en: 'Answers that help you decide with confidence', es: 'Respuestas que te ayudan a decidir con confianza' },
  'faq.left_help':     { en: 'Need help?<br>Get in touch with us', es: '¿Necesitas ayuda?<br>Contáctanos' },
  'faq.contact_btn':   { en: 'Contact Us', es: 'Contáctanos' },
  'faq.q1':  { en: 'What is Baldwin &amp; Co.?', es: '¿Qué es Baldwin &amp; Co.?' },
  'faq.q2':  { en: 'Who is this for?',            es: '¿Para quién es esto?' },
  'faq.q3':  { en: 'What does "digital restructuring" mean?', es: '¿Qué significa "reestructuración digital"?' },
  'faq.q4':  { en: 'How long does the process take?', es: '¿Cuánto tiempo toma el proceso?' },
  'faq.q5':  { en: 'What do I need to do to get started?', es: '¿Qué necesito hacer para comenzar?' },
  'faq.q6':  { en: 'What is your photography rule?', es: '¿Cuál es tu regla de fotografía?' },
  'faq.q7':  { en: 'What is the Core Summer Package?', es: '¿Qué es el Paquete Básico de Verano?' },
  'faq.q8':  { en: 'How much does it cost and what are the payment terms?', es: '¿Cuánto cuesta y cuáles son los términos de pago?' },
  'faq.q9':  { en: 'Will I be locked into a monthly contract or retainer?', es: '¿Estaré atada a un contrato mensual?' },
  'faq.q10': { en: 'What is AI Search Visibility (GEO)?', es: '¿Qué es la Visibilidad en Búsqueda de IA (GEO)?' },

  // ── FAQ ANSWERS ──────────────────────────────────
  'faq.a1': { en: '<p>Baldwin &amp; Co. is a boutique digital restructuring studio built for small business owners who are ready to look as polished online as they already are in real life.</p><p>We handle everything: brand identity, custom website design, strategic copywriting, and Geo-AI technical setup — all delivered in under 30 days. No monthly retainers. No agency dependency. You walk away owning everything.</p>', es: '<p>Baldwin &amp; Co. es un estudio boutique de reestructuración digital creado para dueños de pequeños negocios que están listos para verse tan pulidos en línea como ya lo son en la vida real.</p><p>Nos encargamos de todo: identidad de marca, diseño web personalizado, redacción estratégica y configuración técnica Geo-IA — todo entregado en menos de 30 días. Sin contratos mensuales. Sin dependencia de agencias. Te vas siendo dueño de todo.</p>' },
  'faq.a2': { en: '<p>This is for established small business owners who have built something real — and whose digital presence has not kept up with where they actually are.</p><p>Realtors, consultants, boutique service providers, coaches, local brand owners. If you have been running your business on a website you are embarrassed to share, a logo you have outgrown, or a Google presence that does not reflect your caliber — this is built for you.</p><p>We are not a fit for businesses that are still figuring out what they do. You need a clear offer and an existing client base. We refine and elevate — we do not start from zero.</p>', es: '<p>Esto es para dueños de negocios establecidos que han construido algo real — y cuya presencia digital no ha seguido el ritmo de donde realmente están.</p><p>Agentes de bienes raíces, consultores, proveedores de servicios boutique, coaches, dueños de marcas locales. Si has llevado tu negocio con un sitio web del que te avergüenzas, un logo que ya superaste, o una presencia en Google que no refleja tu calibre — esto está hecho para ti.</p><p>No somos la opción correcta para negocios que aún están descubriendo qué hacen. Necesitas una oferta clara y una base de clientes existente. Refinamos y elevamos — no empezamos desde cero.</p>' },
  'faq.a3': { en: '<p>It means we look at your entire digital footprint — your website, your brand visuals, your copy, your search visibility — and we clean it up, sharpen it, and rebuild the pieces that are holding you back.</p><p>Most business owners have a scattered mix of old logos, outdated bios, inconsistent fonts, and a website that was built years ago and never touched since. Digital restructuring pulls all of that together into one cohesive, polished, high-performing system.</p>', es: '<p>Significa que analizamos toda tu huella digital — tu sitio web, tus visuales de marca, tu texto, tu visibilidad en búsquedas — y lo limpiamos, afilamos y reconstruimos las piezas que te frenan.</p><p>La mayoría de los dueños de negocios tienen una mezcla dispersa de logos viejos, bios desactualizadas, fuentes inconsistentes y un sitio web que fue creado hace años y nunca se ha tocado. La reestructuración digital une todo eso en un sistema cohesivo, pulido y de alto rendimiento.</p>' },
  'faq.a4': { en: '<p><strong>3 to 4 weeks from start to live.</strong> That is the standard engagement.</p><p>Week 1 is strategy and gathering. Week 2 is building and writing. Week 3 is refining and optimizing. By the end of Week 3 — sometimes sooner — your site is live and your brand assets are in your hands.</p><p>Your total hands-on time across the entire engagement is under one hour. We work around your schedule. Your business keeps running normally the entire time.</p>', es: '<p><strong>De 3 a 4 semanas desde el inicio hasta el lanzamiento.</strong> Ese es el compromiso estándar.</p><p>La Semana 1 es estrategia y recopilación. La Semana 2 es construcción y redacción. La Semana 3 es refinamiento y optimización. Al final de la Semana 3 — a veces antes — tu sitio está en vivo y los activos de tu marca están en tus manos.</p><p>Tu tiempo total de participación activa en todo el proceso es de menos de una hora. Trabajamos alrededor de tu agenda. Tu negocio sigue funcionando normalmente todo el tiempo.</p>' },
  'faq.a5': { en: '<p>Almost nothing — and zero typing homework.</p><p>After you apply and we confirm the fit, we send you a short onboarding questionnaire. Here is the trick: <strong>open ChatGPT on your phone, tap the microphone icon, and talk through the answers out loud.</strong> Just speak naturally, like you are explaining your business to a friend over coffee. ChatGPT transcribes everything in real time.</p><p>Copy and paste the result into the form. Most clients finish the entire onboarding in under 20 minutes — while driving, walking, or between appointments. We take it from there.</p>', es: '<p>Casi nada — y sin tarea de escritura.</p><p>Después de que apliques y confirmemos la compatibilidad, te enviamos un breve cuestionario de incorporación. El truco es: <strong>abre ChatGPT en tu teléfono, toca el ícono del micrófono y responde las preguntas en voz alta.</strong> Habla con naturalidad, como si le estuvieras explicando tu negocio a un amigo mientras toman café. ChatGPT transcribe todo en tiempo real.</p><p>Copia y pega el resultado en el formulario. La mayoría de los clientes terminan todo el proceso de incorporación en menos de 20 minutos — mientras manejan, caminan o entre citas. Nosotros nos encargamos del resto.</p>' },
  'faq.a6': { en: '<p><strong>Photography is the single biggest bottleneck in every project.</strong> A beautifully designed website with generic or low-quality photos will always underperform.</p><p>We require a minimum of 10 to 14 polished brand photos delivered by Day 1 of the build phase. These do not need to be expensive studio shots — but they need to be clean, well-lit, and on-brand.</p><p>Not sure what to shoot or how to style it? Kate provides full creative direction — location suggestions, outfit guidance, shot list, and styling notes — so you show up ready and walk away with everything we need.</p>', es: '<p><strong>La fotografía es el mayor cuello de botella en cada proyecto.</strong> Un sitio web bellamente diseñado con fotos genéricas o de baja calidad siempre tendrá un rendimiento inferior.</p><p>Requerimos un mínimo de 10 a 14 fotos de marca pulidas entregadas el Día 1 de la fase de construcción. No necesitan ser fotos de estudio costosas — pero deben ser limpias, bien iluminadas y acordes con la marca.</p><p>¿No sabes qué fotografiar o cómo estilizarlo? Kate brinda dirección creativa completa — sugerencias de locación, guía de outfits, lista de tomas y notas de estilismo — para que llegues lista y te vayas con todo lo que necesitamos.</p>' },
  'faq.a7': { en: '<p>The Core Summer Package includes a fully custom <strong>4-page website</strong> — Home, About, Services, and Contact — plus brand identity polish and Geo-AI technical setup.</p><p><strong>Home:</strong> Built to convert. Designed to make the right visitor immediately feel like they are in the right place.</p><p><strong>About:</strong> Your story, your credibility, your methodology — written and designed to build trust fast.</p><p><strong>Services:</strong> A clean, compelling breakdown of what you offer and who it is for.</p><p><strong>Contact:</strong> A qualified inquiry form that filters serious leads from browsers.</p><p>Every page is fully responsive, mobile-optimized, and built to perform on both human visitors and AI search tools.</p>', es: '<p>El Paquete Básico de Verano incluye un <strong>sitio web personalizado de 4 páginas</strong> — Inicio, Nosotros, Servicios y Contacto — más pulido de identidad de marca y configuración técnica Geo-IA.</p><p><strong>Inicio:</strong> Construido para convertir. Diseñado para que el visitante correcto sienta de inmediato que está en el lugar correcto.</p><p><strong>Nosotros:</strong> Tu historia, tu credibilidad, tu metodología — escrita y diseñada para generar confianza rápidamente.</p><p><strong>Servicios:</strong> Un desglose limpio y convincente de lo que ofreces y para quién es.</p><p><strong>Contacto:</strong> Un formulario de consulta calificado que filtra clientes potenciales serios de navegadores casuales.</p><p>Cada página es completamente responsiva, optimizada para móvil y construida para funcionar tanto para visitantes humanos como para herramientas de búsqueda de IA.</p>' },
  'faq.a8': { en: '<p><strong>$999 flat. No surprises.</strong></p><p>Payment is split 50/50. Half at signing to reserve your spot and begin strategy. The remaining half upon happy completion — meaning you have reviewed the final product, you love it, and we go live together.</p><p>There are no hidden fees, no scope creep charges, and no monthly invoices after the project closes.</p>', es: '<p><strong>$999 fijo. Sin sorpresas.</strong></p><p>El pago se divide 50/50. La mitad al firmar para reservar tu lugar e iniciar la estrategia. La otra mitad al completar satisfactoriamente — es decir, cuando hayas revisado el producto final, te encante y lancemos juntos.</p><p>No hay tarifas ocultas, ni cargos por expansión del alcance, ni facturas mensuales después de cerrar el proyecto.</p>' },
  'faq.a9': { en: '<p>No. Full stop.</p><p>At the end of your engagement, every login, every asset, every file, and every platform credential is handed directly to you. Your website, your domain, your hosting — all of it is in your name and under your control from day one.</p><p>There is no software subscription, no maintenance retainer, and no reason to ever come back to us unless you want to. You own everything.</p>', es: '<p>No. Punto final.</p><p>Al finalizar tu proyecto, cada acceso, cada activo, cada archivo y cada credencial de plataforma se entrega directamente a ti. Tu sitio web, tu dominio, tu hosting — todo está a tu nombre y bajo tu control desde el primer día.</p><p>No hay suscripción de software, ni contrato de mantenimiento, ni razón para volver a contactarnos a menos que tú quieras. Eres dueña de todo.</p>' },
  'faq.a10': { en: '<p>When someone asks ChatGPT, Gemini, or Perplexity "who is the best realtor in Key West" — those tools pull from structured, well-organized web content to generate their answers. If your site is not built to be read by AI, you will not be recommended.</p><p><strong>GEO (Generative Engine Optimization)</strong> is the process of structuring your website content, schema markup, and local business signals so that AI search tools can easily understand who you are, what you do, where you are located, and who you serve.</p><p>Every Baldwin &amp; Co. website is built with this infrastructure baked in from the start — not added as an afterthought.</p>', es: '<p>Cuando alguien le pregunta a ChatGPT, Gemini o Perplexity "quién es el mejor agente de bienes raíces en Key West" — esas herramientas extraen información de contenido web bien estructurado y organizado para generar sus respuestas. Si tu sitio no está construido para ser leído por IA, no serás recomendado.</p><p><strong>GEO (Optimización para Motores Generativos)</strong> es el proceso de estructurar el contenido de tu sitio web, el marcado de esquema y las señales de negocio local para que las herramientas de búsqueda de IA puedan entender fácilmente quién eres, qué haces, dónde estás ubicado y a quién sirves.</p><p>Cada sitio web de Baldwin &amp; Co. se construye con esta infraestructura integrada desde el principio — no agregada como un afterthought.</p>' },

  // ── INDEX FOUNDER BODY ──────────────────────────
  'index.founder_body_full': { en: 'Kate Baldwin spent years helping businesses market themselves, grow, and evolve. What she discovered along the way was that most business owners are not lacking talent — they are lacking clarity. Baldwin &amp; Co. exists to fix that. We help business owners define who they are, what they offer, and how to communicate it — then build the brand and digital presence to match.', es: 'Kate Baldwin pasó años ayudando a los negocios a posicionarse, crecer y evolucionar. Lo que descubrió en el camino fue que la mayoría de los dueños de negocios no carecen de talento — carecen de claridad. Baldwin &amp; Co. existe para resolver eso. Ayudamos a los dueños de negocios a definir quiénes son, qué ofrecen y cómo comunicarlo — y luego construimos la marca y la presencia digital para acompañarlo.' },

  // ── INDEX CTA SECTION ────────────────────────────
  'index.cta_eyebrow_full': { en: 'Ready to start?', es: '¿Lista para empezar?' },
  'index.cta_sub_full': { en: 'Every engagement begins with a short inquiry. We review fit and scope before anything begins — no pressure, no commitment.', es: 'Todo compromiso comienza con una breve consulta. Revisamos la compatibilidad y el alcance antes de comenzar — sin presión, sin compromiso.' },

  // ── BLUEPRINT DELIVERABLE BULLETS ───────────────
  'bp.d1_b1': { en: 'Refined typography stack and custom color palette.', es: 'Stack tipográfico refinado y paleta de colores personalizada.' },
  'bp.d1_b2': { en: 'High-end asset styling guide for editorial consistency.', es: 'Guía de estilo de activos de alto nivel para consistencia editorial.' },
  'bp.d1_b3': { en: 'Clean, modern vector logo variations optimized for web, mobile, and social profiles.', es: 'Variaciones de logo vectorial limpio y moderno optimizadas para web, móvil y perfiles sociales.' },
  'bp.d1_b4': { en: 'Brand voice copywriting — homepage hero, bio, and services copy written in your tone.', es: 'Redacción de voz de marca — texto del hero, bio y servicios escritos en tu tono.' },
  'bp.d2_b1': { en: 'Fully bespoke Home Page designed to convert high-value traffic immediately.', es: 'Página de inicio totalmente a medida diseñada para convertir tráfico de alto valor de inmediato.' },
  'bp.d2_b2': { en: 'Dedicated Services/Capabilities Page mapping out your core high-ticket offers.', es: 'Página de Servicios dedicada que muestra tus ofertas principales de alto valor.' },
  'bp.d2_b3': { en: 'About/Authority Page positioning your unique story and methodology.', es: 'Página de Nosotros que posiciona tu historia única y metodología.' },
  'bp.d2_b4': { en: 'Contact/Apply Page with a qualified inquiry form — no generic contact boxes.', es: 'Página de Contacto con formulario de consulta calificado — sin cajas de contacto genéricas.' },
  'bp.d2_b5': { en: 'Fluid, responsive development built for flawless mobile and desktop performance.', es: 'Desarrollo fluido y responsivo construido para un rendimiento impecable en móvil y escritorio.' },
  'bp.d3_b1': { en: 'Complete backend SEO setup structured for modern LLMs, AI search engines, and geo-based discovery.', es: 'Configuración completa de SEO backend estructurada para LLMs modernos, motores de búsqueda de IA y descubrimiento basado en geo.' },
  'bp.d3_b2': { en: 'Schema markup, structured data, and local business signals so AI tools cite your business correctly.', es: 'Marcado de esquema, datos estructurados y señales de negocio local para que las herramientas de IA citen tu negocio correctamente.' },
  'bp.d3_b3': { en: 'Secure hosting setup, custom domain mapping, SSL integration, and go-live coordination.', es: 'Configuración de hosting seguro, mapeo de dominio personalizado, integración SSL y coordinación de lanzamiento.' },
  'bp.d3_b4': { en: '30-day post-launch support window — questions, tweaks, and adjustments included.', es: 'Ventana de soporte de 30 días post-lanzamiento — preguntas, ajustes y modificaciones incluidos.' },

  // ── CONNECT FORM ─────────────────────────────────
  'cn.broken_label': { en: 'What feels broken right now? (select all that apply)', es: '¿Qué sientes que está roto ahora? (selecciona todo lo que aplique)' },
  'cn.summer_label': { en: "I am interested in the $999 Summer Website Special", es: "Estoy interesada en el Especial de Verano de $999" },

  // ── NEW NAV KEYS ──────────────────────────────────
  'nav.services':       { en: 'Blueprint',          es: 'Blueprint' },
  'nav.summer':         { en: 'Summer Special',     es: 'Especial de Verano' },
  'nav.contact':        { en: 'Contact',            es: 'Contacto' },

  // ── NEW KEYS ADDED FOR FULL COVERAGE ────────────────────────────────────────

  // INDEX — editorial block
  'index.editorial_eyebrow2': { en: 'CLARITY FIRST', es: 'CLARIDAD PRIMERO' },
  'index.editorial_h2':       { en: 'Your Message. Your Brand. Your Direction.', es: 'Tu Mensaje. Tu Marca. Tu Dirección.' },
  'index.editorial_body2':    { en: 'Most businesses do not have a marketing problem. They have a clarity problem. When your message is clear, your brand is aligned, and your digital presence reflects who you actually are — everything else becomes easier. That is what Baldwin &amp; Co. builds.', es: 'La mayoría de los negocios no tienen un problema de marketing. Tienen un problema de claridad. Cuando tu mensaje es claro, tu marca está alineada y tu presencia digital refleja quién realmente eres — todo lo demás se vuelve más fácil. Eso es lo que construye Baldwin &amp; Co.' },

  // INDEX — svc-row h3 titles
  'index.svc1_h3': { en: 'Brand Strategy &amp; Identity', es: 'Estrategia de Marca e Identidad' },
  'index.svc2_h3': { en: 'Custom Website Design', es: 'Diseño Web Personalizado' },
  'index.svc3_h3': { en: 'Brand &amp; Website Transformation', es: 'Transformación de Marca y Sitio Web' },
  'index.svc4_h3': { en: 'Custom Creative Projects', es: 'Proyectos Creativos Personalizados' },

  // BLUEPRINT — intro block
  'bp.intro_label2':   { en: 'ABOUT OUR SERVICES', es: 'SOBRE NUESTROS SERVICIOS' },
  'bp.intro_display2': { en: 'Strategy Before Decoration.', es: 'Estrategia Antes de Decoración.' },

  // BLUEPRINT — block labels (repeated)
  'bp.label_about':        { en: 'ABOUT', es: 'ACERCA DE' },
  'bp.label_deliverables': { en: 'DELIVERABLES', es: 'ENTREGABLES' },
  'bp.label_may_include':  { en: 'MAY INCLUDE', es: 'PUEDE INCLUIR' },

  // BLUEPRINT — deliverable lists
  'bp.s1_deliverables': { en: 'Brand positioning · Audience definition · Brand voice direction · Visual direction · Competitive differentiation · Actionable brand roadmap', es: 'Posicionamiento de marca · Definición de audiencia · Dirección de voz de marca · Dirección visual · Diferenciación competitiva · Hoja de ruta de marca' },
  'bp.s2_deliverables': { en: 'Existing logo refinement · Updated color palette · Typography system · Brand messaging refinement · Social and digital visual direction · Mini brand guide', es: 'Refinamiento de logo existente · Paleta de colores actualizada · Sistema tipográfico · Refinamiento de mensajería · Dirección visual digital y social · Mini guía de marca' },
  'bp.s3_deliverables': { en: 'Brand strategy · Logo direction · Primary and secondary logo variations · Color palette · Typography system · Brand voice · Core messaging · Supporting brand elements · Brand guidelines', es: 'Estrategia de marca · Dirección de logo · Variaciones primarias y secundarias del logo · Paleta de colores · Sistema tipográfico · Voz de marca · Mensajería principal · Elementos de apoyo · Guías de marca' },
  'bp.s4_deliverables': { en: 'Custom page strategy · Responsive website design · Mobile optimization · Website copy direction · Foundational SEO · AI-search-ready structure · Contact form integration · Domain and launch support · Basic website training', es: 'Estrategia de páginas · Diseño web responsivo · Optimización móvil · Dirección de contenido · SEO fundamental · Estructura lista para IA · Integración de formulario · Soporte de dominio y lanzamiento · Capacitación básica' },
  'bp.s5_deliverables': { en: 'Brand strategy · Complete visual identity · Brand messaging · Website copy development · Custom website design · Mobile optimization · SEO foundations · AI visibility structure · Technical setup · Launch support', es: 'Estrategia de marca · Identidad visual completa · Mensajería de marca · Desarrollo de contenido web · Diseño web personalizado · Optimización móvil · Bases de SEO · Estructura de visibilidad IA · Configuración técnica · Soporte de lanzamiento' },
  'bp.s6_deliverables': { en: 'Website copy · Professional business bios · Service descriptions · Social media messaging · Directory consistency · Foundational SEO · AI search optimization · Google Business profile recommendations', es: 'Contenido web · Bios profesionales · Descripciones de servicios · Mensajería en redes sociales · Consistencia en directorios · SEO fundamental · Optimización para búsqueda IA · Recomendaciones de perfil de Google Business' },
  'bp.s7_deliverables': { en: 'Custom four-page website · Mobile-responsive design · Foundational brand polish · Website copy organization · Foundational SEO · AI-search-ready structure · Contact form integration · Domain and launch assistance · 30 days post-launch support', es: 'Sitio web personalizado de cuatro páginas · Diseño responsivo para móvil · Pulido básico de marca · Organización del contenido web · SEO fundamental · Estructura lista para búsqueda IA · Integración de formulario · Asistencia de dominio y lanzamiento · 30 días de soporte post-lanzamiento' },

  // PROCESS — intro
  'proc.intro_sub': { en: 'Every project is different. Every result is intentional. Here is how we move from your initial inquiry to a launched, polished digital presence — without wasted time, unclear expectations, or agency dependency.', es: 'Cada proyecto es diferente. Cada resultado es intencional. Así es como pasamos de tu consulta inicial a una presencia digital pulida y lanzada — sin tiempo perdido, expectativas poco claras, ni dependencia de agencias.' },

  // PROCESS — step labels
  'proc.label_discovery': { en: 'DISCOVERY',          es: 'DESCUBRIMIENTO' },
  'proc.label_strategy':  { en: 'STRATEGY',           es: 'ESTRATEGIA' },
  'proc.label_creative':  { en: 'CREATIVE DIRECTION', es: 'DIRECCIÓN CREATIVA' },
  'proc.label_build':     { en: 'BUILD',              es: 'CONSTRUCCIÓN' },
  'proc.label_review':    { en: 'REVIEW',             es: 'REVISIÓN' },
  'proc.label_refine':    { en: 'REFINE',             es: 'REFINAMIENTO' },
  'proc.label_launch':    { en: 'LAUNCH',             es: 'LANZAMIENTO' },

  // PROCESS — dark band
  'proc.band_label':    { en: 'What You Walk Away With', es: 'Con Qué Te Vas' },
  'proc.band_title':    { en: 'Everything built. Everything yours. Nothing left behind.', es: 'Todo construido. Todo tuyo. Nada queda atrás.' },
  'proc.band_i1_title': { en: 'A Refreshed Visual Brand', es: 'Una Marca Visual Renovada' },
  'proc.band_i1_body':  { en: 'Logo, colors, typography, and layout system — cohesive and premium.', es: 'Logo, colores, tipografía y sistema de diseño — cohesivo y premium.' },
  'proc.band_i2_title': { en: 'A High-End Web Presence', es: 'Una Presencia Web de Alto Nivel' },
  'proc.band_i2_body':  { en: 'Fast, editorial-quality design built around your existing tools and workflow.', es: 'Diseño rápido de calidad editorial construido alrededor de tus herramientas y flujo de trabajo.' },
  'proc.band_i3_title': { en: 'AI Search Visibility', es: 'Visibilidad en Búsqueda IA' },
  'proc.band_i3_body':  { en: 'Optimized so map engines, AI tools, and conversational search recommend you first.', es: 'Optimizado para que motores de mapas, herramientas IA y búsqueda conversacional te recomienden primero.' },
  'proc.band_i4_title': { en: 'Full Ownership &amp; Control', es: 'Propiedad y Control Total' },
  'proc.band_i4_body':  { en: 'Every asset, login, and platform credential — organized and transferred to you.', es: 'Cada activo, acceso y credencial de plataforma — organizados y transferidos a ti.' },
  'proc.band_i5_title': { en: 'Video Guides for Your Team', es: 'Guías en Video para tu Equipo' },
  'proc.band_i5_body':  { en: 'Plain-English walkthroughs so anyone on your team can manage the system.', es: 'Tutoriales claros para que cualquier miembro de tu equipo pueda administrar el sistema.' },
  'proc.band_i6_title': { en: 'Zero Agency Dependency', es: 'Cero Dependencia de Agencias' },
  'proc.band_i6_body':  { en: 'No retainer, no monthly fees, no one holding your brand hostage.', es: 'Sin contrato, sin cuotas mensuales, nadie reteniendo tu marca.' },

  // CONNECT — left section
  'cn.form_title_main': { en: 'Tell us about your project.', es: 'Cuéntanos sobre tu proyecto.' },
  'cn.form_desc_main':  { en: 'Fill out the form, email us at <a href="mailto:kate@keywestkate.com">kate@keywestkate.com</a>, or text us first at <a href="sms:3052407828">(305) 240-7828</a>.', es: 'Llena el formulario, escríbenos a <a href="mailto:kate@keywestkate.com">kate@keywestkate.com</a>, o envíanos un mensaje al <a href="sms:3052407828">(305) 240-7828</a>.' },

  // CONNECT — checkbox labels
  'cn.broken_branding':   { en: 'Branding',  es: 'Marca' },
  'cn.broken_website':    { en: 'Website',   es: 'Sitio Web' },
  'cn.broken_messaging':  { en: 'Messaging', es: 'Mensajería' },
  'cn.broken_visibility': { en: 'Visibility', es: 'Visibilidad' },
  'cn.broken_all':        { en: 'All of It', es: 'Todo' },

  // FOOTER — shared legal links
  'footer.privacy': { en: 'Privacy Policy', es: 'Política de Privacidad' },
  'footer.terms':   { en: 'Terms',          es: 'Términos' },

  // ── INDEX HERO ───────────────────────────────────
  'index.hero_eyebrow': { en: 'BOUTIQUE BRAND STRATEGY & DIGITAL DESIGN', es: 'ESTRATEGIA DE MARCA BOUTIQUE Y DISEÑO DIGITAL' },
  'index.hero_title':   { en: 'YOUR BUSINESS HAS EVOLVED.<br>HAS YOUR BRAND KEPT UP?', es: 'TU NEGOCIO HA EVOLUCIONADO.<br>¿TU MARCA HA SEGUIDO EL RITMO?' },
  'index.hero_sub':     { en: 'Most business owners have outgrown their message, their website, and their brand — long before they recognize it. Baldwin & Co. helps you organize years of experience into a clear direction, refined identity, and digital presence that reflects where you are today.', es: 'La mayoría de los dueños de negocios han superado su mensaje, su sitio web y su marca — mucho antes de reconocerlo. Baldwin & Co. te ayuda a organizar años de experiencia en una dirección clara, una identidad refinada y una presencia digital que refleja dónde estás hoy.' },
  'index.hero_cta1':    { en: 'Explore Our Services', es: 'Ver Nuestros Servicios' },
  'index.hero_cta2':    { en: 'Start Your Project', es: 'Comenzar tu Proyecto' },

  // ── BLUEPRINT HERO ───────────────────────────────
  'bp.hero_eyebrow':    { en: 'SERVICES',           es: 'SERVICIOS' },
  'bp.hero_title':      { en: 'Clarity Before Design.', es: 'Claridad Antes del Diseño.' },
  'bp.hero_sub':        { en: 'Every engagement starts with understanding your business, your audience, and your goals. What gets built depends on what you actually need.', es: 'Cada proyecto comienza con entender tu negocio, tu audiencia y tus objetivos. Lo que se construye depende de lo que realmente necesitas.' },

  // ── PROCESS HERO ─────────────────────────────────
  'proc.hero_title':    { en: 'From Scattered to Strategic.', es: 'De lo Disperso a lo Estratégico.' },

  // ── CONNECT HERO ─────────────────────────────────
  'cn.hero_title':      { en: "Let's Get Clear.", es: 'Vamos a Aclarar.' },
  'cn.label_service':   { en: 'Service You Are Interested In', es: 'Servicio de tu Interés' },
  'cn.label_budget':    { en: 'Approximate Budget',  es: 'Presupuesto Aproximado' },
  'cn.label_timeline':  { en: 'Ideal Project Timeline', es: 'Cronograma Ideal del Proyecto' },
};

// ── ENGINE ───────────────────────────────────────────────────
(function () {
  const savedLang = 'en';
  localStorage.setItem('bc_lang', 'en');
  applyLang(savedLang);

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
        el.innerHTML = TRANSLATIONS[key][lang];
      }
    });
    // innerHTML attributes (for content containing HTML tags)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
        el.innerHTML = TRANSLATIONS[key][lang];
      }
    });
    // placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
        el.setAttribute('placeholder', TRANSLATIONS[key][lang]);
      }
    });
    localStorage.setItem('bc_lang', lang);
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    // update all toggle buttons — show/hide spans
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.querySelectorAll('.lang-toggle__en, .lang-toggle__es').forEach(s => s.style.display = 'none');
      const spanToShow = btn.querySelector(lang === 'en' ? '.lang-toggle__en' : '.lang-toggle__es');
      if (spanToShow) spanToShow.style.display = '';
      btn.setAttribute('data-current', lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(savedLang);
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = btn.getAttribute('data-current') || 'en';
        applyLang(current === 'en' ? 'es' : 'en');
      });
    });
  });
})();
