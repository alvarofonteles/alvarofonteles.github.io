// ===== DADOS DOS PROJETOS DATA ENGINEERING =====
const PROJECTS_DE_DATA = {
    // Roadmap Completo
    roadmap: [
        {
            id: 0,
            title: "🏗️ Metodologia de Estudos",
            description: "Estrutura completa organizada em 9 fases para dominar Data Engineering moderno. Mostra minha abordagem sistemática de aprendizado.",
            technologies: ["Organização", "Metodologia", "Roadmap", "Planejamento", "Data Engineering"],
            links: [
                {
                    name: "📁 Estrutura do Projeto",
                    url: "https://1drv.ms/f/c/0cc82fec9c1ab050/Ej_zAkJcDsxPpKpQkODTdqYBUnji_yfcbF2PlTOsoQmfOA"
                }
            ],
            featured: true,
            status: "completed",  // Porque a organização já está feita!
            images: [ "/projects/assets/images/badges/methodology-badge.svg" ]     
        },
        {
            id: 1,
            title: "🐍 FASE 1 - Python Fundamentos",
            description: "Fundamentos Python completos: desde estruturas de dados e funções até programação orientada a objetos com dataclasses, metaclasses, módulos e construção de APIs REST com autenticação JWT/OAuth2 e banco de dados.",
            technologies: ["Python", "Data Structures", "Functions", "Dictionary", "OOP", "Modules & Packages", "Dataclasses", "Metaclass", "REST APIs", "SQLAlchemy", "Pydantic", "JSON", "JWT", "OAuth2"],
            links: [
                { name: "🔗 python_teo", url: "https://github.com/alvarofonteles/python_teo" },
                { name: "🔗 py_functions_duno", url: "https://github.com/alvarofonteles/py_functions_duno" },
                { name: "🔗 py_collections_duno", url: "https://github.com/alvarofonteles/py_collections_duno" },
                { name: "🔗 python_otavio", url: "https://github.com/alvarofonteles/python_otavio" },
                { name: "⭐ py_oop_otavio", url: "https://github.com/alvarofonteles/py_oop_otavio" },
                { name: "🔗 py_oop_duno", url: "https://github.com/alvarofonteles/py_oop_duno" },
                { name: "🔗 py_restapi_hashtag", url: "https://github.com/alvarofonteles/py_restapi_hashtag" },
            ],
            featured: true,
            status: "completed",
            images: [ "/projects/assets/images/badges/python-badge.svg" ]
        },
        {
            id: 2,
            title: "📊 FASE 2 - Pandas + ETL",
            description: "Domínio do Pandas para manipulação de dados: desde Series/DataFrames básicos até operações avançadas como merge, groupby, pivot e conexão com bancos SQL para preparação de dados e ETL.",
            technologies: ["Python", "Pandas", "ETL", "Data Preparation", "Data Cleaning", "DataFrames", "Series", "GroupBy", "Merge", "Pivot", "SQL", "CSV", "Excel", "JSON"],
            links: [
                { name: "🔗 pandas_samuka", url: "https://github.com/alvarofonteles/pandas_samuka" },
                // { name: "⭐ pandas_teo", url: "https://github.com/alvarofonteles/pandas_teo" },
            ],
            featured: true,
            status: "in-progress",
            images: [ "/projects/assets/images/badges/pandas-badge.svg" ]
        },
        {
            id: 3,
            title: "⚡ FASE 3 - PySpark Fundamentos",
            description: "Processamento distribuído com PySpark: criação de DataFrames, Spark SQL e transição suave de Pandas para Big Data.",
            technologies: ["PySpark", "DataFrames", "Spark SQL", "Distributed Computing", "ETL"],
            links: [],
            featured: true,
            status: "planned",
            images: [ "/projects/assets/images/badges/pyspark-badge.svg" ]
        },
        {
            id: 4,
            title: "🔍 FASE 4 - Databricks Platform",
            description: "Plataforma enterprise completa: clusters, notebooks, Unity Catalog, workflows e governança de dados. Aqui você aprende a usar Databricks como ambiente central para Big Data.",
            technologies: ["Databricks", "Unity Catalog", "Spark SQL", "Workflows", "Data Governance", "Data Engineering"],            
            links: [],
            featured: true,
            status: "planned",
            images: [ "/projects/assets/images/badges/databricks-badge.svg" ]
        },
        {
            id: 5,
            title: "⚡ FASE 5 - PySpark Avançado + Delta Lake",
            description: "Pipelines production-ready com PySpark avançado: otimização, Delta Lake e qualidade de dados em escala. Agora sim faz sentido aplicar Delta Lake dentro do Databricks.",
            technologies: ["PySpark", "Delta Lake", "Data Quality", "Performance", "Optimization", "ACID Transactions", "Schema Evolution"],
            links: [],
            featured: true,
            status: "planned",
            images: [ 
                "/projects/assets/images/badges/pyspark-advanced-badge.svg",               
                "/projects/assets/images/badges/delta-lake-badge.svg",
            ]
        },
        {
            id: 6,
            title: "🏗️ FASE 6 - Lakehouse Architecture",
            description: "Arquitetura Lakehouse moderna: integração do Delta Lake com a medallion architecture, garantindo escalabilidade, confiabilidade e governança em pipelines corporativos.",
            technologies: ["Delta Lake", "Medallion Architecture", "ACID Transactions", "Schema Evolution", "Data Governance", "Data Pipelines"],   
            links: [],
            featured: true,
            status: "planned",
            images: [ 
                "/projects/assets/images/badges/lakehouse-badge.svg",                
                "/projects/assets/images/badges/delta-lake-badge.svg",
            ]
        },
        {
            id: 7,
            title: "🔄 FASE 7 - Airflow Orchestration",
            description: "Orquestração de pipelines com Airflow: agendamento, monitoramento, dependencies e pipelines prontos para produção.",
            technologies: ["Airflow", "DAGs", "Orchestration", "Monitoring", "Scheduling"],
            links: [],
            featured: true,
            status: "planned",
            images: [ "/projects/assets/images/badges/airflow-badge.svg" ]
        },
        {
            id: 8,
            title: "☁️ FASE 8 - AWS Data Stack",
            description: "Cloud computing para dados: S3 (storage), Glue (ETL serverless), Athena (query) e integração PySpark com AWS.",
            technologies: ["AWS S3", "AWS Glue", "AWS Athena", "boto3", "Cloud Computing"],
            links: [],
            featured: true,
            status: "planned",
            images: [ "/projects/assets/images/badges/aws-badge.svg" ]
        },
        {
            id: 9,
            title: "📊 FASE 9 - dbt Analytics Engineering",
            description: "Engenharia analytics moderna: camada de transformação com dbt, documentação, testes e data quality.",
            technologies: ["dbt", "Data Transformation", "Analytics Engineering", "Documentation", "Testing", "Data Quality"],
            links: [],
            featured: true,
            status: "planned",
            images: [ "/projects/assets/images/badges/dbt-badge.svg" ]
        }

    ],

    // Projetos Hands-on Data Engineering
    handsOn: [
        {
            id: 1,
            title: "📊 Analisador de Dados Python",
            subtitle: "FASE 1-2: 🐍 Python + Pandas",  // Novo campo
            description: "Conjunto de ferramentas para preparação e processamento de dados usando Python puro e Pandas.",
            technologies: ["Python", "OOP", "Pandas", "ETL", "Data Preparation", "Data Cleaning"],            
            links: [
                { name: "⭐ Repositório", url: "https://github.com/alvarofonteles/analisador-dados-python" },
            ],
            featured: true,
            status: "in-progress",
            images: [ 
                "/projects/assets/images/badges/python-badge.svg",
                "/projects/assets/images/badges/pandas-badge.svg"
             ] // Domínio dos fundamentos
        },
        {
            id: 2,
            title: "🔄 Pipeline ETL - Arquitetura Tradicional",
            subtitle: "FASE 3-4: ⚡ PySpark + Databricks",
            description: "Pipeline ETL clássico: extração, transformação e carga, implementado com PySpark dentro do Databricks. Demonstra fundamentos sólidos de engenharia de dados distribuída.",
            technologies: ["PySpark", "Databricks", "Airflow", "Python", "SQL"],
            links: [
                // { name: "🔗 pipeline-etl-tradicional", url: "https://github.com/alvarofonteles/pipeline-etl-tradicional" },
            ],
            featured: true,
            status: "planned",
            images: [ 
                "/projects/assets/images/badges/pyspark-badge.svg",
                "/projects/assets/images/badges/databricks-badge.svg" 
            ]
        },
        {
            id: 3,
            title: "⚡ Pipeline ELT - Arquitetura Moderna",
            subtitle: "FASE 5+: 🏗️ Delta Lake + Lakehouse",
            description: "Pipeline ELT moderno com Delta Lake: extração, carga direta no data lake e transformação sob demanda. Implementa arquitetura cloud-native com Databricks, dbt e AWS.",
            technologies: ["PySpark", "Delta Lake", "Databricks", "dbt", "AWS S3", "Airflow"],
            links: [
                // { name: "🔗 pipeline-elt-moderno", url: "https://github.com/alvarofonteles/pipeline-elt-moderno" },
            ],
            featured: true,
            status: "planned",
            images: [ 
                "/projects/assets/images/badges/pyspark-advanced-badge.svg",
                "/projects/assets/images/badges/databricks-badge.svg",
                "/projects/assets/images/badges/aws-badge.svg"
            ]
        }
    ]    
}; 