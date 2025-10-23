// ===== CARREGAMENTO DE HABILIDADES DIVIDIDAS =====
function loadSkillsDivided() {
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
}

// Exportar funções
window.ExperienceManager = {
    loadSkillsDivided
};