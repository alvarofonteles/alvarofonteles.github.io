// ===== CARREGAR PROJETOS DATA ENGINEERING =====
function loadDEProjects() {
    // Roadmap Completo
    const containerHoadmap = document.getElementById('projects-container-hoadmap');
    
    if (!containerHoadmap || !PROJECTS_DE_DATA) {
        return;
    }    
    
    const featuredHoadmap = PROJECTS_DE_DATA.roadmap.filter(prd => prd.featured);    
    containerHoadmap.innerHTML = featuredHoadmap.map(project => `
        <div class="project" data-project-id="${project.id}">
    
            ${project.images ? project.images.map(img => `<img src="${img}" alt="" class="project-image">`).join('') : ''}

            <h4>${project.title}</h4>
            <p>${project.description}</p>
            
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-meta">
                <span class="project-status status-${project.status}">
                    ${getDEStatusText(project.status)}
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

    // Projetos Práticos
    const container = document.getElementById('de-projects-container');
    
    if (!container || !PROJECTS_DE_DATA) {
        return;
    }

    const featuredProjects = PROJECTS_DE_DATA.handsOn.filter(project => project.featured);
    
    container.innerHTML = featuredProjects.map(project => `
        <div class="project" data-project-id="${project.id}">
            
            ${project.images ? project.images.map(img => `<img src="${img}" alt="" class="project-image">`).join('') : ''}

            <h4>${project.title}</h4>
            ${project.subtitle ? `<p class="project-subtitle">${project.subtitle}</p>` : ''}
            <p>${project.description}</p>
            
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-meta">
                <span class="project-status status-${project.status}">
                    ${getDEStatusText(project.status)}
                </span>
            </div>

            ${project.links && project.links.length > 0 ? `
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
}

// ===== TEXTO DO STATUS =====
function getDEStatusText(status) {
    const statusMap = {
        'completed': '✅ Concluído',
        'in-progress': '🔄 Em Andamento', 
        'planned': '📅 Planejado',
        'paused': '⏸️ Pausado'
    };
    return statusMap[status] || status;
}