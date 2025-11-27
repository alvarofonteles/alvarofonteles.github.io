// ===== INICIALIZAÇÃO TEMPLATE =====
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa core compartilhado
    CORE.initializeCore();    
    
    if (typeof loadSkillsDivided === 'function') loadSkillsDivided();
    if (typeof loadExperiences === 'function') loadExperiences();
    if (typeof loadEducations === 'function') loadEducations();
    if (typeof loadCertifications === 'function') loadCertifications();    
    if (typeof loadProjects === 'function') loadProjects();
    if (typeof loadContact === 'function') loadContact();    
});