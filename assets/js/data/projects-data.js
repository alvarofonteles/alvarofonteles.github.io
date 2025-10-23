// ===== DADOS DOS PROJETOS - ROADMAP DATA ENGINEER =====
const PROJECTS_DATA = [
    {
        id: 0,
        title: "🏗️ Metodologia de Estudos",
        description: "Estrutura completa organizada em 9 fases para dominar Data Engineering moderno. Mostra minha abordagem sistemática de aprendizado.",
        technologies: ["Organização", "Metodologia", "Roadmap", "Planejamento", "Data Engineering"],
        links: [
            { 
                name: "👁️ Ver Estrutura Completa", 
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
            { name: "python-teo", url: "https://github.com/alvarofonteles/python-teo" },
            { name: "py-functions-duno", url: "https://github.com/alvarofonteles/py-functions-duno" },
            { name: "py-collections-duno", url: "https://github.com/alvarofonteles/py-collections-duno" }
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
            { name: "pandas-teo", url: "https://github.com/alvarofonteles/pandas-teo" }
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
    }
];