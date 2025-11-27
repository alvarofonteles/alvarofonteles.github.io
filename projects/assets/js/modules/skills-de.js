// ===== CARREGAMENTO DE HABILIDADES DATA ENGINEERING =====
function loadDESkills() {
    // Em Transição & Aprendizado
    const containerHandsOn = document.getElementById('skills-transition');

    if (!containerHandsOn || !SKILLS_DE_DATA) {
        return;
    }

    const featuredHandsOn = SKILLS_DE_DATA.transicao.filter(skill => skill.featured);
    containerHandsOn.innerHTML = featuredHandsOn.map(category => `
        <div class="skill-category" data-category-id="${category.id}">
            <h4>${category.category}</h4>
            <p class="skill-description">${category.description}</p>
            <div class="tech-tags">
                ${category.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}