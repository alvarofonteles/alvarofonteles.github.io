// ===== CARREGAR EXPERIÊNCIA =====
function loadExperiences() {
    const container = document.getElementById('timeline-container');
    console.log('📝 Carregando experiência...', container);
    
    if (!container) {
        console.error('❌ timeline-container não encontrado!');
        return;
    }
    
    const featuredExperience = EXPERIENCES_DATA.filter(exp => exp.featured);
    console.log('✅ Experiências em destaque:', featuredExperience.length);
    
    container.innerHTML = featuredExperience.map(exp => `
        <div class="timeline-item" data-exp-id="${exp.id}">
            <div class="timeline-header">
                <h3>${exp.title}</h3>
                <div class="timeline-meta">
                    <span class="timeline-date">${exp.period}</span>
                    <span class="timeline-company">${exp.company} • ${exp.location}</span>
                </div>
            </div>
            
            <p class="timeline-description">${exp.description}</p>
            
            <div class="timeline-achievements">
                <h4>Principais Conquistas:</h4>
                <ul>
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            
            <div class="timeline-technologies">
                <h4>Tecnologias:</h4>
                <div class="tech-tags">
                    ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    console.log('✅ Experiência carregada com sucesso!');
}

// Adicionar CSS para timeline
const experienceStyle = document.createElement('style');
experienceStyle.textContent = `
    .timeline-header {
        margin-bottom: 1rem;
    }
    
    .timeline-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        margin-top: 0.5rem;
    }
    
    .timeline-date {
        background: var(--primary-color);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .timeline-company {
        color: var(--text-light);
        font-weight: 500;
    }
    
    .timeline-description {
        color: var(--text-color);
        margin-bottom: 1rem;
        line-height: 1.6;
    }
    
    .timeline-achievements,
    .timeline-technologies {
        margin-top: 1.5rem;
    }
    
    .timeline-achievements h4,
    .timeline-technologies h4 {
        color: var(--dark-color);
        margin-bottom: 0.8rem;
        font-size: 1rem;
    }
    
    .timeline-achievements ul {
        list-style: none;
        padding-left: 0;
    }
    
    .timeline-achievements li {
        padding: 0.3rem 0;
        position: relative;
        padding-left: 1.2rem;
    }
    
    .timeline-achievements li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--success-color);
        font-weight: bold;
    }
    
    .navbar a.active {
        color: var(--primary-color);
        background: rgba(255,255,255,0.1);
    }
`;
document.head.appendChild(experienceStyle);

// Exportar funções
window.ExperienceManager = {
    loadExperiences,
};