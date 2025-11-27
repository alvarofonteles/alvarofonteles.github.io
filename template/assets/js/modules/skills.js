// ===== CARREGAMENTO DE HABILIDADES DIVIDIDAS =====
function loadSkillsDivided() {
    // Stack Profissional
    const containerAtual = document.getElementById('skills-current-stack');
    
    if (!containerAtual || !SKILLS_DATA) {
        return;
    }

    const featuredAtual = SKILLS_DATA.atual.filter(skill => skill.featured);
    
    containerAtual.innerHTML = featuredAtual.map(category => `
        <div class="skill-category">
            <h4>${category.category}</h4>
            <ul>
                ${category.technologies.map(skill => `
                    <li>${skill.name} - ${skill.level}%</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}