const scenes = [
  {
    id: "ia-no-es-chat",
    module: "01",
    moduleTitle: "Romper la ilusion",
    kicker: "IA no es chat",
    type: "cover",
    tone: "ember",
    eyebrow: "Apertura",
    title: "IA no es chat.",
    lead:
      "Chat es una interfaz comoda. Sistema cognitivo es la arquitectura que hace que esa interfaz no se desarme cuando el problema deja de ser chiquito.",
    thesis:
      "Un LLM genera la siguiente salida plausible. La arquitectura decide si eso termina en una demo simpatica o en una operacion util.",
    beats: [
      {
        title: "Rompe la fantasia",
        copy: "Si no podes dibujar entradas, control, memoria y herramientas, no tenes IA aplicada. Tenes una caja de texto con esteroides."
      },
      {
        title: "Cambia la pregunta",
        copy: "No preguntes que prompt usar. Pregunta que decision hay que sostener y que sistema la hace repetible."
      }
    ],
    visual: {
      kind: "systemMap",
      variant: "opening",
      caption: "De interfaz a sistema",
      surface: {
        title: "Chat",
        copy: "interfaz comoda"
      },
      core: {
        title: "Arquitectura",
        copy: "decision + orquestacion"
      },
      footer: "El chat muestra la punta. El sistema sostiene la utilidad.",
      items: [
        { title: "Contexto", copy: "define que entra y con que prioridad", step: 1 },
        { title: "Tools", copy: "convierten palabras en evidencia y accion", step: 2 },
        { title: "Memoria", copy: "guarda continuidad util sin inflar el hilo", step: 2 },
        { title: "Control", copy: "mide, observa y limita el sistema", step: 2 }
      ]
    },
    note: "La charla avanza de generacion a operacion: menos fe, mas sistema."
  },
  {
    id: "formula-del-sistema",
    module: "02",
    moduleTitle: "Ubicar la pieza",
    kicker: "La formula del sistema",
    type: "split",
    tone: "teal",
    eyebrow: "Marco",
    title: "La formula del sistema",
    lead:
      "Cuando algo falla, casi nunca falla el modelo solo. Falla una de las capas que lo rodean.",
    thesis:
      "Modelo + contexto + herramientas + memoria + workflow + evaluacion.",
    beats: [
      {
        title: "Capacidad",
        copy: "El modelo aporta generacion. El contexto decide con que material razona."
      },
      {
        title: "Operacion",
        copy: "Las herramientas convierten opinion en evidencia y el workflow le pone orden a la ejecucion."
      },
      {
        title: "Control",
        copy: "Memoria, evals y observabilidad sostienen continuidad, calidad y debugging."
      }
    ],
    visual: {
      kind: "formula",
      caption: "Seis piezas, un contrato",
      items: [
        { title: "Modelo", copy: "Genera opciones, no garantiza criterio.", step: 1 },
        { title: "Contexto", copy: "Selecciona que ve el modelo y en que orden.", step: 1 },
        { title: "Herramientas", copy: "Permiten consultar, ejecutar y verificar.", step: 2 },
        { title: "Memoria", copy: "Recupera senal util sin inflar cada prompt.", step: 2 },
        { title: "Workflow", copy: "Separa pasos, responsabilidades y cortes.", step: 3 },
        { title: "Evaluacion", copy: "Mide si el sistema sigue siendo confiable.", step: 3 }
      ]
    }
  },
  {
    id: "que-hace-y-no-hace",
    module: "02",
    moduleTitle: "Ubicar la pieza",
    kicker: "Que hace un LLM y que no",
    type: "split",
    tone: "teal",
    eyebrow: "Modelo",
    title: "Un LLM genera. No gobierna el sistema.",
    lead:
      "Sirve para transformar lenguaje, proponer pasos, resumir, clasificar y traducir entre formatos. No sirve para inventarse una arquitectura coherente por arte de magia.",
    thesis:
      "Prediccion probabilistica no es memoria durable, evidencia, ni control de ejecucion.",
    beats: [
      {
        title: "Si hace",
        copy: "Condensar, reescribir, estructurar, planear corto y producir borradores utiles."
      },
      {
        title: "No hace",
        copy: "Recordar por si mismo, validar hechos sin fuente, ni mantener consistencia contractual sin apoyos externos."
      }
    ],
    visual: {
      kind: "comparison",
      caption: "Capacidad real vs fantasia",
      items: [
        { side: "good", title: "Generar", copy: "Texto, codigo, planes y propuestas con velocidad.", step: 1 },
        { side: "good", title: "Comprimir", copy: "Extraer senal de material disperso.", step: 1 },
        { side: "bad", title: "Recordar", copy: "No retiene decisiones por continuidad operativa.", step: 2 },
        { side: "bad", title: "Garantizar", copy: "No valida verdad, permisos ni impacto por si solo.", step: 2 }
      ]
    }
  },
  {
    id: "mas-modelo-no-arregla",
    module: "03",
    moduleTitle: "Mostrar degradacion",
    kicker: "Primer error",
    type: "split",
    tone: "fire",
    eyebrow: "Error comun",
    title: "Mas modelo no arregla mal diseno.",
    lead:
      "Cuando el sistema mezcla ruido, permisos, historial, archivos y objetivos en una sola bolsa, subir de modelo solo vuelve mas cara la misma confusion.",
    thesis:
      "El cuello de botella suele ser arquitectura: no capacidad bruta.",
    beats: [
      {
        title: "Costo sin criterio",
        copy: "Mas tokens y mas latencia no implican mejor foco. A veces compran mas deriva."
      },
      {
        title: "Error compuesto",
        copy: "Si el contexto entra mal, el modelo mas fuerte razona mejor... sobre basura mejor presentada."
      },
      {
        title: "Senal del problema",
        copy: "Cuando arreglas una falla agregando prompt y no cambiando sistema, estas pateando deuda tecnica."
      }
    ],
    visual: {
      kind: "pressure",
      caption: "El problema escala mas rapido que el prompt",
      items: [
        { side: "bad", title: "Prompt largo", copy: "Pega un parche y parece que mejora.", step: 1 },
        { side: "bad", title: "Modelo mas caro", copy: "Baja algo de error, pero no separa causas.", step: 2 },
        { side: "good", title: "Arquitectura", copy: "Reduce mezcla, define entradas, y recupera control.", step: 3 }
      ]
    }
  },
  {
    id: "chat-hasta-que-crece",
    module: "03",
    moduleTitle: "Mostrar degradacion",
    kicker: "De chat a quilombo",
    type: "split",
    tone: "fire",
    eyebrow: "Escala",
    title: "Chat sirve... hasta que el problema crece.",
    lead:
      "Para una consulta aislada, chat anda barbaro. Cuando aparece estado, varias fuentes, permisos, pasos y errores, la conversacion empieza a ser una mochila cada vez mas pesada.",
    thesis:
      "La interfaz de chat es lineal. El problema real suele ser no lineal.",
    beats: [
      {
        title: "Caso chico",
        copy: "Pregunta puntual, respuesta puntual, sin dependencia futura."
      },
      {
        title: "Caso serio",
        copy: "Decisiones encadenadas, multiples herramientas, memoria, verificacion y riesgo."
      },
      {
        title: "Resultado",
        copy: "El historial se vuelve pseudo base de datos, pseudo backlog y pseudo bitacora al mismo tiempo. Mala idea."
      }
    ],
    visual: {
      kind: "metrics",
      caption: "Lo que se rompe cuando escalas en el mismo hilo",
      items: [
        { label: "Contexto", value: "Sube", copy: "cada vuelta mete mas arrastre", step: 1 },
        { label: "Foco", value: "Baja", copy: "se diluye entre decisiones viejas", step: 2 },
        { label: "Control", value: "Se pierde", copy: "ya no sabes que recordar ni que ejecutar", step: 3 }
      ]
    }
  },
  {
    id: "ventana-finita",
    module: "03",
    moduleTitle: "Mostrar degradacion",
    kicker: "Pizarra finita",
    type: "split",
    tone: "fire",
    eyebrow: "Context window",
    title: "La ventana de contexto es una pizarra finita.",
    lead:
      "Todo lo que el modelo ve compite por un lugar fisico: instrucciones, historial, archivos, tool outputs y tu pedido actual.",
    thesis:
      "Si metes todo, nada queda claramente priorizado.",
    beats: [
      {
        title: "No es memoria infinita",
        copy: "Es un espacio de trabajo temporal con presupuesto fijo."
      },
      {
        title: "Todo compite",
        copy: "Instrucciones, transcript y datos utilitarios pelean por atencion en la misma ventana."
      },
      {
        title: "Overflow",
        copy: "Lo que no entra se pierde; lo que entra tarde suele llegar con menos peso."
      }
    ],
    visual: {
      kind: "window",
      caption: "Lo que entra en la pizarra",
      items: [
        { slot: "S", title: "System", copy: "Reglas base del agente.", step: 1 },
        { slot: "H", title: "Historial", copy: "Mensajes previos y decisiones arrastradas.", step: 2 },
        { slot: "D", title: "Datos", copy: "Archivos, retrieval y salidas de tools.", step: 2 },
        { slot: "N", title: "Necesidad actual", copy: "La tarea concreta que deberia dominar.", step: 3 }
      ],
      overflow: "Todo lo demas queda afuera o entra peor comprimido."
    }
  },
  {
    id: "attention-decay",
    module: "03",
    moduleTitle: "Mostrar degradacion",
    kicker: "Attention decay",
    type: "split",
    tone: "fire",
    eyebrow: "Degradacion",
    title: "Mas texto no es mas foco.",
    lead:
      "A medida que el hilo crece, el modelo sigue viendo tokens, pero deja de distinguir con claridad que es decision vigente, que es contexto util y que es relleno historico.",
    thesis:
      "Attention decay: mas volumen, menos senal util por token.",
    beats: [
      {
        title: "Inicio",
        copy: "La tarea esta fresca y el objetivo domina la escena."
      },
      {
        title: "Mitad",
        copy: "Empiezan a mezclarse notas, correcciones y outputs de herramientas."
      },
      {
        title: "Largo",
        copy: "El sistema no olvida magicamente: simplemente discrimina peor."
      }
    ],
    visual: {
      kind: "decay",
      caption: "Cuando el hilo se alarga, cae el foco efectivo",
      items: [
        {
          label: "Consulta limpia",
          score: 88,
          stage: "Objetivo dominante",
          copy: "La tarea actual pesa mas que el resto y el modelo distingue bien que responder.",
          step: 1
        },
        {
          label: "Hilo util",
          score: 72,
          stage: "Senal todavia clara",
          copy: "Ya hay historial, pero el objetivo sigue relativamente visible y la decision principal no compite tanto.",
          step: 2
        },
        {
          label: "Hilo pesado",
          score: 48,
          stage: "Senal mezclada",
          copy: "Empiezan a mezclarse correcciones, notas y outputs. El modelo ve mas, pero prioriza peor.",
          step: 3
        },
        {
          label: "Transcripcion eterna",
          score: 28,
          stage: "Ruido dominante",
          copy: "La tarea vigente queda enterrada entre arrastre historico y contexto viejo. Ya no hay foco: hay friccion.",
          step: 3
        }
      ]
    },
    note: "Compactar puede ayudar, pero no reemplaza un sistema de memoria ni una politica de recuperacion."
  },
  {
    id: "context-engineering",
    module: "04",
    moduleTitle: "Separar senal de ruido",
    kicker: "Context engineering",
    type: "split",
    tone: "teal",
    eyebrow: "Diseno de entrada",
    title: "Context engineering: disenar entrada, no adornar prompts.",
    lead:
      "El trabajo importante pasa antes de invocar al modelo: seleccionar que datos entran, en que formato, con que jerarquia y para sostener que decision.",
    thesis:
      "La calidad del input se diseña. No se improvisa con un prompt lindo al final.",
    beats: [
      {
        title: "Objetivo claro",
        copy: "Primero definis la salida y las restricciones. Recién despues armas el contexto."
      },
      {
        title: "Separacion",
        copy: "Instrucciones, datos, reglas y evidencia no deberian viajar mezclados."
      },
      {
        title: "Orden",
        copy: "Poner primero lo critico y ultimo lo accesorio cambia la respuesta."
      }
    ],
    visual: {
      kind: "retrieval",
      caption: "Retrieval antes del prompt",
      items: [
        { side: "good", title: "Fuente", copy: "datos y documentos con metadata", step: 1 },
        { side: "good", title: "Filtro", copy: "criterio para separar senal de ruido", step: 2 },
        { side: "good", title: "Ranking", copy: "entra lo mas util, no lo mas largo", step: 2 },
        { side: "good", title: "Prompt", copy: "recibe evidencia ya curada", step: 3 }
      ]
    }
  },
  {
    id: "memoria-no-historial",
    module: "04",
    moduleTitle: "Separar senal de ruido",
    kicker: "Memoria",
    type: "split",
    tone: "teal",
    eyebrow: "Persistencia",
    title: "Memoria no es historial.",
    lead:
      "Historial es lo que paso en el hilo. Memoria es la senal que vale la pena reescribir, guardar y recuperar con criterio.",
    thesis:
      "Si todo se guarda, nada se recupera bien. La memoria buena es selectiva y util.",
    beats: [
      {
        title: "Transcript",
        copy: "Sirve para auditar la conversacion, no para reinyectar todo en cada tarea."
      },
      {
        title: "Memoria util",
        copy: "Guarda decisiones, restricciones, hallazgos y estado operativo relevante."
      },
      {
        title: "Politica",
        copy: "Hace falta decidir cuando escribir, cuando leer y cuando ignorar."
      }
    ],
    visual: {
      kind: "memory",
      caption: "Dos cosas distintas",
      items: [
        {
          side: "bad",
          title: "Historial entero",
          copy: "Largo, caro, ambiguo.",
          bullets: ["mezcla charla, error y ruido", "sirve para revisar", "mala base para arrancar cada tarea"],
          step: 1
        },
        {
          side: "good",
          title: "Memoria curada",
          copy: "Corta, durable, recuperable.",
          bullets: ["decisiones", "supuestos", "bloqueos", "patrones utiles"],
          step: 2
        }
      ]
    }
  },
  {
    id: "tools-cambian-evidencia",
    module: "05",
    moduleTitle: "Pasar de responder a operar",
    kicker: "Tools",
    type: "split",
    tone: "teal",
    eyebrow: "Evidencia",
    title: "Las tools cambian opinion por evidencia.",
    lead:
      "Mientras el modelo solo habla, seguimos en territorio de plausibilidad. Cuando puede leer un archivo, consultar una API o ejecutar una accion, aparece rastro verificable.",
    thesis:
      "Tool calling vale cuando cambia el sistema de creencias: de parecer correcto a poder demostrarlo.",
    beats: [
      {
        title: "Consultar",
        copy: "Leer docs, datos o codigo para salir del invento."
      },
      {
        title: "Ejecutar",
        copy: "Hacer algo con contrato claro: input, output, errores, permisos."
      },
      {
        title: "Observar",
        copy: "Usar el resultado real para decidir el siguiente paso."
      }
    ],
    visual: {
      kind: "tools",
      caption: "Loop minimo de evidencia",
      items: [
        { title: "Consultar", copy: "fuentes, docs, repos, APIs", step: 1 },
        { title: "Ejecutar", copy: "una accion con limites y permisos", step: 2 },
        { title: "Observar", copy: "salida verificable para decidir mejor", step: 3 }
      ]
    },
    note: "No hace falta un catalogo de herramientas. Hace falta criterio para saber que evidencia sumar."
  },
  {
    id: "del-chat-al-agente",
    module: "05",
    moduleTitle: "Pasar de responder a operar",
    kicker: "Del chat al agente",
    type: "split",
    tone: "teal",
    eyebrow: "Autonomia con limites",
    title: "Responder no es lo mismo que operar.",
    lead:
      "Un agente no es magia autonoma. Es un loop controlado que puede planear corto, usar herramientas, actualizar estado y decidir si seguir o frenar.",
    thesis:
      "A veces alcanza un workflow. A veces hace falta un agente. La madurez esta en distinguirlos.",
    beats: [
      {
        title: "Workflow alcanza cuando",
        copy: "Los pasos son previsibles, las dependencias claras y queres trazabilidad fuerte."
      },
      {
        title: "Agente suma cuando",
        copy: "Hace falta elegir dinamicamente la siguiente accion segun evidencia nueva."
      },
      {
        title: "Ambos piden control",
        copy: "Objetivos, limites, politica de corte y observabilidad."
      }
    ],
    visual: {
      kind: "workflow",
      caption: "Cuando alcanza un workflow y cuando no",
      items: [
        { side: "good", title: "Workflow", copy: "pasos explicitos, resultado repetible", step: 1 },
        { side: "good", title: "Agente", copy: "elige segun evidencia dentro de un marco", step: 2 },
        { side: "bad", title: "Pseudo autonomia", copy: "sin cortes ni roles, deriva caro", step: 3 }
      ]
    }
  },
  {
    id: "matar-god-agent",
    module: "06",
    moduleTitle: "Matar el God Agent",
    kicker: "Anti patron",
    type: "split",
    tone: "fire",
    eyebrow: "Control arquitectonico",
    title: "Mata al God Agent.",
    lead:
      "Un solo agente con todo el contexto, todas las tools y todos los permisos parece flexible en demo. En produccion mezcla decisiones, esconde errores y hace imposible entender que fallo.",
    thesis:
      "Si un mismo ente piensa, ejecuta, recuerda y aprueba todo, no diseñaste control: diseñaste fe.",
    beats: [
      {
        title: "Sindrome de mochila",
        copy: "Carga todas las instrucciones y todo el historial porque nadie quiere separar responsabilidades."
      },
      {
        title: "Fresh context",
        copy: "Cada sub-tarea deberia arrancar con contexto nuevo y acotado para su objetivo real."
      },
      {
        title: "Roles",
        copy: "Explorar, implementar, verificar y decidir no son el mismo trabajo."
      }
    ],
    visual: {
      kind: "system",
      caption: "Centralizar todo vs separar roles",
      items: [
        { side: "bad", title: "God Agent", copy: "todo el contexto, todos los permisos, un solo punto ciego", step: 1 },
        { side: "good", title: "Explorar", copy: "contexto chico, pregunta bien hecha", step: 2 },
        { side: "good", title: "Aplicar", copy: "ejecucion enfocada, herramientas precisas", step: 2 },
        { side: "good", title: "Verificar", copy: "control independiente y reporte claro", step: 3 }
      ]
    }
  },
  {
    id: "cognitive-system",
    module: "07",
    moduleTitle: "Presentar el cognitive system",
    kicker: "Arquitectura minima",
    type: "split",
    tone: "teal",
    eyebrow: "Sistema",
    title: "Cognitive system: orquestar en vez de rezar.",
    lead:
      "No se trata de meter un agente grandote. Se trata de coordinar componentes que lean contexto relevante, ejecuten con herramientas, escriban memoria util y dejen trazas auditable.",
    thesis:
      "La unidad minima del sistema no es el prompt: es la arquitectura que conecta capacidad, ejecucion y control.",
    beats: [
      {
        title: "Entrada deliberada",
        copy: "Retrieval, filtros y contexto acotado antes de generar."
      },
      {
        title: "Operacion controlada",
        copy: "Roles, tools y workflow con objetivos y cortes explicitos."
      },
      {
        title: "Estado y control",
        copy: "Memoria, evals, observabilidad y seguridad sostenidos fuera del chat."
      }
    ],
    visual: {
      kind: "architecture",
      caption: "Capacidad, ejecucion y control",
      items: [
        { title: "Capacidad", role: "modelo, contexto, retrieval", copy: "hace trabajo cognitivo util", step: 1 },
        { title: "Ejecucion", role: "tools, roles, workflow", copy: "convierte plan en accion trazable", step: 2 },
        { title: "Control", role: "memoria, evals, observabilidad", copy: "reduce deriva y permite mejora continua", step: 3 }
      ]
    }
  },
  {
    id: "evals-observabilidad-seguridad",
    module: "07",
    moduleTitle: "Presentar el cognitive system",
    kicker: "Control",
    type: "split",
    tone: "teal",
    eyebrow: "Operacion real",
    title: "Sin evals, observabilidad y seguridad no hay sistema serio.",
    lead:
      "Lo que no medis se rompe en silencio. Lo que no trazas no lo podes debuggear. Lo que no limitas termina golpeando permisos, datos o acciones.",
    thesis:
      "Sistema cognitivo sin control es solo automatizacion con fe. Y la fe no debugea nada.",
    beats: [
      {
        title: "Evals",
        copy: "Miden exactitud, formato, riesgo, costo y regresion."
      },
      {
        title: "Observabilidad",
        copy: "Te dice que contexto se uso, que tools corrieron y que paso en cada paso."
      },
      {
        title: "Seguridad",
        copy: "Define permisos minimos, separa datos sensibles y evita tool abuse."
      }
    ],
    visual: {
      kind: "control",
      caption: "Tres guardias del sistema",
      items: [
        { side: "good", title: "Evals", copy: "casos felices, bordes y regresion", step: 1 },
        { side: "good", title: "Observabilidad", copy: "contexto, latencia, errores y trazas", step: 2 },
        { side: "good", title: "Seguridad", copy: "permisos minimos, filtros y auditoria", step: 3 }
      ]
    }
  },
  {
    id: "regla-de-diseno",
    module: "08",
    moduleTitle: "Cerrar con criterio",
    kicker: "Regla de diseno",
    type: "close",
    tone: "ember",
    eyebrow: "Cierre",
    title: "Primero sistema. Despues modelo.",
    lead:
      "La pregunta madura no es que LLM uso. Es que arquitectura necesito para que una decision siga siendo confiable cuando crecen el contexto, el costo y el riesgo.",
    thesis:
      "Si el problema crece, sali del chat: diseña entrada, memoria, herramientas, workflow y control.",
    beats: [
      {
        title: "Regla 1",
        copy: "Si algo depende de continuidad, no lo dejes viviendo solo en el hilo."
      },
      {
        title: "Regla 2",
        copy: "Si algo importa, dejalo trazable: herramientas, decisiones y resultados."
      },
      {
        title: "Regla 3",
        copy: "Si no podes explicarlo como sistema, todavia estas mostrando una demo."
      }
    ],
    visual: {
      kind: "systemMap",
      variant: "closing",
      caption: "Regla minima de diseno",
      surface: {
        title: "Modelo",
        copy: "capacidad aislada"
      },
      core: {
        title: "Sistema",
        copy: "arquitectura deliberada"
      },
      footer: "Si el problema crece, diseña capas, relaciones y control. Recién despues elegi modelo.",
      items: [
        { title: "Entrada", copy: "retrieval y contexto antes del prompt", step: 1 },
        { title: "Operacion", copy: "workflow, roles y herramientas claras", step: 2 },
        { title: "Memoria", copy: "estado curado, no transcript eterno", step: 2 },
        { title: "Control", copy: "evals, trazas y seguridad desde el inicio", step: 3 }
      ]
    },
    note: "Cierre: de chat a sistema cognitivo. La arquitectura decide si la IA es util o berreta."
  }
];

const state = {
  sceneIndex: 0,
  stepIndex: 0,
  visited: new Set([0])
};

const groupedScenes = scenes.reduce((acc, scene, index) => {
  const existing = acc.find((item) => item.module === scene.module);
  if (existing) {
    existing.scenes.push({ id: scene.id, title: scene.title, index });
    return acc;
  }

  acc.push({
    module: scene.module,
    title: scene.moduleTitle,
    scenes: [{ id: scene.id, title: scene.title, index }]
  });

  return acc;
}, []);

const stage = document.getElementById("scene-stage");
const sceneIndexNode = document.getElementById("scene-index");
const progressFill = document.getElementById("progress-fill");
const stepProgress = document.getElementById("step-progress");
const currentBlockLabel = document.getElementById("current-block-label");
const currentSceneTitle = document.getElementById("current-scene-title");
const sceneCounter = document.getElementById("scene-counter");
const blockCounter = document.getElementById("block-counter");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSceneMaxStep(scene) {
  const beatMax = scene.beats ? scene.beats.length : 1;
  const visualMax = scene.visual && scene.visual.items
    ? scene.visual.items.reduce((max, item) => Math.max(max, item.step || 1), 1)
    : 1;

  return Math.max(beatMax, visualMax, 1);
}

function renderBeat(beat, index, currentStep) {
  const visible = index <= currentStep;

  return `
    <article class="scene-beat ${visible ? "" : "is-hidden"}">
      <div class="scene-beat-head">
        <strong>${escapeHtml(beat.title)}</strong>
        <span class="step-chip">Paso ${index + 1}</span>
      </div>
      <p class="scene-note">${escapeHtml(beat.copy)}</p>
    </article>
  `;
}

function filterVisible(items, currentStep) {
  return items.filter((item) => (item.step || 1) <= currentStep + 1);
}

function renderFormula(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="formula-grid">
        ${visible
          .map(
            (item) => `
              <article class="formula-card">
                <strong>${escapeHtml(item.title)}</strong>
                <em>${escapeHtml(item.copy)}</em>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderComparison(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="comparison-grid">
        ${visible
          .map(
            (item) => `
              <article class="comparison-card ${item.side}">
                <p class="comparison-label">${item.side === "good" ? "Sirve para" : "No sirve para"}</p>
                <strong>${escapeHtml(item.title)}</strong>
                <p class="comparison-copy">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMetrics(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="metric-strip">
        ${visible
          .map(
            (item) => `
              <article class="metric-card">
                <p class="metric-label">${escapeHtml(item.label)}</p>
                <strong>${escapeHtml(item.value)}</strong>
                <span class="metric-value">${escapeHtml(item.copy)}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderWindow(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="window-stack">
        ${visible
          .map(
            (item) => `
              <article class="window-card" data-slot="${escapeHtml(item.slot)}">
                <strong>${escapeHtml(item.title)}</strong>
                <span class="window-copy">${escapeHtml(item.copy)}</span>
              </article>
            `
          )
          .join("")}
      </div>
      ${currentStep + 1 >= getSceneMaxStep(scene)
        ? `<div class="window-overflow">${escapeHtml(scene.visual.overflow)}</div>`
        : ""}
    </div>
  `;
}

function renderDecay(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);
  const maxScore = Math.max(...scene.visual.items.map((item) => item.score));

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="decay-axis" aria-hidden="true">
        <span>Foco alto</span>
        <span>Foco bajo</span>
      </div>
      <div class="decay-stack">
        ${visible
          .map(
            (item, index) => `
              <article class="decay-card ${item.score < 40 ? "low" : item.score < 60 ? "mid" : ""}">
                <div class="decay-card-head">
                  <div>
                    <p class="comparison-label">Etapa ${index + 1}</p>
                    <strong>${escapeHtml(item.label)}</strong>
                    <p class="decay-copy">${escapeHtml(item.stage)}</p>
                  </div>
                  <div class="decay-score-block">
                    <span class="decay-score">${escapeHtml(item.score.toString())}%</span>
                    <span class="comparison-label">foco util</span>
                  </div>
                </div>
                <div class="decay-meter" aria-hidden="true">
                  <div class="decay-meter-fill ${item.score < 40 ? "low" : item.score < 60 ? "mid" : ""}" style="width:${(item.score / maxScore) * 100}%"></div>
                </div>
                <p class="decay-card-copy">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="window-overflow decay-summary">
        La degradacion no significa que el modelo deje de leer: significa que cada token nuevo compite peor por prioridad y la tarea actual pierde nitidez.
      </div>
    </div>
  `;
}

function renderRetrieval(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="retrieval-flow">
        ${visible
          .map(
            (item) => `
              <article class="retrieval-card ${item.side}">
                <strong>${escapeHtml(item.title)}</strong>
                <span class="retrieval-copy">${escapeHtml(item.copy)}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMemory(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="memory-grid">
        ${visible
          .map(
            (item) => `
              <article class="memory-card ${item.side}">
                <strong>${escapeHtml(item.title)}</strong>
                <p class="memory-copy">${escapeHtml(item.copy)}</p>
                <ul class="memory-list">
                  ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderTools(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="tool-grid">
        ${visible
          .map(
            (item) => `
              <article class="tool-card">
                <p class="comparison-label">${item.title}</p>
                <strong>${escapeHtml(item.title)}</strong>
                <p class="tool-copy">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderWorkflow(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="workflow-grid">
        ${visible
          .map(
            (item) => `
              <article class="workflow-card ${item.side}">
                <strong>${escapeHtml(item.title)}</strong>
                <p class="workflow-caption">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderArchitecture(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="architecture-grid">
        ${visible
          .map(
            (item) => `
              <article class="architecture-card">
                <strong>${escapeHtml(item.title)}</strong>
                <span class="architecture-role">${escapeHtml(item.role)}</span>
                <span class="architecture-copy">${escapeHtml(item.copy)}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderControl(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="control-grid">
        ${visible
          .map(
            (item) => `
              <article class="control-card ${item.side}">
                <strong>${escapeHtml(item.title)}</strong>
                <p class="control-copy">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPressure(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="pressure-grid">
        ${visible
          .map(
            (item) => `
              <article class="pressure-card ${item.side}">
                <strong>${escapeHtml(item.title)}</strong>
                <p class="pressure-copy">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderSystem(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="system-grid">
        ${visible
          .map(
            (item) => `
              <article class="system-card ${item.side}">
                <strong>${escapeHtml(item.title)}</strong>
                <p class="system-copy">${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderSystemMap(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);
  const variantClass = scene.visual.variant === "closing" ? "is-closing" : "is-opening";
  const hiddenCount = scene.visual.items.length - visible.length;

  return `
    <div class="visual-panel system-map ${variantClass}">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="system-map-shell">
        <div class="system-map-layout">
          <section class="system-map-surface">
            <p class="comparison-label">Superficie</p>
            <div class="system-map-surface-badge">${escapeHtml(scene.visual.surface.title)}</div>
            <p class="system-map-surface-copy">${escapeHtml(scene.visual.surface.copy)}</p>
            <div class="system-map-surface-divider"></div>
            <p class="system-map-surface-warning">No alcanza cuando aparecen estado, riesgo y ejecucion real.</p>
          </section>

          <section class="system-map-core">
            <p class="comparison-label">Nucleo</p>
            <h4>${escapeHtml(scene.visual.core.title)}</h4>
            <p class="system-map-core-copy">${escapeHtml(scene.visual.core.copy)}</p>
            <ul class="system-map-core-list">
              <li>ordena entradas</li>
              <li>coordina acciones</li>
              <li>sostiene control</li>
            </ul>
          </section>

          <section class="system-map-layers ${hiddenCount > 0 ? "has-hidden" : ""}">
            <div class="system-map-layers-head">
              <p class="comparison-label">Capas del sistema</p>
              <span>${visible.length}/${scene.visual.items.length}</span>
            </div>
            <div class="system-map-layer-grid">
              ${scene.visual.items
                .map((item) => {
                  const shown = visible.includes(item);
                  return `
                    <article class="system-map-layer ${shown ? "is-visible" : "is-hidden"}">
                      <p class="comparison-label">Capa</p>
                      <strong>${escapeHtml(item.title)}</strong>
                      <p>${escapeHtml(item.copy)}</p>
                    </article>
                  `;
                })
                .join("")}
            </div>
          </section>
        </div>

        <div class="system-map-summary">
          ${visible
            .map(
              (item, index) => `
                <article class="system-map-card">
                  <p class="comparison-label">Capa ${index + 1}</p>
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.copy)}</p>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="system-map-footer">${escapeHtml(scene.visual.footer)}</div>
      </div>
    </div>
  `;
}

function renderVisual(scene, currentStep) {
  if (!scene.visual) {
    return "";
  }

  switch (scene.visual.kind) {
    case "formula":
      return renderFormula(scene, currentStep);
    case "comparison":
      return renderComparison(scene, currentStep);
    case "metrics":
      return renderMetrics(scene, currentStep);
    case "window":
      return renderWindow(scene, currentStep);
    case "decay":
      return renderDecay(scene, currentStep);
    case "retrieval":
      return renderRetrieval(scene, currentStep);
    case "memory":
      return renderMemory(scene, currentStep);
    case "tools":
      return renderTools(scene, currentStep);
    case "workflow":
      return renderWorkflow(scene, currentStep);
    case "architecture":
      return renderArchitecture(scene, currentStep);
    case "control":
      return renderControl(scene, currentStep);
    case "pressure":
      return renderPressure(scene, currentStep);
    case "system":
      return renderSystem(scene, currentStep);
    case "systemMap":
      return renderSystemMap(scene, currentStep);
    default:
      return "";
  }
}

function renderScene() {
  const scene = scenes[state.sceneIndex];
  const beats = scene.beats || [];

  stage.innerHTML = `
    <article class="scene scene-${scene.type} tone-${scene.tone}">
      <div class="scene-inner">
        <div class="scene-copy">
          <div>
            <p class="scene-kicker">${escapeHtml(scene.kicker)}</p>
            <p class="scene-eyebrow">${escapeHtml(scene.eyebrow)}</p>
          </div>
          ${scene.type === "split" ? `<h4>${escapeHtml(scene.title)}</h4>` : `<h3>${escapeHtml(scene.title)}</h3>`}
          <p class="scene-lead">${escapeHtml(scene.lead)}</p>
          <p class="scene-thesis">${escapeHtml(scene.thesis)}</p>
          <div class="scene-beats">
            ${beats.map((beat, index) => renderBeat(beat, index, state.stepIndex)).join("")}
          </div>
          ${scene.note ? `<p class="scene-note">${escapeHtml(scene.note)}</p>` : ""}
        </div>
        <div class="scene-visual">
          ${renderVisual(scene, state.stepIndex)}
        </div>
      </div>
    </article>
  `;

  updateChrome(scene);
}

function updateChrome(scene) {
  const modulePosition = groupedScenes.findIndex((item) => item.module === scene.module) + 1;
  const maxStep = getSceneMaxStep(scene);
  const progress = ((state.sceneIndex + 1) / scenes.length) * 100;

  currentBlockLabel.textContent = `${scene.module} / ${scene.moduleTitle}`;
  currentSceneTitle.textContent = scene.title;
  sceneCounter.textContent = `${String(state.sceneIndex + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  blockCounter.textContent = `${modulePosition} / ${groupedScenes.length}`;
  progressFill.style.width = `${progress}%`;
  stepProgress.innerHTML = Array.from({ length: maxStep })
    .map((_, index) => {
      const className = index < state.stepIndex ? "is-done" : index === state.stepIndex ? "is-active" : "";
      return `<span class="${className}"></span>`;
    })
    .join("");

  document.title = `${scene.title} - IA no es chat V2`;
  history.replaceState(null, "", `#${scene.id}`);
  renderIndex();
}

function renderIndex() {
  sceneIndexNode.innerHTML = groupedScenes
    .map((group) => {
      const active = scenes[state.sceneIndex].module === group.module;

      return `
        <section class="index-block ${active ? "is-active" : ""}">
          <button class="index-block-title" data-first-index="${group.scenes[0].index}">
            <span class="index-block-label">Bloque ${group.module}</span>
            <span class="index-block-name">${escapeHtml(group.title)}</span>
          </button>
          <div class="index-dots">
            ${group.scenes
              .map((sceneRef) => {
                const isActive = sceneRef.index === state.sceneIndex;
                const isViewed = state.visited.has(sceneRef.index);
                const classes = ["scene-dot"];

                if (isActive) {
                  classes.push("is-active");
                } else if (isViewed) {
                  classes.push("is-viewed");
                }

                return `<button class="${classes.join(" ")}" data-scene-index="${sceneRef.index}" aria-label="${escapeHtml(sceneRef.title)}"></button>`;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function goToScene(index, step = 0) {
  state.sceneIndex = Math.max(0, Math.min(index, scenes.length - 1));
  state.stepIndex = Math.max(0, Math.min(step, getSceneMaxStep(scenes[state.sceneIndex]) - 1));
  state.visited.add(state.sceneIndex);
  renderScene();
}

function next() {
  const scene = scenes[state.sceneIndex];
  const maxStep = getSceneMaxStep(scene);

  if (state.stepIndex < maxStep - 1) {
    goToScene(state.sceneIndex, state.stepIndex + 1);
    return;
  }

  if (state.sceneIndex < scenes.length - 1) {
    goToScene(state.sceneIndex + 1, 0);
  }
}

function prev() {
  if (state.stepIndex > 0) {
    goToScene(state.sceneIndex, state.stepIndex - 1);
    return;
  }

  if (state.sceneIndex > 0) {
    const previousScene = scenes[state.sceneIndex - 1];
    goToScene(state.sceneIndex - 1, getSceneMaxStep(previousScene) - 1);
  }
}

function bindEvents() {
  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      next();
      return;
    }

    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      prev();
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToScene(0, 0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      goToScene(scenes.length - 1, getSceneMaxStep(scenes[scenes.length - 1]) - 1);
    }
  });

  sceneIndexNode.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button");
    if (!button) {
      return;
    }

    if (button.dataset.sceneIndex) {
      goToScene(Number(button.dataset.sceneIndex), 0);
      return;
    }

    if (button.dataset.firstIndex) {
      goToScene(Number(button.dataset.firstIndex), 0);
    }
  });
}

function initFromHash() {
  const hash = window.location.hash.replace("#", "").trim();
  if (!hash) {
    return;
  }

  const index = scenes.findIndex((scene) => scene.id === hash);
  if (index >= 0) {
    state.sceneIndex = index;
    state.visited.add(index);
  }
}

initFromHash();
renderScene();
bindEvents();
