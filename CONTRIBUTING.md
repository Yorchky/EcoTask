# Guía de contribución — EcoTask

## Flujo de trabajo
Pending → In Progress → Review → Approved → Completed

## Reglas
1. Nadie hace push directo a `main`. Todo cambio entra por Pull Request.
2. Crea una rama por tarea: `feat/nombre`, `fix/nombre` o `docs/nombre`.
3. Commits claros: `feat: agrega login`, `fix: corrige ruta de tareas`.
4. Todo PR necesita 1 aprobación de otro compañero (nunca la propia).
5. Los checks de GitHub Actions deben estar en verde antes de hacer merge.
6. Cambios de diseño se revisan en Figma (comentarios) antes de implementarse.

## Roles
- Backend: Jorge, Veto
- Diseño: Criss, Saul

## Cómo contribuir
1. `git checkout -b feat/mi-tarea`
2. Haz tus cambios y `git commit`
3. `git push -u origin feat/mi-tarea`
4. Abre un Pull Request y pide revisión a un compañero
5. Cuando esté aprobado y los checks en verde, se hace merge