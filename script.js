// Function to handle the display of different pages
function showPage(pageId) {
    // Get all pages and hide them
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active'); // Display the active page
}

// Add event listeners to the navigation buttons
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const pageId = button.getAttribute('data-page'); // Use data attribute for cleaner access
        showPage(pageId);
    });
});

// Show the home page by default
showPage('home');
