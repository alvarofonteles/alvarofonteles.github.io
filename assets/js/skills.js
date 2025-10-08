// ===== CARREGAMENTO DE HABILIDADES DIVIDIDAS =====
function loadSkillsDivided() {
    console.log('🛠️ Carregando habilidades...');

    // Stack Profissional (Atual)
    const containerAtual = document.getElementById('skills-current-stack');
    if (containerAtual) {
        containerAtual.innerHTML = SKILLS_DATA.atual.map(category => `
            <div class="skill-category">
                <h4>${category.category}</h4>
                <ul>
                    ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        `).join('');
        console.log('✅ Habilidades atuais carregadas');
    }

    // Em Transição & Aprendizado
    const containerTransicao = document.getElementById('skills-transition-track');
    if (containerTransicao) {
        containerTransicao.innerHTML = SKILLS_DATA.transicao.map(category => `
            <div class="skill-category">
                <h4>${category.category}</h4>
                <ul>
                    ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        `).join('');
        console.log('✅ Habilidades em transição carregadas');
    }

    console.log('🎯 Todas as habilidades carregadas com sucesso!');
}

// Exportar funções
window.ExperienceManager = {
    loadSkillsDivided
};