// ===== DADOS DOS CURSOS =====
const CERTIFICATIONS_DATA = [
    {
        id: 1,
        title: "Oracle APEX do Básico ao Avançado",
        institution: "Udemy",
        period: "Jul 2024",
        status: "completed",
        description: "Curso completo de Oracle APEX desde fundamentos até técnicas avançadas.",
        technologies: ["Oracle APEX", "PL/SQL", "Web Development", "Database"],
        links: [
            { name: "Oracle APEX", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8a65b5a4-dc2b-45af-bb65-a49b5448f9b7.pdf" }
        ],
        featured: true
    },
    {
        id: 2,
        title: "The Complete Oracle APEX Fundamentals Course",
        institution: "Udemy", 
        period: "Jul 2024",
        status: "completed",
        description: "Fundamentos do Oracle APEX para desenvolvimento de aplicações web.",
        technologies: ["Oracle APEX", "SQL", "Web Applications"],
        links: [
            { name: "Oracle APEX", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6c8d4d20-e6c4-4eac-bcfd-065a3956c70b.pdf" }
        ],
        featured: true
    },
    {
        id: 3,
        title: "RESTful Services in Oracle APEX - The Complete Guide",
        institution: "Udemy",
        period: "Jul 2024", 
        status: "completed",
        description: "Desenvolvimento de serviços RESTful integrados com Oracle APEX.",
        technologies: ["RESTful API", "Oracle APEX", "Web Services", "Integration"],
        links: [
            { name: "RESTful", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-33828c55-0595-4c93-9d6c-b741bc3bfe94.pdf" }
        ],
        featured: true
    },
    {
        id: 4,
        title: "Formação Spring Framework",
        institution: "Alura",
        period: "Abr 2022",
        status: "completed",
        description: "Especialização em Spring Framework para desenvolvimento Java.",
        technologies: ["Spring Boot", "Java", "REST API", "Microservices"],
        links: [
            { name: "Formação Spring", url: "https://cursos.alura.com.br/degree/certificate/fe633e7a-c494-4980-863c-49bf3995473a" }
        ],
        featured: true
    },
    {
        id: 5,
        title: "Microsserviços Java com Spring Boot e Spring Boot Cloud",
        institution: "Udemy",
        period: "Abr 2022",
        status: "completed", 
        description: "Arquitetura de microsserviços utilizando Spring Boot e Java.",
        technologies: ["Microservices", "Spring Boot", "Java", "Cloud"],
        links: [
            { name: "Microsserviços", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9872fa18-5c07-4088-be97-810b78a4c276.pdf" }
        ],
        featured: true
    },    
    {
        id: 6,
        title: "Aprenda Programação PYTHON para Iniciantes",
        institution: "Udemy",
        period: "Out 2025",
        status: "completed",
        description: "Curso Básico Introdutório para Iniciantes em Programação Python com aulas 100% Hands on!",
        technologies: ["Python", "Programação", "Lógica", "Strings", "Variáveis"],
        links: [
            { name: "Python para Iniciantes", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-29cd6b9e-344f-45e8-a0b9-8669575e4b35.pdf" }
        ],
        featured: true
    },
    {
        id: 7,
        title: "Formação Engenharia de Dados: Domine Big Data! 2025",
        institution: "Udemy",
        period: "Nov 2025",
        status: "planned",
        description: "Aprenda Engenharia de Dados e Comece sua Preparação para a Profissão da Área de Tecnologia que mais Cresce no mundo!",
        technologies: ["Python", "Streaming", "ETL", "Data Crawlers", "Spark", "Warehouse", "Data Lake", "SQL", "Cloud"],
        links: [
            // { name: "Formação Engenharia de Dados", url: "#" }
        ],
        featured: true
    },
    {
        id: 8,
        title: "Engenharia de Dados com Databricks, Spark e PySpark",
        institution: "Udemy",
        period: "Nov 2025",
        status: "planned",
        description: "Aprenda as Ferramentas Essenciais para Manipulação e Análise de Grandes Volumes de Dados",
        technologies: ["Databricks", "PySpark", "Delta Lake", "Data Pipelines", "Medallion", "Lakehouse"],
        links: [
            // { name: "Engenharia de Dados", url: "#" }
        ],
        featured: true
    }    
];