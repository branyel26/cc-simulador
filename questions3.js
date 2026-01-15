// Test 3 — Banco de 100 preguntas (traducidas a español, conservando términos técnicos clave)
// Formato esperado por app.js: const QUESTIONS = [{ id, domain, question, options, correctIndex, explanation }, ...]

const QUESTIONS = [
	{
		id: 1,
		domain: "D1",
		question: "¿Qué dos elementos son esenciales para calcular el riesgo en cybersecurity?",
		options: [
			"Amenazas y vulnerabilidades",
			"Impacto y probabilidad (likelihood)",
			"Security controls and compliance",
			"Incident response and recovery"
		],
		correctIndex: 1,
		explanation:
			"El cálculo de riesgo normalmente se basa en evaluar la probabilidad (likelihood) de que ocurra un evento y el impacto (impact) que tendría. Con ambos se priorizan y gestionan riesgos de manera efectiva."
	},
	{
		id: 2,
		domain: "D2",
		question: "¿Cuál de las siguientes NO se considera una responsabilidad principal de un Operaciones de Seguridad Center (SOC)?",
		options: ["Análisis de logs", "Detección de intrusiones", "Autenticación de usuario", "Gestión de parches"],
		correctIndex: 3,
		explanation:
			"Un SOC se centra en monitorear, detectar y responder a incidentes (logs, detección, triage). Gestión de parches es importante, pero normalmente es una función de IT/operaciones de plataforma, no el foco principal del SOC."
	},
	{
		id: 3,
		domain: "D3",
		question: "¿Qué modelo de control de acceso considera factores como nombre, edad, ciudadanía o departamento para determinar permisos?",
		options: ["MAC", "RBAC", "ABAC", "DAC"],
		correctIndex: 2,
		explanation:
			"ABAC (Attribute-Based Control de Acceso) decide el acceso en función de atributos del sujeto, del recurso y del contexto, permitiendo reglas más granulares que RBAC."
	},
	{
		id: 4,
		domain: "D4",
		question: "¿Qué tipo de modelo de despliegue cloud está dedicado exclusivamente a un solo cliente?",
		options: ["Público", "Híbrido", "Comunidad", "Privado"],
		correctIndex: 3,
		explanation:
			"Un cloud Private está dedicado a una única organización/cliente, con mayor control y aislamiento que un cloud Public o Community."
	},
	{
		id: 5,
		domain: "D5",
		question: "¿Cuál de los siguientes elementos es crucial para mejorar la postura de cybersecurity mediante entrenamiento a empleados?",
		options: ["Mejores prácticas de contraseñas", "Medidas de seguridad física", "Software antivirus", "Network firewalls"],
		correctIndex: 0,
		explanation:
			"El capacitación en conciencia de seguridad suele enfocarse en el factor humano. Buenas prácticas de contraseñas (y MFA) reducen de forma directa el riesgo de account compromise."
	},
	{
		id: 6,
		domain: "D1",
		question: "¿Cuál de los siguientes es un elemento fundamental del secure software development?",
		options: ["Code optimization", "Diseño de interfaz de usuario", "Diseño de esquema de base de datos", "Revisión de código de seguridad"],
		correctIndex: 3,
		explanation:
			"Un security code review ayuda a identificar vulnerabilidades en el código antes de que lleguen a producción, reforzando SDLC/SSDLC."
	},
	{
		id: 7,
		domain: "D1",
		question: "¿Qué política de cybersecurity está diseñada específicamente para proteger el manejo de Información de Identificación Personal (PII)?",
		options: ["Política de cifrado de datos", "Política de control de acceso", "Política de privacidad", "Política de respuesta a incidentes"],
		correctIndex: 2,
		explanation:
			"Una Política de Privacidad define principios y prácticas sobre recolección, uso y protección de datos personales (PII), además de cumplimiento con leyes de privacidad."
	},
	{
		id: 8,
		domain: "D4",
		question: "En networking, ¿cuál IP se asocia comúnmente con una loopback address?",
		options: ["192.168.1.1", "10.0.0.1", "127.0.0.1", "172.16.0.1"],
		correctIndex: 2,
		explanation:
			"127.0.0.1 es la loopback IPv4 estándar para probar la pila TCP/IP local (localhost)."
	},
	{
		id: 9,
		domain: "D1",
		question: "¿Cuál es un elemento fundamental de nivel superior en la gobernanza de cybersecurity?",
		options: ["Capacitación en conciencia de seguridad", "Monitoreo de cumplimiento", "Gestión de riesgos", "Política"],
		correctIndex: 3,
		explanation:
			"Las políticas (policies) establecen el marco de alto nivel que guía estándares, procedimientos, controles y prácticas de seguridad."
	},
	{
		id: 10,
		domain: "D3",
		question:
			"¿Qué enfoque de cybersecurity enfatiza otorgar mínimo privilegio y verificar/validar estrictamente el acceso de cada usuario?",
		options: ["Trustworthy Security Model", "Inclusive Security Model", "Open Trust Security Model", "Confianza Cero Security Model"],
		correctIndex: 3,
		explanation:
			"Confianza Cero asume que no se debe confiar implícitamente; exige verificación continua y aplica mínimo privilegio para reducir el radio de impacto."
	},
	{
		id: 11,
		domain: "D4",
		question: "¿Qué elemento juega un rol central en distribuir el tráfico de red de forma segura y eficiente?",
		options: ["Conmutador", "Enrutador", "Load Balancer", "VPN Gateway"],
		correctIndex: 2,
		explanation:
			"Un Load Balancer distribuye solicitudes entre múltiples servidores, mejorando disponibilidad, rendimiento y resiliencia."
	},
	{
		id: 12,
		domain: "D2",
		question: "¿Cuál de las siguientes acciones se consideraría un security incident?",
		options: [
			"Actualizaciones de software regulares",
			"Mantenimiento de red programado",
			"Acceso no autorizado a información sensible de clientes",
			"Sesiones de capacitación de empleados"
		],
		correctIndex: 2,
		explanation:
			"Un security incident compromete CIA (Confidentiality, Integrity, Availability). El acceso no autorizado a datos sensibles es un incidente."
	},
	{
		id: 13,
		domain: "D1",
		question:
			"¿Qué fase cumple un rol vital para comprender y evaluar amenazas y vulnerabilidades en las etapas iniciales del risk management?",
		options: ["Identificación", "Análisis de detección", "Mitigation planning", "Response strategy"],
		correctIndex: 0,
		explanation:
			"La fase de Identification identifica assets, amenazas y vulnerabilidades para luego evaluar impacto/probabilidad y priorizar tratamiento."
	},
	{
		id: 14,
		domain: "D5",
		question:
			"¿Qué principio/tecnología criptográfica asegura la integridad y el origen de un mensaje (y soporta non-repudiation)?",
		options: ["Medidas de confidencialidad", "Firma Digitals", "Firewall protection", "Hash functions"],
		correctIndex: 1,
		explanation:
			"Las Firma Digitals permiten verificar autenticidad e integridad, y soportan non-repudiation mediante criptografía asimétrica."
	},
	{
		id: 15,
		domain: "D1",
		question: "¿Cuál de los siguientes NO es un elemento clave de la CIA triad en cybersecurity?",
		options: ["Asequibilidad", "Integridad", "Confidencialidad", "Disponibilidad"],
		correctIndex: 0,
		explanation:
			"La CIA triad se compone de Confidentiality, Integrity y Availability. Affordability no es parte del triángulo clásico."
	},
	{
		id: 16,
		domain: "D5",
		question:
			"¿Qué técnica consiste en que el atacante registra dominios falsos muy similares a sitios populares para atraer víctimas?",
		options: ["Typosquatting", "Phishing", "Suplantación", "Envenenamiento DNS"],
		correctIndex: 0,
		explanation:
			"Typosquatting explota errores tipográficos del usuario, registrando dominios parecidos al legítimo para redirigir a sitios maliciosos."
	},
	{
		id: 17,
		domain: "D2",
		question: "¿Qué elemento normalmente NO se incluye en un incident response plan?",
		options: ["Estimaciones de costos financieros", "Identification of critical assets", "Estrategias de comunicación", "Procedimientos de escalamiento"],
		correctIndex: 0,
		explanation:
			"Un IR plan describe roles, comunicación, escalamiento y procesos de respuesta. Estimaciones financieras suelen tratarse después (post-incident / recuperación)."
	},
	{
		id: 18,
		domain: "D3",
		question:
			"¿Qué concepto fundamental de seguridad enfatiza tomar pasos proactivos razonables para prevenir breaches?",
		options: ["Respuesta a incidentes", "Debido cuidado", "Evaluación de riesgos", "Gestión de configuración"],
		correctIndex: 1,
		explanation:
			"Due care implica ejercer diligencia razonable: implementar controles apropiados y actuar de forma preventiva para reducir riesgos."
	},
	{
		id: 19,
		domain: "D3",
		question:
			"¿Qué control de cybersecurity está diseñado para autenticar usuarios y autorizar su acceso a recursos específicos?",
		options: ["Configuración de cortafuegos", "Control de acceso", "Sistema de detección de intrusiones", "Algoritmo de cifrado"],
		correctIndex: 1,
		explanation:
			"Access control abarca autenticación y autorización (quién eres y qué puedes hacer), aplicando mínimo privilegio."
	},
	{
		id: 20,
		domain: "D4",
		question: "¿Cuál característica describe a un switch?",
		options: [
			"Opera en Layer 2 (Capa de Enlace de Datos) del modelo OSI",
			"Opera en Layer 3 (Capa de Red) del modelo OSI",
			"Opera en Layer 4 (Capa de Transporte) del modelo OSI",
			"Opera en Layer 7 (Capa de Aplicación) del modelo OSI"
		],
		correctIndex: 0,
		explanation:
			"Un switch típico opera en Layer 2 y reenvía frames basándose en direcciones MAC dentro de una LAN."
	},
	{
		id: 21,
		domain: "D1",
		question:
			"¿Qué tipo de dato se utiliza más comúnmente en organizaciones de salud para almacenar información de pacientes de forma segura?",
		options: ["ePHI (Electronic Información de Salud Protegida)", "Social Security numbers", "Formularios de historial médico", "Datos biométricos"],
		correctIndex: 0,
		explanation:
			"En contextos tipo HIPAA, ePHI representa información de salud protegida en formato electrónico y requiere controles fuertes de seguridad y privacidad."
	},
	{
		id: 22,
		domain: "D1",
		question:
			"¿Cuál es la pérdida financiera esperada anual para un evento de riesgo asociado a un asset de información?",
		options: ["Risk Exposure", "Annual Loss Expectancy", "Single Loss Expectancy", "Risk Impact"],
		correctIndex: 1,
		explanation:
			"Annual Loss Expectancy (ALE) estima la pérdida anual esperada; típicamente ALE = SLE × ARO."
	},
	{
		id: 23,
		domain: "D5",
		question:
			"¿Qué método criptográfico se usa principalmente para asegurar la integridad de la información en transmisión y almacenamiento?",
		options: ["RSA", "AES", "DES", "MD5"],
		correctIndex: 3,
		explanation:
			"Los hash (p. ej., MD5) se usan para verificar integridad (aunque MD5 hoy es débil criptográficamente)."
	},
	{
		id: 24,
		domain: "D5",
		question: "¿En qué se aplica principalmente el proceso de degaussing en information security?",
		options: ["Cifrado de datos", "Eliminación segura de archivos", "Sanitización de datos de medios magnéticos", "Monitoreo de red"],
		correctIndex: 2,
		explanation:
			"Degaussing aplica un campo magnético fuerte para borrar datos en medios magnéticos (tapes/discos), como parte de data sanitization."
	},
	{
		id: 25,
		domain: "D1",
		question: "¿Cuál práctica es un ejemplo de control correctivo (corrective control) en cybersecurity?",
		options: ["Monitoreo de red", "Sistema de supresión de incendios", "Control de acceso", "Cifrado de datos"],
		correctIndex: 1,
		explanation:
			"Un fire suppression system ayuda a corregir/mitigar el impacto de un incidente físico (incendio) después de que ocurre."
	},
	{
		id: 26,
		domain: "D1",
		question: "¿Qué tipo de control describe mejor el patch management?",
		options: ["Administrativo", "Físico", "Technical corrective", "Detectivo"],
		correctIndex: 2,
		explanation:
			"Gestión de parches es un control técnico que corrige vulnerabilidades conocidas aplicando actualizaciones/fixes."
	},
	{
		id: 27,
		domain: "D2",
		question:
			"¿Qué mecanismo de backup copia todos los cambios ocurridos desde el último full backup?",
		options: ["Differential backup", "Full backup", "Incremental backup", "Snapshot backup"],
		correctIndex: 0,
		explanation:
			"Un differential backup guarda cambios desde el último full backup; restaura con full + último diferencial."
	},
	{
		id: 28,
		domain: "D2",
		question: "¿A quién debe informar un security analyst sobre una violación de una security policy?",
		options: ["Gestión", "Law enforcement", "Usuarios finales", "IT support"],
		correctIndex: 0,
		explanation:
			"Primero se escala a Management para coordinar respuesta interna y decidir si se requiere involucrar otras áreas (legal, etc.)."
	},
	{
		id: 29,
		domain: "D1",
		question:
			"¿Qué representa el aspecto principal de un requisito de compliance típicamente gestionado por entidades gubernamentales?",
		options: ["Capacitación en conciencia de seguridad", "Desarrollo de políticas", "Evaluación de riesgos", "Regulación"],
		correctIndex: 3,
		explanation:
			"Las regulaciones (regulations) son requisitos legales establecidos por gobiernos/autoridades regulatorias."
	},
	{
		id: 30,
		domain: "D5",
		question:
			"¿Qué puede emplearse dentro del change management para facilitar un rollback en caso de problemas?",
		options: ["Version control", "Respaldo", "Probando environment", "Comité asesor de cambios"],
		correctIndex: 1,
		explanation:
			"Un backup permite restaurar a un estado anterior si un cambio genera fallas o impacto negativo."
	},
	{
		id: 31,
		domain: "D4",
		question:
			"¿Qué método de ataque intenta ganar acceso a un sistema suplantando (impersonating) una fuente confiable?",
		options: ["Suplantación", "Phishing", "Denial-of-Service", "Hombre en el Medio"],
		correctIndex: 0,
		explanation:
			"Spoofing implica falsificar identidad/origen (IP/email/DNS, etc.) para aparentar confianza y facilitar acceso o engaño."
	},
	{
		id: 32,
		domain: "D5",
		question:
			"¿Qué técnica de ingeniería social intenta manipular usuarios para revelar datos sensibles vía mensajería instantánea (SMS/apps)?",
		options: ["Phishing dirigido", "Vishing", "Smishing", "Suplantación de identidad"],
		correctIndex: 2,
		explanation:
			"Smishing es phishing mediante SMS/mensajería: mensajes engañosos que empujan a hacer click o compartir credenciales."
	},
	{
		id: 33,
		domain: "D4",
		question: "¿Qué tipo de malware está diseñado para mostrar anuncios no deseados?",
		options: ["Spyware", "Ransomware", "Rootkit", "Adware (Software publicitario)"],
		correctIndex: 3,
		explanation:
			"Adware muestra publicidad intrusiva (pop-ups/redirecciones) y puede afectar privacidad y rendimiento del dispositivo."
	},
	{
		id: 34,
		domain: "D1",
		question: "¿Cuál de las siguientes NO es un método de two-factor authentication (2FA)?",
		options: ["Password and smart card", "Escaneo biométrico y código PIN", "Contraseña y huella dactilar", "Password and PIN code"],
		correctIndex: 3,
		explanation:
			"Contraseña + PIN son dos factores del mismo tipo (algo que sabes). 2FA requiere factores distintos (know/have/are)."
	},
	{
		id: 35,
		domain: "D3",
		question:
			"¿Qué control adicional evita que un usuario cambie su contraseña repetidas veces para reutilizar una favorita, si ya existe password history?",
		options: ["Políticas de bloqueo de cuentas", "Requisitos de complejidad de contraseñas", "Password duration", "Autenticación de dos factores"],
		correctIndex: 2,
		explanation:
			"Password duration (min age) impide rotaciones rápidas y fuerza tiempo mínimo antes de permitir otro cambio."
	},
	{
		id: 36,
		domain: "D4",
		question: "¿Qué medida puede ayudar de forma efectiva a prevenir ataques potenciales en la red de una organización?",
		options: ["Cortafuegos", "Software antivirus", "Gestión de parches", "NIPS"],
		correctIndex: 3,
		explanation:
			"Un NIPS (Network Sistema de Prevención de Intrusiones) puede detectar y bloquear tráfico malicioso en línea, evitando explotación."
	},
	{
		id: 37,
		domain: "D1",
		question: "¿Cuál es el énfasis principal del estándar ISO 31000?",
		options: ["Quality management", "Gestión de riesgos", "Project management", "Gestión de cumplimiento"],
		correctIndex: 1,
		explanation:
			"ISO 31000 proporciona principios y lineamientos para establecer un marco de risk management."
	},
	{
		id: 38,
		domain: "D4",
		question:
			"¿Qué método implica el uso de un botnet para inundar a un objetivo con un exceso de paquetes?",
		options: ["Phishing attack", "Malware injection", "Inyección SQL", "Ataque DDoS"],
		correctIndex: 3,
		explanation:
			"Un DDoS usa múltiples hosts comprometidos (botnet) para saturar recursos y afectar Availability."
	},
	{
		id: 39,
		domain: "D4",
		question: "¿Qué subnet mask corresponde a una red /24?",
		options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
		correctIndex: 0,
		explanation:
			"Un prefijo /24 usa 24 bits para red, dejando 8 bits para hosts: subnet mask 255.255.255.0."
	},
	{
		id: 40,
		domain: "D3",
		question:
			"En el modelo Discretionary Control de Acceso (DAC), ¿quién tiene la responsabilidad de definir permisos de acceso a recursos?",
		options: ["Owner of the resource", "Security officer", "Administrador de sistemas", "Network administrator"],
		correctIndex: 0,
		explanation:
			"En DAC el owner del recurso decide quién puede acceder (grant/revoke)."
	},
	{
		id: 41,
		domain: "D1",
		question: "¿Qué tipo de control es una alarma?",
		options: ["Administrativo", "Detectivo", "Físico", "Correctivo"],
		correctIndex: 0,
		explanation:
			"En este banco se clasifica como control administrativo por su gestión mediante políticas/procedimientos de activación y notificación."
	},
	{
		id: 42,
		domain: "D5",
		question:
			"¿Qué método de social engineering implica revisar la basura/material descartado de una empresa para hallar información confidencial?",
		options: ["Phishing dirigido", "Búsqueda en basura", "Tailgating (Seguimiento)", "Shoulder surfing"],
		correctIndex: 1,
		explanation:
			"Dumpster diving consiste en buscar información en desechos (papeles, medios, empaques) cuando no hay destrucción segura."
	},
	{
		id: 43,
		domain: "D1",
		question: "¿Cuál es el objetivo final del último canon del (ISC)² Code of Ethics?",
		options: ["Asegurar la privacidad individual", "Avanzar y proteger la profesión", "Promover el bienestar de la comunidad", "Mantener y mejorar la integridad de la profesión"],
		correctIndex: 1,
		explanation:
"El canon 4 busca 'Avanzar y proteger la profesión': elevar la profesión, compartir conocimiento y mantener estándares éticos."
	},
	{
		id: 44,
		domain: "D5",
		question: "¿Qué es un security baseline?",
		options: ["Requisitos máximos de seguridad", "Configuraciones de seguridad óptimas", "Medidas de seguridad variables", "Minimum acceptable security requirements"],
		correctIndex: 3,
		explanation:
			"Un baseline define el mínimo aceptable de configuración/controles para un entorno, asegurando consistencia y un nivel base de protección."
	},
	{
		id: 45,
		domain: "D4",
		question: "¿Cómo puede una organización mejorar su capacidad de detectar ataques dentro de su red?",
		options: ["Deploying Sistema de Detección de Intrusiones (IDS)", "Regularly updating antivirus software", "Realizando capacitación de empleados", "Implementando strong password policies"],
		correctIndex: 0,
		explanation:
			"IDS monitorea y alerta sobre actividades sospechosas/anómalas en red/sistemas, elevando visibilidad y detección."
	},
	{
		id: 46,
		domain: "D4",
		question: "¿Qué es un acuerdo formal que establece un entendimiento común entre dos o más partes?",
		options: ["Acuerdo de No Divulgación", "Memorandum of Understanding (MOU)", "Acuerdo de Nivel de Servicio", "Acuerdo de licencia de usuario final"],
		correctIndex: 1,
		explanation:
			"Un MOU documenta objetivos y responsabilidades compartidas; suele ser menos vinculante que un contrato estricto."
	},
	{
		id: 47,
		domain: "D1",
		question:
			"¿Qué método de tratamiento de riesgo es más adecuado para mitigar el riesgo de tsunamis que afecten operaciones en una zona costera?",
		options: ["Risk acceptance", "Risk transfer", "Risk avoidance", "Risk mitigation"],
		correctIndex: 1,
		explanation:
			"Risk transfer (p. ej., seguro) transfiere el impacto financiero a un tercero; para desastres naturales suele ser la opción más práctica."
	},
	{
		id: 48,
		domain: "D4",
		question: "¿Qué característica define a un nation-state threat actor en cyber warfare?",
		options: [
			"Frequent use of script kiddie tools",
			"Opportunistic targeting of random individuals",
			"High-level sophistication in attack methodologies",
			"Limited resources and capabilities"
		],
		correctIndex: 2,
		explanation:
			"Los nation-state actors suelen tener recursos, inteligencia y tooling avanzado, con alto nivel de sofisticación y objetivos estratégicos."
	},
	{
		id: 49,
		domain: "D2",
		question:
			"En disaster recovery planning, ¿qué opción suele ofrecer solo una sala con servicios básicos (electricidad/ventilación) y requiere gran setup?",
		options: ["Sitio caliente", "Sitio tibio", "Sitio frío", "Sitio móvil"],
		correctIndex: 2,
		explanation:
			"Un cold site tiene infraestructura mínima; la recuperación toma más tiempo porque hay que instalar sistemas y restaurar datos."
	},
	{
		id: 50,
		domain: "D4",
		question: "¿Qué define mejor el concepto de defense in depth?",
		options: ["Protección multicapa", "Solo medidas reactivas", "Single-layered protection", "Limited access controls"],
		correctIndex: 0,
		explanation:
			"Defense in depth aplica múltiples capas de controles (preventive/detective/corrective) para que una falla no implique compromiso total."
	},

	{
		id: 51,
		domain: "D4",
		question: "¿Qué tipo de ataque busca degradar el rendimiento o disponibilidad de servicios?",
		options: ["Phishing", "Malware injection", "Inyección SQL", "DDoS"],
		correctIndex: 3,
		explanation:
			"DDoS intenta agotar recursos (ancho de banda, CPU, sesiones) para afectar Availability y causar interrupción de servicio."
	},
	{
		id: 52,
		domain: "D4",
		question: "¿Qué técnica se usa comúnmente para segmentar lógicamente una red para mejorar seguridad y gestión de recursos?",
		options: ["MAC filtering", "VLAN", "Subneteo", "DNSSEC"],
		correctIndex: 1,
		explanation:
			"VLAN separa dominios de broadcast y aísla tráfico a nivel lógico, reduciendo exposición y mejorando control/segregación."
	},
	{
		id: 53,
		domain: "D5",
		question:
			"¿Qué método de ataque engañoso apunta a una persona o grupo específico mediante emails personalizados para inducir errores de seguridad?",
		options: ["Suplantación", "Phishing dirigido", "Malware", "Denegación de Servicio"],
		correctIndex: 1,
		explanation:
			"Spear Phishing es phishing dirigido: mensajes personalizados aumentan credibilidad y probabilidad de que la víctima ejecute acciones riesgosas."
	},
	{
		id: 54,
		domain: "D4",
		question:
			"¿Qué modelo de cloud service permite a clientes construir apps sobre un sistema operativo/plataforma preinstalados?",
		options: ["PaaS", "IaaS", "SaaS", "FaaS"],
		correctIndex: 0,
		explanation:
			"PaaS ofrece una plataforma administrada (runtime, middleware, OS abstraído) para desplegar apps sin gestionar infraestructura base."
	},
	{
		id: 55,
		domain: "D3",
		question: "En el modelo Mandatory Control de Acceso (MAC), ¿quién asigna/define permisos de acceso?",
		options: ["Network administrators", "Security analysts", "Security administrators", "Usuarios finales"],
		correctIndex: 2,
		explanation:
			"En MAC, la autoridad central (security administrators) define reglas y labels/clearances; el usuario final no decide permisos."
	},
	{
		id: 56,
		domain: "D2",
		question:
			"Cuando se recibe información sobre la posibilidad de un potential security incident, ¿cuál es el primer paso?",
		options: ["Implement immediate countermeasures", "Notify the entire organization", "Verify the information received", "Escalar el problema a la alta dirección"],
		correctIndex: 2,
		explanation:
			"Primero se verifica la información (validez, alcance, evidencia) para evitar acciones innecesarias y responder con datos correctos."
	},
	{
		id: 57,
		domain: "D2",
		question:
			"Durante una crisis, ¿qué plan se enfoca principalmente en mantener procesos de negocio operativos mientras se restaura?",
		options: ["Plan de respuesta a emergencias", "Plan de Recuperación ante Desastres", "Plan de gestión de crisis", "Plan de Continuidad del Negocio"],
		correctIndex: 3,
		explanation:
			"BCP mantiene funciones críticas del negocio (operación) mientras DRP se enfoca más en restaurar IT/sistemas."
	},
	{
		id: 58,
		domain: "D4",
		question: "¿Cuántos bits tiene una MAC address en networking?",
		options: ["48 bits", "64 bits", "32 bits", "56 bits"],
		correctIndex: 0,
		explanation:
			"Una MAC address estándar (EUI-48) tiene 48 bits (6 bytes), representada típicamente como 6 pares hexadecimales."
	},
	{
		id: 59,
		domain: "D5",
		question:
			"¿Qué policy asegura principalmente que los records requeridos por reguladores estén disponibles cuando se necesiten?",
		options: ["Preservación", "Retención", "Archivado", "Eliminación"],
		correctIndex: 1,
		explanation:
			"Una retention policy define por cuánto tiempo se deben conservar registros para cumplir requisitos legales/regulatorios."
	},
	{
		id: 60,
		domain: "D4",
		question:
			"¿Cuál es la notación abreviada (shorthand) correcta de IPv6 para 2001:0db8:85a3:0000:0000:8a2e:0370:7334?",
		options: [
			"2001:db8:85a3:0000:0000:8a2e:0370:7334",
			"2001:db8:85a3::8a2e:370:7334",
			"2001:db8:85a3:0000:8a2e::0370:7334",
			"2001:db8:85a3:0000:0000:8a2e:7334:0370"
		],
		correctIndex: 1,
		explanation:
			"IPv6 permite comprimir secuencias contiguas de 0000 usando :: (una sola vez). Aquí, los dos grupos 0000 se comprimen a ::."
	},
	{
		id: 61,
		domain: "D1",
		question: "¿Qué problema surge cuando un sistema biométrico rechaza por error a un usuario autorizado?",
		options: ["Type 2 error", "False Acceptance", "Retraso de autenticación", "Type 1 error"],
		correctIndex: 3,
		explanation:
			"Rechazar a un usuario legítimo es un false rejection (false negative), comúnmente llamado Type 1 error en este contexto."
	},
	{
		id: 62,
		domain: "D4",
		question: "¿Qué IDS se basa en identificar patrones de ataques conocidos?",
		options: ["Basado en heurística", "Basado en anomalías", "Basado en firmas", "Basado en comportamiento"],
		correctIndex: 2,
		explanation:
			"Signature-based IDS compara tráfico/eventos contra firmas conocidas. Es efectivo para amenazas conocidas, débil para 0-days."
	},
	{
		id: 63,
		domain: "D4",
		question: "¿Qué protocolo puede deshabilitarse para prevenir un ping flooding attack?",
		options: ["ICMP", "TCP", "HTTPS", "DNS"],
		correctIndex: 0,
		explanation:
			"El ping usa ICMP Echo Request/Reply. Restringir ICMP puede mitigar ping flood, considerando necesidades operativas/diagnóstico."
	},
	{
		id: 64,
		domain: "D1",
		question: "¿Qué propiedades de seguridad suelen proporcionar las digital signatures?",
		options: ["Confidencialidad", "Authentication, integrity, and non-repudiation", "Disponibilidad", "Anonimato"],
		correctIndex: 1,
		explanation:
			"Las digital signatures aportan autenticación del emisor, integridad del contenido y no repudio (non-repudiation)."
	},
	{
		id: 65,
		domain: "D3",
		question: "¿Qué modelo de access control se basa principalmente en niveles de security clearance?",
		options: ["RBAC", "MAC", "DAC", "ABAC"],
		correctIndex: 1,
		explanation:
			"MAC usa labels/clearances y reglas centralizadas para controlar acceso a objetos según clasificación/sensibilidad."
	},
	{
		id: 66,
		domain: "D1",
		question: "¿Cuál NO es un factor típico de multi-factor authentication (MFA)?",
		options: ["Algo que sabes", "Algo que tienes", "Algo que eres", "Algo que ves"],
		correctIndex: 3,
		explanation:
"Los factores comunes son conocimiento (know), posesión (have) e inherencia (are). 'Algo que ves' no es un factor estándar."
	},
	{
		id: 67,
		domain: "D5",
		question: "¿Qué protocolo se explota comúnmente en ataques de pharming?",
		options: ["HTTPS", "FTP", "DNS", "TCP"],
		correctIndex: 2,
		explanation:
			"Pharming manipula resolución de nombres (DNS) para redirigir usuarios a sitios falsos sin que lo noten."
	},
	{
		id: 68,
		domain: "D2",
		question:
			"Dentro de una organización, ¿qué unidad es menos probable que participe activamente en el desarrollo de un disaster recovery plan?",
		options: ["Human Resources", "Information Technology", "Operaciones", "Finanzas"],
		correctIndex: 3,
		explanation:
			"Finance suele apoyar presupuesto y evaluación de costos, pero el diseño operativo del DRP recae principalmente en IT y operaciones."
	},
	{
		id: 69,
		domain: "D4",
		question:
			"¿Qué función de cloud computing permite comprar solo servicios necesarios en el momento y escalar up/down con el tiempo?",
		options: ["Pago por uso", "Reserved instances", "On-demand instances", "Fixed-cost instances"],
		correctIndex: 0,
		explanation:
			"Pay-as-you-go cobra por uso real y soporta elasticidad/escala según demanda."
	},
	{
		id: 70,
		domain: "D4",
		question:
			"¿Qué tipo de malware se propaga adjuntándose a un programa legítimo e infectándolo (a menudo por malas decisiones de seguridad)?",
		options: ["Virus", "Gusano", "Trojan Horse", "Spyware"],
		correctIndex: 0,
		explanation:
			"Un virus se adjunta a ejecutables/archivos y se activa cuando el host se ejecuta; worms se autopropagan sin host."
	},
	{
		id: 71,
		domain: "D2",
		question:
			"En un incident response team, ¿qué rol gestiona principalmente comunicaciones externas con medios durante un incidente?",
		options: ["Relaciones públicas", "Network Administrator", "Incident Commander", "Forensic Analyst"],
		correctIndex: 0,
		explanation:
			"Public Relations (PR) gestiona mensajes públicos/medios para minimizar desinformación y proteger reputación durante incidentes."
	},
	{
		id: 72,
		domain: "D4",
		question: "¿Qué malware está diseñado para registrar las keystrokes de un usuario?",
		options: ["Spyware", "Adware (Software publicitario)", "Keylogger (Registrador de teclas)", "Ransomware"],
		correctIndex: 2,
		explanation:
			"Un keylogger captura pulsaciones del teclado para robar credenciales/datos sensibles sin que la víctima lo perciba."
	},
	{
		id: 73,
		domain: "D3",
		question:
			"¿Cuál es el elemento principal utilizado para definir permisos de acceso en una Control de Acceso List (ACL)?",
		options: ["Regla", "User credentials", "Firewall settings", "Claves de cifrado"],
		correctIndex: 0,
		explanation:
			"En un ACL, las reglas (rules) especifican allow/deny según criterios (origen/destino, puertos, protocolo, identidad, etc.)."
	},
	{
		id: 74,
		domain: "D4",
		question: "¿Cuál es la definición de un “SLA”?",
		options: [
			"A systematic list of authorized users",
			"An agreement between two cybersecurity professionals",
			"A security log analysis tool",
			"A contract between the customer and the service provider defining the service level delivery expectations"
		],
		correctIndex: 3,
		explanation:
			"Un SLA (Acuerdo de Nivel de Servicio) define niveles de servicio (uptime, tiempos de respuesta, soporte) entre proveedor y cliente."
	},
	{
		id: 75,
		domain: "D5",
		question:
			"¿Qué término describe datos que permanecen en un dispositivo de almacenamiento a pesar de intentos de eliminarlos?",
		options: ["Persistencia de datos", "Remanencia de datos", "Ofuscación de datos", "Sanitización de datos"],
		correctIndex: 1,
		explanation:
			"Data remanence es el residuo de datos recuperables que puede quedar tras borrado lógico, formateo, etc., si no hay sanitización adecuada."
	},
	{
		id: 76,
		domain: "D4",
		question: "¿Qué layer existe tanto en el modelo OSI como en el modelo TCP/IP?",
		options: ["Transporte", "Presentación", "Aplicación", "Red"],
		correctIndex: 0,
		explanation:
			"Transport existe en ambos modelos (OSI L4 / TCP-IP Transport), encargándose de comunicación extremo a extremo (TCP/UDP)."
	},
	{
		id: 77,
		domain: "D2",
		question:
			"En forensics, ¿cuál es el requisito principal para asegurar la admisibilidad de evidencia digital en un tribunal?",
		options: ["Cifrado de datos", "Expert testimony", "Incident response plan", "Cadena de custodia"],
		correctIndex: 3,
		explanation:
			"Chain of custody documenta quién tuvo la evidencia, cuándo y cómo se preservó, demostrando integridad y evitando dudas de manipulación."
	},
	{
		id: 78,
		domain: "D4",
		question:
			"¿Qué característica de un SIEM permite recolectar logs de fuentes dispares en un lugar unificado?",
		options: ["Correlación", "Agregación", "Cifrado", "Autenticación"],
		correctIndex: 1,
		explanation:
			"Aggregation es la recolección/centralización de eventos. Correlation analiza relaciones/patrones sobre los datos agregados."
	},
	{
		id: 79,
		domain: "D4",
		question:
			"¿Qué tecnología proporciona un método seguro para establecer comunicación sobre redes no confiables, asegurando confidencialidad e integridad?",
		options: ["HTTP", "VPN", "TCP", "FTP"],
		correctIndex: 1,
		explanation:
			"Una VPN crea un túnel cifrado (p. ej., IPSec/SSL VPN) para proteger datos sobre Internet u otras redes no confiables."
	},
	{
		id: 80,
		domain: "D4",
		question:
			"¿Qué método de password cracking intenta una sola contraseña contra un gran número de cuentas?",
		options: ["Fuerza bruta", "Ataque de Diccionario", "Credential Stuffing", "Password Spraying"],
		correctIndex: 3,
		explanation:
			"Password spraying prueba contraseñas comunes contra muchas cuentas para evitar lockouts por múltiples intentos en un solo usuario."
	},
	{
		id: 81,
		domain: "D1",
		question:
			"¿Qué canon del (ISC)² Code of Ethics enfatiza específicamente el compromiso de 'Avanzar y proteger la profesión'?",
		options: ["Canon 4", "Canon 3", "Canon 2", "Canon 1"],
		correctIndex: 0,
		explanation:
			"El canon 4 trata de 'Avanzar y proteger la profesión'."
	},
	{
		id: 82,
		domain: "D3",
		question:
			"¿Qué describe un conjunto de reglas que especifica qué objetos puede acceder un sujeto (subject) en cybersecurity?",
		options: ["Access control list (ACL)", "Security protocol", "Algoritmo de cifrado", "Proceso de autenticación"],
		correctIndex: 0,
		explanation:
			"Un ACL define permisos allow/deny por sujeto/objeto o criterios equivalentes, aplicando control de acceso."
	},
	{
		id: 83,
		domain: "D2",
		question:
			"¿Qué proceso se encarga principalmente de identificar y priorizar operaciones críticas esenciales para business continuity?",
		options: ["Evaluación de vulnerabilidades", "Análisis de Impacto al Negocio (BIA)", "Modelado de amenazas", "Pruebas de penetración"],
		correctIndex: 1,
		explanation:
			"BIA identifica funciones críticas, dependencias y el impacto de interrupciones para priorizar recuperación (RTO/RPO, etc.)."
	},
	{
		id: 84,
		domain: "D2",
		question:
			"En BC/DR planning, ¿cuál describe mejor el propósito de un Análisis de Impacto al Negocio (BIA)?",
		options: [
			"Identifying potential security threats",
			"Evaluando cumplimiento regulatorio",
			"Evaluando desempeño financiero",
			"Identifying critical business functions and their dependencies on IT resources"
		],
		correctIndex: 3,
		explanation:
			"BIA se centra en funciones críticas del negocio y dependencias (IT/terceros/procesos) para planear continuidad y recuperación."
	},
	{
		id: 85,
		domain: "D2",
		question:
			"¿Qué tipo de prueba consiste en discutir paso a paso las acciones ante un desastre para que el equipo conozca roles y responsabilidades?",
		options: ["Simulación", "Simulacro", "Ejercicio de mesa", "Recorrido"],
		correctIndex: 3,
		explanation:
			"Un walkthrough revisa procedimientos detalladamente para validar entendimiento, dependencias y gaps antes de ejercicios más realistas."
	},
	{
		id: 86,
		domain: "D5",
		question:
			"¿Cuál es la forma más efectiva de asegurar que la información sensible en un mobile device corporativo no se exponga si se roba el equipo?",
		options: ["Habilitando cifrado completo del dispositivo", "Regularly updating antivirus software", "Implementando biometric authentication", "Using a remote wipe feature"],
		correctIndex: 0,
		explanation:
			"Full-device encryption protege datos almacenados (data at rest) de forma continua; incluso si el atacante tiene el dispositivo, no puede leer sin la clave."
	},
	{
		id: 87,
		domain: "D1",
		question: "¿Qué problema ocurre cuando un sistema biométrico acepta por error a un usuario no autorizado?",
		options: ["Type 1 error", "False Rejection", "Type 2 error", "Deriva biométrica"],
		correctIndex: 2,
		explanation:
			"Aceptar a un impostor es false acceptance (false positive), comúnmente llamado Type 2 error en este contexto."
	},
	{
		id: 88,
		domain: "D5",
		question:
			"¿Qué proceso de gobernanza busca principalmente asegurar que los sistemas se actualicen sin impactos negativos al negocio?",
		options: ["Gestión de riesgos", "Incident handling", "Gestión de Cambios", "Control de configuración"],
		correctIndex: 2,
		explanation:
			"Gestión de Cambios evalúa, aprueba, planifica y documenta cambios para reducir riesgo, evitar downtime y mantener estabilidad/compliance."
	},
	{
		id: 89,
		domain: "D2",
		question:
			"¿En qué fase del incident response cycle se elimina el malware de dispositivos y se reinstala el sistema desde medios originales?",
		options: ["Identificación", "Erradicación", "Contención", "Recuperación"],
		correctIndex: 1,
		explanation:
			"Eradication elimina la causa/artefactos del incidente (malware, backdoors) para evitar reinfección antes de volver a producción."
	},
	{
		id: 90,
		domain: "D3",
		question:
			"Cuando un usuario cambia de departamento y de responsabilidades, ¿qué paso es esencial para asegurar controles adecuados?",
		options: ["Updating the employee handbook", "Realizando un taller de trabajo en equipo", "Revisando and updating access permissions", "Hosting a farewell party"],
		correctIndex: 2,
		explanation:
			"Se deben revisar permisos para alinearlos al nuevo rol y mantener mínimo privilegio (retirar accesos ya no requeridos)."
	},
	{
		id: 91,
		domain: "D1",
		question: "¿Quién tiene la responsabilidad principal de aprobar las policies dentro de una organización?",
		options: ["IT Security Team", "Oficial de cumplimiento", "Executive Management", "System Administrators"],
		correctIndex: 2,
		explanation:
			"Executive Management aprueba políticas porque alinean riesgos y objetivos de negocio, asignan autoridad y patrocinio organizacional."
	},
	{
		id: 92,
		domain: "D1",
		question:
			"¿Qué tipo de control de acceso actúa como advertencia o desalienta acceso no autorizado enfatizando consecuencias?",
		options: ["Obligatorio", "Basado en roles", "Discrecional", "Disuasivo"],
		correctIndex: 3,
		explanation:
			"Un deterrent control busca disuadir (warning banners, cámaras visibles, sanciones) más que bloquear técnicamente el acceso."
	},
	{
		id: 93,
		domain: "D4",
		question:
			"¿Qué tipo de ataque ejecuta acciones maliciosas programadas para ocurrir en un tiempo predeterminado o ante un trigger?",
		options: ["Phishing attack", "Denial-of-Service attack", "Logic bomb", "Man-in-the-middle attack"],
		correctIndex: 2,
		explanation:
			"Una logic bomb es código malicioso dormante que se activa por condición/fecha/evento, causando daño o sabotaje."
	},
	{
		id: 94,
		domain: "D1",
		question: "¿Cuál descripción corresponde mejor a PCI-DSS?",
		options: [
			"A set of standards for securing payment card data.",
			"Guidelines for cloud computing security.",
			"Protocols for securing mobile device communication.",
			"A framework for network security measures."
		],
		correctIndex: 0,
		explanation:
			"PCI-DSS (Payment Card Industry Seguridad de Datos Standard) define requisitos para proteger datos de tarjetas en almacenamiento/procesamiento/transmisión."
	},
	{
		id: 95,
		domain: "D5",
		question: "¿Qué tipo de dato suele estar presente en la RAM de un dispositivo de cómputo?",
		options: ["Datos en reposo", "Datos en tránsito", "Datos en uso", "Datos archivados"],
		correctIndex: 2,
		explanation:
			"RAM contiene data in use (datos en uso), es decir, información que el sistema está procesando activamente."
	},
	{
		id: 96,
		domain: "D5",
		question:
			"¿Cuál es el enfoque más efectivo para escanear una aplicación cloud por vulnerabilidades cuando no se tiene acceso al source code?",
		options: ["Static Application Testing", "Pruebas dinámicas de aplicación", "Pruebas de Penetración", "Auditoría de Seguridading"],
		correctIndex: 1,
		explanation:
			"Dynamic Application Probando (DAST) evalúa la aplicación en ejecución, ideal cuando no se dispone del código fuente (black-box)."
	},
	{
		id: 97,
		domain: "D4",
		question:
			"¿Qué ataque implica interceptar información sensible y luego reenviarla para intentar eludir controles de seguridad?",
		options: ["Suplantación", "Escucha clandestina", "Repetición", "Inyección"],
		correctIndex: 2,
		explanation:
			"Replay captura un token/paquete válido y lo retransmite para autenticarse o ejecutar acciones sin credenciales nuevas."
	},
	{
		id: 98,
		domain: "D4",
		question:
			"¿Cuál es un factor clave de éxito para un sistema antimalware signature-based efectivo?",
		options: ["Timely updates", "Algoritmos heurísticos avanzados", "Machine learning capabilities", "Real-time monitoring"],
		correctIndex: 0,
		explanation:
			"En detección signature-based, la efectividad depende de mantener la base de firmas actualizada para reconocer malware nuevo."
	},
	{
		id: 99,
		domain: "D4",
		question: "¿Qué puerto se usa comúnmente para comunicación SSL/TLS vía HTTPS?",
		options: ["Port 80", "Port 443", "Port 22", "Port 8080"],
		correctIndex: 1,
		explanation:
			"HTTPS usa TLS por defecto en el puerto 443."
	},
	{
		id: 100,
		domain: "D4",
		question:
			"¿Qué característica del cloud computing permite ajustar recursos fácilmente según la demanda?",
		options: ["Cifrado de datos", "Escalabilidad", "Autenticación multifactor", "Virtualización"],
		correctIndex: 1,
		explanation:
			"Scalability/elasticidad permite escalar recursos (compute/storage) hacia arriba o abajo según demanda de carga."
	}
];
