# CC Simulador - ISC2 Certified in Cybersecurity

![ISC2 CC](https://img.shields.io/badge/ISC2-CC-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-green?style=for-the-badge)

Simulador de examen para la certificación **Certified in Cybersecurity (CC)** de ISC2. Incluye 600 preguntas distribuidas en 6 tests de práctica.

## 🎯 Características

- ✅ **600 preguntas** en español (6 tests x 100 preguntas)
- ✅ **5 dominios** cubiertos:
  - D1: Principios de Seguridad
  - D2: Continuidad del Negocio, Recuperación ante Desastres y Respuesta a Incidentes
  - D3: Control de Acceso
  - D4: Seguridad de Red
  - D5: Operaciones de Seguridad
- ✅ **Feedback inmediato** con explicaciones detalladas
- ✅ **Temporizador** de 2 horas (como el examen real)
- ✅ **Resultados por dominio** con recomendaciones de estudio
- ✅ **Modo oscuro/claro**
- ✅ **Responsive** - funciona en móvil y desktop

## 🚀 Demo

[Ver Demo en Vivo](https://branyel26.github.io/cc-simulador)

## 📦 Instalación Local

### Opción 1: Archivos estáticos
```bash
git clone https://github.com/branyel26/cc-simulador.git
cd cc-simulador
# Abrir index.html en tu navegador
```

### Opción 2: Docker
```bash
docker pull branyel26/cc-simulador
docker run -d -p 8080:80 branyel26/cc-simulador
# Abrir http://localhost:8080
```

### Opción 3: Servidor local
```bash
# Con Python
python -m http.server 8080

# Con Node.js
npx serve .
```

## 📁 Estructura del Proyecto

```
cc-simulador/
├── index.html          # Página principal
├── app.js              # Lógica del simulador
├── app.css             # Estilos
├── questions1.js       # Test 1 (100 preguntas)
├── questions2.js       # Test 2 (100 preguntas)
├── questions3.js       # Test 3 (100 preguntas)
├── questions4.js       # Test 4 (100 preguntas)
├── questions5.js       # Test 5 (100 preguntas)
├── questions6.js       # Test 6 (100 preguntas)
├── Dockerfile          # Para contenedor Docker
└── README.md
```

## 🐳 Docker

### Construir imagen
```bash
docker build -t branyel26/cc-simulador .
```

### Ejecutar contenedor
```bash
docker run -d -p 8080:80 --name cc-simulador branyel26/cc-simulador
```

## 📚 Sobre la Certificación CC

La certificación **Certified in Cybersecurity (CC)** de ISC2 es una credencial de nivel inicial que valida conocimientos fundamentales en ciberseguridad. Es ideal para quienes inician su carrera en seguridad informática.

### Requisitos del examen real:
- 100 preguntas de opción múltiple
- 2 horas de duración
- Puntaje mínimo: 70%

## ⚠️ Disclaimer

Este simulador es **material educativo** creado para práctica personal. Las preguntas están inspiradas en los dominios oficiales de ISC2 pero **no son preguntas oficiales del examen**.

Para información oficial, visita: [ISC2 CC Certification](https://www.isc2.org/Certifications/CC)

## 👤 Autor

**Branyel Pérez**

- GitHub: [@branyel26](https://github.com/branyel26)
- LinkedIn: [branyel](https://linkedin.com/in/branyel)

## 📄 Licencia

Este proyecto es de uso educativo. Creado con ❤️ para la comunidad de ciberseguridad.

---

⭐ Si te fue útil, dale una estrella al repositorio!
