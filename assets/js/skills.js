// ===== CARREGAMENTO DE HABILIDADES DIVIDIDAS =====
function loadSkillsDivided() {
    // Stack Profissional (Atual)
    const containerAtual = document.getElementById('skills-current-stack');
    if (containerAtual) {
        containerAtual.innerHTML = SKILLS_DATA.atual.map(category => `
            <div class="skill-category">
                <h4>${category.category}</h4>
                <ul>
                    ${category.skills.map(skill => `
                        <li>${skill.name} - ${skill.level}%</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    // // Em Transição & Aprendizado
    const containerTransicao = document.getElementById('skills-transition-track');
    if (containerTransicao) {
        containerTransicao.innerHTML = SKILLS_DATA.transicao.map(category => `
            <div class="skill-category" data-category-id="${category.id}">
                <h4>${category.category}</h4>
                <p class="skill-description">${category.description}</p>
                <div class="tech-tags">
                    ${category.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Exportar funções
window.ExperienceManager = {
    loadSkillsDivided
};