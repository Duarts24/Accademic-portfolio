import { n as portrait_default } from "./router-D7ZD-h98.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight, FileText, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/assets/research-1.jpg
var research_1_default = "/assets/research-1-C3lSgVJv.jpg";
//#endregion
//#region src/assets/research-2.jpg
var research_2_default = "/assets/research-2-D9M4vpdd.jpg";
//#endregion
//#region src/assets/research-3.jpg
var research_3_default = "/assets/research-3-DNh4BWJX.jpg";
//#endregion
//#region src/assets/research-4.jpg
var research_4_default = "/assets/research-4-CkdhrEd_.jpg";
//#endregion
//#region src/assets/exp-embera.jpg
var exp_embera_default = "/assets/exp-embera-CabwXcP-.jpg";
//#endregion
//#region src/assets/exp-colegios.jpg
var exp_colegios_default = "/assets/exp-colegios-C-pfQjhs.jpg";
//#endregion
//#region src/assets/exp-sumo.jpg
var exp_sumo_default = "/assets/exp-sumo-BXgjtmQe.jpg";
//#endregion
//#region src/assets/exp-arduino.jpg
var exp_arduino_default = "/assets/exp-arduino-C-l3CvHQ.jpg";
//#endregion
//#region src/assets/comp-rredsi.jpg
var comp_rredsi_default = "/assets/comp-rredsi-7qH1k3JN.jpg";
//#endregion
//#region src/assets/comp-arena.jpg
var comp_arena_default = "/assets/comp-arena-BN5TRJ_p.jpg";
//#endregion
//#region src/assets/certs/524 - Certificado IA.pdf
var _524___Certificado_IA_default =
  "/assets/524%20-%20Certificado%20IA-D955z9qb.pdf";
//#endregion
//#region src/assets/certs/1086 - Certificado vacaionalpdf.pdf
var _1086___Certificado_vacaionalpdf_default =
  "/assets/1086%20-%20Certificado%20vacaionalpdf-B4O7O_Xh.pdf";
//#endregion
//#region src/assets/certs/3554 - Certificado robotica 2024.pdf
var _3554___Certificado_robotica_2024_default =
  "/assets/3554%20-%20Certificado%20robotica%202024-DbqfUqym.pdf";
//#endregion
//#region src/assets/certs/3572 - Certificado aeronautica.pdf
var _3572___Certificado_aeronautica_default =
  "/assets/3572%20-%20Certificado%20aeronautica-Bq6zCLN3.pdf";
//#endregion
//#region src/assets/certs/Certificacion Prototipado.pdf
var Certificacion_Prototipado_default =
  "/assets/Certificacion%20Prototipado-DCAga3oK.pdf";
//#endregion
//#region src/assets/certs/Certificado_XIII Encuentro Regional de Semilleros de Investigacion RREDSI 2023-16 de agosto de 2026.pdf
var Certificado_XIII_Encuentro_Regional_de_Semilleros_de_Investigacion_RREDSI_2023_16_de_agosto_de_2026_default =
  "/assets/Certificado_XIII%20Encuentro%20Regional%20de%20Semilleros%20de%20Investigacion%20RREDSI%202023-16%20de%20agosto%20de%202026-BtaSnB6H.pdf";
//#endregion
//#region src/assets/certs/certificadoPonente.pdf
var certificadoPonente_default = "/assets/certificadoPonente-B88OHi2p.pdf";
//#endregion
//#region src/lib/portfolio-content.ts
var LANG_ORDER = ["es", "en", "it"];
var CONTENT = {
  es: {
    langLabel: "EN",
    langAria: "Cambiar idioma a inglés",
    name: "Janny Duarte",
    nav: [
      {
        href: "#bio",
        label: "Biografía",
      },
      {
        href: "#formacion",
        label: "Formación",
      },
      {
        href: "#experiencia",
        label: "Experiencia",
      },
      {
        href: "#competencias",
        label: "Competencias",
      },
      {
        href: "#certificados",
        label: "Certificados",
      },
    ],
    heroKicker: "Portafolio Académico",
    heroRole:
      "Ingeniera en Mecatrónica. Docente Extracurricular de Robótica en el Instituto Gimnasio de Pereira.",
    heroTagline:
      "Sistemas electrónicos, control e innovación. Competencias internacionales de diseño aeronáutico y educación en robótica.",
    heroCtaPrimary: "Ver experiencia",
    heroCtaSecondary: "Biografía",
    portraitAlt: "Retrato académico de Janny Duarte",
    bioTitle: "Perfil Académico",
    bioP1:
      "Ingeniera Mecatrónica con formación en instrumentación y electrónica. Me interesa resolver problemas prácticos, especialmente en el área de sistemas electrónicos y control.",
    bioP2:
      "He tenido experiencia en competencias de diseño aeronáutico, trabajo en laboratorio y desarrollo de proyectos que integran electrónica con aplicaciones reales. Enseño robótica de forma extracurricular en diferentes contextos porque me gusta compartir lo que aprendo.",
    bioP3:
      "Mi tesis de pregrado trabajó en mitigación de incendios mediante drones, combinando electrónica con una aplicación práctica de seguridad.",
    experienceTitle: "Trayectoria de Experiencia",
    experienceSubtitle: "Orden cronológico",
    prevAria: "Foto anterior",
    nextAria: "Foto siguiente",
    detailsLabel: "Ver más",
    closeLabel: "Cerrar",
    experiences: [
      {
        id: "embera",
        period: "Talleres de aeronáutica",
        title: "Comunidad Emberá Chamí",
        description:
          "Dicté los primeros talleres de aeronáutica a estudiantes de población vulnerable de la comunidad indígena Emberá Chamí, con metodología recreativa y cierre en la construcción de un avión de madera.",
        images: [exp_embera_default, research_4_default],
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
        ],
      },
      {
        id: "colegios",
        period: "Talleres de aeronáutica",
        title: "Colegios",
        description:
          "Repliqué posteriormente los mismos talleres en diferentes colegios. El currículo se mantuvo idéntico; lo que cambió fue la población estudiantil atendida.",
        images: [exp_colegios_default, research_4_default],
        alt: "Taller de aeronáutica en un aula de colegio con modelos de aviones",
      },
      {
        id: "monitora",
        period: "Monitora",
        title: "Laboratorio de Instrumentación Mecatrónica — UTP",
        description:
          "Apoyo académico y operativo del laboratorio de instrumentación de la Universidad Tecnológica de Pereira.",
        images: [research_1_default, exp_arduino_default],
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
        ],
      },
      {
        id: "macmotus",
        period: "Marzo 2026 — Líder de equipo",
        title: "Macmotus — AERODESIGN MX (ADMX), México",
        description:
          "Lideré el equipo Macmotus en la competencia internacional AERODESIGN MX, cuyo reglamento regula el diseño, construcción y operación de aeronaves no tripuladas de ala fija como ejercicio de ingeniería real para estudiantes.",
        images: [research_3_default, research_2_default],
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
          "Enseño robótica a estudiantes desde primaria hasta secundaria, con proyectos aplicados y competencias internas.",
        images: [exp_sumo_default, exp_arduino_default],
        alt: "Competencia de robots sumo con estudiantes del club de robótica",
        modules: [
          {
            name: "Proyecto final",
            items: [
              "Robot sumo con ESP32 en ambos niveles",
              "Primaria: control con mando de videojuego",
              "Secundaria: control desde el celular con la app Blynk",
            ],
          },
          {
            name: "Otras actividades",
            items: [
              "Talleres voluntarios de robótica en escuelas rurales de Risaralda",
              "Organización de una competencia de robots sumo para el club de robótica (primaria y secundaria): cronogramas tipo round robin, hojas de puntuación en Excel con código de colores y gestión de regalos con presupuesto limitado",
              "En preparación: capítulo de libro académico relacionado con la competencia de sumo robótica",
            ],
          },
        ],
      },
      {
        id: "tesis",
        period: "Tesis de pregrado",
        title: "Mitigación de Incendios mediante UAV",
        description:
          "Trabajo de grado enfocado en el uso de drones (UAV) para la detección y mitigación de incendios, integrando sensores, navegación autónoma y análisis de datos.",
        images: [research_2_default, research_3_default],
        alt: "Drone UAV utilizado para mitigación de incendios",
      },
      {
        id: "proyectos",
        period: "Proyectos técnicos recientes",
        title: "Auto sumo Bluetooth y robot sumo ESP32",
        description:
          "Desarrollo y depuración de robots de competencia con electrónica embebida.",
        images: [exp_arduino_default, exp_sumo_default],
        alt: "Banco de trabajo con Arduino, módulo Bluetooth y driver de motores",
        modules: [
          {
            name: "Auto sumo con Bluetooth (Arduino)",
            items: [
              "Módulo Bluetooth tipo HC-06 y driver de motores L298N",
              'App "Arduino Bluetooth Controller" (Giumig Apps)',
              "Diagnóstico y solución de desconexiones por insuficiencia de energía del regulador 5V del L298N (resuelto separando fuentes de poder)",
            ],
          },
          {
            name: "Robot sumo con ESP32 + Bluepad32",
            items: [
              "Resolución de conflictos de librerías e incompatibilidades entre las APIs de ESP32 core v2 y v3",
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
        images: [research_4_default, exp_colegios_default, exp_arduino_default],
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
        images: [comp_rredsi_default, research_2_default],
        alt: "Presentación de investigación en un encuentro académico de semilleros",
        modules: [
          {
            name: "Rol",
            items: ["Ponente"],
          },
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
        images: [comp_arena_default, exp_sumo_default],
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
        name: "Uso de la inteligencia artificial para la toma de decisiones en ventas",
        issuer: "UTP · Taller",
        year: "2026",
        dot: "teal",
        file: _524___Certificado_IA_default,
      },
      {
        name: "Tallerista — Vacaciones de Ciencia y Tecnología",
        issuer: "UTP · CIDT",
        year: "2026",
        dot: "bright",
        file: _1086___Certificado_vacaionalpdf_default,
      },
      {
        name: "Ponente — XIII Encuentro Regional de Semilleros RREDSI",
        issuer: "RREDSI · Tuluá",
        year: "2026",
        dot: "teal",
        file: Certificado_XIII_Encuentro_Regional_de_Semilleros_de_Investigacion_RREDSI_2023_16_de_agosto_de_2026_default,
      },
      {
        name: "Prototipado Electrónico (20 horas)",
        issuer: "UTP · Ciencias Básicas",
        year: "2025",
        dot: "bright",
        file: Certificacion_Prototipado_default,
      },
      {
        name: "Tallerista — Robótica en colegios rurales de Risaralda",
        issuer: "UTP · Extensión",
        year: "2024",
        dot: "teal",
        file: _3554___Certificado_robotica_2024_default,
      },
      {
        name: "Tallerista — Competencia de Aeronáutica UTP 2024-2",
        issuer: "UTP · Extensión",
        year: "2024",
        dot: "bright",
        file: _3572___Certificado_aeronautica_default,
      },
      {
        name: "Ponente — Sistema de sujeción de balones para incendios con UAV",
        issuer: "RREDSI · Cali",
        year: "2023",
        dot: "teal",
        file: certificadoPonente_default,
      },
    ],
    certificateViewLabel: "Ver certificado",
    footerTagline: "Portafolio Académico © 2026",
    footerLinks: [
      {
        href: "#bio",
        label: "Perfil",
      },
      {
        href: "#experiencia",
        label: "Experiencia",
      },
      {
        href: "#certificados",
        label: "Certificados",
      },
    ],
  },
  en: {
    langLabel: "IT",
    langAria: "Cambia lingua in italiano",
    name: "Janny Duarte",
    nav: [
      {
        href: "#bio",
        label: "Biography",
      },
      {
        href: "#formacion",
        label: "Education",
      },
      {
        href: "#experiencia",
        label: "Experience",
      },
      {
        href: "#competencias",
        label: "Competitions",
      },
      {
        href: "#certificados",
        label: "Certificates",
      },
    ],
    heroKicker: "Academic Portfolio",
    heroRole:
      "Mechatronics Engineer. Extracurricular Robotics Teacher at Instituto Gimnasio de Pereira.",
    heroTagline:
      "Electronic systems, control and innovation. International aircraft design competitions and robotics education.",
    heroCtaPrimary: "View experience",
    heroCtaSecondary: "Biography",
    portraitAlt: "Academic portrait of Janny Duarte",
    bioTitle: "Academic Profile",
    bioP1:
      "Mechatronics engineer trained in instrumentation and electronics. I enjoy solving practical problems, especially in electronic systems and control.",
    bioP2:
      "I have experience in aircraft design competitions, laboratory work and the development of projects that combine electronics with real-world applications. I teach robotics extracurricularly in different settings because I like sharing what I learn.",
    bioP3:
      "My undergraduate thesis worked on fire mitigation using drones, combining electronics with a practical safety application.",
    experienceTitle: "Experience Timeline",
    experienceSubtitle: "Chronological order",
    prevAria: "Previous photo",
    nextAria: "Next photo",
    detailsLabel: "See more",
    closeLabel: "Close",
    experiences: [
      {
        id: "embera",
        period: "Aeronautics workshops",
        title: "Emberá Chamí Community",
        description:
          "I taught my first aeronautics workshops to students from a vulnerable population, the Emberá Chamí indigenous community, using a playful methodology closing with the construction of a wooden airplane.",
        images: [exp_embera_default, research_4_default],
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
        period: "Aeronautics workshops",
        title: "Schools",
        description:
          "I later replicated the same workshops in different schools. The curriculum stayed identical; what changed was the student population served.",
        images: [exp_colegios_default, research_4_default],
        alt: "Aeronautics workshop in a school classroom with model airplanes",
      },
      {
        id: "monitora",
        period: "Teaching Assistant",
        title: "Mechatronics Instrumentation Lab — UTP",
        description:
          "Academic and operational support at the instrumentation laboratory of Universidad Tecnológica de Pereira.",
        images: [research_1_default, exp_arduino_default],
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
        ],
      },
      {
        id: "macmotus",
        period: "March 2026 — Team Leader",
        title: "Macmotus — AERODESIGN MX (ADMX), Mexico",
        description:
          "I led the Macmotus team at the international AERODESIGN MX competition, whose rules govern the design, construction and operation of fixed-wing unmanned aircraft as a real engineering exercise for students.",
        images: [research_3_default, research_2_default],
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
          "I teach robotics to students from primary through secondary school, with applied projects and internal competitions.",
        images: [exp_sumo_default, exp_arduino_default],
        alt: "Sumo robot competition with robotics club students",
        modules: [
          {
            name: "Final project",
            items: [
              "Sumo robot with ESP32 at both levels",
              "Primary: controlled with a video game controller",
              "Secondary: controlled from a phone using the Blynk app",
            ],
          },
          {
            name: "Other activities",
            items: [
              "Volunteer robotics workshops in rural schools of Risaralda",
              "Organized a sumo robot competition for the robotics club (primary and secondary): round-robin schedules, color-coded Excel scoring sheets and prize management on a limited budget",
              "In preparation: an academic book chapter related to the sumo robotics competition",
            ],
          },
        ],
      },
      {
        id: "tesis",
        period: "Undergraduate thesis",
        title: "Fire Mitigation Using UAVs",
        description:
          "Undergraduate thesis focused on using drones (UAVs) for fire detection and mitigation, integrating sensors, autonomous navigation and data analysis.",
        images: [research_2_default, research_3_default],
        alt: "UAV drone used for fire mitigation",
      },
      {
        id: "proyectos",
        period: "Recent technical projects",
        title: "Bluetooth sumo car and ESP32 sumo robot",
        description:
          "Development and debugging of competition robots with embedded electronics.",
        images: [exp_arduino_default, exp_sumo_default],
        alt: "Workbench with Arduino, Bluetooth module and motor driver",
        modules: [
          {
            name: "Bluetooth sumo car (Arduino)",
            items: [
              "HC-06 Bluetooth module and L298N motor driver",
              '"Arduino Bluetooth Controller" app (Giumig Apps)',
              "Diagnosed and solved disconnections caused by insufficient power from the L298N 5V regulator (fixed by separating power supplies)",
            ],
          },
          {
            name: "Sumo robot with ESP32 + Bluepad32",
            items: [
              "Resolved library conflicts and incompatibilities between ESP32 core v2 and v3 APIs",
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
        images: [research_4_default, exp_colegios_default, exp_arduino_default],
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
        images: [comp_rredsi_default, research_2_default],
        alt: "Research presentation at an academic research-seedbed meeting",
        modules: [
          {
            name: "Role",
            items: ["Speaker"],
          },
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
        images: [comp_arena_default, exp_sumo_default],
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
        name: "Artificial Intelligence for Sales Decision-Making",
        issuer: "UTP · Workshop",
        year: "2026",
        dot: "teal",
        file: _524___Certificado_IA_default,
      },
      {
        name: "Workshop Leader — Science and Technology Holidays",
        issuer: "UTP · CIDT",
        year: "2026",
        dot: "bright",
        file: _1086___Certificado_vacaionalpdf_default,
      },
      {
        name: "Speaker — XIII RREDSI Regional Research Seedbeds Meeting",
        issuer: "RREDSI · Tuluá",
        year: "2026",
        dot: "teal",
        file: Certificado_XIII_Encuentro_Regional_de_Semilleros_de_Investigacion_RREDSI_2023_16_de_agosto_de_2026_default,
      },
      {
        name: "Electronic Prototyping (20 hours)",
        issuer: "UTP · Basic Sciences",
        year: "2025",
        dot: "bright",
        file: Certificacion_Prototipado_default,
      },
      {
        name: "Workshop Leader — Robotics in rural schools of Risaralda",
        issuer: "UTP · Extension",
        year: "2024",
        dot: "teal",
        file: _3554___Certificado_robotica_2024_default,
      },
      {
        name: "Workshop Leader — UTP Aeronautics Competition 2024-2",
        issuer: "UTP · Extension",
        year: "2024",
        dot: "bright",
        file: _3572___Certificado_aeronautica_default,
      },
      {
        name: "Speaker — UAV fire-suppression ball release system",
        issuer: "RREDSI · Cali",
        year: "2023",
        dot: "teal",
        file: certificadoPonente_default,
      },
    ],
    certificateViewLabel: "View certificate",
    footerTagline: "Academic Portfolio © 2026",
    footerLinks: [
      {
        href: "#bio",
        label: "Profile",
      },
      {
        href: "#experiencia",
        label: "Experience",
      },
      {
        href: "#certificados",
        label: "Certificates",
      },
    ],
  },
  it: {
    langLabel: "ES",
    langAria: "Cambiar idioma a español",
    name: "Janny Duarte",
    nav: [
      {
        href: "#bio",
        label: "Biografia",
      },
      {
        href: "#formacion",
        label: "Formazione",
      },
      {
        href: "#experiencia",
        label: "Esperienza",
      },
      {
        href: "#competencias",
        label: "Competizioni",
      },
      {
        href: "#certificados",
        label: "Certificati",
      },
    ],
    heroKicker: "Portfolio Accademico",
    heroRole:
      "Ingegnere Meccatronico. Docente extracurricolare di Robotica presso l'Instituto Gimnasio de Pereira.",
    heroTagline:
      "Sistemi elettronici, controllo e innovazione. Competizioni internazionali di progettazione aeronautica ed educazione alla robotica.",
    heroCtaPrimary: "Vedi esperienza",
    heroCtaSecondary: "Biografia",
    portraitAlt: "Ritratto accademico di Janny Duarte",
    bioTitle: "Profilo Accademico",
    bioP1:
      "Ingegnere meccatronico con formazione in strumentazione ed elettronica. Mi interessa risolvere problemi pratici, soprattutto nell'ambito dei sistemi elettronici e del controllo.",
    bioP2:
      "Ho maturato esperienza in competizioni di progettazione aeronautica, lavoro di laboratorio e sviluppo di progetti che integrano l'elettronica con applicazioni reali. Insegno robotica in modo extracurricolare in contesti diversi perché mi piace condividere ciò che imparo.",
    bioP3:
      "La mia tesi di laurea ha affrontato la mitigazione degli incendi tramite droni, unendo l'elettronica a un'applicazione pratica di sicurezza.",
    experienceTitle: "Percorso di Esperienza",
    experienceSubtitle: "Ordine cronologico",
    prevAria: "Foto precedente",
    nextAria: "Foto successiva",
    detailsLabel: "Vedi di più",
    closeLabel: "Chiudi",
    experiences: [
      {
        id: "embera",
        period: "Laboratori di aeronautica",
        title: "Comunità Emberá Chamí",
        description:
          "Ho tenuto i primi laboratori di aeronautica a studenti di una popolazione vulnerabile, la comunità indigena Emberá Chamí, con una metodologia ludica e la costruzione finale di un aeroplano di legno.",
        images: [exp_embera_default, research_4_default],
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
        period: "Laboratori di aeronautica",
        title: "Scuole",
        description:
          "Ho poi replicato gli stessi laboratori in diverse scuole. Il programma è rimasto identico; è cambiata la popolazione studentesca coinvolta.",
        images: [exp_colegios_default, research_4_default],
        alt: "Laboratorio di aeronautica in un'aula scolastica con modellini di aerei",
      },
      {
        id: "monitora",
        period: "Assistente di laboratorio",
        title: "Laboratorio di Strumentazione Meccatronica — UTP",
        description:
          "Supporto accademico e operativo del laboratorio di strumentazione dell'Universidad Tecnológica de Pereira.",
        images: [research_1_default, exp_arduino_default],
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
        ],
      },
      {
        id: "macmotus",
        period: "Marzo 2026 — Capo squadra",
        title: "Macmotus — AERODESIGN MX (ADMX), Messico",
        description:
          "Ho guidato il team Macmotus nella competizione internazionale AERODESIGN MX, il cui regolamento disciplina progettazione, costruzione e operazione di velivoli senza pilota ad ala fissa come esercizio di ingegneria reale per studenti.",
        images: [research_3_default, research_2_default],
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
          "Insegno robotica a studenti dalla scuola primaria alla secondaria, con progetti applicati e competizioni interne.",
        images: [exp_sumo_default, exp_arduino_default],
        alt: "Competizione di robot sumo con studenti del club di robotica",
        modules: [
          {
            name: "Progetto finale",
            items: [
              "Robot sumo con ESP32 a entrambi i livelli",
              "Primaria: controllo con un joypad da videogioco",
              "Secondaria: controllo dal cellulare con l'app Blynk",
            ],
          },
          {
            name: "Altre attività",
            items: [
              "Laboratori di robotica volontari in scuole rurali del Risaralda",
              "Organizzazione di una competizione di robot sumo per il club di robotica (primaria e secondaria): calendari round robin, tabelle di punteggio in Excel con codici colore e gestione dei premi con budget limitato",
              "In preparazione: capitolo di un libro accademico legato alla competizione di sumo robotico",
            ],
          },
        ],
      },
      {
        id: "tesis",
        period: "Tesi di laurea",
        title: "Mitigazione degli incendi tramite UAV",
        description:
          "Tesi incentrata sull'uso di droni (UAV) per il rilevamento e la mitigazione degli incendi, integrando sensori, navigazione autonoma e analisi dei dati.",
        images: [research_2_default, research_3_default],
        alt: "Drone UAV utilizzato per la mitigazione degli incendi",
      },
      {
        id: "proyectos",
        period: "Progetti tecnici recenti",
        title: "Auto sumo Bluetooth e robot sumo ESP32",
        description:
          "Sviluppo e debug di robot da competizione con elettronica embedded.",
        images: [exp_arduino_default, exp_sumo_default],
        alt: "Banco di lavoro con Arduino, modulo Bluetooth e driver dei motori",
        modules: [
          {
            name: "Auto sumo con Bluetooth (Arduino)",
            items: [
              "Modulo Bluetooth tipo HC-06 e driver motori L298N",
              'App "Arduino Bluetooth Controller" (Giumig Apps)',
              "Diagnosi e soluzione delle disconnessioni dovute all'alimentazione insufficiente del regolatore 5V dell'L298N (risolto separando le alimentazioni)",
            ],
          },
          {
            name: "Robot sumo con ESP32 + Bluepad32",
            items: [
              "Risoluzione di conflitti tra librerie e incompatibilità tra le API di ESP32 core v2 e v3",
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
        images: [research_4_default, exp_colegios_default, exp_arduino_default],
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
        images: [comp_rredsi_default, research_2_default],
        alt: "Presentazione della ricerca a un incontro accademico",
        modules: [
          {
            name: "Ruolo",
            items: ["Relatrice"],
          },
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
        images: [comp_arena_default, exp_sumo_default],
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
        name: "Intelligenza artificiale per le decisioni di vendita",
        issuer: "UTP · Workshop",
        year: "2026",
        dot: "teal",
        file: _524___Certificado_IA_default,
      },
      {
        name: "Relatrice — Vacanze di Scienza e Tecnologia",
        issuer: "UTP · CIDT",
        year: "2026",
        dot: "bright",
        file: _1086___Certificado_vacaionalpdf_default,
      },
      {
        name: "Relatrice — XIII Incontro Regionale RREDSI",
        issuer: "RREDSI · Tuluá",
        year: "2026",
        dot: "teal",
        file: Certificado_XIII_Encuentro_Regional_de_Semilleros_de_Investigacion_RREDSI_2023_16_de_agosto_de_2026_default,
      },
      {
        name: "Prototipazione Elettronica (20 ore)",
        issuer: "UTP · Scienze di Base",
        year: "2025",
        dot: "bright",
        file: Certificacion_Prototipado_default,
      },
      {
        name: "Relatrice — Robotica nelle scuole rurali di Risaralda",
        issuer: "UTP · Extension",
        year: "2024",
        dot: "teal",
        file: _3554___Certificado_robotica_2024_default,
      },
      {
        name: "Relatrice — Competizione di Aeronautica UTP 2024-2",
        issuer: "UTP · Extension",
        year: "2024",
        dot: "bright",
        file: _3572___Certificado_aeronautica_default,
      },
      {
        name: "Relatrice — Sistema di sgancio palle antincendio con UAV",
        issuer: "RREDSI · Cali",
        year: "2023",
        dot: "teal",
        file: certificadoPonente_default,
      },
    ],
    certificateViewLabel: "Vedi certificato",
    footerTagline: "Portfolio Accademico © 2026",
    footerLinks: [
      {
        href: "#bio",
        label: "Profilo",
      },
      {
        href: "#experiencia",
        label: "Esperienza",
      },
      {
        href: "#certificados",
        label: "Certificati",
      },
    ],
  },
};
//#endregion
//#region src/components/ImageCarousel.tsx
function ImageCarousel({ images, alt, prevLabel, nextLabel }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const go = (delta) => setIndex((i) => (i + delta + total) % total);
  return /* @__PURE__ */ jsxs("div", {
    className:
      "group/carousel relative aspect-video w-full overflow-hidden bg-muted",
    children: [
      images.map((src, i) =>
        /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt,
            loading: "lazy",
            width: 1024,
            height: 768,
            className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`,
          },
          src + i,
        ),
      ),
      total > 1 &&
        /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx("button", {
              type: "button",
              "aria-label": prevLabel,
              onClick: () => go(-1),
              className:
                "absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ocean-deep shadow-sm transition hover:bg-white",
              children: /* @__PURE__ */ jsx(ChevronLeft, {
                className: "size-4",
              }),
            }),
            /* @__PURE__ */ jsx("button", {
              type: "button",
              "aria-label": nextLabel,
              onClick: () => go(1),
              className:
                "absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ocean-deep shadow-sm transition hover:bg-white",
              children: /* @__PURE__ */ jsx(ChevronRight, {
                className: "size-4",
              }),
            }),
            /* @__PURE__ */ jsx("div", {
              className:
                "absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5",
              children: images.map((src, i) =>
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": `${i + 1}/${total}`,
                    onClick: () => setIndex(i),
                    className: `size-1.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`,
                  },
                  "dot" + src + i,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
  }),
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ jsxs(DialogPortal, {
    children: [
      /* @__PURE__ */ jsx(DialogOverlay, {}),
      /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
          className,
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Close",
              }),
            ],
          }),
        ],
      }),
    ],
  }),
);
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) =>
  /* @__PURE__ */ jsx("div", {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    ),
    ...props,
  });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) =>
  /* @__PURE__ */ jsx("div", {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    ),
    ...props,
  });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DialogPrimitive.Title, {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    ),
    ...props,
  }),
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DialogPrimitive.Description, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
  const [lang, setLang] = useState("es");
  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang");
    if (stored === "es" || stored === "en" || stored === "it") setLang(stored);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const toggleLang = () => {
    const next = LANG_ORDER[(LANG_ORDER.indexOf(lang) + 1) % LANG_ORDER.length];
    setLang(next);
    window.localStorage.setItem("portfolio-lang", next);
  };
  const t = CONTENT[lang];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-surface font-sans text-foreground",
    children: [
      /* @__PURE__ */ jsx("nav", {
        className:
          "sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md",
        children: /* @__PURE__ */ jsxs("div", {
          className:
            "mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6",
          children: [
            /* @__PURE__ */ jsx("span", {
              className: "font-display font-semibold text-ocean-deep",
              children: t.name,
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-8",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className: "hidden gap-8 sm:flex",
                  children: t.nav.map((item) =>
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        className:
                          "text-sm font-medium text-muted-foreground transition-colors hover:text-ocean-deep",
                        children: item.label,
                      },
                      item.href,
                    ),
                  ),
                }),
                /* @__PURE__ */ jsx("button", {
                  type: "button",
                  onClick: toggleLang,
                  "aria-label": t.langAria,
                  className:
                    "rounded-full border border-ocean-deep/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white",
                  children: t.langLabel,
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "bg-ocean-deep px-6 py-20",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-7xl",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className:
                "flex flex-col items-start gap-6 sm:flex-row sm:items-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className:
                    "size-28 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-light/60 sm:size-32",
                  children: /* @__PURE__ */ jsx("img", {
                    src: portrait_default,
                    alt: t.portraitAlt,
                    width: 1024,
                    height: 1280,
                    className: "h-full w-full object-cover",
                  }),
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsx("p", {
                      className:
                        "text-sm font-medium uppercase tracking-widest text-teal-light",
                      children: t.heroKicker,
                    }),
                    /* @__PURE__ */ jsx("h1", {
                      className:
                        "mt-2 font-display text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl lg:text-5xl",
                      children: t.name,
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className:
                        "mt-2 max-w-[46ch] text-pretty text-base font-medium text-zinc-300 sm:text-lg",
                      children: t.heroRole,
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx("p", {
              className:
                "mt-10 max-w-[68ch] text-pretty text-lg leading-relaxed text-zinc-300",
              children: t.heroTagline,
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "mt-8 flex flex-wrap gap-4",
              children: [
                /* @__PURE__ */ jsx("a", {
                  href: "#experiencia",
                  className:
                    "rounded-full bg-teal-light px-5 py-2 text-sm font-semibold text-ocean-deep ring-1 ring-teal-light transition-transform hover:bg-teal-light/90",
                  children: t.heroCtaPrimary,
                }),
                /* @__PURE__ */ jsx("a", {
                  href: "#bio",
                  className:
                    "rounded-full px-5 py-2 text-sm font-medium text-zinc-300 ring-1 ring-white/20 transition-colors hover:bg-white/5",
                  children: t.heroCtaSecondary,
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        id: "bio",
        className: "bg-white px-6 py-24",
        children: /* @__PURE__ */ jsx("div", {
          className: "mx-auto max-w-7xl",
          children: /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 gap-12 lg:grid-cols-12",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "lg:col-span-4",
                children: [
                  /* @__PURE__ */ jsx("h2", {
                    className:
                      "mb-4 font-display text-2xl font-medium text-ocean-deep",
                    children: t.bioTitle,
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "h-1 w-12 bg-teal-light",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("div", {
                className: "lg:col-span-8",
                children: /* @__PURE__ */ jsxs("p", {
                  className:
                    "max-w-[56ch] text-pretty text-lg leading-relaxed text-muted-foreground",
                  children: [
                    t.bioP1,
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("br", {}),
                    t.bioP2,
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("br", {}),
                    t.bioP3,
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        id: "formacion",
        className: "bg-white px-6 py-24",
        children: /* @__PURE__ */ jsx("div", {
          className: "mx-auto max-w-7xl",
          children: /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 gap-12 lg:grid-cols-12",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "lg:col-span-4",
                children: [
                  /* @__PURE__ */ jsx("h2", {
                    className:
                      "mb-2 font-display text-2xl font-medium text-ocean-deep",
                    children: t.studiesTitle,
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "h-1 w-12 bg-teal-light",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "space-y-12 border-l border-black/10 pl-8 lg:col-span-8",
                children: t.studies.map((study) =>
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "relative",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className: `absolute -left-[37px] top-1.5 size-4 rounded-full border-2 bg-white ${study.accent === "teal" ? "border-teal-light" : "border-ocean-mid"}`,
                        }),
                        /* @__PURE__ */ jsx("h4", {
                          className:
                            "mb-1 text-sm font-semibold uppercase tracking-tight text-ocean-bright",
                          children: study.year,
                        }),
                        /* @__PURE__ */ jsx("h3", {
                          className: "text-xl font-medium text-ocean-deep",
                          children: study.title,
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "mt-1 text-muted-foreground",
                          children: study.place,
                        }),
                      ],
                    },
                    study.year,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        id: "experiencia",
        className: "border-y border-black/5 bg-surface px-6 py-24",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-7xl",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "mb-16",
              children: /* @__PURE__ */ jsx("h2", {
                className:
                  "text-balance font-display text-3xl font-medium text-ocean-deep",
                children: t.experienceTitle,
              }),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
              children: t.experiences.map((exp) =>
                /* @__PURE__ */ jsxs(
                  "article",
                  {
                    className:
                      "group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
                    children: [
                      /* @__PURE__ */ jsx(ImageCarousel, {
                        images: exp.images,
                        alt: exp.alt,
                        prevLabel: t.prevAria,
                        nextLabel: t.nextAria,
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className: "p-6",
                        children: [
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "text-[10px] font-semibold uppercase tracking-widest text-ocean-bright",
                            children: exp.period,
                          }),
                          /* @__PURE__ */ jsx("h3", {
                            className:
                              "mb-3 mt-2 font-display text-lg font-medium text-ocean-deep",
                            children: exp.title,
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className:
                              "line-clamp-3 text-pretty text-sm leading-normal text-muted-foreground",
                            children: exp.description,
                          }),
                          /* @__PURE__ */ jsxs(Dialog, {
                            children: [
                              /* @__PURE__ */ jsx(DialogTrigger, {
                                asChild: true,
                                children: /* @__PURE__ */ jsx("button", {
                                  type: "button",
                                  className:
                                    "mt-4 rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white",
                                  children: t.detailsLabel,
                                }),
                              }),
                              /* @__PURE__ */ jsxs(DialogContent, {
                                className:
                                  "max-h-[85vh] overflow-y-auto sm:max-w-2xl",
                                children: [
                                  /* @__PURE__ */ jsxs(DialogHeader, {
                                    children: [
                                      /* @__PURE__ */ jsx("span", {
                                        className:
                                          "text-[10px] font-semibold uppercase tracking-widest text-ocean-bright",
                                        children: exp.period,
                                      }),
                                      /* @__PURE__ */ jsx(DialogTitle, {
                                        className:
                                          "font-display text-xl font-medium text-ocean-deep",
                                        children: exp.title,
                                      }),
                                      /* @__PURE__ */ jsx(DialogDescription, {
                                        className:
                                          "text-pretty text-left text-sm leading-relaxed text-muted-foreground",
                                        children: exp.description,
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ jsx("div", {
                                    className: "overflow-hidden rounded-lg",
                                    children: /* @__PURE__ */ jsx(
                                      ImageCarousel,
                                      {
                                        images: exp.images,
                                        alt: exp.alt,
                                        prevLabel: t.prevAria,
                                        nextLabel: t.nextAria,
                                      },
                                    ),
                                  }),
                                  "modules" in exp &&
                                    /* @__PURE__ */ jsx("div", {
                                      className:
                                        "space-y-4 border-t border-black/5 pt-5",
                                      children: exp.modules.map((mod) =>
                                        /* @__PURE__ */ jsxs(
                                          "div",
                                          {
                                            children: [
                                              /* @__PURE__ */ jsx("h4", {
                                                className:
                                                  "text-xs font-semibold uppercase tracking-wide text-ocean-bright",
                                                children: mod.name,
                                              }),
                                              /* @__PURE__ */ jsx("ul", {
                                                className: "mt-1.5 space-y-1",
                                                children: mod.items.map(
                                                  (item) =>
                                                    /* @__PURE__ */ jsxs(
                                                      "li",
                                                      {
                                                        className:
                                                          "flex gap-2 text-sm leading-snug text-muted-foreground",
                                                        children: [
                                                          /* @__PURE__ */ jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "mt-2 size-1 shrink-0 rounded-full bg-teal-light",
                                                            },
                                                          ),
                                                          /* @__PURE__ */ jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-pretty",
                                                              children: item,
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                      item,
                                                    ),
                                                ),
                                              }),
                                            ],
                                          },
                                          mod.name,
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
                  exp.id,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        id: "competencias",
        className: "bg-white px-6 py-24",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-7xl",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "mb-16",
              children: [
                /* @__PURE__ */ jsx("h2", {
                  className:
                    "text-balance font-display text-3xl font-medium text-ocean-deep",
                  children: t.competitionsTitle,
                }),
                /* @__PURE__ */ jsx("div", {
                  className: "mt-4 h-1 w-12 bg-teal-light",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
              children: t.competitions.map((comp) =>
                /* @__PURE__ */ jsxs(
                  "article",
                  {
                    className:
                      "group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
                    children: [
                      /* @__PURE__ */ jsx(ImageCarousel, {
                        images: comp.images,
                        alt: comp.alt,
                        prevLabel: t.prevAria,
                        nextLabel: t.nextAria,
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className: "p-6",
                        children: [
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "text-[10px] font-semibold uppercase tracking-widest text-ocean-bright",
                            children: comp.period,
                          }),
                          /* @__PURE__ */ jsx("h3", {
                            className:
                              "mb-3 mt-2 font-display text-lg font-medium text-ocean-deep",
                            children: comp.title,
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className:
                              "text-pretty text-sm leading-normal text-muted-foreground",
                            children: comp.intro,
                          }),
                          /* @__PURE__ */ jsxs(Dialog, {
                            children: [
                              /* @__PURE__ */ jsx(DialogTrigger, {
                                asChild: true,
                                children: /* @__PURE__ */ jsx("button", {
                                  type: "button",
                                  className:
                                    "mt-4 rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white",
                                  children: t.detailsLabel,
                                }),
                              }),
                              /* @__PURE__ */ jsxs(DialogContent, {
                                className:
                                  "max-h-[85vh] overflow-y-auto sm:max-w-2xl",
                                children: [
                                  /* @__PURE__ */ jsxs(DialogHeader, {
                                    children: [
                                      /* @__PURE__ */ jsx("span", {
                                        className:
                                          "text-[10px] font-semibold uppercase tracking-widest text-ocean-bright",
                                        children: comp.period,
                                      }),
                                      /* @__PURE__ */ jsx(DialogTitle, {
                                        className:
                                          "font-display text-xl font-medium text-ocean-deep",
                                        children: comp.modalTitle,
                                      }),
                                      /* @__PURE__ */ jsx(DialogDescription, {
                                        className:
                                          "text-pretty text-left text-sm leading-relaxed text-muted-foreground",
                                        children: comp.detail,
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ jsx("div", {
                                    className: "overflow-hidden rounded-lg",
                                    children: /* @__PURE__ */ jsx(
                                      ImageCarousel,
                                      {
                                        images: comp.images,
                                        alt: comp.alt,
                                        prevLabel: t.prevAria,
                                        nextLabel: t.nextAria,
                                      },
                                    ),
                                  }),
                                  /* @__PURE__ */ jsx("div", {
                                    className:
                                      "space-y-4 border-t border-black/5 pt-5",
                                    children: comp.modules.map((mod) =>
                                      /* @__PURE__ */ jsxs(
                                        "div",
                                        {
                                          children: [
                                            /* @__PURE__ */ jsx("h4", {
                                              className:
                                                "text-xs font-semibold uppercase tracking-wide text-ocean-bright",
                                              children: mod.name,
                                            }),
                                            /* @__PURE__ */ jsx("ul", {
                                              className: "mt-1.5 space-y-1",
                                              children: mod.items.map((item) =>
                                                /* @__PURE__ */ jsxs(
                                                  "li",
                                                  {
                                                    className:
                                                      "flex gap-2 text-sm leading-snug text-muted-foreground",
                                                    children: [
                                                      /* @__PURE__ */ jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "mt-2 size-1 shrink-0 rounded-full bg-teal-light",
                                                        },
                                                      ),
                                                      /* @__PURE__ */ jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-pretty",
                                                          children: item,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  item,
                                                ),
                                              ),
                                            }),
                                          ],
                                        },
                                        mod.name,
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
                  comp.id,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        id: "certificados",
        className: "border-t border-black/5 bg-surface px-6 py-24",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-7xl",
          children: [
            /* @__PURE__ */ jsx("h2", {
              className:
                "mb-12 font-display text-2xl font-medium text-ocean-deep",
              children: t.certificatesTitle,
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
              children: t.certificates.map((cert) =>
                /* @__PURE__ */ jsxs(
                  Dialog,
                  {
                    children: [
                      /* @__PURE__ */ jsx(DialogTrigger, {
                        asChild: true,
                        children: /* @__PURE__ */ jsxs("button", {
                          type: "button",
                          className:
                            "flex flex-col items-start rounded-xl bg-white p-5 text-left shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
                          children: [
                            /* @__PURE__ */ jsx("div", {
                              className:
                                "mb-4 flex size-10 items-center justify-center rounded-lg bg-ocean-deep/5",
                              children: /* @__PURE__ */ jsx(FileText, {
                                className: `size-5 ${cert.dot === "teal" ? "text-teal-light" : "text-ocean-bright"}`,
                              }),
                            }),
                            /* @__PURE__ */ jsx("span", {
                              className:
                                "text-[10px] font-semibold uppercase tracking-widest text-ocean-bright",
                              children: cert.year,
                            }),
                            /* @__PURE__ */ jsx("h4", {
                              className:
                                "mt-1 text-pretty text-sm font-semibold text-ocean-deep",
                              children: cert.name,
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "mt-1 text-xs text-muted-foreground",
                              children: cert.issuer,
                            }),
                            /* @__PURE__ */ jsx("span", {
                              className:
                                "mt-4 text-xs font-semibold uppercase tracking-widest text-ocean-deep underline underline-offset-4",
                              children: t.certificateViewLabel,
                            }),
                          ],
                        }),
                      }),
                      /* @__PURE__ */ jsxs(DialogContent, {
                        className: "max-h-[90vh] sm:max-w-3xl",
                        children: [
                          /* @__PURE__ */ jsxs(DialogHeader, {
                            children: [
                              /* @__PURE__ */ jsx("span", {
                                className:
                                  "text-[10px] font-semibold uppercase tracking-widest text-ocean-bright",
                                children: cert.year,
                              }),
                              /* @__PURE__ */ jsx(DialogTitle, {
                                className:
                                  "text-pretty font-display text-lg font-medium text-ocean-deep",
                                children: cert.name,
                              }),
                              /* @__PURE__ */ jsx(DialogDescription, {
                                className:
                                  "text-left text-sm text-muted-foreground",
                                children: cert.issuer,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsx("iframe", {
                            src: cert.file,
                            title: cert.name,
                            className:
                              "h-[65vh] w-full rounded-lg border border-black/10 bg-muted",
                          }),
                          /* @__PURE__ */ jsx("a", {
                            href: cert.file,
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "self-start rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white",
                            children: t.certificateViewLabel,
                          }),
                        ],
                      }),
                    ],
                  },
                  cert.name,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("footer", {
        className: "border-t border-white/5 bg-ocean-deep px-6 py-12",
        children: /* @__PURE__ */ jsxs("div", {
          className:
            "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "text-center md:text-left",
              children: [
                /* @__PURE__ */ jsx("p", {
                  className: "font-display text-zinc-100",
                  children: t.name,
                }),
                /* @__PURE__ */ jsx("p", {
                  className:
                    "mt-1 text-xs uppercase tracking-widest text-zinc-400",
                  children: t.footerTagline,
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex gap-6",
              children: t.footerLinks.map((link) =>
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    className:
                      "text-xs font-medium uppercase tracking-widest text-teal-light transition-colors hover:text-white",
                    children: link.label,
                  },
                  link.href,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { Index as component };
