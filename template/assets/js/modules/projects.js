// ===== CARREGAR PROJETOS =====
function loadProjects() {
    // Projetos
    const container = document.getElementById('projects');

    if (!container) {
        return;
    }

    const featuredProjects = PROJECTS_DATA.projetos.filter(exp => exp.featured);
    container.innerHTML = featuredProjects.map(project => `
        <div class="project" data-project-id="${project.id}">
    
            ${project.images ? project.images.map(img => `<img src="${img}" alt="" class="project-image">`).join('') : ''}

            <h3>${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>    

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
                        <a href="${link.url}" class="project-link">
                            ${link.name}
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
        'paused': '⏸️ Pausado'

    };
    return statusMap[status] || status;
}