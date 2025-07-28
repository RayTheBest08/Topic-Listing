
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });



window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'var(--color-primary-light-blue)';
    navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backgroundColor = 'var(--color-primary-dark-blue)';
    navbar.style.boxShadow = 'none';
  }
});



document.addEventListener('DOMContentLoaded', () => {
    // Sélectionnez tous les liens de navigation (ceux avec data-target)
    const browseLinks = document.querySelectorAll('.Browse-link a');
    // Sélectionnez toutes les sections de contenu
    const contentSections = document.querySelectorAll('.content-section');

    // Fonction pour masquer toutes les sections de contenu
    function hideAllContentSections() {
        contentSections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active-section'); // Supprime la classe active
        });
    }

    // Fonction pour désactiver le style 'active' de tous les liens de navigation
    function deactivateAllBrowseLinks() {
        browseLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Gestionnaire d'événements pour chaque lien de navigation
    browseLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut des ancres (#)

            const targetId = link.dataset.target; // Récupère l'ID de la section cible
            const targetSection = document.getElementById(targetId); // Sélectionne la section cible

            if (targetSection) {
                hideAllContentSections(); // Cache toutes les sections
                deactivateAllBrowseLinks(); // Désactive tous les liens

                // Affiche la section cible
                targetSection.style.display = 'block'; // Ou 'flex', 'grid' selon votre CSS
                targetSection.classList.add('active-section'); // Ajoute la classe active

                // Active le lien cliqué
                link.classList.add('active');
            }
        });
    });

    // Initialisation : Afficher la première section par défaut au chargement de la page
    // Et activer le premier lien
    if (browseLinks.length > 0 && contentSections.length > 0) {
        // Obtenez l'ID cible du premier lien
        const initialTargetId = browseLinks[0].dataset.target;
        const initialSection = document.getElementById(initialTargetId);

        if (initialSection) {
            hideAllContentSections(); // Assurez-vous que tout est caché d'abord
            initialSection.style.display = 'block'; // Affiche la première section
            initialSection.classList.add('active-section');

            browseLinks[0].classList.add('active'); // Active le premier lien
        }
    }
});