// ===== DADOS DE HABILIDADES =====
const SKILLS_DATA = {
    atual: [
        {
            category: "🗄️ Banco de Dados Oracle",
            skills: [
                { name: "Oracle Database", level: 85 },
                { name: "PL/SQL Avançado", level: 95 },
                { name: "Performance Tuning", level: 85 },
                { name: "Database Modeling", level: 80 },
                { name: "Procedures & Functions", level: 95 },
                { name: "Packages & Triggers", level: 95 }
            ]
        },
        {
            category: "🛠️ Desenvolvimento Oracle",
            skills: [
                { name: "Oracle APEX", level: 75 },
                { name: "Oracle Forms", level: 85 },
                { name: "Oracle Reports", level: 85 }
            ]
        },
        {
            category: "💻 Desenvolvimento Backend",
            skills: [
                { name: "Java", level: 70 },
                { name: "Spring Boot", level: 70 },
                { name: "API REST", level: 70 },
                { name: "OOP & Patterns", level: 70 },
                { name: "Version Control", level: 85 }
            ]
        },
        {
            category: "💼 Habilidades Profissionais",
            skills: [
                { name: "Sustentação de Sistemas", level: 90 },
                { name: "Otimização", level: 85 },
                { name: "Sistemas Corporativos", level: 80 },
                { name: "Integração", level: 80 },
                { name: "Documentação", level: 75 },
                { name: "Domínio Governamental", level: 70 },
                { name: "Domínio Hospitalar", level: 75 }
            ]
        }
    ],

    transicao: [
        {
            id: 1,
            category: "🐍 Python & Data Engineering",
            description: "Fundação técnica sólida em Python, processamento distribuído e arquitetura de dados moderna",
            skills: [
                // 🐍 Python Ecosystem
                "Python", "OOP", "Data Structures", "Pandas", "DataFrames", 
                "Data Preparation", "Data Cleaning", "ETL", "Concurrency",
                
                // ⚡ PySpark & Distributed Computing
                "PySpark", "Spark SQL", "Spark DataFrames", "Distributed Processing",
                "Performance Optimization", "Data Pipelines",
                
                // 🏗️ Modern Data Architecture
                "Delta Lake", "ACID Transactions", "Schema Evolution", 
                "Medallion Architecture", "Data Lakehouse"
            ]
        },
        {
            id: 2,
            category: "☁️ Cloud & Data Platforms",  
            description: "Orquestração de pipelines e computação em nuvem para sistemas escaláveis",
            skills: [
                // 🔄 Orchestration
                "Airflow", "DAGs", "Workflow Orchestration", "Task Dependencies",
                "Monitoring & Metrics", "CI/CD Pipelines",
                
                // ☁️ AWS Data Stack
                "AWS", "AWS S3", "AWS Glue", "AWS Athena", "Data Lakes",
                "Serverless ETL", "Cloud Computing"
            ]
        },
        {
            id: 3,
            category: "🛠️ Data Engineering Tools",
            description: "Plataformas enterprise e engenharia analytics para dados confiáveis",
            skills: [
                // 🔍 Enterprise Platform
                "Databricks", "Unity Catalog", "Data Governance", "Data Pipelines",
                
                // 📊 Analytics Engineering  
                "dbt", "Data Transformation", "Data Documentation", 
                "Data Quality", "Testing", "Data Modeling"
            ]
        }
    ]
};