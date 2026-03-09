# Spec – Portal de Laboratorios ITS

## Descripción general

Portal web del **Instituto Tecnológico de Saltillo (ITS)** que centraliza la información de sus laboratorios académicos. Permite a estudiantes, docentes y visitantes consultar equipamiento, prácticas, horarios, reglamentos, eventos y más de cada laboratorio.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | Astro 5 (SSG) + TypeScript |
| Estilos | CSS vanilla (variables CSS, no framework) |
| Tipografía | Inter + Poppins (Google Fonts) |
| Backend | Sin definir (directorio vacío) |
| Datos | Archivo TypeScript estático (`laboratorios.ts`) |

---

## Estructura del proyecto

```
minor-motion/
├── frontend/               # App Astro
│   ├── src/
│   │   ├── data/
│   │   │   └── laboratorios.ts   # Fuente única de datos (hardcoded)
│   │   ├── layouts/
│   │   │   └── Layout.astro      # Header, footer, estilos globales
│   │   ├── pages/
│   │   │   ├── index.astro       # Página principal
│   │   │   └── [lab].astro       # Página de detalle (ruta dinámica)
│   │   └── components/
│   │       └── Welcome.astro     # (legacy del starter, sin uso activo)
│   └── package.json
└── backend/                # Vacío – pendiente de definir
```

---

## Páginas

### `/` – Inicio (`index.astro`)
- Hero con estadísticas globales (3 labs, 40+ prácticas, 250+ equipos, 3 carreras)
- Grid de cards con los 3 laboratorios disponibles
- Cada card enlaza a `/[slug]` del laboratorio

### `/sistemas`, `/fisica`, `/quimica` – Detalle de laboratorio (`[lab].astro`)
Ruta dinámica generada en build time desde los slugs del array `laboratorios`.

Secciones de la página de detalle:
1. **Hero** – nombre, descripción, color del lab
2. **Información General** – misión, visión, objetivos, valores, historia, ubicación, contacto
3. **Carreras y Materias** – a qué carreras y materias aplica
4. **Horarios y Reglamento** – horarios L-V / sábado / observaciones; lista de reglas
5. **Aulas / Salas** – id, nombre, capacidad, descripción
6. **Equipamiento** – lista con cantidad y descripción
7. **Organización** – jefe, coordinadores, técnicos
8. **Prácticas** – número, nombre, descripción, duración
9. **Eventos** – nombre, fecha, descripción
10. **Concursos** – nombre, nivel, descripción
11. **Congresos** – nombre, nivel, descripción
12. **Certificaciones** – nombre, organismo, descripción
13. **Buzón de Sugerencias** – texto con email de contacto

---

## Modelo de datos

Definido en `src/data/laboratorios.ts`. Interfaces principales:

```ts
Laboratorio {
  id, nombre, slug, color, colorSecundario, icono, descripcionCorta
  mision, vision, objetivos[], valores[], historia
  ubicacion, contacto { responsable, email, telefono, extension }
  carreras[], materias[]
  horario { lunesViernes, sabado, domingo, observaciones }
  reglamento[]
  aulas: Aula[]          // { id, nombre, capacidad, descripcion }
  equipo: Equipo[]       // { nombre, cantidad, descripcion }
  organizacion { jefe, coordinadores[], tecnicos[] }
  practicas: Practica[]  // { numero, nombre, descripcion, duracion }
  eventos: Evento[]      // { nombre, fecha, descripcion }
  concursos: Concurso[]  // { nombre, nivel, descripcion }
  congresos: Concurso[]
  certificaciones: Certificacion[] // { nombre, organismo, descripcion }
  buzonSugerencias: string
}
```

### Laboratorios actuales

| ID | Nombre | Color |
|---|---|---|
| `sistemas` | Laboratorio de Sistemas Computacionales | `#2563eb` (azul) |
| `fisica` | Laboratorio de Física | `#7c3aed` (violeta) |
| `quimica` | Laboratorio de Química | `#059669` (verde) |

---

## Layout global (`Layout.astro`)

- **Header sticky** con logo ITS y navegación a Inicio / Sistemas / Física / Química
- **Footer** con columnas de contacto, enlaces rápidos y horarios generales
- **CSS global** con variables (`--primary-color`, `--secondary-color`, etc.), clases utilitarias (`.card`, `.btn`, `.container`) y responsive breakpoint a 768 px

---

## Estado actual

- [x] Estructura base de Astro configurada
- [x] Datos de los 3 laboratorios completos en `laboratorios.ts`
- [x] Layout con header/footer funcionando
- [x] Página principal con hero y grid de labs
- [x] Ruta dinámica `[lab].astro` para detalle
- [ ] Backend sin implementar
- [ ] Sin integración con base de datos o CMS
- [ ] Sin autenticación / panel de administración
- [ ] Sin tests
- [ ] Favicon y assets de imagen pendientes de personalizar

---

## Posibles mejoras futuras

- Implementar backend (Node/Express o similar) para gestionar datos dinámicamente
- Panel de administración para actualizar labs, prácticas y equipamiento
- Sistema de reservación de salas
- Integración con directorio TECNM para auth de estudiantes/docentes
- Multiidioma (español / inglés)
- PWA para acceso offline
