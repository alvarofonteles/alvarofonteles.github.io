// ===== CARREGAR PROJETOS =====
function loadProjects() {
    // Projetos Práticos
    const container = document.getElementById('projects-container');
    
    if (!container) {
        return;
    }

    const featuredProjects = PROJECTS_DATA.learning.filter(exp => exp.featured);    
    container.innerHTML = featuredProjects.map(project => `
        <div class="project" data-project-id="${project.id}">
    
            <!-- ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''} -->

            <h4>${project.title}</h4>
            <p>${project.description}</p>
            
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-meta">
                <span class="project-status status-${project.status}">
                    ${getStatusText(project.status)}
                </span>
            </div>

            ${project.links ? `
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" target="_blank" class="project-link">
                            ${link.name}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');

    // Projetos Reais Profissional
    const containerPortfolio = document.getElementById('projects-container-portfolio');
    
    if (!containerPortfolio) {
        return;
    }
    
    const featuredPortfolioProjects = PROJECTS_DATA.portfolio.filter(exp => exp.featured);    
    containerPortfolio.innerHTML = featuredPortfolioProjects.map(project => `
        <div class="project" data-project-id="${project.id}">
    
            <!-- ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''} -->

            <h4>${project.title}</h4>
            <p>${project.description}</p>
            
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-meta">
                <span class="project-status status-${project.status}">
                    ${getStatusText(project.status)}
                </span>
            </div>

            ${project.links ? `
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" target="_blank" class="project-link">
                            🔗 ${link.name}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// ===== TEXTO DO STATUS =====
function getStatusText(status) {
    const statusMap = {
        'completed': '✅ Concluído',
        'in-progress': '🔄 Em Andamento',
        'planned': '📅 Planejado',
        'paused': '🔏 Parado'
    };
    return statusMap[status] || status;
}

// Exportar funções
window.EducationManager = {
    loadProjects
};