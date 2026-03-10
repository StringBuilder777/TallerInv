import horariosData from './horarios_ITS_Sistemas.json';

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
    aulas: Aula[];

    // Recursos
    equipo: Equipo[];
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
        descripcionCorta: "Centro de formación en tecnología, programación y desarrollo de software.",

        mision: "Proveer un espacio de aprendizaje de vanguardia donde los estudiantes desarrollen competencias tecnológicas sólidas, mediante la práctica intensiva en programación, redes, bases de datos y desarrollo de software, preparándolos para los retos del mercado laboral en el área de TI.",
        vision: "Ser el laboratorio de sistemas líder en el noroeste de México, reconocido por la formación integral de ingenieros competentes, innovadores y con alto sentido ético, capaces de contribuir al desarrollo tecnológico nacional e internacional.",
        objetivos: [
            "Desarrollar competencias prácticas en programación orientada a objetos y funcional.",
            "Formar estudiantes capaces de diseñar, implementar y gestionar bases de datos relacionales y no relacionales.",
            "Capacitar en el diseño e implementación de redes LAN, WAN y seguridad informática.",
            "Fomentar el desarrollo de proyectos de software aplicando metodologías ágiles.",
            "Impulsar el uso de herramientas de inteligencia artificial y ciencia de datos.",
        ],
        valores: [
            "Innovación tecnológica continua",
            "Trabajo colaborativo y en equipo",
            "Ética profesional y responsabilidad",
            "Excelencia académica",
            "Respeto a los recursos y equipos del laboratorio",
        ],
        historia: "El Laboratorio de Sistemas Computacionales fue fundado en 1995 con apenas 10 computadoras y una red local básica. A lo largo de tres décadas ha evolucionado constantemente, incorporando nuevas tecnologías y expandiendo su infraestructura. En 2005 se realizó la primera gran remodelación, duplicando su capacidad. Para 2015, con fondos PRODEP, se adquirieron 60 estaciones de trabajo de última generación. Hoy cuenta con más de 120 equipos distribuidos en 4 salas especializadas y es el laboratorio más demandado de la institución.",
        ubicacion: "Edificio D, Planta Baja – Campus Principal ITS. Blvd. Venustiano Carranza #2400, Col. Tecnológico, Saltillo, Coahuila.",
        contacto: {
            responsable: "Dr. Roberto Morales García",
            email: "lab.sistemas@its.edu.mx",
            telefono: "(844) 123-4567",
            extension: "Ext. 210",
        },
        carreras: [
            "Ingeniería en Sistemas Computacionales",
            "Ingeniería en Tecnologías de la Información y Comunicaciones",
            "Licenciatura en Informática",
        ],
        materias: [
            "Programación Orientada a Objetos",
            "Bases de Datos",
            "Redes de Computadoras",
            "Desarrollo Web",
            "Inteligencia Artificial",
            "Sistemas Operativos",
            "Ingeniería de Software",
            "Seguridad Informática",
        ],

        horario: {
            lunesViernes: "7:00 – 21:00 hrs",
            sabado: "8:00 – 14:00 hrs",
            domingo: "Cerrado",
            observaciones: "Acceso fuera de horario con autorización del responsable. Reservaciones con 24 hrs de anticipación.",
        },
        reglamento: [
            "Prohibido consumir alimentos y bebidas dentro del laboratorio.",
            "No se permite la instalación de software sin autorización del técnico.",
            "Los usuarios son responsables del equipo asignado durante su sesión.",
            "Guardar silencio y mantener el orden en todo momento.",
            "Apagar los equipos al finalizar la sesión y reportar cualquier falla.",
            "El acceso con mochila sólo está permitido en casilleros designados.",
            "Respetar los turnos de uso establecidos por el docente.",
            "Está prohibido el uso de redes sociales durante las prácticas.",
        ],
        aulas: [
            { id: "S-1", nombre: "Sala de Programación A", capacidad: 30, descripcion: "Equipada con 30 estaciones de desarrollo con monitores duales y acceso a IDEs profesionales." },
            { id: "S-2", nombre: "Sala de Redes y Seguridad", capacidad: 25, descripcion: "Cuenta con simuladores Cisco Packet Tracer, switches y routers físicos para prácticas de networking." },
            { id: "S-3", nombre: "Sala de Bases de Datos", capacidad: 30, descripcion: "Especializada en gestión de datos con servidores SQL Server, MySQL, PostgreSQL y MongoDB." },
            { id: "S-4", nombre: "Sala de Inteligencia Artificial", capacidad: 20, descripcion: "Equipada con GPUs para procesamiento de modelos de machine learning y deep learning." },
        ],

        equipo: [
            { nombre: "Computadoras Dell OptiPlex 7090", cantidad: 60, descripcion: "Intel Core i7 11th Gen, 16GB RAM, SSD 512GB, Windows 11 Pro." },
            { nombre: "Computadoras HP EliteDesk 800 G8", cantidad: 45, descripcion: "Intel Core i5 11th Gen, 8GB RAM, SSD 256GB." },
            { nombre: "Servidores HPE ProLiant DL380", cantidad: 4, descripcion: "Para virtualización, bases de datos y servicios de red internos." },
            { nombre: "Switches Cisco Catalyst 2960", cantidad: 8, descripcion: "Switches administrables para prácticas de networking." },
            { nombre: "Routers Cisco 2901", cantidad: 4, descripcion: "Routers físicos para configuración de redes WAN." },
            { nombre: "GPUs NVIDIA RTX 3080", cantidad: 8, descripcion: "Para entrenamiento de modelos de IA y procesamiento gráfico." },
        ],
        organizacion: {
            jefe: "Dr. Roberto Morales García",
            coordinadores: ["M.C. Ana Lucía Hernández", "M.C. Jorge Alberto Pérez"],
            tecnicos: ["Ing. Carlos Ramírez", "Ing. Sandra Torres", "Ing. Luis Medina"],
        },

        practicas: [
            { numero: 1, nombre: "Introducción al entorno de desarrollo", descripcion: "Configuración de ambiente de trabajo, IDE, control de versiones con Git y metodologías de trabajo colaborativo.", duracion: "3 horas" },
            { numero: 2, nombre: "Programación Orientada a Objetos – Herencia y Polimorfismo", descripcion: "Diseño e implementación de jerarquías de clases con patrones de diseño básicos.", duracion: "4 horas" },
            { numero: 3, nombre: "Diseño de base de datos relacional", descripcion: "Modelado entidad-relación, normalización hasta 3FN e implementación en MySQL.", duracion: "5 horas" },
            { numero: 4, nombre: "Configuración de LAN con VLAN", descripcion: "Segmentación de redes, configuración de switches Cisco y trunking 802.1Q.", duracion: "4 horas" },
            { numero: 5, nombre: "Desarrollo de API REST", descripcion: "Creación de servicios web RESTful con Node.js/Express y documentación con Swagger.", duracion: "6 horas" },
            { numero: 6, nombre: "Clasificación con redes neuronales", descripcion: "Entrenamiento y evaluación de modelos de clasificación usando TensorFlow y Keras.", duracion: "5 horas" },
            { numero: 7, nombre: "Seguridad en aplicaciones web", descripcion: "Identificación y mitigación de vulnerabilidades OWASP Top 10 en aplicaciones web.", duracion: "4 horas" },
            { numero: 8, nombre: "Administración de sistemas Linux", descripcion: "Gestión de usuarios, permisos, servicios y scripting en Bash.", duracion: "4 horas" },
        ],
        eventos: [
            { nombre: "Hackathon ITS 2024", fecha: "Noviembre 2024", descripcion: "Competencia de 48 horas de desarrollo de soluciones tecnológicas para problemas reales de empresas de la región." },
            { nombre: "Semana de la Computación", fecha: "Octubre 2024", descripcion: "Conferencias, talleres y demostraciones de tecnologías emergentes con empresas como IBM, Oracle y Microsoft." },
            { nombre: "Demo Day Proyectos Finales", fecha: "Junio 2024", descripcion: "Presentación pública de proyectos terminales de egresados ante empresas e inversores." },
        ],
        concursos: [
            { nombre: "ICPC – Concurso Internacional de Programación Colegiada", nivel: "Internacional", descripcion: "Participación anual en la fase regional latinoamericana del prestigioso concurso de algoritmia." },
            { nombre: "Concurso Nacional de Hackathones TECNM", nivel: "Nacional", descripcion: "Competencia entre las 254 instituciones del TECNM con proyectos innovadores de software." },
        ],
        congresos: [
            { nombre: "Congreso Internacional de Sistemas Computacionales", nivel: "Internacional", descripcion: "Congreso anual con investigadores de México, USA y España. Publicación de memorias indexadas en Scopus." },
            { nombre: "Congreso Regional de TI – Coahuila", nivel: "Regional", descripcion: "Foro de presentación de avances en investigación aplicada de instituciones del noreste de México." },
        ],
        certificaciones: [
            { nombre: "Cisco CCNA", organismo: "Cisco Systems", descripcion: "Centro autorizado Cisco Networking Academy para certificación en redes y seguridad." },
            { nombre: "Oracle Academy", organismo: "Oracle Corporation", descripcion: "Programa oficial Oracle para formación en bases de datos SQL y Java." },
            { nombre: "AWS Academy", organismo: "Amazon Web Services", descripcion: "Formación oficial en computación en la nube, arquitectura y servicios AWS." },
        ],
        buzonSugerencias: "Envía tus sugerencias, quejas o propuestas de mejora a: buzon.sistemas@its.edu.mx o mediante el formato físico disponible en recepción del laboratorio.",
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
        historia: "Establecido en 1972 como parte de los laboratorios fundadores del ITS, el Laboratorio de Física ha sido pilar en la formación básica de todos los ingenieros de la institución. Su primera dotación incluyó equipos de mecánica y óptica básica. En 2010 fue completamente renovado con fondos Promep, incorporating equipos digitales de última generación. En 2018 se incorporó la sala de electromagnetismo avanzada con osciloscopios digitales Tektronix.",
        ubicacion: "Edificio C, Planta Alta – Campus Principal ITS. Blvd. Venustiano Carranza #2400, Col. Tecnológico, Saltillo, Coahuila.",
        contacto: {
            responsable: "Dra. Patricia Elizondo Villanueva",
            email: "lab.fisica@its.edu.mx",
            telefono: "(844) 123-4568",
            extension: "Ext. 215",
        },
        carreras: [
            "Ingeniería en Sistemas Computacionales",
            "Ingeniería Industrial",
            "Ingeniería Mecatrónica",
            "Ingeniería en Gestión Empresarial",
        ],
        materias: [
            "Física General",
            "Física para Ingeniería I",
            "Física para Ingeniería II",
            "Electromagnetismo",
            "Mecánica de Fluidos",
            "Termodinámica",
        ],

        horario: {
            lunesViernes: "7:00 – 20:00 hrs",
            sabado: "8:00 – 13:00 hrs",
            domingo: "Cerrado",
            observaciones: "Prácticas programadas con mín. 72 hrs de anticipación. Uso de bata obligatorio.",
        },
        reglamento: [
            "Uso obligatorio de lentes de seguridad y bata de laboratorio.",
            "Prohibido consumir alimentos y bebidas.",
            "Manipular los equipos sólo bajo supervisión del técnico.",
            "Reportar inmediatamente cualquier accidente o avería.",
            "Dejar el área de trabajo limpia y ordenada al finalizar.",
            "No mover equipos sin autorización del responsable.",
            "El cabello largo debe recogerse durante las prácticas.",
        ],
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
        organizacion: {
            jefe: "Dra. Patricia Elizondo Villanueva",
            coordinadores: ["M.C. Hugo Salazar Ortiz"],
            tecnicos: ["Ing. Fernanda Reyes", "Ing. Marco Villanueva"],
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
        buzonSugerencias: "Comparte tus sugerencias enviando un correo a buzon.fisica@its.edu.mx o depositando tu nota en el buzón físico ubicado a la entrada del laboratorio.",
    },

    {
        id: "quimica",
        nombre: "Laboratorio de Química",
        slug: "quimica",
        color: "#059669",
        colorSecundario: "#d1fae5",
        icono: "",
        descripcionCorta: "Laboratorio de experimentación química con normas estrictas de seguridad y equipos modernos.",

        mision: "Proporcionar las condiciones materiales y formativas necesarias para que los estudiantes de ingeniería adquieran competencias en el análisis químico, síntesis de compuestos y comprensión de los procesos fisicoquímicos, garantizando siempre la seguridad y el cuidado ambiental.",
        vision: "Consolidarnos como laboratorio de química de referencia en el TECNM noreste, con infraestructura de análisis instrumental avanzada, prácticas actualizadas y cultura de seguridad química como pilares de formación.",
        objetivos: [
            "Desarrollar competencias en análisis químico cuantitativo y cualitativo.",
            "Capacitar en el uso seguro de reactivos, equipos de medición y técnicas instrumentales.",
            "Aplicar la química en contextos de ingeniería industrial y de procesos.",
            "Fomentar la conciencia ambiental en el manejo y disposición de residuos químicos.",
            "Vincular la práctica química con proyectos de investigación aplicada.",
        ],
        valores: [
            "Seguridad química como prioridad absoluta",
            "Respeto por el medio ambiente",
            "Rigor científico y exactitud analítica",
            "Trabajo responsable y organizado",
            "Ética en el uso de sustancias y resultados",
        ],
        historia: "El Laboratorio de Química del ITS inició operaciones en 1974 con equipamiento básico de vidrería y reactivos fundamentales. En 1998 se incorporaron los primeros espectrofotómetros UV-Vis. La gran modernización llegó en 2012 con la instalación del sistema de extracción de gases y la renovación completa de campanas de extracción. En 2020 se certificó el laboratorio bajo normas NOM-087 para manejo de residuos peligrosos biológico-infecciosos.",
        ubicacion: "Edificio B, Planta Baja – Campus Principal ITS. Blvd. Venustiano Carranza #2400, Col. Tecnológico, Saltillo, Coahuila.",
        contacto: {
            responsable: "Dr. Mario Alberto Soto Leal",
            email: "lab.quimica@its.edu.mx",
            telefono: "(844) 123-4569",
            extension: "Ext. 220",
        },
        carreras: [
            "Ingeniería Industrial",
            "Ingeniería Química (plan 2016)",
            "Ingeniería en Gestión Empresarial",
            "Ingeniería en Sistemas Computacionales",
        ],
        materias: [
            "Química General",
            "Química Orgánica",
            "Química Analítica",
            "Fisicoquímica",
            "Ingeniería de Procesos",
            "Corrosión y Tratamiento de Materiales",
        ],

        horario: {
            lunesViernes: "7:00 – 19:00 hrs",
            sabado: "9:00 – 13:00 hrs",
            domingo: "Cerrado",
            observaciones: "Acceso condicionado a inducción de seguridad previa. EPP obligatorio.",
        },
        reglamento: [
            "Uso obligatorio de bata blanca de manga larga, guantes nitrilo y lentes de seguridad.",
            "Prohibido trabajar solo en el laboratorio. Siempre deben estar al menos dos personas.",
            "Ningún reactivo puede salir del laboratorio sin autorización por escrito.",
            "Los residuos químicos deben clasificarse según su tipo en contenedores identificados.",
            "Prohibido el uso de calzado abierto, sandalias o tacones.",
            "Reportar cualquier derrame inmediatamente al técnico responsable.",
            "Leer la hoja de seguridad (MSDS) antes de manipular cualquier reactivo.",
            "No pipetear con la boca en ninguna circunstancia.",
        ],
        aulas: [
            { id: "Q-1", nombre: "Sala de Química General y Orgánica", capacidad: 20, descripcion: "16 mesas de trabajo con conexiones de gas, agua y electricidad. Campanas de extracción individuales." },
            { id: "Q-2", nombre: "Sala de Análisis Instrumental", capacidad: 12, descripcion: "Espectrofotómetros, cromatógrafos y potenciómetros para análisis avanzados." },
            { id: "Q-3", nombre: "Área de Preparación de Reactivos", capacidad: 4, descripcion: "Exclusiva para técnicos. Preparación y almacenamiento seguro de soluciones y reactivos." },
        ],

        equipo: [
            { nombre: "Espectrofotómetros UV-Vis Shimadzu UV-1900", cantidad: 4, descripcion: "Para análisis de absorbancia en rango UV-Visible de 185-900 nm." },
            { nombre: "Cromatógrafo de Gases Agilent 7890B", cantidad: 1, descripcion: "Para separación e identificación de compuestos volátiles y semipvolátiles." },
            { nombre: "pH-metros Mettler Toledo S210", cantidad: 8, descripcion: "pH-metros de precisión ±0.01 pH para análisis de soluciones." },
            { nombre: "Balanzas analíticas 0.1 mg", cantidad: 5, descripcion: "Para pesado de reactivos y sustancias con alta precisión." },
            { nombre: "Plaças calefactoras con agitación", cantidad: 12, descripcion: "Para síntesis y reacciones con control de temperatura hasta 350°C." },
            { nombre: "Centrífuga Eppendorf 5810R", cantidad: 2, descripcion: "Para separación de fases y purificación de muestras biológico-químicas." },
        ],
        organizacion: {
            jefe: "Dr. Mario Alberto Soto Leal",
            coordinadores: ["M.C. Gabriela Montoya Ríos"],
            tecnicos: ["Q.I. Alejandro Fuentes", "Q.I. Rebeca Castillo", "Ing. Rodolfo Garza"],
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
            { nombre: "NOM-087-SEMARNAT – Residuos Peligrosos", organismo: "SEMARNAT", descripcion: "Laboratorio certificado en el manejo y disposición correcta de residuos peligrosos biológico-infecciosos." },
            { nombre: "Plan de Emergencias Químicas", organismo: "Protección Civil Coahuila", descripcion: "Personal capacitado y plan de acción ante emergencias por derrames o exposición a sustancias." },
        ],
        buzonSugerencias: "Envía tus propuestas o reportes de seguridad a buzon.quimica@its.edu.mx o al formato físico en recepción. Toda sugerencia sobre seguridad es prioritaria y se atiende en ≤24 hrs.",
    },
];

export function getLabBySlug(slug: string): Laboratorio | undefined {
    return laboratorios.find((lab) => lab.slug === slug);
}
