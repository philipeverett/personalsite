document.addEventListener("DOMContentLoaded", function() {
    console.log("Don Felipe Website Loaded");
    
    // Example interactive feature: smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
