// ===== CARREGAR FORMAÇÃO =====
function loadEducations() {
    const container = document.getElementById('education-container');
    
    if (!container) {
        return;
    }

    const featuredEducation = EDUCATIONS_DATA.filter(edu => edu.featured);
    
    container.innerHTML = featuredEducation.map(edu => `
        <div class="education-item" data-edu-id="${edu.id}">
            <div class="education-header">
                <h3>${edu.title}</h3>
                <div class="education-meta">
                    <span class="education-date">${edu.period}</span>
                    <span class="education-institution">${edu.institution}</span>
                    <span class="education-status status-${edu.status}">
                        ${getStatusText(edu.status)}
                    </span>
                </div>
            </div>
            
            <p class="education-description">${edu.description}</p>
            
            <div class="education-technologies">
                <h4>Áreas de Estudo:</h4>
                <div class="tech-tags">
                    ${edu.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            ${edu.links ? `
                <div class="education-links">
                    ${edu.links.map(link => `
                        <a href="${link.url}" target="_blank" class="education-link">
                            📜 ${link.name}
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
    loadEducations
};