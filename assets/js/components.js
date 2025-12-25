document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // Re-initialize any plugins that depend on the header (like sticky header or mobile menu)
            // Note: Since main.js / script.js might run before this, we might need to manually trigger events 
            // or we might need move script loading to after this. 
            // For now, let's just load the content.

            // Highlight active menu item based on current URL
            const validPages = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html']; // Add all your pages
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';

            const navLinks = document.querySelectorAll('.navigation li a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.parentElement.classList.add('current');
                }
            });
        });

    // Load Footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});
