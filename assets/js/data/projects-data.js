// ===== DADOS DOS PROJETOS - ROADMAP DATA ENGINEER =====
const PROJECTS_DATA = {
    // Projetos de Aprendizado
    learning: [
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
            image: "assets/images/projects/methodology-structure.jpg"
        },
        {
            id: 1,
            title: "🐍 FASE 1 - Python Fundamentos",
            description: "Base sólida de programação Python para Data Engineering: funções, OOP, collections, APIs e programação concorrente.",
            technologies: ["Python", "OOP", "Data Structures", "Functions", "APIs", "Concurrency", "Dataclasses"],
            links: [
                { name: "🔗 python_teo", url: "https://github.com/alvarofonteles/python_teo" },
                { name: "🔗 py_functions_duno", url: "https://github.com/alvarofonteles/py_functions_duno" },
                { name: "🔗 py_collections_duno", url: "https://github.com/alvarofonteles/py_collections_duno" },
                { name: "🔗 python_otavio", url: "https://github.com/alvarofonteles/python_otavio" },
                { name: "🔗 py_oop_otavio", url: "https://github.com/alvarofonteles/py_oop_otavio" },
                { name: "🔗 py_oop_duno", url: "https://github.com/alvarofonteles/py_oop_duno" },
            ],
            featured: true,
            status: "in-progress",
            image: "assets/images/projects/python-fundamentals.jpg"
        },
        {
            id: 2,
            title: "📊 FASE 2 - Pandas + ETL",
            description: "Manipulação de dados em memória com Pandas: ETL de datasets médios, análise exploratória e preparação para PySpark.",
            technologies: ["Python", "Pandas", "ETL", "Data Analysis", "Data Cleaning", "Data Visualization"],
            links: [
                // { name: "🔗 pandas_teo", url: "https://github.com/alvarofonteles/pandas_teo" }
            ],
            featured: true,
            status: "planned",
            image: "assets/images/projects/pandas-analysis.jpg"
        },
        {
            id: 3,
            title: "⚡ FASE 3 - PySpark Fundamentos",
            description: "Processamento distribuído com PySpark: DataFrames, Spark SQL e transição suave de Pandas para Big Data.",
            technologies: ["PySpark", "DataFrames", "Spark SQL", "Distributed Computing", "ETL"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/pyspark-intro.jpg"
        },
        {
            id: 4,
            title: "⚡ FASE 4 - PySpark Avançado + Delta Lake",
            description: "Pipelines production-ready com PySpark avançado: otimização, Delta Lake e qualidade de dados em escala.",
            technologies: ["PySpark", "Delta Lake", "Data Quality", "Performance", "Optimization"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/pyspark-pipeline.jpg"
        },
        {
            id: 5,
            title: "🏗️ FASE 5 - Lakehouse Architecture",
            description: "Arquitetura Lakehouse moderna: Data Lake confiável com ACID transactions, schema evolution e medallion architecture.",
            technologies: ["Delta Lake", "Medallion Architecture", "ACID Transactions", "Schema Evolution", "Data Governance"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/data-lakehouse.jpg"
        },
        {
            id: 6,
            title: "🔄 FASE 6 - Airflow Orchestration",
            description: "Orchestration de pipelines com Airflow: agendamento, monitoramento, dependencies e pipelines production-ready.",
            technologies: ["Airflow", "DAGs", "Orchestration", "Monitoring", "Scheduling"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/airflow-dags.jpg"
        },
        {
            id: 7,
            title: "☁️ FASE 7 - AWS Data Stack",
            description: "Cloud computing para dados: S3 (storage), Glue (ETL serverless), Athena (query) e integração PySpark com AWS.",
            technologies: ["AWS S3", "AWS Glue", "AWS Athena", "boto3", "Cloud Computing"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/aws-data-stack.jpg"
        },
        {
            id: 8,
            title: "📊 FASE 8 - dbt Analytics Engineering",
            description: "Engenharia analytics moderna: camada transformação com dbt, documentação, testes e data quality.",
            technologies: ["dbt", "Data Transformation", "Analytics Engineering", "Documentation", "Testing", "Data Quality"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/dbt-transformations.jpg"
        },
        {
            id: 9,
            title: "🔍 FASE 9 - Databricks Platform",
            description: "Plataforma enterprise completa: Lakehouse unified, CI/CD, governance e Unity Catalog.",
            technologies: ["Databricks", "Unity Catalog", "Spark SQL", "Workflows", "Data Governance"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/databricks-spark.jpg"
        },
    ],
    
    // Projetos Data Engineering
    portfolio: [    
        {
            id: 1,
            title: "🔄 Pipeline ETL - Arquitetura Tradicional",
            description: "Pipeline ETL clássico: extração, transformação e depois carga. Demonstra fundamentos sólidos de engenharia de dados.",
            technologies: ["PySpark", "Airflow", "Python", "Pandas", "SQL"],
            links: [],
            featured: true,
            status: "planned",
            image: "assets/images/projects/pipeline-etl.jpg",
            architecture: "ETL" // 🆕 Mostra o padrão arquitetural
        },
        {
            id: 2,
            title: "⚡ Pipeline ELT - Arquitetura Moderna",
            description: "Pipeline ELT moderno com Delta Lake: extração, carga direta no data lake e transformação sob demanda. Arquitetura cloud-native.",
            technologies: ["Delta Lake", "PySpark", "dbt", "AWS S3", "Databricks"],
            links: [],
            featured: true,
            status: "planned", 
            image: "assets/images/projects/pipeline-elt.jpg",
            architecture: "ELT" // 🆕 Mostra o padrão moderno
        }
    ],
};