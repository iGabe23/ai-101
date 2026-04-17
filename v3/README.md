# Arquitectura tecnica de sistemas con IA

## Como abrirla

- Abri `v3/index.html` directo en el navegador.
- No necesita build, servidor ni framework.
- Navegacion:
  - `ArrowRight` o `Space`: avanzar paso / escena
  - `ArrowLeft`: volver
  - `Home`: ir al inicio
  - `End`: ir al cierre
  - Click en el indice lateral: saltar a una escena

## Como editar las escenas

- Todo el contenido vive en `v3/app.js`.
- El array `scenes` define la presentacion completa.
- La version actual esta sincronizada conceptualmente con los `.md` de `concepts/`.
- Cada escena tiene:
  - `module` y `moduleTitle`: bloque narrativo
  - `title`, `lead`, `thesis`: mensaje principal
  - `beats`: reveal progresivo de la idea
  - `visual`: layout tecnico (`map`, `grid`, `compare`, `flow`, `table`, `loop`, `dag`, `rules`)

## Archivos

- `v3/index.html`: shell general
- `v3/styles.css`: sistema visual y layouts
- `v3/app.js`: escenas, render, navegacion y visualizaciones
- `v3/outline.md`: arquitectura conceptual y decisiones editoriales de la presentacion
- `concepts/*.md`: base documental de precision conceptual para mantener la charla sincronizada

## Criterio de mantenimiento

- Una tesis fuerte por escena. Si una idea pide demasiada aclaracion, cortala en otra escena.
- No conviertas la charla en glosario: cada concepto tiene que responder `que resuelve`, `como se conecta` y `que tradeoff abre`.
- Si actualizas conceptos en `concepts/`, revisa primero si el orden pedagogico o las distinciones de `v3/app.js` quedaron atras.
- Si agregas una visual nueva, preferi reutilizar un renderer existente antes de inventar otro.
