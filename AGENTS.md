# AGENTS.md — Instrucciones para Agentes IA

## Stack del Proyecto

- **Presentaciones**: Vanilla JS (capitulo-1/, capitulo-2/)
- **Documentación**: Markdown en `concepts/`
- **Editor**: VS Code

## Estructura

```
master-ai/
├── capitulo-1/      # Capítulo 1: Del chat al sistema cognitivo
├── capitulo-2/      # Capítulo 2: Arquitectura técnica de sistemas con IA
├── concepts/        # Documentación conceptual
├── .vscode/         # Configuración de editor
└── [raíz]          # Archivos de proyecto
```

## Commits

Usar conventional commits:
- `feat:` nueva funcionalidad
- `fix:` corrección
- `docs:` documentación
- `refactor:` restructuración

NO usar "Co-Authored-By" ni attribuciones IA.

## Reglas

- NO compilar/después de hacer cambios
- NO crear documentación proactivamente (solo si el usuario lo pide)
- NO agregar archivos con secretos

## Contenido

### Presentaciones
- 22 escenas en capitulo-2/
- Usar nombres descriptivos, NO versiones ("Arquitectura técnica" NO "v3")
- Priorizar fundamentos, NO trends

### Conceptos
- Archivos en `concepts/`: numeración ordinal (01-, 02-, etc.)
- Frontmatter requerido:
  ```yaml
  ---
  title: Nombre del Concepto
  topic: tema
  last_updated: YYYY-MM-DD
  ---
  ```
- Referencias cruzadas entre conceptos relacionados