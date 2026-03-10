import horariosData from './horarios_ITS_Sistemas.json';
import quimicaData from './laboratorio_quimica.json';
import reglFisQuiData from './reglamento_fis_qui.json';

function normalizarDia(val: string | string[] | null): string | null {
    if (val === null || val === undefined) return null;
    if (Array.isArray(val)) return val.join(' / ');
    return val;
}

export interface Practica {
    numero: number;
    nombre: string;
    descripcion: string;
    duracion: string;
}

export interface Equipo {
    nombre: string;
    cantidad: number;
    descripcion: string;
}

export interface Evento {
    nombre: string;
    fecha: string;
    descripcion: string;
}

export interface Concurso {
    nombre: string;
    nivel: string;
    descripcion: string;
}

export interface Certificacion {
    nombre: string;
    organismo: string;
    descripcion: string;
}

export interface Aula {
    id: string;
    nombre: string;
    capacidad: number;
    descripcion: string;
}

export interface HorarioClase {
    grupo?: string;
    materia: string;
    maestro: string;
}

export interface FranjaHoraria {
    hora: string;
    lunes: HorarioClase | string | null;
    martes: HorarioClase | string | null;
    miercoles: HorarioClase | string | null;
    jueves: HorarioClase | string | null;
    viernes: HorarioClase | string | null;
}

export interface AulaHorario {
    aula: string;
    horario: FranjaHoraria[];
}

export interface AsesoriaMaestro {
    nombre: string;
    asesorias_materias: { hora: string; dias: string } | { hora: string; dias: string }[] | null;
    asesorias_residencias: { hora: string; dias: string } | { hora: string; dias: string }[] | null;
    tutorias: { hora: string; dias: string } | { hora: string; dias: string }[] | null;
    lugar: string;
}

export interface HorariosDetallados {
    institucion: string;
    periodo: string;
    aulas: AulaHorario[];
    programa_asesorias?: {
        periodo: string;
        departamento: string;
        maestros: AsesoriaMaestro[];
    };
}

export interface Laboratorio {
    id: string;
    nombre: string;
    slug: string;
    color: string;
    colorSecundario: string;
    icono: string;
    descripcionCorta: string;

    // Información General
    mision: string;
    vision: string;
    objetivos: string[];
    valores: string[];
    historia: string;
    ubicacion: string;
    contacto: {
        responsable: string;
        email: string;
        telefono: string;
        extension: string;
    };
    carreras: string[];
    materias: string[];

    // Logística
    horario: {
        lunesViernes: string;
        sabado: string;
        domingo: string;
        observaciones: string;
    };
    reglamento: string[];
    reglamentoDetallado?: { numero: number; titulo: string; descripcion: string | null }[];
    aulas: Aula[];

    // Recursos
    equipo: Equipo[];
    mostrarOrganizacion?: boolean;
    organizacion: {
        jefe: string;
        coordinadores: string[];
        tecnicos: string[];
    };

    // Actividades
    practicas: Practica[];
    eventos: Evento[];
    concursos: Concurso[];
    congresos: Concurso[];
    certificaciones: Certificacion[];
    buzonSugerencias: string;

    // Horarios detallados (opcional, solo para labs con data)
    horariosDetallados?: HorariosDetallados;
}

export const laboratorios: Laboratorio[] = [
    {
        id: "sistemas",
        nombre: "Laboratorio de Sistemas Computacionales",
        slug: "sistemas",
        color: "#2563eb",
        colorSecundario: "#dbeafe",
        icono: "",
        descripcionCorta: "Espacio académico central del ITS donde los estudiantes de Ingeniería en Sistemas Computacionales y carreras afines realizan prácticas y proyectos tecnológicos.",

        mision: "Impartir educación superior tecnológica de calidad, formando de manera integral profesionales competentes, con alto sentido de responsabilidad social, sólida formación en ciencia, tecnología e innovación, que contribuyan al desarrollo sustentable del país.",
        vision: "Ser una institución de educación superior tecnológica reconocida nacional e internacionalmente por sus programas académicos de alta calidad, la eficiencia de sus servicios y procesos y la elevada competitividad de sus egresados que impulsen y fortalezcan el desarrollo de México.",
        objetivos: [
            "Proveer a los estudiantes los recursos tecnológicos, software especializado y ambientes de práctica necesarios para desarrollar competencias computacionales.",
            "Fomentar el aprendizaje activo y la innovación tecnológica.",
            "Diseñar, configurar y administrar redes computacionales aplicando normas y estándares vigentes.",
            "Desarrollar, implementar y administrar software de sistemas o de aplicación que cumpla estándares de calidad.",
            "Diseñar e implementar interfaces hombre-máquina y máquina-máquina para la automatización.",
            "Diseñar, desarrollar y administrar bases de datos conforme a requerimientos y normas de seguridad.",
            "Integrar soluciones computacionales con diferentes tecnologías, plataformas y dispositivos.",
            "Coordinar y participar en proyectos interdisciplinarios de alto impacto social y económico.",
        ],
        valores: [
            "Responsabilidad social y compromiso con el desarrollo sustentable",
            "Excelencia académica e innovación continua",
            "Integridad y ética profesional",
            "Trabajo colaborativo e interdisciplinario",
            "Inclusión y respeto a la diversidad",
            "Prevención de la contaminación y cuidado del medio ambiente",
        ],
        historia: "En sus inicios no era el laboratorio de cómputo que conocemos hoy en día, solían ser las oficinas administrativas de sistemas computacionales, posteriormente pasó a ser el edificio de centro de cómputo, se dividió entre centro de cómputo y laboratorio de cómputo y finalmente por las necesidades del momento, pasó a ser el laboratorio de cómputo.",
        ubicacion: "República, 25260 Saltillo, Coah.",
        contacto: {
            responsable: "Mendoza Morales Sergio Arturo",
            email: "sonia.yi@saltillo.tecnm.mx",
            telefono: "844 288-94-60 / 844 402-0840",
            extension: "Consultar en Subdirección Académica",
        },
        carreras: [
            "Ingeniería en Sistemas Computacionales",
            "Ingeniería Industrial",
            "Ingeniería Mecatrónica",
            "Ingeniería en Gestión Empresarial",
            "Ingeniería Mecánica",
            "Ingeniería Eléctrica",
            "Ingeniería Electrónica",
            "Ingeniería en Materiales",
        ],
        materias: [
            "Fundamentos de Programación",
            "Programación Orientada a Objetos",
            "Estructura de Datos",
            "Sistemas Operativos",
            "Redes de Computadoras",
            "Bases de Datos",
            "Ingeniería de Software",
            "Programación Web",
            "Seguridad en Sistemas Computacionales",
            "Administración de Redes",
            "Inteligencia Artificial y Aprendizaje Automático",
        ],

        horario: {
            lunesViernes: "7:00 – 21:00 hrs",
            sabado: "8:00 – 14:00 hrs",
            domingo: "Cerrado",
            observaciones: "Turno matutino: 07:00 – 13:00 hrs. Turno vespertino: 13:00 – 21:00 hrs. Los horarios exactos pueden variar por semestre; verificar con el Jefe del Departamento de Sistemas Computacionales al inicio del ciclo escolar.",
        },
        reglamento: [
            "Presentar credencial institucional vigente para acceder al laboratorio.",
            "Registrar entrada y salida en la bitácora o sistema de control del laboratorio.",
            "Utilizar los equipos únicamente para actividades académicas y prácticas autorizadas.",
            "Mantener el orden y limpieza en la estación de trabajo asignada.",
            "Apagar correctamente el equipo al finalizar la sesión.",
            "Guardar los archivos de trabajo en el espacio asignado (USB o plataforma institucional); no dejar archivos en el escritorio del equipo.",
            "No instalar software no autorizado sin permiso del encargado.",
            "Reportar cualquier falla o daño al equipo inmediatamente al responsable del laboratorio.",
            "Prohibido consumir alimentos o bebidas dentro del laboratorio.",
            "Prohibido acceder a sitios web no relacionados con las actividades académicas (redes sociales, juegos en línea, etc.) durante las horas de clase.",
            "Prohibido hacer uso indebido de los recursos de red (descargas masivas, streaming no académico).",
            "Prohibido dañar o modificar físicamente los equipos, cables o periféricos.",
            "Prohibido introducir y/o instalar software malicioso, virus o herramientas de hackeo no autorizadas.",
            "Prohibido compartir las credenciales de acceso al sistema.",
            "Prohibido fotografiar o grabar sin autorización del docente o encargado.",
        ],
        aulas: [
            { id: "S-1", nombre: "Centro de Cómputo Principal", capacidad: 30, descripcion: "Aula principal del laboratorio con estaciones de trabajo PC con procesadores Intel Core i5/i7 o AMD Ryzen, pantallas de 21\" a 24\", acceso a internet de banda ancha." },
            { id: "S-2", nombre: "Laboratorio de Redes", capacidad: 25, descripcion: "Equipado con switches y routers administrables para prácticas de redes; Cisco Packet Tracer, GNS3." },
            { id: "S-3", nombre: "Sala de Desarrollo y Bases de Datos", capacidad: 30, descripcion: "Estaciones con Visual Studio, Eclipse, IntelliJ IDEA, VS Code; bases de datos MySQL, SQL Server, Oracle Database." },
            { id: "S-4", nombre: "Laboratorio de Sistemas Operativos", capacidad: 20, descripcion: "Configurado con Windows 10/11, Ubuntu, CentOS para prácticas de instalación y administración de sistemas operativos." },
        ],

        equipo: [
            { nombre: "Computadoras Lanix", cantidad: 40, descripcion: "Equipos de escritorio Lanix con procesadores Intel Core i5/i7 para prácticas académicas." },
            { nombre: "Computadoras Dell", cantidad: 40, descripcion: "Equipos de escritorio Dell con procesadores Intel Core i5/i7 para desarrollo y programación." },
            { nombre: "Computadoras HP", cantidad: 40, descripcion: "Equipos de escritorio HP con procesadores Intel Core i5/i7 y Xeon para tareas avanzadas." },
            { nombre: "Switch Cisco Catalyst 2960", cantidad: 4, descripcion: "Switches administrables Cisco 2960 para prácticas de configuración de redes LAN y VLAN." },
            { nombre: "Switch Cisco Catalyst 3560", cantidad: 4, descripcion: "Switches administrables Cisco 3560 para prácticas avanzadas de redes multicapa." },
            { nombre: "Router Cisco 1841", cantidad: 4, descripcion: "Routers Cisco 1841 para prácticas de configuración de redes WAN y protocolos de enrutamiento." },
            { nombre: "Servidor de dominio y archivos", cantidad: 2, descripcion: "Para gestión de la red local, autenticación de usuarios y almacenamiento centralizado." },
            { nombre: "Proyectores / pantallas de gran formato", cantidad: 4, descripcion: "Para demostraciones del docente en cada sala del laboratorio." },
            { nombre: "UPS (Sistemas de alimentación ininterrumpida)", cantidad: 10, descripcion: "Protección contra cortes de energía para los equipos del laboratorio." },
            { nombre: "Impresoras y periféricos", cantidad: 4, descripcion: "Disponibles según la práctica y autorización del encargado." },
        ],
        organizacion: {
            jefe: "Mendoza Morales Sergio Arturo – Jefe del Laboratorio",
            coordinadores: ["Sonia Judith Rivera López – Secretaria"],
            tecnicos: ["Ricardo Rodríguez – Aux. Soporte Técnico (Software)", "Gilberto Alemán – Aux. Soporte Técnico (Impresión)", "Flavio Covarrubias – Aux. Soporte Técnico (Impresión)", "Israel Nojera – Soporte, Limpieza y Mantenimiento"],
        },

        practicas: [
            { numero: 1, nombre: "Programación en lenguajes de alto nivel", descripcion: "Programación en Python, Java, C++, C# y ensamblador. Configuración de entornos de desarrollo (Visual Studio, Eclipse, IntelliJ IDEA, VS Code).", duracion: "4 horas" },
            { numero: 2, nombre: "Desarrollo y administración de bases de datos", descripcion: "Desarrollo y administración de bases de datos con MySQL, SQL Server y Oracle. Modelado, normalización e implementación de esquemas.", duracion: "5 horas" },
            { numero: 3, nombre: "Configuración y administración de redes", descripcion: "Configuración y administración de redes computacionales usando Cisco Packet Tracer y GNS3. Switches, routers y protocolos de red.", duracion: "4 horas" },
            { numero: 4, nombre: "Diseño de interfaces y aplicaciones web", descripcion: "Diseño e implementación de interfaces hombre-máquina y aplicaciones web. Desarrollo front-end y back-end.", duracion: "5 horas" },
            { numero: 5, nombre: "Sistemas operativos", descripcion: "Prácticas de instalación, configuración y administración de Linux (Ubuntu, CentOS) y Windows Server.", duracion: "4 horas" },
            { numero: 6, nombre: "Proyectos de automatización e IoT", descripcion: "Proyectos de automatización, Internet de las Cosas (IoT) y cómputo en la nube (AWS, Google Cloud, Microsoft Azure).", duracion: "6 horas" },
            { numero: 7, nombre: "Desarrollo de software bajo metodologías ágiles", descripcion: "Desarrollo de software utilizando metodologías ágiles (Scrum, Kanban). Gestión de proyectos y trabajo colaborativo.", duracion: "5 horas" },
            { numero: 8, nombre: "Seguridad informática", descripcion: "Seguridad informática: pruebas de penetración, cifrado, análisis de vulnerabilidades y prácticas de ciberseguridad.", duracion: "4 horas" },
            { numero: 9, nombre: "Manufactura integrada por computadora", descripcion: "Prácticas de CAD/CAM para carreras afines. Uso de herramientas de diseño como AutoCAD y SolidWorks.", duracion: "4 horas" },
        ],
        eventos: [
            { nombre: "Evento Nacional de Innovación Tecnológica del TecNM", fecha: "Anual", descripcion: "Competencia nacional entre institutos del TecNM. El ITS ha ganado dos premios nacionales en este evento." },
            { nombre: "ExpoIngeniería", fecha: "Semestral", descripcion: "Exposición de proyectos tecnológicos de alumnos de las diversas carreras del ITS." },
            { nombre: "Semana Nacional de Ciencia y Tecnología (CONAHCYT)", fecha: "Anual", descripcion: "Actividades de divulgación científica y tecnológica con participación de la comunidad estudiantil y académica." },
            { nombre: "Hackathones y concursos de programación", fecha: "Variable", descripcion: "Hackathones y concursos de programación entre institutos tecnológicos del sistema TecNM." },
            { nombre: "Talleres de actualización tecnológica", fecha: "Variable", descripcion: "Cursos y talleres en tecnologías cloud: AWS, Google Cloud, Microsoft Azure." },
            { nombre: "Visitas empresariales", fecha: "Variable", descripcion: "Vinculación con la industria automotriz de Saltillo: GM, KIA, Chrysler y otras empresas de la región." },
        ],
        concursos: [
            { nombre: "Concurso Nacional de Innovación Tecnológica – TecNM", nivel: "Nacional", descripcion: "Competencia entre todos los institutos del sistema TecNM con proyectos de innovación tecnológica." },
            { nombre: "ICPC (International Collegiate Programming Contest)", nivel: "Internacional", descripcion: "Concurso internacional de programación competitiva con participación de equipos del ITS." },
            { nombre: "Hackatones regionales y nacionales", nivel: "Nacional", descripcion: "Organizados por empresas tecnológicas como Microsoft, Google y Amazon." },
            { nombre: "Competencia de Ciberseguridad CTF (Capture the Flag)", nivel: "Nacional", descripcion: "Competencia de ciberseguridad CTF organizada por el TecNM." },
            { nombre: "Concurso de Aplicaciones Móviles y Desarrollo Web", nivel: "Nacional", descripcion: "Competencia de desarrollo de aplicaciones móviles y web entre instituciones del TecNM." },
            { nombre: "Olimpiada Estatal de Cómputo e Informática – Coahuila", nivel: "Estatal", descripcion: "Competencia estatal de cómputo e informática para estudiantes de nivel superior." },
        ],
        congresos: [
            { nombre: "Congreso Nacional de Tecnología e Innovación del TecNM", nivel: "Nacional", descripcion: "Foro anual donde institutos de toda la red TecNM presentan investigaciones y proyectos." },
            { nombre: "Congreso Internacional de Ingeniería y Tecnología", nivel: "Internacional", descripcion: "Con participación de ponentes de otros países en temas de ingeniería y tecnología." },
            { nombre: "Foro de Ciencia y Tecnología de Coahuila", nivel: "Regional", descripcion: "Organizado en conjunto con CONAHCYT y el gobierno estatal de Coahuila." },
            { nombre: "Congreso de Innovación y Emprendimiento Tecnológico ITS", nivel: "Institucional", descripcion: "Evento interno que reúne a estudiantes, egresados y empresas del sector tecnológico." },
            { nombre: "Jornadas de Ingeniería en Sistemas Computacionales", nivel: "Institucional", descripcion: "Presentación de proyectos terminales y avances de investigación de la carrera de ISC." },
        ],
        certificaciones: [
            { nombre: "ISO 9001:2015", organismo: "Sistema de Gestión de Calidad", descripcion: "Certificación vigente del Sistema de Gestión de Calidad que cubre todos los procesos y servicios educativos, incluyendo los laboratorios. El ITS fue el primer plantel del Sistema Nacional de Educación Superior Tecnológica en recibir la recertificación ISO 9001:2000." },
            { nombre: "Premio Nacional de Innovación Tecnológica", organismo: "TecNM", descripcion: "Dos premios nacionales obtenidos por proyectos de estudiantes en el Evento Nacional del TecNM." },
            { nombre: "Premio Nacional de Metalurgia", organismo: "Asociación de Ingenieros de Minas, Metalurgistas y Geólogos de México", descripcion: "Otorgado a un docente investigador del ITS por su contribución en el campo de la metalurgia." },
            { nombre: "Premio Santander", organismo: "Banco Santander", descripcion: "Categoría Proyecto de Negocios con Impacto Social, otorgado a un estudiante del ITS." },
            { nombre: "Membresía TecNM", organismo: "Tecnológico Nacional de México", descripcion: "Integración al Tecnológico Nacional de México con reporte periódico de auditorías internas y certificaciones." },
        ],
        buzonSugerencias: "Para quejas, sugerencias o propuestas de mejora, contactar a Sonia Judith Rivera López (Secretaría del Laboratorio) o enviar correo a: sonia.yi@saltillo.tecnm.mx. También se dispone de buzón físico de sugerencias en el edificio administrativo del campus y sistema de quejas en el portal oficial saltillo.tecnm.mx.",
        horariosDetallados: horariosData as unknown as HorariosDetallados,
    },

    {
        id: "fisica",
        nombre: "Laboratorio de Física",
        slug: "fisica",
        color: "#7c3aed",
        colorSecundario: "#ede9fe",
        icono: "️",
        descripcionCorta: "Espacio experimental para el estudio de los fenómenos físicos fundamentales.",

        mision: "Ofrecer un entorno experimental de alto nivel que permita a los estudiantes comprobar, analizar y comprender los fenómenos físicos mediante la experimentación directa, desarrollando habilidades de observación, análisis crítico y pensamiento científico.",
        vision: "Ser un laboratorio de física de excelencia, referente en experimentación científica en el TECNM, que contribuya a la formación de ingenieros con sólidas bases científicas y capacidad para resolver problemas complejos del entorno industrial y tecnológico.",
        objetivos: [
            "Verificar experimentalmente los principios y leyes de la física clásica y moderna.",
            "Desarrollar habilidades de análisis de datos, manejo de instrumentos y elaboración de reportes científicos.",
            "Aplicar el método científico en el diseño y ejecución de experimentos.",
            "Vinculación con proyectos de investigación aplicada en física e ingeniería.",
            "Fomentar la cultura de seguridad en el manejo de equipos de medición.",
        ],
        valores: [
            "Rigor científico y precisión",
            "Curiosidad e innovación experimental",
            "Respeto por los instrumentos y el espacio",
            "Trabajo en equipo y colaboración",
            "Responsabilidad ambiental",
        ],
        historia: "Establecido en 1972 como parte de los laboratorios fundadores del ITS, el Laboratorio de Física ha sido pilar en la formación básica de todos los ingenieros de la institución. Su primera dotación incluyó equipos de mecánica y óptica básica. En 2010 fue completamente renovado con fondos Promep, incorporando equipos digitales de última generación. En 2018 se incorporó la sala de electromagnetismo avanzada con osciloscopios digitales Tektronix.",
        ubicacion: "República, 25260 Saltillo, Coah.",
        contacto: {
            responsable: "Departamento de Ciencias Básicas",
            email: "sonia.yi@saltillo.tecnm.mx",
            telefono: "844 288-94-60 / 844 402-0840",
            extension: "Consultar en Subdirección Académica",
        },
        carreras: [
            "Ingeniería en Sistemas Computacionales",
            "Ingeniería Industrial",
            "Ingeniería Mecatrónica",
            "Ingeniería en Gestión Empresarial",
            "Ingeniería Mecánica",
            "Ingeniería Eléctrica",
            "Ingeniería Electrónica",
            "Ingeniería en Materiales",
        ],
        materias: [
            "Física General (SCF-1006) – Ing. en Sistemas Computacionales",
            "Física (INC-1013) – Ing. Industrial",
            "Fundamentos de Física (GEC-0909) – Ing. en Gestión Empresarial",
            "Mecánica Clásica (AEF-1042) – Ing. en Materiales, Eléctrica, Electrónica, Mecánica, Mecatrónica",
        ],

        horario: {
            lunesViernes: "A petición del maestro",
            sabado: "A petición del maestro",
            domingo: "Cerrado",
            observaciones: "El laboratorio se asigna a petición del maestro con un mínimo de 72 hrs. de anticipación. Uso de bata obligatorio.",
        },
        reglamento: [
            "Uso obligatorio de lentes de seguridad y bata de laboratorio.",
            "Prohibido consumir alimentos y bebidas.",
            "Manipular los equipos solo bajo supervisión del técnico.",
            "Reportar inmediatamente cualquier accidente o avería.",
            "Dejar el área de trabajo limpia y ordenada al finalizar.",
            "No mover equipos sin autorización del responsable.",
            "El cabello largo debe recogerse durante las prácticas.",
        ],
        reglamentoDetallado: reglFisQuiData.reglamento_laboratorio_quimica,
        aulas: [
            { id: "F-1", nombre: "Sala de Mecánica", capacidad: 24, descripcion: "Equipada con pistas de aire, péndulos, resortes, balanzas analíticas y sensores de movimiento." },
            { id: "F-2", nombre: "Sala de Electricidad y Magnetismo", capacidad: 20, descripcion: "Osciloscopios digitales, generadores de señal, multímetros, fuentes de poder y kits de circuitos." },
            { id: "F-3", nombre: "Sala de Óptica y Termodinámica", descripcion: "Láseres de diodo, prismas, lentes, calorímetros y equipos de transferencia de calor.", capacidad: 16 },
        ],

        equipo: [
            { nombre: "Osciloscopios Tektronix TBS2104", cantidad: 12, descripcion: "Osciloscopios digitales de 4 canales, 100 MHz, pantalla táctil." },
            { nombre: "Raíles de aire Pasco", cantidad: 8, descripcion: "Para prácticas de cinemática y dinámica sin fricción." },
            { nombre: "Sensores DataStudio", cantidad: 30, descripcion: "Interfaz PASCO para adquisición digital de datos en tiempo real." },
            { nombre: "Balanzas analíticas Mettler Toledo", cantidad: 6, descripcion: "Precisión de 0.0001 g para mediciones de masa." },
            { nombre: "Láseres de diodo He-Ne", cantidad: 8, descripcion: "Para prácticas de óptica: difracción, interferencia y reflexión." },
            { nombre: "Fuentes de poder variables", cantidad: 15, descripcion: "0-30V DC, 5A para circuitos eléctricos." },
        ],
        mostrarOrganizacion: false,
        organizacion: {
            jefe: "Departamento de Ciencias Básicas",
            coordinadores: [],
            tecnicos: [],
        },

        practicas: [
            { numero: 1, nombre: "Medición y propagación de errores", descripcion: "Uso de instrumentos de medición (vernier, micrómetro), cálculo de error absoluto, relativo y propagación.", duracion: "3 horas" },
            { numero: 2, nombre: "Cinemática en una dimensión", descripcion: "Análisis de movimiento rectilíneo uniforme y uniformemente acelerado con sensores digitales.", duracion: "3 horas" },
            { numero: 3, nombre: "Leyes de Newton", descripcion: "Verificación de las tres leyes de Newton con sistema de poleas y raíl de aire.", duracion: "4 horas" },
            { numero: 4, nombre: "Conservación de energía mecánica", descripcion: "Análisis de transformaciones energéticas en péndulos y superficies inclinadas.", duracion: "3 horas" },
            { numero: 5, nombre: "Ley de Ohm y Circuitos Eléctricos", descripcion: "Verificación experimental de la Ley de Ohm, circuitos en serie y paralelo.", duracion: "4 horas" },
            { numero: 6, nombre: "Campo magnético – Ley de Faraday", descripcion: "Generación de corriente por inducción electromagnética y caracterización del campo magnético.", duracion: "4 horas" },
            { numero: 7, nombre: "Óptica Geométrica", descripcion: "Reflexión, refracción en prismas y formación de imágenes con lentes convergentes y divergentes.", duracion: "3 horas" },
            { numero: 8, nombre: "Difracción e interferencia", descripcion: "Experimento de doble rendija de Young y difracción en rejillas.", duracion: "3 horas" },
        ],
        eventos: [
            { nombre: "Feria de Ciencias ITS", fecha: "Agosto 2024", descripcion: "Exposición de proyectos experimentales de estudiantes con jurado externo de la industria." },
            { nombre: "Olimpiada Regional de Física", fecha: "Septiembre 2024", descripcion: "Competencia de problemas avanzados de física para preparatoria y nivel superior." },
        ],
        concursos: [
            { nombre: "Olimpiada Mexicana de Física", nivel: "Nacional", descripcion: "Selección y preparación de estudiantes representantes del ITS para la competencia nacional." },
            { nombre: "Feria Estatal de Ciencia y Tecnología", nivel: "Estatal", descripcion: "Presentación de proyectos de investigación básica aplicada en física." },
        ],
        congresos: [
            { nombre: "Congreso Nacional de Física Aplicada TECNM", nivel: "Nacional", descripcion: "Presentación de ponencias y memorias de investigación en física e ingeniería." },
            { nombre: "Encuentro Regional de Ciencias Básicas", nivel: "Regional", descripcion: "Foro de intercambio de experiencias en educación y experimentación científica." },
        ],
        certificaciones: [
            { nombre: "Pasco Scientific Training", organismo: "Pasco Scientific", descripcion: "Personal certificado en el uso y mantenimiento de equipos Pasco DataStudio." },
            { nombre: "Calibración de Instrumentos ISO 9001", organismo: "CENAM", descripcion: "Instrumentos de medición calibrados y trazables al patrón nacional de medidas." },
        ],
        buzonSugerencias: "Para quejas, sugerencias o propuestas de mejora, contactar a Sonia Judith Rivera López (Secretaría del Laboratorio) o enviar correo a: sonia.yi@saltillo.tecnm.mx. También se dispone de buzón físico de sugerencias en el edificio administrativo del campus y sistema de quejas en el portal oficial saltillo.tecnm.mx.",
    },

    {
        id: "quimica",
        nombre: "Laboratorio de Química",
        slug: "quimica",
        color: "#059669",
        colorSecundario: "#d1fae5",
        icono: "",
        descripcionCorta: "Laboratorio del Departamento de Ciencias Básicas del ITS para experimentación química con normas estrictas de seguridad. Período actual: febrero – junio 2026.",

        mision: "Impartir educación superior tecnológica de calidad, formando de manera integral profesionales competentes, con alto sentido de responsabilidad social, sólida formación en ciencia, tecnología e innovación, que contribuyan al desarrollo sustentable del país.",
        vision: "Ser una institución de educación superior tecnológica reconocida nacional e internacionalmente por sus programas académicos de alta calidad, la eficiencia de sus servicios y procesos y la elevada competitividad de sus egresados que impulsen y fortalezcan el desarrollo de México.",
        objetivos: [
            "Desarrollar competencias en análisis químico cuantitativo y cualitativo.",
            "Capacitar en el uso seguro de reactivos, equipos de medición y técnicas instrumentales.",
            "Aplicar la química en contextos de ingeniería industrial y de procesos.",
            "Fomentar la conciencia ambiental en el manejo y disposición de residuos químicos.",
            "Vincular la práctica química con proyectos de investigación aplicada.",
        ],
        valores: [
            "Responsabilidad social y compromiso con el desarrollo sustentable",
            "Excelencia académica e innovación continua",
            "Integridad y ética profesional",
            "Trabajo colaborativo e interdisciplinario",
            "Inclusión y respeto a la diversidad",
            "Prevención de la contaminación y cuidado del medio ambiente",
        ],
        historia: "El Laboratorio de Química pertenece al Departamento de Ciencias Básicas del Instituto Tecnológico de Saltillo (TecNM – Campus Saltillo). El ITS fue fundado en 1950 y ha formado generaciones de ingenieros con sólidas bases científicas. El laboratorio ha evolucionado con la institución, incorporando equipamiento moderno y adoptando normas de seguridad y calidad ambiental conforme a la política institucional de prevención de la contaminación y cumplimiento de requisitos legales aplicables.",
        ubicacion: "República, 25260 Saltillo, Coah.",
        contacto: {
            responsable: "Departamento de Ciencias Básicas",
            email: "sonia.yi@saltillo.tecnm.mx",
            telefono: "844 288-94-60 / 844 402-0840",
            extension: "Consultar en Subdirección Académica",
        },
        carreras: [
            "Ingeniería en Sistemas Computacionales",
            "Ingeniería Industrial",
            "Ingeniería Mecatrónica",
            "Ingeniería en Gestión Empresarial",
            "Ingeniería Mecánica",
            "Ingeniería Eléctrica",
            "Ingeniería Electrónica",
            "Ingeniería en Materiales",
        ],
        materias: [
            "Química (AEC-1058) – Ing. Eléctrica, Electrónica, Sistemas Computacionales, Mecatrónica",
            "Química (INC-1025) – Ing. Industrial",
            "Química (MEC-1026) – Ing. Mecánica",
            "Química (AEF-1057) – Ing. en Materiales",
            "Fundamentos de Química (GEF-0910) – Ing. en Gestión Empresarial",
            "Química Orgánica (MAC-1024) – Ing. en Materiales",
            "Equilibrio Fisicoquímico (MAC-1010) – Ing. en Materiales",
            "Materiales Poliméricos (MAG-1017) – Ing. en Materiales",
            "Ingeniería de Materiales Metálicos (MEF-1013) – Ing. Mecánica",
            "Ingeniería de Materiales No Metálicos (MEF-1014) – Ing. Mecánica",
        ],

        horario: {
            lunesViernes: "7:00 – 21:00 hrs",
            sabado: "Cerrado (salvo actividades especiales)",
            domingo: "Cerrado",
            observaciones: "El horario de uso del laboratorio depende de la asignación de docentes por franja horaria. Turno matutino: 07:00 – 13:00 hrs. Turno vespertino: 13:00 – 21:00 hrs. Período actual: febrero – junio 2026.",
        },
        reglamento: [
            "1. Trabajar únicamente con la supervisión del maestro. Su mejor protección contra accidentes es la presencia del maestro, que estará vigilando en todo momento y al existir alguna situación de peligro, será quien pueda sobrellevar de manera adecuada esta emergencia.",
            "2. Asistir puntualmente en el horario correspondiente del laboratorio.",
            "3. Usar bata obligatoriamente, y el equipo de seguridad cuando sea necesario (lentes, guantes, mascarillas). Se debe asistir con vestimenta adecuada (pantalón o falda larga, no short, no top ni blusas de tirantes), cabello recogido y zapato cerrado.",
            "4. Mantener el orden. No jugar, ni hacer bromas, para evitar accidentes.",
            "5. No comer, beber, ni fumar. Podría ingerir sustancias que, aún en pequeñas cantidades, son tóxicas. Muchos solventes son fácilmente inflamables por el calor del cigarro.",
            "6. No inhalar gases y vapores. Cuando le indique el maestro que perciba el olor de una sustancia, abanique con su mano para atraer pequeñas cantidades hacia la nariz evitando la inhalación directa.",
            "7. No verter agua sobre el ácido. Si desea preparar una solución de algún ácido, vierta el ácido lentamente por las paredes del recipiente que contiene el agua.",
            "8. Calentar correctamente las sustancias. Nunca caliente una sustancia en un tubo de ensayo que apunte hacia usted o hacia otra persona.",
            "9. Revisar el material de vidrio antes y después de trabajar. El material no debe estar estrellado, quebrado, ni sucio.",
            "10. Mantener limpia el área de trabajo. Para evitar accidentes, mantener despejada su mesa (no conectar en ella celulares) y tener lo necesario para limpiar inmediatamente cuando se derrame alguna sustancia.",
            "11. Lavarse las manos al término de la sesión de laboratorio.",
            "12. Conocer en dónde se ubican los elementos de seguridad: salida de emergencia, extintores, regaderas y lavabos.",
        ],
        reglamentoDetallado: reglFisQuiData.reglamento_laboratorio_quimica,
        aulas: [
            { id: "Q-1", nombre: "Laboratorio de Química", capacidad: 20, descripcion: "Mesas de trabajo con conexiones de gas, agua y electricidad. Equipo de seguridad disponible: lentes, guantes, mascarillas, campanas de extracción, extintores, regaderas y lavabos de emergencia." },
        ],

        equipo: [
            { nombre: "Espectrofotómetros UV-Vis Shimadzu UV-1900", cantidad: 4, descripcion: "Para análisis de absorbancia en rango UV-Visible de 185-900 nm." },
            { nombre: "Cromatógrafo de Gases Agilent 7890B", cantidad: 1, descripcion: "Para separación e identificación de compuestos volátiles y semivolátiles." },
            { nombre: "pH-metros Mettler Toledo S210", cantidad: 8, descripcion: "pH-metros de precisión ±0.01 pH para análisis de soluciones." },
            { nombre: "Balanzas analíticas 0.1 mg", cantidad: 5, descripcion: "Para pesado de reactivos y sustancias con alta precisión." },
            { nombre: "Placas calefactoras con agitación", cantidad: 12, descripcion: "Para síntesis y reacciones con control de temperatura hasta 350°C." },
            { nombre: "Centrífuga Eppendorf 5810R", cantidad: 2, descripcion: "Para separación de fases y purificación de muestras biológico-químicas." },
        ],
        organizacion: {
            jefe: "Departamento de Ciencias Básicas – ITS",
            coordinadores: ["Marisol Rangel", "Norma Hernández", "Hilda Torres"],
            tecnicos: ["Alma Cázares", "Alejandra", "Víctor M.", "Raymundo Garza", "Susana Aguirre", "Karina Ayala"],
        },

        practicas: [
            { numero: 1, nombre: "Normas de seguridad e identificación de reactivos", descripcion: "Inducción al laboratorio, identificación de EPP, señalética, rutas de evacuación y clasificación de reactivos.", duracion: "2 horas" },
            { numero: 2, nombre: "Preparación de soluciones", descripcion: "Cálculo y preparación de soluciones por dilución y pesada directa de soluto. Manejo de material volumétrico.", duracion: "3 horas" },
            { numero: 3, nombre: "Reacciones ácido-base y titulación", descripcion: "Titulación potenciométrica de ácidos y bases. Curvas de titulación y puntos de equivalencia.", duracion: "4 horas" },
            { numero: 4, nombre: "Análisis espectrofotométrico – Ley de Beer-Lambert", descripcion: "Determinación de concentraciones por absorbancia UV-Vis. Curva de calibración.", duracion: "4 horas" },
            { numero: 5, nombre: "Extracción líquido-líquido", descripcion: "Separación de compuestos orgánicos en embudo de separación por diferencia de polaridad.", duracion: "3 horas" },
            { numero: 6, nombre: "Cromatografía de capa fina y columna", descripcion: "Separación e identificación de pigmentos y compuestos orgánicos por cromatografía.", duracion: "4 horas" },
            { numero: 7, nombre: "Electroquímica – Celdas galvánicas", descripcion: "Construcción y medición del potencial de celdas electroquímicas. Serie electroquímica de actividad.", duracion: "3 horas" },
            { numero: 8, nombre: "Análisis de dureza del agua", descripcion: "Determinación de Ca²⁺ y Mg²⁺ en muestras de agua por titulación complejométrica con EDTA.", duracion: "4 horas" },
        ],
        eventos: [
            { nombre: "Día de la Química Verde", fecha: "Septiembre 2024", descripcion: "Talleres y conferencias sobre química sostenible, biorremediación y alternativas ecológicas en la industria." },
            { nombre: "Concurso de Síntesis Química", fecha: "Noviembre 2024", descripcion: "Competencia entre estudiantes para la síntesis de compuestos con el menor número de pasos y máximo rendimiento." },
        ],
        concursos: [
            { nombre: "Olimpiada Nacional de Química", nivel: "Nacional", descripcion: "Preparación y participación de estudiantes seleccionados en la fase nacional de la ONQM." },
            { nombre: "Concurso Regional de Análisis Instrumental", nivel: "Regional", descripcion: "Competencia de habilidades analíticas entre estudiantes del TECNM noreste." },
        ],
        congresos: [
            { nombre: "Congreso Mexicano de Química", nivel: "Nacional", descripcion: "Presentación de ponencias de investigación aplicada en química analítica e industrial." },
            { nombre: "Simposio de Química Sustentable Coahuila", nivel: "Estatal", descripcion: "Foro de propuestas de química verde y gestión ambiental de residuos industriales." },
        ],
        certificaciones: [
            { nombre: "ISO 9001:2015", organismo: "Sistema de Gestión de Calidad", descripcion: "Certificación vigente del Sistema de Gestión de Calidad del ITS que cubre todos los procesos y servicios educativos, incluyendo los laboratorios." },
            { nombre: "NOM-087-SEMARNAT – Residuos Peligrosos", organismo: "SEMARNAT", descripcion: "Laboratorio certificado en el manejo y disposición correcta de residuos peligrosos biológico-infecciosos." },
            { nombre: "Plan de Emergencias Químicas", organismo: "Protección Civil Coahuila", descripcion: "Personal capacitado y plan de acción ante emergencias por derrames o exposición a sustancias." },
        ],
        buzonSugerencias: "Para quejas, sugerencias o propuestas de mejora, contactar a Sonia Judith Rivera López (Secretaría del Laboratorio) o enviar correo a: sonia.yi@saltillo.tecnm.mx. También se dispone de buzón físico de sugerencias en el edificio administrativo del campus y sistema de quejas en el portal oficial saltillo.tecnm.mx.",
        horariosDetallados: {
            institucion: quimicaData.institucion.nombre,
            periodo: quimicaData.laboratorio.periodo,
            aulas: [
                {
                    aula: "Laboratorio de Química",
                    horario: quimicaData.laboratorio.horario_docentes.map((f) => ({
                        hora: f.hora,
                        lunes: normalizarDia(f.lunes as string | string[] | null),
                        martes: normalizarDia(f.martes as string | string[] | null),
                        miercoles: normalizarDia(f.miercoles as string | string[] | null),
                        jueves: normalizarDia(f.jueves as string | string[] | null),
                        viernes: normalizarDia(f.viernes as string | string[] | null),
                    })),
                },
            ],
        } as unknown as HorariosDetallados,
    },
];

export function getLabBySlug(slug: string): Laboratorio | undefined {
    return laboratorios.find((lab) => lab.slug === slug);
}
