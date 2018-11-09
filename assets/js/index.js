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
  
  AOS.init({
    offset: 160,
  });

})();


(function(){

  var $target = [];
      $target[0] = $('.s-summary--title').offset().top;
      $target[1] = $('.s-team--title').offset().top;
      $target[2] = $('.s-history--title').offset().top;
      $target[3] = $('.s-projects--title').offset().top;

  function changeScroll() {
    var documentTop = $(document).scrollTop();

      if ((documentTop > $target[1] - 20) && (documentTop < $target[2])) {
        document.getElementsByTagName('h1')[0].innerHTML = "Equipe"
      }
      else if ((documentTop > $target[2] - 20) && (documentTop < $target[3] - 20)) {
        document.getElementsByTagName('h1')[0].innerHTML = "História"
      }
      else if (documentTop > $target[3] - 20) {
        document.getElementsByTagName('h1')[0].innerHTML = "Projetos"
      }
      else {
        document.getElementsByTagName('h1')[0].innerHTML = "&lt PineappleDevs / &gt"
      }

    }
  $(document).scroll(function(){changeScroll()});

})();

