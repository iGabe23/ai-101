# Masterclass IA — Arquitectura Técnica de Sistemas con IA

Recursos educativos sobre arquitectura de sistemas potenciados por inteligencia artificial.

## Sobre el Proyecto

Este proyecto contiene un conjunto de presentaciones educativas sobre cómo construir sistemas que aprovechen inteligencia artificial de manera efectiva. Está orientado a desarrolladores, arquitectos de software y técnicos que buscan ir más allá del uso básico de chatbots.

El material evolucionó a partir de una presentación inicial en Marp que sirvió como outline para planificar la estructura antes de pasar al código. Ese documento base quedó registrado en los archivos Marp del proyecto.

## Capítulos

Las presentaciones están organizadas en **dos capítulos secuenciales** que se complementan:

| Carpeta | Capítulo | Título | Propósito |
|---------|----------|--------|-----------|
| `capitulo-1/` | Capítulo 1 | Del chat al sistema cognitivo | Introduce el problema: por qué ChatGPT y herramientas similares no son suficientes para construir sistemas complejos, y cómo pensar en evolución hacia arquitecturas cognitivas |
| `capitulo-2/` | Capítulo 2 | Arquitectura técnica de sistemas con IA | Explica los conceptos técnicos fundamentales y las soluciones arquitectónicas (22 escenas) |

**Orden recomendado**: Ver primero el Capítulo 1 para entender el contexto del problema, luego el Capítulo 2 para las soluciones.

## Contenido por Capítulo

### Capítulo 1: capitulo-1 — Del chat al sistema cognitivo

Presentacion que establece el marco conceptual inicial. Explora la diferencia entre usar un chatbot interactivo y diseñar un sistema cognitivo que pueda ejecutar tareas complejas con autonomía.

### Capítulo 2: capitulo-2 — Arquitectura técnica de sistemas con IA

Presentacion técnica que cubre los fundamentos de arquitectura:

1. **Modelos de lenguaje**: Fundamentos, transformers, attention
2. **Context Window**: Memoria de corto plazo, tokens, limitaciones
3. **Skills, Tools y MCP**: Capacidad de acción del modelo
4. **Memory y Retrieval**: Memoria persistente, RAG
5. **Agentes**: Autonomía, planificación, ejecución
6. **Workflows y SDD**: Patrones de orchestration, Spec-Driven Development
7. **Open Stack**: Herramientas y frameworks del ecosistema

## Origen

Los archivos `masterclass-ia-marp.md`, `masterclass-ia-marp.pdf` y `masterclass-ia-theme.css` corresponden a la presentación Marp original que se usó como outline para planificar la estructura del proyecto antes de implementar las presentaciones en código vanilla JavaScript.

Esa presentación Marp documentó la arquitectura narrativa inicial y sirvó como referencia durante el desarrollo de las versiones web en `capitulo-1/` y `capitulo-2/`.

## Documentación Conceptual

La carpeta `concepts/` contiene documentación detallada en formato Markdown que profundiza en los temas cubiertos en las presentaciones. Cada archivo aborda un concepto específico con explicaciones técnicas.

## Material Adicional

- `masterclass-ia-marp.md`: Código fuente de la presentación Marp (formato Markdown)
- `masterclass-ia-marp.pdf`: Export en PDF de la presentación Marp
- `masterclass-ia-theme.css`: Definición de estilos para el theme de la presentación Marp

## Estructura de Archivos

```
master-ai/
├── capitulo-1/                # Capítulo 1: Del chat al sistema cognitivo
│   ├── index.html            # Presentación web (capítulo 1)
│   ├── app.js                # Lógica de la presentación
│   ├── styles.css            # Estilos
│   └── README.md             # Documentación del capítulo
├── capitulo-2/                # Capítulo 2: Arquitectura técnica de sistemas con IA
│   ├── index.html            # Presentación web (22 escenas)
│   ├── app.js                # Lógica de la presentación
│   ├── styles.css            # Estilos
│   ├── outline.md            # Resumen de escenas
│   └── README.md             # Documentación del capítulo
├── concepts/                 # Documentación conceptual (Markdown)
├── .vscode/                  # Configuración del editor
├── masterclass-ia-marp.md    # Outline original en Marp
├── masterclass-ia-marp.pdf   # PDF del outline Marp
├── masterclass-ia-theme.css  # Theme de la presentación Marp
├── AGENTS.md                 # Instrucciones para agentes IA
├── .gitignore                # Reglas de Git
├── .env.example              # Template de variables de entorno
├── LICENSE                   # Licencia restrictiva
└── README.md                 # Este archivo
```

## Cómo Usar

### Ver las presentaciones

Cada capítulo es una presentación web independiente. Para verla:

1. Abrir el archivo `index.html` de la carpeta correspondiente en un navegador moderno:
   - `capitulo-1/index.html` para el Capítulo 1
   - `capitulo-2/index.html` para el Capítulo 2

2. Navegar con teclado (flechas) o clic del mouse.

### Editar la presentación Marp

Si necesitas modificar el outline original en Marp:

```bash
# Instalar Marp CLI
npm install -g @marp-team/marp-cli

# Regenerar el PDF
marp masterclass-ia-marp.md -o masterclass-ia-marp.pdf
```

### Editar documentación

Los archivos en `concepts/` son Markdown estándar. Puedes editarlos con cualquier editor de texto.

## Requisitos

- Navegador moderno para ver las presentaciones HTML
- VS Code (opcional) para editar Markdown
- Node.js (solo si necesitas regenerar el PDF de Marp)

## Contribuir

Este proyecto sigue las convenciones documentadas en `AGENTS.md`. Antes de hacer cambios, lean ese archivo.

Resumen rápido:
1. Crear una branch: `git checkout -b feature/nueva-seccion`
2. Hacer cambios siguiendo las convenciones del proyecto
3. Commits con formato conventional: `feat:`, `fix:`, `docs:`, `refactor:`
4. Push y crear un Pull Request

## Licencia

Todos los derechos reservados. Ver archivo `LICENSE` para más detalles.