// Test 2 — Banco de 100 preguntas (traducidas a español, conservando términos técnicos clave)
// Formato esperado por app.js: const QUESTIONS = [{ id, domain, question, options, correctIndex, explanation }, ...]

const QUESTIONS = [
  {
    id: 1,
    domain: "D1",
    question: "¿Cuál es el énfasis principal del canon del (ISC)² Code of Ethics ‘Provide diligent and competent service to principals’?",
    options: [
      "Preservar el valor, respetar la confianza otorgada y evitar conflictos de interés",
      "Asegurar cumplimiento legal en prácticas de cybersecurity",
      "Demostrar pericia técnica y dominio en servicios de cybersecurity",
      "Priorizar el beneficio personal sobre los intereses de la organización"
    ],
    correctIndex: 0,
    explanation:
      "Este canon se centra en el comportamiento ético al servir a los ‘principals’: proteger el valor de los assets de información, honrar la confianza depositada y evitar conflictos de interés que afecten la imparcialidad."
  },
  {
    id: 2,
    domain: "D2",
    question: "¿Cómo puede probarse de forma más efectiva un Plan de Continuidad del Negocio (BCP)?",
    options: ["Ejecutando simulaciones", "Realizando ejercicios de mesa", "Revisando documentación", "Realizando auditorías"],
    correctIndex: 0,
    explanation:
      "Las simulaciones se parecen más a una crisis real y estresan el plan en un entorno controlado, ayudando a descubrir debilidades operativas. Los tabletop son útiles, pero menos inmersivos." 
  },
  {
    id: 3,
    domain: "D3",
    question: "¿Qué método de control de acceso puede usarse para proteger físicamente un cuarto ante individuos no autorizados?",
    options: ["Cámara", "Cerradura (Lock)", "Luz", "Alarma"],
    correctIndex: 1,
    explanation:
      "Una cerradura (Lock) es la barrera física directa para restringir acceso. Cámaras y alarmas detectan/alertan, pero no bloquean físicamente el ingreso." 
  },
  {
    id: 4,
    domain: "D4",
    question: "¿Qué técnica de ciberataque representa una amenaza significativa para el principio de Disponibilidad?",
    options: ["Phishing", "Inyección SQL", "Hombre en el Medio (MitM)", "Denegación de Servicio (DoS)"],
    correctIndex: 3,
    explanation:
      "DoS busca impedir el acceso legítimo a recursos al saturar servicios o red, impactando directamente Disponibilidad. Phishing suele afectar Confidencialidad; SQLi afecta Integridad; MitM afecta Confidencialidad/Integridad." 
  },
  {
    id: 5,
    domain: "D5",
    question: "¿Qué acción es la más apropiada para un dispositivo que no cumple con los requisitos del security baseline?",
    options: [
      "Aislar o poner en cuarentena el dispositivo",
      "Degradar temporalmente los protocolos de seguridad",
      "Ignorar el problema hasta el próximo mantenimiento",
      "Informar al usuario sin tomar acción inmediata"
    ],
    correctIndex: 0,
    explanation:
      "Un dispositivo fuera de baseline puede representar riesgo (misconfig o compromiso). Aislar/quarantinar reduce el impacto mientras se corrige y valida el cumplimiento." 
  },
  {
    id: 6,
    domain: "D3",
    question: "¿Qué mecanismo de control de acceso físico se usa principalmente para prevenir piggybacking en una instalación segura?",
    options: ["Escáneres biométricos", "Lectores de tarjetas RFID", "Guardias de seguridad", "Torniquete"],
    correctIndex: 3,
    explanation:
      "Un turnstile limita el paso a una persona por vez tras autenticación, reduciendo piggybacking. Lectores RFID/biometría ayudan a autenticar, pero el turnstile es la barrera física que regula el paso individual." 
  },
  {
    id: 7,
    domain: "D4",
    question: "¿Qué significa la sigla ‘SIEM’ en cybersecurity?",
    options: [
      "Systematic Incident and Event Monitoring",
      "Gestión de Información y Eventos de Seguridad",
      "Integración de software y monitoreo de eventos",
      "Strategic Information and Encryption Management"
    ],
    correctIndex: 1,
    explanation:
      "SIEM (Gestión de Información y Eventos de Seguridad) agrega, correlaciona y analiza eventos/logs para detección e investigación de incidentes." 
  },
  {
    id: 8,
    domain: "D4",
    question: "¿Qué cloud deployment model es más adecuado para investigadores de distintas universidades que quieren compartir recursos educativos?",
    options: ["Nube pública", "Nube privada", "Nube híbrida", "Nube comunitaria"],
    correctIndex: 3,
    explanation:
      "Community cloud se comparte entre organizaciones con objetivos/requisitos similares, permitiendo colaboración con controles y gobernanza alineados." 
  },
  {
    id: 9,
    domain: "D5",
    question: "¿Qué proceso puede emplearse para asegurar mínimo tiempo de inactividad cuando se realizan modificaciones a sistemas?",
    options: ["Evaluación de Riesgos", "Respuesta a incidentes", "Gestión de Cambios", "Escaneo de Vulnerabilidades"],
    correctIndex: 2,
    explanation:
      "Gestión de Cambios planifica, prueba, aprueba y ejecuta cambios de forma controlada para reducir riesgo y evitar interrupciones innecesarias." 
  },
  {
    id: 10,
    domain: "D4",
    question: "¿Qué tipo de ataque implica medir emisiones electromagnéticas de dispositivos para reconstruir datos procesados?",
    options: ["Hombre en el Medio", "Fuerza bruta", "DDoS", "Side-channel attack"],
    correctIndex: 3,
    explanation:
      "Un side-channel attack explota información filtrada por canales indirectos (consumo de energía, emisiones EM, sonido) para inferir datos o claves." 
  },
  {
    id: 11,
    domain: "D4",
    question: "¿Qué método se considera el más efectivo para detectar una intrusión en un endpoint?",
    options: ["Firewall monitoring", "NIDS", "Antivirus", "HIDS"],
    correctIndex: 3,
    explanation:
      "HIDS (Host-based IDS) monitorea el propio host (logs, procesos, integridad) y detecta comportamiento anómalo local. NIDS opera en red; antivirus depende mucho de firmas." 
  },
  {
    id: 12,
    domain: "D4",
    question: "¿En qué capa del modelo OSI opera principalmente HTTP?",
    options: ["Aplicación", "Transporte", "Red", "Enlace de datos"],
    correctIndex: 0,
    explanation:
      "HTTP es un protocolo de capa Application, ofreciendo servicios directamente a aplicaciones de usuario (web)." 
  },
  {
    id: 13,
    domain: "D1",
    question: "¿Cuál es la medida principal para estimar el efecto potencial de un evento de riesgo en una organización si se materializa?",
    options: ["Probabilidad de la amenaza", "Severidad de la vulnerabilidad", "Probabilidad del riesgo", "Impacto"],
    correctIndex: 3,
    explanation:
      "Impact mide la magnitud de consecuencias (financieras, operativas, reputacionales) si el riesgo ocurre. Se usa para priorizar y asignar controles." 
  },
  {
    id: 14,
    domain: "D3",
    question: "¿Qué modelo de control de acceso está asociado con el modelo de seguridad Bell-LaPadula?",
    options: ["MAC", "DAC", "RBAC", "ABAC"],
    correctIndex: 0,
    explanation:
      "Bell-LaPadula es un modelo de Mandatory Control de Acceso (MAC) enfocado en Confidentiality mediante labels/clearances (p.ej., ‘no read up, no write down’)." 
  },
  {
    id: 15,
    domain: "D3",
    question: "¿Qué modelo de control de acceso otorga acceso a objetos a sujetos en base a roles preconfigurados?",
    options: ["DAC", "MAC", "RBAC", "ABAC"],
    correctIndex: 2,
    explanation:
      "RBAC asigna permisos a roles y los usuarios heredan permisos según su rol, facilitando administración y aplicando mínimo privilegio." 
  },
  {
    id: 16,
    domain: "D5",
    question: "En data management, ¿cuál es la secuencia correcta del data lifecycle?",
    options: [
      "Store → Create → Use → Share → Archive → Destroy",
      "Create → Store → Use → Share → Archive → Destroy",
      "Create → Store → Share → Use → Archive → Destroy",
      "Use → Store → Create → Share → Archive → Destroy"
    ],
    correctIndex: 1,
    explanation:
      "El flujo típico es: Create (generar) → Store (guardar) → Use (usar) → Share (compartir) → Archive (archivar) → Destroy (destruir)." 
  },
  {
    id: 17,
    domain: "D1",
    question: "¿Qué principio de seguridad NO es asegurado directamente por digital signatures?",
    options: ["Disponibilidad", "Confidencialidad", "Integridad", "No repudio"],
    correctIndex: 0,
    explanation:
      "Las firmas digitales aportan Integridad y No repudio (y autenticidad del firmante). No garantizan Disponibilidad." 
  },
  {
    id: 18,
    domain: "D2",
    question: "¿Cuáles son las etapas secuenciales del Incident Response Lifecycle?",
    options: [
      "Detection → Preparation → Recovery → Post-Incident Activity",
      "Preparation → Detection and Analysis → Containment, Eradication, and Recovery → Post-Incident Activity",
      "Analysis → Containment → Recovery → Eradication",
      "Post-Incident Activity → Containment → Preparation → Detection"
    ],
    correctIndex: 1,
    explanation:
      "El ciclo estándar inicia con Preparation; luego Detection and Analysis; después Containment/Eradication/Recovery; y finaliza con Post-Incident Activity (lecciones aprendidas)." 
  },
  {
    id: 19,
    domain: "D1",
    question: "¿Cuál de los siguientes es un ejemplo de Multi-Factor Authentication (MFA)?",
    options: ["Nombre de usuario y contraseña", "Fingerprint y PIN", "Security question y respuesta", "Acceso con tarjeta inteligente"],
    correctIndex: 1,
    explanation:
      "Fingerprint (algo que eres) + PIN (algo que sabes) son dos factores distintos, por lo que es MFA." 
  },
  {
    id: 20,
    domain: "D4",
    question: "¿Qué término se refiere a un individuo o entidad que busca explotar debilidades para comprometer un sistema?",
    options: ["Ciberdelincuente", "Infiltrador de sistemas", "Actor de amenaza", "Analista de seguridad"],
    correctIndex: 2,
    explanation:
      "Threat actor es el término general para quien intenta explotar vulnerabilidades (por dinero, espionaje, disrupción, etc.)." 
  },
  {
    id: 21,
    domain: "D5",
    question: "¿Qué acción se considera un paso efectivo para hardening (endurecimiento) de un sistema contra amenazas?",
    options: [
      "Deshabilitar backups",
      "Habilitar acceso de guest account",
      "Aumentar complejidad de servicios de red",
      "Cerrar puertos no utilizados"
    ],
    correctIndex: 3,
    explanation:
      "Hardening (endurecimiento) busca reducir la superficie de ataque. Cerrar puertos/servicios no necesarios elimina posibles puntos de entrada." 
  },
  {
    id: 22,
    domain: "D1",
    question: "¿Qué tipo de control es un sistema de reconocimiento facial usado para dar acceso a un data center?",
    options: ["Administrativo", "Técnico", "Preventivo", "Físico"],
    correctIndex: 3,
    explanation:
      "Al controlar el ingreso físico a un data center, se clasifica como Physical control (aunque use tecnología)." 
  },
  {
    id: 23,
    domain: "D4",
    question: "¿En cuál cloud computing model el proveedor tiene mayor responsabilidad de seguridad?",
    options: ["IaaS", "SaaS", "PaaS", "FaaS"],
    correctIndex: 1,
    explanation:
      "En SaaS, el proveedor gestiona aplicación + plataforma + infraestructura; el cliente tiene menos control y responsabilidad comparado con IaaS/PaaS." 
  },
  {
    id: 24,
    domain: "D4",
    question: "¿Qué dispositivo de seguridad se usa comúnmente para regular y controlar el flujo de paquetes en una red?",
    options: ["Enrutador", "Conmutador", "Firewall", "Módem"],
    correctIndex: 2,
    explanation:
      "Un Firewall inspecciona y permite/bloquea tráfico según reglas (IP, puertos, protocolos), controlando el flujo de paquetes." 
  },
  {
    id: 25,
    domain: "D2",
    question: "¿Cuál es la consideración más importante de un plan de recuperación ante desastres integral?",
    options: [
      "Compensación financiera por pérdida de datos",
      "Restauración rápida de sistemas IT",
      "Protección de propiedad intelectual",
      "Preservación de vidas humanas"
    ],
    correctIndex: 3,
    explanation:
      "En cualquier plan de DR/BC, la prioridad #1 es la seguridad de las personas. La recuperación tecnológica y financiera viene después." 
  },
  {
    id: 26,
    domain: "D1",
    question: "¿Qué proceso se usa principalmente para verificar la identidad de un usuario al acceder a un sistema?",
    options: ["Autorización", "Autenticación", "Cifrado", "Firewall"],
    correctIndex: 1,
    explanation:
      "Authentication confirma identidad (quién eres). Authorization decide permisos (qué puedes hacer) una vez autenticado." 
  },
  {
    id: 27,
    domain: "D4",
    question: "¿Cuál es un ejemplo de side-channel attack?",
    options: [
      "Usar malware para obtener acceso no autorizado",
      "Interceptar tráfico de red",
      "Monitorear el consumo de energía de un dispositivo",
      "Realizar phishing a empleados"
    ],
    correctIndex: 2,
    explanation:
      "Los side-channel attacks obtienen información de características físicas/operacionales (energía, EM, timing) en lugar de romper el algoritmo directamente." 
  },
  {
    id: 28,
    domain: "D4",
    question: "En el modelo OSI, ¿en qué capa opera principalmente IPSec?",
    options: ["Enlace de datos", "Red", "Transporte", "Sesión"],
    correctIndex: 1,
    explanation:
      "IPSec protege tráfico IP a nivel de Network layer (Layer 3) mediante autenticación y cifrado de paquetes." 
  },
  {
    id: 29,
    domain: "D5",
    question: "¿Cuál es el componente principal de Gestión de Cambios en cybersecurity?",
    options: ["Evaluación de riesgos", "Proceso de aprobación", "Respuesta a incidentes", "Gestión de configuración"],
    correctIndex: 1,
    explanation:
      "El approval process (autorización/validación) es central para Gestión de Cambios: asegura que cambios sean evaluados, documentados y aprobados antes de implementarse." 
  },
  {
    id: 30,
    domain: "D1",
    question: "¿Cuál es un ejemplo de control administrativo en ciberseguridad?",
    options: ["Autenticación biométrica", "Algoritmos de cifrado", "Cámaras de seguridad", "Capacitación en conciencia de seguridad"],
    correctIndex: 3,
    explanation:
      "Los administrative controls incluyen políticas, procedimientos y capacitación. Capacitación en conciencia de seguridad es el ejemplo típico." 
  },
  {
    id: 31,
    domain: "D4",
    question: "¿Qué herramienta se usa comúnmente para interceptar y analizar tráfico de red con fines de troubleshooting y seguridad?",
    options: ["Firewall", "IDS", "VPN", "Protocol Analyzer"],
    correctIndex: 3,
    explanation:
      "Un protocol analyzer (p.ej., Wireshark) captura y analiza paquetes para diagnosticar problemas y entender tráfico/amenazas." 
  },
  {
    id: 32,
    domain: "D2",
    question: "¿Qué fase de planificación está diseñada específicamente para restaurar servicios/operaciones a la normalidad tras un evento catastrófico?",
    options: [
      "Planificación de contingencia",
      "Planificación de continuidad del negocio",
      "Planificación de recuperación ante desastres",
      "Planificación de gestión de riesgos"
    ],
    correctIndex: 2,
    explanation:
      "Plan de Recuperación ante Desastresning (DRP) se enfoca en restauración de IT y servicios tras desastres. BCP se enfoca en continuidad de funciones críticas." 
  },
  {
    id: 33,
    domain: "D1",
    question: "¿Qué categorías abarcan los security controls que cubren distintos aspectos del entorno de una organización?",
    options: [
      "Procesal, Táctico y Reactivo",
      "Reactivo, Lógico y Estratégico",
      "Preventivo, Ofensivo y Forense",
      "Físico, Técnico y Administrativo"
    ],
    correctIndex: 3,
    explanation:
      "La clasificación estándar de controles es: Physical, Technical y Administrative. Cada categoría aporta medidas complementarias." 
  },
  {
    id: 34,
    domain: "D5",
    question: "¿Qué fase marca el inicio del data lifecycle?",
    options: ["Análisis de datos", "Eliminación de datos", "Cifrado de datos", "Creación de datos"],
    correctIndex: 3,
    explanation:
      "El ciclo de vida del dato comienza con Data creation (generación/recolección). Luego se almacena, usa, comparte, archiva y finalmente se destruye." 
  },
  {
    id: 35,
    domain: "D4",
    question: "¿Qué amenaza de cybersecurity está diseñada específicamente para crear una entrada oculta (hidden entry point) para control remoto no autorizado?",
    options: ["Spyware", "Ransomware", "Adware (Software publicitario)", "Backdoor (puerta trasera)"],
    correctIndex: 3,
    explanation:
      "Un backdoor permite acceso remoto no autorizado evitando controles normales de autenticación, sirviendo como puerta trasera para control." 
  },
  {
    id: 36,
    domain: "D2",
    question: "¿Qué proceso se enfoca principalmente en evaluar y priorizar funciones críticas esenciales para la misión de una organización?",
    options: ["Análisis de amenazas", "Análisis de Impacto al Negocio (BIA)", "Escaneo de vulnerabilidades", "Pruebas de penetración"],
    correctIndex: 1,
    explanation:
      "BIA identifica funciones críticas y el impacto de su interrupción, ayudando a priorizar recursos y definir RTO/RPO." 
  },
  {
    id: 37,
    domain: "D1",
    question: "¿Cuál es un objetivo clave al implementar security controls en el framework de cybersecurity de una organización?",
    options: [
      "Aumentar velocidad de red",
      "Reducir el riesgo y el impacto de potenciales incidentes",
      "Minimizar bugs de software",
      "Incrementar eficiencia de hardware"
    ],
    correctIndex: 1,
    explanation:
      "Los controles existen para disminuir la probabilidad (riesgo) y/o el impacto de incidentes, protegiendo datos y servicios." 
  },
  {
    id: 38,
    domain: "D4",
    question: "¿Cuál es el objetivo principal de un ransomware attack?",
    options: ["Cifrado de dispositivo", "Robo de datos", "Interrupción del sistema", "Infiltración de red"],
    correctIndex: 0,
    explanation:
      "Ransomware busca cifrar datos/dispositivo para negar acceso y exigir un pago por la clave o recuperación." 
  },
  {
    id: 39,
    domain: "D1",
    question: "¿Cuál situación debe tener la máxima prioridad al implementar risk controls?",
    options: [
      "Un empleado compartió su horario en redes sociales",
      "Se recibió un phishing pero nadie cayó",
      "Se descubre una vulnerabilidad crítica en el servidor principal que amenaza datos sensibles",
      "Se debe rotar la contraseña del Wi‑Fi según política"
    ],
    correctIndex: 2,
    explanation:
      "Una vulnerabilidad crítica en infraestructura clave con riesgo para datos sensibles requiere acción inmediata por impacto potencial alto." 
  },
  {
    id: 40,
    domain: "D5",
    question: "¿Cuál es un principio fundamental para mejorar la postura de seguridad de los sistemas de información de una organización?",
    options: ["Pruebas de penetración", "Regular capacitación en conciencia de seguridad", "Detección de intrusiones", "Protocolos de cifrado"],
    correctIndex: 1,
    explanation:
      "La concientización continua reduce errores humanos y mejora detección de ingeniería social, fortaleciendo la postura global de seguridad." 
  },
  {
    id: 41,
    domain: "D4",
    question: "¿Qué security protocol utiliza un proceso de three-way handshake para establecer un servicio connection-oriented?",
    options: ["UDP", "SSL/TLS", "ICMP", "TCP"],
    correctIndex: 3,
    explanation:
      "TCP establece conexión con SYN → SYN-ACK → ACK, brindando confiabilidad y orden en la comunicación." 
  },
  {
    id: 42,
    domain: "D1",
    question: "¿Cuál es el documento fundamental dentro de una organización que asegura el cumplimiento de medidas de cybersecurity?",
    options: ["Política de seguridad", "Manual del empleado", "Código de conducta", "Procedure manual"],
    correctIndex: 0,
    explanation:
      "La security policy define reglas, lineamientos y expectativas de seguridad, sirviendo como base para estándares, procedimientos y cumplimiento." 
  },
  {
    id: 43,
    domain: "D5",
    question: "¿Qué elemento es clave para asegurar la integridad de las configuraciones del sistema?",
    options: [
      "Auditorías de seguridad regulares",
      "Implementar security patches y updates regularmente",
      "Protocolos de autenticación de usuario",
      "Estándares de cifrado de datos"
    ],
    correctIndex: 1,
    explanation:
      "Patching/update continuo reduce exposición a vulnerabilidades y mantiene configuraciones/sistemas alineados con mejoras de seguridad." 
  },
  {
    id: 44,
    domain: "D4",
    question: "En cybersecurity, ¿cuál es el propósito principal de un Firewall?",
    options: ["Monitoreo de red", "Autenticación de usuario", "Control de acceso", "Cifrado de datos"],
    correctIndex: 2,
    explanation:
      "El Firewall aplica reglas para permitir o bloquear tráfico, actuando como control de acceso entre redes y reduciendo exposición." 
  },
  {
    id: 45,
    domain: "D4",
    question: "¿Qué puerto está comúnmente asociado con SSH?",
    options: ["22", "80", "443", "25"],
    correctIndex: 0,
    explanation:
      "SSH usa típicamente el puerto 22 para administración remota segura." 
  },
  {
    id: 46,
    domain: "D4",
    question: "¿Cuál NO suele ser una responsabilidad de un SOC (Operaciones de Seguridad Center)?",
    options: ["Monitoreo de tráfico de red", "Investigando incidentes de seguridad", "Gestionando nómina de empleados", "Analizando registros de seguridad"],
    correctIndex: 2,
    explanation:
      "Un SOC se enfoca en monitoreo, análisis y respuesta ante incidentes de seguridad. Nómina (payroll) corresponde a áreas como HR/finanzas." 
  },
  {
    id: 47,
    domain: "D4",
    question: "¿Cuál es el propósito principal de un honeypot?",
    options: ["Monitoreo de red", "Análisis de malware", "Engaño y desvío", "Detección de intrusiones"],
    correctIndex: 2,
    explanation:
      "Un honeypot busca engañar y desviar atacantes, además de observar sus TTPs sin exponer sistemas productivos." 
  },
  {
    id: 48,
    domain: "D2",
    question: "¿Cuál es un elemento fundamental al desarrollar un incident response plan robusto?",
    options: ["Capacitación de empleados", "Gestión de parches", "Ejercicios de mesa", "Monitoreo de red"],
    correctIndex: 2,
    explanation:
      "Los ejercicio de mesas simulan escenarios y prueban coordinación/procedimientos del plan, revelando gaps antes de un incidente real." 
  },
  {
    id: 49,
    domain: "D3",
    question: "¿Cuál aspecto es el componente principal de Identity and Gestión de Acceso (IAM)?",
    options: ["Password policies", "User provisioning", "Autenticación biométrica", "Configuración de firewall de red"],
    correctIndex: 1,
    explanation:
      "User provisioning gestiona altas/bajas y asignación de accesos según roles/funciones; es núcleo de IAM." 
  },
  {
    id: 50,
    domain: "D5",
    question: "¿Qué algoritmo de cifrado es común para asegurar comunicación en internet?",
    options: ["AES", "DES", "RSA", "MD5"],
    correctIndex: 0,
    explanation:
      "AES es un estándar moderno y eficiente para cifrado symmetric. DES es débil/antiguo; RSA se usa más para intercambio de claves/firmas; MD5 es hashing (no cifrado)." 
  },
  {
    id: 51,
    domain: "D1",
    question: "¿Qué práctica/objetivo busca proteger sistemas contra acceso no autorizado y divulgación de información sensible?",
    options: ["Integridad", "Confidencialidad", "Autenticación", "Disponibilidad"],
    correctIndex: 1,
    explanation:
      "Confidencialidad evita divulgación no autorizada (p.ej., PII), mediante controles de acceso, cifrado y políticas." 
  },
  {
    id: 52,
    domain: "D5",
    question: "¿Qué control es principalmente responsable de gestionar y autorizar cambios en la infraestructura de cybersecurity?",
    options: ["Evaluación de vulnerabilidades", "Gestión de cambios", "Protocolos de cifrado", "Monitoreo de red"],
    correctIndex: 1,
    explanation:
      "La gestión de cambios gobierna solicitudes, evaluación, aprobación y despliegue de cambios para mantener estabilidad, seguridad y compliance." 
  },
  {
    id: 53,
    domain: "D5",
    question: "¿Cuál es el número ideal de data labels que pueden administrarse eficientemente?",
    options: ["5 a 7", "2 a 3", "8 a 10", "1 a 2"],
    correctIndex: 1,
    explanation:
      "En práctica, 2–3 etiquetas suelen ser manejables y consistentes (p.ej., Público/Interno/Confidencial), evitando complejidad excesiva." 
  },
  {
    id: 54,
    domain: "D5",
    question: "¿Qué aspecto de la gestión de cambios busca minimizar consecuencias negativas no intencionadas?",
    options: ["Protocolo de autorización", "Análisis de riesgo", "Respuesta a incidentes", "Supervisión de configuración del sistema"],
    correctIndex: 0,
    explanation:
      "La autorización/aprobación formal obliga a evaluar impacto, riesgos y plan de rollback antes de ejecutar cambios, reduciendo efectos no deseados." 
  },
  {
    id: 55,
    domain: "D4",
    question: "¿Qué concepto se asocia principalmente con proteger la integridad de datos durante la transmisión?",
    options: ["Cifrado", "Autenticación", "Firewall", "Sistema de Detección de Intrusiones"],
    correctIndex: 0,
    explanation:
      "Cifrar el tráfico (p.ej., con TLS) ayuda a proteger la comunicación frente a manipulación/lectura no autorizada durante la transmisión." 
  },
  {
    id: 56,
    domain: "D5",
    question: "¿Qué estrategia describe enviar emails específicamente diseñados para engañar a altos ejecutivos?",
    options: ["Phishing dirigido", "Vishing", "Smishing", "Whaling (Caza de ballenas)"],
    correctIndex: 3,
    explanation:
      "Whaling es phishing dirigido a ‘peces grandes’ (alta gerencia/ejecutivos), con alta personalización para inducir acciones o robo de información." 
  },
  {
    id: 57,
    domain: "D1",
    question: "¿Qué práctica mitiga de forma más efectiva el riesgo de acceso no autorizado por credenciales robadas?",
    options: ["Actualizaciones del sistema regulares", "Autenticación multifactor", "Segmentación de red", "Intrusion detection systems"],
    correctIndex: 1,
    explanation:
      "MFA añade un factor adicional, reduciendo el impacto de credenciales comprometidas (una contraseña sola no basta)." 
  },
  {
    id: 58,
    domain: "D2",
    question: "¿Cuál es el objetivo principal de implementar un Plan de Recuperación ante Desastres (DRP) en cybersecurity?",
    options: [
      "Mejorar rendimiento de red",
      "Reducir costos de almacenamiento",
      "Asegurar continuidad del negocio y restauración de servicios tras una interrupción",
      "Optimizar procesos de desarrollo"
    ],
    correctIndex: 2,
    explanation:
      "Un DRP busca restaurar sistemas/servicios y minimizar tiempo de inactividad tras un evento disruptivo, apoyando la continuidad del negocio." 
  },
  {
    id: 59,
    domain: "D1",
    question: "¿Cuál de los siguientes es un control disuasivo?",
    options: ["Guardia de seguridad", "Capacitación en conciencia de seguridad", "Protocolos de cifrado", "Sistema de detección de intrusiones"],
    correctIndex: 0,
    explanation:
      "La presencia de un guardia de seguridad puede disuadir intentos de intrusión física. IDS es detectivo; cifrado es preventivo técnico; capacitación es administrativo." 
  },
  {
    id: 60,
    domain: "D1",
    question: "¿Qué fase del SDLC es principalmente responsable de identificar y definir security requirements?",
    options: ["Planificación", "Implementación", "Diseño", "Pruebas"],
    correctIndex: 0,
    explanation:
      "En Planning se definen requisitos, riesgos y controles esperados. Incluir seguridad desde el inicio reduce vulnerabilidades posteriores." 
  },
  {
    id: 61,
    domain: "D5",
    question: "¿Qué mide la criticidad de la información y su impacto en la organización?",
    options: ["Análisis de amenazas", "Cifrado de datos", "Categorización de información", "Evaluación de vulnerabilidades"],
    correctIndex: 2,
    explanation:
      "Information categorization clasifica data por sensibilidad/impacto, permitiendo asignar controles adecuados según su importancia." 
  },
  {
    id: 62,
    domain: "D3",
    question: "¿Qué modelo de control de acceso enfatiza permisos basados en atributos y condiciones ambientales?",
    options: ["RBAC", "DAC", "MAC", "ABAC"],
    correctIndex: 3,
    explanation:
      "ABAC decide acceso según atributos del sujeto/objeto y contexto (hora, ubicación, device posture, etc.), ofreciendo control dinámico." 
  },
  {
    id: 63,
    domain: "D3",
    question: "¿Qué modelo de control de acceso se caracteriza por otorgar permisos según responsabilidades y rol del usuario?",
    options: ["RBAC", "DAC", "MAC", "RuBAC"],
    correctIndex: 0,
    explanation:
      "RBAC asigna accesos por roles de trabajo, simplifica administración y apoya mínimo privilegio." 
  },
  {
    id: 64,
    domain: "D4",
    question: "¿Qué cloud service model ofrece mayor control y personalización para el usuario?",
    options: ["PaaS", "SaaS", "IaaS", "FaaS"],
    correctIndex: 2,
    explanation:
      "IaaS permite controlar VMs, OS, red virtual y configuraciones. PaaS/SaaS abstraen más capas y reducen control del cliente." 
  },
  {
    id: 65,
    domain: "D4",
    question: "¿Cuál es un método común para obtener acceso no autorizado explotando una debilidad en el software?",
    options: ["Phishing", "Zero-day exploits", "Ingeniería social", "DoS"],
    correctIndex: 1,
    explanation:
      "Los zero-day exploits aprovechan vulnerabilidades desconocidas para el vendor antes de que exista un patch, ofreciendo alta efectividad al atacante." 
  },
  {
    id: 66,
    domain: "D4",
    question: "¿Qué modelo de nube busca combinar características de nube privada y nube pública para un cliente?",
    options: ["Nube híbrida", "Fusión de nubes", "Integración multi-nube", "Nube dinámica"],
    correctIndex: 0,
    explanation:
      "Hybrid cloud integra nube privada y nube pública, permitiendo mantener cargas sensibles en privado y usar escalabilidad del público cuando conviene." 
  },
  {
    id: 67,
    domain: "D5",
    question: "¿Qué elemento juega un rol central al asegurar datos sensibles mediante encryption?",
    options: ["Gestión de claves criptográficas", "Control de acceso", "Capacitación en conciencia de seguridad", "Segmentación de red"],
    correctIndex: 0,
    explanation:
      "La gestión de claves es crítica: generación, almacenamiento, rotación y revocación. Sin key management seguro, el cifrado pierde efectividad." 
  },
  {
    id: 68,
    domain: "D4",
    question: "¿Qué proceso se encarga de identificar continuamente sistemas con desempeño ineficiente, registrar uso y detectar posibles explotaciones?",
    options: ["Escaneo de vulnerabilidades", "Pruebas de penetración", "Monitoreo y registro de eventos", "Gestión de control de acceso"],
    correctIndex: 2,
    explanation:
      "El monitoreo y registro de eventos recolecta telemetría y registros para detectar anomalías, abuso y signos de ataque, además de apoyar la resolución de problemas." 
  },
  {
    id: 69,
    domain: "D3",
    question: "¿Cuál de las siguientes opciones es un principio fundamental relacionado con mínimo privilegio?",
    options: ["Monitoreo continuo", "Control de acceso basado en roles", "Análisis de inteligencia de amenazas", "Pruebas de penetración externas"],
    correctIndex: 1,
    explanation:
      "RBAC es una implementación común para aplicar mínimo privilegio, asignando permisos mínimos necesarios por rol." 
  },
  {
    id: 70,
    domain: "D4",
    question: "¿Cuál de las siguientes direcciones IP típicamente representa una red interna (privada)?",
    options: ["192.168.132.150", "138.197.110.175", "216.58.214.46", "113.55.209.17"],
    correctIndex: 0,
    explanation:
      "192.168.0.0/16 es un rango privado (RFC 1918) usado en redes internas. Las otras son direcciones públicas routables." 
  },
  {
    id: 71,
    domain: "D1",
    question: "¿Cuál se considera un control preventivo en ciberseguridad?",
    options: ["Sistema de detección de intrusiones", "Cifrado", "Respuesta a incidentes de seguridad", "Capacitación en conciencia de seguridad"],
    correctIndex: 1,
    explanation:
      "Cifrado evita exposición de datos (preventivo). IDS es detectivo; respuesta a incidentes es reactivo/correctivo; capacitación es administrativo." 
  },
  {
    id: 72,
    domain: "D5",
    question: "¿Qué aspecto es integral para mantener consistencia e integridad de system configurations?",
    options: ["Estrategias de mitigación de riesgos", "Proceso de aprobación", "Escaneo de vulnerabilidades", "Líneas base"],
    correctIndex: 3,
    explanation:
      "Los baselines son la configuración de referencia. Cualquier desviación se evalúa y se corrige/aprueba para mantener consistencia y control." 
  },
  {
    id: 73,
    domain: "D4",
    question: "¿Cuál es un principio fundamental de la estrategia Defensa en Profundidad?",
    options: [
      "Protección holística mediante múltiples capas de seguridad",
      "Protección de una sola capa",
      "Mitigación reactiva únicamente",
      "Solo endpoint security"
    ],
    correctIndex: 0,
    explanation:
      "Defensa en Profundidad usa capas complementarias (preventivas/detectivas/correctivas) para que la falla de un control no implique compromiso total." 
  },
  {
    id: 74,
    domain: "D5",
    question: "¿Cuál es un principio fundamental de las prácticas de codificación segura?",
    options: ["Actualizaciones del sistema", "Técnicas de cifrado", "Revisión de código", "Monitoreo de red"],
    correctIndex: 2,
    explanation:
      "La revisión de código ayuda a detectar vulnerabilidades lógicas, errores y malas prácticas antes de llegar a producción." 
  },
  {
    id: 75,
    domain: "D2",
    question: "¿Qué estrategia asegura la continuidad de operaciones, procesos, funciones y servicios tras un incidente significativo?",
    options: ["Detección de amenazas", "Plan de Continuidad del Negocio", "Protocolos de cifrado", "Escaneo de vulnerabilidades"],
    correctIndex: 1,
    explanation:
      "Un Plan de Continuidad del Negocio (BCP) define cómo mantener funciones críticas operando durante y después de interrupciones." 
  },
  {
    id: 76,
    domain: "D4",
    question: "¿Cuál es un aspecto fundamental de los sistemas SIEM?",
    options: ["Recolectar y analizar eventos de seguridad", "Cifrado de datos", "Autenticación de usuario", "Monitoreo de red"],
    correctIndex: 0,
    explanation:
      "SIEM se centra en recolectar logs/eventos, correlacionarlos y analizarlos para detectar amenazas y apoyar respuesta e investigación." 
  },
  {
    id: 77,
    domain: "D1",
    question: "¿Qué factor puede resultar en multas, sanciones e incluso prisión si no se cumple?",
    options: ["Conciencia de ciberseguridad", "Protocolos de seguridad", "Regulaciones", "Métodos de autenticación"],
    correctIndex: 2,
    explanation:
      "El incumplimiento de regulations/leyes puede tener consecuencias legales severas, incluyendo multas y responsabilidades penales." 
  },
  {
    id: 78,
    domain: "D1",
    question: "¿Cuál representa el tercer canon del (ISC)² Code of Ethics?",
    options: [
      "Preservar el valor de los datos y la privacidad",
      "Actuar de manera honorable, honesta, justa, responsable y legal",
      "Proporcionar servicios diligentes y competentes a los principales",
      "Avanzar y proteger la profesión"
    ],
    correctIndex: 2,
    explanation:
      "El tercer canon exige brindar servicios diligentes y competentes a los principals, actuando con debido cuidado, habilidad y ética profesional." 
  },
  {
    id: 79,
    domain: "D5",
    question: "¿Qué se recomienda hacer antes de implementar patches en un entorno de producción?",
    options: [
      "Hacer un risk assessment",
      "Respaldar (backup) el entorno de producción",
      "Iniciar un incident response plan",
      "Configurar settings de management"
    ],
    correctIndex: 1,
    explanation:
      "Un backup permite rollback/recuperación si el patch causa fallos inesperados. Es una práctica esencial antes de cambios en producción." 
  },
  {
    id: 80,
    domain: "D4",
    question: "¿Qué método de ataque consiste en incrustar código malicioso dentro de una aplicación aparentemente inofensiva?",
    options: ["Troyano", "Phishing dirigido", "Ingeniería social", "Denial-of-service (DoS)"],
    correctIndex: 0,
    explanation:
      "Un Trojan se disfraza de software legítimo para que el usuario lo ejecute, habilitando acciones maliciosas (backdoor, robo de datos, etc.)." 
  },
  {
    id: 81,
    domain: "D4",
    question: "¿Qué término se refiere a un ataque que explota una vulnerabilidad desconocida para el fabricante/vendor?",
    options: ["Phishing", "Ataque zero-day", "Hombre en el medio", "Denial-of-Service (DoS)"],
    correctIndex: 1,
    explanation:
      "Un ataque zero-day aprovecha una falla aún no conocida públicamente o sin patch disponible, atacando antes de que exista corrección." 
  },
  {
    id: 82,
    domain: "D1",
    question: "¿Qué concepto enfatiza el primer tenet del (ISC)² code of ethics?",
    options: [
      "Proteger a la sociedad, la confianza pública y la infraestructura crítica",
      "Respeto por la privacidad individual",
      "Beneficio personal y avance",
      "Búsqueda de desarrollo profesional"
    ],
    correctIndex: 0,
    explanation:
      "El primer tenet prioriza el bien común: proteger sociedad, confianza pública e infraestructura crítica, por encima de intereses individuales." 
  },
  {
    id: 83,
    domain: "D4",
    question: "¿Qué protocolo criptográfico se usa comúnmente para asegurar conexiones remotas a dispositivos?",
    options: ["TLS", "FTP", "SNMP", "SSH"],
    correctIndex: 3,
    explanation:
      "SSH brinda acceso remoto cifrado y autenticado para administrar sistemas/dispositivos. FTP y SNMP no brindan ese nivel de seguridad por defecto." 
  },
  {
    id: 84,
    domain: "D4",
    question: "¿Qué protocolo se usa comúnmente para asegurar comunicación sobre internet?",
    options: ["HTTPS", "DNS", "SMTP", "FTP"],
    correctIndex: 0,
    explanation:
      "HTTPS (HTTP sobre TLS) cifra la comunicación entre cliente y servidor. DNS/SMTP/FTP no garantizan cifrado por sí solos." 
  },
  {
    id: 85,
    domain: "D4",
    question: "¿Cuál es una consideración crítica para ubicar un web server con acceso externo a internet dentro de una red?",
    options: ["Configuración del Firewall", "Ancho de banda de red", "DMZ", "Sistema de detección de intrusiones"],
    correctIndex: 2,
    explanation:
      "Una DMZ separa servicios expuestos (web) de la red interna, permitiendo controles adicionales y limitando el impacto si el servidor se compromete." 
  },
  {
    id: 86,
    domain: "D5",
    question: "¿Qué práctica busca identificar y mitigar vulnerabilidades antes de que atacantes puedan explotarlas?",
    options: ["Pruebas de penetración", "Gestión de parches", "Técnicas de cifrado", "Recopilación de inteligencia de amenazas"],
    correctIndex: 0,
    explanation:
      "Penetration Probando simula ataques para encontrar debilidades y priorizar remediación antes de un adversario real." 
  },
  {
    id: 87,
    domain: "D5",
    question: "¿Qué método de ataque manipula la confianza para extraer información sensible mediante comunicación (llamadas) usando ingeniería social?",
    options: ["Phishing", "Vishing", "Suplantación", "DDoS"],
    correctIndex: 1,
    explanation:
      "Vishing (voice phishing) usa llamadas/voz para engañar a la víctima y obtener datos sensibles. Phishing suele ser por email/web; spoofing falsifica identidad; DDoS satura servicios." 
  },
  {
    id: 88,
    domain: "D1",
    question: "¿Qué principio de gobernanza provee sugerencias no vinculantes (advisory) en cybersecurity?",
    options: ["Políticas", "Procedimientos", "Estándares", "Guías"],
    correctIndex: 3,
    explanation:
      "Guidelines orientan de forma flexible (no obligatoria). Policies y standards suelen ser obligatorios; procedures son pasos detallados." 
  },
  {
    id: 89,
    domain: "D1",
    question: "¿Qué término describe un método común para identificar y mitigar riesgos potenciales?",
    options: ["Análisis de amenazas", "Remediación de riesgos", "Respuesta a incidentes de seguridad", "Gestión de control de acceso"],
    correctIndex: 1,
    explanation:
      "Risk remediation consiste en aplicar acciones/controles para reducir o eliminar riesgos (vulnerabilidades, exposición, impacto)." 
  },
  {
    id: 90,
    domain: "D3",
    question: "¿Qué principio subraya limitar el acceso del usuario solo a los recursos necesarios para su trabajo?",
    options: ["Seguridad por oscuridad", "Defensa en profundidad", "Principio de mínimo privilegio", "Confianza Cero"],
    correctIndex: 2,
    explanation:
      "Mínimo Privilegio otorga permisos mínimos necesarios, reduciendo impacto de errores o compromisos de cuentas." 
  },
  {
    id: 91,
    domain: "D4",
    question: "¿Qué método se usa para verificar que un dispositivo cumple requisitos de seguridad antes de acceder a la red?",
    options: ["Control de Acceso a la Red (NAC)", "Cifrado de red", "Sistema de detección de intrusiones", "Configuración del Firewall"],
    correctIndex: 0,
    explanation:
      "NAC valida postura del dispositivo (parches, AV, configuración) y solo permite acceso si cumple políticas; si no, lo restringe/cuarentena." 
  },
  {
    id: 92,
    domain: "D5",
    question: "En hashing algorithms, ¿qué característica ayuda a prevenir collisions?",
    options: ["Speed optimization", "Eficiencia de compresión", "Unicidad", "Fortaleza del cifrado"],
    correctIndex: 2,
    explanation:
      "La propiedad deseada es que entradas distintas produzcan hashes distintos (minimizar colisiones). Hashing no es cifrado, y ‘encryption strength’ no aplica directamente." 
  },
  {
    id: 93,
    domain: "D1",
    question: "¿Qué es ePHI?",
    options: [
      "Electronic Personnel Health Information",
      "Electronic Información de Salud Protegida",
      "Información de salud de paciente de emergencia",
      "Encrypted Personal Health Identification"
    ],
    correctIndex: 1,
    explanation:
      "ePHI es Electronic Información de Salud Protegida: información de salud identificable almacenada o transmitida electrónicamente; requiere protección y compliance (p.ej., HIPAA)." 
  },
  {
    id: 94,
    domain: "D1",
    question: "¿Qué legislación es considerada la piedra angular de la protección de datos y privacidad en Europa?",
    options: ["HIPAA", "CCPA", "FERPA", "GDPR"],
    correctIndex: 3,
    explanation:
      "GDPR (General Data Protection Regulation) establece reglas para recolección, procesamiento y almacenamiento de datos personales en la UE." 
  },
  {
    id: 95,
    domain: "D2",
    question: "¿Qué fase típicamente inicia la respuesta de una organización ante posibles incidentes de seguridad?",
    options: ["Detección", "Recuperación", "Contención", "Preparación"],
    correctIndex: 3,
    explanation:
      "Preparation es primero: define roles, herramientas, playbooks y entrenamiento. Luego vienen detección/análisis, contención, erradicación, recuperación y lecciones aprendidas." 
  },
  {
    id: 96,
    domain: "D4",
    question: "¿Qué ataque puede mitigarse implementando input validation adecuada?",
    options: ["Inyección SQL Attack", "Distributed Denegación de Servicio (DDoS)", "Hombre en el Medio (MitM)", "Phishing"],
    correctIndex: 0,
    explanation:
      "La validación/sanitización de entradas evita que payloads maliciosos se ejecuten en consultas SQL, mitigando SQL injection." 
  },
  {
    id: 97,
    domain: "D4",
    question: "¿Cuál es el propósito fundamental de un penetration test?",
    options: ["Monitoreo de red", "Identificación de vulnerabilidades", "Protección de endpoints", "Capacitación en conciencia de seguridad"],
    correctIndex: 1,
    explanation:
      "El objetivo es identificar vulnerabilidades y debilidades de control simulando ataques para corregirlas antes de que un atacante real las explote." 
  },
  {
    id: 98,
    domain: "D5",
    question: "¿Qué es pretexting en cybersecurity?",
    options: ["Modelado avanzado de amenazas", "Técnica de ingeniería social", "Pruebas de penetración de red", "Análisis de protocolos criptográficos"],
    correctIndex: 1,
    explanation:
      "Pretexting es ingeniería social: crear una historia/identidad falsa para ganar confianza y obtener información o acciones de la víctima." 
  },
  {
    id: 99,
    domain: "D5",
    question: "¿Qué policy gobierna reglas y condiciones sobre el uso de dispositivos personales dentro de una organización?",
    options: ["MDM", "BYOD", "AUP", "Endpoint Política de Seguridad"],
    correctIndex: 1,
    explanation:
      "BYOD (Bring Your Own Device) define cómo se permiten y controlan dispositivos personales. MDM es tecnología de gestión; AUP es más general." 
  },
  {
    id: 100,
    domain: "D3",
    question: "¿Cuál opción describe mejor tailgating?",
    options: [
      "Acceso no autorizado a una instalación segura",
      "Manipular datos para elevar privilegios",
      "Ganar acceso físico siguiendo a una persona autorizada",
      "Explotar vulnerabilidades en protocolos de red"
    ],
    correctIndex: 2,
    explanation:
      "Tailgating es una técnica de acceso físico no autorizado: el atacante entra detrás de alguien con acceso legítimo (aprovechando cortesía/confianza)." 
  }
];
