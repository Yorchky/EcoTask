# 🌱 EcoTask

## Startup Digital: Cultura, Herramientas e Innovación

EcoTask es una plataforma digital diseñada para ayudar a estudiantes y equipos de trabajo a organizar actividades, administrar recursos y visualizar su progreso.

El proyecto combina desarrollo de software, organización colaborativa, automatización y una cultura de reconocimiento.

---

##  Objetivo

Crear una herramienta digital que facilite la organización de actividades y permita a los equipos trabajar de manera colaborativa, organizada y medible.

---

##  Problema

Los equipos de estudiantes pueden tener dificultades para:

* Organizar sus actividades.
* Distribuir responsabilidades.
* Dar seguimiento al progreso.
* Mantener una comunicación efectiva.
* Reconocer el trabajo de sus integrantes.

EcoTask busca solucionar estos problemas mediante herramientas digitales.

---

##  Propuesta de valor

EcoTask permite administrar información mediante una API y proporciona una base tecnológica que puede conectarse posteriormente con una aplicación web o móvil.

La plataforma utiliza autenticación, control de roles y administración de información.

---

##  Tecnologías

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token
* bcryptjs
* Swagger
* dotenv
* GitHub Actions

---

##  Equipo

| Integrante                  | Rol          |
| --------------------------- | ------------ |
| Rubí Salas Martín del Campo | Coordinación |
| Jorge                       | Tecnología   |
| Integrante 3                | Diseño       |
| Integrante 4                | Comunicación |

---

##  Seguridad

La API utiliza JWT para autenticar usuarios y controlar el acceso a determinadas operaciones.

Los usuarios pueden tener diferentes roles y los administradores cuentan con permisos adicionales.

Las variables sensibles se almacenan mediante variables de entorno.

---

##  Flujo de trabajo

Nuestro flujo de trabajo es:

**Pendiente → En progreso → Revisión → Aprobado → Completado**

Los cambios importantes deben ser revisados antes de integrarse al proyecto.

---

##  Automatización

GitHub Actions ejecuta automáticamente una validación del proyecto cuando se realizan cambios.

La automatización permite comprobar que los archivos principales del proyecto existan y que la estructura básica se mantenga.

---

## Métricas

El proyecto será monitoreado mediante UptimeRobot para comprobar la disponibilidad del servicio publicado.

---

##  Cultura de reconocimiento

El equipo utiliza un canal de Discord llamado `#kudos` para reconocer las contribuciones de los integrantes.

---

## ▶ Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar al proyecto:

```bash
cd EcoTask
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env`:

```env
PORT=4000
MONGO_URI=TU_MONGO_URI
JWT_TOKEN_SECRET=TU_SECRETO
```

Ejecutar:

```bash
node index.js
```

La API estará disponible en:

```text
http://localhost:4000
```

La documentación Swagger estará disponible en:

```text
http://localhost:4000/api-docs
```

---

##  Evidencias del proyecto

### Herramientas utilizadas

* Notion — Organización y documentación.
* GitHub — Código y control de versiones.
* GitHub Actions — Automatización.
* Discord — Comunicación y reconocimiento.
* UptimeRobot — Monitoreo.
* Figma — Prototipo.

---

##  Resultado esperado

Demostrar que una combinación de tecnología, organización, automatización, medición y reconocimiento puede mejorar el trabajo colaborativo de un equipo.

**EcoTask — Organiza. Colabora. Avanza. 🚀**
