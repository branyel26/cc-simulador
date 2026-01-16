// Test 6 — Banco de 100 preguntas
// Formato esperado por app.js: const QUESTIONS = [{ id, domain, question, options, correctIndex, explanation }, ...]

const QUESTIONS = [
	{
		id: 1,
		domain: "D1",
		question: "¿Cuándo es justificable aceptar el riesgo en cybersecurity?",
		options: [
			"Cuando el impacto potencial en la reputación es mínimo.",
			"Cuando la organización cuenta con un Plan de Respuesta a Incidentes robusto.",
			"Cuando el costo de mitigar el riesgo excede las pérdidas financieras potenciales por un compromise.",
			"Cuando existe incertidumbre sobre el threat landscape."
		],
		correctIndex: 2,
		explanation: "Aceptar el riesgo en cybersecurity es una decisión estratégica basada en un análisis costo-beneficio. Si el gasto de implementar controles adicionales supera las pérdidas financieras potenciales ante un compromise, puede ser justificable aceptar el riesgo."
	},
	{
		id: 2,
		domain: "D2",
		question: "¿Cuál es el objetivo principal de realizar un Análisis de Impacto al Negocio (BIA) dentro del framework de cybersecurity de una organización?",
		options: [
			"Identificar riesgos potenciales",
			"Evaluar el cumplimiento regulatorio",
			"Evaluar necesidades de capacitación de empleados",
			"Priorizar procesos y sistemas críticos para la continuidad"
		],
		correctIndex: 3,
		explanation: "El objetivo principal de un BIA es identificar y priorizar procesos y sistemas críticos. Esto permite enfocar recursos para asegurar la continuidad de funciones esenciales ante una interrupción o un cyber incident."
	},
	{
		id: 3,
		domain: "D3",
		question: "¿Cuál es una ventaja principal de implementar controles robustos de physical access dentro de las instalaciones de una organización?",
		options: [
			"Mejorar la velocidad y el performance de la red",
			"Prevenir el acceso no autorizado a las instalaciones",
			"Mejorar el cifrado de datos",
			"Incrementar la efectividad del Firewall"
		],
		correctIndex: 1,
		explanation: "Los controles robustos de physical access ayudan a evitar que personas no autorizadas ingresen a las instalaciones. Esto incluye medidas como lectores biométricos, tarjetas de acceso y personal de seguridad."
	},
	{
		id: 4,
		domain: "D4",
		question: "¿En qué capa del modelo OSI opera una MAC address?",
		options: [
			"Layer 1",
			"Layer 2",
			"Layer 3",
			"Layer 4"
		],
		correctIndex: 1,
		explanation: "Una MAC (Media Control de Acceso) address opera en la Layer 2 del modelo OSI. Esta capa, conocida como Capa de Enlace de Datos, es responsable de establecer un enlace confiable entre dos nodos conectados directamente."
	},
	{
		id: 5,
		domain: "D5",
		question: "¿Qué método criptográfico es fundamental para el funcionamiento de las digital signatures?",
		options: [
			"Criptografía de clave simétrica (symmetric key cryptography)",
			"Esteganografía",
			"Criptografía de clave pública (clave pública cryptography)",
			"Transposition cryptography"
		],
		correctIndex: 2,
		explanation: "Las digital signatures dependen de clave pública cryptography, que usa un par de llaves: una clave pública y una clave privada. El emisor usa su clave privada para firmar el mensaje (y el receptor verifica usando la clave pública correspondiente)."
	},
	{
		id: 6,
		domain: "D1",
		question: "¿Cuál es el objetivo principal de mitigar el riesgo en cybersecurity?",
		options: [
			"Crear una infraestructura de seguridad compleja",
			"Implementar controles para minimizar la probabilidad o el impacto de eventos de riesgo",
			"Realizar vulnerability assessments de forma regular",
			"Implementar tecnologías avanzadas de threat detection"
		],
		correctIndex: 1,
		explanation: "El objetivo principal de mitigar el riesgo en ciberseguridad es implementar controles que reduzcan la probabilidad o severidad de eventos de riesgo. Esto implica identificar vulnerabilidades e implementar medidas como Firewalls, cifrado y controles de acceso."
	},
	{
		id: 7,
		domain: "D1",
		question: "¿Cuál de las siguientes actividades es primordial para asegurar el cumplimiento de estándares y obligaciones en cybersecurity, considerando requisitos regulatorios y contractuales?",
		options: [
			"Capacitación en conciencia de seguridad",
			"Copias de seguridad del sistema regulares",
			"Maintaining compliance",
			"Monitoreo de red"
		],
		correctIndex: 2,
		explanation: "En cybersecurity, mantener compliance es clave para cumplir estándares y obligaciones. Implica evaluar continuamente y alinear prácticas de seguridad con requisitos regulatorios y compromisos contractuales."
	},
	{
		id: 8,
		domain: "D4",
		question: "Para asegurar la continuidad de equipos críticos durante un power outage, ¿qué solución está diseñada para mantener un suministro eléctrico ininterrumpido?",
		options: [
			"Generador de respaldo",
			"Solar panels",
			"Fuel cells",
			"Uninterruptible Power Supply (UPS)"
		],
		correctIndex: 3,
		explanation: "Durante un power outage, un UPS proporciona una fuente de energía temporal para equipos críticos. Funciona como un puente entre la interrupción del suministro principal y la activación de una fuente de energía de respaldo."
	},
	{
		id: 9,
		domain: "D4",
		question: "¿Cuál de las siguientes opciones es un threat vector?",
		options: [
			"Un atacante externo malicioso escaneando el entorno de la organización en busca de vulnerabilidades",
			"Errores no intencionales de empleados",
			"Actualizaciones rutinarias del sistema",
			"Acceso físico a cuartos de servidores"
		],
		correctIndex: 0,
		explanation: "Un threat vector es el medio o camino por el cual un threat actor ejecuta un ataque. Un atacante externo malicioso que escanea el entorno para encontrar vulnerabilidades es un ejemplo de threat vector."
	},
	{
		id: 10,
		domain: "D5",
		question: "¿Qué tipo de ataque de phishing apunta específicamente a ejecutivos de alto nivel dentro de una empresa?",
		options: [
			"Phishing dirigido",
			"Vishing",
			"Smishing",
			"Whaling (Caza de ballenas)"
		],
		correctIndex: 3,
		explanation: "Whaling es un tipo de phishing que se dirige a personas de alto perfil dentro de una organización (por ejemplo, ejecutivos o decision-makers). Los atacantes personalizan el engaño para manipular a estas personas."
	},
	{
		id: 11,
		domain: "D4",
		question: "¿Qué dispositivo de red es principalmente responsable de monitorear el tráfico para detectar y responder a incidentes de seguridad?",
		options: [
			"Enrutador",
			"Firewall",
			"IDS",
			"Conmutador"
		],
		correctIndex: 2,
		explanation: "Un Sistema de Detección de Intrusiones (IDS) monitorea y analiza el tráfico de red para detectar señales de actividad maliciosa o incidentes de seguridad. Identifica anomalías o patrones indicativos de ataques potenciales."
	},
	{
		id: 12,
		domain: "D4",
		question: "¿Cómo pueden separarse redes de forma lógica para mejorar seguridad y controlar el flujo de tráfico?",
		options: [
			"Configuración del Firewall",
			"VLAN",
			"VPN",
			"Proxy server"
		],
		correctIndex: 1,
		explanation: "La separación lógica de redes se logra mediante Virtual Local Area Networks (VLANs). Las VLAN permiten segmentar una red física en múltiples redes virtuales, mejorando la seguridad al aislar dominios de broadcast."
	},
	{
		id: 13,
		domain: "D1",
		question: "¿Qué práctica está más alineada con promover el principio de Disponibilidad en un marco de ciberseguridad?",
		options: [
			"Realizar copias de seguridad de forma regular",
			"Implementar controles de acceso fuertes",
			"Realizar pruebas de penetración",
			"Cifrar datos sensibles"
		],
		correctIndex: 0,
		explanation: "El principio de Disponibilidad se centra en asegurar que la información y los recursos estén accesibles cuando se necesiten. Las copias de seguridad regulares ayudan a mitigar el impacto de pérdida de datos o fallas del sistema."
	},
	{
		id: 14,
		domain: "D4",
		question: "¿Cuál opción describe mejor la diferencia principal entre Sistema de Detección de Intrusiones (IDS) e Sistema de Prevención de Intrusioness (IPS)?",
		options: [
			"Un IDS se centra en detectar amenazas potenciales, mientras que un IPS detecta y además previene activamente amenazas identificadas.",
			"IDS and IPS both solely focus on preventing cyber threats.",
			"IDS actively prevents identified threats, while IPS detects potential cyber threats.",
			"IDS and IPS have no significant differences in their functions."
		],
		correctIndex: 0,
		explanation: "Un IDS monitorea actividades de red o del sistema e identifica incidentes potenciales. Un IPS no solo detecta, sino que también toma medidas para prevenir o bloquear amenazas."
	},
	{
		id: 15,
		domain: "D4",
		question: "¿Cuál de los siguientes es más efectivo para identificar y detectar actividades sospechosas en un dispositivo personal?",
		options: [
			"Firewall",
			"HIDS",
			"Network Switch",
			"Enrutador"
		],
		correctIndex: 1,
		explanation: "Un Host-based Sistema de Detección de Intrusiones (HIDS) es lo más efectivo para detectar actividades sospechosas en un endpoint. Un HIDS monitorea y analiza eventos y comportamientos en el host/dispositivo."
	},
	{
		id: 16,
		domain: "D5",
		question: "¿Cuál de las siguientes prácticas NO se recomienda para asegurar una cybersecurity robusta?",
		options: [
			"Actualizar el antivirus regularmente",
			"Usar passwords fuertes y únicos para cada sistema",
			"Habilitar multi-factor authentication (MFA)",
			"Usar el mismo password en todos los sistemas"
		],
		correctIndex: 3,
		explanation: "Reutilizar el mismo password en múltiples sistemas incrementa el riesgo: si una cuenta se compromete, las demás quedan expuestas. Lo correcto es usar passwords distintos y fuertes para mejorar la seguridad general."
	},
	{
		id: 17,
		domain: "D3",
		question: "¿Qué mecanismo de autenticación basada en token genera nuevos tokens después de un periodo fijo de tiempo?",
		options: [
			"Synchronous (sincrónico)",
			"Asynchronous (asincrónico)",
			"Biometría",
			"NTP"
		],
		correctIndex: 0,
		explanation: "La autenticación por token sincrónica (synchronous) genera tokens nuevos cada cierto intervalo. El servidor de autenticación y el generador del token están sincronizados y se usa un algoritmo basado en tiempo; los tokens expiran después de una duración específica."
	},
	{
		id: 18,
		domain: "D1",
		question: "¿Cuál es el segundo canon del (ISC)² Code of Ethics?",
		options: [
			"Protect society, the common good, necessary public trust, and the infrastructure.",
			"Actuar de manera honorable, honesta, justa, responsable y legal.",
			"Provide diligent and competent service to principals.",
			"Avanzar y proteger la profesión."
		],
		correctIndex: 1,
		explanation: "El segundo canon del (ISC)² Code of Ethics enfatiza que los profesionales de cybersecurity deben actuar con integridad: de manera honorable, honesta, justa, responsable y legal."
	},
	{
		id: 19,
		domain: "D3",
		question: "¿Qué factor de autenticación se asocia con hablar hacia un micrófono?",
		options: [
			"Algo que sabes",
			"Algo que tienes",
			"Algo que eres",
			"Algún lugar donde estás"
		],
		correctIndex: 2,
		explanation: "Hablar hacia un micrófono (voice recognition) es un ejemplo de autenticación biométrica, que cae en la categoría de 'Algo que eres'. La biometría usa características físicas o de comportamiento únicas."
	},
	{
		id: 20,
		domain: "D4",
		question: "¿Qué estándar se usa comúnmente para autenticar clientes a redes mediante port-based authentication?",
		options: [
			"SSL/TLS",
			"SNMP",
			"RADIUS",
			"802.1x"
		],
		correctIndex: 3,
		explanation: "La port-based authentication se implementa comúnmente con el estándar IEEE 802.1X. Este protocolo permite autenticar dispositivos antes de otorgarles acceso a la red."
	},
	{
		id: 21,
		domain: "D1",
		question: "¿Qué principio constituye el primer canon del (ISC)² Code of Ethics?",
		options: [
			"Proteger intereses personales",
			"Asegurar ganancia personal",
			"Mantener el secreto profesional",
			"Proteger a la sociedad, el bien común, la confianza pública necesaria y la infraestructura"
		],
		correctIndex: 3,
		explanation: "El primer canon del (ISC)² Code of Ethics enfatiza la responsabilidad de priorizar el bienestar de la sociedad, promover el bien común, mantener la confianza pública y proteger infraestructura crítica."
	},
	{
		id: 22,
		domain: "D1",
		question: "¿Qué proceso fundamental consiste en confirmar la identidad del usuario antes de otorgar acceso a un sistema o recurso?",
		options: [
			"Autorización",
			"Autenticación",
			"Cifrado",
			"Firewall"
		],
		correctIndex: 1,
		explanation: "Authentication es el proceso de confirmar la identidad del usuario antes de otorgar acceso a un sistema o recurso; verifica que la identidad reclamada sea válida."
	},
	{
		id: 23,
		domain: "D1",
		question: "¿Cuál es el objetivo principal de HIPAA (Health Insurance Portability and Accountability Act)?",
		options: [
			"Optimizar la administración de servicios de salud",
			"Asegurar precios justos en servicios de salud",
			"Garantizar la confidencialidad y seguridad de la información de salud de los pacientes",
			"Regular investigación y desarrollo médico"
		],
		correctIndex: 2,
		explanation: "El objetivo principal de HIPAA es proteger la privacidad y la seguridad de la información de salud. Esto incluye medidas para resguardar la confidencialidad e integridad de los datos de salud de los pacientes."
	},
	{
		id: 24,
		domain: "D1",
		question: "¿Cuál de las siguientes opciones representa un technical control en cybersecurity?",
		options: [
			"Capacitación en conciencia de seguridad",
			"Desarrollo de políticas de seguridad",
			"Implementación de Firewall",
			"Vendor management"
		],
		correctIndex: 2,
		explanation: "Un technical control es un control implementado mediante tecnología para gestionar acceso, proteger sistemas y hacer cumplir políticas. La implementación de un Firewall es un technical control."
	},
	{
		id: 25,
		domain: "D2",
		question: "¿Cuál de los siguientes elementos suele incluirse como componente crucial de un Plan de Continuidad del Negocio (BCP) integral?",
		options: [
			"Capacitación de empleados",
			"Contactos del personal crítico de la supply chain",
			"Cifrado de datos",
			"Configuración del Firewall"
		],
		correctIndex: 1,
		explanation: "En un BCP integral, contar con contactos del personal crítico de la supply chain es esencial. Esto asegura un canal directo con stakeholders y proveedores durante y después de un evento disruptivo."
	},
	{
		id: 26,
		domain: "D4",
		question: "¿Qué documento ayuda a un cliente a asegurar que un sitio web tercerizado (outsourced) tendrá el uptime esperado?",
		options: [
			"Acuerdo de Nivel de Servicio (SLA)",
			"Evaluación de Riesgos",
			"Plan de Respuesta a Incidentes",
			"Política de privacidad"
		],
		correctIndex: 0,
		explanation: "Para servicios outsourced como un sitio web, un Acuerdo de Nivel de Servicio (SLA) define el nivel de servicio acordado, incluyendo métricas como uptime, response time y availability."
	},
	{
		id: 27,
		domain: "D5",
		question: "¿Cuál es una ventaja significativa del symmetric encryption?",
		options: [
			"Distribución mejorada de claves",
			"Increased complexity",
			"Escalabilidad mejorada",
			"Menor overhead y mayor velocidad"
		],
		correctIndex: 3,
		explanation: "El symmetric encryption suele ser más rápido y con menos overhead computacional, porque se usa la misma clave para cifrar y descifrar, reduciendo el costo de procesamiento."
	},
	{
		id: 28,
		domain: "D4",
		question: "¿En qué modelo de cloud computing se entrega al cliente un entorno para construir y ejecutar su propio software?",
		options: [
			"Infrastructure as a Service (IaaS)",
			"Platform as a Service (PaaS)",
			"Software as a Service (SaaS)",
			"Function as a Service (FaaS)"
		],
		correctIndex: 1,
		explanation: "PaaS entrega una plataforma que incluye herramientas de desarrollo y el runtime necesario para construir y ejecutar aplicaciones propias."
	},
	{
		id: 29,
		domain: "D2",
		question: "Dentro de un Incident Response Team, ¿qué rol suele encargarse de la comunicación con medios externos y stakeholders durante un incidente?",
		options: [
			"Technical Analyst",
			"Relaciones públicas",
			"Incident Responder",
			"Legal Counsel"
		],
		correctIndex: 1,
		explanation: "El rol de Public Relations se encarga de preparar y comunicar mensajes a medios, clientes y otros stakeholders para asegurar que se difunda información correcta y consistente."
	},
	{
		id: 30,
		domain: "D4",
		question: "¿Qué proceso fundamental de networking agrega header y footer en una capa específica del modelo OSI según el protocolo usado en esa capa?",
		options: [
			"Multiplexación",
			"Encapsulación",
			"Segmentación",
			"Fragmentación"
		],
		correctIndex: 1,
		explanation: "Encapsulation es el proceso de agregar headers y (cuando aplica) trailers/footers en cada capa del modelo OSI, encapsulando los datos para su transmisión por la red."
	},
	{
		id: 31,
		domain: "D1",
		question: "¿Qué proceso implica identificar, estimar y priorizar los riesgos a los que está expuesta una organización?",
		options: [
			"Evaluación de riesgos",
			"Risk treatment",
			"Risk mitigation",
			"Remediación de riesgos"
		],
		correctIndex: 0,
		explanation: "Risk assessment es un proceso fundamental que consiste en identificar, estimar y priorizar riesgos potenciales que una organización puede enfrentar."
	},
	{
		id: 32,
		domain: "D1",
		question: "¿Cuál de las siguientes medidas sirve tanto como control detective (detective) como disuasivo (deterrent)?",
		options: [
			"Warning sign",
			"Muro",
			"Cerca",
			"Cámara"
		],
		correctIndex: 3,
		explanation: "Las cámaras cumplen un doble propósito: detectan/registran evidencia de actividad sospechosa y, por su presencia visible, también disuaden intentos de intrusión."
	},
	{
		id: 33,
		domain: "D1",
		question: "¿Qué tipo de documento ayudaría a un nuevo security administrator a entender los pasos secuenciales necesarios para desplegar patches en los sistemas de la organización?",
		options: [
			"Política",
			"Guía",
			"Estándar",
			"Procedimiento"
		],
		correctIndex: 3,
		explanation: "Un documento de Procedure describe pasos concretos, procesos y acciones para cumplir una tarea. Para patch deployment, un Procedure daría instrucciones detalladas y secuenciales."
	},
	{
		id: 34,
		domain: "D1",
		question: "Después de implementar controles de remediation para mitigar un evento de riesgo, ¿cómo se llama el riesgo que aún permanece?",
		options: [
			"Inherent risk",
			"Secondary risk",
			"Residual risk",
			"Riesgo dinámico"
		],
		correctIndex: 2,
		explanation: "Aun después de aplicar controles, puede persistir cierto nivel de riesgo. Ese riesgo remanente se conoce como residual risk."
	},
	{
		id: 35,
		domain: "D5",
		question: "¿Qué proceso se encarga de reducir el attack surface implementando configuraciones seguras?",
		options: [
			"Escaneo de vulnerabilidades",
			"Gestión de parches",
			"Security hardening",
			"Detección de intrusiones"
		],
		correctIndex: 2,
		explanation: "Security hardening reduce el attack surface aplicando configuraciones seguras en sistemas, redes y aplicaciones. Incluye eliminar servicios innecesarios y cerrar puertos no usados."
	},
	{
		id: 36,
		domain: "D4",
		question: "¿Cuál modelo de servicios cloud indica que el proveedor es responsable de alojar, operar y mantener el hardware?",
		options: [
			"Infrastructure as a Service (IaaS)",
			"Platform as a Service (PaaS)",
			"Software as a Service (SaaS)",
			"Function as a Service (FaaS)"
		],
		correctIndex: 0,
		explanation: "En IaaS, el proveedor cloud gestiona la infraestructura de hardware (servidores, almacenamiento y redes), incluyendo el hosting, operación y mantenimiento."
	},
	{
		id: 37,
		domain: "D4",
		question: "¿Qué es una colección de dispositivos capaces de comunicarse entre sí o con un controlador a través de internet?",
		options: [
			"Network cluster",
			"Internet of Things (IoT)",
			"Digital ecosystem",
			"Ensamblaje conectado"
		],
		correctIndex: 1,
		explanation: "Internet of Things (IoT) se refiere a un conjunto de dispositivos que se comunican entre sí o con un controlador central vía internet. Suelen incluir sensores, software y otras tecnologías embebidas."
	},
	{
		id: 38,
		domain: "D2",
		question: "¿Cuál de los siguientes es un componente esencial de un business continuity plan?",
		options: [
			"Informes financieros trimestrales",
			"Manuales de capacitación de empleados",
			"Lista del equipo y de miembros de respaldo con métodos de contacto",
			"Política de decoración de oficina"
		],
		correctIndex: 2,
		explanation: "En un business continuity plan, la lista del equipo (y backups) con métodos de contacto es crucial. Permite localizar rápidamente a responsables de tareas específicas durante una crisis."
	},
	{
		id: 39,
		domain: "D5",
		question: "¿Qué acción implica tomar precauciones razonables para verificar acciones realizadas en cybersecurity?",
		options: [
			"Diligencia en ciberseguridad",
			"Security scrutiny",
			"Vigilancia cibernética",
			"Debida Diligencia"
		],
		correctIndex: 3,
		explanation: "En cybersecurity, due diligence es el proceso de tomar precauciones razonables y evaluar cuidadosamente antes de implementar cambios o tomar decisiones."
	},
	{
		id: 40,
		domain: "D4",
		question: "En el contexto de cybersecurity, ¿cómo se relacionan threats y vulnerabilities?",
		options: [
			"Threats are mitigated by vulnerabilities",
			"Vulnerabilities exploit threats",
			"Threats and vulnerabilities are unrelated",
			"Un threat explota una vulnerability"
		],
		correctIndex: 3,
		explanation: "Un threat es un peligro potencial que puede aprovecharse de vulnerabilidades existentes. La relación correcta es que un threat se apoya en una vulnerability para comprometer la seguridad de un sistema."
	},
	{
		id: 41,
		domain: "D1",
		question: "¿Qué método ofrece el login más seguro para una aplicación de e-commerce online?",
		options: [
			"Strong password",
			"Multi-factor authentication (MFA)",
			"Autenticación biométrica",
			"Single sign-on (SSO)"
		],
		correctIndex: 1,
		explanation: "El método más seguro es Multi-factor authentication (MFA), ya que agrega capas adicionales de verificación al requerir más de un factor para autenticar al usuario."
	},
	{
		id: 42,
		domain: "D2",
		question: "¿Qué constituye una consideración esencial para el éxito de un plan de recuperación ante desastres?",
		options: [
			"Reuniones de equipo regulares",
			"Capacitación integral en ciberseguridad",
			"Una copia del plan almacenada en una ubicación fuera del sitio",
			"Actualizaciones continuas de software"
		],
		correctIndex: 2,
		explanation: "Una consideración esencial es almacenar una copia del plan en una ubicación fuera del sitio, de forma segura. Esto asegura que el plan esté disponible incluso ante un desastre físico o ambiental."
	},
	{
		id: 43,
		domain: "D5",
		question: "En una comunicación usando Infraestructura de Clave Pública (PKI), ¿qué key debe usar el receptor para decrypt un mensaje cifrado por el emisor?",
		options: [
			"La clave privada del emisor",
			"La clave pública del receptor",
			"La clave privada del receptor",
			"La clave pública del emisor"
		],
		correctIndex: 2,
		explanation: "En PKI se utiliza cifrado asimétrico: el emisor cifra con la clave pública del receptor y el receptor descifra con su clave privada."
	},
	{
		id: 44,
		domain: "D5",
		question: "¿Qué representa la etapa final del data handling lifecycle?",
		options: [
			"Análisis de datos",
			"Destrucción",
			"Almacenamiento",
			"Transmisión"
		],
		correctIndex: 1,
		explanation: "La etapa final del data handling lifecycle es Destruction: eliminar los datos de forma segura cuando ya no se requieren, evitando recuperación o uso indebido."
	},
	{
		id: 45,
		domain: "D5",
		question: "¿Cuál es el método más efectivo para prevenir acceso no autorizado a información sensible obtenida de documentos físicos desechados en basureros (dumpsters)?",
		options: [
			"Triturar (shred) documentos antes de desecharlos",
			"Realizar capacitación en conciencia de seguridad regularmente para empleados",
			"Poner un candado al dumpster",
			"Contratar personal de seguridad para vigilar dumpsters"
		],
		correctIndex: 0,
		explanation: "La forma más efectiva de evitar que alguien recupere información sensible desde documentos desechados es triturarlos antes de su disposición. La capacitación ayuda, pero el control directo es destruir el soporte físico."
	},
	{
		id: 46,
		domain: "D5",
		question: "¿Qué key se usa para cifrar/verificar la información de identidad del emisor en una digital signature?",
		options: [
			"La clave privada del emisor",
			"La clave pública del emisor",
			"La clave privada del receptor",
			"La clave pública del receptor"
		],
		correctIndex: 1,
		explanation: "En digital signatures, el emisor firma con su clave privada y el receptor verifica usando la clave pública del emisor. Por eso, la clave pública del emisor es la que se usa para validar/“descifrar” la firma."
	},
	{
		id: 47,
		domain: "D3",
		question: "¿Cuál es un beneficio principal de implementar un mantrap como medida de physical security?",
		options: [
			"Autenticación biométrica",
			"Vigilancia CCTV",
			"Tailgating prevention",
			"Detección de intrusiones"
		],
		correctIndex: 2,
		explanation: "Un mantrap ayuda a prevenir tailgating: crea un punto de acceso controlado que normalmente permite el ingreso de una sola persona por vez, reduciendo el riesgo de que alguien entre pegado a otro."
	},
	{
		id: 48,
		domain: "D4",
		question: "¿Qué threat actor es más probable que esté patrocinado por organizaciones gubernamentales?",
		options: [
			"Hacktivistas",
			"Insider threats",
			"Ciberdelincuentes",
			"Nation states"
		],
		correctIndex: 3,
		explanation: "Los nation states son los más propensos a estar patrocinados por gobiernos. Suelen tener recursos y capacidades significativas para objetivos políticos, económicos o militares mediante operaciones cibernéticas."
	},
	{
		id: 49,
		domain: "D4",
		question: "¿Qué tipo de threat actor suele tener habilidades de bajo nivel y depende de herramientas fácilmente accesibles en internet para realizar ataques?",
		options: [
			"Nation-state actors",
			"Hacktivistas",
			"Personal interno",
			"Script Kiddie"
		],
		correctIndex: 3,
		explanation: "Un Script Kiddie es un threat actor con poca experiencia que usa scripts y herramientas ya hechas disponibles en internet para ejecutar ataques."
	},
	{
		id: 50,
		domain: "D2",
		question: "¿En qué fase del incident response plan suele abordarse la identificación del atacante?",
		options: [
			"Containment, Eradication, and Recovery",
			"Preparación",
			"Detection & Analysis",
			"Post-Incident Activity"
		],
		correctIndex: 2,
		explanation: "La identificación del atacante normalmente se aborda durante Detection & Analysis, cuando se analiza evidencia (logs, IOCs, trazas) para entender qué pasó y quién/qué lo originó. En Containment/Eradication/Recovery el foco está en contener y remediar."
	},
	{
		id: 51,
		domain: "D4",
		question: "¿Qué tipo de malware no requiere intervención del usuario para propagarse a otros dispositivos?",
		options: [
			"Trojan horse",
			"Spyware",
			"Gusano",
			"Adware (Software publicitario)"
		],
		correctIndex: 2,
		explanation: "Un worm puede propagarse sin intervención del usuario. A diferencia de un virus, no necesita adjuntarse a un programa host; puede replicarse y moverse por la red de forma independiente."
	},
	{
		id: 52,
		domain: "D5",
		question: "¿Qué política organizacional está diseñada para informar a nuevos empleados sobre el uso aceptable de sus laptops personales para trabajo dentro del entorno de oficina?",
		options: [
			"Bring Your Own Device (BYOD) Policy",
			"Política de Uso Aceptable",
			"Remote Access Policy",
			"Política de contraseñas"
		],
		correctIndex: 0,
		explanation: "La política BYOD (Bring Your Own Device) aborda el uso de dispositivos personales (por ejemplo laptops) en el trabajo, definiendo reglas, controles y expectativas para su uso en tareas laborales."
	},
	{
		id: 53,
		domain: "D2",
		question: "Después de un incidente de cybersecurity, ¿qué proceso crucial ocurre durante la fase post-incident activity del ciclo de incident response?",
		options: [
			"Realizando una evaluación de riesgos",
			"Documentar lessons learned del incidente",
			"Implementando new security controls",
			"Ejecutando una prueba de penetración"
		],
		correctIndex: 1,
		explanation: "En post-incident activity, es crucial documentar lessons learned: analizar la respuesta, identificar fortalezas, debilidades y oportunidades de mejora."
	},
	{
		id: 54,
		domain: "D5",
		question: "Al fortalecer el hash resultante de un password, ¿qué técnica común agrega un elemento único al password antes de hacer hashing?",
		options: [
			"Cifrado",
			"Ofuscación",
			"Tokenization",
			"Salado"
		],
		correctIndex: 3,
		explanation: "Salting consiste en agregar un valor único y aleatorio a cada password antes de hacer hashing. Así, incluso si dos usuarios tienen el mismo password, sus hashes serán diferentes por usar salts distintos."
	},
	{
		id: 55,
		domain: "D1",
		question: "¿Qué principio fundamental de seguridad se enfoca principalmente en asegurar uptime continuo de servidores?",
		options: [
			"Confidencialidad de datos",
			"Disponibilidad",
			"Integridad",
			"Autenticación"
		],
		correctIndex: 1,
		explanation: "Availability enfatiza que recursos y servicios deben estar accesibles y operativos de forma consistente (uptime)."
	},
	{
		id: 56,
		domain: "D5",
		question: "¿Cuál es el objetivo principal de implementar una password policy en el framework de cybersecurity de una organización?",
		options: [
			"Hacer cumplir passwords fuertes y un manejo seguro",
			"Mejorando la comodidad del usuario",
			"Detectando amenazas de ciberseguridad",
			"Minimizando vulnerabilidades de software"
		],
		correctIndex: 0,
		explanation: "El objetivo principal de una password policy es asegurar el uso de passwords fuertes y prácticas de gestión seguras (por ejemplo, longitud mínima, rotación, historial y MFA donde aplique)."
	},
	{
		id: 57,
		domain: "D1",
		question: "¿Cuál es la función principal cuando un usuario proporciona username y password?",
		options: [
			"Cifrado de datos",
			"Autorización",
			"Firewall protection",
			"Autenticación"
		],
		correctIndex: 3,
		explanation: "Cuando un usuario ingresa username y password, la función principal es Authentication (verificar identidad). Authorization ocurre después, para decidir qué puede hacer el usuario autenticado."
	},
	{
		id: 58,
		domain: "D3",
		question: "¿Qué modelo de control de acceso es más adecuado para segregar permisos entre los departamentos de Recursos Humanos, Finanzas, Mercadotecnia y TI?",
		options: [
			"DAC (Control de Acceso Discrecional)",
			"MAC (Control de Acceso Obligatorio)",
			"ABAC (Control de Acceso Basado en Atributos)",
			"RBAC (Control de Acceso Basado en Roles)"
		],
		correctIndex: 3,
		explanation: "RBAC es el más adecuado para segregar permisos entre áreas: el acceso se asigna según roles (por ejemplo, RH, Finanzas, Mercadotecnia, TI), simplificando la administración y el principio de mínimo privilegio."
	},
	{
		id: 59,
		domain: "D3",
		question: "¿Qué problema de seguridad surge cuando un usuario acumula más privilegios de los necesarios al cambiar de puesto dentro de una organización?",
		options: [
			"Credential leakage",
			"Privilege creep",
			"Control de acceso",
			"Fallo de autenticación"
		],
		correctIndex: 1,
		explanation: "Cuando un usuario acumula privilegios extra con el tiempo (por ejemplo, por cambios de rol) se conoce como privilege creep, y aumenta el riesgo de abuso o compromiso."
	},
	{
		id: 60,
		domain: "D1",
		question: "¿Cuál de las siguientes opciones consiste en tres authentication factors?",
		options: [
			"Password, fingerprint, and security question",
			"Username, password, and voice recognition",
			"Escaneo biométrico, frase de contraseña y escaneo de retina",
			"PIN number, smart card, facial recognition"
		],
		correctIndex: 3,
		explanation: "Three-factor authentication usa tres tipos distintos de factores: PIN (something you know), smart card (something you have) y facial recognition (something you are)."
	},
	{
		id: 61,
		domain: "D2",
		question: "¿Qué elemento es un componente integral de un business continuity plan integral?",
		options: [
			"Response procedures y checklists",
			"Cifrado de datos",
			"Capacitación en conciencia de seguridad",
			"Pruebas de penetración"
		],
		correctIndex: 0,
		explanation: "Response procedures y checklists son componentes integrales de un business continuity plan. Estos documentos describen acciones paso a paso a ejecutar durante y después de un incidente."
	},
	{
		id: 62,
		domain: "D1",
		question: "¿Cuál de los siguientes es un ejemplo de Información de Identificación Personal (PII)?",
		options: [
			"Número de seguro social",
			"Color favorito",
			"Mejor restaurante",
			"Nombre de la mascota"
		],
		correctIndex: 0,
		explanation: "PII es información que puede usarse para identificar a una persona. Un social security number es un ejemplo clásico de PII."
	},
	{
		id: 63,
		domain: "D1",
		question: "¿Qué disposición del General Data Protection Regulation (GDPR) permite a las personas solicitar a las organizaciones la eliminación completa de sus datos personales de los sistemas?",
		options: [
			"Derecho a la privacidad",
			"Derecho de borrado de datos",
			"Right to be Forgotten",
			"Personal Data Deletion"
		],
		correctIndex: 2,
		explanation: "GDPR otorga el Right to be Forgotten, que permite solicitar la eliminación completa de datos personales de los sistemas de una organización (con excepciones legales aplicables)."
	},
	{
		id: 64,
		domain: "D4",
		question: "¿Cuál es la principal ventaja de implementar soluciones de Prevención de Pérdida de Datos (DLP) en una estrategia de cybersecurity?",
		options: [
			"Aumento de velocidad de red",
			"Mejorar la autenticación de usuarios",
			"Prevenir Data Leakage",
			"Mejorar la seguridad de endpoints"
		],
		correctIndex: 2,
		explanation: "La principal ventaja de DLP es prevenir la divulgación no autorizada o filtración (data leakage) de datos sensibles. Las herramientas DLP monitorean, detectan y controlan transferencias de datos."
	},
	{
		id: 65,
		domain: "D4",
		question: "¿Qué concepto de cybersecurity enfatiza implementar salvaguardas en múltiples capas para lograr objetivos de seguridad?",
		options: [
			"Single Point of Failure",
			"Point-to-Point Security",
			"Single Layer Defense",
			"Defensa en Profundidad"
		],
		correctIndex: 3,
		explanation: "Defensa en Profundidad consiste en aplicar múltiples controles y medidas de seguridad en diferentes capas de sistemas e infraestructura, de modo que si un control falla, otros compensen."
	},
	{
		id: 66,
		domain: "D3",
		question: "¿Qué es la lista de control de acceso (ACL) de un objeto?",
		options: [
			"Una lista de todos los sujetos con acceso al objeto.",
			"Un registro de todos los cambios realizados al objeto.",
			"Un resumen del historial de seguridad del objeto.",
			"Un catálogo de todos los objetos dentro del sistema."
		],
		correctIndex: 0,
		explanation: "La ACL de un objeto define permisos y restricciones para sujetos (usuarios o procesos) sobre ese objeto."
	},
	{
		id: 67,
		domain: "D3",
		question: "¿Qué describe una capability list para un subject?",
		options: [
			"Una lista de todos los objetos del sistema a los que el subject tiene acceso.",
			"Una lista de vulnerabilidades potenciales en la seguridad del subject.",
			"Una lista de incidentes históricos que involucran al subject.",
			"Una lista de configuraciones del sistema aplicables al subject."
		],
		correctIndex: 0,
		explanation: "Una capability list para un subject es un registro de los objetos a los que ese subject (usuario o entidad) está autorizado a acceder."
	},
	{
		id: 68,
		domain: "D4",
		question: "¿Qué control de seguridad puede funcionar como medida física y también como medida técnica, según el contexto en que se implemente?",
		options: [
			"Firewall",
			"Cifrado",
			"Sistema de Control de Acceso Biométrico",
			"Sistema de Detección de Intrusiones"
		],
		correctIndex: 2,
		explanation: "Un Biometric Control de Acceso System puede operar como control físico (controlar acceso a instalaciones) y también como control técnico (integrado a sistemas de software para autenticación)."
	},
	{
		id: 69,
		domain: "D5",
		question: "¿Cuál de las siguientes NO se considera un proceso de hardening (endurecimiento) en ciberseguridad?",
		options: [
			"Actualizaciones regulares de software",
			"Políticas de contraseñas fuertes",
			"Segmentación de red",
			"Revisar logs para incidentes"
		],
		correctIndex: 3,
		explanation: "Revisar logs es parte de monitoreo continuo e incident response, no de hardening. El hardening (endurecimiento) reduce la superficie de ataque mediante configuraciones y controles preventivos."
	},
	{
		id: 70,
		domain: "D4",
		question: "¿Qué herramienta se usa comúnmente para fortalecer sistemas eliminando automáticamente programas no autorizados?",
		options: [
			"Firewall",
			"Endpoint Detection and Response (EDR)",
			"Sistema de Detección de Intrusiones (IDS)",
			"Cifrado"
		],
		correctIndex: 1,
		explanation: "EDR es una herramienta diseñada para detectar, investigar y responder a incidentes en endpoints; puede aislar, bloquear o remover software no autorizado según políticas y respuesta automatizada."
	},
	{
		id: 71,
		domain: "D4",
		question: "¿Qué tipo de cyber attack implica que un atacante se coloque entre dos dispositivos para interceptar los datos transmitidos entre ellos?",
		options: [
			"Ingeniería social",
			"On-path attack",
			"Phishing",
			"Ataque DDoS"
		],
		correctIndex: 1,
		explanation: "En un on-path attack, el atacante se posiciona entre dos extremos de la comunicación, pudiendo interceptar y potencialmente modificar los datos transmitidos."
	},
	{
		id: 72,
		domain: "D4",
		question: "¿Cuáles de los siguientes son ejemplos de side channel attacks?",
		options: [
			"Social engineering, phishing, and spear-phishing",
			"Encryption, hashing, and digital signatures",
			"Fault analysis, power monitoring, and timing",
			"Firewall configuration, intrusion detection systems, and antivirus scanning"
		],
		correctIndex: 2,
		explanation: "Los side channel attacks explotan información filtrada por canales no intencionales como consumo de energía, radiación electromagnética o patrones de timing."
	},
	{
		id: 73,
		domain: "D1",
		question: "¿Qué método de análisis de riesgo usa descriptores como high/medium/low para indicar severidad y likelihood?",
		options: [
			"Quantitative analysis",
			"Qualitative analysis",
			"Probabilistic analysis",
			"Statistical analysis"
		],
		correctIndex: 1,
		explanation: "El análisis cualitativo (qualitative analysis) usa etiquetas como high/medium/low para estimar severidad y likelihood, sin depender de valores numéricos exactos."
	},
	{
		id: 74,
		domain: "D3",
		question: "¿Qué es un objeto físico que un usuario posee y controla para fines de autenticación?",
		options: [
			"Contraseña",
			"Datos biométricos",
			"Token",
			"Security certificate"
		],
		correctIndex: 2,
		explanation: "Un token es un objeto físico que el usuario posee y controla para autenticación (por ejemplo, hardware token o smart card)."
	},
	{
		id: 75,
		domain: "D1",
		question: "¿Cuál es un ejemplo de Información de Salud Protegida (PHI)?",
		options: [
			"Hospital location",
			"Resultados de análisis de sangre",
			"Home Addresses",
			"Educational Qualifications"
		],
		correctIndex: 1,
		explanation: "PHI incluye información relacionada con salud que puede vincularse a una persona. Resultados de análisis de sangre (blood test results) encajan en PHI."
	},
	{
		id: 76,
		domain: "D1",
		question: "¿Qué significa la sigla 'IETF'?",
		options: [
			"Internet Engineering and Task Force",
			"International Electronic Task Force",
			"International Encryption Task Force",
			"Internet Engineering Task Force"
		],
		correctIndex: 3,
		explanation: "IETF significa Internet Engineering Task Force, una organización global que desarrolla y promueve estándares voluntarios de Internet."
	},
	{
		id: 77,
		domain: "D1",
		question: "En cybersecurity, ¿qué proceso se relaciona principalmente con cómo se gestiona una organización y cómo se toman decisiones?",
		options: [
			"Análisis de amenazas",
			"Gobernanza",
			"Pruebas de penetración",
			"Segmentación de red"
		],
		correctIndex: 1,
		explanation: "Governance es el marco y los procesos mediante los cuales una organización se dirige y controla. Incluye políticas, procedimientos y estructuras de toma de decisiones."
	},
	{
		id: 78,
		domain: "D5",
		question: "¿Cuál es la capacidad de las computadoras de comportarse y operar con características de inteligencia humana?",
		options: [
			"Ciberseguridad",
			"AI",
			"Métricas de computadora",
			"Explotación"
		],
		correctIndex: 1,
		explanation: "Esa capacidad se conoce como Artificial Intelligence (AI)."
	},
	{
		id: 79,
		domain: "D1",
		question: "¿Qué término describe cualquier elemento propiedad de la empresa que tenga valor?",
		options: [
			"Inventario",
			"Activo",
			"Responsabilidad legal",
			"Gasto"
		],
		correctIndex: 1,
		explanation: "Un asset es cualquier elemento propiedad de la empresa que tenga valor (hardware, software, datos, propiedad intelectual, etc.)."
	},
	{
		id: 80,
		domain: "D1",
		question: "¿Qué término describe mejor la magnitud del daño o pérdida que puede ocurrir cuando un threat explota una vulnerability?",
		options: [
			"Evaluación de amenazas",
			"Risk exposure",
			"Impacto",
			"Severidad de la vulnerabilidad"
		],
		correctIndex: 2,
		explanation: "Impact es el grado de daño o pérdida que puede ocurrir cuando un threat logra explotar una vulnerability."
	},
	{
		id: 81,
		domain: "D1",
		question: "¿Qué término describe mejor un incidente u ocurrencia que, si se materializa, podría generar consecuencias negativas para una empresa?",
		options: [
			"Amenaza",
			"Vulnerabilidad",
			"Riesgo",
			"Exposición"
		],
		correctIndex: 2,
		explanation: "Risk incluye la likelihood y el impact de que un threat explote una vulnerability, causando efectos adversos en assets, operaciones o reputación de la empresa."
	},
	{
		id: 82,
		domain: "D1",
		question: "¿A qué se refiere el término 'Risk Management Framework' (RMF) en el contexto de cybersecurity?",
		options: [
			"Un enfoque sistemático para identificar, evaluar y gestionar riesgos de una organización",
			"Un conjunto de guías para configurar Firewalls",
			"El proceso de cifrar datos sensibles",
			"Un framework para desarrollar software de forma segura"
		],
		correctIndex: 0,
		explanation: "Un Risk Management Framework (RMF) es un enfoque estructurado y sistemático para identificar, evaluar y gestionar riesgos de manera efectiva."
	},
	{
		id: 83,
		domain: "D1",
		question: "¿Qué documentación debería revisarse y actualizarse regularmente para asegurar que los procesos de seguridad sigan siendo efectivos?",
		options: [
			"Incident reports",
			"Manuales del empleado",
			"System logs",
			"Políticas"
		],
		correctIndex: 3,
		explanation: "Revisar y actualizar Policies regularmente es clave para mantener procesos efectivos. Las Policies definen reglas, guías y procedimientos que gobiernan los controles de seguridad."
	},
	{
		id: 84,
		domain: "D4",
		question: "¿Qué método puede prevenir efectivamente el uso de aplicaciones no autorizadas dentro de una organización?",
		options: [
			"Detección de aplicaciones",
			"Control de acceso",
			"Lista negra",
			"Lista blanca"
		],
		correctIndex: 3,
		explanation: "Una whitelist permite ejecutar solo aplicaciones aprobadas (lo permitido se define explícitamente), restringiendo software no autorizado."
	},
	{
		id: 85,
		domain: "D1",
		question: "¿Cuál es la fuente típica de penalizaciones asociadas a una falta de cumplimiento en ciberseguridad?",
		options: [
			"Capacitación de usuarios",
			"Comunicación interna",
			"Regulaciones",
			"Auditorías externas"
		],
		correctIndex: 2,
		explanation: "La fuente típica de penalizaciones es el incumplimiento de regulaciones. Los entes reguladores establecen reglas y estándares para proteger información sensible."
	},
	{
		id: 86,
		domain: "D1",
		question: "¿Qué representa la tríada CIA en el contexto de ciberseguridad?",
		options: [
			"Confidencialidad, Integridad y Disponibilidad",
			"Confidencialidad, Identidad y Autorización",
			"Confidencialidad, Intrusión y Autenticación",
			"Consistencia, Integridad y Autorización"
		],
		correctIndex: 0,
		explanation: "La tríada CIA es un concepto fundamental que agrupa tres principios: Confidencialidad, Integridad y Disponibilidad."
	},
	{
		id: 87,
		domain: "D4",
		question: "¿Qué es un evento en el contexto de ciberseguridad?",
		options: [
			"Una brecha de seguridad",
			"Cualquier ocurrencia observable en una red o sistema.",
			"Mantenimiento rutinario del sistema",
			"Instalación de software"
		],
		correctIndex: 1,
		explanation: "Un evento es cualquier ocurrencia observable en una red o sistema: logins, modificaciones de archivos, alertas del sistema o tráfico de red, entre otras."
	},
	{
		id: 88,
		domain: "D2",
		question: "¿Qué término describe mejor una ocurrencia imprevista que amenaza la Confidencialidad, Integridad o Disponibilidad de un sistema de información?",
		options: [
			"Vulnerabilidad",
			"Riesgo",
			"Amenaza",
			"Incidente"
		],
		correctIndex: 3,
		explanation: "Un Incidente es una ocurrencia imprevista que amenaza la Confidencialidad, Integridad o Disponibilidad de un sistema de información."
	},
	{
		id: 89,
		domain: "D2",
		question: "¿Qué término describe mejor un incidente en el que un atacante intenta obtener acceso no autorizado a un sistema o recurso?",
		options: [
			"Brecha de datos",
			"Intrusión",
			"Malware attack",
			"Ingeniería social"
		],
		correctIndex: 1,
		explanation: "Una Intrusion es un incidente en el que una entidad no autorizada intenta obtener acceso a un sistema o recurso."
	},
	{
		id: 90,
		domain: "D3",
		question: "¿Qué método de control de acceso utiliza campos magnéticos para acceso a edificios?",
		options: [
			"Smart card",
			"Reconocimiento biométrico",
			"Tarjeta de banda magnética",
			"PIN code"
		],
		correctIndex: 2,
		explanation: "Las magnetic stripe cards usan información codificada en una banda magnética para otorgar acceso. La lectura de esa banda permite un control de acceso práctico y común."
	},
	{
		id: 91,
		domain: "D3",
		question: "¿Qué método biométrico está diseñado para medir el patrón único de vasos sanguíneos en la parte posterior del ojo?",
		options: [
			"Escaneo de huella dactilar",
			"Escaneo de iris",
			"Retinal scan",
			"Facial recognition"
		],
		correctIndex: 2,
		explanation: "Retinal scan mide el patrón único de vasos sanguíneos en la retina (parte posterior del ojo)."
	},
	{
		id: 92,
		domain: "D3",
		question: "¿Qué método biométrico se enfoca en medir la región coloreada alrededor de la pupila en el ojo de una persona?",
		options: [
			"Escaneo de retina",
			"Escaneo de iris",
			"Facial recognition",
			"Escaneo de huella dactilar"
		],
		correctIndex: 1,
		explanation: "Iris scan mide patrones únicos del iris (la región coloreada que rodea la pupila)."
	},
	{
		id: 93,
		domain: "D3",
		question: "¿Qué método biométrico mide el flujo/patrón de sangre a través de las venas de una persona?",
		options: [
			"Venous scan",
			"Escaneo de huella dactilar",
			"Escaneo de iris",
			"Voice recognition"
		],
		correctIndex: 0,
		explanation: "Venous scan mide el patrón de venas bajo la piel. Este patrón es difícil de replicar y puede usarse para autenticación biométrica."
	},
	{
		id: 94,
		domain: "D4",
		question: "¿Qué capas del modelo OSI corresponden a la network interface layer en el modelo TCP/IP?",
		options: [
			"Enlace de datos y Física",
			"Transport and Network",
			"Session and Presentation",
			"Aplicación y enlace de datos"
		],
		correctIndex: 0,
		explanation: "En TCP/IP, la network interface layer se corresponde con dos capas en OSI: Data Link y Physical."
	},
	{
		id: 95,
		domain: "D4",
		question: "En el contexto de OSI y TCP/IP, ¿qué capas de OSI corresponden a la application layer de TCP/IP?",
		options: [
			"Physical and Data Link",
			"Session, Presentation, and Application",
			"Network and Transport",
			"Enlace de datos y Red"
		],
		correctIndex: 1,
		explanation: "En OSI, las tres capas superiores (Session, Presentation y Application) se mapean a la application layer del modelo TCP/IP."
	},
	{
		id: 96,
		domain: "D4",
		question: "¿Qué tipo de ataque implica intentar adivinar un password usando una lista extensa de passwords comúnmente usados?",
		options: [
			"Fuerza bruta",
			"Diccionario",
			"Phishing",
			"Suplantación"
		],
		correctIndex: 1,
		explanation: "Un ataque de diccionario prueba sistemáticamente palabras/frases/combinaciones comunes desde una lista (diccionario) para adivinar un password."
	},
	{
		id: 97,
		domain: "D4",
		question: "¿Qué cloud deployment model proporciona un pool de recursos compartidos para uso del público en general?",
		options: [
			"Privado",
			"Híbrido",
			"Comunidad",
			"Público"
		],
		correctIndex: 3,
		explanation: "El modelo Public ofrece un pool de recursos compartidos abierto al público general. Los recursos normalmente son operados por un proveedor tercero."
	},
	{
		id: 98,
		domain: "D5",
		question: "¿Cuál es el método más efectivo para destruir datos en un disk que ya no se necesita?",
		options: [
			"Formatting the disk",
			"Eliminando archivos y directorios",
			"Overwriting the disk with random data",
			"Trituración del disco"
		],
		correctIndex: 3,
		explanation: "El método más efectivo es destruir físicamente el disk (shredding). Al destruir el medio de almacenamiento se vuelve irrecuperable."
	},
	{
		id: 99,
		domain: "D3",
		question: "¿Qué authentication factor corresponde a keystroke dynamics?",
		options: [
			"Algo que sabes",
			"Algo que tienes",
			"Algo que eres",
			"Algún lugar donde estás"
		],
		correctIndex: 2,
		explanation: "Keystroke dynamics es un factor biométrico (something you are) basado en el patrón/rítmica de tecleo de una persona."
	},
	{
		id: 100,
		domain: "D1",
		question: "¿Qué principio de seguridad se busca mantener durante un forensic examination al hacer una copia del evidence hard disk y generar hashes del disk original y de la copia?",
		options: [
			"Confidencialidad",
			"Disponibilidad",
			"Integridad",
			"Autenticación"
		],
		correctIndex: 2,
		explanation: "En un forensic examination, mantener la Integrity de la evidencia es crítico. Hacer una copia y comparar hashes del original y la copia demuestra que los datos no han sido alterados."
	}
];
