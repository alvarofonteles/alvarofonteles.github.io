// ===== CARREGAR CERTIFICAÇÕES =====
function loadCertifications() {
    const container = document.getElementById('certifications-container');
    
    if (!container) return;
    
    const featuredCerts = CERTIFICATIONS_DATA
        .filter(cert => cert.featured)
        .sort((a, b) => b.id - a.id);

    container.innerHTML = featuredCerts.map(cert => `
        <div class="certification-item" data-cert-id="${cert.id}">
            <div class="certification-header">
                <h3>${cert.title}</h3>
                <div class="certification-meta">
                    <span class="certification-date">${cert.period}</span>
                    <span class="certification-institution">${cert.institution}</span>
                </div>
            </div>
            
            <p class="certification-description">${cert.description}</p>
            
            <div class="tech-tags">
                ${cert.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="certification-meta">
                <span class="certification-status status-${cert.status}">
                    ${getStatusText(cert.status)}
                </span>
            </div>

            ${cert.links ? `
                <div class="certification-links">
                    ${cert.links.map(link => `
                        <a href="${link.url}" target="_blank" class="certification-link">
                            📜 ${link.name}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');    
}

// ===== TEXTO DO STATUS =====
function getStatusText(status) {
    const statusMap = {
        'completed': '✅ Concluído',
        'in-progress': '🔄 Em Andamento',
        'planned': '📅 Planejado',
        'paused': '⏸️ Pausado'
    };
    return statusMap[status] || status;
}