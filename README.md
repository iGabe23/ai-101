# Masterclass IA — Arquitectura Técnica de Sistemas con IA

Recursos educativos sobre arquitectura de sistemas potenciados por inteligencia artificial.

## Contenido

### Presentaciones (Capítulos Secuenciales)

Este proyecto contiene dos presentaciones que son **capítulos secuenciales** de una serie educativa:

| Carpeta | Capítulo | Título | Descripción |
|---------|----------|--------|-------------|
| `v2/` | Capítulo 1 | Del chat al sistema cognitivo | Introduce el problema: por qué ChatGPT no es suficiente y cómo evolucionar hacia sistemas cognitivos |
| `v3/` | Capítulo 2 | Arquitectura técnica de sistemas con IA | Explica los conceptos importantes y cómo resolver el problema (22 escenas) |

**Recomendación**: Ver en orden, comenzando por `v2/` (Capítulo 1) para entender el contexto del problema antes de pasar a las soluciones en `v3/` (Capítulo 2).

### Documentación
- **concepts/**: Documentación conceptual en Markdown

### Materiales
- `masterclass-ia-marp.md`: Fuente Marp (Markdown -> PDF)
- `masterclass-ia-marp.pdf`: Export PDF de la presentación
- `masterclass-ia-theme.css`: Tema visual para Marp

## Temas Cubiertos

1. **Modelos de lenguaje**: Fundamentos, transformers, attention
2. **Context Window**: Memoria de corto plazo, tokens, limitaciones
3. **Skills, Tools y MCP**: Capacidad de acción del modelo
4. **Memory y Retrieval**: Memoria persistente, RAG
5. **Agentes**: Autonomía, planificación, ejecución
6. **Workflows y SDD**: Patrones de orchestration, Spec-Driven Development
7. **Open Stack**: Herramientas y frameworks del ecosistema

## Requisitos

- Navegador moderno para ver presentaciones HTML
- VS Code (opcional) para editar Markdown

## Uso

### Ver presentaciones
- **Capítulo 1**: Abrir `v2/index.html` en un navegador.
- **Capítulo 2**: Abrir `v3/index.html` en un navegador.

### Editar presentación Marp
```bash
# Instalar Marp CLI
npm install -g @marp-team/marp-cli

# Generar PDF
marp masterclass-ia-marp.md -o masterclass-ia-marp.pdf
```

### Editar documentación
Los archivos en `concepts/` son Markdown estándar.

## Contribuir

1. Crear branch: `git checkout -b feature/nueva-seccion`
2. Hacer cambios siguiendo convenciones en `AGENTS.md`
3. Commits con formato conventional: `feat:`, `fix:`, `docs:`
4. Push y crear PR

## Licencia

MIT