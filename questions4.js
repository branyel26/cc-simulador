// Test 4 — Banco de 100 preguntas (fuente en inglés)
// Formato esperado por app.js: const QUESTIONS = [{ id, domain, question, options, correctIndex, explanation }, ...]

const QUESTIONS = [
	{
		id: 1,
		domain: "D1",
		question:
			"¿Qué principio fundamental de seguridad busca garantizar que los datos y los recursos permanezcan accesibles sin interrupciones ni tiempo de inactividad?",
		options: ["Confidencialidad", "Integridad", "Disponibilidad", "Autenticación"],
		correctIndex: 2,
		explanation:
			"La disponibilidad garantiza que los datos y los recursos estén accesibles de forma constante para los usuarios autorizados sin interrupciones ni tiempo de inactividad, incluso ante incidentes."
	},
	{
		id: 2,
		domain: "D2",
		question:
			"¿Durante qué etapa del ciclo de vida de respuesta a incidentes los miembros del equipo suelen capacitarse sobre cómo ejecutar el plan de respuesta a incidentes?",
		options: ["Identificación", "Preparación", "Contención", "Erradicación"],
		correctIndex: 1,
		explanation:
			"La preparación es donde se establecen y mantienen las capacidades de respuesta a incidentes, incluida la capacitación del equipo para ejecutar el plan de respuesta a incidentes."
	},
	{
		id: 3,
		domain: "D3",
		question:
			"¿Qué principio de seguridad se ve comprometido cuando a un empleado se le concede acceso sin restricciones que abarca todos los permisos posibles dentro de un sistema?",
		options: [
			"Principio de necesidad",
			"Principio de responsabilidad",
			"Principio de defensa en profundidad",
			"Principio de mínimo privilegio"
		],
		correctIndex: 3,
		explanation:
			"El principio de mínimo privilegio exige otorgar solo el acceso mínimo necesario para las funciones del puesto; el acceso sin restricciones viola este principio y aumenta el riesgo."
	},
	{
		id: 4,
		domain: "D4",
		question:
			"¿Cuál de los siguientes es un acuerdo contractual entre un proveedor de servicios y un cliente que incluye disposiciones sobre rendimiento del servicio, disponibilidad (uptime), seguridad y responsabilidades?",
		options: [
			"Acuerdo de Nivel de Servicio (SLA)",
			"Plan de gestión de riesgos",
			"Protocolo de respuesta a incidentes",
			"Acuerdo de control de configuración"
		],
		correctIndex: 0,
		explanation:
			"Un Acuerdo de Nivel de Servicio (SLA) es el contrato formal que define el rendimiento esperado del servicio, el uptime, las medidas de seguridad y las responsabilidades entre el proveedor y el cliente."
	},
	{
		id: 5,
		domain: "D5",
		question:
			"¿Cuál es un elemento fundamental que es crucial incluir en un programa integral de concienciación de seguridad?",
		options: [
			"Técnicas de cifrado",
			"Configuración de Firewall",
			"Segmentación de red",
			"Capacitación sobre métodos preventivos de ingeniería social"
		],
		correctIndex: 3,
		explanation:
			"La capacitación de concienciación de seguridad debe enfatizar la resistencia a la ingeniería social enseñando a los usuarios a reconocer y prevenir intentos de manipulación."
	},
	{
		id: 6,
		domain: "D4",
		question:
			"¿Qué técnica de segmentación de red se basa en hardware dedicado para crear segmentos de red distintos, garantizando una separación física entre ellos?",
		options: ["Configuración de VLAN", "Segmentación lógica", "Segmentación física", "Subneteo"],
		correctIndex: 2,
		explanation:
			"La segmentación física utiliza hardware dedicado para separar segmentos de red, creando zonas aisladas que limitan la comunicación y reducen el alcance del impacto."
	},
	{
		id: 7,
		domain: "D5",
		question:
			"¿Qué fase del ciclo de vida de los datos se centra principalmente en determinar los requisitos de retención y las estrategias de almacenamiento a largo plazo?",
		options: ["Extracción", "Archivado", "Transformación", "Consumo"],
		correctIndex: 1,
		explanation:
			"El archivado se centra en los requisitos de retención y el almacenamiento a largo plazo de datos que ya no están activos, pero deben conservarse por cumplimiento o referencia."
	},
				{
					id: 8,
					domain: "D5",
					question:
						"¿Cuál de las siguientes representa una configuración crítica que requiere hardening para mejorar la postura de seguridad?",
					options: [
						"Topología de red",
						"Presencia de credenciales predeterminadas",
						"Tiempo de actividad del sistema",
						"Diseño de la interfaz de usuario"
					],
					correctIndex: 1,
					explanation:
						"El hardening (endurecimiento) incluye eliminar las credenciales predeterminadas porque los nombres de usuario y contraseñas por defecto se explotan comúnmente para obtener acceso no autorizado."
				},
				{
					id: 9,
					domain: "D5",
					question:
						"¿Cuál de los siguientes desempeña un papel clave para garantizar la integridad y la autenticidad de la información al emplear cifrado de clave pública?",
					options: ["Función hash", "Firma digital", "Clave simétrica", "Generador de números aleatorios"],
					correctIndex: 1,
					explanation:
						"Las firmas digitales proporcionan integridad y autenticidad al permitir que los destinatarios verifiquen que los datos provienen del remitente declarado y que no fueron alterados."
				},
				{
					id: 10,
					domain: "D2",
					question:
						"¿Qué fase del proceso de respuesta a incidentes implica el desarrollo de políticas, procedimientos y planes para gestionar y abordar eficazmente los incidentes de seguridad?",
					options: ["Detección", "Contención", "Preparación", "Erradicación"],
					correctIndex: 2,
					explanation:
						"La preparación es la fase proactiva en la que se desarrollan políticas, procedimientos, herramientas, roles y planes para permitir una respuesta a incidentes eficaz."
				},
				{
					id: 11,
					domain: "D5",
					question: "¿Cuál de las siguientes opciones describe mejor un certificado digital?",
					options: [
						"Una contraseña segura para autenticación en línea.",
						"Un documento físico con un número de serie único.",
						"Una representación digital de la identificación física de una persona.",
						"Un archivo electrónico que vincula al propietario con una clave pública."
					],
					correctIndex: 3,
					explanation:
						"Un certificado digital es un archivo electrónico que vincula una identidad con una clave pública para habilitar confianza y autenticación en comunicaciones digitales."
				},
				{
					id: 12,
					domain: "D2",
					question:
						"Durante la fase de detección y análisis de la respuesta a incidentes, ¿qué actividad se enfoca principalmente en identificar posibles brechas de seguridad?",
					options: ["Configuración de red", "Capacitación de usuarios", "Monitoreo y revisión de logs", "Actualizaciones de software"],
					correctIndex: 2,
					explanation:
						"La detección y el análisis se basan en el monitoreo y la revisión de logs para identificar anomalías e indicadores de compromiso que sugieren un incidente de seguridad."
				},
				{
					id: 13,
					domain: "D4",
					question: "¿Qué protocolo de red suele operar en el puerto 21?",
					options: ["FTP", "HTTP", "SMTP", "SNMP"],
					correctIndex: 0,
					explanation: "FTP (File Transfer Protocol) suele usar el puerto 21 para conexiones de control."
				},
				{
					id: 14,
					domain: "D4",
					question: "¿Qué protocolo suele usar el puerto 80 para la comunicación?",
					options: ["HTTPS", "FTP", "DNS", "HTTP"],
					correctIndex: 3,
					explanation: "HTTP suele usar el puerto 80 para tráfico web sin cifrar."
				},
				{
					id: 15,
					domain: "D4",
					question: "¿Cuál de los siguientes puertos se considera inseguro?",
					options: ["22", "80", "443", "636"],
					correctIndex: 1,
					explanation:
						"El puerto 80 se utiliza típicamente para tráfico HTTP sin cifrar y se considera inseguro para comunicaciones sensibles."
				},
				{
					id: 16,
					domain: "D2",
					question:
						"En caso de un incidente de seguridad, ¿qué técnica se utiliza comúnmente para limitar la propagación del incidente y minimizar su impacto en la red?",
					options: ["Cifrado", "Firewall", "Aislamiento", "Autenticación"],
					correctIndex: 2,
					explanation:
						"El aislamiento contiene un incidente al segregar sistemas o segmentos afectados para evitar el movimiento lateral y reducir el impacto general."
				},
				{
					id: 17,
					domain: "D1",
					question: "¿Cuáles son las tres etapas fundamentales en el proceso de gestión de riesgos?",
					options: [
						"Identificación, evaluación, tratamiento",
						"Prevención, detección, respuesta",
						"Planificación, ejecución, monitoreo",
						"Análisis, implementación, evaluación"
					],
					correctIndex: 0,
					explanation:
						"La gestión de riesgos suele plantearse como identificar riesgos, evaluar probabilidad/impacto y tratarlos mediante mitigación, transferencia, evitación o aceptación."
				},
				{
					id: 18,
					domain: "D1",
					question:
						"¿Qué método permite a un usuario acceder a todos los sistemas autorizados autenticándose solo una vez?",
					options: [
						"Autenticación multifactor (MFA)",
						"Inicio de Sesión Único (SSO)",
						"Autenticación biométrica",
						"Rotación de contraseñas"
					],
					correctIndex: 1,
					explanation:
						"Inicio de Sesión Único (SSO) permite que los usuarios se autentiquen una sola vez y luego accedan a múltiples sistemas autorizados sin volver a introducir credenciales para cada uno."
				},
				{
					id: 19,
					domain: "D1",
					question: "¿Cuáles son los dos procesos principales que ocurren durante la autenticación?",
					options: [
						"Validación y autorización",
						"Identificación y verificación",
						"Acceso y aprobación",
						"Reconocimiento y confirmación"
					],
					correctIndex: 1,
					explanation:
						"La autenticación suele describirse como identificación (declarar una identidad) seguida de verificación (demostrar esa declaración)."
				},
				{
					id: 20,
					domain: "D3",
					question: "¿Qué se considera el aspecto más crítico en la seguridad física?",
					options: ["Cámaras de seguridad", "Sistemas de alarma", "Medidas de control de acceso", "Seguridad de las personas"],
					correctIndex: 3,
					explanation:
						"La seguridad de las personas es la prioridad principal en seguridad física; los controles existen para proteger primero a las personas y luego los activos y las operaciones."
				},
				{
					id: 21,
					domain: "D4",
					question:
						"¿Qué modelo de servicio de computación en la nube es el más adecuado para que los desarrolladores construyan y prueben sus aplicaciones y servicios usando diversos lenguajes de programación?",
					options: ["IaaS", "PaaS", "SaaS", "FaaS"],
					correctIndex: 1,
					explanation:
						"PaaS proporciona una plataforma de desarrollo y un runtime para que los desarrolladores puedan construir y probar aplicaciones sin administrar la infraestructura subyacente."
				},
				{
					id: 22,
					domain: "D5",
					question: "¿Qué política rige la gestión y el manejo de los datos dentro de una organización?",
					options: [
						"Política de seguridad de red",
						"Política de control de acceso",
						"Política de protección de datos",
						"Política de respuesta a incidentes"
					],
					correctIndex: 2,
					explanation:
						"Una política de protección de datos define cómo se manejan, protegen y gestionan los datos en toda la organización, incluyendo cumplimiento y responsabilidades."
				},
				{
					id: 23,
					domain: "D5",
					question:
						"¿Cuál es la garantía principal que asegura que se debe obtener aprobación formal antes de realizar cualquier cambio de configuración en un sistema?",
					options: [
						"Auditoría de cumplimiento",
						"Proceso de control de cambios",
						"Política de control de acceso",
						"Gobernanza efectiva"
					],
					correctIndex: 3,
					explanation:
						"La gobernanza efectiva establece y hace cumplir estructuras de toma de decisiones y aprobación que garantizan que los cambios se aprueben formalmente antes de ejecutarse."
				},
				{
					id: 24,
					domain: "D3",
					question:
						"¿Qué modelo de control de acceso se basa en la autorización (security clearance) del usuario para determinar los permisos de acceso?",
					options: ["RBAC", "MAC", "DAC", "RuBAC"],
					correctIndex: 1,
					explanation:
						"El control de acceso obligatorio (MAC) basa el acceso en etiquetas gestionadas centralmente y en las autorizaciones del usuario, aplicando permisos estrictos definidos por políticas."
				},
				{
					id: 25,
					domain: "D3",
					question:
						"¿Qué modelo de control de acceso se basa en la discreción del propietario para conceder o denegar acceso a recursos?",
					options: [
						"Control de acceso obligatorio (MAC)",
						"Control de acceso basado en roles (RBAC)",
						"Control de acceso basado en reglas (RuBAC)",
						"Control de acceso discrecional (DAC)"
					],
					correctIndex: 3,
					explanation:
						"El control de acceso discrecional (DAC) permite que el propietario del recurso decida quién puede acceder al recurso y con qué permisos."
				},
				{
					id: 26,
					domain: "D1",
					question: "¿Por qué las cuentas privilegiadas deberían tener mecanismos de protección más fuertes?",
					options: [
						"Su compromiso podría generar un impacto mayor.",
						"Rara vez son objetivo.",
						"Las cuentas normales son más críticas.",
						"La protección fuerte es innecesaria."
					],
					correctIndex: 0,
					explanation:
						"Las cuentas privilegiadas tienen permisos elevados; si se ven comprometidas, los atacantes pueden causar un daño significativamente mayor, por lo que se requieren protecciones más fuertes."
				},
	{
		id: 27,
		domain: "D4",
		question: "¿Qué protocolo suele usar el puerto 80 para la comunicación?",
		options: ["HTTPS", "FTP", "DNS", "HTTP"],
		correctIndex: 3,
		explanation: "HTTP suele usar el puerto 80 para tráfico web sin cifrar."
	},
	{
		id: 28,
		domain: "D4",
		question: "¿Cuál de los siguientes puertos se considera inseguro?",
		options: ["22", "80", "443", "636"],
		correctIndex: 1,
		explanation:
			"El puerto 80 se utiliza típicamente para tráfico HTTP sin cifrar y se considera inseguro para comunicaciones sensibles."
	},
	{
		id: 29,
		domain: "D2",
		question:
			"En caso de un incidente de seguridad, ¿qué técnica se utiliza comúnmente para limitar la propagación del incidente y minimizar su impacto en la red?",
		options: ["Cifrado", "Firewall", "Aislamiento", "Autenticación"],
		correctIndex: 2,
		explanation:
			"El aislamiento contiene un incidente al segregar sistemas o segmentos afectados para evitar el movimiento lateral y reducir el impacto general."
	},
	{
		id: 30,
		domain: "D1",
		question: "¿Cuáles son las tres etapas fundamentales en el proceso de gestión de riesgos?",
		options: [
			"Identificación, evaluación, tratamiento",
			"Prevención, detección, respuesta",
			"Planificación, ejecución, monitoreo",
			"Análisis, implementación, evaluación"
		],
		correctIndex: 0,
		explanation:
			"La gestión de riesgos suele plantearse como identificar riesgos, evaluar probabilidad/impacto y tratarlos mediante mitigación, transferencia, evitación o aceptación."
	},
	{
		id: 31,
		domain: "D1",
		question:
			"¿Qué método permite a un usuario acceder a todos los sistemas autorizados autenticándose solo una vez?",
		options: [
			"Autenticación multifactor (MFA)",
			"Inicio de Sesión Único (SSO)",
			"Autenticación biométrica",
			"Rotación de contraseñas"
		],
		correctIndex: 1,
		explanation:
			"Inicio de Sesión Único (SSO) permite que los usuarios se autentiquen una sola vez y luego accedan a múltiples sistemas autorizados sin volver a introducir credenciales para cada uno."
	},
	{
		id: 32,
		domain: "D1",
		question: "¿Cuáles son los dos procesos principales que ocurren durante la autenticación?",
		options: [
			"Validación y autorización",
			"Identificación y verificación",
			"Acceso y aprobación",
			"Reconocimiento y confirmación"
		],
		correctIndex: 1,
		explanation:
			"La autenticación suele describirse como identificación (declarar una identidad) seguida de verificación (demostrar esa declaración)."
	},
	{
		id: 33,
		domain: "D3",
		question: "¿Qué se considera el aspecto más crítico en la seguridad física?",
		options: ["Cámaras de seguridad", "Sistemas de alarma", "Medidas de control de acceso", "Seguridad de las personas"],
		correctIndex: 3,
		explanation:
			"La seguridad de las personas es la prioridad principal en seguridad física; los controles existen para proteger primero a las personas y luego los activos y las operaciones."
	},
	{
		id: 34,
		domain: "D4",
		question:
			"¿Qué modelo de servicio de computación en la nube es el más adecuado para que los desarrolladores construyan y prueben sus aplicaciones y servicios usando diversos lenguajes de programación?",
		options: ["IaaS", "PaaS", "SaaS", "FaaS"],
		correctIndex: 1,
		explanation:
			"PaaS proporciona una plataforma de desarrollo y un runtime para que los desarrolladores puedan construir y probar aplicaciones sin administrar la infraestructura subyacente."
	},
	{
		id: 35,
		domain: "D5",
		question: "¿Qué política rige la gestión y el manejo de los datos dentro de una organización?",
		options: [
			"Política de seguridad de red",
			"Política de control de acceso",
			"Política de protección de datos",
			"Política de respuesta a incidentes"
		],
		correctIndex: 2,
		explanation:
			"Una política de protección de datos define cómo se manejan, protegen y gestionan los datos en toda la organización, incluyendo cumplimiento y responsabilidades."
	},
	{
		id: 36,
		domain: "D5",
		question:
			"¿Cuál es la garantía principal que asegura que se debe obtener aprobación formal antes de realizar cualquier cambio de configuración en un sistema?",
		options: [
			"Auditoría de cumplimiento",
			"Proceso de control de cambios",
			"Política de control de acceso",
			"Gobernanza efectiva"
		],
		correctIndex: 3,
		explanation:
			"La gobernanza efectiva establece y hace cumplir estructuras de toma de decisiones y aprobación que garantizan que los cambios se aprueben formalmente antes de ejecutarse."
	},
	{
		id: 37,
		domain: "D3",
		question:
			"¿Qué modelo de control de acceso se basa en la autorización (security clearance) del usuario para determinar los permisos de acceso?",
		options: ["RBAC", "MAC", "DAC", "RuBAC"],
		correctIndex: 1,
		explanation:
			"El control de acceso obligatorio (MAC) basa el acceso en etiquetas gestionadas centralmente y en las autorizaciones del usuario, aplicando permisos estrictos definidos por políticas."
	},
	{
		id: 38,
		domain: "D3",
		question:
			"¿Qué modelo de control de acceso se basa en la discreción del propietario para conceder o denegar acceso a recursos?",
		options: [
			"Control de acceso obligatorio (MAC)",
			"Control de acceso basado en roles (RBAC)",
			"Control de acceso basado en reglas (RuBAC)",
			"Control de acceso discrecional (DAC)"
		],
		correctIndex: 3,
		explanation:
			"El control de acceso discrecional (DAC) permite que el propietario del recurso decida quién puede acceder al recurso y con qué permisos."
	},
	{
		id: 39,
		domain: "D1",
		question: "¿Por qué las cuentas privilegiadas deberían tener mecanismos de protección más fuertes?",
		options: [
			"Su compromiso podría generar un impacto mayor.",
			"Rara vez son objetivo.",
			"Las cuentas normales son más críticas.",
			"La protección fuerte es innecesaria."
		],
		correctIndex: 0,
		explanation:
			"Las cuentas privilegiadas tienen permisos elevados; si se ven comprometidas, los atacantes pueden causar un daño significativamente mayor, por lo que se requieren protecciones más fuertes."
	},
	{
		id: 40,
		domain: "D5",
		question:
			"Al organizar un programa de concienciación de seguridad, ¿qué factor es crucial considerar?",
		options: [
			"Duración de la capacitación",
			"Personalización según el público específico",
			"Relación costo-beneficio",
			"Frecuencia de las sesiones de capacitación"
		],
		correctIndex: 1,
		explanation:
			"Los programas efectivos de concienciación de seguridad se adaptan al público (roles, riesgos y responsabilidades) para maximizar la relevancia y el impacto."
	},
	{
		id: 41,
		domain: "D5",
		question:
			"¿Qué método se emplea comúnmente para verificar que un mensaje no ha sido alterado durante la transmisión?",
		options: ["Cifrado", "Compresión", "Hash", "Codificación"],
		correctIndex: 2,
		explanation:
			"El hashing permite verificar la integridad: si el mensaje cambia, su hash cambia, lo que permite detectar manipulación durante el tránsito."
	},
	{
		id: 42,
		domain: "D1",
		question:
			"¿Cuál de los siguientes ejemplifica un control administrativo dentro de un marco de ciberseguridad?",
		options: [
			"Políticas de vacaciones obligatorias para empleados",
			"Segmentación de red",
			"Sistema de detección de intrusiones (IDS)",
			"Cifrado de disco completo"
		],
		correctIndex: 0,
		explanation:
			"Los controles administrativos incluyen políticas y procedimientos; las vacaciones obligatorias pueden ayudar a detectar fraude/abuso al forzar rotación de funciones y supervisión."
	},
	{
		id: 43,
		domain: "D5",
		question: "¿Cómo se pueden proteger eficazmente los datos en tránsito?",
		options: ["Cifrado", "Sistema de Detección de Intrusiones (IDS)", "Firewall", "Lista de control de acceso (ACL)"],
		correctIndex: 0,
		explanation:
			"El cifrado (por ejemplo, TLS) protege los datos en tránsito al evitar la interceptación y ayudar a mantener la confidencialidad e integridad durante la transmisión."
	},
	{
		id: 44,
		domain: "D5",
		question:
			"¿Qué política describe cómo una organización gestiona la información sensible de los clientes y dicta el manejo adecuado de esos datos?",
		options: ["Política de seguridad", "Política de gobernanza de datos", "Política de privacidad", "Política de control de acceso"],
		correctIndex: 2,
		explanation:
			"Una política de privacidad describe cómo se recopila, usa, almacena y protege la información personal/de clientes, y ayuda a asegurar el cumplimiento de requisitos de privacidad."
	},
	{
		id: 45,
		domain: "D1",
		question: "En el ámbito del control de acceso electrónico, ¿qué define mejor \"identificación\"?",
		options: [
			"El usuario presentando su credencial de empleado",
			"Escaneo biométrico de la huella del usuario",
			"El usuario proporcionando su nombre de usuario y contraseña",
			"El usuario mostrando una llave física"
		],
		correctIndex: 2,
		explanation:
			"La identificación es el acto de declarar una identidad (por ejemplo, proporcionar un nombre de usuario); la verificación luego demuestra esa declaración (por ejemplo, contraseña, MFA)."
	},
	{
		id: 46,
		domain: "D1",
		question: "¿Cuál de las siguientes fórmulas se utiliza comúnmente para calcular el riesgo en el contexto de la ciberseguridad?",
		options: [
			"Riesgo = Impacto / Probabilidad",
			"Riesgo = Probabilidad + Impacto",
			"Riesgo = Probabilidad - Impacto",
			"Riesgo = Probabilidad × Impacto"
		],
		correctIndex: 3,
		explanation:
			"Una expresión simplificada común es Riesgo = Probabilidad (verosimilitud) × Impacto, combinando qué tan probable es un evento con sus consecuencias."
	},
	{
		id: 47,
		domain: "D3",
		question:
			"¿Qué sistema de control de acceso físico involucra dos puertas que operan de manera que solo una puerta pueda estar abierta en un momento dado?",
		options: ["Control de acceso biométrico", "Esclusa de seguridad", "Acceso con tarjeta de proximidad", "Acceso con teclado"],
		correctIndex: 1,
		explanation:
			"Un mantrap es un vestíbulo de control de acceso con dos puertas que permite que solo una se abra a la vez, reduciendo el tailgating y la entrada no autorizada."
	},
	{
		id: 48,
		domain: "D4",
		question:
			"¿Qué ataque implica que un atacante ingrese una entrada calculada que tenga el mismo valor hash robado de la contraseña del usuario para acceder al sistema?",
		options: ["Suplantación", "Fuerza bruta", "Repetición", "Colisión"],
		correctIndex: 3,
		explanation:
			"Un ataque de colisión busca una entrada diferente que produzca el mismo valor hash, permitiendo el bypass cuando solo se valida una coincidencia de hash."
	},
	{
		id: 49,
		domain: "D3",
		question: "¿Cuál es el modo de fallo más óptimo para la puerta de salida de un centro de datos?",
		options: ["A prueba de fallos", "Fallo seguro", "Fallo peligroso", "Fallo obsoleto"],
		correctIndex: 0,
		explanation:
			"Fail-safe significa que la puerta se desbloquea/abre ante una pérdida de energía para priorizar la seguridad de las personas y permitir una evacuación segura durante emergencias."
	},
	{
		id: 50,
		domain: "D2",
		question: "¿Cuál de las siguientes representa la tercera etapa del proceso de respuesta a incidentes?",
		options: [
			"Preparación",
			"Detección y análisis",
			"Contención, erradicación y recuperación",
			"Actividad posterior al incidente"
		],
		correctIndex: 2,
		explanation:
			"Después de preparación y detección/análisis, la respuesta pasa a contención, erradicación y recuperación para detener la propagación, eliminar la amenaza y restaurar las operaciones."
	},
	{
		id: 51,
		domain: "D3",
		question: "¿Cuál de las siguientes describe mejor el control de acceso basado en atributos (ABAC)?",
		options: [
			"El acceso se concede en función de roles y responsabilidades del usuario.",
			"El acceso se concede en función de credenciales del usuario, como nombre de usuario y contraseña.",
			"El acceso se concede en función de diversas condiciones como hora, ubicación, temperatura, presión, humedad, etc.",
			"El acceso se concede en función del principio de mínimo privilegio."
		],
		correctIndex: 2,
		explanation:
			"ABAC evalúa atributos del sujeto, del objeto y del entorno (por ejemplo, hora/ubicación) para tomar decisiones de autorización de grano fino."
	},
	{
		id: 52,
		domain: "D1",
		question:
			"¿Cuál es el concepto fundamental en ciberseguridad que garantiza que los datos no sean accedidos por personas no autorizadas?",
		options: ["Autenticación", "Integridad", "Confidencialidad", "Disponibilidad"],
		correctIndex: 2,
		explanation:
			"La confidencialidad garantiza que la información esté protegida contra acceso o divulgación no autorizados, típicamente mediante controles de acceso y cifrado."
	},
	{
		id: 53,
		domain: "D5",
		question:
			"En el ámbito de la ciberseguridad, ¿qué se considera a menudo el punto más vulnerable o el eslabón más débil en las defensas de una organización?",
		options: ["Vulnerabilidades de software", "Infraestructura de red", "Medidas de seguridad física", "Factor humano"],
		correctIndex: 3,
		explanation:
			"Las personas suelen ser el eslabón más débil debido a errores y a la susceptibilidad a la ingeniería social, por lo que la concienciación y los controles de proceso son críticos."
	},
	{
		id: 54,
		domain: "D4",
		question:
			"¿Qué tipo de ataque implica que un atacante intercepte información del servidor y luego la envíe al cliente, haciéndose pasar por el servidor?",
		options: ["Phishing", "Suplantación", "Hombre en el Medio (MiTM)", "Denial-of-Service (DoS)"],
		correctIndex: 2,
		explanation:
			"Un ataque Hombre en el Medio intercepta las comunicaciones entre partes y puede suplantar extremos, permitiendo robo o modificación de datos."
	},
	{
		id: 55,
		domain: "D4",
		question:
			"¿Qué dispositivo se utiliza comúnmente para reforzar o amplificar señales de red y extender su alcance?",
		options: ["Módem", "Enrutador", "Conmutador", "Repetidor"],
		correctIndex: 3,
		explanation:
			"Un repetidor regenera/amplifica señales para extender la distancia de red y superar la atenuación."
	},
	{
		id: 56,
		domain: "D5",
		question: "¿Qué técnica implica ocultar criptográficamente datos dentro de un archivo para evadir la detección?",
		options: ["Cifrado", "Esteganografía", "Ofuscación", "Hash"],
		correctIndex: 1,
		explanation:
			"La esteganografía oculta la existencia de datos incrustándolos dentro de otros archivos (por ejemplo, imágenes), haciendo que el contenido oculto sea difícil de detectar."
	},
	{
		id: 57,
		domain: "D4",
		question:
			"¿Qué modelo de despliegue de nube integra elementos de nubes privadas y públicas, permitiendo compartir datos y aplicaciones entre ambas mientras ofrece mayor flexibilidad y escalabilidad?",
		options: ["Privada", "Pública", "Comunitaria", "Híbrida"],
		correctIndex: 3,
		explanation:
			"Una nube híbrida combina componentes de nube privada y pública, permitiendo compartir datos/aplicaciones mientras equilibra flexibilidad, escalabilidad y control."
	},
	{
		id: 58,
		domain: "D1",
		question:
			"¿Qué principio de seguridad se viola cuando un atacante logra robar los datos de tarjetas de crédito de clientes desde la base de datos de una organización?",
		options: ["Disponibilidad", "Integridad", "Autenticación", "Confidencialidad"],
		correctIndex: 3,
		explanation:
			"Robar datos de tarjetas de crédito es una divulgación no autorizada de datos sensibles, lo cual constituye una violación de la confidencialidad."
	},
	{
		id: 59,
		domain: "D4",
		question:
			"¿Qué modelo de despliegue de nube implica que una empresa configure un entorno de nube en su propio centro de datos y no lo comparta con otras partes?",
		options: ["Privada", "Pública", "Híbrida", "Comunitaria"],
		correctIndex: 0,
		explanation:
			"Una nube privada está dedicada a una sola organización y puede alojarse en su propio centro de datos, sin compartirse con otras partes."
	},
	{
		id: 60,
		domain: "D1",
		question: "¿Cuál es un objetivo principal de la gestión de riesgos en ciberseguridad?",
		options: [
			"Reducir el riesgo a niveles aceptables",
			"Prevenir todos los incidentes de seguridad",
			"Detectar todas las amenazas cibernéticas",
			"Eliminar todas las vulnerabilidades"
		],
		correctIndex: 0,
		explanation:
			"La gestión de riesgos busca reducir el riesgo a niveles aceptables alineados con los objetivos del negocio, no eliminar todos los incidentes o vulnerabilidades."
	},
	{
		id: 61,
		domain: "D1",
		question:
			"¿Qué principio de seguridad se compromete cuando los datos han sido alterados y ya no generan el mismo valor hash que los datos originales?",
		options: ["Confidencialidad", "Disponibilidad", "Integridad", "Autenticación"],
		correctIndex: 2,
		explanation:
			"Si los datos cambian, su hash cambia; una discrepancia indica que los datos ya no están íntegros, lo que significa que la integridad se ha visto comprometida."
	},
	{
		id: 62,
		domain: "D5",
		question:
			"¿Cuál es la frecuencia recomendada para desplegar parches en el entorno de producción de una organización?",
		options: ["Diariamente", "En cuanto se publiquen", "Semanalmente", "Trimestralmente"],
		correctIndex: 1,
		explanation:
			"Aplicar parches de forma oportuna cuando se publican reduce el tiempo de exposición a vulnerabilidades conocidas, especialmente para actualizaciones críticas de seguridad."
	},
	{
		id: 63,
		domain: "D4",
		question: "¿Cuántas capas existen en el modelo OSI?",
		options: ["3", "5", "7", "9"],
		correctIndex: 2,
		explanation: "El modelo OSI consta de 7 capas, desde Física hasta Aplicación."
	},
	{
		id: 64,
		domain: "D3",
		question:
			"¿Qué modelo de control de acceso es más adecuado para un sistema empresarial grande con numerosos usuarios que requieren permisos de acceso similares?",
		options: ["MAC", "RBAC", "DAC", "ABAC"],
		correctIndex: 1,
		explanation:
			"RBAC es ideal para entornos grandes porque los permisos se asignan a roles, simplificando la administración para muchos usuarios con funciones similares."
	},
	{
		id: 65,
		domain: "D1",
		question: "¿Qué significa el acrónimo AAA en el contexto de la ciberseguridad?",
		options: [
			"Autenticación, autorización y contabilidad",
			"Aplicaciones avanzadas de antivirus",
			"Análisis automatizado de anomalías",
			"Arquitectura de aplicaciones accesibles"
		],
		correctIndex: 0,
		explanation:
			"AAA significa autenticación (quién eres), autorización (qué puedes hacer) y contabilidad (registro/traceabilidad de acciones)."
	},
	{
		id: 66,
		domain: "D2",
		question:
			"En el ciclo de vida de gestión de respuesta a incidentes, ¿cuál es el paso inmediato posterior a la fase de preparación?",
		options: [
			"Planificación de comunicaciones",
			"Detección y análisis",
			"Identificación del incidente",
			"Investigación forense"
		],
		correctIndex: 1,
		explanation:
			"Después de la preparación, las organizaciones pasan a detección y análisis para identificar y comprender actividad sospechosa y posibles incidentes."
	},
	{
		id: 67,
		domain: "D4",
		question: "¿Cuál de las siguientes representa una dirección de hardware?",
		options: ["192.168.1.1", "www.isc2.com", "00:1A:4D:5E:7F:2B", "TCP/IP"],
		correctIndex: 2,
		explanation:
			"Una dirección MAC es una dirección de hardware escrita como octetos hexadecimales (por ejemplo, 00:1A:4D:5E:7F:2B) asignada a una interfaz de red."
	},
	{
		id: 68,
		domain: "D5",
		question:
			"Al realizar operaciones criptográficas asimétricas, ¿cuál de las siguientes nunca debe compartirse?",
		options: ["Clave pública", "Clave privada", "Clave de sesión", "Algoritmo de cifrado"],
		correctIndex: 1,
		explanation:
			"En criptografía asimétrica, la clave privada debe permanecer secreta; compartirla compromete las garantías de confidencialidad y autenticidad."
	},
	{
		id: 69,
		domain: "D1",
		question:
			"¿Qué principio garantiza que los datos personales se recopilen, usen y almacenen solo por individuos o procesos autorizados?",
		options: ["Confidencialidad", "Integridad", "Disponibilidad", "Privacidad"],
		correctIndex: 3,
		explanation:
			"La privacidad rige la recopilación, el uso y el almacenamiento apropiados de datos personales por entidades autorizadas, ayudando a prevenir el mal uso y el procesamiento no autorizado."
	},
	{
		id: 70,
		domain: "D4",
		question:
			"¿Qué protocolo de troubleshooting de red se usa comúnmente para verificar si un puerto remoto está abierto en la red?",
		options: ["ICMP", "SSH", "Telnet", "FTP"],
		correctIndex: 2,
		explanation:
			"Telnet puede usarse para intentar una conexión TCP a un host:puerto para confirmar si el puerto es alcanzable/está abierto (aunque no es seguro)."
	},
	{
		id: 71,
		domain: "D1",
		question:
			"¿Qué control de seguridad física es más probable que disuada a un intruso de colarse en un edificio durante horas nocturnas?",
		options: ["Bolardos", "Esclusa de seguridad", "Valla", "Iluminación"],
		correctIndex: 3,
		explanation:
			"Una buena iluminación aumenta la visibilidad y el riesgo percibido por los intrusos, por lo que es un fuerte elemento disuasorio durante horas de baja visibilidad."
	},
	{
		id: 72,
		domain: "D1",
		question: "¿Qué define mejor la no repudio (non-repudiation) en ciberseguridad?",
		options: [
			"Técnicas de cifrado",
			"Autenticación de usuarios",
			"Incapacidad de un usuario para negar su participación en un evento.",
			"Protección de Firewall"
		],
		correctIndex: 2,
		explanation:
			"El no repudio proporciona prueba de origen o acción para que un actor no pueda negar de forma creíble haber realizado una acción (a menudo mediante firmas digitales)."
	},
	{
		id: 73,
		domain: "D4",
		question: "¿En qué capa OSI opera un bridge?",
		options: ["Capa física", "Capa de enlace de datos", "Capa de red", "Capa de transporte"],
		correctIndex: 1,
		explanation:
			"Un bridge opera en la Capa 2 (enlace de datos), reenviando tramas según direcciones MAC y segmentando dominios de colisión."
	},
	{
		id: 74,
		domain: "D2",
		question: "¿Cuál es el objetivo principal de un plan de respuesta a incidentes?",
		options: [
			"Minimizar el impacto y restaurar las operaciones después de un incidente de seguridad",
			"Identificar riesgos potenciales",
			"Realizar auditorías de seguridad periódicas",
			"Implementar medidas preventivas"
		],
		correctIndex: 0,
		explanation:
			"Un plan de respuesta a incidentes coordina acciones para contener incidentes, minimizar el impacto y restaurar las operaciones normales lo más rápido y seguro posible."
	},
	{
		id: 75,
		domain: "D2",
		question:
			"¿Cuál de las siguientes opciones de sitio de recuperación normalmente requiere más tiempo para estar operativa después de un desastre?",
		options: ["Sitio caliente", "Sitio templado", "Sitio frío", "Sitio móvil"],
		correctIndex: 2,
		explanation:
			"Un sitio frío tiene infraestructura mínima preaprovisionada, por lo que generalmente tarda más en aprovisionar/instalar recursos y estar operativo."
	},
	{
		id: 76,
		domain: "D2",
		question:
			"¿Durante qué etapa del proceso de respuesta a incidentes suele ocurrir la reanudación del servicio?",
		options: [
			"Preparación",
			"Contención, erradicación y recuperación",
			"Detección y análisis",
			"Actividad posterior al incidente"
		],
		correctIndex: 1,
		explanation:
			"La reanudación del servicio forma parte de las actividades de recuperación después de la contención y la erradicación, cuando los sistemas se restauran a su operación normal."
	},
	{
		id: 77,
		domain: "D3",
		question:
			"¿Qué modelo de control de acceso se basa en una autoridad central para determinar los derechos de acceso según políticas de seguridad predefinidas?",
		options: [
			"Control de acceso obligatorio (MAC)",
			"Control de acceso basado en roles (RBAC)",
			"Control de acceso discrecional (DAC)",
			"Control de acceso basado en atributos (ABAC)"
		],
		correctIndex: 0,
		explanation:
			"MAC se aplica de forma centralizada en función de etiquetas y autorizaciones, con una autoridad central que determina el acceso según la política."
	},
	{
		id: 78,
		domain: "D5",
		question:
			"¿Cuál de las siguientes actividades NO debe realizarse durante el proceso de hardening de un sistema?",
		options: [
			"Actualizaciones regulares de software",
			"Habilitar mecanismos de autenticación fuertes",
			"Deshabilitar servicios innecesarios",
			"Abrir todos los puertos"
		],
		correctIndex: 3,
		explanation:
			"El hardening reduce la superficie de ataque; abrir todos los puertos incrementa la exposición y es lo opuesto a una práctica de hardening segura."
	},
	{
		id: 79,
		domain: "D5",
		question:
			"¿Qué técnica se emplea para aumentar la resistencia al cracking de contraseñas en funciones hash?",
		options: ["Cifrado", "Compresión", "Salado", "Ofuscación"],
		correctIndex: 2,
		explanation:
			"El salting agrega un valor aleatorio único a cada contraseña antes de calcular su hash, evitando hashes idénticos para contraseñas idénticas y frustrando rainbow tables."
	},
	{
		id: 80,
		domain: "D5",
		question:
			"Mientras trabaja en un proyecto, un empleado se da cuenta de que su colega posee privilegios excesivos que superan los requisitos de su puesto. ¿Qué acción debería tomar el empleado?",
		options: [
			"Ignorar la situación y centrarse en sus propias tareas.",
			"Confrontar directamente al colega por los privilegios excesivos.",
			"Reportar el problema a la autoridad designada o al supervisor.",
			"Compartir la información con otros miembros del equipo para recabar opiniones."
		],
		correctIndex: 2,
		explanation:
			"Los privilegios excesivos violan el mínimo privilegio; la acción apropiada es reportarlo por los canales establecidos para que el acceso pueda revisarse y corregirse."
	},
	{
		id: 81,
		domain: "D1",
		question: "¿Cuál de los siguientes factores de autenticación se basa en el principio de \"algo que eres\"?",
		options: ["Contraseña", "Token", "Reconocimiento facial", "PIN"],
		correctIndex: 2,
		explanation:
			"Los biométricos como el reconocimiento facial son factores Tipo 3 (algo que eres), basados en características físicas inherentes."
	},
	{
		id: 82,
		domain: "D1",
		question: "¿Cuál se considera el método más efectivo para asegurar el acceso lógico a información sensible?",
		options: [
			"Autenticación multifactor (MFA)",
			"Contraseñas complejas",
			"Autenticación biométrica",
			"Single sign-on (SSO)"
		],
		correctIndex: 0,
		explanation:
			"MFA es muy efectiva porque requiere múltiples factores independientes, reduciendo la probabilidad de que un único factor comprometido otorgue acceso."
	},
	{
		id: 83,
		domain: "D5",
		question: "¿Qué clave se utiliza para descifrar información cifrada con una clave privada?",
		options: ["Clave pública", "Clave de sesión", "Clave simétrica", "Clave hash"],
		correctIndex: 0,
		explanation:
			"En criptografía asimétrica, los datos cifrados con una clave del par se descifran con la otra; el cifrado con clave privada se verifica/descifra con la clave pública."
	},
	{
		id: 84,
		domain: "D1",
		question: "¿Cuál de los siguientes representa un factor de autenticación Tipo 2?",
		options: ["Nombre de usuario y contraseña", "Escaneo biométrico", "Tarjeta inteligente", "Contraseña"],
		correctIndex: 2,
		explanation:
			"Los factores de autenticación Tipo 2 son algo que tienes; una tarjeta inteligente es un factor de posesión usado para autenticar a un usuario."
	},
	{
		id: 85,
		domain: "D1",
		question: "¿Cuál de las siguientes medidas de seguridad se clasifica como un control técnico preventivo?",
		options: ["Sistema de Detección de Intrusiones (IDS)", "Procedimiento", "Detector de humo", "Firewall"],
		correctIndex: 3,
		explanation:
			"Un Firewall es un control técnico preventivo que bloquea/filtra tráfico no autorizado según reglas, ayudando a prevenir incidentes antes de que ocurran."
	},
	{
		id: 86,
		domain: "D1",
		question: "¿Cuál de los siguientes es un control administrativo preventivo?",
		options: ["Copias de seguridad", "Separación de funciones", "CCTV", "Alarma"],
		correctIndex: 1,
		explanation:
			"La separación de funciones es un control administrativo que previene fraude/abuso al asegurar que ninguna persona pueda completar todos los pasos críticos por sí sola."
	},
	{
		id: 87,
		domain: "D5",
		question: "¿Qué método implica asignar niveles de seguridad basados en riesgo a los datos?",
		options: ["Cifrado de datos", "Control de acceso", "Evaluación de riesgos", "Clasificación"],
		correctIndex: 3,
		explanation:
			"La clasificación de datos asigna etiquetas de sensibilidad y riesgo a la información para que se apliquen controles adecuados según su importancia e impacto."
	},
	{
		id: 88,
		domain: "D3",
		question: "¿Cuál de las siguientes cuentas suele tener privilegios elevados dentro de un sistema?",
		options: ["Invitado", "Usuario", "Administrador", "Analista"],
		correctIndex: 2,
		explanation:
			"Las cuentas de administrador tienen permisos elevados necesarios para tareas de configuración y administración del sistema más allá de las capacidades de un usuario estándar."
	},
	{
		id: 89,
		domain: "D4",
		question: "¿Qué implica principalmente el concepto de Confianza Cero en ciberseguridad?",
		options: [
			"Confiar en todos los usuarios por defecto",
			"Otorgar acceso ilimitado a usuarios autenticados",
			"Implementar autenticación multifactor",
			"Limitar el acceso a recursos solo a usuarios explícitamente autorizados"
		],
		correctIndex: 3,
		explanation:
			"Confianza Cero sigue el principio de 'nunca confíes, verifica siempre' y limita el acceso a recursos explícitamente autorizados, validando continuamente usuarios y contextos."
	},
	{
		id: 90,
		domain: "D3",
		question: "¿Cuál de las siguientes define mejor el concepto de separación de funciones en ciberseguridad?",
		options: [
			"Cada miembro del equipo tiene múltiples roles dentro de la organización.",
			"La misma persona es responsable tanto de crear como de aprobar cuentas de usuario.",
			"El acceso a información sensible se restringe a pocas personas.",
			"Un solo usuario no puede realizar todas las partes de una transacción."
		],
		correctIndex: 3,
		explanation:
			"La separación de funciones exige dividir tareas críticas para que ninguna persona pueda completar por sí sola un proceso sensible de principio a fin."
	},
	{
		id: 91,
		domain: "D4",
		question: "¿Cómo se denomina la unidad de datos de protocolo (PDU) de la capa de red?",
		options: ["Segmento", "Trama", "Paquete", "Bit"],
		correctIndex: 2,
		explanation:
			"La PDU de la capa de red (Capa 3) es el paquete, que incluye información de enrutamiento como direcciones IP de origen y destino."
	},
	{
		id: 92,
		domain: "D5",
		question:
			"¿Cómo se denomina a un empleado malicioso que utiliza sus privilegios para violar políticas organizacionales?",
		options: ["Amenaza interna (Amenaza Interna)", "Ingeniero social", "Ciberdelincuente", "Atacante externo"],
		correctIndex: 0,
		explanation:
			"Una amenaza interna (Amenaza Interna) es una persona de confianza (por ejemplo, un empleado) que abusa del acceso autorizado para comprometer la seguridad o violar una política."
	},
	{
		id: 93,
		domain: "D3",
		question: "¿Cuál de los siguientes ejemplifica un control físico preventivo?",
		options: ["Rastro de auditoría", "Sistema IAM", "Registro", "Esclusa de seguridad"],
		correctIndex: 3,
		explanation:
			"Un mantrap es un control de acceso físico que evita el tailgating al permitir que solo una puerta se abra a la vez en un vestíbulo controlado."
	},
	{
		id: 94,
		domain: "D1",
		question:
			"¿Quién suele tener la responsabilidad principal de desarrollar la política de seguridad de la información dentro de una organización?",
		options: ["Gerente de TI", "CFO", "CISO", "Director de Recursos Humanos"],
		correctIndex: 2,
		explanation:
			"El CISO normalmente es responsable del programa de seguridad de la información y lidera el desarrollo de políticas de seguridad alineadas con el riesgo y los objetivos del negocio."
	},
	{
		id: 95,
		domain: "D5",
		question: "¿Cuál de las siguientes características describe mejor un valor hash?",
		options: [
			"Longitud variable, reversible, única, no determinística",
			"Longitud fija, reversible, no única, determinística",
			"Longitud fija, irreversible, única, determinística",
			"Longitud variable, irreversible, no única, no determinística"
		],
		correctIndex: 2,
		explanation:
			"Los hashes tienen longitud fija y son determinísticos para una entrada dada, y están diseñados para ser de una sola vía (irreversibles) con una probabilidad de colisión muy baja."
	},
	{
		id: 96,
		domain: "D5",
		question:
			"¿Cuál es una característica crítica de una función hash que contribuye significativamente a prevenir ataques de criptoanálisis?",
		options: ["Fuerza de cifrado", "Longitud de clave", "Relación de compresión", "Resistencia a colisiones"],
		correctIndex: 3,
		explanation:
			"La resistencia a colisiones hace computacionalmente inviable encontrar dos entradas diferentes que produzcan el mismo hash, respaldando la integridad y la confianza en el hashing."
	},
	{
		id: 97,
		domain: "D4",
		question:
			"¿Qué categoría de hackers representa una amenaza considerable al infiltrarse en sistemas por ganancia personal o intención maliciosa?",
		options: ["Sombreros blancos (White Hats)", "Sombreros grises (Gray Hats)", "Sombreros negros (Black Hats)", "Script Kiddies"],
		correctIndex: 2,
		explanation:
			"Los hackers de sombrero negro actúan con intención maliciosa (por ejemplo, robo, extorsión), lo que los convierte en una amenaza seria para sistemas y organizaciones."
	},
	{
		id: 98,
		domain: "D5",
		question: "¿Qué técnica criptográfica puede utilizarse para establecer la autenticidad de un mensaje?",
		options: ["Función hash", "Firma digital", "Cifrado", "Algoritmo de clave simétrica"],
		correctIndex: 1,
		explanation:
			"Las firmas digitales establecen autenticidad (e integridad) al permitir verificar con la clave pública del firmante que el mensaje provino del firmante y no fue alterado."
	},
	{
		id: 99,
		domain: "D4",
		question: "¿Qué modelo de servicio en la nube es más probable que proporcione una shell remota de Linux en línea?",
		options: [
			"Infraestructura como servicio (IaaS)",
			"Plataforma como servicio (PaaS)",
			"Software como servicio (SaaS)",
			"Función como servicio (FaaS)"
		],
		correctIndex: 1,
		explanation:
			"PaaS suele proporcionar runtimes gestionados y herramientas para desarrolladores que pueden incluir shells basadas en la web para administrar aplicaciones y entornos."
	},
	{
		id: 100,
		domain: "D4",
		question:
			"¿Qué tipo de ataque explota principalmente el comportamiento humano para obtener acceso no autorizado o información sensible?",
		options: [
			"Ataque de Denial-of-Service (DoS)",
			"Ataque de inyección SQL",
			"Ataque Hombre en el Medio",
			"Ataque de phishing"
		],
		correctIndex: 3,
		explanation:
			"El phishing es ingeniería social que engaña a las personas para que revelen datos sensibles o realicen acciones riesgosas, explotando el comportamiento humano en lugar de fallas de software."
	}
];
