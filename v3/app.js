const scenes = [
  {
    id: "apertura-arquitectura",
    module: "01",
    moduleTitle: "Marco tecnico",
    type: "cover",
    tone: "cyan",
    kicker: "Master AI",
    eyebrow: "Premisa",
    title: "De piezas sueltas a arquitectura tecnica.",
    lead:
      "Esta presentacion ya no discute slogans. Ordena el mapa conceptual para distinguir capacidad del modelo, contexto activo, comportamiento reusable, accion, memoria, coordinacion y gobierno del sistema.",
    thesis:
      "Si mezclas modelo, skill, tool, MCP, memoria y agente como si fueran sinonimos, despues diseñas un sistema caro, opaco y dificil de controlar.",
    beats: [
      {
        title: "Objetivo",
        copy: "No hacer glosario. Hacer contratos: que resuelve cada capa, que no resuelve y con que tradeoffs se conecta."
      },
      {
        title: "Criterio",
        copy: "Sintetizar la base documental fuerte sin convertir la charla en enciclopedia. Mejor pocas distinciones bien hechas que veinte palabras mal usadas."
      }
    ],
    visual: {
      kind: "map",
      caption: "Mapa conceptual que conviene separar",
      core: {
        title: "Sistema con IA",
        copy:
          "No es una caja de texto con esteroides. Es una composicion de capas con responsabilidades distintas y acoples que conviene volver explicitos.",
        bullets: ["capacidad", "seleccion", "accion", "continuidad", "coordinacion"]
      },
      items: [
        { title: "Modelo", copy: "Motor de inferencia, no sistema completo." },
        { title: "Contexto activo", copy: "RAM operacional para la corrida actual." },
        { title: "Skills / tools / MCP", copy: "Criterio reusable, accion operativa e interoperabilidad." },
        { title: "Memoria / retrieval", copy: "Persistir senal y recuperarla con criterio." },
        { title: "Agentes / workflows", copy: "Decidir cuando hace falta dinamica y cuando conviene control." }
      ]
    }
  },
  {
    id: "formula-operativa",
    module: "01",
    moduleTitle: "Marco tecnico",
    type: "split",
    tone: "cyan",
    kicker: "Contrato base",
    eyebrow: "Formula",
    title: "La formula operativa sigue mandando.",
    lead:
      "El modelo importa, pero la calidad real casi siempre se juega en el sistema que lo rodea: seleccion de evidencia, tools, memoria, workflow y evaluacion.",
    thesis:
      "Modelo + contexto + herramientas + memoria + workflow + evaluacion. La gracia no es recitar la formula: es no colapsar piezas distintas en una sola palabra vaga.",
    beats: [
      {
        title: "Capacidad",
        copy: "El modelo aporta inferencia y transformacion. No aporta por si solo memoria persistente, permisos ni trazabilidad."
      },
      {
        title: "Operacion",
        copy: "Tools, retrieval, memoria y workflows convierten una capacidad probabilistica en un sistema que puede observar, actuar y sostener continuidad."
      },
      {
        title: "Gobierno",
        copy: "Evaluacion, observabilidad y checkpoints determinan si el sistema es confiable o solo una demo que zafa una vez."
      }
    ],
    visual: {
      kind: "grid",
      caption: "Seis capas, seis preguntas distintas",
      items: [
        { title: "Modelo", meta: "capacidad", copy: "que puede inferir o transformar" },
        { title: "Contexto", meta: "seleccion", copy: "que ve ahora y con que prioridad" },
        { title: "Tools", meta: "accion", copy: "que capacidades operativas existen" },
        { title: "Memoria", meta: "continuidad", copy: "que vale la pena persistir y releer" },
        { title: "Workflow", meta: "coordinacion", copy: "como se ordenan fases, handoffs y cortes" },
        { title: "Evaluacion", meta: "control", copy: "como verificas calidad, costo y regresion" }
      ]
    }
  },
  {
    id: "modelo-fundacional",
    module: "02",
    moduleTitle: "Modelos y capacidades",
    type: "split",
    tone: "violet",
    kicker: "Modelo",
    eyebrow: "Capacidad",
    title: "Modelo fundacional: motor de inferencia, no sistema completo.",
    lead:
      "Un LLM es un tipo de modelo fundacional centrado en lenguaje. Recibe tokens, estima distribuciones sobre la siguiente salida y genera texto, codigo, estructura o decisiones intermedias.",
    thesis:
      "Lo que aporta un modelo es capacidad de inferencia. Lo que no aporta por si solo es verdad garantizada, memoria durable, permisos, observabilidad ni gobierno operacional.",
    beats: [
      {
        title: "Si aporta",
        copy: "Compresion de conocimiento, generalizacion util, traduccion entre formatos y cierto razonamiento cuando el sistema le arma bien la tarea."
      },
      {
        title: "No aporta",
        copy: "No trae adentro memoria persistente, contexto fresco, criterio de negocio confiable ni arquitectura sana alrededor."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Capacidad real vs fantasia habitual",
      items: [
        {
          side: "good",
          title: "Motor de inferencia",
          copy: "Genera, resume, clasifica, estructura y traduce entre lenguaje natural, codigo y formatos mas rigidos."
        },
        {
          side: "bad",
          title: "Cerebro universal",
          copy: "Si le pedis estado durable, permisos, trazabilidad y criterio operativo desde adentro del modelo, estas proyectando magia donde no la hay."
        },
        {
          side: "neutral",
          title: "Pieza del pipeline",
          copy: "Su valor real aparece cuando el sistema le da contexto curado, tools bien definidas y politicas de corte."
        }
      ]
    }
  },
  {
    id: "comparar-modelos",
    module: "02",
    moduleTitle: "Modelos y capacidades",
    type: "split",
    tone: "violet",
    kicker: "Comparacion",
    eyebrow: "Mercado real",
    title: "Comparar modelos exige separar capacidad, acceso y apertura.",
    lead:
      "No existe una taxonomia perfecta, pero para no hablar boludeces conviene separar al menos tres ejes: capacidad tecnica, modo de acceso y grado de apertura.",
    thesis:
      "Frontier API, open weights y open source AI no son sinónimos. Uno habla del modo de consumo, otro del acceso a pesos y otro de libertades fuertes sobre el sistema.",
    beats: [
      {
        title: "Frontier / closed API",
        copy: "Suelen ofrecer rendimiento alto y tooling administrado, a cambio de menos transparencia y mas dependencia del proveedor."
      },
      {
        title: "Open weights",
        copy: "Te dan acceso a pesos utilizables para servir o ajustar, pero no equivalen automaticamente a open source AI en sentido OSI."
      },
      {
        title: "Open source AI",
        copy: "Exige libertades reales y acceso suficiente a codigo, parametros e informacion de datos. Es una vara mas fuerte que publicar checkpoints."
      }
    ],
    visual: {
      kind: "grid",
      caption: "Ejes de comparacion maduros",
      items: [
        { title: "Capacidad", meta: "producto", copy: "razonamiento, multimodalidad, coding, tool use" },
        { title: "Acceso", meta: "consumo", copy: "API frontier, pesos abiertos, despliegue propio" },
        { title: "Apertura", meta: "licencia", copy: "open source AI vs open weights vs cerrado" },
        { title: "Operacion", meta: "infra", copy: "latencia, costo, serving, region, privacidad" },
        { title: "Contexto", meta: "working set", copy: "largo de ventana, calidad blanda, manejo real del input" },
        { title: "Gobierno", meta: "riesgo", copy: "lock-in, auditoria, cambios de catalogo y soberania" }
      ]
    }
  },
  {
    id: "mas-modelo-no-arregla",
    module: "02",
    moduleTitle: "Modelos y capacidades",
    type: "split",
    tone: "violet",
    kicker: "Escala",
    eyebrow: "Cuello de botella",
    title: "Mas modelo no arregla mal sistema.",
    lead:
      "A veces subir de modelo mejora resultados. Otras veces solo hace mas cara una arquitectura que sigue metiendo ruido, transcript, tool outputs y objetivos mezclados en la misma bolsa.",
    thesis:
      "Subi de modelo cuando el cuello de botella sea capacidad. Si el cuello de botella es seleccion, memoria o workflow, estas comprando confusion premium.",
    beats: [
      {
        title: "Cuando si ayuda",
        copy: "Cuando ya tenes contexto curado, retrieval razonable y herramientas bien delimitadas, pero la tarea exige mas capacidad de inferencia."
      },
      {
        title: "Cuando no",
        copy: "Cuando el sistema sigue usando el chat como backlog, base de datos, memoria y planificador al mismo tiempo."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Capacidad vs arquitectura",
      items: [
        {
          side: "good",
          title: "Cuello real: capacidad",
          copy: "La tarea es compleja y el sistema ya hizo su laburo de seleccionar evidencia, separar estado y exponer tools con criterio."
        },
        {
          side: "bad",
          title: "Cuello real: arquitectura",
          copy: "Contexto inflado, mala curacion de señal, tool outputs irrelevantes y ausencia de cortes. Un mejor modelo no te salva de eso."
        }
      ]
    }
  },
  {
    id: "context-window",
    module: "03",
    moduleTitle: "Contexto activo",
    type: "split",
    tone: "amber",
    kicker: "Context window",
    eyebrow: "RAM operacional",
    title: "Ventana de contexto: RAM, no disco.",
    lead:
      "La ventana de contexto es el conjunto de tokens que el modelo puede ver y usar ahora: instrucciones, historial, resultados de tools, documentos recuperados y la salida en curso segun el sistema.",
    thesis:
      "Tiene un limite duro de capacidad y un limite blando de calidad. Que algo entre no significa que siga siendo atendible ni prioritario cuando el contexto crece.",
    beats: [
      {
        title: "Que entra",
        copy: "System prompt, mensajes, retrieval, tool outputs, notas temporales y, a veces, la propia salida. Todo eso compite por atencion."
      },
      {
        title: "Que no es",
        copy: "No es memoria persistente, no es transcript infinito y no reemplaza retrieval ni compactacion bien pensada."
      },
      {
        title: "Degradacion",
        copy: "Long context amplia capacidad, pero no elimina context rot, ruido, distractores ni la necesidad de seleccionar."
      }
    ],
    visual: {
      kind: "flow",
      caption: "Todo compite dentro del working set actual",
      items: [
        { title: "Instrucciones activas", copy: "reglas vigentes y formato esperado" },
        { title: "Historial relevante", copy: "solo lo que sigue importando para esta corrida" },
        { title: "Evidencia fresca", copy: "retrieval, archivos y outputs de tools" },
        { title: "Estado de trabajo", copy: "notas o checkpoints temporales" },
        { title: "Necesidad actual", copy: "la tarea concreta que deberia dominar la atencion" }
      ],
      note: "Meter todo no es neutral. Aumenta costo y baja foco util."
    }
  },
  {
    id: "transcript-contexto-memoria",
    module: "03",
    moduleTitle: "Contexto activo",
    type: "split",
    tone: "amber",
    kicker: "Distincion critica",
    eyebrow: "No mezclar",
    title: "Transcript, contexto activo y memoria NO son lo mismo.",
    lead:
      "Esta es una de las confusiones que mas rompe sistemas. Una cosa es el historial bruto, otra lo que conviene mostrar ahora y otra lo que vale la pena persistir para recuperar despues.",
    thesis:
      "Transcript = todo lo que paso. Contexto activo = lo que conviene ver ahora. Memoria = senal persistida con intencion de reuso. Si mezclas esas capas, generas entropia operacional.",
    beats: [
      {
        title: "Transcript",
        copy: "Sirve para auditoria y debugging. No es automaticamente buen contexto operativo."
      },
      {
        title: "Contexto activo",
        copy: "Debe contener lo minimo suficiente para esta tarea: instrucciones vigentes, evidencia util y estado relevante."
      },
      {
        title: "Memoria",
        copy: "Vive fuera de la ventana activa y se trae on demand cuando vuelve a ser relevante."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Tres capas distintas",
      items: [
        {
          side: "neutral",
          title: "Transcript",
          copy: "Historial bruto para reconstruir que paso, cuando y por que. Util para auditar; malo como input universal de trabajo."
        },
        {
          side: "good",
          title: "Contexto activo",
          copy: "Working set acotado para esta corrida. Si no curas esto, el modelo tiene que recuperar y razonar al mismo tiempo."
        },
        {
          side: "good",
          title: "Memoria recuperable",
          copy: "Decisiones, restricciones, hallazgos y estado persistidos fuera del hilo para leerlos just in time."
        }
      ]
    }
  },
  {
    id: "skills-playbooks",
    module: "04",
    moduleTitle: "Skills, tools y MCP",
    type: "split",
    tone: "cyan",
    kicker: "Skills",
    eyebrow: "Comportamiento reusable",
    title: "Skills: playbooks reusables, no estandar universal homogeneo.",
    lead:
      "En esta charla, skill se explica sobre todo desde Claude Code y Agent Skills: un paquete reusable de instrucciones, criterios, procedimientos y recursos que el agente puede cargar cuando la tarea lo necesita.",
    thesis:
      "Prompt es una instruccion puntual. Skill es un playbook reusable con lazy loading. No conviene venderla como si todo ecosistema del mercado implementara exactamente lo mismo.",
    beats: [
      {
        title: "Que resuelve",
        copy: "Repeticion, inconsistencia y saturacion de contexto. En vez de pegar el mismo manual siempre, lo encapsulas y lo cargas cuando hace falta."
      },
      {
        title: "Que no es",
        copy: "No es memoria del trabajo hecho, no es un subagente y no es simplemente un prompt larguisimo con marketing arriba."
      },
      {
        title: "Tradeoff",
        copy: "Si las descriptions son malas o el catalogo crece sin criterio, la seleccion automatica se vuelve ruido en vez de ayuda."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Prompt, system prompt y skill juegan distinto",
      items: [
        {
          side: "neutral",
          title: "Prompt",
          copy: "Instruccion puntual para esta corrida o esta tarea concreta."
        },
        {
          side: "neutral",
          title: "System prompt",
          copy: "Marco base de la sesion o del agente. Define reglas globales, no especializacion puntual."
        },
        {
          side: "good",
          title: "Skill",
          copy: "Playbook reusable con instrucciones, metadatos, ejemplos y a veces archivos o herramientas de apoyo. Se carga segun relevancia."
        }
      ]
    }
  },
  {
    id: "tool-contrato",
    module: "04",
    moduleTitle: "Skills, tools y MCP",
    type: "split",
    tone: "cyan",
    kicker: "Tools",
    eyebrow: "Accion operativa",
    title: "Tool: contrato de accion, ejecucion y evidencia.",
    lead:
      "Una tool es una capacidad operativa expuesta al modelo con nombre, descripcion, parametros, forma de salida y manejo de errores. El modelo no ejecuta la accion: emite una llamada estructurada.",
    thesis:
      "Tool use serio no es magia. Es contrato + runtime que ejecuta + resultado que vuelve como evidencia. Sin esas tres piezas, seguis en territorio de plausibilidad."
    ,
    beats: [
      {
        title: "Decidir",
        copy: "El modelo decide cuando conviene usarla."
      },
      {
        title: "Ejecutar",
        copy: "La aplicacion o plataforma decide como se corre realmente la operacion."
      },
      {
        title: "Observar",
        copy: "El resultado o el error vuelve al contexto como evidencia verificable."
      }
    ],
    visual: {
      kind: "grid",
      caption: "Contrato minimo de una tool",
      items: [
        { title: "Nombre + descripcion", meta: "descubrimiento", copy: "cuando usarla y para que sirve" },
        { title: "Input schema", meta: "parametros", copy: "que acepta y que valida" },
        { title: "Output shape", meta: "resultado", copy: "que devuelve y en que formato" },
        { title: "Errores", meta: "fallo", copy: "que pasa si algo sale mal" },
        { title: "Permisos", meta: "riesgo", copy: "que puede tocar y que no" },
        { title: "Evidencia", meta: "grounding", copy: "que rastro deja para auditar y decidir" }
      ]
    }
  },
  {
    id: "mcp-protocolo",
    module: "04",
    moduleTitle: "Skills, tools y MCP",
    type: "split",
    tone: "cyan",
    kicker: "MCP",
    eyebrow: "Interoperabilidad",
    title: "MCP: protocolo para conectar capacidades, no la capacidad misma.",
    lead:
      "Model Context Protocol define como un host descubre e intercambia capacidades con servidores externos. La arquitectura oficial separa host, client y server.",
    thesis:
      "MCP no es una tool, no es un agente y no es requisito universal para tener tool use. Es una capa protocolar para exponer tools, resources y prompts de forma mas estandarizada.",
    beats: [
      {
        title: "Arquitectura",
        copy: "Host coordina. Client mantiene la conexion. Server expone capacidades."
      },
      {
        title: "Primitivas",
        copy: "No cubre solo tools: tambien resources y prompts del lado servidor."
      },
      {
        title: "Valor real",
        copy: "Reduce integraciones ad hoc cuando tenes varias capacidades heterogeneas y te sirve discovery mas limpio."
      }
    ],
    note: "Apoyado en la documentacion oficial de arquitectura y especificacion de MCP.",
    visual: {
      kind: "map",
      caption: "Arquitectura oficial simplificada",
      core: {
        title: "Host de IA",
        copy: "Coordina conexiones, negocia capacidades y decide como usar resultados del ecosistema externo.",
        bullets: ["host", "client", "server"]
      },
      items: [
        { title: "Client", copy: "Mantiene la conexion con un servidor MCP especifico." },
        { title: "Server", copy: "Expone tools, resources y prompts segun el protocolo." },
        { title: "Transporte", copy: "stdio o HTTP, segun corra local o remoto." },
        { title: "Ciclo de vida", copy: "inicializacion, negociacion de capacidades y notificaciones" }
      ]
    }
  },
  {
    id: "mcp-vs-tools-directas",
    module: "04",
    moduleTitle: "Skills, tools y MCP",
    type: "split",
    tone: "cyan",
    kicker: "No mezclar",
    eyebrow: "Protocolo vs capacidad",
    title: "MCP vs tools directas.",
    lead:
      "Podes exponer tools directamente desde tu app sin MCP. MCP agrega una capa de descubrimiento e interoperabilidad para conectar capacidades externas de forma mas estandar.",
    thesis:
      "Tool directa = capacidad concreta. MCP = protocolo para descubrir y usar capacidades. Una puede existir sin la otra. Forzar MCP en casos simples tambien es sobreingenieria.",
    beats: [
      {
        title: "Tools directas",
        copy: "Convienen cuando el sistema es chico, el acople esta bajo control y no vale la pena sumar mas piezas."
      },
      {
        title: "MCP",
        copy: "Empieza a sumar cuando necesitas conectar varios servers o separar host y capacidades con un contrato comun."
      }
    ],
    visual: {
      kind: "table",
      caption: "La misma necesidad, dos capas diferentes",
      columns: ["Que es", "Cuando suma", "Tradeoff"],
      rows: [
        {
          label: "Tool directa",
          values: [
            "capacidad expuesta desde tu runtime o app",
            "casos controlados, menos overhead",
            "mas acoplamiento y menos estandar comun"
          ]
        },
        {
          label: "MCP",
          values: [
            "protocolo para tools, resources y prompts",
            "ecosistemas heterogeneos y discovery reusable",
            "mas piezas, ciclo de vida y compatibilidad a cuidar"
          ]
        },
        {
          label: "Error comun",
          values: [
            "creer que MCP reemplaza el diseno de la tool",
            "ordenar intercambio y descubrimiento",
            "NO arregla una capacidad mal definida"
          ]
        }
      ]
    }
  },
  {
    id: "memoria-selectiva",
    module: "05",
    moduleTitle: "Memoria y retrieval",
    type: "split",
    tone: "amber",
    kicker: "Memoria",
    eyebrow: "Persistencia deliberada",
    title: "Memoria util: escritura selectiva y lectura escalonada.",
    lead:
      "Memoria, en sistemas con IA, es informacion persistida deliberadamente fuera del contexto activo para recuperarla despues cuando vuelva a ser relevante.",
    thesis:
      "Memoria no es guardar todo. Es decidir que senal vale la pena persistir, con que estructura y como leerla despues con progressive disclosure en vez de reinyectar todo de una.",
    beats: [
      {
        title: "Escritura",
        copy: "Conviene guardar decisiones, restricciones, preferencias, bugs, hallazgos y estado de workflow; no cada turno entero ni outputs efimeros."
      },
      {
        title: "Lectura",
        copy: "Buscar primero indices, previews o snapshots; abrir detalle solo cuando la tarea lo justifica."
      },
      {
        title: "Objetivo",
        copy: "Sostener continuidad entre sesiones y sobrevivir a compactacion o context exhaustion sin inflar el working set actual."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Basurero de logs vs memoria operativa",
      items: [
        {
          side: "bad",
          title: "Guardar todo",
          copy: "Transcript entero, intentos irrelevantes y outputs efimeros. Parece prudente; despues recuperar bien eso es un quilombo.",
          bullets: ["ruido", "duplicados", "mala recuperacion"]
        },
        {
          side: "good",
          title: "Memoria curada",
          copy: "Observaciones, summaries, facts y snapshots con metadatos utiles para buscarlos despues.",
          bullets: ["selectiva", "estructurada", "releible en escalones"]
        }
      ]
    }
  },
  {
    id: "retrieval-rag",
    module: "05",
    moduleTitle: "Memoria y retrieval",
    type: "split",
    tone: "amber",
    kicker: "Retrieval / RAG",
    eyebrow: "Senal y grounding",
    title: "Retrieval y RAG: recuperar senal, no meter PDFs al prompt.",
    lead:
      "Retrieval es recuperar informacion relevante desde una fuente externa para una tarea concreta. RAG es usar esa recuperacion para alimentar la generacion con grounding adicional.",
    thesis:
      "Memoria dice que guardas. Retrieval dice como lo buscas. RAG dice como esa recuperacion entra a la respuesta. Si el pipeline previo esta mal, el prompt llega tarde.",
    beats: [
      {
        title: "Pipeline real",
        copy: "Ingestion, chunking, embeddings si aplica, indexado, metadata, filtros, ranking o reranking, armado de contexto y respuesta."
      },
      {
        title: "Gran error",
        copy: "Pensar que RAG es semantic search + prompt. Sin metadata, filtros y ranking, el sistema se vuelve una biblioteca tirada en el piso."
      },
      {
        title: "Limite",
        copy: "RAG no reemplaza memoria persistente ni workflow. Sirve barbaro para grounding documental; ni en pedo alcanza solo para continuidad operativa."
      }
    ],
    visual: {
      kind: "flow",
      caption: "Pipeline de recuperacion serio",
      items: [
        { title: "Fuente", copy: "docs, codigo, memorias, bases, APIs" },
        { title: "Chunking + metadata", copy: "unidad util y contexto de origen" },
        { title: "Retrieval", copy: "semantico, keyword o hibrido" },
        { title: "Filtros + ranking", copy: "relevancia, permisos, fecha, proyecto" },
        { title: "Contexto final", copy: "solo la evidencia que vale la pena mostrar ahora" }
      ],
      note: "Progressive disclosure primero. Detalle completo despues, si hace falta."
    }
  },
  {
    id: "agente-loop",
    module: "06",
    moduleTitle: "Agentes y coordinacion",
    type: "split",
    tone: "red",
    kicker: "Agente",
    eyebrow: "Loop con policy",
    title: "Agente = loop con policy.",
    lead:
      "Un agente es un sistema donde el modelo recibe un objetivo, observa estado o evidencia, decide el siguiente paso, usa tools, evalua resultado, actualiza estado y repite hasta terminar o cortar.",
    thesis:
      "LLM + tools no basta. Si no hay policy, estado y stop conditions, no tenes agente robusto: tenes iteracion difusa con potencial de descontrol.",
    beats: [
      {
        title: "Objetivo + estado",
        copy: "Sin objetivo claro y alguna representacion del progreso, no hay criterio para decidir que hacer ni cuando terminar."
      },
      {
        title: "Policy",
        copy: "Define cuando buscar, cuando actuar, cuando pedir ayuda, cuando reformular y cuando parar."
      },
      {
        title: "Stop conditions",
        copy: "Presupuesto, bloqueo, falta de informacion, confianza insuficiente o checkpoint humano. Sin corte, el loop deriva."
      }
    ],
    visual: {
      kind: "loop",
      caption: "Loop minimo de un agente",
      items: [
        { title: "Objetivo", copy: "que decision o tarea hay que sostener" },
        { title: "Observar", copy: "estado, evidencia y restricciones" },
        { title: "Decidir", copy: "siguiente paso segun policy" },
        { title: "Actuar", copy: "tool use o consulta concreta" },
        { title: "Evaluar", copy: "resultado, error y aprendizaje local" },
        { title: "Cortar o seguir", copy: "continuar, escalar o finalizar" }
      ],
      note: "Agente no es conciencia. Es arquitectura de decision iterativa."
    }
  },
  {
    id: "orquestador-subagentes",
    module: "06",
    moduleTitle: "Agentes y coordinacion",
    type: "split",
    tone: "red",
    kicker: "Orquestacion",
    eyebrow: "Fresh context",
    title: "Orquestador y subagentes: fresh context + separacion de roles.",
    lead:
      "El orquestador mantiene el objetivo global, decide que delegar y sintetiza resultados. Un subagente trabaja sobre una tarea acotada con rol, contexto y tools mas delimitadas.",
    thesis:
      "El valor no es solo paralelizar. Es aislar ruido, bajar costo de contexto y evitar que el hilo principal se convierta en una mochila absurda.",
    beats: [
      {
        title: "Orquestador",
        copy: "Mantiene el hilo principal, pasa contexto minimo suficiente y decide el proximo paso. No deberia hacer TODO inline."
      },
      {
        title: "Subagente",
        copy: "Arranca con fresh context, rol mas especifico y a veces tools o permisos distintos."
      },
      {
        title: "Delegacion sana",
        copy: "Conviene para tareas ruidosas, especializadas o paralelizables. No para spawnear wrappers por cualquier pavada."
      }
    ],
    visual: {
      kind: "map",
      caption: "Patron orchestrator-workers simplificado",
      core: {
        title: "Orquestador",
        copy: "Coordina handoffs, sintetiza resultados y retiene estado global sin cargar todo el detalle operativo.",
        bullets: ["mantiene objetivo", "delegacion con criterio", "consolida"]
      },
      items: [
        { title: "Researcher", copy: "explora con contexto limpio y devuelve findings" },
        { title: "Implementer", copy: "ejecuta tarea acotada con tools relevantes" },
        { title: "Verifier", copy: "valida contra requisitos o escenarios" },
        { title: "Summarizer", copy: "devuelve salida condensada en vez de transcript bruto" }
      ]
    }
  },
  {
    id: "god-agent",
    module: "06",
    moduleTitle: "Agentes y coordinacion",
    type: "split",
    tone: "red",
    kicker: "Anti-patron",
    eyebrow: "God Agent",
    title: "Anti-patron: God Agent.",
    lead:
      "El God Agent es la fantasia de meter en un solo hilo todo el historial, todas las tools, todas las reglas, toda la memoria y toda la responsabilidad de decidir todo.",
    thesis:
      "Eso vende demos. En produccion suele producir contexto inflado, decisiones ambiguas, trazabilidad pobre y debugging infernal.",
    beats: [
      {
        title: "Sintoma",
        copy: "Cada problema se intenta resolver agregando mas prompt, mas contexto, mas tools y mas permisos al mismo actor."
      },
      {
        title: "Costo",
        copy: "Suben latencia, entropia, superficie de error y dificultad para saber que parte del sistema tomo cada decision."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Bolsa unica vs sistema coordinado",
      items: [
        {
          side: "bad",
          title: "God Agent",
          copy: "Un solo actor sobrecargado con exploracion, ejecucion, memoria, verificacion y coordinacion."
        },
        {
          side: "good",
          title: "Sistema coordinado",
          copy: "Roles separados, fresh context, tools acotadas y handoffs con salida condensada."
        }
      ]
    }
  },
  {
    id: "workflow-dag",
    module: "07",
    moduleTitle: "Workflow, SDD y stack",
    type: "split",
    tone: "violet",
    kicker: "Workflow / DAG",
    eyebrow: "Gobernanza del proceso",
    title: "Workflow determinista no es inferior: a veces es la opcion madura.",
    lead:
      "Workflow habla del proceso operativo. DAG habla de dependencias entre tareas. Ninguno de los dos es un sustituto barato del agente: son herramientas de diseño y control.",
    thesis:
      "Autonomia donde suma. Estructura donde reduce entropia. Muchos sistemas reales estan mejor resueltos con workflows claros que con agencia inflada por marketing.",
    beats: [
      {
        title: "Workflow",
        copy: "Conviene cuando las fases son conocidas, el costo de improvisar es alto y queres auditoria, retries y checkpoints visibles."
      },
      {
        title: "DAG",
        copy: "No describe la semantica de la tarea; describe dependencias, orden y observabilidad de ejecucion."
      },
      {
        title: "Hibrido",
        copy: "Muchos sistemas maduros usan workflow arriba y loops agentes o subagentes en pasos especificos abajo."
      }
    ],
    visual: {
      kind: "compare",
      caption: "Dos modos legitimos de coordinar trabajo",
      items: [
        {
          side: "good",
          title: "Workflow / DAG",
          copy: "Predictibilidad, trazabilidad, checkpoints y testing mas claro. Ideal cuando el camino general ya se entiende."
        },
        {
          side: "neutral",
          title: "Agente con loop",
          copy: "Mas flexible para exploracion e incertidumbre real, pero exige memory, policy y stop conditions mucho mas cuidadas."
        }
      ]
    }
  },
  {
    id: "sdd-metodologia",
    module: "07",
    moduleTitle: "Workflow, SDD y stack",
    type: "split",
    tone: "violet",
    kicker: "SDD",
    eyebrow: "Metodologia operativa",
    title: "SDD: convencion operativa para domesticar agentes, no estandar universal.",
    lead:
      "Spec-Driven Development es la metodologia que usamos aca para convertir la intencion del cambio en artefactos verificables antes de tocar implementacion.",
    thesis:
      "No es HTTP ni SQL. Es una disciplina local de ejecucion tecnica. Sirve porque obliga a externalizar plan, restricciones y criterios antes de que el agente improvise arquitectura."
    ,
    beats: [
      {
        title: "Que resuelve",
        copy: "Improvisacion, alucinacion arquitectonica y opacidad del proceso cuando todo vive en un solo hilo gigante."
      },
      {
        title: "DAG de artefactos",
        copy: "Explore, propose, spec, design, tasks, apply, verify y archive funcionan como scaffolding cognitivo para el sistema."
      },
      {
        title: "Lectura correcta",
        copy: "No es burocracia por deporte ni waterfall disfrazado. Es control de ejecucion adaptado a agentes y memoria persistente."
      }
    ],
    visual: {
      kind: "dag",
      caption: "DAG simplificado de SDD",
      items: [
        { title: "Explore", copy: "viabilidad y alcance", bullets: ["preguntas", "riesgos"] },
        { title: "Proposal", copy: "intencion y enfoque", bullets: ["objetivo", "impacto"] },
        { title: "Spec", copy: "requisitos y escenarios", bullets: ["contratos", "aceptacion"] },
        { title: "Design", copy: "decisiones de arquitectura", bullets: ["patrones", "tradeoffs"] },
        { title: "Tasks", copy: "checklist ejecutable", bullets: ["fases", "handovers"] },
        { title: "Apply / Verify / Archive", copy: "ejecucion, validacion y cierre", bullets: ["progreso", "reporte", "aprendizaje"] }
      ]
    }
  },
  {
    id: "verify-archive-learn",
    module: "07",
    moduleTitle: "Workflow, SDD y stack",
    type: "split",
    tone: "violet",
    kicker: "Cierre",
    eyebrow: "Persistencia y control",
    title: "Verificar, archivar y aprender no es burocracia: es continuidad operativa.",
    lead:
      "Cuando el sistema implementa algo, despues hay que validar contra los artefactos, persistir estado y guardar aprendizaje util para no reiniciar siempre desde cero.",
    thesis:
      "Sin verify, no sabes si cumpliste. Sin archive, el cambio queda colgado. Sin learnings persistidos, repetis errores aunque tengas contexto larguisimo.",
    beats: [
      {
        title: "Verify",
        copy: "Contrasta implementacion contra spec, design y tasks. El criterio no es solo 'anda'."
      },
      {
        title: "Archive",
        copy: "Sincroniza estado final y deja un reporte recuperable despues de compactaciones o cambios de sesion."
      },
      {
        title: "Learn",
        copy: "Persistir discoveries, bugfixes y decisiones baja entropia en las siguientes vueltas del workflow."
      }
    ],
    visual: {
      kind: "rules",
      caption: "Tres cierres que se saltean mal todo el tiempo",
      items: [
        {
          title: "Validar contra artefactos",
          copy: "Primero requisito y diseño; despues intuicion. Sino discutis recuerdos, no evidencia."
        },
        {
          title: "Persistir estado recuperable",
          copy: "Si el contexto se resetea, tenes que poder volver a una fuente de verdad mas compacta que el transcript bruto."
        },
        {
          title: "Guardar aprendizaje reusable",
          copy: "Memoria operativa, reportes y resúmenes de fin de sesion sirven mas que cien mensajes sueltos sin estructura."
        }
      ]
    }
  },
  {
    id: "open-source-open-weights-self-hosted",
    module: "08",
    moduleTitle: "Apertura y stack",
    type: "split",
    tone: "amber",
    kicker: "Definiciones",
    eyebrow: "Sin humo",
    title: "Open source AI, open weights y self-hosted responden preguntas distintas.",
    lead:
      "Open source AI habla de libertades fuertes sobre el sistema. Open weights habla de acceso a parametros finales. Self-hosted habla de donde corre. Si mezclas esos ejes, compras marketing en vez de criterio.",
    thesis:
      "Bajar un modelo a tu laptop no lo vuelve open source. Publicar pesos no equivale a abrir el pipeline. Self-hosted y apertura legal son dimensiones distintas.",
    beats: [
      {
        title: "Open source AI",
        copy: "Segun OSI, implica usar, estudiar, modificar y compartir con acceso suficiente a codigo, parametros y data information."
      },
      {
        title: "Open weights",
        copy: "Publica pesos o checkpoints utilizables, pero puede retener entrenamiento, datos o imponer restricciones de licencia."
      },
      {
        title: "Self-hosted",
        copy: "Solo describe donde corre la inferencia o la app. Puede ser sobre software abierto, open weights o directamente privativo."
      }
    ],
    note: "Base conceptual sincronizada con OSAID 1.0 y la aclaracion de OSI sobre open weights.",
    visual: {
      kind: "table",
      caption: "Tres etiquetas, tres preguntas diferentes",
      columns: ["Pregunta", "Que implica", "Que NO garantiza"],
      rows: [
        {
          label: "Open source AI",
          values: [
            "que libertades reales tenes sobre el sistema",
            "apertura fuerte de codigo, parametros y data information",
            "que operarlo sea barato o simple"
          ]
        },
        {
          label: "Open weights",
          values: [
            "si tenes acceso a parametros finales utilizables",
            "mas control operativo que una API cerrada",
            "reproducibilidad completa ni libertad tipo OSI"
          ]
        },
        {
          label: "Self-hosted",
          values: [
            "donde corre el modelo o la aplicacion",
            "soberania operativa y de datos",
            "que la licencia o el pipeline sean abiertos"
          ]
        }
      ]
    }
  },
  {
    id: "stack-abierto-razonable",
    module: "08",
    moduleTitle: "Apertura y stack",
    type: "split",
    tone: "amber",
    kicker: "Stack",
    eyebrow: "Capas desacoplables",
    title: "Capas de un stack razonable: separar inferencia, protocolo, memoria y control.",
    lead:
      "Cuando hablas de stack abierto no hablas solo del modelo. Hablas de como combinas inferencia, runtime, protocolos, tools, memoria, retrieval y observabilidad sin armar un castillo de naipes.",
    thesis:
      "La madurez aparece cuando podes cambiar una capa sin reescribir todas las demas. El nombre del modelo importa menos que el desacople entre responsabilidades."
    ,
    beats: [
      {
        title: "Inferencia",
        copy: "Modelo, runtime y modalidad de hosting."
      },
      {
        title: "Sistema",
        copy: "Skills, tools, protocolos, memoria y retrieval."
      },
      {
        title: "Control",
        copy: "Observabilidad, permisos, costos, evaluacion y gobierno operativo."
      }
    ],
    visual: {
      kind: "grid",
      caption: "Capas que conviene poder mover sin drama",
      items: [
        { title: "Modelo", meta: "capacidad", copy: "frontier, open weights u open source AI" },
        { title: "Runtime", meta: "infra", copy: "API administrada o serving propio" },
        { title: "Protocolo", meta: "interoperabilidad", copy: "MCP u otros contratos de integracion" },
        { title: "Tools", meta: "accion", copy: "capacidades operativas con schema y evidencia" },
        { title: "Memoria / retrieval", meta: "continuidad", copy: "persistir senal y recuperarla con filtros y ranking" },
        { title: "Observabilidad", meta: "control", copy: "logs, costos, errores, checkpoints y evaluacion" }
      ]
    }
  },
  {
    id: "reglas-practicas",
    module: "08",
    moduleTitle: "Apertura y stack",
    type: "close",
    tone: "cyan",
    kicker: "Cierre",
    eyebrow: "Reglas practicas",
    title: "Diseña sistemas que separen responsabilidad, no humo.",
    lead:
      "El cierre no agrega conceptos nuevos. Baja reglas concretas para no volver a mezclar capas por comodidad semantica.",
    thesis:
      "Primero separa capacidad, contexto activo, comportamiento reusable, accion, memoria y workflow. Despues recien elegi autonomia, modelo y stack.",
    beats: [
      {
        title: "No colapses capas",
        copy: "Skill, tool, MCP, memoria, retrieval y agente resuelven problemas distintos aunque se combinen en el mismo sistema."
      },
      {
        title: "Control antes que chamuyo",
        copy: "Workflow determinista no es inferior. Fresh context no es detalle. Progressive disclosure no es capricho."
      },
      {
        title: "Aprendizaje reusable",
        copy: "Si una decision importa, sacala del hilo y convertíla en artefacto, skill o memoria recuperable."
      }
    ],
    visual: {
      kind: "rules",
      caption: "Playbook final",
      items: [
        { title: "No uses el chat como base de datos", copy: "Transcript, contexto activo y memoria juegan distinto." },
        { title: "No vendas skills como estandar universal", copy: "Aca sirven como patron reusable de producto, no como verdad unica del mercado." },
        { title: "No confundas tool con MCP", copy: "La tool es capacidad operativa. MCP es protocolo para intercambiar capacidades." },
        { title: "No llames agente a cualquier workflow", copy: "Sin loop, policy y stop conditions, probablemente tenes otra cosa." },
        { title: "No vendas RAG como solucion universal", copy: "Sirve para grounding documental; para continuidad operativa suelen hacer falta memoria y workflow." },
        { title: "No confundas open weights con open source", copy: "Publicar pesos no equivale a abrir el sistema ni el pipeline de entrenamiento." }
      ]
    }
  }
];

const state = {
  sceneIndex: 0,
  stepIndex: 0,
  visited: new Set([0])
};

const stage = document.querySelector("#scene-stage");
const sceneIndexNode = document.querySelector("#scene-index");
const currentBlockLabel = document.querySelector("#current-block-label");
const currentSceneTitle = document.querySelector("#current-scene-title");
const sceneCounter = document.querySelector("#scene-counter");
const blockCounter = document.querySelector("#block-counter");
const progressFill = document.querySelector("#progress-fill");
const stepProgress = document.querySelector("#step-progress");

const groupedScenes = scenes.reduce((acc, scene, index) => {
  const last = acc[acc.length - 1];

  if (!last || last.module !== scene.module) {
    acc.push({
      module: scene.module,
      title: scene.moduleTitle,
      scenes: [{ index, title: scene.title }]
    });
    return acc;
  }

  last.scenes.push({ index, title: scene.title });
  return acc;
}, []);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSceneMaxStep(scene) {
  const beatMax = scene.beats ? scene.beats.length : 1;
  const visualMax = scene.visual?.items
    ? scene.visual.items.reduce((max, item) => Math.max(max, item.step || 1), 1)
    : 1;

  return Math.max(beatMax, visualMax, 1);
}

function filterVisible(items, currentStep) {
  return items.filter((item) => (item.step || 1) <= currentStep + 1);
}

function renderList(items) {
  if (!items?.length) {
    return "";
  }

  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
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

function renderGrid(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="grid-cards">
        ${visible
          .map(
            (item) => `
              <article class="card">
                ${item.meta ? `<span class="card-meta">${escapeHtml(item.meta)}</span>` : ""}
                <strong>${escapeHtml(item.title)}</strong>
                <p class="card-copy">${escapeHtml(item.copy)}</p>
                ${renderList(item.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCompare(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="compare-grid">
        ${visible
          .map(
            (item) => `
              <article class="compare-card ${escapeHtml(item.side || "neutral")}">
                <span class="compare-side">${escapeHtml(item.side || "neutral")}</span>
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.copy)}</p>
                ${renderList(item.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderFlow(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="flow-stack">
        ${visible
          .map(
            (item, index) => `
              <article class="flow-step">
                <span class="flow-step-index">${index + 1}</span>
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      ${scene.visual.note ? `<div class="visual-note">${escapeHtml(scene.visual.note)}</div>` : ""}
    </div>
  `;
}

function renderTable(scene) {
  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="table-grid">
        <div class="table-header">
          <div class="table-head">Concepto</div>
          ${scene.visual.columns.map((column) => `<div class="table-head">${escapeHtml(column)}</div>`).join("")}
        </div>
        ${scene.visual.rows
          .map(
            (row) => `
              <div class="table-row">
                <div class="table-label">${escapeHtml(row.label)}</div>
                ${row.values.map((value) => `<div class="table-cell">${escapeHtml(value)}</div>`).join("")}
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderLoop(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="loop-stack">
        ${visible
          .map(
            (item, index) => `
              <article class="loop-step">
                <span class="loop-tag">Paso ${index + 1}</span>
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.copy)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      ${scene.visual.note ? `<div class="loop-summary">${escapeHtml(scene.visual.note)}</div>` : ""}
    </div>
  `;
}

function renderMap(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="map-grid">
        <section class="map-core">
          <span class="map-label">Nucleo</span>
          <h5>${escapeHtml(scene.visual.core.title)}</h5>
          <p>${escapeHtml(scene.visual.core.copy)}</p>
          ${renderList(scene.visual.core.bullets)}
        </section>
        <section class="map-nodes">
          ${visible
            .map(
              (item) => `
                <article class="map-node">
                  <span class="map-label">Capa</span>
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.copy)}</p>
                </article>
              `
            )
            .join("")}
        </section>
      </div>
    </div>
  `;
}

function renderDag(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="dag-grid">
        ${visible
          .map(
            (item) => `
              <article class="dag-phase">
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.copy)}</p>
                ${renderList(item.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderRules(scene, currentStep) {
  const visible = filterVisible(scene.visual.items, currentStep);

  return `
    <div class="visual-panel">
      <span class="visual-caption">${escapeHtml(scene.visual.caption)}</span>
      <div class="rules-stack">
        ${visible
          .map(
            (item, index) => `
              <article class="rule-card">
                <div class="flow-step-index">${index + 1}</div>
                <div style="padding: 18px 18px 18px 54px;">
                  <strong>${escapeHtml(item.title)}</strong>
                  <p class="rule-copy">${escapeHtml(item.copy)}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderVisual(scene, currentStep) {
  if (!scene.visual) {
    return "";
  }

  switch (scene.visual.kind) {
    case "grid":
      return renderGrid(scene, currentStep);
    case "compare":
      return renderCompare(scene, currentStep);
    case "flow":
      return renderFlow(scene, currentStep);
    case "table":
      return renderTable(scene);
    case "loop":
      return renderLoop(scene, currentStep);
    case "map":
      return renderMap(scene, currentStep);
    case "dag":
      return renderDag(scene, currentStep);
    case "rules":
      return renderRules(scene, currentStep);
    default:
      return "";
  }
}

function renderScene() {
  const scene = scenes[state.sceneIndex];
  const beats = scene.beats || [];

  stage.innerHTML = `
    <article class="scene tone-${escapeHtml(scene.tone)} scene-${escapeHtml(scene.type)}">
      <div class="scene-inner">
        <div class="scene-copy">
          <div>
            <p class="eyebrow">${escapeHtml(scene.kicker)}</p>
            <p class="eyebrow">${escapeHtml(scene.eyebrow)}</p>
          </div>
          ${scene.type === "cover" || scene.type === "close" ? `<h3>${escapeHtml(scene.title)}</h3>` : `<h4>${escapeHtml(scene.title)}</h4>`}
          <p class="scene-lead">${escapeHtml(scene.lead)}</p>
          <p class="scene-thesis">${escapeHtml(scene.thesis)}</p>
          <div class="scene-beats">
            ${beats.map((beat, index) => renderBeat(beat, index, state.stepIndex)).join("")}
          </div>
          ${scene.note ? `<p class="scene-note">${escapeHtml(scene.note)}</p>` : ""}
        </div>
        <div class="scene-visual">${renderVisual(scene, state.stepIndex)}</div>
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

  document.title = `${scene.title} - Arquitectura tecnica de sistemas con IA`;
  history.replaceState(null, "", `#${scene.id}`);
  renderIndex();
}

function renderIndex() {
  sceneIndexNode.innerHTML = groupedScenes
    .map((group) => {
      const active = scenes[state.sceneIndex].module === group.module;

      return `
        <section class="index-group ${active ? "is-active" : ""}">
          <button class="index-trigger" data-first-index="${group.scenes[0].index}">
            <span class="eyebrow">Bloque ${group.module}</span>
            <span class="index-title">${escapeHtml(group.title)}</span>
          </button>
          <div class="index-dots">
            ${group.scenes
              .map((sceneRef) => {
                const classes = ["scene-dot"];
                if (sceneRef.index === state.sceneIndex) {
                  classes.push("is-active");
                } else if (state.visited.has(sceneRef.index)) {
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
