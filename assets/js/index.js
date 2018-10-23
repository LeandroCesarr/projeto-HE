(function() {

  var navMenuButton = document.getElementById('nav-menu-button');
  var navMenu = document.getElementById('navBox');

  function construct() {
    setupNavMenu();
    setupNavMenuLinks();
  }

  function setupNavMenu() {
    navMenuButton.addEventListener('click', function() {
      toggleMenu();
    });
  }

  function toggleMenu() {
    navMenuButton.classList.toggle("is-active");
    navMenu.classList.toggle("header-nav__active");
  }

  function setupNavMenuLinks() {
    var links = navMenu.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {

      links[i].addEventListener('click', function(event) {
        event.preventDefault();

        var sectionId = event.currentTarget.getAttribute('href');
        // var offset = event.currentTarget.getAttribute('data-offset');

        jumpToSection(sectionId);
        toggleMenu();

      });

    }
  }

  function jumpToSection(section_id, offset) {
    Jump(section_id, {
      duration: 1000,
      offset: -87,
      a11y: false
    });
  }

  construct();

})();

