// ===== INICIALIZAÇÃO PROJECTS DATA ENGINEERING =====
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa core compartilhado
    CORE.initializeCore();    
        
    if (typeof loadDESkills === 'function') loadDESkills();
    if (typeof loadDEProjects === 'function') loadDEProjects();
    if (typeof loadDECertifications === 'function') loadDECertifications();
});