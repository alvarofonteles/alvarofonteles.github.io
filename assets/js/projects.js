// ===== CARREGAR PROJETOS =====
function loadProjects() {
    const container = document.getElementById('projects-container');
    console.log('📦 Carregando projetos...', container);

    if (!container) {
        console.error('❌ projects-container não encontrado!');
        return;
    }

    const featuredProjects = PROJECTS_DATA.filter(exp => exp.featured);
    console.log('✅ Projetos em destaque:', featuredProjects.length);

    container.innerHTML = featuredProjects.map(project => `
        <div class="project" data-project-id="${project.id}">
            <h3>${project.title}</h3>
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

    console.log('✅ Projetos carregados com sucesso!');
}

// ===== TEXTO DO STATUS =====
function getStatusText(status) {
    const statusMap = {
        'completed': '✅ Concluído',
        'in-progress': '🔄 Em Andamento',
        'planned': '📅 Planejado'
    };
    return statusMap[status] || status;
}

// Adicionar CSS para status
const style = document.createElement('style');
style.textContent = `
    .project-meta {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
        align-items: center;
    }
    
    .project-status {
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .status-completed {
        background: #d4edda;
        color: #155724;
    }
    
    .status-in-progress {
        background: #fff3cd;
        color: #856404;
    }
    
    .status-planned {
        background: #d1ecf1;
        color: #0c5460;
    }
    
    .featured-badge {
        background: #fff3cd;
        color: #856404;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .project-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);

// Exportar funções
window.EducationManager = {
    loadProjects
};