# Presentacion V2 Web

## Como abrirla

- Abri `v2/index.html` directo en el navegador.
- No necesita build, servidor ni framework.
- Navegacion:
  - `ArrowRight` o `Space`: avanzar paso / escena
  - `ArrowLeft`: volver
  - `Home`: ir al inicio
  - `End`: ir al cierre
  - Click en el indice lateral: saltar a un bloque o escena

## Como editar las escenas

- Todo el contenido vive en `v2/app.js`.
- Busca el array `scenes` al inicio del archivo.
- Cada escena define:
  - `module` y `moduleTitle`: bloque narrativo
  - `type`: layout principal (`cover`, `split`, `close`)
  - `title`, `lead`, `thesis`: nucleo del mensaje
  - `beats`: pasos de reveal progresivo
  - `visual`: diagrama o visualizacion para esa escena

## Estructura util

- `v2/index.html`: shell de la presentacion
- `v2/styles.css`: identidad visual, layout y responsive
- `v2/app.js`: schema, render y navegacion

## Criterio de mantenimiento

- Mantené una tesis fuerte por escena.
- Si un texto crece demasiado, cortalo en otra escena en vez de meter una pared.
- Si agregas una visual nueva, reutiliza un layout existente antes de inventar otro tipo de escena.
