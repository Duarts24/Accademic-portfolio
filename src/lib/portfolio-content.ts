import dosq1 from "@/assets/dosq1.jpg";
import dosq2 from "@/assets/dosq2.jpg";
import dosq3 from "@/assets/dosq3.jpg";
import dosq4 from "@/assets/dosq4.jpg";

import expEmbera from "@/assets/exp-embera.jpg";
import expEmbera2 from "@/assets/exp-embera (2).jpg";
import Embera3 from "@/assets/embera3.jpg";
import Embera4 from "@/assets/embera4.jpg";
import Embera5 from "@/assets/embera5.jpg";

import gimnasio1 from "@/assets/gimnasio.jpg";
import gimnasio2 from "@/assets/gimnasio2.jpg";
import gimnasio3 from "@/assets/gimnasio3.jpg";
import expArduino from "@/assets/exp-arduino.jpg";


import compRredsi from "@/assets/comp-rredsi.jpg";
import research2 from "@/assets/research-2.jpg";

import compArena from "@/assets/comp-arena.jpg";

import vaca from "@/assets/vaca.jpg";
import vaca2 from "@/assets/vaca2.jpg";

import colegio from "@/assets/Colegio1.jpg";
import colegio2 from "@/assets/colegio2.jpg";
import colegio3 from "@/assets/colegio3.jpg";
import colegio4 from "@/assets/colegio4.jpg";

import macmotus1 from "@/assets/macmotus1.jpg";
import macmotus2 from "@/assets/macmotus2.jpg";
import macmotus3 from "@/assets/macmotus3.jpg";
import macmotus4 from "@/assets/macmotus4.jpg";
import macmotus7 from "@/assets/macmotus7.jpg";
import macmotus8 from "@/assets/macmotus8.jpg";
import macmotus9 from "@/assets/macmotus9.jpg";
import macmotus10 from "@/assets/macmotus10.jpg";

import incendio1 from "@/assets/incendio1.png";
import incendio2 from "@/assets/incendio2.jpg";
import incendio3 from "@/assets/incendio3.jpg";
import incendio4 from "@/assets/incendio4.jpg";

import me1 from "@/assets/me1.jpg";
import me2 from "@/assets/me2.jpg";
import me3 from "@/assets/me3.jpg";
import me4 from "@/assets/me4.jpg";
import me5 from "@/assets/me5.jpg";
import me6 from "@/assets/me6.jpg";
import me7 from "@/assets/me7.jpg";
import me8 from "@/assets/me8.jpg";
import me9 from "@/assets/me9.jpg";

import medio1 from "@/assets/medio1.jpg";
import medios2 from "@/assets/medios2.jpg";
import medios3 from "@/assets/medios3.jpg";

import certIa from "@/assets/certs/524 - Certificado IA.pdf";
import certVacacional from "@/assets/certs/1086 - Certificado vacaionalpdf.pdf";
import certRobotica from "@/assets/certs/3554 - Certificado robotica 2024.pdf";
import certAeronautica from "@/assets/certs/3572 - Certificado aeronautica.pdf";
import certPrototipado from "@/assets/certs/Certificacion Prototipado.pdf";
import certRredsi2026 from "@/assets/certs/Certificado_XIII Encuentro Regional de Semilleros de Investigacion RREDSI 2023-16 de agosto de 2026.pdf";
import certPonente from "@/assets/certs/certificadoPonente.pdf";
import ingenieria from "@/assets/certs/Estudiante Distinguida Tecnologia.pdf";
import tecnologa from "@/assets/certs/Estudiante Distinguida Tecnologia.pdf";

export type Lang = "es" | "en" | "it";

export const LANG_ORDER: Lang[] = ["es", "en", "it"];
export const ABOUT_GALLERY = [me1, me2, me3, me4, me5, me6, me7, me8, me9];

export const CONTENT = {
  es: {
    langLabel: "EN",
    langAria: "Cambiar idioma a inglés",
    name: "Janny Duarte",
    nav: [
      { href: "#bio", label: "Biografía" },
      { href: "#formacion", label: "Formación" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#competencias", label: "Competencias" },
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#medios", label: "Medios" },
      { href: "#certificados", label: "Certificados" },
    ],
    heroKicker: "Portafolio Académico",
    heroRole:
      "Ingeniera en Mecatrónica. Docente Extracurricular de Robótica en el Instituto Gimnasio de Pereira.",
    heroTagline:
      "Sistemas electrónicos, control e innovación. Competencias internacionales de diseño aeronáutico y educación en robótica.",
    heroCtaPrimary: "Ver experiencia",
    heroCtaSecondary: "Biografía",
    heroAverageLabel: "Promedio de ingeniería",
    portraitAlt: "Retrato académico de Janny Duarte",
    bioTitle: "Perfil Académico",
    bioP1:
      "Ingeniera Mecatrónica con enfoque en electrónica e innovación que convierte problemas complejos en soluciones funcionales. He liderado un equipo multidisciplinario sin experiencia previa en aeromodelismo a competencia internacional AERODESIGN MX 2026, ubicándolos en posición 12 de 19 equipos con una aeronave 100% original y colombiana. Diseñé un sistema UAV completo para mitigación de incendios integrando electrónica avanzada con aplicaciones prácticas de seguridad. Escalé un programa de educación aeronáutica desde comunidades indígenas Emberá Chamí hasta múltiples instituciones en Risaralda, demostrando que la educación técnica de calidad es replicable y transformadora.",
    bioP2:
      "Mi fortaleza está en enseñanza aplicada. Mis estudiantes no memorizan conceptos, descubren que pueden innovar, competir, resolver. He trabajado con más de 40 estudiantes simultáneamente en robótica, gestionado laboratorios de instrumentación para tres programas académicos, y coordinado competencias que ahora son reconocidas en festividades de la ciudad. La electrónica y la ingeniería no son teóricas para mí: son herramientas de impacto real en comunidades donde la tecnología no llega. Los proyectos que integro electrónica con aplicaciones reales me permiten compartir conocimientos y fomentar la creatividad. Enseño robótica de forma extracurricular en diferentes contextos porque me gusta compartir lo que aprendo.",
    bioP3:
      "Mi tesis de pregrado trabajó en mitigación de incendios mediante drones, combinando electrónica con una aplicación práctica de seguridad.",
    aboutTitle: "Sobre mí",
    aboutP1:
      "Soy de Mistrato, un pueblo cafetero y hermoso en el corazón de Risaralda. Paso mis días construyendo: robots sumo, aeronaves, circuitos que cobran vida. Pero en mis ratos libres me pierdo en webtoons de romance y fantasía, escucho synthwave y darkwave, juego videojuegos, hago manualidades. La música, las historias, la creatividad — todo eso es tan importante para mí como lo es la electrónica o la programación.",
    aboutP2:
      "Lo que realmente me impulsa es el aprendizaje constante. Busco entender algo nuevo cada día, resolver problemas de formas diferentes, ver la ingeniería desde nuevas perspectivas. Trabajo en lo que amo porque creo genuinamente que la robótica y la mecatrónica tienen cosas nuevas y hermosas por descubrir. Mi mayor satisfacción es cuando mis estudiantes lo ven también — cuando descubren que la tecnología no es lejana, sino una herramienta para crear e innovar. En eso encuentro sentido.",
    aboutAlt:
      "Momentos de la trayectoria de Janny Duarte en talleres, laboratorios y competencias",
    mediaTitle: "En los medios",
    mediaSubtitle: "Comunicaciones de la Universidad Tecnológica de Pereira",
    mediaLinkLabel: "Leer artículo",
    mediaItems: [
      {
        title:
          "Del Aula al Cielo Mexicano: El Vuelo Histórico de la UTP en Aero Design México 2026",
        source: "Comunicaciones UTP",
        image: medio1,
        href: "https://comunicaciones.utp.edu.co/105965/facultades/facultades-facultades-8/del-aula-al-cielo-mexicano-el-vuelo-historico-de-la-utp-en-aero-design-mexico-2026/",
      },
      {
        title:
          "De Pereira para el mundo: El equipo de MacMotus UTP rinde cuentas tras su exitosa participación en México",
        source: "Comunicaciones UTP",
        image: medios2,
        href: "https://comunicaciones.utp.edu.co/108745/facultades/facultades-facultades-8/de-pereira-para-el-mundo-el-equipo-de-macmotus-utp-rinde-cuentas-tras-su-exitosa-participacion-en-mexico/",
      },
       {
        title:
          "17 Años del Programa de Ingeniería Mecatrónica de la Universidad Tecnológica de Pereira",
        source: "Comunicaciones UTP",
        image: medios3,
        href: "https://comunicaciones.utp.edu.co/108745/facultades/facultades-facultades-8/17-anos-del-programa-de-ingeneria-mecatronica-de-la-universidad-tecnologica-de-pereira/",
      },
    ],
    skillsTitle: "Habilidades",
    skills: [
      {
        id: "electronic-systems",
        title: "Sistemas electrónicos e instrumentación",
        description:
          "Diseño, montaje y trabajo práctico con circuitos, sensores, medición y equipos de laboratorio.",
      },
      {
        id: "programming",
        title: "Programación y microcontroladores",
        description:
          "Programación con C++, Arduino y ESP32 para desarrollar sistemas interactivos y soluciones de control.",
      },
      {
        id: "robotics",
        title: "Robótica educativa",
        description:
          "Diseño de actividades STEAM y enseñanza de robótica para estudiantes de primaria y secundaria.",
      },
      {
        id: "aeronautics",
        title: "Diseño y construcción aeronáutica",
        description:
          "Diseño, construcción y evaluación de aeronaves no tripuladas en proyectos y competencias de ingeniería.",
      },
      {
        id: "uav",
        title: "Sistemas UAV y seguridad",
        description:
          "Integración de drones, mecanismos y monitoreo térmico para aplicaciones de mitigación de incendios.",
      },
      {
        id: "research",
        title: "Investigación y divulgación STEM",
        description:
          "Presentación de proyectos de investigación y comunicación de la ciencia en encuentros académicos.",
      },
    ],
    experienceTitle: "Trayectoria de Experiencia",
    experienceSubtitle: "Orden cronológico",
    prevAria: "Foto anterior",
    nextAria: "Foto siguiente",
    detailsLabel: "Ver más",
    closeLabel: "Cerrar",
    experiences: [
      {
        id: "recreativo",
        period: "Taller Recreativo",
        title: "Taller Aeronáutico — Barrio Dosquebradas",
        description:
          "Taller de aeronáutica recreativa realizado en septiembre posterior al terremoto del 10 de agosto, con el objetivo de brindar un espacio de recreación, distracción y esperanza a niños y familias del barrio a través de construcción y competencias de aviones de papel, paracaídas y cohetes de cartulina.",
        images: [dosq1, dosq2, dosq3, dosq4],
        alt: "Taller aeronáutico recreativo en barrio de Dosquebrada",
        modules: [
          {
            name: "Contexto",
            items: [
              "Iniciativa post-desastre: 10 de agosto (terremoto)",
              "Objetivo: Apoyo psicosocial comunitario mediante educación y recreación",
            ],
          },
          {
            name: "Actividades",
            items: [
              "Construcción de aviones de papel",
              "Construcción de paracaídas",
              "Construcción de cohetes de cartulina",
              "Competencias en cada categoría",
              "Juegos recreativos para niños y adultos",
            ],
          },
          {
            name: "Mi rol",
            items: [
              "Lideré la categoría de aviones de papel",
              "Apoyé la organización de la categoría de cohetes",
              "Facilitadora de la experiencia educativa",
            ],
          },
          {
            name: "Impacto",
            items: [
              "En un momento de incertidumbre y miedo, la educación se convirtió en herramienta de sanación",
              "Los niños recordaron que la creatividad, la innovación y la diversión siguen siendo posibles",
              "Una tarde donde la aeronáutica no fue solo ciencia, sino esperanza",
            ],
          },
        ],
      },

      {
        id: "embera",
        period: "Talleres de aeronáutica",
        title: "Comunidad Emberá Chamí",
        description:
          "Dicté los primeros talleres de aeronáutica a estudiantes de población vulnerable de la comunidad indígena Emberá Chamí, con metodología recreativa y cierre en la construcción de un avión de madera.",
        images: [expEmbera, expEmbera2, Embera3, Embera4, Embera5],
        alt: "Taller de aeronáutica con niños de la comunidad Emberá Chamí",
        modules: [
          {
            name: "Contenido del taller",
            items: [
              "Historia y Sueño de Volar",
              "Tipos de Aeronaves",
              "¿Por qué vuelan?",
              "La Atmósfera",
              "Control del Vuelo",
              "Actividades recreativas y construcción de un avión de madera",
            ],
          },
          {
            name: "Impacto",
            items: [
              "Demostración de que la educación técnica de calidad puede llegar a poblaciones históricamente excluidas de oportunidades STEAM. Los estudiantes Emberá Chamí experimentaron que la ingeniería no es lejana, sino accesible y relevante para sus realidades.",
            ],
          },
        ],
      },
      {
        id: "colegios",
        period: "Talleres de aeronáutica - CIDT|UTP",
        title: "Colegios",
        description:
          "Escalé exitosamente el programa de aeronáutica inicial a múltiples colegios en Pereira y Dosquebrada durante 2024, demostrando la replicabilidad y demanda de educación STEAM en la región. Esta iniciativa fue desarrollada en conjunto con el semillero de investigación CIDT y la Universidad Tecnológica de Pereira.",
        images: [colegio, colegio2, colegio3, colegio4],
        alt: "Taller de aeronáutica en un aula de colegio con modelos de aviones",
        modules: [
          {
            name: "Contenido del taller",
            items: [
              "Historia y Sueño de Volar",
              "Tipos de Aeronaves",
              "¿Por qué vuelan?",
              "La Atmósfera",
              "Control del Vuelo",
              "Actividades recreativas y construcción de un avión de madera",
            ],
          },
          {
            name: "Impacto",
            items: [
              "La replicación del currículo a múltiples instituciones evidenció que un programa diseñado con rigor pedagógico puede adaptarse y escalar exitosamente a diferentes contextos educativos en la región.",
            ],
          },
        ],
      },

      {
        id: "monitora",
        period: "Monitora - UTP",
        title: "Laboratorio de Instrumentación Mecatrónica",
        description:
          "Apoyo académico y operativo del laboratorio de instrumentación de la Universidad Tecnológica de Pereira.",
        images: [expArduino],
        alt: "Laboratorio de instrumentación mecatrónica con equipos de control y automatización",
        modules: [
          {
            name: "Funciones",
            items: [
              "Enseñé a los estudiantes el uso correcto de los equipos del laboratorio",
              "Verifiqué que el inventario de equipos estuviera completo",
              "Realicé mantenimientos cuando era necesario",
              "Supervisé los laboratorios y los elementos electrónicos",
              "Facilité componentes electrónicos a los estudiantes que los necesitaban",
            ],
          },

          {
            name: "Impacto",
            items: [
              "Facilitación del aprendizaje práctico en instrumentación y control para estudiantes de diferentes programas, garantizando acceso equitativo a recursos técnicos",
            ],
          },
        ],
      },
      {
        id: "macmotus",
        period: "Líder de equipo - Macmotus UTP",
        title: "AeroDesign MX (ADMX), México",
        description:
          "Lideré el equipo Macmotus en la competencia internacional AERODESIGN MX, cuyo reglamento regula el diseño, construcción y operación de aeronaves no tripuladas de ala fija como ejercicio de ingeniería real para estudiantes.",
        images: [
          macmotus1,
          macmotus2,
          macmotus3,
          macmotus4,
          macmotus8,
          macmotus9,
          macmotus7,
          macmotus10, 
        ],
        alt: "Equipo Macmotus con su aeronave de ala fija en AERODESIGN MX",
        modules: [
          {
            name: "Categoría Cargo Challenge",
            items: [
              "Optimización de diseño, eficiencia estructural, peso vacío y capacidad de carga sólida",
              "Vuelos con y sin carga en distintas rondas",
            ],
          },
          {
            name: "Etapas de evaluación",
            items: [
              "Reporte de Diseño",
              "Presentación Técnica",
              "Inspección Técnica e Inspección de Vuelo",
            ],
          },
          {
            name: "Resultados",
            items: [
              "Puesto 12 de 19, logro significativo para un equipo multidisciplinario (mecánica, física y mecatrónica) sin experiencia profunda previa en aeromodelismo",
              "Aeronave de diseño 100% original y colombiano",
              "Primer equipo colombiano en participar en este tipo de competencia",
            ],
          },
        ],
      },
      {
        id: "gimnasio",
        period: "Docente extracurricular",
        title: "Robótica — Instituto Gimnasio de Pereira",
        description:
          "Dicto clases de robótica a más de 40 estudiantes entre primaria y secundaria, bajo un plan de estudio unificado que desarrolla competencias técnicas y pensamiento innovador.",
        images: [gimnasio1, gimnasio3],
        alt: "Competencia de robots sumo con estudiantes del club de robótica",
        modules: [
          {
            name: "Primer semestre",
            items: [
              "Enseñanza completa del diseño, construcción y programación de robots sumo RC, cubriendo:",
              "Electrónica fundamental",
              "Programación en C++ con Arduino",
              "Diseño mecánico",
              "Control y estrategia",
            ],
          },
          {
            name: "Segundo semestre",
            items: [
              "Expansión hacia sistemas sensoriales avanzados para nuevos proyectos, integrando",
              "Sensores ultrasónicos",
              "Sensores de luz",
              "Sensores de distancia",
              "Aplicaciones prácticas de detección y respuesta autónoma",
            ],
          },
          {
            name: "Impacto",
            items: [
              "Los estudiantes adquieren no solo habilidades técnicas, sino la capacidad de pensar en términos de soluciones tecnológicas, viendo la robótica como una disciplina creativa y accesible.",
            ],
          },
        ],
      },
      {
        id: "tesis",
        period: "Tesis de pregrado",
        title: "Mitigación de Incendios mediante UAV",
        description:
          "Diseñamos una garra mecánica para un cuadricóptero S500 orientada a transportar y liberar esferas extintoras de 0.4kg Este sistema asiste al Cuerpo de Bomberos monitoreando temperaturas en tiempo real y mitigando incendios en zonas de difícil acceso",
        images: [incendio1, incendio2, incendio3, incendio4],
        alt: "Drone UAV utilizado para mitigación de incendios",
        modules: [
          {
            name: "Impacto",
            items: [
              "Seguridad Operativa: El sistema permite realizar descargas tácticas y monitoreo térmico en ambientes hostiles de difícil acceso, reduciendo significativamente la exposición directa de las unidades de bomberos al peligro",
              "Optimización Multidisciplinar: Logré equilibrar estrictas restricciones de peso de carga útil (0.4 kg), consumo de corriente y estabilidad aerodinámica en el acople físico de la aeronave, garantizando condiciones de vuelo seguras para el dron y la integridad de la carga transportada",
            ],
          },
        ],
      },

      {
        id: "proyectos",
        period: "COMPETENCIA SUMO RC — GIMNASIO DE PEREIRA",
        title: "Competencia Sumo RC — Iniciativa y Liderazgo",
        description:
          "Diseñé e implementé una competencia interna de robótica sumo RC para estudiantes de primaria y secundaria, creando una puerta de entrada a ARENA UTP, una competencia internacional de robótica que convoca a diferentes colegios de la región y estudiantes de la Universidad Tecnológica de Pereira.",
        images: [gimnasio1, gimnasio2],
        alt: "Banco de trabajo con Arduino, módulo Bluetooth, módulo Bluetooth, driver de motores, microcontrolador ESP32 y componentes electrónicos ",
        modules: [
          {
            name: "Auto sumo con Bluetooth (Arduino)",
            items: [
              "Diseñé el reglamento y estructura competitiva",
              "Definí los criterios de evaluación y puestos",
              "Creé cronogramas tipo round robin para las confrontaciones",
              "Diseñé hojas de puntuación en Excel con código de colores para el seguimiento de los resultados",
              "Gestioné la entrega de premios y reconocimientos con un presupuesto limitado",
              "Fungí como árbitro durante toda la competencia",
              "Los tres primeros puestos de ambas categorías clasificaron automáticamente a ARENA UTP",
            ],
          },
          {
            name: "Impacto",
            items: [
              "Los estudiantes experimentaron una trayectoria clara: competencia interna → clasificación → competencia internacional. Los directivos visualizaron el valor del programa, y la competencia demostró tanto impacto que fue incorporada como actividad científica y deportiva en las festividades de la ciudad.",
            ],
          },
        ],
      },
      {
        id: "vacaciones",
        period: "Docencia — UTP",
        title:
          '"Vacaciones de Ciencia y Tecnología" — Curso de una semana para niños',
        description:
          "Curso dirigido a niños de 9 a 14 años, con temas de aeronáutica, robótica, IoT, diseño y programación. Metodología basada en actividades recreativas; el curso cierra con la construcción de un avión de madera.",
        images: [vaca, vaca2],
        alt: "Niños construyendo robots y aviones de madera en un curso de ciencia y tecnología",
        modules: [
          {
            name: "Módulo de Aeronáutica (nivel básico)",
            items: [
              "Historia y Sueño de Volar",
              "Tipos de Aeronaves",
              "¿Por qué vuelan?",
              "La Atmósfera",
              "Control del Vuelo",
            ],
          },
          {
            name: "Módulo de IoT",
            items: [
              "Arduino Cloud y dispositivos inteligentes",
              "Control por voz con Alexa",
              "Ensamblaje físico de placas",
            ],
          },
          {
            name: "Módulo de Diseño",
            items: [
              "Representación de Objetos",
              "Planos y Medidas (Acotado)",
              "Herramientas de Diseño: Onshape",
              "Guía práctica de Onshape: vistas (alzado, planta y perfil) y planos técnicos de piezas reales",
            ],
          },
          {
            name: "Módulo de Robótica",
            items: [
              "Metodología STEAM",
              "La Anatomía del Robot",
              "Conceptos de Electricidad",
              "Programación (C++ o Python)",
              "Control y Conexión",
              "Proyecto Final: Smart Car",
            ],
          },
          {
            name: "Módulo de Programación",
            items: [
              "Lenguaje C++ usando kit Arduino",
              "Práctica: encendido de LEDs, manejo de sensores, entre otros",
            ],
          },

          {
            name: " Impacto",
            items: [
              "Exposición temprana a múltiples disciplinas técnicas permite que niños identifiquen sus intereses reales en STEAM antes de tomar decisiones académicas de largo plazo. El curso demuestra que la tecnología es accesible, colaborativa y orientada a resolver problemas reales, inspirando vocaciones en ingeniería desde edades tempranas.",
            ],
          },
        ],
      },
    ],

    competitionsTitle: "Competencias y Participaciones Académicas",
    competitions: [
      {
        id: "rredsi",
        period: "Semillero de investigación",
        title: "RREDSI",
        intro:
          "Presenté mi investigación en encuentro departamental y regional",
        modalTitle: "RREDSI — Red Regional de Semilleros de Investigación",
        detail:
          "Sistema de sujeción de balones para incendio transportados por un vehículo aéreo no tripulado, combinando electrónica avanzada con aplicaciones prácticas de seguridad y mitigación de incendios.",
        images: [compRredsi, research2],
        alt: "Presentación de investigación en un encuentro académico de semilleros",
        modules: [
          { name: "Rol", items: ["Ponente"] },
          {
            name: "Red",
            items: [
              "Red Regional de Semilleros de Investigación (RREDSI), conformada por 49 instituciones de educación superior de Caldas, Quindío, Risaralda y Valle del Cauca",
            ],
          },
          {
            name: "Objetivo de RREDSI",
            items: [
              "Fomentar la cultura investigativa y el pensamiento crítico en estudiantes de pregrado mediante ejercicios de investigación formativa",
            ],
          },
          {
            name: "Participación",
            items: [
              "Encuentro Departamental: 17 de mayo de 2023",
              "Encuentro Regional: agosto de 2023",
            ],
          },
          {
            name: "Proyecto presentado",
            items: [
              '"Desarrollo de un sistema de sujeción de balones para incendio a través de un vehículo aéreo no tripulado"',
            ],
          },
        ],
      },
      {
        id: "arena",
        period: "Competencia de robótica",
        title: "ARENA UTP",
        intro: "Participé en dos categorías de competencia de robótica interna",
        modalTitle: "ARENA UTP — Competencia de Robótica",
        detail:
          "Competencia interna de robótica de la Universidad Tecnológica de Pereira.",
        images: [compArena],
        alt: "Robots de radiocontrol compitiendo en el ring de sumo",
        modules: [
          {
            name: "Sumo RC",
            items: [
              "Robots controlados por radiofrecuencia compiten en el clásico ring de sumo, donde el objetivo es sacar al oponente del área",
            ],
          },
          {
            name: "Soccer RC",
            items: [
              "Robots controlados por radiofrecuencia compiten en emocionantes partidos de fútbol, demostrando precisión y estrategia",
            ],
          },
          {
            name: "Participación",
            items: [
              "Competí en ambas categorías, ganando experiencia en diseño, programación y control de sistemas robóticos",
            ],
          },
        ],
      },
    ],
    studiesTitle: "Formación Académica",
    studies: [
      {
        year: "2026",
        title: "Ingeniería en Mecatrónica",
        place: "Universidad Tecnológica de Pereira",
        accent: "teal",
      },
      {
        year: "2026",
        title: "Tecnóloga en Mecatrónica",
        place: "Universidad Tecnológica de Pereira",
        accent: "mid",
      },
      {
        year: "2023",
        title: "Técnica en Mecatrónica",
        place: "Universidad Tecnológica de Pereira",
        accent: "mid",
      },
      {
        year: "2020",
        title: "Tecnólogo en Diseño e Integración de Automatismo Mecatrónico",
        place: "SENA",
        accent: "mid",
      },
    ],
    certificatesTitle: "Certificaciones y Honores",
    certificates: [
      {
        name: "Ponente — XIII Encuentro Regional de Semilleros RREDSI",
        issuer: "RREDSI · Universidad Católica de Pereira",
        year: "2023",
        dot: "bright",
        file: certRredsi2026,
      },
      {
        name: "Ponente — Sistema de sujeción de balones para incendios con UAV",
        issuer: "RREDSI · Universidad del Valle",
        year: "2023",
        dot: "bright",
        file: certPonente,
      },
      {
        name: "Tallerista — Robótica en colegios rurales de Risaralda",
        issuer: "UTP · Extensión",
        year: "2024",
        dot: "bright",
        file: certRobotica,
      },
      {
        name: "Tallerista — Competencia de Aeronáutica UTP 2024-2",
        issuer: "UTP · Extensión",
        year: "2024",
        dot: "bright",
        file: certAeronautica,
      },
      {
        name: "Prototipado Electrónico (20 horas)",
        issuer: "UTP · Ciencias Básicas",
        year: "2025",
        dot: "bright",
        file: certPrototipado,
      },
      {
        name: "Uso de la inteligencia artificial para la toma de decisiones en ventas",
        issuer: "UTP · Taller",
        year: "2026",
        dot: "bright",
        file: certIa,
      },
      {
        name: "Tallerista — Vacaciones de Ciencia y Tecnología",
        issuer: "UTP · CIDT",
        year: "2026",
        dot: "bright",
        file: certVacacional,
      },
      {
        name: "Estudiante Distinguida Ingeniería",
        issuer: "UTP",
        year: "2026",
        dot: "bright",
        file: ingenieria,
      },
      {
        name: "Estudiante Distinguida Tecnologia",
        issuer: "UTP",
        year: "2026",
        dot: "bright",
        file: tecnologa,
      },
    ],
    certificateViewLabel: "Ver certificado",
    footerTagline: "Portafolio Académico © 2026",
    footerLinks: [
      { href: "#bio", label: "Perfil" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#certificados", label: "Certificados" },
    ],
  },
  en: {
    langLabel: "IT",
    langAria: "Switch language to Italian",
    name: "Janny Duarte",
    nav: [
      { href: "#bio", label: "Biography" },
      { href: "#formacion", label: "Education" },
      { href: "#habilidades", label: "Skills" },
      { href: "#experiencia", label: "Experience" },
      { href: "#competencias", label: "Competitions" },
      { href: "#sobre-mi", label: "About me" },
      { href: "#medios", label: "Media" },
      { href: "#certificados", label: "Certificates" },
    ],
    heroKicker: "Academic Portfolio",
    heroRole:
      "Mechatronics Engineer. Extracurricular Robotics Teacher at Instituto Gimnasio de Pereira.",
    heroTagline:
      "Electronic systems, control and innovation. International aircraft design competitions and robotics education.",
    heroCtaPrimary: "View experience",
    heroCtaSecondary: "Biography",
    heroAverageLabel: "Engineering average",
    portraitAlt: "Academic portrait of Janny Duarte",
    bioTitle: "Academic Profile",
    bioP1:
      "Mechatronics Engineer with a focus on electronics and innovation who transforms complex problems into functional solutions. I have led a multidisciplinary team with no prior aeromodeling experience to an international AERODESIGN MX 2026 competition, placing them 12th out of 19 teams with a 100% original and Colombian-designed aircraft. I designed a complete UAV system for fire mitigation integrating advanced electronics with practical safety applications. I scaled an aeronautics education program from the Emberá Chamí indigenous communities to multiple institutions in Risaralda, demonstrating that quality technical education is replicable and transformative.",
    bioP2:
      "My strength lies in applied teaching. My students don't memorize concepts, they discover they can innovate, compete, solve. I have worked with over 40 students simultaneously in robotics, managed instrumentation laboratories for three academic programs, and coordinated competitions that are now recognized in city festivals. Electronics and engineering are not theoretical for me: they are tools for real impact in communities where technology doesn't reach.",
    bioP3:
      "My undergraduate thesis worked on fire mitigation using drones, combining electronics with a practical safety application.",
    aboutTitle: "About me",
    aboutP1:
      "I'm from Mistrato, a beautiful coffee-growing town in the heart of Risaralda. I spend my days building things: sumo robots, aircraft, and circuits that come to life. But in my free time, I lose myself in romance and fantasy webtoons, listen to synthwave and darkwave, play video games, and do crafts. Music, stories, creativity—all of that is just as important to me as electronics or programming.",
    aboutP2:
      "What really drives me is constant learning. I strive to understand something new every day, solve problems in different ways, and view engineering from new perspectives. I work in a field I love because I genuinely believe that robotics and mechatronics hold new and wonderful things to discover. My greatest satisfaction comes when my students see this too—when they discover that technology isn’t something distant, but rather a tool for creating and innovating. That’s where I find meaning.",
    aboutAlt:
      "Moments from Janny Duarte's journey in workshops, labs and competitions",
    mediaTitle: "In the media",
    mediaSubtitle: "Universidad Tecnológica de Pereira Communications",
    mediaLinkLabel: "Read article",
    mediaItems: [
      {
        title:
          "Del Aula al Cielo Mexicano: El Vuelo Histórico de la UTP en Aero Design México 2026",
        source: "Comunicaciones UTP",
        image: medio1,
        href: "https://comunicaciones.utp.edu.co/105965/facultades/facultades-facultades-8/del-aula-al-cielo-mexicano-el-vuelo-historico-de-la-utp-en-aero-design-mexico-2026/",
      },
      {
        title:
          "De Pereira para el mundo: El equipo de MacMotus UTP rinde cuentas tras su exitosa participación en México",
        source: "Comunicaciones UTP",
        image: medios2,
        href: "https://comunicaciones.utp.edu.co/108745/facultades/facultades-facultades-8/de-pereira-para-el-mundo-el-equipo-de-macmotus-utp-rinde-cuentas-tras-su-exitosa-participacion-en-mexico/",
      },
    ],
    skillsTitle: "Skills",
    skills: [
      {
        id: "electronic-systems",
        title: "Electronic systems and instrumentation",
        description:
          "Hands-on design, assembly and work with circuits, sensors, measurement and laboratory equipment.",
      },
      {
        id: "programming",
        title: "Programming and microcontrollers",
        description:
          "C++, Arduino and ESP32 programming for interactive systems and control solutions.",
      },
      {
        id: "robotics",
        title: "Educational robotics",
        description:
          "STEAM activity design and robotics teaching for primary and secondary students.",
      },
      {
        id: "aeronautics",
        title: "Aircraft design and construction",
        description:
          "Design, construction and evaluation of unmanned aircraft in engineering projects and competitions.",
      },
      {
        id: "uav",
        title: "UAV systems and safety",
        description:
          "Integration of drones, mechanisms and thermal monitoring for fire mitigation applications.",
      },
      {
        id: "research",
        title: "STEM research and outreach",
        description:
          "Presentation of research projects and science communication at academic meetings.",
      },
    ],
    experienceTitle: "Experience Timeline",
    experienceSubtitle: "Chronological order",
    prevAria: "Previous photo",
    nextAria: "Next photo",
    detailsLabel: "See more",
    closeLabel: "Close",
    experiences: [
      {
        id: "recreativo",
        period: "Recreational Workshop",
        title: "Aeronautical Workshop — Dosquebrada Neighborhood",
        description:
          "Recreational aeronautical workshop held on September 6th following the August 10th earthquake, aimed at providing a space for recreation, distraction and hope to children and families in the neighborhood through building and competing with paper airplanes, parachutes and cardboard rockets.",
        images: [dosq1, dosq2, dosq3, dosq4],
        alt: "Recreational aeronautical workshop in Dosquebrada neighborhood",
        modules: [
          {
            name: "Context",
            items: [
              "Post-disaster initiative: Held on September 6th, following the August 10th earthquake",
              "Objective: Community psychosocial support through education and recreation",
            ],
          },
          {
            name: "Activities",
            items: [
              "Paper airplane construction",
              "Parachute construction",
              "Cardboard rocket construction",
              "Competitions in each category",
              "Recreational games for children and adults",
            ],
          },
          {
            name: "My role",
            items: [
              "Led the paper airplane category",
              "Supported the organization of the rocket category",
              "Facilitator of the educational experience",
            ],
          },
          {
            name: "Impact",
            items: [
              "In a moment of uncertainty and fear, education became a tool for healing",
              "Children remembered that creativity, innovation and fun are still possible",
              "An afternoon where aeronautics was not just science, but hope",
            ],
          },
        ],
      },
      {
        id: "embera",
        period: "Aeronautics workshops",
        title: "Emberá Chamí Community",
        description:
          "I taught my first aeronautics workshops to students from a vulnerable population, the Emberá Chamí indigenous community, using a playful methodology closing with the construction of a wooden airplane.",
        images: [expEmbera, expEmbera2, Embera3, Embera4, Embera5],
        alt: "Aeronautics workshop with children from the Emberá Chamí community",
        modules: [
          {
            name: "Workshop content",
            items: [
              "History and the Dream of Flight",
              "Types of Aircraft",
              "Why do they fly?",
              "The Atmosphere",
              "Flight Control",
              "Playful activities and building a wooden airplane",
            ],
          },
        ],
      },
      {
        id: "colegios",
        period: "Aeronautics workshops - CIDT|UTP",
        title: "Schools",
        description:
          "I successfully scaled the initial aeronautics program to multiple schools in Pereira and Dosquebradas during 2024, demonstrating the replicability and demand for STEAM education in the region. This initiative was developed together with the CIDT research group and Universidad Tecnológica de Pereira.",
        images: [colegio, colegio2, colegio3, colegio4],
        alt: "Aeronautics workshop in a school classroom with model airplanes",
        modules: [
          {
            name: "Workshop content",
            items: [
              "History and the Dream of Flight",
              "Types of Aircraft",
              "Why do they fly?",
              "The Atmosphere",
              "Flight Control",
              "Playful activities and building a wooden airplane",
            ],
          },
          {
            name: "Impact",
            items: [
              "Replicating the curriculum across multiple institutions showed that a program designed with pedagogical rigor can be successfully adapted and scaled to different educational contexts in the region.",
            ],
          },
        ],
      },
      {
        id: "monitora",
        period: "Teaching Assistant",
        title: "Mechatronics Instrumentation Lab — UTP",
        description:
          "Academic and operational support at the instrumentation laboratory of Universidad Tecnológica de Pereira.",
        images: [expArduino],
        alt: "Mechatronics instrumentation lab with control and automation equipment",
        modules: [
          {
            name: "Responsibilities",
            items: [
              "Taught students the correct use of laboratory equipment",
              "Verified that the equipment inventory was complete",
              "Performed maintenance when required",
              "Supervised the labs and electronic components",
              "Provided electronic components to students who needed them",
            ],
          },
          {
            name: "Impact",
            items: [
              "Facilitated hands-on learning in instrumentation and control for students from different programs, ensuring equitable access to technical resources",
            ],
          },
        ],
      },
      {
        id: "macmotus",
        period: "March 2026 — Team Leader",
        title: "AERODESIGN MX (ADMX), Mexico",
        description:
          "I led the Macmotus team at the international AERODESIGN MX competition, whose rules govern the design, construction and operation of fixed-wing unmanned aircraft as a real engineering exercise for students.",
        images: [
          macmotus1,
          macmotus2,
          macmotus3,
          macmotus4,
          macmotus8,
          macmotus9,
          macmotus7,
          macmotus10, 
        ],
        alt: "Macmotus team with their fixed-wing aircraft at AERODESIGN MX",
        modules: [
          {
            name: "Cargo Challenge category",
            items: [
              "Optimizing design, structural efficiency, empty weight and solid payload capacity",
              "Flights with and without payload across different rounds",
            ],
          },
          {
            name: "Evaluation stages",
            items: [
              "Design Report",
              "Technical Presentation",
              "Technical Inspection and Flight Inspection",
            ],
          },
          {
            name: "Results",
            items: [
              "12th of 19 — a significant achievement for a multidisciplinary team (mechanics, physics and mechatronics) with no deep prior experience in model aircraft",
              "100% original Colombian aircraft design",
              "First Colombian team to compete in this type of competition",
            ],
          },
        ],
      },
      {
        id: "gimnasio",
        period: "Extracurricular teacher",
        title: "Robotics — Instituto Gimnasio de Pereira",
        description:
          "I teach robotics to more than 40 students from primary through secondary school, following a unified curriculum that develops technical skills and innovative thinking.",
        images: [gimnasio1, gimnasio3],
        alt: "Sumo robot competition with robotics club students",
        modules: [
          {
            name: "First semester",
            items: [
              "Complete instruction in the design, construction and programming of RC sumo robots, covering:",
              "Fundamental electronics",
              "C++ programming with Arduino",
              "Mechanical design",
              "Control and strategy",
            ],
          },
          {
            name: "Second semester",
            items: [
              "Expansion into advanced sensory systems for new projects, integrating",
              "Ultrasonic sensors",
              "Light sensors",
              "Distance sensors",
              "Practical applications for autonomous detection and response",
            ],
          },
          {
            name: "Impact",
            items: [
              "Students gain not only technical skills, but also the ability to think in terms of technological solutions, seeing robotics as a creative and accessible discipline.",
            ],
          },
        ],
      },
      {
        id: "tesis",
        period: "Undergraduate thesis",
        title: "Fire Mitigation Using UAVs",
        description:
          "We designed a mechanical gripper for an S500 quadcopter to transport and release 0.4 kg fire-extinguishing spheres. This system supports the Fire Department by monitoring temperatures in real time and mitigating fires in hard-to-reach areas.",
        images: [incendio1, incendio2, incendio3, incendio4],
        alt: "UAV drone used for fire mitigation",
        modules: [
          {
            name: "Impact",
            items: [
              "Operational Safety: The system enables tactical releases and thermal monitoring in hostile, hard-to-reach environments, significantly reducing firefighters' direct exposure to danger",
              "Multidisciplinary Optimization: I balanced strict payload weight (0.4 kg), current consumption and aerodynamic stability constraints in the aircraft coupling, ensuring safe flight conditions for the drone and the integrity of the transported payload",
            ],
          },
        ],
      },
      {
        id: "proyectos",
        period: "RC SUMO COMPETITION — GIMNASIO DE PEREIRA",
        title: "RC Sumo Competition — Initiative and Leadership",
        description:
          "I designed and implemented an internal RC sumo robotics competition for primary and secondary students, creating a gateway to ARENA UTP, an international robotics competition that brings together schools from the region and students from Universidad Tecnológica de Pereira.",
        images: [gimnasio1, gimnasio2,],
        alt: "Workbench with Arduino, Bluetooth module, motor driver, ESP32 microcontroller and electronic components",
        modules: [
          {
            name: "Bluetooth sumo car (Arduino)",
            items: [
              "Designed the rules and competition structure",
              "Defined evaluation criteria and rankings",
              "Created round-robin schedules for the matches",
              "Designed color-coded Excel score sheets to track results",
              "Managed prizes and recognition with a limited budget",
              "Served as referee throughout the competition",
              "The top three places in both categories automatically qualified for ARENA UTP",
            ],
          },
          {
            name: "Impact",
            items: [
              "Students experienced a clear pathway: internal competition → qualification → international competition. School leaders saw the program's value, and the competition had such an impact that it was incorporated as a scientific and sporting activity in the city's festivities.",
            ],
          },
        ],
      },
      {
        id: "vacaciones",
        period: "Teaching — UTP",
        title: '"Science and Technology Holidays" — One-week course for kids',
        description:
          "Course for children aged 9 to 14 covering aeronautics, robotics, IoT, design and programming. Hands-on, playful methodology; the course closes with the construction of a wooden airplane.",
        images: [vaca, vaca2],
        alt: "Children building robots and wooden airplanes in a science and technology course",
        modules: [
          {
            name: "Aeronautics Module (basic level)",
            items: [
              "History and the Dream of Flight",
              "Types of Aircraft",
              "Why do they fly?",
              "The Atmosphere",
              "Flight Control",
            ],
          },
          {
            name: "IoT Module",
            items: [
              "Arduino Cloud and smart devices",
              "Voice control with Alexa",
              "Physical board assembly",
            ],
          },
          {
            name: "Design Module",
            items: [
              "Object Representation",
              "Drawings and Dimensions",
              "Design Tools: Onshape",
              "Onshape practice guide: views (front, top and side) and technical drawings of real parts",
            ],
          },
          {
            name: "Robotics Module",
            items: [
              "STEAM methodology",
              "Anatomy of a Robot",
              "Electricity Concepts",
              "Programming (C++ or Python)",
              "Control and Connectivity",
              "Final Project: Smart Car",
            ],
          },
          {
            name: "Programming Module",
            items: [
              "C++ using an Arduino kit",
              "Hands-on practice: LEDs, sensors and more",
            ],
          },
          {
            name: "Impact",
            items: [
              "Early exposure to multiple technical disciplines allows children to identify their real STEAM interests before making long-term academic decisions. The course shows that technology is accessible, collaborative and focused on solving real problems, inspiring engineering vocations from an early age.",
            ],
          },
        ],
      },
    ],

    competitionsTitle: "Academic Competitions and Participations",
    competitions: [
      {
        id: "rredsi",
        period: "Research seedbed",
        title: "RREDSI",
        intro:
          "I presented my research at the departmental and regional meetings",
        modalTitle: "RREDSI — Regional Network of Research Seedbeds",
        detail:
          "A holding system for fire-extinguishing balls carried by an unmanned aerial vehicle, combining advanced electronics with practical safety and fire mitigation applications.",
        images: [compRredsi, research2],
        alt: "Research presentation at an academic research-seedbed meeting",
        modules: [
          { name: "Role", items: ["Speaker"] },
          {
            name: "Network",
            items: [
              "Regional Network of Research Seedbeds (RREDSI), made up of 49 higher education institutions from Caldas, Quindío, Risaralda and Valle del Cauca",
            ],
          },
          {
            name: "RREDSI goal",
            items: [
              "Foster research culture and critical thinking in undergraduate students through formative research work",
            ],
          },
          {
            name: "Participation",
            items: [
              "Departmental meeting: May 17, 2023",
              "Regional meeting: August 2023",
            ],
          },
          {
            name: "Project presented",
            items: [
              '"Development of a holding system for fire-extinguishing balls through an unmanned aerial vehicle"',
            ],
          },
        ],
      },
      {
        id: "arena",
        period: "Robotics competition",
        title: "ARENA UTP",
        intro:
          "I competed in two categories of the internal robotics competition",
        modalTitle: "ARENA UTP — Robotics Competition",
        detail:
          "Internal robotics competition of Universidad Tecnológica de Pereira.",
        images: [compArena],
        alt: "Radio-controlled robots competing in the sumo ring",
        modules: [
          {
            name: "Sumo RC",
            items: [
              "Radio-controlled robots compete in the classic sumo ring, where the goal is to push the opponent out of the area",
            ],
          },
          {
            name: "Soccer RC",
            items: [
              "Radio-controlled robots compete in exciting soccer matches, showing precision and strategy",
            ],
          },
          {
            name: "Participation",
            items: [
              "I competed in both categories, gaining experience in design, programming and control of robotic systems",
            ],
          },
        ],
      },
    ],
    studiesTitle: "Education",
    studies: [
      {
        year: "2026",
        title: "Mechatronics Engineering",
        place: "Universidad Tecnológica de Pereira",
        accent: "teal",
      },
      {
        year: "2026",
        title: "Mechatronics Technologist",
        place: "Universidad Tecnológica de Pereira",
        accent: "mid",
      },
      {
        year: "2023",
        title: "Mechatronics Technician",
        place: "Universidad Tecnológica de Pereira",
        accent: "mid",
      },
      {
        year: "2020",
        title: "Technologist in Mechatronic Automation Design and Integration",
        place: "SENA",
        accent: "mid",
      },
    ],
    certificatesTitle: "Certifications and Honors",
    certificates: [
      {
        name: "Speaker — XIII RREDSI Regional Research Seedbeds Meeting",
        issuer: "RREDSI · Universidad Católica de Pereira",
        year: "2023",
        dot: "bright",
        file: certRredsi2026,
      },
      {
        name: "Speaker — UAV fire-extinguishing ball holding system",
        issuer: "RREDSI · Universidad del Valle",
        year: "2023",
        dot: "bright",
        file: certPonente,
      },
      {
        name: "Workshop Leader — Robotics in rural schools of Risaralda",
        issuer: "UTP · Extension",
        year: "2024",
        dot: "bright",
        file: certRobotica,
      },
      {
        name: "Workshop Leader — UTP Aeronautics Competition 2024-2",
        issuer: "UTP · Extension",
        year: "2024",
        dot: "bright",
        file: certAeronautica,
      },
      {
        name: "Electronic Prototyping (20 hours)",
        issuer: "UTP · Basic Sciences",
        year: "2025",
        dot: "bright",
        file: certPrototipado,
      },
      {
        name: "Artificial Intelligence for Sales Decision-Making",
        issuer: "UTP · Workshop",
        year: "2026",
        dot: "bright",
        file: certIa,
      },
      {
        name: "Workshop Leader — Science and Technology Holidays",
        issuer: "UTP · CIDT",
        year: "2026",
        dot: "bright",
        file: certVacacional,
      },
      {
        name: "Distinguished Engineering Student",
        issuer: "UTP",
        year: "2026",
        dot: "bright",
        file: ingenieria,
      },
      {
        name: "Distinguished Technology Student",
        issuer: "UTP",
        year: "2026",
        dot: "bright",
        file: tecnologa,
      },
    ],
    certificateViewLabel: "View certificate",
    footerTagline: "Academic Portfolio © 2026",
    footerLinks: [
      { href: "#bio", label: "Profile" },
      { href: "#experiencia", label: "Experience" },
      { href: "#certificados", label: "Certificates" },
    ],
  },
  it: {
    langLabel: "ES",
    langAria: "Cambia lingua in spagnolo",
    name: "Janny Duarte",
    nav: [
      { href: "#bio", label: "Biografia" },
      { href: "#formacion", label: "Formazione" },
      { href: "#habilidades", label: "Competenze" },
      { href: "#experiencia", label: "Esperienza" },
      { href: "#competencias", label: "Competizioni" },
      { href: "#sobre-mi", label: "Su di me" },
      { href: "#medios", label: "Media" },
      { href: "#certificados", label: "Certificati" },
    ],
    heroKicker: "Portfolio Accademico",
    heroRole:
      "Ingegnere Meccatronico. Docente extracurricolare di Robotica presso l'Instituto Gimnasio de Pereira.",
    heroTagline:
      "Sistemi elettronici, controllo e innovazione. Competizioni internazionali di progettazione aeronautica ed educazione alla robotica.",
    heroCtaPrimary: "Vedi esperienza",
    heroCtaSecondary: "Biografia",
    heroAverageLabel: "Media di ingegneria",
    portraitAlt: "Ritratto accademico di Janny Duarte",
    bioTitle: "Profilo Accademico",
    bioP1:
    "Ingegnera Meccatronica con focus su elettronica e innovazione che trasforma problemi complessi in soluzioni funzionali. Ho guidato un team multidisciplinare senza esperienza precedente in aeromodellismo a una competizione internazionale AERODESIGN MX 2026, posizionandoli al 12º posto su 19 team con un veicolo aereo 100% originale e colombiano. Ho progettato un sistema UAV completo per la mitigazione degli incendi integrando elettronica avanzata con applicazioni pratiche di sicurezza. Ho scalato un programma educativo di aeronautica dalle comunità indigene Emberá Chamí a multiple istituzioni in Risaralda, dimostrando che l'educazione tecnica di qualità è replicabile e trasformativa.",
    bioP2:
    "La mia forza risiede nell'insegnamento applicato. I miei studenti non memorizzano concetti, scoprono che possono innovare, competere, risolvere. Ho lavorato con oltre 40 studenti simultaneamente in robotica, gestito laboratori di strumentazione per tre programmi accademici, e coordinato competizioni che ora sono riconosciute nelle festività della città. L'elettronica e l'ingegneria non sono teoriche per me: sono strumenti per un impatto reale nelle comunità dove la tecnologia non arriva.",
    bioP3:  
    "La mia tesi di laurea ha affrontato la mitigazione degli incendi tramite droni, unendo l'elettronica a un'applicazione pratica di sicurezza.",
    aboutTitle: "Su di me",
    aboutP1:
      "Vengo da Mistrato, una bellissima città del caffè nel cuore di Risaralda. Trascorro le mie giornate costruendo cose: robot sumo, aeroplani e circuiti che prendono vita. Ma nel tempo libero mi perdo in webtoon romantici e fantasy, ascolto synthwave e darkwave, gioco ai videogiochi e faccio lavoretti manuali. Musica, storie, creatività: tutto questo è importante per me quanto l'elettronica o la programmazione.",
    aboutP2:
      "Ciò che mi motiva davvero è l'apprendimento costante. Cerco di capire qualcosa di nuovo ogni giorno, risolvere problemi in modi diversi e vedere l'ingegneria da nuove prospettive. Lavoro in un campo che amo perché credo sinceramente che la robotica e la meccatronica abbiano cose nuove e meravigliose da scoprire. La mia più grande soddisfazione arriva quando anche i miei studenti lo vedono: quando scoprono che la tecnologia non è qualcosa di lontano, ma uno strumento per creare e innovare. È lì che trovo significato.",
    aboutAlt:
      "Momenti del percorso di Janny Duarte tra laboratori, laboratori didattici e competizioni",
    mediaTitle: "Sui media",
    mediaSubtitle: "Comunicazioni dell'Universidad Tecnológica de Pereira",
    mediaLinkLabel: "Leggi l'articolo",
    mediaItems: [
      {
        title:
          "Del Aula al Cielo Mexicano: El Vuelo Histórico de la UTP en Aero Design México 2026",
        source: "Comunicaciones UTP",
        image: medio1,
        href: "https://comunicaciones.utp.edu.co/105965/facultades/facultades-facultades-8/del-aula-al-cielo-mexicano-el-vuelo-historico-de-la-utp-en-aero-design-mexico-2026/",
      },
      {
        title:
          "De Pereira para el mundo: El equipo de MacMotus UTP rinde cuentas tras su exitosa participación en México",
        source: "Comunicaciones UTP",
        image: medios2,
        href: "https://comunicaciones.utp.edu.co/108745/facultades/facultades-facultades-8/de-pereira-para-el-mundo-el-equipo-de-macmotus-utp-rinde-cuentas-tras-su-exitosa-participacion-en-mexico/",
      },
    ],
    skillsTitle: "Competenze",
    skills: [
      {
        id: "electronic-systems",
        title: "Sistemi elettronici e strumentazione",
        description:
          "Progettazione pratica, assemblaggio e lavoro con circuiti, sensori, misurazione e apparecchiature di laboratorio.",
      },
      {
        id: "programming",
        title: "Programmazione e microcontrollori",
        description:
          "Programmazione in C++, Arduino ed ESP32 per sistemi interattivi e soluzioni di controllo.",
      },
      {
        id: "robotics",
        title: "Robotica educativa",
        description:
          "Progettazione di attività STEAM e insegnamento della robotica a studenti della primaria e della secondaria.",
      },
      {
        id: "aeronautics",
        title: "Progettazione e costruzione aeronautica",
        description:
          "Progettazione, costruzione e valutazione di velivoli senza pilota in progetti e competizioni di ingegneria.",
      },
      {
        id: "uav",
        title: "Sistemi UAV e sicurezza",
        description:
          "Integrazione di droni, meccanismi e monitoraggio termico per applicazioni di mitigazione degli incendi.",
      },
      {
        id: "research",
        title: "Ricerca e divulgazione STEM",
        description:
          "Presentazione di progetti di ricerca e comunicazione scientifica in incontri accademici.",
      },
    ],
    experienceTitle: "Percorso di Esperienza",
    experienceSubtitle: "Ordine cronologico",
    prevAria: "Foto precedente",
    nextAria: "Foto successiva",
    detailsLabel: "Vedi di più",
    closeLabel: "Chiudi",
    experiences: [
      {
        id: "recreativo",
        period: "Laboratorio Ricreativo",
        title: "Laboratorio Aeronautico — Quartiere Dosquebrada",
        description:
          "Laboratorio aeronautico ricreativo tenutosi il 6 settembre a seguito del terremoto del 10 agosto, volto a fornire uno spazio di ricreazione, distrazione e speranza ai bambini e alle famiglie del quartiere attraverso la costruzione e la competizione di aerei di carta, paracadute e razzi di cartone.",
        images: [dosq1, dosq2, dosq3, dosq4],
        alt: "Laboratorio aeronautico ricreativo nel quartiere di Dosquebrada",
        modules: [
          {
            name: "Contesto",
            items: [
              "Iniziativa post-disastro: Tenutasi il 6 settembre, a seguito del terremoto dell'10 agosto",
              "Obiettivo: Sostegno psicosociale comunitario attraverso educazione e ricreazione",
            ],
          },
          {
            name: "Attività",
            items: [
              "Costruzione di aerei di carta",
              "Costruzione di paracadute",
              "Costruzione di razzi di cartone",
              "Competizioni in ogni categoria",
              "Giochi ricreativi per bambini e adulti",
            ],
          },
          {
            name: "Il mio ruolo",
            items: [
              "Ho guidato la categoria degli aerei di carta",
              "Ho supportato l'organizzazione della categoria dei razzi",
              "Facilitatrice dell'esperienza educativa",
            ],
          },
          {
            name: "Impatto",
            items: [
              "In un momento di incertezza e paura, l'educazione è diventata uno strumento di guarigione",
              "I bambini hanno ricordato che la creatività, l'innovazione e il divertimento sono ancora possibili",
              "Un pomeriggio in cui l'aeronautica non era solo scienza, ma speranza",
            ],
          },
        ],
      },

      {
        id: "embera",
        period: "Laboratori di aeronautica",
        title: "Comunità Emberá Chamí",
        description:
          "Ho tenuto i primi laboratori di aeronautica a studenti di una popolazione vulnerabile, la comunità indigena Emberá Chamí, con una metodologia ludica e la costruzione finale di un aeroplano di legno.",
        images: [expEmbera, expEmbera2, Embera3, Embera4, Embera5],
        alt: "Laboratorio di aeronautica con bambini della comunità Emberá Chamí",
        modules: [
          {
            name: "Contenuti del laboratorio",
            items: [
              "Storia e il sogno di volare",
              "Tipi di aeromobili",
              "Perché volano?",
              "L'atmosfera",
              "Controllo del volo",
              "Attività ricreative e costruzione di un aeroplano di legno",
            ],
          },
        ],
      },
      {
        id: "colegios",
        period: "Laboratori di aeronautica - CIDT|UTP",
        title: "Scuole",
        description:
          "Ho ampliato con successo il programma iniziale di aeronautica a diverse scuole di Pereira e Dosquebradas nel 2024, dimostrando la replicabilità e la domanda di educazione STEAM nella regione. L'iniziativa è stata sviluppata insieme al gruppo di ricerca CIDT e all'Universidad Tecnológica de Pereira.",
        images: [colegio, colegio2, colegio3, colegio4],
        alt: "Laboratorio di aeronautica in un'aula scolastica con modellini di aerei",
        modules: [
          {
            name: "Contenuti del laboratorio",
            items: [
              "Storia e il sogno di volare",
              "Tipi di aeromobili",
              "Perché volano?",
              "L'atmosfera",
              "Controllo del volo",
              "Attività ricreative e costruzione di un aeroplano di legno",
            ],
          },
          {
            name: "Impatto",
            items: [
              "La replica del programma in più istituti ha dimostrato che un percorso progettato con rigore pedagogico può essere adattato e ampliato con successo a diversi contesti educativi della regione.",
            ],
          },
        ],
      },
      {
        id: "monitora",
        period: "Assistente di laboratorio",
        title: "Laboratorio di Strumentazione Meccatronica — UTP",
        description:
          "Supporto accademico e operativo del laboratorio di strumentazione dell'Universidad Tecnológica de Pereira.",
        images: [expArduino],
        alt: "Laboratorio di strumentazione meccatronica con apparecchiature di controllo e automazione",
        modules: [
          {
            name: "Mansioni",
            items: [
              "Ho insegnato agli studenti l'uso corretto delle apparecchiature del laboratorio",
              "Ho verificato la completezza dell'inventario delle apparecchiature",
              "Ho eseguito manutenzioni quando necessario",
              "Ho supervisionato i laboratori e i componenti elettronici",
              "Ho fornito componenti elettronici agli studenti che ne avevano bisogno",
            ],
          },
          {
            name: "Impatto",
            items: [
              "Ho facilitato l'apprendimento pratico della strumentazione e del controllo per studenti di diversi programmi, garantendo un accesso equo alle risorse tecniche",
            ],
          },
        ],
      },
      {
        id: "macmotus",
        period: "Marzo 2026 — Capo squadra",
        title: "AERODESIGN MX (ADMX), Messico",
        description:
          "Ho guidato il team Macmotus nella competizione internazionale AERODESIGN MX, il cui regolamento disciplina progettazione, costruzione e operazione di velivoli senza pilota ad ala fissa come esercizio di ingegneria reale per studenti.",
        images: [
          macmotus1,
          macmotus2,
          macmotus3,
          macmotus4,
          macmotus8,
          macmotus9,
          macmotus7,
          macmotus10,
        ],
        alt: "Team Macmotus con il velivolo ad ala fissa ad AERODESIGN MX",
        modules: [
          {
            name: "Categoria Cargo Challenge",
            items: [
              "Ottimizzazione del progetto, efficienza strutturale, peso a vuoto e capacità di carico solido",
              "Voli con e senza carico in diversi round",
            ],
          },
          {
            name: "Fasi di valutazione",
            items: [
              "Relazione di progetto",
              "Presentazione tecnica",
              "Ispezione tecnica e ispezione di volo",
            ],
          },
          {
            name: "Risultati",
            items: [
              "12° posto su 19, risultato significativo per un team multidisciplinare (meccanica, fisica e meccatronica) senza precedente esperienza approfondita nell'aeromodellismo",
              "Velivolo con progetto 100% originale e colombiano",
              "Primo team colombiano a partecipare a questo tipo di competizione",
            ],
          },
        ],
      },
      {
        id: "gimnasio",
        period: "Docente extracurricolare",
        title: "Robotica — Instituto Gimnasio de Pereira",
        description:
          "Insegno robotica a più di 40 studenti dalla scuola primaria alla secondaria, seguendo un piano di studi unificato che sviluppa competenze tecniche e pensiero innovativo.",
        images: [gimnasio1, gimnasio3],
        alt: "Competizione di robot sumo con studenti del club di robotica",
        modules: [
          {
            name: "Primo semestre",
            items: [
              "Insegnamento completo della progettazione, costruzione e programmazione di robot sumo RC, comprendendo:",
              "Elettronica fondamentale",
              "Programmazione C++ con Arduino",
              "Progettazione meccanica",
              "Controllo e strategia",
            ],
          },
          {
            name: "Secondo semestre",
            items: [
              "Espansione verso sistemi sensoriali avanzati per nuovi progetti, integrando",
              "Sensori ultrasonici",
              "Sensori di luce",
              "Sensori di distanza",
              "Applicazioni pratiche di rilevamento e risposta autonoma",
            ],
          },
          {
            name: "Impatto",
            items: [
              "Gli studenti acquisiscono non solo competenze tecniche, ma anche la capacità di pensare in termini di soluzioni tecnologiche, vedendo la robotica come una disciplina creativa e accessibile.",
            ],
          },
        ],
      },
      {
        id: "tesis",
        period: "Tesi di laurea",
        title: "Mitigazione degli incendi tramite UAV",
        description:
          "Abbiamo progettato una pinza meccanica per un quadricottero S500, destinata a trasportare e rilasciare sfere antincendio da 0,4 kg. Il sistema supporta i Vigili del Fuoco monitorando le temperature in tempo reale e mitigando gli incendi in aree difficili da raggiungere.",
        images: [incendio1, incendio2, incendio3, incendio4],
        alt: "Drone UAV utilizzato per la mitigazione degli incendi",
        modules: [
          {
            name: "Impatto",
            items: [
              "Sicurezza operativa: il sistema consente rilasci tattici e monitoraggio termico in ambienti ostili e difficili da raggiungere, riducendo significativamente l'esposizione diretta dei vigili del fuoco al pericolo",
              "Ottimizzazione multidisciplinare: ho bilanciato i rigidi vincoli di peso del carico utile (0,4 kg), consumo di corrente e stabilità aerodinamica nell'aggancio all'aeromobile, garantendo condizioni di volo sicure per il drone e l'integrità del carico trasportato",
            ],
          },
        ],
      },
      {
        id: "proyectos",
        period: "COMPETIZIONE SUMO RC — GIMNASIO DE PEREIRA",
        title: "Competizione Sumo RC — Iniziativa e Leadership",
        description:
          "Ho progettato e realizzato una competizione interna di robotica sumo RC per studenti della primaria e della secondaria, creando un percorso di accesso ad ARENA UTP, una competizione internazionale di robotica che riunisce scuole della regione e studenti dell'Universidad Tecnológica de Pereira.",
        images: [ gimnasio1, gimnasio2],
        alt: "Banco di lavoro con Arduino, modulo Bluetooth, driver dei motori, microcontrollore ESP32 e componenti elettronici",
        modules: [
          {
            name: "Auto sumo con Bluetooth (Arduino)",
            items: [
              "Ho progettato il regolamento e la struttura competitiva",
              "Ho definito i criteri di valutazione e le classifiche",
              "Ho creato calendari round robin per gli incontri",
              "Ho progettato schede di punteggio in Excel con codici colore per seguire i risultati",
              "Ho gestito premi e riconoscimenti con un budget limitato",
              "Ho svolto il ruolo di arbitro per tutta la competizione",
              "I primi tre classificati di entrambe le categorie si sono qualificati automaticamente ad ARENA UTP",
            ],
          },
          {
            name: "Impatto",
            items: [
              "Gli studenti hanno seguito un percorso chiaro: competizione interna → qualificazione → competizione internazionale. I dirigenti hanno riconosciuto il valore del programma e l'impatto della competizione ha portato alla sua inclusione tra le attività scientifiche e sportive delle festività cittadine.",
            ],
          },
        ],
      },
      {
        id: "vacaciones",
        period: "Docenza — UTP",
        title:
          '"Vacanze di Scienza e Tecnologia" — Corso di una settimana per bambini',
        description:
          "Corso per bambini dai 9 ai 14 anni su aeronautica, robotica, IoT, design e programmazione. Metodologia basata su attività ricreative; il corso si chiude con la costruzione di un aeroplano di legno.",
        images: [vaca, vaca2],
        alt: "Bambini che costruiscono robot e aeroplani di legno in un corso di scienza e tecnologia",
        modules: [
          {
            name: "Modulo di Aeronautica (livello base)",
            items: [
              "Storia e il sogno di volare",
              "Tipi di aeromobili",
              "Perché volano?",
              "L'atmosfera",
              "Controllo del volo",
            ],
          },
          {
            name: "Modulo IoT",
            items: [
              "Arduino Cloud e dispositivi intelligenti",
              "Controllo vocale con Alexa",
              "Assemblaggio fisico delle schede",
            ],
          },
          {
            name: "Modulo di Design",
            items: [
              "Rappresentazione degli oggetti",
              "Disegni e quote",
              "Strumenti di design: Onshape",
              "Guida pratica a Onshape: viste (prospetto, pianta e profilo) e disegni tecnici di pezzi reali",
            ],
          },
          {
            name: "Modulo di Robotica",
            items: [
              "Metodologia STEAM",
              "L'anatomia del robot",
              "Concetti di elettricità",
              "Programmazione (C++ o Python)",
              "Controllo e connessione",
              "Progetto finale: Smart Car",
            ],
          },
          {
            name: "Modulo di Programmazione",
            items: [
              "Linguaggio C++ con kit Arduino",
              "Pratica: accensione di LED, gestione di sensori e altro",
            ],
          },
          {
            name: "Impatto",
            items: [
              "L'esposizione precoce a più discipline tecniche permette ai bambini di identificare i propri interessi reali nell'ambito STEAM prima di prendere decisioni accademiche a lungo termine. Il corso dimostra che la tecnologia è accessibile, collaborativa e orientata alla soluzione di problemi reali, ispirando vocazioni ingegneristiche fin dalla giovane età.",
            ],
          },
        ],
      },
    ],

    competitionsTitle: "Competizioni e Partecipazioni Accademiche",
    competitions: [
      {
        id: "rredsi",
        period: "Gruppo di ricerca",
        title: "RREDSI",
        intro:
          "Ho presentato la mia ricerca all'incontro dipartimentale e regionale",
        modalTitle: "RREDSI — Rete Regionale dei Gruppi di Ricerca",
        detail:
          "Sistema di aggancio di sfere antincendio trasportate da un veicolo aereo senza pilota, che unisce elettronica avanzata ad applicazioni pratiche di sicurezza e mitigazione degli incendi.",
        images: [compRredsi, research2],
        alt: "Presentazione della ricerca a un incontro accademico",
        modules: [
          { name: "Ruolo", items: ["Relatrice"] },
          {
            name: "Rete",
            items: [
              "Rete Regionale dei Gruppi di Ricerca (RREDSI), composta da 49 istituzioni di istruzione superiore di Caldas, Quindío, Risaralda e Valle del Cauca",
            ],
          },
          {
            name: "Obiettivo di RREDSI",
            items: [
              "Promuovere la cultura della ricerca e il pensiero critico negli studenti universitari attraverso esercizi di ricerca formativa",
            ],
          },
          {
            name: "Partecipazione",
            items: [
              "Incontro dipartimentale: 17 maggio 2023",
              "Incontro regionale: agosto 2023",
            ],
          },
          {
            name: "Progetto presentato",
            items: [
              '"Sviluppo di un sistema di aggancio di sfere antincendio tramite un veicolo aereo senza pilota"',
            ],
          },
        ],
      },
      {
        id: "arena",
        period: "Competizione di robotica",
        title: "ARENA UTP",
        intro:
          "Ho partecipato a due categorie della competizione interna di robotica",
        modalTitle: "ARENA UTP — Competizione di Robotica",
        detail:
          "Competizione interna di robotica della Universidad Tecnológica de Pereira.",
        images: [compArena],
        alt: "Robot radiocomandati in gara nel ring di sumo",
        modules: [
          {
            name: "Sumo RC",
            items: [
              "Robot radiocomandati competono nel classico ring di sumo: l'obiettivo è spingere l'avversario fuori dall'area",
            ],
          },
          {
            name: "Soccer RC",
            items: [
              "Robot radiocomandati competono in appassionanti partite di calcio, dimostrando precisione e strategia",
            ],
          },
          {
            name: "Partecipazione",
            items: [
              "Ho gareggiato in entrambe le categorie, acquisendo esperienza nella progettazione, programmazione e controllo di sistemi robotici",
            ],
          },
        ],
      },
    ],
    studiesTitle: "Formazione Accademica",
    studies: [
      {
        year: "2026",
        title: "Ingegneria Meccatronica",
        place: "Universidad Tecnológica de Pereira",
        accent: "teal",
      },
      {
        year: "2026",
        title: "Tecnologa in Meccatronica",
        place: "Universidad Tecnológica de Pereira",
        accent: "mid",
      },
      {
        year: "2023",
        title: "Tecnica in Meccatronica",
        place: "Universidad Tecnológica de Pereira",
        accent: "mid",
      },
      {
        year: "2020",
        title:
          "Tecnologa in Progettazione e Integrazione di Automazione Meccatronica",
        place: "SENA",
        accent: "mid",
      },
    ],
    certificatesTitle: "Certificazioni e Riconoscimenti",
    certificates: [
      {
        name: "Relatrice — XIII Incontro Regionale RREDSI",
        issuer: "RREDSI · Universidad Católica de Pereira",
        year: "2023",
        dot: "bright",
        file: certRredsi2026,
      },
      {
        name: "Relatrice — Sistema di aggancio di sfere antincendio con UAV",
        issuer: "RREDSI · Universidad del Valle",
        year: "2023",
        dot: "bright",
        file: certPonente,
      },
      {
        name: "Relatrice — Robotica nelle scuole rurali di Risaralda",
        issuer: "UTP · Estensione",
        year: "2024",
        dot: "bright",
        file: certRobotica,
      },
      {
        name: "Relatrice — Competizione di Aeronautica UTP 2024-2",
        issuer: "UTP · Estensione",
        year: "2024",
        dot: "bright",
        file: certAeronautica,
      },
      {
        name: "Prototipazione Elettronica (20 ore)",
        issuer: "UTP · Scienze di Base",
        year: "2025",
        dot: "bright",
        file: certPrototipado,
      },
      {
        name: "Intelligenza artificiale per le decisioni di vendita",
        issuer: "UTP · Workshop",
        year: "2026",
        dot: "bright",
        file: certIa,
      },
      {
        name: "Relatrice — Vacanze di Scienza e Tecnologia",
        issuer: "UTP · CIDT",
        year: "2026",
        dot: "bright",
        file: certVacacional,
      },
      {
        name: "Studentessa Distinta di Ingegneria",
        issuer: "UTP",
        year: "2026",
        dot: "bright",
        file: ingenieria,
      },
      {
        name: "Studentessa Distinta di Tecnologia",
        issuer: "UTP",
        year: "2026",
        dot: "bright",
        file: tecnologa,
      },
    ],
    certificateViewLabel: "Vedi certificato",
    footerTagline: "Portfolio Accademico © 2026",
    footerLinks: [
      { href: "#bio", label: "Profilo" },
      { href: "#experiencia", label: "Esperienza" },
      { href: "#certificados", label: "Certificati" },
    ],
  },
} as const;
