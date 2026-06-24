// Baldwin & Co. — Language Toggle (EN / ES)
const TRANSLATIONS = {

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
  'footer.apply_btn':  { en: 'Apply for a Website Reset', es: 'Solicitar un Reinicio Web' },
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

  'index.hiw_eyebrow': { en: 'The Client Experience', es: 'La Experiencia del Cliente' },
  'index.hiw_title':   { en: 'How It Works', es: 'Cómo Funciona' },
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
};

// ── ENGINE ───────────────────────────────────────────────────
(function () {
  const savedLang = localStorage.getItem('bc_lang') || 'en';
  applyLang(savedLang);

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
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
    // update all toggle buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
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
