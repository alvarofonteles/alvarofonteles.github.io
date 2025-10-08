// ===== CARREGAR FORMAÇÃO =====
function loadEducations() {
    const container = document.getElementById('education-container');
    console.log('🎓 Carregando formação...', container);

    if (!container) {
        console.error('❌ education-container não encontrado!');
        return;
    }

    const featuredEducation = EDUCATIONS_DATA.filter(edu => edu.featured);
    console.log('✅ Formações em destaque:', featuredEducation.length);

    container.innerHTML = featuredEducation.map(edu => `
        <div class="education-item" data-edu-id="${edu.id}">
            <div class="education-header">
                <h3>${edu.title}</h3>
                <div class="education-meta">
                    <span class="education-institution">${edu.institution}</span>
                    <span class="education-date">${edu.period}</span>
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
        </div>
    `).join('');

    console.log('✅ Formação carregada com sucesso!');
}

// Exportar funções
window.EducationManager = {
    loadEducations
};