// 100 preguntas (traducidas) con respuesta correcta y explicación
// Nota: se mantienen términos técnicos en inglés (Firewall, SIEM, DHCP, etc.)

const QUESTIONS = [
  {
    id: 1,
    domain: "D1",
    question: "¿Qué método de ataque consiste en engañar a los usuarios para que revelen información confidencial mediante email?",
    options: ["Phishing", "Pharming", "Suplantación", "Ransomware"],
    correctIndex: 0,
    explanation: "Phishing es un ataque de ingeniería social donde emails o sitios falsos imitan entidades legítimas para que el usuario entregue credenciales o datos. Pharming redirige tráfico a sitios fraudulentos, Spoofing falsifica el origen (y puede usarse como parte de Phishing), y Ransomware cifra datos para extorsionar; no busca principalmente que el usuario divulgue información." 
  },
  {
    id: 2,
    domain: "D2",
    question: "Durante la fase de contención de Incident Response, ¿qué actividad es apropiada para mitigar el impacto de un incidente?",
    options: ["Recolectar evidencia para análisis forense", "Notificar inmediatamente a las partes interesadas", "Aplicar parches en sistemas afectados", "Desconectar sistemas contaminados de la red"],
    correctIndex: 3,
    explanation: "En contención el objetivo es frenar la propagación y limitar daño. Aislar/desconectar sistemas comprometidos reduce el alcance. Forensics y comunicación son importantes, pero la prioridad inmediata en contención es detener el avance del incidente; aplicar patches suele venir después de entender el estado del sistema." 
  },
  {
    id: 3,
    domain: "D3",
    question: "¿Qué técnica de diseño implica un Firewall que bloqueará todo el tráfico si ocurre una anomalía del sistema?",
    options: ["Fail-Safe", "Fail-Open", "Fail-Secure", "Fail-Closed"],
    correctIndex: 3,
    explanation: "Fail-Closed (fail closed) significa que ante falla/anomalía el sistema niega acceso por defecto. En un Firewall, eso se traduce en bloquear todo el tráfico para priorizar seguridad. Fail-Open haría lo contrario (permitir)." 
  },
  {
    id: 4,
    domain: "D4",
    question: "¿Qué enfoque busca principalmente disuadir actividades criminales mediante metodologías de diseño ambiental efectivas?",
    options: ["Cifrado TLS", "Sistema de Detección de Intrusiones (IDS)", "Prevención del Crimen Mediante Diseño Ambiental (CPTED)", "Listas de Control de Acceso (ACL)"],
    correctIndex: 2,
    explanation: "CPTED se centra en diseñar entornos físicos para reducir oportunidades de crimen (vigilancia natural, control de acceso físico, refuerzo territorial). TLS/IDS/ACL son controles técnicos/lógicos, no de diseño ambiental." 
  },
  {
    id: 5,
    domain: "D5",
    question: "¿En qué fase de configuration management es crucial validar que el baseline actual coincide con el baseline preliminar más todos los cambios aprobados secuencialmente?",
    options: ["Identificación y control", "Gestión de cambios de configuración", "Contabilidad de estado", "Verificación y auditoría"],
    correctIndex: 3,
    explanation: "Verification and audit se enfoca en comprobar que el estado real del sistema coincide con lo documentado/esperado: baseline inicial + cambios aprobados. La gestión de cambios controla cambios; status accounting reporta estados; identification/control define ítems y controles." 
  },
  {
    id: 6,
    domain: "D2",
    question: "Trabajando tarde, un empleado ve a un colega intentando llevarse documentos confidenciales. ¿Qué debe hacer?",
    options: ["Informar a la gerencia o autoridad interna correspondiente", "Reportar de inmediato a la policía", "Confrontar al colega", "Ignorar y seguir trabajando"],
    correctIndex: 0,
    explanation: "La respuesta correcta es informar a la gerencia/autoridad interna según políticas. Llamar a autoridades puede ser necesario, pero normalmente se sigue primero el proceso interno. Confrontar puede escalar el riesgo; ignorar expone a la organización." 
  },
  {
    id: 7,
    domain: "D1",
    question: "¿Qué paso debe ocurrir antes de otorgar a un usuario acceso a un sistema?",
    options: ["Autenticación del usuario", "Cifrado de datos del usuario", "Validación del usuario", "Capacitación y concienciación del usuario"],
    correctIndex: 2,
    explanation: "La validación verifica que el usuario sea legítimo y elegible para acceder (por ejemplo, que exista, que corresponda, que esté autorizado a solicitar acceso). Authentication verifica credenciales; training y encryption no son el paso previo directo para otorgar acceso." 
  },
  {
    id: 8,
    domain: "D1",
    question: "¿En qué factor de autenticación existe la mayor posibilidad de false rejection (rechazar a un usuario válido)?",
    options: ["Algo que sabes", "Algo que eres", "Algo que tienes", "Algo que haces"],
    correctIndex: 1,
    explanation: "Biometría (something you are) puede fallar por condiciones ambientales, cambios físicos, o errores del sensor, aumentando false rejection. Los otros factores suelen tener menor tasa de rechazo falso (aunque pueden fallar por otros motivos)." 
  },
  {
    id: 9,
    domain: "D5",
    question: "¿Cuál es el enfoque más efectivo para hacer cambios en sistemas minimizando impactos negativos?",
    options: ["Implementación rápida sin evaluación", "Procesos sistemáticos de gestión de cambios", "Ajustes ad hoc sin documentación", "Modificación aleatoria y monitoreo"],
    correctIndex: 1,
    explanation: "Un proceso formal de gestión de cambios planifica, evalúa, documenta y comunica cambios, reduciendo riesgo y efectos colaterales. Cambios ad hoc o rápidos sin evaluación suelen introducir fallas." 
  },
  {
    id: 10,
    domain: "D3",
    question: "¿Cuál es la descripción más precisa de Mandatory Control de Acceso (MAC)?",
    options: ["Acceso centralizado con security labels aplicadas por el sistema", "Control descentralizado definido por usuarios", "Control basado en roles y permisos definido por usuarios", "Control basado en biometría"],
    correctIndex: 0,
    explanation: "MAC aplica decisiones de acceso basadas en etiquetas/clasificación y es impuesto por el sistema (security kernel). No depende del usuario/propietario como en DAC, ni es simplemente RBAC." 
  },
  {
    id: 11,
    domain: "D4",
    question: "¿Qué threat actor permanece dentro de la red por largo tiempo usando mecanismos sofisticados para ocultarse y explotar?",
    options: ["Amenaza interna", "Script Kiddie", "Amenaza Persistente Avanzada (APT)", "Hacktivista"],
    correctIndex: 2,
    explanation: "APT se caracteriza por persistencia, sigilo y recursos avanzados, permaneciendo largos periodos para espionaje/exfiltración. Script kiddies son poco sofisticados; hacktivists suelen ser más visibles; insider threat es interno, pero no define necesariamente sofisticación/persistencia." 
  },
  {
    id: 12,
    domain: "D3",
    question: "¿Cuál es el área principal de preocupación con cuentas privilegiadas comparadas con cuentas normales?",
    options: ["Vulnerabilidades de autenticación", "Impacto del compromiso", "Prevención de pérdida de datos", "Protocolos de cifrado de red"],
    correctIndex: 1,
    explanation: "El mayor riesgo de cuentas privilegiadas es el impacto si se comprometen: control amplio, cambios críticos, acceso a sistemas sensibles. Otros temas aplican a todas las cuentas, pero no capturan el riesgo diferencial principal." 
  },
  {
    id: 13,
    domain: "D4",
    question: "¿En qué mecanismo puede apoyarse una organización para gestionar y regular conectividad y accesibilidad de dispositivos a la red?",
    options: ["VPN", "Firewall", "NAC (Control de Acceso a la Red)", "IDS/IPS"],
    correctIndex: 2,
    explanation: "NAC controla qué dispositivos pueden conectarse y bajo qué políticas (cumplimiento, autenticación, postura). Firewall filtra tráfico; VPN cifra túneles; IDS/IPS detecta/previene intrusiones." 
  },
  {
    id: 14,
    domain: "D1",
    question: "¿En qué fase del risk management lifecycle se reúnen todos los escenarios potenciales que podrían representar un riesgo?",
    options: ["Análisis", "Identificación", "Mitigación", "Evaluación"],
    correctIndex: 1,
    explanation: "Identification consiste en identificar escenarios, amenazas y riesgos potenciales. Analysis/evaluation valoran probabilidad/impacto; mitigation aplica tratamientos." 
  },
  {
    id: 15,
    domain: "D1",
    question: "Una empresa decide detener temporalmente todas las transacciones para evitar ataques. ¿Qué opción de tratamiento de riesgo representa?",
    options: ["Evitación", "Transferencia", "Aceptación", "Mitigación"],
    correctIndex: 0,
    explanation: "Evitación elimina la exposición al riesgo deteniendo la actividad. Mitigation reduce probabilidad/impacto sin detener totalmente; transference pasa el riesgo a terceros; acceptance asume consecuencias." 
  },
  {
    id: 16,
    domain: "D3",
    question: "¿Qué técnica puede prevenir que empleados coludan para cometer fraude?",
    options: ["Segregación de funciones", "Mínimo privilegio", "Control de acceso basado en roles", "Inicio de sesión único"],
    correctIndex: 0,
    explanation: "Segregation of duties divide tareas críticas para que una sola persona no controle todo el proceso, reduciendo fraude/colusión y aumentando detección." 
  },
  {
    id: 17,
    domain: "D5",
    question: "Tras generar un vulnerability report de un servidor crítico, ¿cuál es la mejor acción del analista?",
    options: ["Proteger el reporte con contraseña para mantener confidencialidad", "Subirlo a un servidor público", "Enviarlo por email a todos", "Imprimir varias copias y distribuir"],
    correctIndex: 0,
    explanation: "Un vulnerability report contiene información sensible. Protegerlo (por ejemplo, con password y control de acceso) reduce exposición. Publicarlo o distribuirlo masivamente aumenta el riesgo; copias físicas se pierden fácilmente." 
  },
  {
    id: 18,
    domain: "D3",
    question: "¿Qué modelo de control de acceso es más adecuado para operaciones militares/navales?",
    options: ["DAC", "RBAC", "MAC", "ABAC"],
    correctIndex: 2,
    explanation: "MAC usa labels y clearance, alineado con jerarquías estrictas y need-to-know típico en ambientes militares." 
  },
  {
    id: 19,
    domain: "D4",
    question: "¿Qué dirección se asigna a dispositivos en una red y opera en la capa 3?",
    options: ["Dirección MAC", "Dirección DNS", "Dirección TCP", "Dirección IP"],
    correctIndex: 3,
    explanation: "IP Address opera en OSI layer 3 (Network). MAC es layer 2. DNS es un sistema de nombres (layer 7). TCP no es una 'dirección' sino un protocolo de transporte (layer 4)." 
  },
  {
    id: 20,
    domain: "D5",
    question: "¿Qué política es más adecuada para guiar el uso de dispositivos personales dentro de una organización?",
    options: ["COPE", "CYOD", "MDM", "BYOD"],
    correctIndex: 3,
    explanation: "BYOD (Bring Your Own Device) define reglas y controles para uso de dispositivos personales. COPE/CYOD implican propiedad/selección corporativa; MDM es gestión, no la política de uso en sí." 
  },
  {
    id: 21,
    domain: "D4",
    question: "¿Qué protocolo puede asignar una IP temporal a un usuario en la red cuando tiene problemas de conexión?",
    options: ["DNS", "DHCP", "SNMP", "FTP"],
    correctIndex: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) asigna direcciones IP de forma dinámica (temporales/lease). DNS resuelve nombres; SNMP gestiona/monitorea; FTP transfiere archivos." 
  },
  {
    id: 22,
    domain: "D5",
    question: "En cybersecurity, ¿cómo difieren los métodos de cifrado asymmetric y symmetric?",
    options: ["Asymmetric usa dos claves y symmetric usa una sola", "Asymmetric usa una sola y symmetric usa dos", "Ambos usan una sola", "Ambos usan dos"],
    correctIndex: 0,
    explanation: "Asymmetric (public/clave privada) usa un par de claves. Symmetric usa la misma clave para cifrar y descifrar." 
  },
  {
    id: 23,
    domain: "D3",
    question: "¿Cuál es el principio principal de Role-Based Control de Acceso (RBAC)?",
    options: ["Asignar permisos por jerarquía individual", "Usar MFA para regular acceso", "Aplicar reglas del Firewall", "Configurar roles para determinar permisos"],
    correctIndex: 3,
    explanation: "RBAC asigna permisos a roles (funciones) y los usuarios heredan permisos según su rol. No es un mecanismo de MFA ni de Firewall." 
  },
  {
    id: 24,
    domain: "D1",
    question: "¿Qué mecanismo de autenticación es ampliamente considerado el más seguro?",
    options: ["Autenticación de un solo factor", "Autenticación biométrica", "Autenticación multifactor", "Autenticación basada en contraseña"],
    correctIndex: 2,
    explanation: "MFA reduce el riesgo porque exige 2+ factores independientes; si uno se compromete, los demás siguen protegiendo el acceso." 
  },
  {
    id: 25,
    domain: "D1",
    question: "¿Qué tipo de security control es un sistema biométrico que permite entrada a las instalaciones de un edificio?",
    options: ["Lógico", "Administrativo", "Físico", "Técnico"],
    correctIndex: 2,
    explanation: "Si el control regula entrada física a un edificio, se clasifica como Physical control (aunque use tecnología)." 
  },
  {
    id: 26,
    domain: "D5",
    question: "¿En cuál proceso normalmente se realiza el review y approval de todos los cambios (incluyendo patches/updates)?",
    options: ["Control de acceso", "Control de cambios", "Evaluación de riesgos", "Respuesta a incidentes"],
    correctIndex: 1,
    explanation: "Change control gobierna solicitud, evaluación, aprobación y ejecución de cambios en sistemas/configuraciones." 
  },
  {
    id: 27,
    domain: "D3",
    question: "¿Qué medida de acceso físico está diseñada principalmente para evitar que un vehículo embista un edificio?",
    options: ["CCTV", "Bolardo", "Torniquete", "Tarjetas de control de acceso"],
    correctIndex: 1,
    explanation: "Bollards son barreras físicas anti-vehículos para impedir entrada/impacto vehicular." 
  },
  {
    id: 28,
    domain: "D1",
    question: "¿Qué describe mejor SLE (Single Loss Expectancy) en risk assessment?",
    options: ["Monto esperado que se perdería si el evento ocurre una vez", "Costo de medidas de seguridad", "Impacto total en periodo largo", "Pérdida por tiempo de inactividad"],
    correctIndex: 0,
    explanation: "SLE es la pérdida esperada por un solo evento/ocurrencia de un riesgo (una vez)." 
  },
  {
    id: 29,
    domain: "D4",
    question: "¿Cuál afirmación es incorrecta sobre TCP (Transmission Control Protocol)?",
    options: ["TCP es sin conexión", "TCP asegura entrega confiable y ordenada", "TCP usa negociación de tres vías", "TCP provee verificación y recuperación de errores"],
    correctIndex: 0,
    explanation: "TCP es connection-oriented, no connectionless. Las demás afirmaciones describen características reales de TCP." 
  },
  {
    id: 30,
    domain: "D4",
    question: "¿Qué modelo de nube despliega recursos consumibles por cualquier persona según necesidad?",
    options: ["Nube privada", "Nube pública", "Nube híbrida", "Nube comunitaria"],
    correctIndex: 1,
    explanation: "Public Cloud ofrece recursos al público general (clientes múltiples) vía internet." 
  },
  {
    id: 31,
    domain: "D4",
    question: "¿Qué modelo de cloud service entrega a usuarios una app de file sharing con version control accesible por internet?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    correctIndex: 0,
    explanation: "SaaS entrega software listo (aplicación) como servicio. PaaS/IaaS son capas para construir/operar; DaaS entrega escritorios." 
  },
  {
    id: 32,
    domain: "D5",
    question: "¿Cuál es la secuencia correcta de etapas del ciclo de vida de datos?",
    options: ["Almacenamiento, Uso, Archivado, Creación, Destrucción, Compartir", "Compartir, Archivado, Destrucción, Uso, Almacenamiento, Creación", "Uso, Creación, Destrucción, Archivado, Compartir, Almacenamiento", "Creación, Almacenamiento, Uso, Compartir, Archivado, Destrucción"],
    correctIndex: 3,
    explanation: "El ciclo típico inicia con creación, luego almacenamiento, uso, compartición, archivado y finalmente destrucción." 
  },
  {
    id: 33,
    domain: "D4",
    question: "¿Qué documento asegura que un vendor outsourced cumpla consistentemente el nivel de servicio acordado?",
    options: ["Contrato de proveedor", "MOU", "SOW", "SLA"],
    correctIndex: 3,
    explanation: "SLA (Acuerdo de Nivel de Servicio) define métricas/objetivos de servicio, responsabilidades y penalidades." 
  },
  {
    id: 34,
    domain: "D5",
    question: "¿Qué técnica de sanitization usa campos magnéticos fuertes para eliminar datos del medio?",
    options: ["Desmagnetización", "Cifrado", "Sobrescritura", "Purgado"],
    correctIndex: 0,
    explanation: "Degaussing desmagnetiza medios magnéticos para destruir datos (especialmente discos/cintas magnéticas)." 
  },
  {
    id: 35,
    domain: "D1",
    question: "¿Qué suele excluirse de un policy document?",
    options: ["Procedimientos de incident response", "Reglas de conducta de empleados", "Diagramas detallados de network architecture", "Guías para updates regulares"],
    correctIndex: 2,
    explanation: "Las políticas son de alto nivel; los detalles técnicos como diagramas de arquitectura suelen ir en documentación técnica/estándares, no en políticas." 
  },
  {
    id: 36,
    domain: "D4",
    question: "¿Qué término describe a un empleado que intenta vender información sensible en la dark web por problemas financieros?",
    options: ["Exfiltrador de datos", "Amenaza interna", "Hacker externo", "Actor malicioso"],
    correctIndex: 1,
    explanation: "Un insider threat es alguien dentro de la organización que representa un riesgo (intencional o no)." 
  },
  {
    id: 37,
    domain: "D2",
    question: "Tras confirmar un incidente de seguridad en curso, ¿qué debe hacer un administrador de seguridad como paso inmediato?",
    options: ["Informar a todos los empleados", "Activar el plan de respuesta a incidentes", "Aislar sistemas afectados", "Investigar la fuente"],
    correctIndex: 1,
    explanation: "Al confirmar el incidente, lo primero es activar el plan para coordinar roles/acciones; contención e investigación se ejecutan dentro de ese plan." 
  },
  {
    id: 38,
    domain: "D1",
    question: "¿Cuál es la función principal de un bollard como control físico en seguridad?",
    options: ["Restringir vehículos de entrada no autorizada", "Facilitar flujo de tráfico", "Mejorar seguridad peatonal", "Aportar estética"],
    correctIndex: 0,
    explanation: "El propósito de seguridad del bollard es controlar/restringir acceso vehicular y mitigar amenazas basadas en vehículos." 
  },
  {
    id: 39,
    domain: "D4",
    question: "¿A qué familia pertenecen keyloggers, worms y bots?",
    options: ["Cifrado", "Redes", "Autenticación", "Malware"],
    correctIndex: 3,
    explanation: "Keyloggers, worms y bots son tipos de malware (software malicioso)." 
  },
  {
    id: 40,
    domain: "D2",
    question: "¿Qué objetivo busca asegurar que servicios se mantengan operativos ante una interrupción de operaciones normales?",
    options: ["Confidencialidad de datos", "Segmentación de red", "Continuidad del negocio", "Evaluación de vulnerabilidades"],
    correctIndex: 2,
    explanation: "Business continuity se centra en mantener funciones/servicios esenciales durante y después de una interrupción." 
  },
  {
    id: 41,
    domain: "D5",
    question: "¿Qué técnica NO es un método efectivo de destrucción de datos?",
    options: ["Sobrescritura con patrones aleatorios múltiples veces", "Trituración física del disco", "Formateo del disco", "Desmagnetización"],
    correctIndex: 2,
    explanation: "Formatting normalmente no elimina datos de forma irrecuperable; suele permitir recuperación. Overwriting, shredding y degaussing son métodos más efectivos." 
  },
  {
    id: 42,
    domain: "D4",
    question: "¿Qué información sería difícil de obtener mediante network scanning?",
    options: ["Contraseñas root", "IPs de dispositivos", "Versiones de SO", "Puertos abiertos"],
    correctIndex: 0,
    explanation: "El scanning puede inferir IPs, puertos y a veces OS. Obtener root passwords vía scanning es altamente improbable porque no se exponen así." 
  },
  {
    id: 43,
    domain: "D1",
    question: "¿Qué tipo de security control es un sistema biométrico usado para autenticar acceso a un dispositivo en la red?",
    options: ["Control administrativo", "Control técnico", "Control físico", "Control detectivo"],
    correctIndex: 1,
    explanation: "Si la biometría autentica acceso lógico a un dispositivo/sistema, se clasifica como Technical control (implementado mediante tecnología)." 
  },
  {
    id: 44,
    domain: "D5",
    question: "¿Cuál es el enfoque más efectivo para actualizar dispositivos con los últimos patches?",
    options: ["Actualizar todos en horas pico", "Actualizar uno a uno sin testing", "Aplazar indefinidamente", "Probar parches en un subconjunto pequeño antes de desplegar"],
    correctIndex: 3,
    explanation: "Probar primero en un grupo piloto valida compatibilidad y reduce riesgo de outage masivo antes del despliegue global." 
  },
  {
    id: 45,
    domain: "D5",
    question: "¿Cuál es la técnica más efectiva para proteger datos en reposo (stored) cuando no están en uso ni en tránsito?",
    options: ["Ofuscación de datos", "Firewall", "Control de acceso", "Cifrado"],
    correctIndex: 3,
    explanation: "Encryption protege datos at rest haciendo el contenido ilegible sin la clave. Firewalls/control de acceso ayudan, pero no sustituyen cifrado del dato." 
  },
  {
    id: 46,
    domain: "D1",
    question: "¿Qué documento contiene instrucciones paso a paso para realizar una tarea conforme al framework aprobado?",
    options: ["Política", "Estándar", "Procedimiento", "Guía"],
    correctIndex: 2,
    explanation: "Procedure describe cómo hacer algo (pasos). Policy es alto nivel; standard define requisitos; guideline recomienda." 
  },
  {
    id: 47,
    domain: "D5",
    question: "¿Qué técnica criptográfica usa un par de claves distinto: una para cifrar y otra para descifrar?",
    options: ["Simétrico", "Asimétrico", "Hash", "Transposición"],
    correctIndex: 1,
    explanation: "Asymmetric (public/clave privada) usa dos claves relacionadas. Symmetric usa una sola clave compartida." 
  },
  {
    id: 48,
    domain: "D5",
    question: "¿Qué asegura que updates tecnológicos/arquitectónicos cumplan un nivel mínimo de requisitos de seguridad?",
    options: ["Pistas de auditoría", "Pruebas de penetración", "Líneas base de seguridad", "Evaluaciones de riesgo"],
    correctIndex: 2,
    explanation: "Security baselines definen configuraciones/requisitos mínimos aceptables; sirven como referencia para validar cambios." 
  },
  {
    id: 49,
    domain: "D1",
    question: "En control de acceso, ¿qué función asegura que una persona sea responsable de sus acciones en el sistema?",
    options: ["Autenticación", "Autorización", "Responsabilidad", "Integridad"],
    correctIndex: 2,
    explanation: "La responsabilidad (accountability) implica trazabilidad (logs/auditoría) para atribuir acciones a un usuario." 
  },
  {
    id: 50,
    domain: "D4",
    question: "¿Qué protocolo se considera inseguro?",
    options: ["FTP", "SSH", "HTTPS", "SFTP"],
    correctIndex: 0,
    explanation: "FTP transmite en plaintext. SSH/HTTPS/SFTP proporcionan cifrado y autenticación." 
  },
  {
    id: 51,
    domain: "D5",
    question: "¿Qué método de cifrado es más adecuado para proteger datos sensibles almacenados en un hard disk?",
    options: ["DES", "RSA", "AES", "3DES"],
    correctIndex: 2,
    explanation: "AES es un estándar moderno, robusto y eficiente para cifrado symmetric de grandes volúmenes de datos (data at rest)." 
  },
  {
    id: 52,
    domain: "D5",
    question: "¿Qué característica define mejor el cifrado symmetric?",
    options: ["Usa dos claves separadas", "Una clave por destinatario", "Cifra en reposo pero no en tránsito", "Misma clave para cifrar y descifrar"],
    correctIndex: 3,
    explanation: "En symmetric encryption se usa la misma clave compartida para cifrado y descifrado; el reto principal es el key exchange." 
  },
  {
    id: 53,
    domain: "D4",
    question: "¿Qué medida de seguridad es un control preventivo contra intrusiones de red?",
    options: ["Firewall", "Cifrado de datos", "IDS", "IPS"],
    correctIndex: 3,
    explanation: "IPS (Sistema de Prevención de Intrusiones) bloquea amenazas en tiempo real. IDS detecta/alerta; encryption protege datos; Firewall filtra, pero IPS es el control de prevención específico aquí." 
  },
  {
    id: 54,
    domain: "D1",
    question: "¿Qué tipo de control es capacitación en conciencia de seguridad?",
    options: ["Técnico", "Físico", "Administrativo", "Preventivo"],
    correctIndex: 2,
    explanation: "La capacitación es un control administrativo (políticas, procedimientos, capacitación). Puede ser preventivo, pero su clasificación principal es administrativa." 
  },
  {
    id: 55,
    domain: "D4",
    question: "¿Qué característica define a un worm?",
    options: ["Auto-propagación", "Cifrado de datos", "Imitar software legítimo", "Dirigido a individuos específicos"],
    correctIndex: 0,
    explanation: "Worms se autopropagan explotando vulnerabilidades y se diseminan sin intervención humana directa." 
  },
  {
    id: 56,
    domain: "D4",
    question: "¿Qué tecnología permite autenticación a múltiples sistemas autorizados con un solo sign-in?",
    options: ["VPN", "SSO", "PKI", "IDS"],
    correctIndex: 1,
    explanation: "SSO (Inicio de Sesión Único) permite un login para acceder a múltiples aplicaciones/sistemas autorizados." 
  },
  {
    id: 57,
    domain: "D1",
    question: "¿Qué componente de control de acceso autentica usuarios y almacena datos de forma segura?",
    options: ["Escáner biométrico", "Sistema de gestión de contraseñas", "Tarjeta inteligente", "Autenticación de firewall"],
    correctIndex: 2,
    explanation: "Tarjeta Inteligente almacena credenciales/claves en un chip y se usa como factor 'algo que tienes' para autenticación." 
  },
  {
    id: 58,
    domain: "D1",
    question: "¿Qué tipo de control es segmentar parte de la red usando un Firewall?",
    options: ["Detectivo", "Preventivo", "Correctivo", "Directivo"],
    correctIndex: 1,
    explanation: "La segmentación con Firewall busca prevenir accesos no autorizados y limitar movimiento lateral: es un control preventivo." 
  },
  {
    id: 59,
    domain: "D1",
    question: "¿Qué función de seguridad verifica la identidad presentada por un usuario?",
    options: ["Autorización", "Autenticación", "Cifrado", "Integridad"],
    correctIndex: 1,
    explanation: "Authentication valida que el usuario es quien dice ser. Authorization decide qué puede hacer luego de autenticarse." 
  },
  {
    id: 60,
    domain: "D2",
    question: "¿Qué disaster recovery site es conocido por requerir el menor tiempo de puesta en marcha en emergencia?",
    options: ["Sitio caliente", "Sitio frío", "Sitio tibio", "Sitio móvil"],
    correctIndex: 0,
    explanation: "Hot site está listo y operativo casi de inmediato (infraestructura + datos actualizados)." 
  },
  {
    id: 61,
    domain: "D1",
    question: "¿Qué tipo de control implica restaurar datos corruptos desde un backup?",
    options: ["Correctivo", "Preventivo", "Detectivo", "Disuasivo"],
    correctIndex: 0,
    explanation: "Restaurar desde backups corrige/recupera tras un incidente: es un corrective control." 
  },
  {
    id: 62,
    domain: "D5",
    question: "¿Qué método de sanitización NO es suficiente para desechar de forma segura un hard drive decommissioned?",
    options: ["Borrado", "Desmagnetización", "Sobrescritura", "Trituración"],
    correctIndex: 0,
    explanation: "Erasing (borrar/quick format) no elimina datos de forma irrecuperable. Overwriting, degaussing o shredding son más seguros." 
  },
  {
    id: 63,
    domain: "D3",
    question: "¿Qué característica define mejor Discretionary Control de Acceso (DAC)?",
    options: ["Reglas definidas por sysadmin", "Permisos por rol", "Decisiones por etiquetas de seguridad", "El dueño del dato define reglas de acceso"],
    correctIndex: 3,
    explanation: "En DAC, el owner controla permisos sobre el recurso y puede conceder acceso a otros." 
  },
  {
    id: 64,
    domain: "D5",
    question: "¿Qué componente es esencial en un programa de capacitación en conciencia de seguridad?",
    options: ["Técnicas avanzadas de cifrado", "Firewalls e IDS", "Gestión de parches regular", "Prevención de ingeniería social"],
    correctIndex: 3,
    explanation: "Awareness debe cubrir el factor humano: reconocimiento y prevención de ingeniería social (Phishing, pretexting, etc.)." 
  },
  {
    id: 65,
    domain: "D1",
    question: "¿Cuál de los siguientes controles es físico?",
    options: ["Esclusa de seguridad", "Concienciación", "Prevención de Pérdida de Datos", "Verificación de antecedentes"],
    correctIndex: 0,
    explanation: "Mantrap es un mecanismo físico de control de acceso (dos puertas interlock) para evitar tailgating." 
  },
  {
    id: 66,
    domain: "D4",
    question: "¿Qué modelo de servicio en la nube es mejor para aliviar la responsabilidad de gestionar hardware de centro de datos (servidores, red, almacenamiento)?",
    options: ["SaaS", "IaaS", "PaaS", "On-premises hosting"],
    correctIndex: 1,
    explanation: "IaaS mueve la infraestructura física al proveedor (hardware/virtualización/almacenamiento), mientras el cliente gestiona lo que corre encima." 
  },
  {
    id: 67,
    domain: "D3",
    question: "En una organización que quiere que toda administración de acceso sea ejecutada solo por IT, ¿qué modelo es más adecuado?",
    options: ["Centralizado", "Descentralizado", "Role-Based", "Obligatorio"],
    correctIndex: 0,
    explanation: "Control de acceso centralizado significa que una sola entidad (TI) gestiona y administra accesos." 
  },
  {
    id: 68,
    domain: "D4",
    question: "¿Qué define un ataque XSS (Secuencias de Comandos entre Sitios)?",
    options: ["Explotar vulnerabilidades del servidor para acceder a datos", "Insertar scripts maliciosos en una web confiable para el usuario", "Interceptar comunicación cifrada", "Alterar configuración de red para redirigir tráfico"],
    correctIndex: 1,
    explanation: "XSS ocurre cuando se inyecta JavaScript malicioso en una página que el usuario confía, permitiendo robo de sesión, redirecciones, etc." 
  },
  {
    id: 69,
    domain: "D4",
    question: "¿Qué opción representa una técnica de logical monitoring en cybersecurity?",
    options: ["Configuración del Firewall", "Revisión de SIEM", "Escaneo de antivirus", "Segmentación de red"],
    correctIndex: 1,
    explanation: "SIEM review implica monitoreo/correlación centralizada de logs y eventos para detectar incidentes: es monitoreo lógico." 
  },
  {
    id: 70,
    domain: "D5",
    question: "Si un servidor no cumple el security baseline, ¿cuál debe ser la acción inmediata?",
    options: ["Actualización de software inmediata", "Notificar al administrador del sistema para corregir", "Evaluar el sistema por posible compromiso", "Revisión completa de configuración"],
    correctIndex: 2,
    explanation: "Una desviación del baseline puede indicar compromiso. Primero se evalúa por señales de intrusión/malware antes de 'arreglar' y destruir evidencia." 
  },
  {
    id: 71,
    domain: "D5",
    question: "¿Qué técnica de ingeniería social consiste en ofrecer/intercambiar algo como palanca para manipular a la víctima?",
    options: ["Phishing dirigido", "Quid pro quo", "Tailgating (Seguimiento)", "Pretexto"],
    correctIndex: 1,
    explanation: "Quid pro quo ofrece un beneficio a cambio de información o acción (ej. 'soporte técnico' a cambio de credenciales)." 
  },
  {
    id: 72,
    domain: "D1",
    question: "¿Cuál es el elemento fundamental responsable de salvaguardar information assets?",
    options: ["Security Control", "Evaluación de Riesgos", "Política de Seguridad", "Respuesta a incidentes"],
    correctIndex: 0,
    explanation: "Los security controls son los mecanismos (técnicos/administrativos/físicos) que implementan protección. Policies y risk assessment guían, pero el control ejecuta." 
  },
  {
    id: 73,
    domain: "D4",
    question: "En el modelo OSI, ¿en qué capa opera típicamente un router?",
    options: ["Capa de enlace de datos", "Capa física", "Capa de transporte", "Capa de red"],
    correctIndex: 3,
    explanation: "Un router enruta paquetes usando IP (layer 3: Capa de Red)." 
  },
  {
    id: 74,
    domain: "D4",
    question: "¿Qué método es el más efectivo para proteger datos durante la comunicación entre dos partes en una red?",
    options: ["HTTP", "TLS", "FTP", "SMTP"],
    correctIndex: 1,
    explanation: "TLS cifra y protege confidencialidad/integridad de datos in transit. HTTP/FTP/SMTP por sí solos no garantizan cifrado." 
  },
  {
    id: 75,
    domain: "D3",
    question: "Al gestionar acceso de un empleado terminado, ¿cuál es el paso más crítico?",
    options: ["Deshabilitar todos los permisos de acceso", "Actualizar privilegios periódicamente", "Documentar terminación", "Informar al equipo"],
    correctIndex: 0,
    explanation: "La prioridad es revocar/deshabilitar accesos inmediatamente para prevenir acceso no autorizado post-terminación." 
  },
  {
    id: 76,
    domain: "D3",
    question: "¿Qué técnica puede emplearse para asegurar que un gabinete con documentación sensible permanezca cerrado/bajo control?",
    options: ["Autenticación biométrica", "Regla de dos personas", "Control de acceso RFID", "Protección por contraseña"],
    correctIndex: 1,
    explanation: "Two-man rule requiere dos personas autorizadas presentes para acceso, aumentando control y accountability." 
  },
  {
    id: 77,
    domain: "D5",
    question: "Durante la fase post-incident review, ¿qué actividad se espera principalmente?",
    options: ["Procedimientos de contención", "Análisis forense y preservación de evidencia", "Evaluación de proveedores", "Discusión de lecciones aprendidas"],
    correctIndex: 3,
    explanation: "Post-incident review se centra en lecciones aprendidas: qué funcionó, qué falló y mejoras para el futuro." 
  },
  {
    id: 78,
    domain: "D4",
    question: "¿Qué puerto se usa comúnmente para DNS?",
    options: ["80", "53", "443", "22"],
    correctIndex: 1,
    explanation: "DNS usa el puerto 53 (UDP/TCP)." 
  },
  {
    id: 79,
    domain: "D1",
    question: "¿Qué tipo de análisis de riesgos evalúa impactos potenciales que una fuente de amenaza podría causar a las operaciones?",
    options: ["Cuantitativo", "Cualitativo", "Probabilístico", "Reactivo"],
    correctIndex: 1,
    explanation: "El análisis de riesgos cualitativo evalúa impacto/probabilidad usando escalas descriptivas (alto/medio/bajo) y juicio experto, enfocándose en impactos operativos." 
  },
  {
    id: 80,
    domain: "D5",
    question: "¿Cuál término describe mejor encryption?",
    options: ["Conversión de texto cifrado a texto plano", "Transformación de texto plano a texto cifrado", "Autenticación de firmas digitales", "Compresión para almacenamiento"],
    correctIndex: 1,
    explanation: "Encryption transforma plaintext en ciphertext para proteger confidencialidad. El proceso inverso es decryption." 
  },
  {
    id: 81,
    domain: "D5",
    question: "¿Qué policy proporciona guías claras de uso apropiado e inapropiado de information assets?",
    options: ["Política de cifrado de datos", "Network Política de Seguridad", "Política de Uso Aceptable", "Política de respuesta a incidentes"],
    correctIndex: 2,
    explanation: "Política de Uso Aceptable (AUP) define lo permitido/prohibido al usar activos de información (internet, email, dispositivos, etc.)." 
  },
  {
    id: 82,
    domain: "D2",
    question: "¿Cuál es el método más efectivo para determinar entry point y causa de una intrusión de malware y compromiso posterior?",
    options: ["Monitoreo de tráfico de red", "Registros de antivirus", "Entrevistas a empleados", "Análisis de causa raíz"],
    correctIndex: 3,
    explanation: "Análisis de causa raíz identifica la causa primaria y el vector de entrada, no solo síntomas; permite corregir el origen del problema." 
  },
  {
    id: 83,
    domain: "D1",
    question: "¿Cuál es un ejemplo de mecanismo de autenticación biométrica?",
    options: ["Contraseña", "PIN", "Token de seguridad", "Reconocimiento de marcha"],
    correctIndex: 3,
    explanation: "Gait recognition autentica por patrón de caminata (biométrico). Password/PIN son 'something you know'; token es 'something you have'." 
  },
  {
    id: 84,
    domain: "D5",
    question: "¿Cuál es el método más efectivo para asegurar que empleados internalicen la conciencia de seguridad tras la capacitación de concientización?",
    options: ["Seminarios regulares", "Folletos y carteles", "Pruebas rutinarias para medir comprensión/retención", "Premios por asistencia"],
    correctIndex: 2,
    explanation: "La forma más efectiva de medir retención y aplicación es evaluar con pruebas/simulaciones y reforzar donde haya brechas." 
  },
  {
    id: 85,
    domain: "D3",
    question: "En una organización con múltiples departamentos y funciones diversas, ¿qué control de acceso es más adecuado para administrar privilegios eficientemente?",
    options: ["RBAC", "MAC", "DAC", "ABAC"],
    correctIndex: 0,
    explanation: "RBAC escala bien porque asigna permisos por roles (departamento/función) y simplifica administración." 
  },
  {
    id: 86,
    domain: "D4",
    question: "¿Cuál es una ventaja principal de sistemas SIEM?",
    options: ["Información de monitoreo y gestión centralizada de registros", "Cifrado de tráfico", "Actualizaciones de inteligencia de amenazas en tiempo real", "Aplicar reglas del Firewall"],
    correctIndex: 0,
    explanation: "SIEM centraliza logs, correlaciona eventos y da visibilidad/alertas para detección e investigación." 
  },
  {
    id: 87,
    domain: "D1",
    question: "Entre estas cuentas, ¿cuál presenta el mayor riesgo para la postura de seguridad?",
    options: ["Usuario con privilegios limitados", "Administrador con privilegios elevados", "Cuenta de servicio para automatización", "Usuario root con acceso irrestricto"],
    correctIndex: 3,
    explanation: "Root tiene control total; si se compromete, el impacto puede ser catastrófico." 
  },
  {
    id: 88,
    domain: "D5",
    question: "¿Qué proceso se enfoca en cumplir requisitos regulatorios sobre cuánto tiempo deben conservarse datos?",
    options: ["Retención", "Preservación", "Eliminación", "Archivado"],
    correctIndex: 0,
    explanation: "Retention define periodos de conservación obligatorios por ley/regulación antes de disposal/archiving." 
  },
  {
    id: 89,
    domain: "D2",
    question: "¿Cuál técnica es menos efectiva para detectar un incidente de seguridad?",
    options: ["Cifrado", "IDS", "SIEM", "Pruebas de Penetración"],
    correctIndex: 0,
    explanation: "Encryption es preventivo (confidencialidad), no un mecanismo de detección. IDS/SIEM detectan; penProbando identifica vulnerabilidades, aunque no es monitoreo continuo." 
  },
  {
    id: 90,
    domain: "D1",
    question: "¿Cuál es un ejemplo de preventive physical control?",
    options: ["Cerca", "Política", "Cámara", "Sensor de proximidad"],
    correctIndex: 0,
    explanation: "Fence es una barrera física preventiva. Camera y sensores tienden a ser detectivos; policy es administrativo." 
  },
  {
    id: 91,
    domain: "D4",
    question: "¿Qué protocolo se usa principalmente para sincronizar la hora local entre dispositivos en una red?",
    options: ["HTTP", "FTP", "SNMP", "NTP"],
    correctIndex: 3,
    explanation: "NTP (Network Time Protocol) sincroniza clocks en red para logs consistentes, autenticación, correlación, etc." 
  },
  {
    id: 92,
    domain: "D2",
    question: "¿Qué estrategia mitiga mejor el impacto de la salida abrupta de un miembro clave de un equipo de cybersecurity?",
    options: ["Ajustes reactivos de personal", "Capacitación cruzada inmediata", "Planificación de sucesión", "Contratación temporal"],
    correctIndex: 2,
    explanation: "Planificación de sucesión prepara reemplazos y continuidad para roles críticos antes de que ocurra la salida." 
  },
  {
    id: 93,
    domain: "D2",
    question: "En la etapa de preparación de Incident Response, ¿qué actividad se enfoca principalmente en asegurar respuesta efectiva?",
    options: ["Identificar amenazas/vulnerabilidades", "Desarrollar comunicación para stakeholders", "Entrenar al staff en ejecución del plan", "Crear inventario detallado de assets"],
    correctIndex: 2,
    explanation: "En preparación, capacitar al personal y practicar el plan es clave para ejecutar roles/procedimientos correctamente durante un incidente." 
  },
  {
    id: 94,
    domain: "D4",
    question: "¿Qué metodología de protección aplica múltiples capas de controles para proteger contra diversas amenazas?",
    options: ["Autenticación de un solo factor", "Medidas de seguridad reactivas", "Seguridad solo perimetral", "Defensa en profundidad"],
    correctIndex: 3,
    explanation: "Defensa en profundidad usa capas redundantes (preventivo/detectivo/correctivo) para que si una falla, otras sigan protegiendo." 
  },
  {
    id: 95,
    domain: "D1",
    question: "¿Cuál es una desventaja significativa del análisis de riesgos cuantitativo?",
    options: ["No puede dar números", "Complejidades y requisitos de datos", "Alcance limitado", "Subjetividad"],
    correctIndex: 1,
    explanation: "El análisis cuantitativo requiere datos y modelos confiables, y puede ser complejo/costoso de ejecutar correctamente." 
  },
  {
    id: 96,
    domain: "D1",
    question: "¿Qué tipo de control implica instalar endpoint protection en todos los dispositivos de la empresa?",
    options: ["Administrativo", "Técnico", "Físico", "Operacional"],
    correctIndex: 1,
    explanation: "Endpoint protection es una medida tecnológica (software/hardware): Technical control." 
  },
  {
    id: 97,
    domain: "D4",
    question: "¿Qué solución puede usar un security administrator para bloquear tráfico malicioso desde una fuente externa desconocida?",
    options: ["Firewall", "IDS", "NAT", "VPN"],
    correctIndex: 0,
    explanation: "Firewall es el control típico para bloquear/filtrar tráfico según reglas. IDS alerta; NAT traduce direcciones; VPN cifra túneles." 
  },
  {
    id: 98,
    domain: "D5",
    question: "¿Qué técnica de sanitización implica destrucción física del medio?",
    options: ["Cifrado", "Sobrescritura", "Purgado", "Trituración"],
    correctIndex: 3,
    explanation: "Shredding destruye físicamente el dispositivo, haciendo el dato irrecuperable." 
  },
  {
    id: 99,
    domain: "D4",
    question: "¿Qué tipo de Firewall suele ser el más costo-efectivo pero con el menor nivel de seguridad?",
    options: ["Firewall de inspección con estado", "Firewall proxy", "Firewall de capa de aplicación", "Firewall de filtrado de paquetes"],
    correctIndex: 3,
    explanation: "Packet filter firewall inspecciona headers y reglas simples (barato), pero ofrece menor contexto/inspección profunda que opciones más avanzadas." 
  },
  {
    id: 100,
    domain: "D3",
    question: "¿Qué técnica de monitoreo de acceso físico se considera principalmente una medida de control?",
    options: ["Guardia de seguridad", "Cámaras de seguridad", "Autenticación biométrica", "Credenciales RFID"],
    correctIndex: 0,
    explanation: "Un Security Guard monitorea y actúa en tiempo real (control activo). Cámaras son más pasivas/detectivas; biometría/RFID son autenticación/acceso." 
  }
];
