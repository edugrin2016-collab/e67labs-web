const infoContent = {
  'software-medida': {
    title: 'Software a medida',
    intro: 'Diseñamos sistemas de gestión, seguimiento de obra y control de producción que se adaptan a cómo trabaja realmente tu equipo, no al revés. Nada de plantillas genéricas: partimos de tu operación real.',
    como: 'Relevamos tus procesos actuales, identificamos los cuellos de botella y construimos el sistema paso a paso, validando cada etapa con tu equipo antes de avanzar a la siguiente.',
    beneficios: [
      'Sistema pensado para tu forma de trabajar, no una plantilla genérica',
      'Menos planillas sueltas y menos información dispersa',
      'Escalable: crece con tu empresa sin rehacer todo de nuevo',
      'Soporte y ajustes durante y después de la implementación'
    ],
    para: 'Empresas que sienten que sus herramientas actuales (planillas, sistemas viejos) ya no alcanzan para controlar su operación.'
  },
  'automatizacion-procesos': {
    title: 'Automatización de procesos',
    intro: 'Identificamos las tareas repetitivas que le quitan tiempo a tu equipo — carga de datos, seguimiento de planillas, generación de reportes, notificaciones — y las convertimos en procesos automáticos que corren solos.',
    como: 'Relevamos qué tareas se repiten todos los días y dónde se pierden más horas o se cometen más errores. Diseñamos flujos automatizados conectando las herramientas que ya usás.',
    beneficios: [
      'Reducción de horas dedicadas a tareas administrativas',
      'Menos errores por carga manual de datos',
      'Información actualizada en tiempo real',
      'Tu equipo enfocado en decisiones, no en tareas repetitivas'
    ],
    para: 'Empresas de cualquier tamaño donde "siempre se hace lo mismo a mano" en alguna parte de la operación diaria.'
  },
  'ia-aplicada': {
    title: 'Inteligencia Artificial aplicada',
    intro: 'Aplicamos modelos de IA a problemas concretos de tu negocio: predicción de costos, control de calidad, mantenimiento predictivo y asistentes internos que responden consultas frecuentes de tu equipo.',
    como: 'Analizamos qué datos ya generás (ventas, producción, mantenimiento) y entrenamos modelos que aprenden de ese historial para anticipar problemas o sugerir decisiones antes de que el problema ocurra.',
    beneficios: [
      'Anticipar fallas o desvíos antes de que impacten en la operación',
      'Decisiones basadas en patrones reales, no en intuición',
      'Asistentes internos que responden consultas repetitivas al instante',
      'Mejora continua: el modelo aprende con más datos'
    ],
    para: 'Empresas que ya tienen datos históricos (ventas, producción, mantenimiento) y quieren aprovecharlos para decidir mejor.'
  },
  'dashboards': {
    title: 'Dashboards y datos en tiempo real',
    intro: 'Visualizamos los indicadores clave de tu obra, planta o producción en un solo lugar, para que las decisiones se tomen con datos reales y actualizados, no con suposiciones o reportes atrasados.',
    como: 'Conectamos las fuentes de datos que ya tenés (sistemas, planillas, sensores) y armamos paneles visuales simples, filtrados exactamente por lo que necesitás ver día a día.',
    beneficios: [
      'Información centralizada, sin buscar en 5 planillas distintas',
      'Alertas automáticas ante desvíos importantes',
      'Datos actualizados en tiempo real, no reportes de la semana pasada',
      'Accesible desde celular o computadora'
    ],
    para: 'Dueños y gerentes que necesitan ver el estado real de su operación sin esperar reportes armados a mano.'
  },
  'integraciones': {
    title: 'Integraciones a medida',
    intro: 'Conectamos tus sistemas actuales — ERP, planillas, maquinaria, WhatsApp — con nuevas herramientas, sin frenar la operación ni obligarte a migrar todo de golpe.',
    como: 'Mapeamos qué sistemas usás hoy y cómo se comunican (o no) entre sí. Construimos puentes automáticos para que la información fluya sin que nadie tenga que copiarla a mano de un lado a otro.',
    beneficios: [
      'Aprovechás las herramientas que ya tenés, sin descartarlas',
      'Elimina la doble carga de datos en distintos sistemas',
      'Implementación gradual, sin parar la operación',
      'Menor riesgo que una migración completa de sistemas'
    ],
    para: 'Empresas que usan varias herramientas que no se hablan entre sí y pierden tiempo pasando información manualmente.'
  },
  'acompanamiento': {
    title: 'Acompañamiento continuo',
    intro: 'No entregamos un sistema y desaparecemos. Iteramos junto a tu equipo a medida que la operación crece, cambia o aparecen nuevas necesidades.',
    como: 'Mantenemos contacto regular después de la entrega, revisamos cómo se está usando lo implementado y ajustamos o sumamos funciones según lo que realmente necesites con el tiempo.',
    beneficios: [
      'Soporte real ante dudas, errores o cambios de necesidad',
      'El sistema evoluciona con tu empresa, no queda obsoleto',
      'Relación de largo plazo, no una entrega única',
      'Ajustes rápidos cuando algo no funciona como se esperaba'
    ],
    para: 'Empresas que buscan un socio tecnológico de confianza, no solo un proveedor puntual.'
  },
  'sol-automatizacion': {
    title: 'Automatización',
    intro: 'Eliminamos tareas manuales y repetitivas de tu operación diaria para que tu equipo gane tiempo, reduzca errores y se enfoque en lo que realmente agrega valor.',
    como: 'Identificamos los procesos que más tiempo consumen y los reemplazamos por flujos automáticos, integrados con las herramientas que ya usás en tu día a día.',
    beneficios: [
      'Menos horas perdidas en tareas repetitivas',
      'Reducción de errores humanos en procesos administrativos',
      'Procesos más rápidos y consistentes',
      'Equipo liberado para tareas de mayor valor'
    ],
    para: 'Cualquier negocio donde una parte de la operación diaria todavía se hace a mano y consume tiempo innecesario.'
  },
  'sol-ia': {
    title: 'Inteligencia Artificial',
    intro: 'Aplicamos modelos de IA a tu operación para predecir resultados, analizar información y asistir en la toma de decisiones, adaptados a las necesidades concretas de tu negocio.',
    como: 'Evaluamos qué datos generás y dónde la IA puede aportar valor real: predicción, análisis de patrones o automatización de respuestas a consultas frecuentes.',
    beneficios: [
      'Decisiones apoyadas en datos, no solo en experiencia',
      'Anticipación de problemas antes de que escalen',
      'Asistentes que resuelven consultas simples automáticamente',
      'Ahorro de tiempo en análisis manual de información'
    ],
    para: 'Negocios que quieren empezar a usar IA de forma concreta, sin necesidad de ser expertos en tecnología.'
  },
  'sol-medida': {
    title: 'Soluciones a medida',
    intro: 'Diseñamos software y sistemas adaptados exactamente a cómo trabaja tu empresa, en vez de forzarte a adaptarte a una herramienta genérica que no encaja del todo.',
    como: 'Escuchamos primero cómo funciona tu operación hoy, y construimos la solución en base a eso — no partimos de una plantilla fija.',
    beneficios: [
      'Herramienta que encaja con tu forma real de trabajar',
      'Sin pagar por funciones que nunca vas a usar',
      'Flexibilidad para crecer o ajustar con el tiempo',
      'Menos fricción en la adopción por parte del equipo'
    ],
    para: 'Empresas que probaron soluciones genéricas y sintieron que "les quedaba grande o chica" para su operación real.'
  },
  'sol-dashboards': {
    title: 'Dashboards y datos',
    intro: 'Te damos visibilidad clara de tus indicadores clave en un solo lugar, para que las decisiones se tomen con información real y actualizada, no con suposiciones.',
    como: 'Conectamos las fuentes de datos que ya generás y armamos paneles simples, con la información que realmente necesitás revisar todos los días.',
    beneficios: [
      'Toda la información importante en un solo lugar',
      'Menos tiempo armando reportes a mano',
      'Detección temprana de desvíos o problemas',
      'Acceso simple desde cualquier dispositivo'
    ],
    para: 'Dueños y responsables de negocio que necesitan un panorama claro de su operación sin depender de reportes manuales.'
  }
};

function openInfoModal(key) {
  const data = infoContent[key];
  if (!data) return;

  const beneficiosHtml = data.beneficios.map(b => `<li>${b}</li>`).join('');

  const html = `
    <h3>${data.title}</h3>
    <p>${data.intro}</p>
    <h4>¿Cómo lo hacemos?</h4>
    <p>${data.como}</p>
    <h4>Beneficios concretos</h4>
    <ul>${beneficiosHtml}</ul>
    <h4>¿Para quién es?</h4>
    <p>${data.para}</p>
  `;

  document.getElementById('infoModalContent').innerHTML = html;
  const overlay = document.getElementById('infoModalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
  document.getElementById('infoModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeInfoModalOnOverlay(event) {
  if (event.target.id === 'infoModalOverlay') {
    closeInfoModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeInfoModal();
});
