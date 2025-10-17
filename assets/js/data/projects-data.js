// ===== DADOS DOS PROJETOS - ENGENHARIA DE DADOS MODERNA =====
const PROJECTS_DATA = [
    {
        id: 1,
        title: "🐍 Fundamentos Python",
        description: "Estudo dos conceitos básicos de Python: estruturas de dados, funções, OOP, tratamento de erros e boas práticas.",
        technologies: ["Python", "OOP", "Data Structures", "Error Handling", "PEP8"],
        links: [
            { name: "python-teo", url: "https://github.com/alvarofonteles/python-teo" },
            { name: "py-functions-duno", url: "https://github.com/alvarofonteles/py-functions-duno" },
        ],
        featured: true,
        status: "in-progress",
        image: "assets/images/projects/python-fundamentals.jpg"
    },
    {
        id: 2,
        title: "📊 Análise de Dados com Pandas",
        description: "Exploração e manipulação de datasets com Pandas: limpeza, transformação, agregação e visualização de dados.",
        technologies: ["Python", "Pandas", "Data Cleaning", "Data Analysis", "Data Visualization", "Matplotlib"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/pandas-analysis.jpg"
    },
    {
        id: 3,
        title: "⚡ Introdução ao PySpark",
        description: "Primeiros passos com PySpark: RDDs, DataFrames, operações básicas e processamento distribuído.",
        technologies: ["PySpark", "DataFrames", "Spark SQL", "Distributed Computing"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/pyspark-intro.jpg"
    },
    {
        id: 4,
        title: "⚗️ Pipeline ETL com PySpark",
        description: "Desenvolvimento de pipeline distribuído para processamento de dados em larga escala com qualidade, monitoramento e tratamento de erros.",
        technologies: ["PySpark", "Delta Lake", "Python", "Data Quality", "ETL Patterns"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/pyspark-pipeline.jpg"
    },
    {
        id: 5,
        title: "🏗️ Arquitetura Data Lakehouse",
        description: "Estudo de arquitetura moderna com Delta Lake, medallion architecture (Bronze → Silver → Gold) e governança de dados.",
        technologies: ["Delta Lake", "Medallion Architecture", "Data Governance", "AWS S3", "Data Lakes", "ACID Transactions", "Schema Evolution"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/data-lakehouse.jpg"
    },
    {
        id: 6,
        title: "🔄 Orquestração com Airflow",
        description: "Implementação de DAGs para orquestração de pipelines de dados com monitoramento, retry policies e alertas.",
        technologies: ["Airflow", "DAGs", "Python", "Monitoring", "ETL Orchestration", "Operators"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/airflow-dags.jpg"
    },
    {
        id: 7,
        title: "☁️ AWS Data Ecosystem",
        description: "Estudo da stack completa AWS para dados: S3, Glue, EMR, Athena, Redshift e Step Functions.",
        technologies: ["AWS S3", "AWS Glue", "EMR", "Athena", "Step Functions", "Redshift", "IAM", "CloudWatch"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/aws-data-stack.jpg"
    },
    {
        id: 8,
        title: "📊 Transformações com dbt",
        description: "Modelagem e transformação de dados com dbt (data build tool) seguindo boas práticas de engenharia de dados.",
        technologies: ["dbt", "SQL", "Data Modeling", "Testing", "Documentation"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/dbt-transformations.jpg"
    },
    {
        id: 9,
        title: "🔍 Databricks & Spark SQL",
        description: "Exploração da plataforma Databricks para processamento distribuído e análises com Spark SQL.",
        technologies: ["Databricks", "Spark SQL", "Delta Lake", "Data Engineering", "Notebooks", "Workflows"],
        link: [],
        featured: true,
        status: "planned",
        image: "assets/images/projects/databricks-spark.jpg"
    }
];