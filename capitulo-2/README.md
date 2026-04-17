# Arquitectura tecnica de sistemas con IA

## Como abrirla

- Abri `capitulo-2/index.html` directo en el navegador.
- No necesita build, servidor ni framework.
- Navegacion:
  - `ArrowRight` o `Space`: avanzar paso / escena
  - `ArrowLeft`: volver
  - `Home`: ir al inicio
  - `End`: ir al cierre
  - Click en el indice lateral: saltar a una escena

## Como editar las escenas

- Todo el contenido vive en `capitulo-2/app.js`.
- El array `scenes` define la presentacion completa.
- La version actual esta sincronizada conceptualmente con los `.md` de `concepts/`.
- Cada escena tiene:
  - `module` y `moduleTitle`: bloque narrativo
  - `title`, `lead`, `thesis`: mensaje principal
  - `beats`: reveal progresivo de la idea
  - `visual`: layout tecnico (`map`, `grid`, `compare`, `flow`, `table`, `loop`, `dag`, `rules`)

## Archivos

- `capitulo-2/index.html`: shell general
- `capitulo-2/styles.css`: sistema visual y layouts
- `capitulo-2/app.js`: escenas, render, navegacion y visualizaciones
- `capitulo-2/outline.md`: arquitectura conceptual y decisiones editoriales de la presentacion
- `concepts/*.md`: base documental de precision conceptual para mantener la charla sincronizada

## Criterio de mantenimiento

- Una tesis fuerte por escena. Si una idea pide demasiada aclaracion, cortala en otra escena.
- No conviertas la charla en glosario: cada concepto tiene que responder `que resuelve`, `como se conecta` y `que tradeoff abre`.
- Si actualizas conceptos en `concepts/`, revisa primero si el orden pedagogico o las distinciones de `capitulo-2/app.js` quedaron atras.
- Si agregas una visual nueva, preferi reutilizar un renderer existente antes de inventar otro.
