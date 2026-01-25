// Test 5 — Banco de 100 preguntas (fuente en inglés)
// Formato esperado por app.js: const QUESTIONS = [{ id, domain, question, options, correctIndex, explanation }, ...]

const QUESTIONS = [
	{
		id: 1,
		domain: "D1",
		question: "¿Cuál de las siguientes NO es un canon dentro del Código de Ética de (ISC)²?",
		options: [
			"Proteger a la sociedad, el bien común, la confianza y la seguridad públicas necesarias, y la infraestructura.",
			"Actuar de manera honorable, honesta, justa, responsable y legal.",
			"Brindar un servicio diligente y competente a los principios.",
			"Promover la comprensión pública de la ciberseguridad."
		],
		correctIndex: 3,
		explanation:
			"El Código de Ética de (ISC)² tiene cuatro cánones; promover la comprensión pública es valioso, pero no figura como canon oficial."
	},
	{
		id: 2,
		domain: "D2",
		question:
			"Durante un incidente de ciberseguridad, ¿qué fase del proceso de respuesta se centra principalmente en detener la propagación de un worm por la red?",
		options: ["Identificación", "Contención", "Erradicación", "Recuperación"],
		correctIndex: 1,
		explanation:
			"La contención se enfoca en limitar el alcance y detener la propagación (por ejemplo, aislando hosts o segmentos) para prevenir una mayor difusión."
	},
	{
		id: 3,
		domain: "D3",
		question: "¿Qué modelo de control de acceso establece permisos basados en un conjunto de reglas definidas?",
		options: [
			"Control de Acceso Obligatorio (MAC)",
			"Control de Acceso Basado en Reglas (RuBAC)",
			"Control de Acceso Basado en Roles (RBAC)",
			"Control de Acceso Discrecional (DAC)"
		],
		correctIndex: 1,
		explanation:
			"El Control de Acceso Basado en Reglas utiliza reglas o condiciones predefinidas para permitir o denegar el acceso (a menudo según el estado del sistema o el entorno)."
	},
	{
		id: 4,
		domain: "D4",
		question:
			"¿Qué dispositivo suele estar situado frente a un servidor de aplicaciones y gestiona todas las solicitudes de clientes dirigidas hacia él?",
		options: ["Load Balancer", "Firewall", "Reverse Proxy", "Sistema de Detección de Intrusiones"],
		correctIndex: 2,
		explanation:
			"Un reverse proxy se sitúa delante de los servidores de aplicaciones y enruta las solicitudes de clientes, a menudo añadiendo controles como terminación TLS y filtrado."
	},
	{
		id: 5,
		domain: "D5",
		question: "¿Cuál es el medio más efectivo para proteger datos en reposo?",
		options: ["Controles de acceso", "Configuración de Firewall", "Cifrado", "Detección de intrusiones"],
		correctIndex: 2,
		explanation:
			"El cifrado es el control principal para proteger la confidencialidad de los datos en reposo, haciéndolos ilegibles sin la clave."
	},
	{
		id: 6,
		domain: "D4",
		question: "¿Cuál es el objetivo principal de un ataque de canal lateral?",
		options: ["Cifrado de datos", "Prevención de Denegación de Servicio", "Configuración de Firewall", "Reconocimiento pasivo"],
		correctIndex: 3,
		explanation:
			"Los ataques de canal lateral obtienen información de manera indirecta (tiempo, energía, EM) para inferir secretos como claves sin romper directamente la criptografía."
	},
	{
		id: 7,
		domain: "D4",
		question: "¿Qué técnica de monitoreo se enfoca en observar el tráfico dirigido hacia la red?",
		options: ["Salida", "Entrada", "Perímetro", "Interno"],
		correctIndex: 1,
		explanation: "El monitoreo de Ingress se enfoca en el tráfico entrante que ingresa a la red."
	},
	{
		id: 8,
		domain: "D1",
		question:
			"En el contexto de ciberseguridad, ¿qué opción de tratamiento de riesgo es la más apropiada para abordar el impacto de desastres naturales?",
		options: ["Transferencia del riesgo", "Evitación del riesgo", "Mitigación del riesgo", "Aceptación del riesgo"],
		correctIndex: 0,
		explanation:
			"La transferencia del riesgo (por ejemplo, seguros o contratos) traslada parte del impacto financiero de los desastres a un tercero."
	},
	{
		id: 9,
		domain: "D5",
		question:
			"¿Qué es una colección integrada de actualizaciones, correcciones y parches producida por el proveedor de la aplicación?",
		options: ["Paquete de actualización", "Paquete de mejoras", "Conjunto de revisiones", "Service pack"],
		correctIndex: 3,
		explanation:
			"Un service pack es un conjunto de actualizaciones, correcciones y parches del proveedor, publicado como paquete consolidado."
	},
	{
		id: 10,
		domain: "D5",
		question: "¿Cuál es un objetivo principal de la capacitación de concienciación en seguridad?",
		options: [
			"Cifrar datos sensibles",
			"Bloquear todos los correos externos",
			"Promover que los participantes tomen decisiones informadas y seguras",
			"Actualizar el software antivirus"
		],
		correctIndex: 2,
		explanation:
			"La concienciación en seguridad se dirige al factor humano, ayudando a las personas a reconocer amenazas y elegir conductas más seguras."
	},
	{
		id: 11,
		domain: "D1",
		question: "¿Cuál de las siguientes opciones define mejor un procedimiento en ciberseguridad?",
		options: [
			"Un marco teórico que describe principios de seguridad",
			"Una guía paso a paso que detalla el proceso para ejecutar una tarea de forma segura.",
			"Un análisis detallado de vulnerabilidades potenciales",
			"Un modelo estadístico que predice amenazas cibernéticas"
		],
		correctIndex: 1,
		explanation:
			"Un procedimiento documenta instrucciones paso a paso para realizar una tarea de forma segura y repetible."
	},
	{
		id: 12,
		domain: "D2",
		question: "Después de identificar activos en un análisis de impacto al negocio, ¿cuál es el siguiente paso?",
		options: ["Valoración", "Evaluación de riesgos", "Respuesta a incidentes", "Gestión de configuración"],
		correctIndex: 0,
		explanation:
			"En un BIA, la identificación de activos va seguida de la valoración o determinación de criticidad para priorizar lo más importante."
	},
	{
		id: 13,
		domain: "D4",
		question:
			"¿Qué método se considera el más efectivo para prevenir la filtración no autorizada de datos de una organización?",
		options: [
			"Cifrado",
			"Segmentación de red",
			"Sistema de Detección de Intrusiones (IDS)",
			"Sistemas de Prevención de Pérdida de Datos (DLP)"
		],
		correctIndex: 3,
		explanation:
			"Las herramientas DLP detectan y bloquean la exfiltración de datos sensibles según la política, atacando directamente escenarios de fuga."
	},
	{
		id: 14,
		domain: "D4",
		question:
			"¿Qué técnica se utiliza comúnmente para aplicar la política de seguridad de una organización en dispositivos móviles conectados a la red?",
		options: ["Configuración de Firewall", "Software antivirus", "Sistema de detección de intrusiones", "Mobile Device Management (MDM)"],
		correctIndex: 3,
		explanation:
			"MDM aplica la configuración del dispositivo, políticas de seguridad y control de apps, y puede borrar o bloquear remotamente para mantener el cumplimiento."
	},
	{
		id: 15,
		domain: "D1",
		question: "¿Qué significa el acrónimo PII en el contexto de la ciberseguridad?",
		options: [
			"Información de identificación personal",
			"Información protegida",
			"Información personalmente identificable",
			"Información privada"
		],
		correctIndex: 2,
		explanation:
			"PII significa Información de Identificación Personal: datos que pueden identificar a una persona (directa o indirectamente)."
	},
	{
		id: 16,
		domain: "D2",
		question:
			"¿Qué tipo de instalación de recuperación ante desastres contiene solo energía, cableado de comunicaciones e infraestructura HVAC, pero carece de equipos operativos?",
		options: ["Sitio caliente", "Sitio templado", "Sitio frío", "Sitio móvil"],
		correctIndex: 2,
		explanation:
			"Un sitio frío proporciona instalaciones básicas, pero no equipo informático preinstalado, y requiere más tiempo de preparación."
	},
	{
		id: 17,
		domain: "D5",
		question:
			"¿Qué método se utiliza comúnmente para garantizar consistencia en las configuraciones de seguridad de servidores de producción recién desplegados?",
		options: ["Configuraciones base", "Gestión de parches", "Escaneo de vulnerabilidades", "Detección de intrusiones"],
		correctIndex: 0,
		explanation:
			"Las líneas base definen una configuración segura estándar que los nuevos servidores deben cumplir, reduciendo la mala configuración y la deriva."
	},
	{
		id: 18,
		domain: "D4",
		question:
			"¿Qué tipo de hacker realiza actividades de hacking legales y éticas para determinar fallas de seguridad en sistemas?",
		options: ["Sombrero negro", "Grey hat", "Sombrero blanco", "Sombrero azul"],
		correctIndex: 2,
		explanation:
			"Los white hat prueban sistemas de forma legal y ética con autorización para identificar y ayudar a remediar vulnerabilidades."
	},
	{
		id: 19,
		domain: "D3",
		question: "¿Qué describe mejor el principio de \"necesidad de conocer\" en ciberseguridad?",
		options: [
			"Todos los empleados deben tener acceso a toda la información de la empresa.",
			"El acceso a la información debe limitarse a lo necesario para que una persona realice su trabajo.",
			"La información solo debe ser accesible para el departamento de TI.",
			"El acceso a la información debe concederse según la antigüedad dentro de la organización."
		],
		correctIndex: 1,
		explanation:
			"La necesidad de conocer (Need-to-know) limita el acceso a la información a lo que una persona requiere para hacer su trabajo, reduciendo la exposición."
	},
	{
		id: 20,
		domain: "D4",
		question: "¿Qué tipo de malware se clasifica dentro de la categoría de crypto-malware?",
		options: ["Adware (Software publicitario)", "Ransomware", "Spyware", "Gusanos"],
		correctIndex: 1,
		explanation:
			"El ransomware cifra los datos y exige un pago para su descifrado, siendo una forma clásica de crypto-malware."
	},
	{
		id: 21,
		domain: "D4",
		question:
			"¿Qué tipo de ataque implica que un adversario intercepte y potencialmente modifique la comunicación entre dos partes colocándose en la ruta de comunicación?",
		options: ["Escucha clandestina", "Suplantación", "On-path attack", "Injection attack"],
		correctIndex: 2,
		explanation:
			"Un on-path attack coloca al atacante entre las partes para interceptar y quizá modificar el tráfico (también llamado MiTM en muchos contextos)."
	},
	{
		id: 22,
		domain: "D5",
		question: "¿Qué política organizacional está diseñada principalmente para imponer requisitos seguros de contraseñas?",
		options: ["Política de control de acceso", "Política de contraseñas", "Política de clasificación de datos", "Política de seguridad física"],
		correctIndex: 1,
		explanation:
			"Una política de contraseñas define requisitos como longitud, complejidad, historial, caducidad y reglas de reutilización."
	},
	{
		id: 23,
		domain: "D4",
		question:
			"¿Qué proceso implica analizar múltiples eventos de seguridad de diversas fuentes para determinar secuencias y anomalías?",
		options: ["Cifrado de datos", "Detección de intrusiones", "Evaluación de seguridad", "Correlación"],
		correctIndex: 3,
		explanation:
			"La correlación vincula eventos de distintas fuentes (registros, alertas) para identificar patrones, líneas de tiempo y anomalías."
	},
	{
		id: 24,
		domain: "D4",
		question: "¿Cuál es el problema principal de configurar un router de internet con la dirección IP 172.31.20.121?",
		options: [
			"Medidas de seguridad insuficientes",
			"Máscara de subred incorrecta",
			"Conflicto de direcciones IP",
			"No habrá conectividad a internet"
		],
		correctIndex: 3,
		explanation:
			"172.31.20.121 pertenece a un rango privado RFC1918; no es enrutable en internet público como IP de un router expuesto."
	},
	{
		id: 25,
		domain: "D4",
		question: "¿Qué tipo de red se utiliza típicamente para conectar redes remotas a larga distancia?",
		options: ["PAN", "LAN", "WLAN", "WAN"],
		correctIndex: 3,
		explanation: "Una WAN (Wide Area Network) conecta redes a grandes distancias geográficas."
	},
	{
		id: 26,
		domain: "D3",
		question: "¿Qué tipo de tarjeta es sin contacto y no requiere interacción física con el lector?",
		options: ["Tarjeta de banda magnética", "MasterCard", "Tarjeta de identificación", "Tarjeta de proximidad"],
		correctIndex: 3,
		explanation:
			"Las tarjetas de proximidad usan tecnología RFID/contactless y autentican al acercarse al lector sin contacto físico."
	},
	{
		id: 27,
		domain: "D3",
		question: "¿Qué afirmación describe correctamente el Control de Acceso Obligatorio (MAC) en un contexto de ciberseguridad?",
		options: [
			"Los sujetos pueden conceder libremente sus privilegios a otros sujetos.",
			"Los permisos de acceso se asignan según roles y responsabilidades laborales.",
			"Los sujetos no tienen permitido conceder sus privilegios a otros sujetos.",
			"El acceso se controla a discreción de los usuarios individuales."
		],
		correctIndex: 2,
		explanation:
			"En MAC, el acceso se aplica por política del sistema; los sujetos no pueden delegar privilegios ni cambiar decisiones de acceso."
	},
	{
		id: 28,
		domain: "D2",
		question: "¿Qué componente esencial se encuentra típicamente en un plan integral de continuidad del negocio?",
		options: [
			"Lista de todos los empleados de la organización",
			"Mapas de evacuación de emergencia con códigos de colores",
			"Inventario de mobiliario y equipos de oficina",
			"Instrucciones sobre cómo y cuándo activar el plan"
		],
		correctIndex: 3,
		explanation:
			"Un BCP debe definir claramente criterios de activación e instrucciones paso a paso para responder de forma rápida y consistente."
	},
	{
		id: 29,
		domain: "D5",
		question:
			"¿Cuáles de los siguientes constituyen los componentes principales de una gestión de configuración robusta en ciberseguridad?",
		options: [
			"Definición, Estandarización, Revisión, Validación y Revisión",
			"Autenticación, Autorización, Cifrado, Descifrado y Registro",
			"Inventario, Parches, Copias de seguridad, Pruebas y Restauración",
			"Identificación, Línea base, Control de cambios, Verificación y Auditoría"
		],
		correctIndex: 3,
		explanation:
			"La gestión de configuración se centra en identificar elementos, establecer líneas base, controlar cambios, verificar el cumplimiento y auditar."
	},
	{
		id: 30,
		domain: "D5",
		question: "¿Qué componentes suelen intervenir en los procesos de gestión de cambios dentro de la ciberseguridad?",
		options: [
			"Respuesta a incidentes, evaluación de riesgos, despliegue",
			"Cifrado de datos, configuración de Firewall, actualizaciones de software",
			"Copia de seguridad del sistema, segmentación de red, control de acceso",
			"Solicitud de Cambio (RFC), aprobación, reversión"
		],
		correctIndex: 3,
		explanation:
			"La gestión de cambios suele incluir un RFC, aprobación formal, implementación controlada y planes de reversión si algo sale mal."
	},
	{
		id: 31,
		domain: "D2",
		question: "¿Cuál de los siguientes documentos se considera típicamente parte del plan general de recuperación ante desastres?",
		options: ["Materiales de capacitación para empleados", "Diagramas de arquitectura de red", "Planes específicos por departamento", "Manuales de usuario de software"],
		correctIndex: 2,
		explanation:
			"La planificación de recuperación ante desastres suele incluir procedimientos específicos por departamento sobre cómo restaurar capacidades críticas."
	},
	{
		id: 32,
		domain: "D5",
		question:
			"¿Cuál es un paso crucial que debe realizarse antes de poder etiquetar los datos para indicar su sensibilidad o requisitos de manejo?",
		options: [
			"Realizar pruebas de penetración",
			"Analizar el impacto o pérdida potencial para la organización",
			"Implementar protocolos de cifrado",
			"Monitorear el tráfico de red"
		],
		correctIndex: 1,
		explanation:
			"Las decisiones de clasificación requieren comprender el impacto de la divulgación o pérdida; el análisis de impacto determina el etiquetado y los controles."
	},
	{
		id: 33,
		domain: "D3",
		question: "¿Cuál es una propiedad fundamental del modelo de Control de Acceso Obligatorio (MAC)?",
		options: [
			"Los sujetos pueden cambiar libremente las reglas de control de acceso.",
			"Los objetos determinan su propio control de acceso.",
			"El control de acceso se basa en la discreción del propietario.",
			"El sujeto no puede cambiar las reglas que rigen el control de acceso."
		],
		correctIndex: 3,
		explanation:
			"MAC se aplica de forma centralizada; los sujetos no pueden modificar las reglas de acceso y deben seguir la política del sistema."
	},
	{
		id: 34,
		domain: "D4",
		question: "¿Cuál es el rango de puertos bien conocidos utilizado típicamente por servicios de red?",
		options: ["1024–49151", "0–1023", "49152–65535", "1024–65535"],
		correctIndex: 1,
		explanation:
			"Los puertos bien conocidos son 0–1023 y se reservan para servicios comunes (por ejemplo, 80/443/22/25) por convención y estándares."
	},
	{
		id: 35,
		domain: "D3",
		question:
			"¿Qué principio de seguridad aplica la declaración de política \"Solo los empleados que trabajan en la unidad de procesamiento de pagos podrán ver los datos financieros de los clientes\"?",
		options: ["Mínimo privilegio", "Necesidad de conocer", "Defensa en profundidad", "Separación de funciones"],
		correctIndex: 0,
		explanation:
			"Restringir el acceso solo a quienes lo necesitan para su función es una aplicación de mínimo privilegio, reduciendo exposición innecesaria."
	},
	{
		id: 36,
		domain: "D5",
		question:
			"¿Cuál de las siguientes políticas está diseñada para imponer el uso apropiado y aprobado de los activos empresariales?",
		options: [
			"Política de Uso Aceptable (AUP)",
			"Política de respuesta a incidentes",
			"Política de clasificación de datos",
			"Política de gestión de parches"
		],
		correctIndex: 0,
		explanation:
			"Una Política de Uso Aceptable define el uso permitido y prohibido de los sistemas, redes y datos de la organización por parte de los usuarios."
	},
	{
		id: 37,
		domain: "D4",
		question: "¿Qué técnica de monitoreo regula la información que sale de la red empresarial?",
		options: ["Salida", "Entrada", "Monitoreo de endpoints", "Inspección de Firewall"],
		correctIndex: 0,
		explanation: "El monitoreo de Egress se enfoca en el tráfico saliente que abandona la red empresarial."
	},
	{
		id: 38,
		domain: "D1",
		question:
			"¿Qué ley regula específicamente el uso, almacenamiento y transmisión de información de salud protegida electrónica (ePHI)?",
		options: ["GLBA", "HIPAA", "FERPA", "COPPA"],
		correctIndex: 1,
		explanation:
			"HIPAA regula la información de salud protegida, incluyendo requisitos para salvaguardar ePHI."
	},
	{
		id: 39,
		domain: "D4",
		question: "¿Qué dispositivo de red aplica políticas filtrando el tráfico según un conjunto de reglas?",
		options: ["Conmutador", "Enrutador", "Concentrador", "Firewall"],
		correctIndex: 3,
		explanation: "Un Firewall filtra el tráfico basado en reglas o políticas de seguridad definidas."
	},
	{
		id: 40,
		domain: "D1",
		question:
			"¿Qué opción de tratamiento de riesgo implica decidir no tomar acción para minimizar la probabilidad de ocurrencia de un evento de riesgo?",
		options: ["Mitigación del riesgo", "Evitación del riesgo", "Aceptación del riesgo", "Transferencia del riesgo"],
		correctIndex: 2,
		explanation:
			"La aceptación del riesgo implica reconocer el riesgo y decidir no tomar acciones adicionales para reducir su probabilidad o impacto."
	},
	{
		id: 41,
		domain: "D5",
		question: "¿Qué práctica de retención de datos no es aconsejable para mantener la ciberseguridad?",
		options: [
			"Revisar y actualizar periódicamente las políticas de retención de datos",
			"Establecer el mayor tiempo de retención para todos los datos",
			"Implementar métodos de eliminación segura para datos obsoletos",
			"Clasificar los datos según su sensibilidad y aplicar periodos de retención apropiados"
		],
		correctIndex: 1,
		explanation:
			"Retener todos los datos por el máximo tiempo incrementa la exposición y el impacto de una brecha; la retención debe adaptarse y minimizarse."
	},
	{
		id: 42,
		domain: "D4",
		question: "¿Cuál de las siguientes opciones distingue TCP (Transmission Control Protocol) de UDP (User Datagram Protocol)?",
		options: [
			"Ambos son símplex y sin conexión.",
			"TCP es símplex y sin conexión, mientras UDP es dúplex completo y orientado a conexión.",
			"Ambos son dúplex completo y orientados a conexión.",
			"TCP es dúplex completo y orientado a conexión, mientras UDP es símplex y sin conexión."
		],
		correctIndex: 3,
		explanation:
			"TCP es orientado a conexión y ofrece entrega confiable; UDP es sin conexión y liviano para entrega de mejor esfuerzo."
	},
	{
		id: 43,
		domain: "D1",
		question:
			"¿Qué técnica de autenticación emplea una contraseña o valor secreto para distinguir a un usuario autorizado de uno no autorizado?",
		options: [
			"Autenticación biométrica",
			"Autenticación basada en contraseña",
			"Autenticación basada en token",
			"Autenticación basada en certificados"
		],
		correctIndex: 1,
		explanation:
			"La autenticación basada en contraseña usa un secreto compartido conocido por el usuario para probar identidad (un factor de \"algo que sabes\")."
	},
	{
		id: 44,
		domain: "D4",
		question: "¿Cuál de las siguientes describe mejor el spoofing en el contexto de la ciberseguridad?",
		options: [
			"Aprovechar una identidad falsa para obtener acceso a un sistema objetivo",
			"Crear una copia de seguridad de datos críticos",
			"Enviar correos no solicitados a múltiples destinatarios",
			"Implementar un Firewall para bloquear acceso no autorizado"
		],
		correctIndex: 0,
		explanation:
			"El spoofing es la suplantación falsificando información de identidad (por ejemplo, IP, email, DNS) para ganar confianza o acceso."
	},
	{
		id: 45,
		domain: "D4",
		question: "¿Qué puerto utiliza típicamente el Network Time Protocol (NTP)?",
		options: ["80", "123", "443", "8080"],
		correctIndex: 1,
		explanation: "NTP utiliza el puerto UDP 123 para sincronización de tiempo."
	},
	{
		id: 46,
		domain: "D4",
		question: "¿Qué protocolo se usa comúnmente para recuperar correos y opera en el puerto 143?",
		options: ["POP3", "SMTP", "IMAP", "HTTP"],
		correctIndex: 2,
		explanation: "IMAP utiliza típicamente el puerto 143 para recuperación de correo y sincronización del buzón."
	},
	{
		id: 47,
		domain: "D4",
		question: "¿Cuál es la dirección de loopback local en IPv6?",
		options: ["::1", "127.0.0.1", "0.0.0.0", "fe80::1"],
		correctIndex: 0,
		explanation: "La dirección de loopback en IPv6 es ::1 (equivalente a 127.0.0.1 en IPv4)."
	},
	{
		id: 48,
		domain: "D5",
		question:
			"¿Qué técnica de ingeniería social consiste en que un atacante crea un escenario fabricado para engañar a personas y obtener información sensible?",
		options: ["Phishing dirigido", "Ataque de abrevadero", "Pretexto", "Suplantación de identidad"],
		correctIndex: 2,
		explanation:
			"El pretexting usa una historia o escenario fabricado para generar credibilidad y manipular a la víctima para que divulgue información sensible."
	},
	{
		id: 49,
		domain: "D5",
		question: "¿Cuál es una medida crítica de confidencialidad que debe implementarse respecto de las copias de seguridad?",
		options: ["Cifrado", "Pruebas periódicas", "Almacenamiento fuera del sitio", "Frecuencia de copias"],
		correctIndex: 0,
		explanation:
			"El cifrado de backups protege la confidencialidad si el medio se pierde, es robado o se accede sin autorización."
	},
	{
		id: 50,
		domain: "D3",
		question: "¿Cuál es una medida de seguridad crucial que debe implementarse para cuentas privilegiadas?",
		options: ["Contraseñas fuertes", "Autenticación multifactor", "Revisiones periódicas de acceso", "Registro extenso y detallado"],
		correctIndex: 3,
		explanation:
			"La actividad de cuentas privilegiadas debe registrarse en detalle para soportar rendición de cuentas, detección rápida e investigaciones forenses."
	},
	{
		id: 51,
		domain: "D1",
		question:
			"¿Qué metodología de ciberseguridad garantiza principalmente que las personas sean responsables de las transacciones que realizan?",
		options: ["Autenticación", "Autorización", "No repudio", "Cifrado"],
		correctIndex: 2,
		explanation:
			"El no repudio provee evidencia de origen o acción para que una parte no pueda negar de forma creíble haber realizado una transacción (a menudo mediante firmas digitales)."
	},
	{
		id: 52,
		domain: "D1",
		question:
			"¿Qué opción de tratamiento de riesgo implica la terminación completa de todos los procesos que están sujetos al evento de riesgo?",
		options: ["Aceptación", "Evitación", "Mitigación", "Transferencia"],
		correctIndex: 1,
		explanation:
			"La evitación del riesgo elimina la actividad que introduce el riesgo, terminando el proceso expuesto al evento."
	},
	{
		id: 53,
		domain: "D4",
		question:
			"¿Qué enfoque de redes implica la implementación de Firewalls en cada punto de conexión dentro de una red micro-segmentada?",
		options: ["Confianza Cero Network (ZTN)", "Red Privada Virtual (VPN)", "Software-Defined Networking (SDN)", "Zona Desmilitarizada (DMZ)"],
		correctIndex: 0,
		explanation:
			"Las arquitecturas Confianza Cero usan micro-segmentación y aplicación de políticas en cada límite, minimizando la confianza implícita y el movimiento lateral."
	},
	{
		id: 54,
		domain: "D4",
		question: "¿Qué significa NAC en ciberseguridad?",
		options: [
			"Network Attack Configuration",
			"Network Authentication Control",
			"Network Application Ciphering",
			"Control de Acceso a la Red"
		],
		correctIndex: 3,
		explanation:
			"NAC (Control de Acceso a la Red) aplica quién o qué puede conectarse a una red según identidad y postura del dispositivo."
	},
	{
		id: 55,
		domain: "D5",
		question: "¿Qué representa la etapa inicial del ciclo de vida de manejo de datos en ciberseguridad?",
		options: ["Análisis", "Recuperación", "Destrucción", "Creación"],
		correctIndex: 3,
		explanation:
			"El ciclo de vida de los datos inicia con la creación, cuando los datos se generan y deben protegerse desde el principio."
	},
	{
		id: 56,
		domain: "D5",
		question: "¿Cuál de las siguientes es una mala práctica de protección de contraseñas?",
		options: [
			"Usar una combinación de letras, números y símbolos para una contraseña fuerte",
			"Cambiar la contraseña cada mes",
			"Habilitar autenticación multifactor para mayor seguridad",
			"Anotar una contraseña en papel y dejarla sin protección"
		],
		correctIndex: 3,
		explanation:
			"Dejar contraseñas escritas y sin protección incrementa el riesgo de compromiso por descubrimiento físico."
	},
	{
		id: 57,
		domain: "D1",
		question: "¿Cuántos cánones tiene el Código de Ética de (ISC)²?",
		options: ["2", "3", "4", "5"],
		correctIndex: 2,
		explanation: "El Código de Ética de (ISC)² consta de 4 cánones."
	},
	{
		id: 58,
		domain: "D3",
		question: "¿Cuál de las siguientes describe mejor una característica de Control de Acceso Discrecional (DAC)?",
		options: [
			"Permite que un sujeto modifique las reglas que rigen el control de acceso",
			"Aplica control de acceso basado en reglas predefinidas",
			"Asigna derechos de acceso según roles de usuario",
			"Implementa control de acceso mediante autenticación biométrica"
		],
		correctIndex: 0,
		explanation:
			"DAC permite que propietarios o sujetos establezcan y cambien permisos sobre objetos, dando discrecionalidad en decisiones de acceso."
	},
	{
		id: 59,
		domain: "D2",
		question:
			"Durante la etapa de preparación del ciclo de vida de respuesta a incidentes, ¿cuál es una actividad principal que debe realizarse?",
		options: [
			"Revisar datos históricos de incidentes",
			"Realizar una evaluación de vulnerabilidades",
			"Planificar cómo coordinar la comunicación entre partes interesadas",
			"Desarrollar un informe posterior al incidente"
		],
		correctIndex: 2,
		explanation:
			"La preparación incluye definir planes de comunicación y coordinación de partes interesadas para asegurar una respuesta eficiente y consistente."
	},
	{
		id: 60,
		domain: "D2",
		question: "¿Cuál es el objetivo principal de un plan de respuesta a incidentes?",
		options: [
			"Proteger datos sensibles",
			"Restaurar las operaciones normales lo más rápido posible",
			"Identificar vulnerabilidades potenciales",
			"Colaborar con las fuerzas del orden"
		],
		correctIndex: 1,
		explanation:
			"La respuesta a incidentes busca minimizar el impacto y restaurar las operaciones del negocio de forma rápida y segura tras un evento."
	},
	{
		id: 61,
		domain: "D3",
		question:
			"¿Qué es una salvaguarda o contramedida diseñada para preservar la confidencialidad, integridad y disponibilidad?",
		options: ["Firewall", "Control", "Cifrado", "Autenticación"],
		correctIndex: 1,
		explanation:
			"Un control es cualquier salvaguarda o contramedida (administrativa, técnica o física) diseñada para preservar la tríada CIA."
	},
	{
		id: 62,
		domain: "D3",
		question:
			"¿Cuál de los siguientes representa la entidad principal que solicita acceso a los activos de información en un contexto de ciberseguridad?",
		options: ["Servidor", "Sujeto", "Firewall", "Administrador"],
		correctIndex: 1,
		explanation:
			"Un sujeto (usuario o proceso) solicita acceso a objetos o recursos; el control de acceso evalúa sus permisos y contexto."
	},
	{
		id: 63,
		domain: "D4",
		question:
			"¿Qué modelo de servicio en la nube implica proporcionar acceso a aplicaciones como correo electrónico o programas de oficina?",
		options: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"],
		correctIndex: 2,
		explanation:
			"SaaS entrega aplicaciones completas por internet (por ejemplo, correo y herramientas de oficina) sin que el cliente administre servidores o instalaciones."
	},
	{
		id: 64,
		domain: "D4",
		question: "¿Qué documento usarían dos partes para acordar formalmente los términos de una relación de trabajo?",
		options: ["Acuerdo de Nivel de Servicio", "Memorándum de Entendimiento (MOU)", "Acuerdo de No Divulgación", "Acuerdo de Licencia de Usuario Final"],
		correctIndex: 1,
		explanation:
			"Un MOU documenta términos y expectativas acordadas para colaborar y suele servir como base formal de la relación de trabajo."
	},
	{
		id: 65,
		domain: "D4",
		question:
			"¿Qué término describe un área de red accesible externamente desde internet pero segregada de la red local interna?",
		options: ["Intranet", "Firewall", "VPN", "DMZ"],
		correctIndex: 3,
		explanation:
			"Una DMZ es un segmento de red aislado que aloja servicios expuestos al público, reduciendo la exposición directa de redes internas."
	},
	{
		id: 66,
		domain: "D4",
		question: "¿Qué puerto se utiliza para SNMP?",
		options: ["Port 80", "Port 161", "Port 443", "Port 53"],
		correctIndex: 1,
		explanation: "SNMP utiliza normalmente el puerto UDP 161 para consultas y respuestas de administración."
	},
	{
		id: 67,
		domain: "D5",
		question:
			"¿Cuál es el término usado para definir el derecho de una persona a controlar cómo se distribuye la información sobre ella?",
		options: ["Confidencialidad", "Soberanía de datos", "Gobernanza de la información", "Privacidad"],
		correctIndex: 3,
		explanation:
			"La privacidad es el derecho de las personas a controlar la recopilación, uso y distribución de su información personal."
	},
	{
		id: 68,
		domain: "D4",
		question:
			"¿Qué término se utiliza para describir algo o alguien que intenta comprometer debilidades del sistema para romper las defensas de seguridad?",
		options: ["Vulnerabilidad", "Riesgo", "Amenaza", "Exposición"],
		correctIndex: 2,
		explanation:
			"Una amenaza es una causa potencial de un incidente no deseado, como un atacante o malware que intenta explotar vulnerabilidades."
	},
	{
		id: 69,
		domain: "D1",
		question: "¿Quién tiene la responsabilidad de identificar riesgos dentro de una empresa?",
		options: [
			"Empleados en todos los niveles de la empresa",
			"CEOs y ejecutivos de alto nivel",
			"Profesionales de seguridad de TI",
			"Auditores externos"
		],
		correctIndex: 0,
		explanation:
			"La identificación de riesgos es una responsabilidad compartida; empleados en toda la organización pueden reconocer y reportar problemas en sus áreas."
	},
	{
		id: 70,
		domain: "D4",
		question: "¿Qué estándar es responsable de definir las conexiones de red cableadas?",
		options: ["TCP/IP", "USB", "Bluetooth", "IEEE 802.3"],
		correctIndex: 3,
		explanation: "IEEE 802.3 define Ethernet, el estándar para conectividad de red cableada."
	},
	{
		id: 71,
		domain: "D4",
		question:
			"¿Qué acuerdo existe entre un proveedor de servicios en la nube y un cliente que establece la calidad de los servicios entregados?",
		options: ["Acuerdo de Nivel de Servicio (SLA)", "Security Agreement", "Acuerdo de confidencialidad", "Vendor Agreement"],
		correctIndex: 0,
		explanation:
			"Un SLA define compromisos de calidad de servicio como disponibilidad, rendimiento y tiempos de respuesta entre proveedor y cliente."
	},
	{
		id: 72,
		domain: "D1",
		question: "¿Cuál de las siguientes describe la autenticación?",
		options: [
			"El proceso de identificar riesgos de seguridad potenciales",
			"El proceso para probar la identidad del solicitante",
			"Autorización para acceder a información confidencial",
			"Monitoreo de tráfico de red para anomalías"
		],
		correctIndex: 1,
		explanation:
			"La autenticación verifica la identidad (quién eres). La autorización determina luego qué se permite hacer a la identidad autenticada."
	},
	{
		id: 73,
		domain: "D1",
		question: "¿Qué métodos electrónicos están diseñados para limitar el acceso a sistemas, activos o áreas?",
		options: ["Controles de acceso lógicos", "Firewall", "Cifrado", "Sistema de Detección de Intrusiones"],
		correctIndex: 0,
		explanation:
			"Los controles de acceso lógicos (mecanismos de autenticación y autorización) restringen el acceso a sistemas y recursos a entidades autorizadas."
	},
	{
		id: 74,
		domain: "D1",
		question:
			"¿Qué prácticas ampliamente aceptadas aseguran que una empresa opere con procedimientos y políticas que respalden regulaciones?",
		options: ["Marcos de trabajo", "Estándares", "Guías", "Protocolos"],
		correctIndex: 1,
		explanation:
			"Los estándares definen requisitos mínimos y mejores prácticas ampliamente aceptadas que ayudan a alinear procesos y políticas con regulaciones."
	},
	{
		id: 75,
		domain: "D4",
		question: "¿Qué modelo de servicio en la nube se denomina a veces \"hardware as a service\"?",
		options: ["Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Network as a Service (NaaS)"],
		correctIndex: 2,
		explanation:
			"IaaS proporciona cómputo, almacenamiento y red virtualizados (recursos tipo hardware) entregados como servicio."
	},
	{
		id: 76,
		domain: "D1",
		question: "¿Qué significa el acrónimo ISO en el contexto de estándares de ciberseguridad?",
		options: [
			"International Security Organization",
			"Seguridad de la Información Organization",
			"Internet Operaciones de Seguridad",
			"International Organization for Standardization"
		],
		correctIndex: 3,
		explanation:
			"ISO significa International Organization for Standardization, que publica muchos estándares de seguridad de la información (por ejemplo, ISO/IEC 27001)."
	},
	{
		id: 77,
		domain: "D1",
		question:
			"¿Qué término describe el grado en que algo es completo, consistente y correcto dentro del ámbito de la ciberseguridad?",
		options: ["Confidencialidad", "Integridad", "Disponibilidad", "Autenticación"],
		correctIndex: 1,
		explanation:
			"La integridad asegura que los datos permanezcan precisos, completos y no alterados salvo por procesos autorizados."
	},
	{
		id: 78,
		domain: "D2",
		question:
			"¿En qué etapa del plan de respuesta a incidentes se realiza principalmente la priorización de acciones de respuesta?",
		options: ["Actividad posterior al incidente", "Contención", "Detección y análisis", "Recuperación"],
		correctIndex: 2,
		explanation:
			"La detección y análisis incluye el triaje y el alcance, que se usan para priorizar acciones de respuesta según gravedad e impacto."
	},
	{
		id: 79,
		domain: "D5",
		question: "¿Cuál es una característica del cifrado asimétrico?",
		options: [
			"Una clave se usa para cifrar y la otra clave para descifrar.",
			"Ambas claves se usan para cifrar.",
			"La misma clave se usa para cifrar y descifrar.",
			"Las claves se generan en función de los datos que se cifran."
		],
		correctIndex: 0,
		explanation:
			"El cifrado asimétrico usa un par de claves (pública/privada) donde una cifra y la otra descifra, habilitando intercambio seguro de claves y firmas."
	},
	{
		id: 80,
		domain: "D5",
		question: "¿Cuál es la propiedad determinista de una función hash?",
		options: [
			"El valor hash es distinto cada vez que se aplica la función.",
			"La función hash es resistente a ataques de colisión.",
			"La función hash es irreversible y no puede descifrarse.",
			"Cuando se usa la misma entrada con el mismo algoritmo hash, siempre se genera el mismo hash."
		],
		correctIndex: 3,
		explanation:
			"La determinación significa que la misma entrada con el mismo algoritmo hash siempre produce la misma salida, habilitando verificación de integridad."
	},
	{
		id: 81,
		domain: "D1",
		question: "¿Qué término describe el grado de significancia o importancia de la información para su propietario?",
		options: ["Sensibilidad", "Confidencialidad", "Integridad", "Disponibilidad"],
		correctIndex: 0,
		explanation:
			"La sensibilidad refleja cuán importante es la información y cuánta protección requiere según el impacto si se compromete."
	},
	{
		id: 82,
		domain: "D5",
		question:
			"En el contexto de asegurar la funcionalidad continua y las configuraciones correctas durante el procesamiento de información en un sistema, ¿qué término describe mejor el mantenimiento de operaciones esperadas y configuraciones adecuadas?",
		options: ["Cifrado de datos", "Integridad del sistema", "Segmentación de red", "Autenticación de identidad"],
		correctIndex: 1,
		explanation:
			"La integridad del sistema significa que el sistema opera como se espera y permanece configurado correctamente, evitando cambios no autorizados y fallas."
	},
	{
		id: 83,
		domain: "D4",
		question: "¿Qué rango de direcciones IPv6 está reservado para documentación?",
		options: ["2000::/3", "FD00::/8", "2001:DB8::/32", "FEC0::/10"],
		correctIndex: 2,
		explanation:
			"2001:DB8::/32 está reservado para documentación y ejemplos, por lo que no entra en conflicto con direccionamientos reales."
	},
	{
		id: 84,
		domain: "D4",
		question: "¿Qué significa la abreviatura \"IANA\"?",
		options: [
			"International Association of Network Architects",
			"Internet Assigned Numbers Authority",
			"Information Assurance and Network Architecture",
			"International Alliance for Network Advancement"
		],
		correctIndex: 1,
		explanation:
			"IANA (Internet Assigned Numbers Authority) gestiona parámetros de protocolos y coordina recursos clave de numeración de internet."
	},
	{
		id: 85,
		domain: "D1",
		question:
			"¿Qué término se utiliza para describir controles que se centran principalmente en la gestión y administración de políticas, procedimientos y guías de seguridad dentro de una organización?",
		options: ["Controles administrativos", "Controles técnicos", "Controles físicos", "Controles operativos"],
		correctIndex: 0,
		explanation:
			"Los controles administrativos son medidas orientadas a personas y procesos como políticas, estándares, capacitación y estructuras de gobierno."
	},
	{
		id: 86,
		domain: "D3",
		question: "¿Qué enfoque busca mejorar la seguridad en el lugar de trabajo mediante elementos de diseño pasivo?",
		options: ["Capacitación de empleados", "Controles de acceso físico", "CPTED", "Protocolos de cifrado"],
		correctIndex: 2,
		explanation:
			"CPTED (Crime Prevention Through Environmental Design) utiliza diseño ambiental pasivo (iluminación, líneas de visión, paisajismo) para disuadir el delito."
	},
	{
		id: 87,
		domain: "D3",
		question: "¿Qué dos procesos intervienen en la autenticación biométrica?",
		options: [
			"Inicialización y validación",
			"Inscripción y verificación",
			"Autenticación y autorización",
			"Configuración e inicialización"
		],
		correctIndex: 1,
		explanation:
			"La biometría requiere inscripción (capturar y almacenar una plantilla) y verificación (comparar una nueva muestra con la plantilla almacenada)."
	},
	{
		id: 88,
		domain: "D3",
		question: "¿Qué es un registro de eventos que han ocurrido dentro de la red de una organización?",
		options: ["Firewall", "Antivirus", "Registro", "Cifrado"],
		correctIndex: 2,
		explanation:
			"Los logs son registros cronológicos de eventos usados para monitoreo, diagnóstico, detección, auditoría e investigaciones de incidentes."
	},
	{
		id: 89,
		domain: "D1",
		question: "¿Quién tiene la responsabilidad principal de determinar el nivel de riesgo aceptable dentro de una organización?",
		options: ["CIO", "CEO", "CRO", "Junta Directiva"],
		correctIndex: 3,
		explanation:
			"El Board define el apetito y tolerancia al riesgo y brinda supervisión de gobierno para asegurar que las decisiones de riesgo alineen con los objetivos."
	},
	{
		id: 90,
		domain: "D1",
		question: "¿Cuál de las siguientes describe mejor los controles administrativos en ciberseguridad?",
		options: [
			"Parches y actualizaciones de seguridad",
			"Firewalls y sistemas de detección de intrusiones",
			"Avisos, guías o directivas para las personas dentro de la empresa",
			"Algoritmos de cifrado"
		],
		correctIndex: 2,
		explanation:
			"Los controles administrativos guían a personas y procesos mediante políticas, estándares y directivas, más que implementar mecanismos técnicos."
	},
	{
		id: 91,
		domain: "D2",
		question: "¿Qué distingue la continuidad del negocio de la recuperación ante desastres en el contexto de la ciberseguridad?",
		options: [
			"La continuidad del negocio se enfoca en prevenir amenazas cibernéticas, mientras la recuperación ante desastres se ocupa de responder a amenazas.",
			"La continuidad del negocio busca mantener funciones críticas durante interrupciones, mientras la recuperación ante desastres busca restaurar operaciones después de interrupciones.",
			"Continuidad del negocio y recuperación ante desastres son términos intercambiables en ciberseguridad.",
			"La continuidad del negocio se ocupa de backups de datos, mientras la recuperación ante desastres se centra en capacitación de empleados."
		],
		correctIndex: 1,
		explanation:
			"La continuidad del negocio mantiene funciones críticas durante la interrupción; la recuperación ante desastres restaura sistemas y servicios de TI después."
	},
	{
		id: 92,
		domain: "D2",
		question:
			"¿Qué proceso puede asegurar la identificación oportuna de incidentes de seguridad, violaciones de políticas y operaciones fraudulentas?",
		options: ["Configuración de Firewall", "Revisión de logs", "Implementación de cifrado", "Gestión de control de acceso"],
		correctIndex: 1,
		explanation:
			"La revisión regular de logs ayuda a detectar incidentes y violaciones de políticas al identificar anomalías, accesos no autorizados y actividad sospechosa."
	},
	{
		id: 93,
		domain: "D5",
		question:
			"¿Cómo pueden las organizaciones asegurar que las actualizaciones tecnológicas y arquitectónicas cumplan con un conjunto mínimo de requisitos de seguridad acordados?",
		options: [
			"Realizando pruebas de penetración",
			"Implementando sistemas de detección de intrusiones",
			"Estableciendo líneas base de estándares de seguridad",
			"Realizando evaluaciones de vulnerabilidades"
		],
		correctIndex: 2,
		explanation:
			"Las líneas base de seguridad definen requisitos mínimos de configuración y control que las actualizaciones deben cumplir para ser aceptables."
	},
	{
		id: 94,
		domain: "D4",
		question: "¿Cuál es el rango de puertos dinámicos o privados utilizado típicamente para comunicaciones en redes TCP/IP?",
		options: ["49152–65535", "1024–49151", "0–1023", "65536–99999"],
		correctIndex: 0,
		explanation:
			"Los puertos dinámicos o privados (ephemeral) son típicamente 49152–65535 y se usan para conexiones del lado cliente y comunicaciones temporales."
	},
	{
		id: 95,
		domain: "D3",
		question:
			"¿Cuál de los siguientes principios busca reforzar la seguridad física exigiendo la presencia de más de una persona en un área crítica en todo momento?",
		options: ["Política de un solo usuario", "Two-Person Rule", "Protocolo de acceso en solitario", "Directiva Lone Ranger"],
		correctIndex: 1,
		explanation:
			"La two-person rule exige la presencia de dos personas autorizadas para reducir el riesgo interno, la colusión y acciones inseguras o no auditadas."
	},
	{
		id: 96,
		domain: "D1",
		question: "¿Cuál de los siguientes es un ejemplo de control físico disuasivo?",
		options: ["Bolardo", "IPS", "Política", "Cerca eléctrica"],
		correctIndex: 3,
		explanation:
			"Un control disuasivo desalienta intrusiones; una cerca eléctrica es una barrera visible que disuade el acceso no autorizado."
	},
	{
		id: 97,
		domain: "D3",
		question: "¿Qué modelo de control de acceso permite que el sujeto cambie atributos de seguridad?",
		options: ["MAC", "RBAC", "DAC", "RuBAC"],
		correctIndex: 2,
		explanation:
			"En DAC, el propietario o sujeto puede cambiar permisos y atributos de seguridad de los objetos que controla, brindando flexibilidad discrecional."
	},
	{
		id: 98,
		domain: "D2",
		question:
			"¿Qué elemento se incluye típicamente en un plan integral de continuidad del negocio para una comunicación efectiva durante una crisis?",
		options: [
			"Campaña de relaciones públicas",
			"Monitoreo de redes sociales",
			"Árboles de llamadas y mecanismos de notificación",
			"Distribución de memorandos internos"
		],
		correctIndex: 2,
		explanation:
			"Los árboles de llamadas y mecanismos de notificación proporcionan comunicación estructurada y rápida a las partes interesadas durante un incidente o interrupción."
	},
	{
		id: 99,
		domain: "D3",
		question:
			"¿Qué enfoque describe mejor cómo los distintos tipos de controles de acceso físico contribuyen a mejorar la seguridad?",
		options: ["Autenticación de un solo factor", "Capas", "Autenticación biométrica", "Tokenización"],
		correctIndex: 1,
		explanation:
			"El enfoque por capas usa múltiples controles complementarios para que un atacante deba superar varias barreras, aumentando la detección y reduciendo el éxito."
	},
	{
		id: 100,
		domain: "D4",
		question:
			"¿Qué tipo de sistema Firewall combina diversas funcionalidades de gestión de amenazas como proxies, Sistema de Prevención de Intrusiones (IPS) y Gestión de Identidad y Acceso (IAM) en una plataforma unificada?",
		options: ["Firewall con estado", "Firewall de filtrado de paquetes", "Firewall de próxima generación", "Firewall proxy"],
		correctIndex: 2,
		explanation:
			"Los Firewalls de próxima generación (NGFW) integran inspección avanzada y controles de amenazas (por ejemplo, IPS, reconocimiento de aplicaciones, funciones de identidad) en una sola plataforma."
	}
];
