# Arquitectura tecnica de sistemas con IA - Arquitectura narrativa y validacion conceptual

## Objetivo

Mantener una presentacion tecnica, clara y sintetica que refleje con fidelidad la base documental de `concepts/`, sin convertir la charla en enciclopedia y sin volver a mezclar capas distintas.

## Tesis central

La IA aplicada no se entiende bien si se mira solo el modelo o solo el chat. Se entiende cuando se separan responsabilidades: capacidad del modelo, contexto activo, comportamiento reusable, accion operativa, memoria persistente, recuperacion de evidencia, coordinacion y verificacion.

## Criterio editorial

- Menos epica que la presentacion anterior.
- Mas claridad contractual: que hace cada pieza, que no hace y donde rompe.
- Sin diccionario seco: cada bloque responde problema -> pieza -> relacion -> tradeoff.
- Sin vendorismo: se priorizan categorias y decisiones, no marcas.
- `concepts/` es la fuente de precision; `v3/` es la capa de sintesis pedagogica.

## Sincronizacion conceptual prioritaria

1. **Modelos y capacidades**
   - Separar motor de inferencia vs sistema completo.
   - No mezclar frontier / closed API, open weights y open source AI.
   - Tratar self-hosted como eje de despliegue, no de licencia.

2. **Contexto activo**
   - Explicar context window como RAM operacional.
   - Separar transcript, contexto activo y memoria recuperable.
   - Dejar claro que long context no elimina la necesidad de curar senal.

3. **Skills, tools y MCP**
   - Skill como playbook reusable con lazy loading, no estandar universal homogeneo.
   - Tool como contrato + ejecucion + evidencia.
   - MCP como protocolo que puede exponer tools, resources y prompts, no como la tool misma.

4. **Memoria y retrieval**
   - Memoria = que guardas.
   - Retrieval = como buscas.
   - RAG = como esa recuperacion alimenta generacion.
   - Progressive disclosure y escritura selectiva como patrones fuertes.

5. **Agentes, workflow y SDD**
   - Agente = loop con policy + stop conditions.
   - Orquestacion = fresh context + separacion de roles.
   - Workflow determinista no es inferior.
   - SDD como metodologia operativa local, no estandar universal.

## Temas nucleo

1. **Modelos y capacidades**
   - Que aporta un modelo y que no.
   - Que tradeoffs si cambian cuando elegis un modelo.
   - Cuando subir de modelo ayuda y cuando solo encarece un mal sistema.

2. **Contexto activo**
   - Ventana de contexto como espacio de trabajo finito.
   - Diferencia entre transcript, contexto activo y memoria.
   - Context rot, compactacion y limites blandos de calidad.

3. **Skills, tools y MCP**
   - Skill como playbook reusable dependiente de ecosistema.
   - Tool como contrato de accion verificable.
   - MCP como protocolo de interoperabilidad entre host, cliente y servidor.

4. **Memoria y retrieval**
   - Escritura selectiva y lectura escalonada.
   - Retrieval / RAG como recuperacion de senal, no como "meter PDFs al prompt".
   - Progressive disclosure y just-in-time context retrieval.

5. **Agentes, orquestador y sub-agentes**
   - Agente como loop con politica, herramientas, estado y corte.
   - Orquestador como coordinador y sub-agentes como contextos acotados.
   - Anti-patron del God Agent.

6. **Workflow, DAG y SDD**
   - Diferencia entre autonomia libre y pipeline auditable.
   - DAG y fases explicitas.
   - SDD como metodologia operativa para externalizar plan y validar cambios.

7. **Apertura y stack**
   - Diferencia entre open source, open weights y self-hosted.
   - Capas de un stack razonable: modelo, runtime, protocolos, memoria, observabilidad.
   - Regla practica de diseno: autonomia donde suma, estructura donde reduce entropia.

## Apendices o ejemplos, no nucleo

- Fine-tuning y adapters.
- Vector DBs especificas.
- Multimodalidad avanzada.
- Evals automatizadas en detalle.
- Vendors particulares.

Estos temas pueden aparecer como ejemplo corto, pero no tienen que robarle tiempo al contrato mental principal.

## Referencias investigadas y como impactan

Ademas de las fuentes externas originales, esta presentacion ahora toma como base editorial directa:

- `concepts/01-modelos-y-capacidades.md`
- `concepts/02-context-window.md`
- `concepts/03-skills.md`
- `concepts/04-tools.md`
- `concepts/05-mcp.md`
- `concepts/06-memoria.md`
- `concepts/07-retrieval-rag.md`
- `concepts/08-agentes.md`
- `concepts/09-orquestador-y-subagentes.md`
- `concepts/10-workflow-y-dag.md`
- `concepts/11-sdd.md`
- `concepts/12-open-source-open-weights-self-hosted.md`

1. **Model Context Protocol - Architecture Overview**  
   Fuente: `https://modelcontextprotocol.io/docs/learn/architecture`
   - Confirmo que MCP describe una arquitectura **host -> client -> server**.
   - Confirmo que el protocolo expone primitivas como **tools, resources y prompts**.
   - Impacto en la presentacion: escenas de MCP y comparacion `MCP vs tools directas` para evitar la confusion de "MCP = la tool".

2. **Open Source Initiative - Open Source AI Definition 1.0**  
   Fuente: `https://opensource.org/ai/open-source-ai-definition`
   - Confirma que `open source AI` no es solo publicar pesos: exige codigo, parametros e informacion suficiente sobre datos para estudiar, modificar y compartir.
   - Impacto en la presentacion: escena `Open source vs open weights vs self-hosted`.

3. **Open Source Initiative - Open Weights**  
   Fuente: `https://opensource.org/ai/open-weights`
   - Refuerza que `open weights` es mas abierto que un modelo cerrado, pero no equivale a `open source AI`.
   - Impacto en la presentacion: mismo bloque de stack abierto y tradeoffs.

## Outline final de escenas

### Bloque 01 - Marco tecnico
1. **De piezas sueltas a arquitectura tecnica**
2. **La formula operativa sigue mandando**

### Bloque 02 - Modelos y capacidades
3. **Que es realmente un modelo**
4. **Elegir modelo es elegir tradeoffs**
5. **Cuando subir de modelo si ayuda y cuando no**

### Bloque 03 - Contexto, memoria y recuperacion
6. **Ventana de contexto: RAM, no disco**
7. **Transcript, contexto activo y memoria NO son lo mismo**

### Bloque 04 - Skills, tools y MCP
8. **Skills: playbooks reusables, no estandar universal homogeneo**
9. **Tool: contrato de accion, ejecucion y evidencia**
10. **MCP: protocolo para conectar capacidades, no la capacidad misma**
11. **MCP vs tools directas**

### Bloque 05 - Memoria y retrieval
12. **Memoria util: escritura selectiva y lectura escalonada**
13. **Retrieval y RAG: recuperar senal, no meter PDFs al prompt**

### Bloque 06 - Agentes y coordinacion
14. **Agente = loop con policy**
15. **Orquestador y subagentes: fresh context + separacion de roles**
16. **Anti-patron: God Agent**

### Bloque 07 - Workflow, SDD y stack
17. **Workflow determinista no es inferior**
18. **SDD: convencion operativa para domesticar agentes**
19. **Verificar, archivar y aprender**

### Bloque 08 - Apertura y stack
20. **Open source AI, open weights y self-hosted responden preguntas distintas**
21. **Capas de un stack razonable**
22. **Reglas practicas de diseno**

## Criterio de implementacion web

- Mantener la navegacion local sin build.
- Separar contenido y render via schema de escenas en `app.js`.
- Reutilizar la idea sana de `beats` y `indice lateral`, pero con visuales mas tecnicas y menos "show" que la presentacion anterior.
- Dejar visuales suficientemente modulares para que una escena nueva sea agregar datos, no reescribir la app.
