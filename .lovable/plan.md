# Nueva narrativa para la tarjeta "Comunidad Emberá Chamí"

Reescribir la introducción y la descripción del modal de esa tarjeta con un tono inspirador y humano, destacando que fueron los primeros talleres de aeronáutica en el resguardo Emberá Chamí en 2024.

## Qué cambia

**Intro de la tarjeta (corta y llamativa)**

> "Los primeros niños del resguardo Emberá Chamí en imaginar el vuelo: en 2024 llevé la aeronáutica a un aula donde nunca había llegado."

**Descripción ampliada (modal)**
Párrafo más extenso que cuenta el recorrido: llegada al resguardo en 2024, adaptación del contenido a una metodología recreativa y cercana a su lengua y su contexto, la curiosidad de los estudiantes, y el cierre construyendo con sus propias manos un avión de madera que se llevaron a casa.

Los módulos del taller (Historia y sueño de volar, Tipos de aeronaves, ¿Por qué vuelan?, La atmósfera, Control del vuelo, construcción del avión) se mantienen igual.

## Idiomas

El mismo texto se adapta en español, inglés e italiano, conservando la misma fuerza narrativa en cada versión.

## Detalles técnicos

- Editar `src/lib/portfolio-content.ts` en las tres entradas `id: "embera"` (bloques `es`, `en`, `it`).
- La tarjeta hoy muestra `description` recortada a 3 líneas; para separar intro y detalle se añade un campo `intro` opcional a las entradas de experiencia y la tarjeta lo usa cuando existe (igual que ya hace la sección de competencias).
- Ajuste puntual en `src/routes/index.tsx`: la tarjeta renderiza `exp.intro ?? exp.description`; el modal sigue mostrando `exp.description`.
- Sin cambios de diseño, layout ni de otras tarjetas.
