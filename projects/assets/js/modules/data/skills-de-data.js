// ===== DADOS DE HABILIDADES DATA ENGINEERING =====
const SKILLS_DE_DATA = {
    transicao: [
        {
            id: 1,
            category: "🐍 Python & Data Engineering",
            description: "Fundação técnica sólida em Python, processamento distribuído e arquitetura de dados moderna",
            technologies: [
                // 🐍 Python Ecosystem
                "Python", "OOP", "Data Structures", "Pandas", "DataFrames",
                "Data Preparation", "Data Cleaning", "ETL", "Concurrency",

                // ⚡ PySpark & Distributed Computing
                "PySpark", "Spark SQL", "Spark DataFrames", "Distributed Processing",
                "Performance Optimization", "Data Pipelines",

                // 🏗️ Modern Data Architecture
                "Delta Lake", "ACID Transactions", "Schema Evolution",
                "Medallion Architecture", "Data Lakehouse"
            ],            
            featured: true,
        },
        {
            id: 2,
            category: "☁️ Cloud & Data Platforms",
            description: "Orquestração de pipelines e computação em nuvem para sistemas escaláveis",
            technologies: [
                // 🔄 Orchestration
                "Airflow", "DAGs", "Workflow Orchestration", "Task Dependencies",
                "Monitoring & Metrics", "CI/CD Pipelines",

                // ☁️ AWS Data Stack
                "AWS", "AWS S3", "AWS Glue", "AWS Athena", "Data Lakes",
                "Serverless ETL", "Cloud Computing"
            ],            
            featured: true,
        },
        {
            id: 3,
            category: "🛠️ Data Engineering Tools",
            description: "Plataformas enterprise e engenharia analytics para dados confiáveis",
            technologies: [
                // 🔍 Enterprise Platform
                "Databricks", "Unity Catalog", "Data Governance", "Data Pipelines",

                // 📊 Analytics Engineering  
                "dbt", "Data Transformation", "Data Documentation",
                "Data Quality", "Testing", "Data Modeling"
            ],            
            featured: true,
        }
    ]
};