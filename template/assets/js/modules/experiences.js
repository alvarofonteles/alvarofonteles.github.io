// ===== CARREGAR EXPERIÊNCIA =====
function loadExperiences() {
    const container = document.getElementById('experience-container');
    
    if (!container) {
        return;
    }
    
    // CORREÇÃO: Use EXPERIENCES_DATA em vez de featuredExperience
    const experiencesToShow = EXPERIENCES_DATA.filter(exp => exp.featured);
    
    container.innerHTML = experiencesToShow.map(exp => `
        <div class="experience-item" data-exp-id="${exp.id}">
            <h3>${exp.title}</h3>
            <div class="experience-meta">
                <span class="experience-date">${exp.period}</span>
                <span class="experience-company">${exp.company} • ${exp.location}</span>
            </div>
            
            <p class="experience-description">${exp.description}</p>
            
            <div class="experience-achievements">
                <h4>Principais Conquistas:</h4>
                <ul>
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            
            <div class="experience-technologies">
                <div class="tech-tags">
                    ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');    
}