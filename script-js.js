// Toggle expandable sections
function toggleSection(header) {
    const section = header.parentElement;
    const content = section.querySelector('.section-content');
    const icon = header.querySelector('.toggle-icon');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.textContent = '+';
    } else {
        content.classList.add('expanded');
        icon.textContent = '−';
    }
}

// Initialize all sections as expanded on page load
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.add('expanded');
    });
});

// Add particle animation effect (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const particlesDiv = document.querySelector('.background-particles');
    if (particlesDiv) {
        // Create animated gradient effect
        let position = 0;
        setInterval(() => {
            position += 1;
            particlesDiv.style.backgroundPosition = `${position}px ${position}px, ${40 + position}px ${60 + position}px, ${130 + position}px ${270 + position}px`;
        }, 50);
    }
});