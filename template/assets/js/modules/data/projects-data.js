// ===== DADOS DOS PROJETOS =====
const PROJECTS_DATA = {
    projetos: [
        // Projeto Portfólio
        {
            id: "portfolio-template",
            title: "🚀 Portfolio Template - GitHub Pages",
            subtitle: "Template Moderno para Desenvolvedores",
            description: "Modelo de portfolio profissional moderno e responsivo, desenvolvido com HTML5, CSS3 e JavaScript vanilla.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Vanilla JS", "SEO", "GitHub Pages", "Responsive Design", "CSS Grid", "Flexbox"],
            links: [
                { name: "⭐ Repositório", url: "https://github.com/alvarofonteles/alvarofonteles.github.io" },
                { name: "📖 README", url: "https://github.com/alvarofonteles/alvarofonteles.github.io#readme" },
            ],
            featured: true,
            status: "completed",
            images: [
                "/template/assets/images/projects/badges/portfolio-badge.svg",
                "/template/assets/images/projects/badges/github-sponsors-badge.svg"
            ]
        },
        // Projetos Data Engineering
        {
            id: "projects-technical",
            title: "🎲 Projetos Técnicos",            
            subtitle: "Implementações com Tecnologias Modernas",
            description: "Portfólio de projetos desenvolvidos com Python, processamento de dados e soluções em cloud.",
            technologies: ["Python", "Pandas", "PySpark", "Delta Lake", "AWS", "Airflow", "dbt", "Databricks"],
            links: [
                { name: "🚀 Ver Projetos", url: "/projects/index.html" }                
            ],
            featured: true,
            status: "in-progress",
            images: [
                "/template/assets/images/projects/badges/python-badge.svg",
                "/template/assets/images/projects/badges/pyspark-advanced-badge.svg",
                "/template/assets/images/projects/badges/delta-lake-badge.svg",
                "/template/assets/images/projects/badges/aws-badge.svg"
            ]
        }
    ],
};