import { a as e, i as t, n, r, t as i } from "./index-Bv6sCNmh.js";
var a = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  o = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  s = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  c = (e) => {
    let t = s(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  l = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  u = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  d = e(t()),
  f = (0, d.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: o,
        iconNode: s,
        ...c
      },
      f,
    ) =>
      (0, d.createElement)(
        `svg`,
        {
          ref: f,
          ...l,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: a(`lucide`, i),
          ...(!o && !u(c) && { "aria-hidden": `true` }),
          ...c,
        },
        [
          ...s.map(([e, t]) => (0, d.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ],
      ),
  ),
  p = (e, t) => {
    let n = (0, d.forwardRef)(({ className: n, ...r }, i) =>
      (0, d.createElement)(f, {
        ref: i,
        iconNode: t,
        className: a(`lucide-${o(c(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = c(e)), n);
  },
  m = p(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  h = p(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  g = p(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  _ = p(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  v = `/assets/research-1-C3lSgVJv.jpg`,
  y = `/assets/research-2-D9M4vpdd.jpg`,
  b = `/assets/research-3-DNh4BWJX.jpg`,
  x = `/assets/research-4-CkdhrEd_.jpg`,
  S = `/assets/exp-embera-CabwXcP-.jpg`,
  C = `/assets/exp-colegios-C-pfQjhs.jpg`,
  w = `/assets/exp-sumo-BXgjtmQe.jpg`,
  T = `/assets/exp-arduino-C-l3CvHQ.jpg`,
  ee = `/assets/comp-rredsi-7qH1k3JN.jpg`,
  E = `/assets/comp-arena-BN5TRJ_p.jpg`,
  te = `/assets/524%20-%20Certificado%20IA-D955z9qb.pdf`,
  ne = `/assets/1086%20-%20Certificado%20vacaionalpdf-B4O7O_Xh.pdf`,
  re = `/assets/3554%20-%20Certificado%20robotica%202024-DbqfUqym.pdf`,
  D = `/assets/3572%20-%20Certificado%20aeronautica-Bq6zCLN3.pdf`,
  O = `/assets/Certificacion%20Prototipado-DCAga3oK.pdf`,
  k = `/assets/Certificado_XIII%20Encuentro%20Regional%20de%20Semilleros%20de%20Investigacion%20RREDSI%202023-16%20de%20agosto%20de%202026-BtaSnB6H.pdf`,
  ie = `/assets/certificadoPonente-B88OHi2p.pdf`,
  ae = [`es`, `en`, `it`],
  A = {
    es: {
      langLabel: `EN`,
      langAria: `Cambiar idioma a inglés`,
      name: `Janny Duarte`,
      nav: [
        { href: `#bio`, label: `Biografía` },
        { href: `#formacion`, label: `Formación` },
        { href: `#experiencia`, label: `Experiencia` },
        { href: `#competencias`, label: `Competencias` },
        { href: `#certificados`, label: `Certificados` },
      ],
      heroKicker: `Portafolio Académico`,
      heroRole: `Ingeniera en Mecatrónica. Docente Extracurricular de Robótica en el Instituto Gimnasio de Pereira.`,
      heroTagline: `Sistemas electrónicos, control e innovación. Competencias internacionales de diseño aeronáutico y educación en robótica.`,
      heroCtaPrimary: `Ver experiencia`,
      heroCtaSecondary: `Biografía`,
      portraitAlt: `Retrato académico de Janny Duarte`,
      bioTitle: `Perfil Académico`,
      bioP1: `Ingeniera Mecatrónica con formación en instrumentación y electrónica. Me interesa resolver problemas prácticos, especialmente en el área de sistemas electrónicos y control.`,
      bioP2: `He tenido experiencia en competencias de diseño aeronáutico, trabajo en laboratorio y desarrollo de proyectos que integran electrónica con aplicaciones reales. Enseño robótica de forma extracurricular en diferentes contextos porque me gusta compartir lo que aprendo.`,
      bioP3: `Mi tesis de pregrado trabajó en mitigación de incendios mediante drones, combinando electrónica con una aplicación práctica de seguridad.`,
      experienceTitle: `Trayectoria de Experiencia`,
      experienceSubtitle: `Orden cronológico`,
      prevAria: `Foto anterior`,
      nextAria: `Foto siguiente`,
      detailsLabel: `Ver más`,
      closeLabel: `Cerrar`,
      experiences: [
        {
          id: `embera`,
          period: `Talleres de aeronáutica`,
          title: `Comunidad Emberá Chamí`,
          description: `Dicté los primeros talleres de aeronáutica a estudiantes de población vulnerable de la comunidad indígena Emberá Chamí, con metodología recreativa y cierre en la construcción de un avión de madera.`,
          images: [S, x],
          alt: `Taller de aeronáutica con niños de la comunidad Emberá Chamí`,
          modules: [
            {
              name: `Contenido del taller`,
              items: [
                `Historia y Sueño de Volar`,
                `Tipos de Aeronaves`,
                `¿Por qué vuelan?`,
                `La Atmósfera`,
                `Control del Vuelo`,
                `Actividades recreativas y construcción de un avión de madera`,
              ],
            },
          ],
        },
        {
          id: `colegios`,
          period: `Talleres de aeronáutica`,
          title: `Colegios`,
          description: `Repliqué posteriormente los mismos talleres en diferentes colegios. El currículo se mantuvo idéntico; lo que cambió fue la población estudiantil atendida.`,
          images: [C, x],
          alt: `Taller de aeronáutica en un aula de colegio con modelos de aviones`,
        },
        {
          id: `monitora`,
          period: `Monitora`,
          title: `Laboratorio de Instrumentación Mecatrónica — UTP`,
          description: `Apoyo académico y operativo del laboratorio de instrumentación de la Universidad Tecnológica de Pereira.`,
          images: [v, T],
          alt: `Laboratorio de instrumentación mecatrónica con equipos de control y automatización`,
          modules: [
            {
              name: `Funciones`,
              items: [
                `Enseñé a los estudiantes el uso correcto de los equipos del laboratorio`,
                `Verifiqué que el inventario de equipos estuviera completo`,
                `Realicé mantenimientos cuando era necesario`,
                `Supervisé los laboratorios y los elementos electrónicos`,
                `Facilité componentes electrónicos a los estudiantes que los necesitaban`,
              ],
            },
          ],
        },
        {
          id: `macmotus`,
          period: `Marzo 2026 — Líder de equipo`,
          title: `Macmotus — AERODESIGN MX (ADMX), México`,
          description: `Lideré el equipo Macmotus en la competencia internacional AERODESIGN MX, cuyo reglamento regula el diseño, construcción y operación de aeronaves no tripuladas de ala fija como ejercicio de ingeniería real para estudiantes.`,
          images: [b, y],
          alt: `Equipo Macmotus con su aeronave de ala fija en AERODESIGN MX`,
          modules: [
            {
              name: `Categoría Cargo Challenge`,
              items: [
                `Optimización de diseño, eficiencia estructural, peso vacío y capacidad de carga sólida`,
                `Vuelos con y sin carga en distintas rondas`,
              ],
            },
            {
              name: `Etapas de evaluación`,
              items: [
                `Reporte de Diseño`,
                `Presentación Técnica`,
                `Inspección Técnica e Inspección de Vuelo`,
              ],
            },
            {
              name: `Resultados`,
              items: [
                `Puesto 12 de 19, logro significativo para un equipo multidisciplinario (mecánica, física y mecatrónica) sin experiencia profunda previa en aeromodelismo`,
                `Aeronave de diseño 100% original y colombiano`,
                `Primer equipo colombiano en participar en este tipo de competencia`,
              ],
            },
          ],
        },
        {
          id: `gimnasio`,
          period: `Docente extracurricular`,
          title: `Robótica — Instituto Gimnasio de Pereira`,
          description: `Enseño robótica a estudiantes desde primaria hasta secundaria, con proyectos aplicados y competencias internas.`,
          images: [w, T],
          alt: `Competencia de robots sumo con estudiantes del club de robótica`,
          modules: [
            {
              name: `Proyecto final`,
              items: [
                `Robot sumo con ESP32 en ambos niveles`,
                `Primaria: control con mando de videojuego`,
                `Secundaria: control desde el celular con la app Blynk`,
              ],
            },
            {
              name: `Otras actividades`,
              items: [
                `Talleres voluntarios de robótica en escuelas rurales de Risaralda`,
                `Organización de una competencia de robots sumo para el club de robótica (primaria y secundaria): cronogramas tipo round robin, hojas de puntuación en Excel con código de colores y gestión de regalos con presupuesto limitado`,
                `En preparación: capítulo de libro académico relacionado con la competencia de sumo robótica`,
              ],
            },
          ],
        },
        {
          id: `tesis`,
          period: `Tesis de pregrado`,
          title: `Mitigación de Incendios mediante UAV`,
          description: `Trabajo de grado enfocado en el uso de drones (UAV) para la detección y mitigación de incendios, integrando sensores, navegación autónoma y análisis de datos.`,
          images: [y, b],
          alt: `Drone UAV utilizado para mitigación de incendios`,
        },
        {
          id: `proyectos`,
          period: `Proyectos técnicos recientes`,
          title: `Auto sumo Bluetooth y robot sumo ESP32`,
          description: `Desarrollo y depuración de robots de competencia con electrónica embebida.`,
          images: [T, w],
          alt: `Banco de trabajo con Arduino, módulo Bluetooth y driver de motores`,
          modules: [
            {
              name: `Auto sumo con Bluetooth (Arduino)`,
              items: [
                `Módulo Bluetooth tipo HC-06 y driver de motores L298N`,
                `App "Arduino Bluetooth Controller" (Giumig Apps)`,
                `Diagnóstico y solución de desconexiones por insuficiencia de energía del regulador 5V del L298N (resuelto separando fuentes de poder)`,
              ],
            },
            {
              name: `Robot sumo con ESP32 + Bluepad32`,
              items: [
                `Resolución de conflictos de librerías e incompatibilidades entre las APIs de ESP32 core v2 y v3`,
              ],
            },
          ],
        },
        {
          id: `vacaciones`,
          period: `Docencia — UTP`,
          title: `"Vacaciones de Ciencia y Tecnología" — Curso de una semana para niños`,
          description: `Curso dirigido a niños de 9 a 14 años, con temas de aeronáutica, robótica, IoT, diseño y programación. Metodología basada en actividades recreativas; el curso cierra con la construcción de un avión de madera.`,
          images: [x, C, T],
          alt: `Niños construyendo robots y aviones de madera en un curso de ciencia y tecnología`,
          modules: [
            {
              name: `Módulo de Aeronáutica (nivel básico)`,
              items: [
                `Historia y Sueño de Volar`,
                `Tipos de Aeronaves`,
                `¿Por qué vuelan?`,
                `La Atmósfera`,
                `Control del Vuelo`,
              ],
            },
            {
              name: `Módulo de IoT`,
              items: [
                `Arduino Cloud y dispositivos inteligentes`,
                `Control por voz con Alexa`,
                `Ensamblaje físico de placas`,
              ],
            },
            {
              name: `Módulo de Diseño`,
              items: [
                `Representación de Objetos`,
                `Planos y Medidas (Acotado)`,
                `Herramientas de Diseño: Onshape`,
                `Guía práctica de Onshape: vistas (alzado, planta y perfil) y planos técnicos de piezas reales`,
              ],
            },
            {
              name: `Módulo de Robótica`,
              items: [
                `Metodología STEAM`,
                `La Anatomía del Robot`,
                `Conceptos de Electricidad`,
                `Programación (C++ o Python)`,
                `Control y Conexión`,
                `Proyecto Final: Smart Car`,
              ],
            },
            {
              name: `Módulo de Programación`,
              items: [
                `Lenguaje C++ usando kit Arduino`,
                `Práctica: encendido de LEDs, manejo de sensores, entre otros`,
              ],
            },
          ],
        },
      ],
      competitionsTitle: `Competencias y Participaciones Académicas`,
      competitions: [
        {
          id: `rredsi`,
          period: `Semillero de investigación`,
          title: `RREDSI`,
          intro: `Presenté mi investigación en encuentro departamental y regional`,
          modalTitle: `RREDSI — Red Regional de Semilleros de Investigación`,
          detail: `Sistema de sujeción de balones para incendio transportados por un vehículo aéreo no tripulado, combinando electrónica avanzada con aplicaciones prácticas de seguridad y mitigación de incendios.`,
          images: [ee, y],
          alt: `Presentación de investigación en un encuentro académico de semilleros`,
          modules: [
            { name: `Rol`, items: [`Ponente`] },
            {
              name: `Red`,
              items: [
                `Red Regional de Semilleros de Investigación (RREDSI), conformada por 49 instituciones de educación superior de Caldas, Quindío, Risaralda y Valle del Cauca`,
              ],
            },
            {
              name: `Objetivo de RREDSI`,
              items: [
                `Fomentar la cultura investigativa y el pensamiento crítico en estudiantes de pregrado mediante ejercicios de investigación formativa`,
              ],
            },
            {
              name: `Participación`,
              items: [
                `Encuentro Departamental: 17 de mayo de 2023`,
                `Encuentro Regional: agosto de 2023`,
              ],
            },
            {
              name: `Proyecto presentado`,
              items: [
                `"Desarrollo de un sistema de sujeción de balones para incendio a través de un vehículo aéreo no tripulado"`,
              ],
            },
          ],
        },
        {
          id: `arena`,
          period: `Competencia de robótica`,
          title: `ARENA UTP`,
          intro: `Participé en dos categorías de competencia de robótica interna`,
          modalTitle: `ARENA UTP — Competencia de Robótica`,
          detail: `Competencia interna de robótica de la Universidad Tecnológica de Pereira.`,
          images: [E, w],
          alt: `Robots de radiocontrol compitiendo en el ring de sumo`,
          modules: [
            {
              name: `Sumo RC`,
              items: [
                `Robots controlados por radiofrecuencia compiten en el clásico ring de sumo, donde el objetivo es sacar al oponente del área`,
              ],
            },
            {
              name: `Soccer RC`,
              items: [
                `Robots controlados por radiofrecuencia compiten en emocionantes partidos de fútbol, demostrando precisión y estrategia`,
              ],
            },
            {
              name: `Participación`,
              items: [
                `Competí en ambas categorías, ganando experiencia en diseño, programación y control de sistemas robóticos`,
              ],
            },
          ],
        },
      ],
      studiesTitle: `Formación Académica`,
      studies: [
        {
          year: `2026`,
          title: `Ingeniería en Mecatrónica`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `teal`,
        },
        {
          year: `2026`,
          title: `Tecnóloga en Mecatrónica`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `mid`,
        },
        {
          year: `2023`,
          title: `Técnica en Mecatrónica`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `mid`,
        },
        {
          year: `2020`,
          title: `Tecnólogo en Diseño e Integración de Automatismo Mecatrónico`,
          place: `SENA`,
          accent: `mid`,
        },
      ],
      certificatesTitle: `Certificaciones y Honores`,
      certificates: [
        {
          name: `Uso de la inteligencia artificial para la toma de decisiones en ventas`,
          issuer: `UTP · Taller`,
          year: `2026`,
          dot: `teal`,
          file: te,
        },
        {
          name: `Tallerista — Vacaciones de Ciencia y Tecnología`,
          issuer: `UTP · CIDT`,
          year: `2026`,
          dot: `bright`,
          file: ne,
        },
        {
          name: `Ponente — XIII Encuentro Regional de Semilleros RREDSI`,
          issuer: `RREDSI · Tuluá`,
          year: `2026`,
          dot: `teal`,
          file: k,
        },
        {
          name: `Prototipado Electrónico (20 horas)`,
          issuer: `UTP · Ciencias Básicas`,
          year: `2025`,
          dot: `bright`,
          file: O,
        },
        {
          name: `Tallerista — Robótica en colegios rurales de Risaralda`,
          issuer: `UTP · Extensión`,
          year: `2024`,
          dot: `teal`,
          file: re,
        },
        {
          name: `Tallerista — Competencia de Aeronáutica UTP 2024-2`,
          issuer: `UTP · Extensión`,
          year: `2024`,
          dot: `bright`,
          file: D,
        },
        {
          name: `Ponente — Sistema de sujeción de balones para incendios con UAV`,
          issuer: `RREDSI · Cali`,
          year: `2023`,
          dot: `teal`,
          file: ie,
        },
      ],
      certificateViewLabel: `Ver certificado`,
      footerTagline: `Portafolio Académico © 2026`,
      footerLinks: [
        { href: `#bio`, label: `Perfil` },
        { href: `#experiencia`, label: `Experiencia` },
        { href: `#certificados`, label: `Certificados` },
      ],
    },
    en: {
      langLabel: `IT`,
      langAria: `Cambia lingua in italiano`,
      name: `Janny Duarte`,
      nav: [
        { href: `#bio`, label: `Biography` },
        { href: `#formacion`, label: `Education` },
        { href: `#experiencia`, label: `Experience` },
        { href: `#competencias`, label: `Competitions` },
        { href: `#certificados`, label: `Certificates` },
      ],
      heroKicker: `Academic Portfolio`,
      heroRole: `Mechatronics Engineer. Extracurricular Robotics Teacher at Instituto Gimnasio de Pereira.`,
      heroTagline: `Electronic systems, control and innovation. International aircraft design competitions and robotics education.`,
      heroCtaPrimary: `View experience`,
      heroCtaSecondary: `Biography`,
      portraitAlt: `Academic portrait of Janny Duarte`,
      bioTitle: `Academic Profile`,
      bioP1: `Mechatronics engineer trained in instrumentation and electronics. I enjoy solving practical problems, especially in electronic systems and control.`,
      bioP2: `I have experience in aircraft design competitions, laboratory work and the development of projects that combine electronics with real-world applications. I teach robotics extracurricularly in different settings because I like sharing what I learn.`,
      bioP3: `My undergraduate thesis worked on fire mitigation using drones, combining electronics with a practical safety application.`,
      experienceTitle: `Experience Timeline`,
      experienceSubtitle: `Chronological order`,
      prevAria: `Previous photo`,
      nextAria: `Next photo`,
      detailsLabel: `See more`,
      closeLabel: `Close`,
      experiences: [
        {
          id: `embera`,
          period: `Aeronautics workshops`,
          title: `Emberá Chamí Community`,
          description: `I taught my first aeronautics workshops to students from a vulnerable population, the Emberá Chamí indigenous community, using a playful methodology closing with the construction of a wooden airplane.`,
          images: [S, x],
          alt: `Aeronautics workshop with children from the Emberá Chamí community`,
          modules: [
            {
              name: `Workshop content`,
              items: [
                `History and the Dream of Flight`,
                `Types of Aircraft`,
                `Why do they fly?`,
                `The Atmosphere`,
                `Flight Control`,
                `Playful activities and building a wooden airplane`,
              ],
            },
          ],
        },
        {
          id: `colegios`,
          period: `Aeronautics workshops`,
          title: `Schools`,
          description: `I later replicated the same workshops in different schools. The curriculum stayed identical; what changed was the student population served.`,
          images: [C, x],
          alt: `Aeronautics workshop in a school classroom with model airplanes`,
        },
        {
          id: `monitora`,
          period: `Teaching Assistant`,
          title: `Mechatronics Instrumentation Lab — UTP`,
          description: `Academic and operational support at the instrumentation laboratory of Universidad Tecnológica de Pereira.`,
          images: [v, T],
          alt: `Mechatronics instrumentation lab with control and automation equipment`,
          modules: [
            {
              name: `Responsibilities`,
              items: [
                `Taught students the correct use of laboratory equipment`,
                `Verified that the equipment inventory was complete`,
                `Performed maintenance when required`,
                `Supervised the labs and electronic components`,
                `Provided electronic components to students who needed them`,
              ],
            },
          ],
        },
        {
          id: `macmotus`,
          period: `March 2026 — Team Leader`,
          title: `Macmotus — AERODESIGN MX (ADMX), Mexico`,
          description: `I led the Macmotus team at the international AERODESIGN MX competition, whose rules govern the design, construction and operation of fixed-wing unmanned aircraft as a real engineering exercise for students.`,
          images: [b, y],
          alt: `Macmotus team with their fixed-wing aircraft at AERODESIGN MX`,
          modules: [
            {
              name: `Cargo Challenge category`,
              items: [
                `Optimizing design, structural efficiency, empty weight and solid payload capacity`,
                `Flights with and without payload across different rounds`,
              ],
            },
            {
              name: `Evaluation stages`,
              items: [
                `Design Report`,
                `Technical Presentation`,
                `Technical Inspection and Flight Inspection`,
              ],
            },
            {
              name: `Results`,
              items: [
                `12th of 19 — a significant achievement for a multidisciplinary team (mechanics, physics and mechatronics) with no deep prior experience in model aircraft`,
                `100% original Colombian aircraft design`,
                `First Colombian team to compete in this type of competition`,
              ],
            },
          ],
        },
        {
          id: `gimnasio`,
          period: `Extracurricular teacher`,
          title: `Robotics — Instituto Gimnasio de Pereira`,
          description: `I teach robotics to students from primary through secondary school, with applied projects and internal competitions.`,
          images: [w, T],
          alt: `Sumo robot competition with robotics club students`,
          modules: [
            {
              name: `Final project`,
              items: [
                `Sumo robot with ESP32 at both levels`,
                `Primary: controlled with a video game controller`,
                `Secondary: controlled from a phone using the Blynk app`,
              ],
            },
            {
              name: `Other activities`,
              items: [
                `Volunteer robotics workshops in rural schools of Risaralda`,
                `Organized a sumo robot competition for the robotics club (primary and secondary): round-robin schedules, color-coded Excel scoring sheets and prize management on a limited budget`,
                `In preparation: an academic book chapter related to the sumo robotics competition`,
              ],
            },
          ],
        },
        {
          id: `tesis`,
          period: `Undergraduate thesis`,
          title: `Fire Mitigation Using UAVs`,
          description: `Undergraduate thesis focused on using drones (UAVs) for fire detection and mitigation, integrating sensors, autonomous navigation and data analysis.`,
          images: [y, b],
          alt: `UAV drone used for fire mitigation`,
        },
        {
          id: `proyectos`,
          period: `Recent technical projects`,
          title: `Bluetooth sumo car and ESP32 sumo robot`,
          description: `Development and debugging of competition robots with embedded electronics.`,
          images: [T, w],
          alt: `Workbench with Arduino, Bluetooth module and motor driver`,
          modules: [
            {
              name: `Bluetooth sumo car (Arduino)`,
              items: [
                `HC-06 Bluetooth module and L298N motor driver`,
                `"Arduino Bluetooth Controller" app (Giumig Apps)`,
                `Diagnosed and solved disconnections caused by insufficient power from the L298N 5V regulator (fixed by separating power supplies)`,
              ],
            },
            {
              name: `Sumo robot with ESP32 + Bluepad32`,
              items: [
                `Resolved library conflicts and incompatibilities between ESP32 core v2 and v3 APIs`,
              ],
            },
          ],
        },
        {
          id: `vacaciones`,
          period: `Teaching — UTP`,
          title: `"Science and Technology Holidays" — One-week course for kids`,
          description: `Course for children aged 9 to 14 covering aeronautics, robotics, IoT, design and programming. Hands-on, playful methodology; the course closes with the construction of a wooden airplane.`,
          images: [x, C, T],
          alt: `Children building robots and wooden airplanes in a science and technology course`,
          modules: [
            {
              name: `Aeronautics Module (basic level)`,
              items: [
                `History and the Dream of Flight`,
                `Types of Aircraft`,
                `Why do they fly?`,
                `The Atmosphere`,
                `Flight Control`,
              ],
            },
            {
              name: `IoT Module`,
              items: [
                `Arduino Cloud and smart devices`,
                `Voice control with Alexa`,
                `Physical board assembly`,
              ],
            },
            {
              name: `Design Module`,
              items: [
                `Object Representation`,
                `Drawings and Dimensions`,
                `Design Tools: Onshape`,
                `Onshape practice guide: views (front, top and side) and technical drawings of real parts`,
              ],
            },
            {
              name: `Robotics Module`,
              items: [
                `STEAM methodology`,
                `Anatomy of a Robot`,
                `Electricity Concepts`,
                `Programming (C++ or Python)`,
                `Control and Connectivity`,
                `Final Project: Smart Car`,
              ],
            },
            {
              name: `Programming Module`,
              items: [
                `C++ using an Arduino kit`,
                `Hands-on practice: LEDs, sensors and more`,
              ],
            },
          ],
        },
      ],
      competitionsTitle: `Academic Competitions and Participations`,
      competitions: [
        {
          id: `rredsi`,
          period: `Research seedbed`,
          title: `RREDSI`,
          intro: `I presented my research at the departmental and regional meetings`,
          modalTitle: `RREDSI — Regional Network of Research Seedbeds`,
          detail: `A holding system for fire-extinguishing balls carried by an unmanned aerial vehicle, combining advanced electronics with practical safety and fire mitigation applications.`,
          images: [ee, y],
          alt: `Research presentation at an academic research-seedbed meeting`,
          modules: [
            { name: `Role`, items: [`Speaker`] },
            {
              name: `Network`,
              items: [
                `Regional Network of Research Seedbeds (RREDSI), made up of 49 higher education institutions from Caldas, Quindío, Risaralda and Valle del Cauca`,
              ],
            },
            {
              name: `RREDSI goal`,
              items: [
                `Foster research culture and critical thinking in undergraduate students through formative research work`,
              ],
            },
            {
              name: `Participation`,
              items: [
                `Departmental meeting: May 17, 2023`,
                `Regional meeting: August 2023`,
              ],
            },
            {
              name: `Project presented`,
              items: [
                `"Development of a holding system for fire-extinguishing balls through an unmanned aerial vehicle"`,
              ],
            },
          ],
        },
        {
          id: `arena`,
          period: `Robotics competition`,
          title: `ARENA UTP`,
          intro: `I competed in two categories of the internal robotics competition`,
          modalTitle: `ARENA UTP — Robotics Competition`,
          detail: `Internal robotics competition of Universidad Tecnológica de Pereira.`,
          images: [E, w],
          alt: `Radio-controlled robots competing in the sumo ring`,
          modules: [
            {
              name: `Sumo RC`,
              items: [
                `Radio-controlled robots compete in the classic sumo ring, where the goal is to push the opponent out of the area`,
              ],
            },
            {
              name: `Soccer RC`,
              items: [
                `Radio-controlled robots compete in exciting soccer matches, showing precision and strategy`,
              ],
            },
            {
              name: `Participation`,
              items: [
                `I competed in both categories, gaining experience in design, programming and control of robotic systems`,
              ],
            },
          ],
        },
      ],
      studiesTitle: `Education`,
      studies: [
        {
          year: `2026`,
          title: `Mechatronics Engineering`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `teal`,
        },
        {
          year: `2026`,
          title: `Mechatronics Technologist`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `mid`,
        },
        {
          year: `2023`,
          title: `Mechatronics Technician`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `mid`,
        },
        {
          year: `2020`,
          title: `Technologist in Mechatronic Automation Design and Integration`,
          place: `SENA`,
          accent: `mid`,
        },
      ],
      certificatesTitle: `Certifications and Honors`,
      certificates: [
        {
          name: `Artificial Intelligence for Sales Decision-Making`,
          issuer: `UTP · Workshop`,
          year: `2026`,
          dot: `teal`,
          file: te,
        },
        {
          name: `Workshop Leader — Science and Technology Holidays`,
          issuer: `UTP · CIDT`,
          year: `2026`,
          dot: `bright`,
          file: ne,
        },
        {
          name: `Speaker — XIII RREDSI Regional Research Seedbeds Meeting`,
          issuer: `RREDSI · Tuluá`,
          year: `2026`,
          dot: `teal`,
          file: k,
        },
        {
          name: `Electronic Prototyping (20 hours)`,
          issuer: `UTP · Basic Sciences`,
          year: `2025`,
          dot: `bright`,
          file: O,
        },
        {
          name: `Workshop Leader — Robotics in rural schools of Risaralda`,
          issuer: `UTP · Extension`,
          year: `2024`,
          dot: `teal`,
          file: re,
        },
        {
          name: `Workshop Leader — UTP Aeronautics Competition 2024-2`,
          issuer: `UTP · Extension`,
          year: `2024`,
          dot: `bright`,
          file: D,
        },
        {
          name: `Speaker — UAV fire-suppression ball release system`,
          issuer: `RREDSI · Cali`,
          year: `2023`,
          dot: `teal`,
          file: ie,
        },
      ],
      certificateViewLabel: `View certificate`,
      footerTagline: `Academic Portfolio © 2026`,
      footerLinks: [
        { href: `#bio`, label: `Profile` },
        { href: `#experiencia`, label: `Experience` },
        { href: `#certificados`, label: `Certificates` },
      ],
    },
    it: {
      langLabel: `ES`,
      langAria: `Cambiar idioma a español`,
      name: `Janny Duarte`,
      nav: [
        { href: `#bio`, label: `Biografia` },
        { href: `#formacion`, label: `Formazione` },
        { href: `#experiencia`, label: `Esperienza` },
        { href: `#competencias`, label: `Competizioni` },
        { href: `#certificados`, label: `Certificati` },
      ],
      heroKicker: `Portfolio Accademico`,
      heroRole: `Ingegnere Meccatronico. Docente extracurricolare di Robotica presso l'Instituto Gimnasio de Pereira.`,
      heroTagline: `Sistemi elettronici, controllo e innovazione. Competizioni internazionali di progettazione aeronautica ed educazione alla robotica.`,
      heroCtaPrimary: `Vedi esperienza`,
      heroCtaSecondary: `Biografia`,
      portraitAlt: `Ritratto accademico di Janny Duarte`,
      bioTitle: `Profilo Accademico`,
      bioP1: `Ingegnere meccatronico con formazione in strumentazione ed elettronica. Mi interessa risolvere problemi pratici, soprattutto nell'ambito dei sistemi elettronici e del controllo.`,
      bioP2: `Ho maturato esperienza in competizioni di progettazione aeronautica, lavoro di laboratorio e sviluppo di progetti che integrano l'elettronica con applicazioni reali. Insegno robotica in modo extracurricolare in contesti diversi perché mi piace condividere ciò che imparo.`,
      bioP3: `La mia tesi di laurea ha affrontato la mitigazione degli incendi tramite droni, unendo l'elettronica a un'applicazione pratica di sicurezza.`,
      experienceTitle: `Percorso di Esperienza`,
      experienceSubtitle: `Ordine cronologico`,
      prevAria: `Foto precedente`,
      nextAria: `Foto successiva`,
      detailsLabel: `Vedi di più`,
      closeLabel: `Chiudi`,
      experiences: [
        {
          id: `embera`,
          period: `Laboratori di aeronautica`,
          title: `Comunità Emberá Chamí`,
          description: `Ho tenuto i primi laboratori di aeronautica a studenti di una popolazione vulnerabile, la comunità indigena Emberá Chamí, con una metodologia ludica e la costruzione finale di un aeroplano di legno.`,
          images: [S, x],
          alt: `Laboratorio di aeronautica con bambini della comunità Emberá Chamí`,
          modules: [
            {
              name: `Contenuti del laboratorio`,
              items: [
                `Storia e il sogno di volare`,
                `Tipi di aeromobili`,
                `Perché volano?`,
                `L'atmosfera`,
                `Controllo del volo`,
                `Attività ricreative e costruzione di un aeroplano di legno`,
              ],
            },
          ],
        },
        {
          id: `colegios`,
          period: `Laboratori di aeronautica`,
          title: `Scuole`,
          description: `Ho poi replicato gli stessi laboratori in diverse scuole. Il programma è rimasto identico; è cambiata la popolazione studentesca coinvolta.`,
          images: [C, x],
          alt: `Laboratorio di aeronautica in un'aula scolastica con modellini di aerei`,
        },
        {
          id: `monitora`,
          period: `Assistente di laboratorio`,
          title: `Laboratorio di Strumentazione Meccatronica — UTP`,
          description: `Supporto accademico e operativo del laboratorio di strumentazione dell'Universidad Tecnológica de Pereira.`,
          images: [v, T],
          alt: `Laboratorio di strumentazione meccatronica con apparecchiature di controllo e automazione`,
          modules: [
            {
              name: `Mansioni`,
              items: [
                `Ho insegnato agli studenti l'uso corretto delle apparecchiature del laboratorio`,
                `Ho verificato la completezza dell'inventario delle apparecchiature`,
                `Ho eseguito manutenzioni quando necessario`,
                `Ho supervisionato i laboratori e i componenti elettronici`,
                `Ho fornito componenti elettronici agli studenti che ne avevano bisogno`,
              ],
            },
          ],
        },
        {
          id: `macmotus`,
          period: `Marzo 2026 — Capo squadra`,
          title: `Macmotus — AERODESIGN MX (ADMX), Messico`,
          description: `Ho guidato il team Macmotus nella competizione internazionale AERODESIGN MX, il cui regolamento disciplina progettazione, costruzione e operazione di velivoli senza pilota ad ala fissa come esercizio di ingegneria reale per studenti.`,
          images: [b, y],
          alt: `Team Macmotus con il velivolo ad ala fissa ad AERODESIGN MX`,
          modules: [
            {
              name: `Categoria Cargo Challenge`,
              items: [
                `Ottimizzazione del progetto, efficienza strutturale, peso a vuoto e capacità di carico solido`,
                `Voli con e senza carico in diversi round`,
              ],
            },
            {
              name: `Fasi di valutazione`,
              items: [
                `Relazione di progetto`,
                `Presentazione tecnica`,
                `Ispezione tecnica e ispezione di volo`,
              ],
            },
            {
              name: `Risultati`,
              items: [
                `12° posto su 19, risultato significativo per un team multidisciplinare (meccanica, fisica e meccatronica) senza precedente esperienza approfondita nell'aeromodellismo`,
                `Velivolo con progetto 100% originale e colombiano`,
                `Primo team colombiano a partecipare a questo tipo di competizione`,
              ],
            },
          ],
        },
        {
          id: `gimnasio`,
          period: `Docente extracurricolare`,
          title: `Robotica — Instituto Gimnasio de Pereira`,
          description: `Insegno robotica a studenti dalla scuola primaria alla secondaria, con progetti applicati e competizioni interne.`,
          images: [w, T],
          alt: `Competizione di robot sumo con studenti del club di robotica`,
          modules: [
            {
              name: `Progetto finale`,
              items: [
                `Robot sumo con ESP32 a entrambi i livelli`,
                `Primaria: controllo con un joypad da videogioco`,
                `Secondaria: controllo dal cellulare con l'app Blynk`,
              ],
            },
            {
              name: `Altre attività`,
              items: [
                `Laboratori di robotica volontari in scuole rurali del Risaralda`,
                `Organizzazione di una competizione di robot sumo per il club di robotica (primaria e secondaria): calendari round robin, tabelle di punteggio in Excel con codici colore e gestione dei premi con budget limitato`,
                `In preparazione: capitolo di un libro accademico legato alla competizione di sumo robotico`,
              ],
            },
          ],
        },
        {
          id: `tesis`,
          period: `Tesi di laurea`,
          title: `Mitigazione degli incendi tramite UAV`,
          description: `Tesi incentrata sull'uso di droni (UAV) per il rilevamento e la mitigazione degli incendi, integrando sensori, navigazione autonoma e analisi dei dati.`,
          images: [y, b],
          alt: `Drone UAV utilizzato per la mitigazione degli incendi`,
        },
        {
          id: `proyectos`,
          period: `Progetti tecnici recenti`,
          title: `Auto sumo Bluetooth e robot sumo ESP32`,
          description: `Sviluppo e debug di robot da competizione con elettronica embedded.`,
          images: [T, w],
          alt: `Banco di lavoro con Arduino, modulo Bluetooth e driver dei motori`,
          modules: [
            {
              name: `Auto sumo con Bluetooth (Arduino)`,
              items: [
                `Modulo Bluetooth tipo HC-06 e driver motori L298N`,
                `App "Arduino Bluetooth Controller" (Giumig Apps)`,
                `Diagnosi e soluzione delle disconnessioni dovute all'alimentazione insufficiente del regolatore 5V dell'L298N (risolto separando le alimentazioni)`,
              ],
            },
            {
              name: `Robot sumo con ESP32 + Bluepad32`,
              items: [
                `Risoluzione di conflitti tra librerie e incompatibilità tra le API di ESP32 core v2 e v3`,
              ],
            },
          ],
        },
        {
          id: `vacaciones`,
          period: `Docenza — UTP`,
          title: `"Vacanze di Scienza e Tecnologia" — Corso di una settimana per bambini`,
          description: `Corso per bambini dai 9 ai 14 anni su aeronautica, robotica, IoT, design e programmazione. Metodologia basata su attività ricreative; il corso si chiude con la costruzione di un aeroplano di legno.`,
          images: [x, C, T],
          alt: `Bambini che costruiscono robot e aeroplani di legno in un corso di scienza e tecnologia`,
          modules: [
            {
              name: `Modulo di Aeronautica (livello base)`,
              items: [
                `Storia e il sogno di volare`,
                `Tipi di aeromobili`,
                `Perché volano?`,
                `L'atmosfera`,
                `Controllo del volo`,
              ],
            },
            {
              name: `Modulo IoT`,
              items: [
                `Arduino Cloud e dispositivi intelligenti`,
                `Controllo vocale con Alexa`,
                `Assemblaggio fisico delle schede`,
              ],
            },
            {
              name: `Modulo di Design`,
              items: [
                `Rappresentazione degli oggetti`,
                `Disegni e quote`,
                `Strumenti di design: Onshape`,
                `Guida pratica a Onshape: viste (prospetto, pianta e profilo) e disegni tecnici di pezzi reali`,
              ],
            },
            {
              name: `Modulo di Robotica`,
              items: [
                `Metodologia STEAM`,
                `L'anatomia del robot`,
                `Concetti di elettricità`,
                `Programmazione (C++ o Python)`,
                `Controllo e connessione`,
                `Progetto finale: Smart Car`,
              ],
            },
            {
              name: `Modulo di Programmazione`,
              items: [
                `Linguaggio C++ con kit Arduino`,
                `Pratica: accensione di LED, gestione di sensori e altro`,
              ],
            },
          ],
        },
      ],
      competitionsTitle: `Competizioni e Partecipazioni Accademiche`,
      competitions: [
        {
          id: `rredsi`,
          period: `Gruppo di ricerca`,
          title: `RREDSI`,
          intro: `Ho presentato la mia ricerca all'incontro dipartimentale e regionale`,
          modalTitle: `RREDSI — Rete Regionale dei Gruppi di Ricerca`,
          detail: `Sistema di aggancio di sfere antincendio trasportate da un veicolo aereo senza pilota, che unisce elettronica avanzata ad applicazioni pratiche di sicurezza e mitigazione degli incendi.`,
          images: [ee, y],
          alt: `Presentazione della ricerca a un incontro accademico`,
          modules: [
            { name: `Ruolo`, items: [`Relatrice`] },
            {
              name: `Rete`,
              items: [
                `Rete Regionale dei Gruppi di Ricerca (RREDSI), composta da 49 istituzioni di istruzione superiore di Caldas, Quindío, Risaralda e Valle del Cauca`,
              ],
            },
            {
              name: `Obiettivo di RREDSI`,
              items: [
                `Promuovere la cultura della ricerca e il pensiero critico negli studenti universitari attraverso esercizi di ricerca formativa`,
              ],
            },
            {
              name: `Partecipazione`,
              items: [
                `Incontro dipartimentale: 17 maggio 2023`,
                `Incontro regionale: agosto 2023`,
              ],
            },
            {
              name: `Progetto presentato`,
              items: [
                `"Sviluppo di un sistema di aggancio di sfere antincendio tramite un veicolo aereo senza pilota"`,
              ],
            },
          ],
        },
        {
          id: `arena`,
          period: `Competizione di robotica`,
          title: `ARENA UTP`,
          intro: `Ho partecipato a due categorie della competizione interna di robotica`,
          modalTitle: `ARENA UTP — Competizione di Robotica`,
          detail: `Competizione interna di robotica della Universidad Tecnológica de Pereira.`,
          images: [E, w],
          alt: `Robot radiocomandati in gara nel ring di sumo`,
          modules: [
            {
              name: `Sumo RC`,
              items: [
                `Robot radiocomandati competono nel classico ring di sumo: l'obiettivo è spingere l'avversario fuori dall'area`,
              ],
            },
            {
              name: `Soccer RC`,
              items: [
                `Robot radiocomandati competono in appassionanti partite di calcio, dimostrando precisione e strategia`,
              ],
            },
            {
              name: `Partecipazione`,
              items: [
                `Ho gareggiato in entrambe le categorie, acquisendo esperienza nella progettazione, programmazione e controllo di sistemi robotici`,
              ],
            },
          ],
        },
      ],
      studiesTitle: `Formazione Accademica`,
      studies: [
        {
          year: `2026`,
          title: `Ingegneria Meccatronica`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `teal`,
        },
        {
          year: `2026`,
          title: `Tecnologa in Meccatronica`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `mid`,
        },
        {
          year: `2023`,
          title: `Tecnica in Meccatronica`,
          place: `Universidad Tecnológica de Pereira`,
          accent: `mid`,
        },
        {
          year: `2020`,
          title: `Tecnologa in Progettazione e Integrazione di Automazione Meccatronica`,
          place: `SENA`,
          accent: `mid`,
        },
      ],
      certificatesTitle: `Certificazioni e Riconoscimenti`,
      certificates: [
        {
          name: `Intelligenza artificiale per le decisioni di vendita`,
          issuer: `UTP · Workshop`,
          year: `2026`,
          dot: `teal`,
          file: te,
        },
        {
          name: `Relatrice — Vacanze di Scienza e Tecnologia`,
          issuer: `UTP · CIDT`,
          year: `2026`,
          dot: `bright`,
          file: ne,
        },
        {
          name: `Relatrice — XIII Incontro Regionale RREDSI`,
          issuer: `RREDSI · Tuluá`,
          year: `2026`,
          dot: `teal`,
          file: k,
        },
        {
          name: `Prototipazione Elettronica (20 ore)`,
          issuer: `UTP · Scienze di Base`,
          year: `2025`,
          dot: `bright`,
          file: O,
        },
        {
          name: `Relatrice — Robotica nelle scuole rurali di Risaralda`,
          issuer: `UTP · Extension`,
          year: `2024`,
          dot: `teal`,
          file: re,
        },
        {
          name: `Relatrice — Competizione di Aeronautica UTP 2024-2`,
          issuer: `UTP · Extension`,
          year: `2024`,
          dot: `bright`,
          file: D,
        },
        {
          name: `Relatrice — Sistema di sgancio palle antincendio con UAV`,
          issuer: `RREDSI · Cali`,
          year: `2023`,
          dot: `teal`,
          file: ie,
        },
      ],
      certificateViewLabel: `Vedi certificato`,
      footerTagline: `Portfolio Accademico © 2026`,
      footerLinks: [
        { href: `#bio`, label: `Profilo` },
        { href: `#experiencia`, label: `Esperienza` },
        { href: `#certificados`, label: `Certificati` },
      ],
    },
  },
  j = n();
function oe({ images: e, alt: t, prevLabel: n, nextLabel: r }) {
  let [i, a] = (0, d.useState)(0),
    o = e.length,
    s = (e) => a((t) => (t + e + o) % o);
  return (0, j.jsxs)(`div`, {
    className: `group/carousel relative aspect-video w-full overflow-hidden bg-muted`,
    children: [
      e.map((e, n) =>
        (0, j.jsx)(
          `img`,
          {
            src: e,
            alt: t,
            loading: `lazy`,
            width: 1024,
            height: 768,
            className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${n === i ? `opacity-100` : `opacity-0`}`,
          },
          e + n,
        ),
      ),
      o > 1 &&
        (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(`button`, {
              type: `button`,
              "aria-label": n,
              onClick: () => s(-1),
              className: `absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ocean-deep shadow-sm transition hover:bg-white`,
              children: (0, j.jsx)(m, { className: `size-4` }),
            }),
            (0, j.jsx)(`button`, {
              type: `button`,
              "aria-label": r,
              onClick: () => s(1),
              className: `absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ocean-deep shadow-sm transition hover:bg-white`,
              children: (0, j.jsx)(h, { className: `size-4` }),
            }),
            (0, j.jsx)(`div`, {
              className: `absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5`,
              children: e.map((e, t) =>
                (0, j.jsx)(
                  `button`,
                  {
                    type: `button`,
                    "aria-label": `${t + 1}/${o}`,
                    onClick: () => a(t),
                    className: `size-1.5 rounded-full transition ${t === i ? `bg-white` : `bg-white/50`}`,
                  },
                  `dot` + e + t,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
var se = Object.defineProperty,
  M = (e, t) => se(e, `name`, { value: t, configurable: !0 }),
  N = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  );
function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return M(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  }, `handleEvent`);
}
M(P, `composeEventHandlers`);
function ce(e) {
  if (!N) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
M(ce, `getOwnerWindow`);
function le(e) {
  if (!N) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
M(le, `getOwnerDocument`);
function F(e, t = !1) {
  let { activeElement: n } = le(e);
  if (!n?.nodeName) return null;
  if (ue(n) && n.contentDocument) return F(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = le(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
M(F, `getActiveElement`);
function ue(e) {
  return e.tagName === `IFRAME`;
}
M(ue, `isFrame`);
var de = Object.defineProperty,
  fe = (e, t) => de(e, `name`, { value: t, configurable: !0 });
function pe(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
fe(pe, `setRef`);
function me(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = pe(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : pe(e[t], null);
        }
      };
  };
}
fe(me, `composeRefs`);
function he(...e) {
  return d.useCallback(me(...e), e);
}
fe(he, `useComposedRefs`);
var ge = Object.defineProperty,
  I = (e, t) => ge(e, `name`, { value: t, configurable: !0 });
function _e(e, t) {
  let n = d.createContext(t);
  n.displayName = e + `Context`;
  let r = I((e) => {
    let { children: t, ...r } = e,
      i = d.useMemo(() => r, Object.values(r));
    return (0, j.jsx)(n.Provider, { value: i, children: t });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = d.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return (I(i, `useContext`), [r, i]);
}
I(_e, `createContext`);
function ve(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = d.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = I((t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = d.useMemo(() => o, Object.values(o));
      return (0, j.jsx)(s.Provider, { value: c, children: r });
    }, `Provider`);
    o.displayName = t + `Provider`;
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        u = d.useContext(l);
      if (u) return u;
      if (r !== void 0) return r;
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return (I(s, `useContext`), [o, s]);
  }
  I(r, `createContext`);
  let i = I(() => {
    let t = n.map((e) => d.createContext(e));
    return I(function (n) {
      let r = n?.[e] || t;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return ((i.scopeName = e), [r, ye(i, ...t)]);
}
I(ve, `createContextScope`);
function ye(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = I(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return I(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return ((n.scopeName = t.scopeName), n);
}
I(ye, `composeContextScopes`);
var L = globalThis?.document ? d.useLayoutEffect : () => {},
  be = Object.defineProperty,
  xe = (e, t) => be(e, `name`, { value: t, configurable: !0 }),
  Se = d.useId || (() => void 0),
  Ce = 0;
function we(e) {
  let [t, n] = d.useState(Se());
  return (
    L(() => {
      e || n((e) => e ?? String(Ce++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
xe(we, `useId`);
var Te = Object.defineProperty,
  Ee = (e, t) => Te(e, `name`, { value: t, configurable: !0 }),
  De = d.useEffectEvent,
  Oe = d.useInsertionEffect;
function ke(e) {
  if (typeof De == `function`) return De(e);
  let t = d.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof Oe == `function`
      ? Oe(() => {
          t.current = e;
        })
      : L(() => {
          t.current = e;
        }),
    d.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
Ee(ke, `useEffectEvent`);
var Ae = Object.defineProperty,
  je = (e, t) => Ae(e, `name`, { value: t, configurable: !0 }),
  Me = d.useInsertionEffect || L;
function Ne({
  prop: e,
  defaultProp: t,
  onChange: n = je(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = Pe({ defaultProp: t, onChange: n }),
    s = e !== void 0;
  return [
    s ? e : i,
    d.useCallback(
      (t) => {
        if (s) {
          let n = Fe(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
je(Ne, `useControllableState`);
function Pe({ defaultProp: e, onChange: t }) {
  let [n, r] = d.useState(e),
    i = d.useRef(n),
    a = d.useRef(t);
  return (
    Me(() => {
      a.current = t;
    }, [t]),
    d.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
je(Pe, `useUncontrolledState`);
function Fe(e) {
  return typeof e == `function`;
}
je(Fe, `isFunction`);
var Ie = Symbol(`RADIX:SYNC_STATE`);
function Le(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: s } = t,
    c = i !== void 0,
    l = ke(o),
    u = [{ ...n, state: a }];
  r && u.push(r);
  let [f, p] = d.useReducer(
      (t, n) => {
        if (n.type === Ie) return { ...t, state: n.state };
        let r = e(t, n);
        return (c && !Object.is(r.state, t.state) && l(r.state), r);
      },
      ...u,
    ),
    m = f.state,
    h = d.useRef(m);
  d.useEffect(() => {
    h.current !== m && ((h.current = m), c || l(m));
  }, [m, h, c]);
  let g = d.useMemo(() => (i === void 0 ? f : { ...f, state: i }), [f, i]);
  return (
    d.useEffect(() => {
      c && !Object.is(i, f.state) && p({ type: Ie, state: i });
    }, [i, f.state, c]),
    [g, p]
  );
}
je(Le, `useControllableStateReducer`);
var Re = e(r(), 1),
  ze = Object.defineProperty,
  R = (e, t) => ze(e, `name`, { value: t, configurable: !0 });
function Be(e) {
  let t = d.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (Je(r) && typeof Qe == `function` && (r = Qe(r._payload)),
      d.Children.forEach(r, (e) => {
        if (Ke(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (Je(n) && typeof Qe == `function` && (n = Qe(n._payload)),
            (a = Ue(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = d.cloneElement(a, void 0, s))
        : !o && d.Children.count(r) === 1 && d.isValidElement(r) && (a = r));
    let c = a ? Ge(a) : void 0,
      l = he(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? Ze(e) : Xe(e));
      return r;
    }
    let u = We(i, a.props ?? {});
    return (a.type !== d.Fragment && (u.ref = n ? l : c), d.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
R(Be, `createSlot`);
var Ve = Symbol.for(`radix.slottable`);
function He(e) {
  let t = R(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Ve), t);
}
R(He, `createSlottable`);
var Ue = R((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return d.isValidElement(t)
      ? d.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return d.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function We(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
R(We, `mergeProps`);
function Ge(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
R(Ge, `getElementRef`);
function Ke(e) {
  return (
    d.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === Ve
  );
}
R(Ke, `isSlottable`);
var qe = Symbol.for(`react.lazy`);
function Je(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === qe &&
    `_payload` in e &&
    Ye(e._payload)
  );
}
R(Je, `isLazyComponent`);
function Ye(e) {
  return typeof e == `object` && !!e && `then` in e;
}
R(Ye, `isPromiseLike`);
var Xe = R(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  Ze = R(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  Qe = d.use,
  $e = Object.defineProperty,
  et = (e, t) => $e(e, `name`, { value: t, configurable: !0 }),
  z = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = Be(`Primitive.${t}`),
      r = d.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, j.jsx)(o, { ...a, ref: r })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function tt(e, t) {
  e && Re.flushSync(() => e.dispatchEvent(t));
}
et(tt, `dispatchDiscreteCustomEvent`);
var nt = Object.defineProperty,
  rt = (e, t) => nt(e, `name`, { value: t, configurable: !0 });
function it(e) {
  let t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
rt(it, `useCallbackRef`);
var at = Object.defineProperty,
  B = (e, t) => at(e, `name`, { value: t, configurable: !0 }),
  ot = `dismissableLayer.update`,
  st = `dismissableLayer.pointerDownOutside`,
  ct = `dismissableLayer.focusOutside`,
  lt,
  ut = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  dt = d.forwardRef(
    B(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          onFocusOutside: o,
          onInteractOutside: s,
          onDismiss: c,
          ...l
        } = e,
        u = d.useContext(ut),
        [f, p] = d.useState(null),
        m = f?.ownerDocument ?? globalThis?.document,
        [, h] = d.useState({}),
        g = he(t, p),
        _ = Array.from(u.layers),
        [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        y = v ? _.indexOf(v) : -1,
        b = f ? _.indexOf(f) : -1,
        x = u.layersWithOutsidePointerEventsDisabled.size > 0,
        S = b >= y,
        C = d.useRef(!1),
        w = mt(
          (e) => {
            (a?.(e), s?.(e), e.defaultPrevented || c?.());
          },
          {
            ownerDocument: m,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: C,
            dismissableSurfaces: u.dismissableSurfaces,
            shouldHandlePointerDownOutside: d.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...u.branches].some((t) => t.contains(e));
                return S && !t;
              },
              [u.branches, S],
            ),
          },
        ),
        T = ht((e) => {
          if (r && C.current) return;
          let t = e.target;
          [...u.branches].some((e) => e.contains(t)) ||
            (o?.(e), s?.(e), e.defaultPrevented || c?.());
        }, m),
        ee = f ? b === _.length - 1 : !1,
        E = it((e) => {
          e.key === `Escape` &&
            (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
        });
      return (
        d.useEffect(() => {
          if (ee)
            return (
              m.addEventListener(`keydown`, E, { capture: !0 }),
              () => m.removeEventListener(`keydown`, E, { capture: !0 })
            );
        }, [m, ee, E]),
        d.useEffect(() => {
          if (f)
            return (
              n &&
                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((lt = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = `none`)),
                u.layersWithOutsidePointerEventsDisabled.add(f)),
              u.layers.add(f),
              gt(),
              () => {
                n &&
                  (u.layersWithOutsidePointerEventsDisabled.delete(f),
                  u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (m.body.style.pointerEvents = lt));
              }
            );
        }, [f, m, n, u]),
        d.useEffect(
          () => () => {
            f &&
              (u.layers.delete(f),
              u.layersWithOutsidePointerEventsDisabled.delete(f),
              gt());
          },
          [f, u],
        ),
        d.useEffect(() => {
          let e = B(() => h({}), `handleUpdate`);
          return (
            document.addEventListener(ot, e),
            () => document.removeEventListener(ot, e)
          );
        }, []),
        (0, j.jsx)(z.div, {
          ...l,
          ref: g,
          style: {
            pointerEvents: x ? (S ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: P(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: P(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: P(
            e.onPointerDownCapture,
            w.onPointerDownCapture,
          ),
        })
      );
    }, `DismissableLayer`),
  );
function ft() {
  let e = d.useContext(ut),
    [t, n] = d.useState(null);
  return (
    d.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
B(ft, `useDismissableLayerSurface`);
var pt = B(() => !0, `IS_TRUE`);
function mt(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = pt,
    } = t,
    s = it(e),
    c = d.useRef(!1),
    l = d.useRef(!1),
    u = d.useRef(new Map()),
    f = d.useRef(() => {});
  return (
    d.useEffect(() => {
      function e() {
        ((l.current = !1), (i.current = !1), u.current.clear());
      }
      B(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(u.current.values()).some(Boolean);
      }
      B(t, `isOutsideInteractionIntercepted`);
      function d(e) {
        if (!l.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          u.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && f.current();
            }, 0));
      }
      B(d, `handleInteractionCapture`);
      function p(e) {
        l.current && u.current.set(e.type, !1);
      }
      B(p, `handleInteractionBubble`);
      let m = B((a) => {
          if (a.target && !c.current) {
            let d = function () {
              n.removeEventListener(`click`, f.current);
              let r = t();
              (e(), r || _t(st, s, p, { discrete: !0 }));
            };
            if (
              (B(d, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              (n.removeEventListener(`click`, f.current),
                e(),
                (c.current = !1));
              return;
            }
            let p = { originalEvent: a };
            ((l.current = !0),
              (i.current = r && a.button === 0),
              u.current.clear(),
              !r || a.button !== 0
                ? d()
                : (n.removeEventListener(`click`, f.current),
                  (f.current = d),
                  n.addEventListener(`click`, f.current, { once: !0 })));
          } else (n.removeEventListener(`click`, f.current), e());
          c.current = !1;
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) (n.addEventListener(e, d, !0), n.addEventListener(e, p));
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        (window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, f.current));
        for (let e of h)
          (n.removeEventListener(e, d, !0), n.removeEventListener(e, p));
      };
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: B(() => (c.current = !0), `onPointerDownCapture`) }
  );
}
B(mt, `usePointerDownOutside`);
function ht(e, t = globalThis?.document) {
  let n = it(e),
    r = d.useRef(!1);
  return (
    d.useEffect(() => {
      let e = B((e) => {
        e.target &&
          !r.current &&
          _t(ct, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: B(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: B(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
B(ht, `useFocusOutside`);
function gt() {
  let e = new CustomEvent(ot);
  document.dispatchEvent(e);
}
B(gt, `dispatchUpdate`);
function _t(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? tt(i, a) : i.dispatchEvent(a));
}
B(_t, `handleAndDispatchCustomEvent`);
var vt = Object.defineProperty,
  V = (e, t) => vt(e, `name`, { value: t, configurable: !0 }),
  yt = `focusScope.autoFocusOnMount`,
  bt = `focusScope.autoFocusOnUnmount`,
  xt = { bubbles: !1, cancelable: !0 },
  St = d.forwardRef(
    V(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          ...o
        } = e,
        [s, c] = d.useState(null),
        l = it(i),
        u = it(a),
        f = d.useRef(null),
        p = he(t, c),
        m = d.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (d.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (m.paused || !s) return;
              let t = e.target;
              s.contains(t) ? (f.current = t) : H(f.current, { select: !0 });
            },
            t = function (e) {
              if (m.paused || !s) return;
              let t = e.relatedTarget;
              t !== null && (s.contains(t) || H(f.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && H(s);
            };
          (V(e, `handleFocusIn`),
            V(t, `handleFocusOut`),
            V(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t));
          let r = new MutationObserver(n);
          return (
            s && r.observe(s, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect());
            }
          );
        }
      }, [r, s, m.paused]),
        d.useEffect(() => {
          if (s) {
            kt.add(m);
            let e = document.activeElement;
            if (!s.contains(e)) {
              let t = new CustomEvent(yt, xt);
              (s.addEventListener(yt, l),
                s.dispatchEvent(t),
                t.defaultPrevented ||
                  (Ct(Mt(Tt(s)), { select: !0 }),
                  document.activeElement === e && H(s)));
            }
            return () => {
              (s.removeEventListener(yt, l),
                setTimeout(() => {
                  let t = new CustomEvent(bt, xt);
                  (s.addEventListener(bt, u),
                    s.dispatchEvent(t),
                    t.defaultPrevented || H(e ?? document.body, { select: !0 }),
                    s.removeEventListener(bt, u),
                    kt.remove(m));
                }, 0));
            };
          }
        }, [s, l, u, m]));
      let h = d.useCallback(
        (e) => {
          if ((!n && !r) || m.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement;
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = wt(t);
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && H(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && H(a, { select: !0 }))
              : i === t && e.preventDefault();
          }
        },
        [n, r, m.paused],
      );
      return (0, j.jsx)(z.div, { tabIndex: -1, ...o, ref: p, onKeyDown: h });
    }, `FocusScope`),
  );
function Ct(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((H(r, { select: t }), document.activeElement !== n)) return;
}
V(Ct, `focusFirst`);
function wt(e) {
  let t = Tt(e);
  return [Et(t, e), Et(t.reverse(), e)];
}
V(wt, `getTabbableEdges`);
function Tt(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: V((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
V(Tt, `getTabbableCandidates`);
function Et(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Dt(r, { upTo: t }))
    )
      return r;
}
V(Et, `findVisible`);
function Dt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
V(Dt, `isHidden`);
function Ot(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
V(Ot, `isSelectableInput`);
function H(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Ot(e) && t && e.select());
  }
}
V(H, `focus`);
var kt = At();
function At() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = jt(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = jt(e, t)), e[0]?.resume());
    },
  };
}
V(At, `createFocusScopesStack`);
function jt(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
V(jt, `arrayRemove`);
function Mt(e) {
  return e.filter((e) => e.tagName !== `A`);
}
V(Mt, `removeLinks`);
var Nt = Object.defineProperty,
  Pt = d.forwardRef(
    ((e, t) => Nt(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = d.useState(!1);
      L(() => a(!0), []);
      let o = n || (i && globalThis?.document?.body);
      return o ? Re.createPortal((0, j.jsx)(z.div, { ...r, ref: t }), o) : null;
    }, `Portal`),
  ),
  Ft = Object.defineProperty,
  U = (e, t) => Ft(e, `name`, { value: t, configurable: !0 });
function It(e, t) {
  return d.useReducer((e, n) => t[e][n] ?? e, e);
}
U(It, `useStateMachine`);
var Lt = U((e) => {
  let { present: t, children: n } = e,
    r = Rt(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : d.Children.only(n),
    a = Bt(r.ref, Ht(i));
  return typeof n == `function` || r.isPresent
    ? d.cloneElement(i, { ref: a })
    : null;
}, `Presence`);
function Rt(e) {
  let [t, n] = d.useState(),
    r = d.useRef(null),
    i = d.useRef(e),
    a = d.useRef(`none`),
    o = d.useRef(void 0),
    [s, c] = It(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    d.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? Vt(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [s]),
    L(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = Vt(t);
        (e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, c]),
    L(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = U((a) => {
            let o = Vt(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          }, `handleAnimationEnd`),
          s = U((e) => {
            e.target === t && (a.current = Vt(r.current));
          }, `handleAnimationStart`);
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      }
      c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: d.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          ((r.current = t), (o.current = Vt(t)));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
U(Rt, `usePresence`);
function zt(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
U(zt, `setRef`);
function Bt(...e) {
  let t = d.useRef(e);
  return (
    (t.current = e),
    d.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = zt(t, e);
          return (!r && typeof n == `function` && (r = !0), n);
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : zt(n[e], null);
          }
        };
    }, [])
  );
}
U(Bt, `useStableComposedRefs`);
function Vt(e) {
  return e?.animationName || `none`;
}
U(Vt, `getAnimationName`);
function Ht(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
U(Ht, `getElementRef`);
var Ut = Object.defineProperty,
  Wt = (e, t) => Ut(e, `name`, { value: t, configurable: !0 }),
  Gt = 0,
  Kt = null;
function qt(e) {
  return (Jt(), e.children);
}
Wt(qt, `FocusGuards`);
function Jt() {
  d.useEffect(() => {
    Kt ||= { start: Yt(), end: Yt() };
    let { start: e, end: t } = Kt;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      Gt++,
      () => {
        (Gt === 1 && (Kt?.start.remove(), Kt?.end.remove(), (Kt = null)),
          (Gt = Math.max(0, Gt - 1)));
      }
    );
  }, []);
}
Wt(Jt, `useFocusGuards`);
function Yt() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
Wt(Yt, `createFocusGuard`);
var W = function () {
  return (
    (W =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    W.apply(this, arguments)
  );
};
function Xt(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Zt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Qt = `right-scroll-bar-position`,
  $t = `width-before-scroll-bar`,
  en = `with-scroll-bars-hidden`,
  tn = `--removed-body-scroll-bar-size`;
function nn(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function rn(e, t) {
  var n = (0, d.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var an = typeof window < `u` ? d.useLayoutEffect : d.useEffect,
  on = new WeakMap();
function sn(e, t) {
  var n = rn(t || null, function (t) {
    return e.forEach(function (e) {
      return nn(e, t);
    });
  });
  return (
    an(
      function () {
        var t = on.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || nn(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || nn(e, a);
            }));
        }
        on.set(n, e);
      },
      [e],
    ),
    n
  );
}
function cn(e) {
  return e;
}
function ln(e, t) {
  t === void 0 && (t = cn);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function un(e) {
  e === void 0 && (e = {});
  var t = ln(null);
  return ((t.options = W({ async: !0, ssr: !1 }, e)), t);
}
var dn = function (e) {
  var t = e.sideCar,
    n = Xt(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return d.createElement(r, W({}, n));
};
dn.isSideCarExport = !0;
function fn(e, t) {
  return (e.useMedium(t), dn);
}
var pn = un(),
  mn = function () {},
  hn = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: mn,
        onWheelCapture: mn,
        onTouchMoveCapture: mn,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      f = e.shards,
      p = e.sideCar,
      m = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      v = e.as,
      y = v === void 0 ? `div` : v,
      b = e.gapMode,
      x = Xt(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      S = p,
      C = sn([n, t]),
      w = W(W({}, x), i);
    return d.createElement(
      d.Fragment,
      null,
      u &&
        d.createElement(S, {
          sideCar: pn,
          removeScrollBar: l,
          shards: f,
          noRelative: m,
          noIsolation: h,
          inert: g,
          setCallbacks: a,
          allowPinchZoom: !!_,
          lockRef: n,
          gapMode: b,
        }),
      o
        ? d.cloneElement(d.Children.only(s), W(W({}, w), { ref: C }))
        : d.createElement(y, W({}, w, { className: c, ref: C }), s),
    );
  });
((hn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (hn.classNames = { fullWidth: $t, zeroRight: Qt }));
var gn = function () {
  if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
};
function _n() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = gn();
  return (t && e.setAttribute(`nonce`, t), e);
}
function vn(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function yn(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var bn = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = _n()) && (vn(t, n), yn(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  xn = function () {
    var e = bn();
    return function (t, n) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Sn = function () {
    var e = xn();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  Cn = { left: 0, top: 0, right: 0, gap: 0 },
  wn = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  Tn = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [wn(n), wn(r), wn(i)];
  },
  En = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Cn;
    var t = Tn(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Dn = Sn(),
  On = `data-scroll-locked`,
  kn = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${en} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${On}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${Qt} {
    right: ${s}px ${r};
  }
  
  .${$t} {
    margin-right: ${s}px ${r};
  }
  
  .${Qt} .${Qt} {
    right: 0 ${r};
  }
  
  .${$t} .${$t} {
    margin-right: 0 ${r};
  }
  
  body[${On}] {
    ${tn}: ${s}px;
  }
`
    );
  },
  An = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  jn = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(On, (An() + 1).toString()),
        function () {
          var e = An() - 1;
          e <= 0
            ? document.body.removeAttribute(On)
            : document.body.setAttribute(On, e.toString());
        }
      );
    }, []);
  },
  Mn = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    jn();
    var a = d.useMemo(
      function () {
        return En(i);
      },
      [i],
    );
    return d.createElement(Dn, { styles: kn(a, !t, i, n ? `` : `!important`) });
  },
  Nn = !1;
if (typeof window < `u`)
  try {
    var Pn = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Nn = !0), !0);
      },
    });
    (window.addEventListener(`test`, Pn, Pn),
      window.removeEventListener(`test`, Pn, Pn));
  } catch {
    Nn = !1;
  }
var Fn = Nn ? { passive: !1 } : !1,
  In = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Ln = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !In(e) && n[t] === `visible`)
    );
  },
  Rn = function (e) {
    return Ln(e, `overflowY`);
  },
  zn = function (e) {
    return Ln(e, `overflowX`);
  },
  Bn = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        Un(e, r))
      ) {
        var i = Wn(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Vn = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  Hn = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  Un = function (e, t) {
    return e === `v` ? Rn(t) : zn(t);
  },
  Wn = function (e, t) {
    return e === `v` ? Vn(t) : Hn(t);
  },
  Gn = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  Kn = function (e, t, n, r, i) {
    var a = Gn(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = Wn(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && Un(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  qn = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Jn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Yn = function (e) {
    return e && `current` in e ? e.current : e;
  },
  Xn = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Zn = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Qn = 0,
  $n = [];
function er(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    i = d.useState(Qn++)[0],
    a = d.useState(Sn)[0],
    o = d.useRef(e);
  (d.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = Zt([e.lockRef.current], (e.shards || []).map(Yn), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var s = d.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var i = qn(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = Bn(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = Bn(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return Kn(h, t, e, h === `h` ? s : c, !0);
    }, []),
    c = d.useCallback(function (e) {
      var n = e;
      if (!(!$n.length || $n[$n.length - 1] !== a)) {
        var r = `deltaY` in n ? Jn(n) : qn(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              Xn(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var c = (o.current.shards || [])
            .map(Yn)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    l = d.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: tr(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    u = d.useCallback(function (e) {
      ((n.current = qn(e)), (r.current = void 0));
    }, []),
    f = d.useCallback(function (t) {
      l(t.type, Jn(t), t.target, s(t, e.lockRef.current));
    }, []),
    p = d.useCallback(function (t) {
      l(t.type, qn(t), t.target, s(t, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      $n.push(a),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener(`wheel`, c, Fn),
      document.addEventListener(`touchmove`, c, Fn),
      document.addEventListener(`touchstart`, u, Fn),
      function () {
        (($n = $n.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, c, Fn),
          document.removeEventListener(`touchmove`, c, Fn),
          document.removeEventListener(`touchstart`, u, Fn));
      }
    );
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    h ? d.createElement(a, { styles: Zn(i) }) : null,
    m
      ? d.createElement(Mn, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function tr(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var nr = fn(pn, er),
  rr = d.forwardRef(function (e, t) {
    return d.createElement(hn, W({}, e, { ref: t, sideCar: nr }));
  });
rr.classNames = hn.classNames;
var ir = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  ar = new WeakMap(),
  or = new WeakMap(),
  sr = {},
  cr = 0,
  lr = function (e) {
    return e && (e.host || lr(e.parentNode));
  },
  ur = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = lr(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  dr = function (e, t, n, r) {
    var i = ur(t, Array.isArray(e) ? e : [e]);
    sr[n] || (sr[n] = new WeakMap());
    var a = sr[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (ar.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (ar.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && or.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`));
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      cr++,
      function () {
        (o.forEach(function (e) {
          var t = ar.get(e) - 1,
            i = a.get(e) - 1;
          (ar.set(e, t),
            a.set(e, i),
            t || (or.has(e) || e.removeAttribute(r), or.delete(e)),
            i || e.removeAttribute(n));
        }),
          cr--,
          cr ||
            ((ar = new WeakMap()),
            (ar = new WeakMap()),
            (or = new WeakMap()),
            (sr = {})));
      }
    );
  },
  fr = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || ir(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        dr(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  pr = Object.defineProperty,
  G = (e, t) => pr(e, `name`, { value: t, configurable: !0 }),
  mr = `Dialog`,
  [hr, gr] = ve(mr),
  [_r, K] = hr(mr),
  vr = G((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = d.useRef(null),
      c = d.useRef(null),
      [l, u] = Ne({ prop: r, defaultProp: i ?? !1, onChange: a, caller: mr }),
      [f, p] = d.useState(0),
      [m, h] = d.useState(0);
    return (0, j.jsx)(_r, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: we(),
      titleId: we(),
      descriptionId: we(),
      titlePresent: f > 0,
      descriptionPresent: m > 0,
      setTitleCount: p,
      setDescriptionCount: h,
      open: l,
      onOpenChange: u,
      onOpenToggle: d.useCallback(() => u((e) => !e), [u]),
      modal: o,
      children: n,
    });
  }, `Dialog`),
  yr = `DialogTrigger`,
  br = d.forwardRef(
    G(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = K(yr, n),
        a = he(t, i.triggerRef);
      return (0, j.jsx)(z.button, {
        type: `button`,
        "aria-haspopup": `dialog`,
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": Br(i.open),
        ...r,
        ref: a,
        onClick: P(e.onClick, i.onOpenToggle),
      });
    }, `DialogTrigger`),
  ),
  xr = `DialogPortal`,
  [Sr, Cr] = hr(xr, { forceMount: void 0 }),
  wr = G((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = K(xr, t);
    return (0, j.jsx)(Sr, {
      scope: t,
      forceMount: n,
      children: d.Children.map(r, (e) =>
        (0, j.jsx)(Lt, {
          present: n || a.open,
          children: (0, j.jsx)(Pt, { asChild: !0, container: i, children: e }),
        }),
      ),
    });
  }, `DialogPortal`),
  Tr = `DialogOverlay`,
  Er = d.forwardRef(
    G(function (e, t) {
      let n = Cr(Tr, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = K(Tr, e.__scopeDialog);
      return a.modal
        ? (0, j.jsx)(Lt, {
            present: r || a.open,
            children: (0, j.jsx)(Or, { ...i, ref: t }),
          })
        : null;
    }, `DialogOverlay`),
  ),
  Dr = Be(`DialogOverlay.RemoveScroll`),
  Or = d.forwardRef(
    G(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = K(Tr, n),
        a = he(t, ft());
      return (0, j.jsx)(rr, {
        as: Dr,
        allowPinchZoom: !0,
        shards: [i.contentRef],
        children: (0, j.jsx)(z.div, {
          "data-state": Br(i.open),
          ...r,
          ref: a,
          style: { pointerEvents: `auto`, ...r.style },
        }),
      });
    }, `DialogOverlayImpl`),
  ),
  kr = `DialogContent`,
  Ar = d.forwardRef(
    G(function (e, t) {
      let n = Cr(kr, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = K(kr, e.__scopeDialog);
      return (0, j.jsx)(Lt, {
        present: r || a.open,
        children: a.modal
          ? (0, j.jsx)(jr, { ...i, ref: t })
          : (0, j.jsx)(Mr, { ...i, ref: t }),
      });
    }, `DialogContent`),
  ),
  jr = d.forwardRef(
    G(function (e, t) {
      let n = K(kr, e.__scopeDialog),
        r = d.useRef(null),
        i = he(t, n.contentRef, r);
      return (
        d.useEffect(() => {
          let e = r.current;
          if (e) return fr(e);
        }, []),
        (0, j.jsx)(Nr, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: P(e.onCloseAutoFocus, (e) => {
            (e.preventDefault(), n.triggerRef.current?.focus());
          }),
          onPointerDownOutside: P(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault();
          }),
          onFocusOutside: P(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }, `DialogContentModal`),
  ),
  Mr = d.forwardRef(
    G(function (e, t) {
      let n = K(kr, e.__scopeDialog),
        r = d.useRef(!1),
        i = d.useRef(!1);
      return (0, j.jsx)(Nr, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          (e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1));
        },
        onInteractOutside: (t) => {
          (e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0)));
          let a = t.target;
          (n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault());
        },
      });
    }, `DialogContentNonModal`),
  ),
  Nr = d.forwardRef(
    G(function (e, t) {
      let {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          ...o
        } = e,
        s = K(kr, n);
      return (
        Jt(),
        (0, j.jsx)(j.Fragment, {
          children: (0, j.jsx)(St, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, j.jsx)(dt, {
              role: `dialog`,
              id: s.contentId,
              "aria-describedby": s.descriptionPresent
                ? s.descriptionId
                : void 0,
              "aria-labelledby": s.titlePresent ? s.titleId : void 0,
              "data-state": Br(s.open),
              ...o,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
        })
      );
    }, `DialogContentImpl`),
  ),
  Pr = `DialogTitle`,
  Fr = d.forwardRef(
    G(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = K(Pr, n),
        { setTitleCount: a } = i;
      return (
        L(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, j.jsx)(z.h2, { id: i.titleId, ...r, ref: t })
      );
    }, `DialogTitle`),
  ),
  Ir = `DialogDescription`,
  Lr = d.forwardRef(
    G(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = K(Ir, n),
        { setDescriptionCount: a } = i;
      return (
        L(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, j.jsx)(z.p, { id: i.descriptionId, ...r, ref: t })
      );
    }, `DialogDescription`),
  ),
  Rr = `DialogClose`,
  zr = d.forwardRef(
    G(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = K(Rr, n);
      return (0, j.jsx)(z.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: P(e.onClick, () => i.onOpenChange(!1)),
      });
    }, `DialogClose`),
  );
function Br(e) {
  return e ? `open` : `closed`;
}
G(Br, `getState`);
function Vr(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Vr(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function Hr() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Vr(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Ur = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Wr = (e, t) => ({ classGroupId: e, validator: t }),
  Gr = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Kr = `-`,
  qr = [],
  Jr = `arbitrary..`,
  Yr = (e) => {
    let t = Qr(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Zr(e);
        let n = e.split(Kr);
        return Xr(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Ur(i, t) : t) : i || qr;
        }
        return n[e] || qr;
      },
    };
  },
  Xr = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Xr(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Kr) : e.slice(t).join(Kr),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Zr = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Jr + r : void 0;
        })(),
  Qr = (e) => {
    let { theme: t, classGroups: n } = e;
    return $r(n, t);
  },
  $r = (e, t) => {
    let n = Gr();
    for (let r in e) {
      let i = e[r];
      ei(i, n, r, t);
    }
    return n;
  },
  ei = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      ti(i, t, n, r);
    }
  },
  ti = (e, t, n, r) => {
    if (typeof e == `string`) {
      ni(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      ri(e, t, n, r);
      return;
    }
    ii(e, t, n, r);
  },
  ni = (e, t, n) => {
    let r = e === `` ? t : ai(t, e);
    r.classGroupId = n;
  },
  ri = (e, t, n, r) => {
    if (oi(e)) {
      ei(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Wr(n, e)));
  },
  ii = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      ei(o, ai(t, a), n, r);
    }
  },
  ai = (e, t) => {
    let n = e,
      r = t.split(Kr),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Gr()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  oi = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  si = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  ci = `!`,
  li = `:`,
  ui = [],
  di = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  fi = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === li) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(ci)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(ci) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return di(t, l, c, u);
      };
    if (t) {
      let e = t + li,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : di(ui, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  pi = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  mi = (e) => ({
    cache: si(e.cacheSize),
    parseClassName: fi(e),
    sortModifiers: pi(e),
    postfixLookupClassGroupIds: hi(e),
    ...Yr(e),
  }),
  hi = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  gi = /\s+/,
  _i = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(gi),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + ci : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  vi = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = yi(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  yi = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = yi(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  bi = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = mi(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = _i(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(vi(...e)));
  },
  xi = [],
  q = (e) => {
    let t = (t) => t[e] || xi;
    return ((t.isThemeGetter = !0), t);
  },
  Si = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ci = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  wi = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Ti = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ei =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Di = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Oi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ki =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  J = (e) => wi.test(e),
  Y = (e) => !!e && !Number.isNaN(Number(e)),
  X = (e) => !!e && Number.isInteger(Number(e)),
  Ai = (e) => e.endsWith(`%`) && Y(e.slice(0, -1)),
  Z = (e) => Ti.test(e),
  ji = () => !0,
  Mi = (e) => Ei.test(e) && !Di.test(e),
  Ni = () => !1,
  Pi = (e) => Oi.test(e),
  Fi = (e) => ki.test(e),
  Ii = (e) => !Q(e) && !$(e),
  Li = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Ri = (e) => $i(e, ra, Ni),
  Q = (e) => Si.test(e),
  zi = (e) => $i(e, ia, Mi),
  Bi = (e) => $i(e, aa, Y),
  Vi = (e) => $i(e, sa, ji),
  Hi = (e) => $i(e, oa, Ni),
  Ui = (e) => $i(e, ta, Ni),
  Wi = (e) => $i(e, na, Fi),
  Gi = (e) => $i(e, ca, Pi),
  $ = (e) => Ci.test(e),
  Ki = (e) => ea(e, ia),
  qi = (e) => ea(e, oa),
  Ji = (e) => ea(e, ta),
  Yi = (e) => ea(e, ra),
  Xi = (e) => ea(e, na),
  Zi = (e) => ea(e, ca, !0),
  Qi = (e) => ea(e, sa, !0),
  $i = (e, t, n) => {
    let r = Si.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  ea = (e, t, n = !1) => {
    let r = Ci.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  ta = (e) => e === `position` || e === `percentage`,
  na = (e) => e === `image` || e === `url`,
  ra = (e) => e === `length` || e === `size` || e === `bg-size`,
  ia = (e) => e === `length`,
  aa = (e) => e === `number`,
  oa = (e) => e === `family-name`,
  sa = (e) => e === `number` || e === `weight`,
  ca = (e) => e === `shadow`,
  la = bi(() => {
    let e = q(`color`),
      t = q(`font`),
      n = q(`text`),
      r = q(`font-weight`),
      i = q(`tracking`),
      a = q(`leading`),
      o = q(`breakpoint`),
      s = q(`container`),
      c = q(`spacing`),
      l = q(`radius`),
      u = q(`shadow`),
      d = q(`inset-shadow`),
      f = q(`text-shadow`),
      p = q(`drop-shadow`),
      m = q(`blur`),
      h = q(`perspective`),
      g = q(`aspect`),
      _ = q(`ease`),
      v = q(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), $, Q],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [$, Q, c],
      T = () => [J, `full`, `auto`, ...w()],
      ee = () => [X, `none`, `subgrid`, $, Q],
      E = () => [`auto`, { span: [`full`, X, $, Q] }, X, $, Q],
      te = () => [X, `auto`, $, Q],
      ne = () => [`auto`, `min`, `max`, `fr`, $, Q],
      re = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      D = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      O = () => [`auto`, ...w()],
      k = () => [
        J,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ie = () => [
        J,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ae = () => [
        J,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      A = () => [e, $, Q],
      j = () => [...b(), Ji, Ui, { position: [$, Q] }],
      oe = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      se = () => [`auto`, `cover`, `contain`, Yi, Ri, { size: [$, Q] }],
      M = () => [Ai, Ki, zi],
      N = () => [``, `none`, `full`, l, $, Q],
      P = () => [``, Y, Ki, zi],
      ce = () => [`solid`, `dashed`, `dotted`, `double`],
      le = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      F = () => [Y, Ai, Ji, Ui],
      ue = () => [``, `none`, m, $, Q],
      de = () => [`none`, Y, $, Q],
      fe = () => [`none`, Y, $, Q],
      pe = () => [Y, $, Q],
      me = () => [J, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Z],
        breakpoint: [Z],
        color: [ji],
        container: [Z],
        "drop-shadow": [Z],
        ease: [`in`, `out`, `in-out`],
        font: [Ii],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Z],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [Z],
        shadow: [Z],
        spacing: [`px`, Y],
        text: [Z],
        "text-shadow": [Z],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, J, Q, $, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }],
        "container-named": [Li],
        columns: [{ columns: [Y, Q, $, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [X, `auto`, $, Q] }],
        basis: [{ basis: [J, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [Y, J, `auto`, `initial`, `none`, Q] }],
        grow: [{ grow: [``, Y, $, Q] }],
        shrink: [{ shrink: [``, Y, $, Q] }],
        order: [{ order: [X, `first`, `last`, `none`, $, Q] }],
        "grid-cols": [{ "grid-cols": ee() }],
        "col-start-end": [{ col: E() }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": ee() }],
        "row-start-end": [{ row: E() }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ne() }],
        "auto-rows": [{ "auto-rows": ne() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...re(), `normal`] }],
        "justify-items": [{ "justify-items": [...D(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...D()] }],
        "align-content": [{ content: [`normal`, ...re()] }],
        "align-items": [{ items: [...D(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...D(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": re() }],
        "place-items": [{ "place-items": [...D(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...D()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mbs: [{ mbs: O() }],
        mbe: [{ mbe: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: k() }],
        "inline-size": [{ inline: [`auto`, ...ie()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ie()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ie()] }],
        "block-size": [{ block: [`auto`, ...ae()] }],
        "min-block-size": [{ "min-block": [`auto`, ...ae()] }],
        "max-block-size": [{ "max-block": [`none`, ...ae()] }],
        w: [{ w: [s, `screen`, ...k()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...k()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...k()] },
        ],
        h: [{ h: [`screen`, `lh`, ...k()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...k()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...k()] }],
        "font-size": [{ text: [`base`, n, Ki, zi] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Qi, Vi] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Ai,
              Q,
            ],
          },
        ],
        "font-family": [{ font: [qi, Hi, t] }],
        "font-features": [{ "font-features": [Q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, $, Q] }],
        "line-clamp": [{ "line-clamp": [Y, `none`, $, Bi] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, $, Q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: A() }],
        "text-color": [{ text: A() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...ce(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [Y, `from-font`, `auto`, $, zi] },
        ],
        "text-decoration-color": [{ decoration: A() }],
        "underline-offset": [{ "underline-offset": [Y, `auto`, $, Q] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "tab-size": [{ tab: [X, $, Q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              $,
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, $, Q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: j() }],
        "bg-repeat": [{ bg: oe() }],
        "bg-size": [{ bg: se() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  X,
                  $,
                  Q,
                ],
                radial: [``, $, Q],
                conic: [X, $, Q],
              },
              Xi,
              Wi,
            ],
          },
        ],
        "bg-color": [{ bg: A() }],
        "gradient-from-pos": [{ from: M() }],
        "gradient-via-pos": [{ via: M() }],
        "gradient-to-pos": [{ to: M() }],
        "gradient-from": [{ from: A() }],
        "gradient-via": [{ via: A() }],
        "gradient-to": [{ to: A() }],
        rounded: [{ rounded: N() }],
        "rounded-s": [{ "rounded-s": N() }],
        "rounded-e": [{ "rounded-e": N() }],
        "rounded-t": [{ "rounded-t": N() }],
        "rounded-r": [{ "rounded-r": N() }],
        "rounded-b": [{ "rounded-b": N() }],
        "rounded-l": [{ "rounded-l": N() }],
        "rounded-ss": [{ "rounded-ss": N() }],
        "rounded-se": [{ "rounded-se": N() }],
        "rounded-ee": [{ "rounded-ee": N() }],
        "rounded-es": [{ "rounded-es": N() }],
        "rounded-tl": [{ "rounded-tl": N() }],
        "rounded-tr": [{ "rounded-tr": N() }],
        "rounded-br": [{ "rounded-br": N() }],
        "rounded-bl": [{ "rounded-bl": N() }],
        "border-w": [{ border: P() }],
        "border-w-x": [{ "border-x": P() }],
        "border-w-y": [{ "border-y": P() }],
        "border-w-s": [{ "border-s": P() }],
        "border-w-e": [{ "border-e": P() }],
        "border-w-bs": [{ "border-bs": P() }],
        "border-w-be": [{ "border-be": P() }],
        "border-w-t": [{ "border-t": P() }],
        "border-w-r": [{ "border-r": P() }],
        "border-w-b": [{ "border-b": P() }],
        "border-w-l": [{ "border-l": P() }],
        "divide-x": [{ "divide-x": P() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": P() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...ce(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...ce(), `hidden`, `none`] }],
        "border-color": [{ border: A() }],
        "border-color-x": [{ "border-x": A() }],
        "border-color-y": [{ "border-y": A() }],
        "border-color-s": [{ "border-s": A() }],
        "border-color-e": [{ "border-e": A() }],
        "border-color-bs": [{ "border-bs": A() }],
        "border-color-be": [{ "border-be": A() }],
        "border-color-t": [{ "border-t": A() }],
        "border-color-r": [{ "border-r": A() }],
        "border-color-b": [{ "border-b": A() }],
        "border-color-l": [{ "border-l": A() }],
        "divide-color": [{ divide: A() }],
        "outline-style": [{ outline: [...ce(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [Y, $, Q] }],
        "outline-w": [{ outline: [``, Y, Ki, zi] }],
        "outline-color": [{ outline: A() }],
        shadow: [{ shadow: [``, `none`, u, Zi, Gi] }],
        "shadow-color": [{ shadow: A() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Zi, Gi] }],
        "inset-shadow-color": [{ "inset-shadow": A() }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: A() }],
        "ring-offset-w": [{ "ring-offset": [Y, zi] }],
        "ring-offset-color": [{ "ring-offset": A() }],
        "inset-ring-w": [{ "inset-ring": P() }],
        "inset-ring-color": [{ "inset-ring": A() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Zi, Gi] }],
        "text-shadow-color": [{ "text-shadow": A() }],
        opacity: [{ opacity: [Y, $, Q] }],
        "mix-blend": [
          { "mix-blend": [...le(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": le() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Y] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": F() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": F() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": A() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": A() }],
        "mask-image-t-from-pos": [{ "mask-t-from": F() }],
        "mask-image-t-to-pos": [{ "mask-t-to": F() }],
        "mask-image-t-from-color": [{ "mask-t-from": A() }],
        "mask-image-t-to-color": [{ "mask-t-to": A() }],
        "mask-image-r-from-pos": [{ "mask-r-from": F() }],
        "mask-image-r-to-pos": [{ "mask-r-to": F() }],
        "mask-image-r-from-color": [{ "mask-r-from": A() }],
        "mask-image-r-to-color": [{ "mask-r-to": A() }],
        "mask-image-b-from-pos": [{ "mask-b-from": F() }],
        "mask-image-b-to-pos": [{ "mask-b-to": F() }],
        "mask-image-b-from-color": [{ "mask-b-from": A() }],
        "mask-image-b-to-color": [{ "mask-b-to": A() }],
        "mask-image-l-from-pos": [{ "mask-l-from": F() }],
        "mask-image-l-to-pos": [{ "mask-l-to": F() }],
        "mask-image-l-from-color": [{ "mask-l-from": A() }],
        "mask-image-l-to-color": [{ "mask-l-to": A() }],
        "mask-image-x-from-pos": [{ "mask-x-from": F() }],
        "mask-image-x-to-pos": [{ "mask-x-to": F() }],
        "mask-image-x-from-color": [{ "mask-x-from": A() }],
        "mask-image-x-to-color": [{ "mask-x-to": A() }],
        "mask-image-y-from-pos": [{ "mask-y-from": F() }],
        "mask-image-y-to-pos": [{ "mask-y-to": F() }],
        "mask-image-y-from-color": [{ "mask-y-from": A() }],
        "mask-image-y-to-color": [{ "mask-y-to": A() }],
        "mask-image-radial": [{ "mask-radial": [$, Q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": F() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": F() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": A() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": A() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [Y] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": F() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": F() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": A() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": A() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: j() }],
        "mask-repeat": [{ mask: oe() }],
        "mask-size": [{ mask: se() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, $, Q] }],
        filter: [{ filter: [``, `none`, $, Q] }],
        blur: [{ blur: ue() }],
        brightness: [{ brightness: [Y, $, Q] }],
        contrast: [{ contrast: [Y, $, Q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Zi, Gi] }],
        "drop-shadow-color": [{ "drop-shadow": A() }],
        grayscale: [{ grayscale: [``, Y, $, Q] }],
        "hue-rotate": [{ "hue-rotate": [Y, $, Q] }],
        invert: [{ invert: [``, Y, $, Q] }],
        saturate: [{ saturate: [Y, $, Q] }],
        sepia: [{ sepia: [``, Y, $, Q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }],
        "backdrop-blur": [{ "backdrop-blur": ue() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Y, $, Q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Y, $, Q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, Y, $, Q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Y, $, Q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, Y, $, Q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Y, $, Q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Y, $, Q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, Y, $, Q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              $,
              Q,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [Y, `initial`, $, Q] }],
        ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
        delay: [{ delay: [Y, $, Q] }],
        animate: [{ animate: [`none`, v, $, Q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, $, Q] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: de() }],
        "rotate-x": [{ "rotate-x": de() }],
        "rotate-y": [{ "rotate-y": de() }],
        "rotate-z": [{ "rotate-z": de() }],
        scale: [{ scale: fe() }],
        "scale-x": [{ "scale-x": fe() }],
        "scale-y": [{ "scale-y": fe() }],
        "scale-z": [{ "scale-z": fe() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: pe() }],
        "skew-x": [{ "skew-x": pe() }],
        "skew-y": [{ "skew-y": pe() }],
        transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: me() }],
        "translate-x": [{ "translate-x": me() }],
        "translate-y": [{ "translate-y": me() }],
        "translate-z": [{ "translate-z": me() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [X, $, Q] }],
        accent: [{ accent: A() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: A() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              $,
              Q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
        "scrollbar-track-color": [{ "scrollbar-track": A() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] },
        ],
        fill: [{ fill: [`none`, ...A()] }],
        "stroke-w": [{ stroke: [Y, Ki, zi, Bi] }],
        stroke: [{ stroke: [`none`, ...A()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function ua(...e) {
  return la(Hr(e));
}
var da = vr,
  fa = br,
  pa = wr,
  ma = d.forwardRef(({ className: e, ...t }, n) =>
    (0, j.jsx)(Er, {
      ref: n,
      className: ua(
        `fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
    }),
  );
ma.displayName = Er.displayName;
var ha = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, j.jsxs)(pa, {
    children: [
      (0, j.jsx)(ma, {}),
      (0, j.jsxs)(Ar, {
        ref: r,
        className: ua(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`,
          e,
        ),
        ...n,
        children: [
          t,
          (0, j.jsxs)(zr, {
            className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`,
            children: [
              (0, j.jsx)(_, { className: `h-4 w-4` }),
              (0, j.jsx)(`span`, { className: `sr-only`, children: `Close` }),
            ],
          }),
        ],
      }),
    ],
  }),
);
ha.displayName = Ar.displayName;
var ga = ({ className: e, ...t }) =>
  (0, j.jsx)(`div`, {
    className: ua(`flex flex-col space-y-1.5 text-center sm:text-left`, e),
    ...t,
  });
ga.displayName = `DialogHeader`;
var _a = d.forwardRef(({ className: e, ...t }, n) =>
  (0, j.jsx)(Fr, {
    ref: n,
    className: ua(`text-lg font-semibold leading-none tracking-tight`, e),
    ...t,
  }),
);
_a.displayName = Fr.displayName;
var va = d.forwardRef(({ className: e, ...t }, n) =>
  (0, j.jsx)(Lr, {
    ref: n,
    className: ua(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
va.displayName = Lr.displayName;
function ya() {
  let [e, t] = (0, d.useState)(`es`);
  ((0, d.useEffect)(() => {
    let e = window.localStorage.getItem(`portfolio-lang`);
    (e === `es` || e === `en` || e === `it`) && t(e);
  }, []),
    (0, d.useEffect)(() => {
      document.documentElement.lang = e;
    }, [e]));
  let n = () => {
      let n = ae[(ae.indexOf(e) + 1) % ae.length];
      (t(n), window.localStorage.setItem(`portfolio-lang`, n));
    },
    r = A[e];
  return (0, j.jsxs)(`div`, {
    className: `min-h-screen bg-surface font-sans text-foreground`,
    children: [
      (0, j.jsx)(`nav`, {
        className: `sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md`,
        children: (0, j.jsxs)(`div`, {
          className: `mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6`,
          children: [
            (0, j.jsx)(`span`, {
              className: `font-display font-semibold text-ocean-deep`,
              children: r.name,
            }),
            (0, j.jsxs)(`div`, {
              className: `flex items-center gap-8`,
              children: [
                (0, j.jsx)(`div`, {
                  className: `hidden gap-8 sm:flex`,
                  children: r.nav.map((e) =>
                    (0, j.jsx)(
                      `a`,
                      {
                        href: e.href,
                        className: `text-sm font-medium text-muted-foreground transition-colors hover:text-ocean-deep`,
                        children: e.label,
                      },
                      e.href,
                    ),
                  ),
                }),
                (0, j.jsx)(`button`, {
                  type: `button`,
                  onClick: n,
                  "aria-label": r.langAria,
                  className: `rounded-full border border-ocean-deep/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white`,
                  children: r.langLabel,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `bg-ocean-deep px-6 py-20`,
        children: (0, j.jsxs)(`div`, {
          className: `mx-auto max-w-7xl`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `flex flex-col items-start gap-6 sm:flex-row sm:items-center`,
              children: [
                (0, j.jsx)(`div`, {
                  className: `size-28 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-light/60 sm:size-32`,
                  children: (0, j.jsx)(`img`, {
                    src: i,
                    alt: r.portraitAlt,
                    width: 1024,
                    height: 1280,
                    className: `h-full w-full object-cover`,
                  }),
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex-1`,
                  children: [
                    (0, j.jsx)(`p`, {
                      className: `text-sm font-medium uppercase tracking-widest text-teal-light`,
                      children: r.heroKicker,
                    }),
                    (0, j.jsx)(`h1`, {
                      className: `mt-2 font-display text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl lg:text-5xl`,
                      children: r.name,
                    }),
                    (0, j.jsx)(`p`, {
                      className: `mt-2 max-w-[46ch] text-pretty text-base font-medium text-zinc-300 sm:text-lg`,
                      children: r.heroRole,
                    }),
                  ],
                }),
              ],
            }),
            (0, j.jsx)(`p`, {
              className: `mt-10 max-w-[68ch] text-pretty text-lg leading-relaxed text-zinc-300`,
              children: r.heroTagline,
            }),
            (0, j.jsxs)(`div`, {
              className: `mt-8 flex flex-wrap gap-4`,
              children: [
                (0, j.jsx)(`a`, {
                  href: `#experiencia`,
                  className: `rounded-full bg-teal-light px-5 py-2 text-sm font-semibold text-ocean-deep ring-1 ring-teal-light transition-transform hover:bg-teal-light/90`,
                  children: r.heroCtaPrimary,
                }),
                (0, j.jsx)(`a`, {
                  href: `#bio`,
                  className: `rounded-full px-5 py-2 text-sm font-medium text-zinc-300 ring-1 ring-white/20 transition-colors hover:bg-white/5`,
                  children: r.heroCtaSecondary,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        id: `bio`,
        className: `bg-white px-6 py-24`,
        children: (0, j.jsx)(`div`, {
          className: `mx-auto max-w-7xl`,
          children: (0, j.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-12 lg:grid-cols-12`,
            children: [
              (0, j.jsxs)(`div`, {
                className: `lg:col-span-4`,
                children: [
                  (0, j.jsx)(`h2`, {
                    className: `mb-4 font-display text-2xl font-medium text-ocean-deep`,
                    children: r.bioTitle,
                  }),
                  (0, j.jsx)(`div`, { className: `h-1 w-12 bg-teal-light` }),
                ],
              }),
              (0, j.jsx)(`div`, {
                className: `lg:col-span-8`,
                children: (0, j.jsxs)(`p`, {
                  className: `max-w-[56ch] text-pretty text-lg leading-relaxed text-muted-foreground`,
                  children: [
                    r.bioP1,
                    (0, j.jsx)(`br`, {}),
                    (0, j.jsx)(`br`, {}),
                    r.bioP2,
                    (0, j.jsx)(`br`, {}),
                    (0, j.jsx)(`br`, {}),
                    r.bioP3,
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      (0, j.jsx)(`section`, {
        id: `formacion`,
        className: `bg-white px-6 py-24`,
        children: (0, j.jsx)(`div`, {
          className: `mx-auto max-w-7xl`,
          children: (0, j.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-12 lg:grid-cols-12`,
            children: [
              (0, j.jsxs)(`div`, {
                className: `lg:col-span-4`,
                children: [
                  (0, j.jsx)(`h2`, {
                    className: `mb-2 font-display text-2xl font-medium text-ocean-deep`,
                    children: r.studiesTitle,
                  }),
                  (0, j.jsx)(`div`, { className: `h-1 w-12 bg-teal-light` }),
                ],
              }),
              (0, j.jsx)(`div`, {
                className: `space-y-12 border-l border-black/10 pl-8 lg:col-span-8`,
                children: r.studies.map((e) =>
                  (0, j.jsxs)(
                    `div`,
                    {
                      className: `relative`,
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `absolute -left-[37px] top-1.5 size-4 rounded-full border-2 bg-white ${e.accent === `teal` ? `border-teal-light` : `border-ocean-mid`}`,
                        }),
                        (0, j.jsx)(`h4`, {
                          className: `mb-1 text-sm font-semibold uppercase tracking-tight text-ocean-bright`,
                          children: e.year,
                        }),
                        (0, j.jsx)(`h3`, {
                          className: `text-xl font-medium text-ocean-deep`,
                          children: e.title,
                        }),
                        (0, j.jsx)(`p`, {
                          className: `mt-1 text-muted-foreground`,
                          children: e.place,
                        }),
                      ],
                    },
                    e.year,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      (0, j.jsx)(`section`, {
        id: `experiencia`,
        className: `border-y border-black/5 bg-surface px-6 py-24`,
        children: (0, j.jsxs)(`div`, {
          className: `mx-auto max-w-7xl`,
          children: [
            (0, j.jsx)(`div`, {
              className: `mb-16`,
              children: (0, j.jsx)(`h2`, {
                className: `text-balance font-display text-3xl font-medium text-ocean-deep`,
                children: r.experienceTitle,
              }),
            }),
            (0, j.jsx)(`div`, {
              className: `grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3`,
              children: r.experiences.map((e) =>
                (0, j.jsxs)(
                  `article`,
                  {
                    className: `group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md`,
                    children: [
                      (0, j.jsx)(oe, {
                        images: e.images,
                        alt: e.alt,
                        prevLabel: r.prevAria,
                        nextLabel: r.nextAria,
                      }),
                      (0, j.jsxs)(`div`, {
                        className: `p-6`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `text-[10px] font-semibold uppercase tracking-widest text-ocean-bright`,
                            children: e.period,
                          }),
                          (0, j.jsx)(`h3`, {
                            className: `mb-3 mt-2 font-display text-lg font-medium text-ocean-deep`,
                            children: e.title,
                          }),
                          (0, j.jsx)(`p`, {
                            className: `line-clamp-3 text-pretty text-sm leading-normal text-muted-foreground`,
                            children: e.description,
                          }),
                          (0, j.jsxs)(da, {
                            children: [
                              (0, j.jsx)(fa, {
                                asChild: !0,
                                children: (0, j.jsx)(`button`, {
                                  type: `button`,
                                  className: `mt-4 rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white`,
                                  children: r.detailsLabel,
                                }),
                              }),
                              (0, j.jsxs)(ha, {
                                className: `max-h-[85vh] overflow-y-auto sm:max-w-2xl`,
                                children: [
                                  (0, j.jsxs)(ga, {
                                    children: [
                                      (0, j.jsx)(`span`, {
                                        className: `text-[10px] font-semibold uppercase tracking-widest text-ocean-bright`,
                                        children: e.period,
                                      }),
                                      (0, j.jsx)(_a, {
                                        className: `font-display text-xl font-medium text-ocean-deep`,
                                        children: e.title,
                                      }),
                                      (0, j.jsx)(va, {
                                        className: `text-pretty text-left text-sm leading-relaxed text-muted-foreground`,
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                  (0, j.jsx)(`div`, {
                                    className: `overflow-hidden rounded-lg`,
                                    children: (0, j.jsx)(oe, {
                                      images: e.images,
                                      alt: e.alt,
                                      prevLabel: r.prevAria,
                                      nextLabel: r.nextAria,
                                    }),
                                  }),
                                  `modules` in e &&
                                    (0, j.jsx)(`div`, {
                                      className: `space-y-4 border-t border-black/5 pt-5`,
                                      children: e.modules.map((e) =>
                                        (0, j.jsxs)(
                                          `div`,
                                          {
                                            children: [
                                              (0, j.jsx)(`h4`, {
                                                className: `text-xs font-semibold uppercase tracking-wide text-ocean-bright`,
                                                children: e.name,
                                              }),
                                              (0, j.jsx)(`ul`, {
                                                className: `mt-1.5 space-y-1`,
                                                children: e.items.map((e) =>
                                                  (0, j.jsxs)(
                                                    `li`,
                                                    {
                                                      className: `flex gap-2 text-sm leading-snug text-muted-foreground`,
                                                      children: [
                                                        (0, j.jsx)(`span`, {
                                                          className: `mt-2 size-1 shrink-0 rounded-full bg-teal-light`,
                                                        }),
                                                        (0, j.jsx)(`span`, {
                                                          className: `text-pretty`,
                                                          children: e,
                                                        }),
                                                      ],
                                                    },
                                                    e,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          },
                                          e.name,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        id: `competencias`,
        className: `bg-white px-6 py-24`,
        children: (0, j.jsxs)(`div`, {
          className: `mx-auto max-w-7xl`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `mb-16`,
              children: [
                (0, j.jsx)(`h2`, {
                  className: `text-balance font-display text-3xl font-medium text-ocean-deep`,
                  children: r.competitionsTitle,
                }),
                (0, j.jsx)(`div`, { className: `mt-4 h-1 w-12 bg-teal-light` }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3`,
              children: r.competitions.map((e) =>
                (0, j.jsxs)(
                  `article`,
                  {
                    className: `group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md`,
                    children: [
                      (0, j.jsx)(oe, {
                        images: e.images,
                        alt: e.alt,
                        prevLabel: r.prevAria,
                        nextLabel: r.nextAria,
                      }),
                      (0, j.jsxs)(`div`, {
                        className: `p-6`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `text-[10px] font-semibold uppercase tracking-widest text-ocean-bright`,
                            children: e.period,
                          }),
                          (0, j.jsx)(`h3`, {
                            className: `mb-3 mt-2 font-display text-lg font-medium text-ocean-deep`,
                            children: e.title,
                          }),
                          (0, j.jsx)(`p`, {
                            className: `text-pretty text-sm leading-normal text-muted-foreground`,
                            children: e.intro,
                          }),
                          (0, j.jsxs)(da, {
                            children: [
                              (0, j.jsx)(fa, {
                                asChild: !0,
                                children: (0, j.jsx)(`button`, {
                                  type: `button`,
                                  className: `mt-4 rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white`,
                                  children: r.detailsLabel,
                                }),
                              }),
                              (0, j.jsxs)(ha, {
                                className: `max-h-[85vh] overflow-y-auto sm:max-w-2xl`,
                                children: [
                                  (0, j.jsxs)(ga, {
                                    children: [
                                      (0, j.jsx)(`span`, {
                                        className: `text-[10px] font-semibold uppercase tracking-widest text-ocean-bright`,
                                        children: e.period,
                                      }),
                                      (0, j.jsx)(_a, {
                                        className: `font-display text-xl font-medium text-ocean-deep`,
                                        children: e.modalTitle,
                                      }),
                                      (0, j.jsx)(va, {
                                        className: `text-pretty text-left text-sm leading-relaxed text-muted-foreground`,
                                        children: e.detail,
                                      }),
                                    ],
                                  }),
                                  (0, j.jsx)(`div`, {
                                    className: `overflow-hidden rounded-lg`,
                                    children: (0, j.jsx)(oe, {
                                      images: e.images,
                                      alt: e.alt,
                                      prevLabel: r.prevAria,
                                      nextLabel: r.nextAria,
                                    }),
                                  }),
                                  (0, j.jsx)(`div`, {
                                    className: `space-y-4 border-t border-black/5 pt-5`,
                                    children: e.modules.map((e) =>
                                      (0, j.jsxs)(
                                        `div`,
                                        {
                                          children: [
                                            (0, j.jsx)(`h4`, {
                                              className: `text-xs font-semibold uppercase tracking-wide text-ocean-bright`,
                                              children: e.name,
                                            }),
                                            (0, j.jsx)(`ul`, {
                                              className: `mt-1.5 space-y-1`,
                                              children: e.items.map((e) =>
                                                (0, j.jsxs)(
                                                  `li`,
                                                  {
                                                    className: `flex gap-2 text-sm leading-snug text-muted-foreground`,
                                                    children: [
                                                      (0, j.jsx)(`span`, {
                                                        className: `mt-2 size-1 shrink-0 rounded-full bg-teal-light`,
                                                      }),
                                                      (0, j.jsx)(`span`, {
                                                        className: `text-pretty`,
                                                        children: e,
                                                      }),
                                                    ],
                                                  },
                                                  e,
                                                ),
                                              ),
                                            }),
                                          ],
                                        },
                                        e.name,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        id: `certificados`,
        className: `border-t border-black/5 bg-surface px-6 py-24`,
        children: (0, j.jsxs)(`div`, {
          className: `mx-auto max-w-7xl`,
          children: [
            (0, j.jsx)(`h2`, {
              className: `mb-12 font-display text-2xl font-medium text-ocean-deep`,
              children: r.certificatesTitle,
            }),
            (0, j.jsx)(`div`, {
              className: `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`,
              children: r.certificates.map((e) =>
                (0, j.jsxs)(
                  da,
                  {
                    children: [
                      (0, j.jsx)(fa, {
                        asChild: !0,
                        children: (0, j.jsxs)(`button`, {
                          type: `button`,
                          className: `flex flex-col items-start rounded-xl bg-white p-5 text-left shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md`,
                          children: [
                            (0, j.jsx)(`div`, {
                              className: `mb-4 flex size-10 items-center justify-center rounded-lg bg-ocean-deep/5`,
                              children: (0, j.jsx)(g, {
                                className: `size-5 ${e.dot === `teal` ? `text-teal-light` : `text-ocean-bright`}`,
                              }),
                            }),
                            (0, j.jsx)(`span`, {
                              className: `text-[10px] font-semibold uppercase tracking-widest text-ocean-bright`,
                              children: e.year,
                            }),
                            (0, j.jsx)(`h4`, {
                              className: `mt-1 text-pretty text-sm font-semibold text-ocean-deep`,
                              children: e.name,
                            }),
                            (0, j.jsx)(`p`, {
                              className: `mt-1 text-xs text-muted-foreground`,
                              children: e.issuer,
                            }),
                            (0, j.jsx)(`span`, {
                              className: `mt-4 text-xs font-semibold uppercase tracking-widest text-ocean-deep underline underline-offset-4`,
                              children: r.certificateViewLabel,
                            }),
                          ],
                        }),
                      }),
                      (0, j.jsxs)(ha, {
                        className: `max-h-[90vh] sm:max-w-3xl`,
                        children: [
                          (0, j.jsxs)(ga, {
                            children: [
                              (0, j.jsx)(`span`, {
                                className: `text-[10px] font-semibold uppercase tracking-widest text-ocean-bright`,
                                children: e.year,
                              }),
                              (0, j.jsx)(_a, {
                                className: `text-pretty font-display text-lg font-medium text-ocean-deep`,
                                children: e.name,
                              }),
                              (0, j.jsx)(va, {
                                className: `text-left text-sm text-muted-foreground`,
                                children: e.issuer,
                              }),
                            ],
                          }),
                          (0, j.jsx)(`iframe`, {
                            src: e.file,
                            title: e.name,
                            className: `h-[65vh] w-full rounded-lg border border-black/10 bg-muted`,
                          }),
                          (0, j.jsx)(`a`, {
                            href: e.file,
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `self-start rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white`,
                            children: r.certificateViewLabel,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`footer`, {
        className: `border-t border-white/5 bg-ocean-deep px-6 py-12`,
        children: (0, j.jsxs)(`div`, {
          className: `mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `text-center md:text-left`,
              children: [
                (0, j.jsx)(`p`, {
                  className: `font-display text-zinc-100`,
                  children: r.name,
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-1 text-xs uppercase tracking-widest text-zinc-400`,
                  children: r.footerTagline,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `flex gap-6`,
              children: r.footerLinks.map((e) =>
                (0, j.jsx)(
                  `a`,
                  {
                    href: e.href,
                    className: `text-xs font-medium uppercase tracking-widest text-teal-light transition-colors hover:text-white`,
                    children: e.label,
                  },
                  e.href,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
export { ya as component };
