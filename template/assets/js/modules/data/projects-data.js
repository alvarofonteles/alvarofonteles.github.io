// ===== DADOS DOS PROJETOS =====
const PROJECTS_DATA = {
    projetos: [
        // Projeto Portfólio
        {
            id: "portfolio-template",
            title: "🚀 Portfolio Template - GitHub Pages",
            subtitle: "Template Moderno para Desenvolvedores",
            description: "Modelo de portfolio profissional moderno e responsivo, desenvolvido com HTML5, CSS3 e JavaScript Vanilla.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Vanilla JS", "SEO", "GitHub Pages", "Responsive Design", "CSS Grid", "Flexbox"],
            links: [
                { name: "⭐ Repositório", url: "https://github.com/alvarofonteles/alvarofonteles.github.io" },
                { name: "📖 README", url: "https://github.com/alvarofonteles/alvarofonteles.github.io#readme" },
            ],
            featured: true,
            status: "completed",
            images: [
                "/template/assets/images/projects/badges/portfolio-badge.svg"
            ]
        },
        // Projetos Data Engineering
        {
            id: "projects-technical",
            title: "🎲 Projetos Técnicos",            
            subtitle: "Implementações com Tecnologias Modernas",
            description: "Portfólio de projetos desenvolvidos com Python, processamento de dados e soluções em cloud.",
            technologies: ["Python", "Pandas", "PySpark", "Databricks", "Delta Lake", "Lakehouse", "AWS", "Airflow", "dbt"],
            links: [
                { name: "🚀 Ver Projetos", url: "/projects" }                
            ],
            featured: true,
            status: "in-progress",
            images: [
                "/template/assets/images/projects/badges/python-badge.svg"
            ]
        }
    ],
};