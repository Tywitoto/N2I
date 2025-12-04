// Fonction pour basculer le menu déroulant
function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('active');
}

// Fermer le menu si on clique ailleurs
document.addEventListener('click', function(event) {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (!menuToggle.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});

// Fonction pour gérer la recherche
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm !== '') {
        console.log('Recherche lancée pour:', searchTerm);
        // Ajoute ici la logique de recherche
        alert('Recherche pour: ' + searchTerm);
    }
}
