// ===== CARREGAR CONTATO =====
function loadContact() {
    const container = document.getElementById('contact-container');
    
    if (!container || !CONTACT_DATA) {
        return;
    }

    container.innerHTML = CONTACT_DATA.items.map(contact => `
        <div class="contact-item">
            <a href="${contact.url}" 
               ${contact.target ? `target="${contact.target}"` : ''}
               class="contact-badge-link">
                <img src="${contact.badge}" alt="${contact.alt}" class="contact-badge">
            </a>
        </div>
    `).join('');
}