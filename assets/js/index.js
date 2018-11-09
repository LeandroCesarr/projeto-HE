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
  const title = document.querySelector('h1');

  function typeWriter(element, text) {
    element.innerHTML = '';
    const textArray = text.split('');
    textArray.forEach((letter, i) => {
      setTimeout(function(){element.innerHTML += letter}, 75 * i);
    })
  }

  typeWriter(title, "< PineappleDevs / >")

  function changeScroll() {
    var documentTop = $(document).scrollTop();
      if ((documentTop > $target[1] - 40) && (documentTop < $target[2] - 65)) {
        title.innerHTML = "Equipe"
      }
      else if ((documentTop > $target[2] - 65) && (documentTop < $target[3] - 60)) {
        title.innerHTML = "História"
      }
      else if (documentTop > $target[3] - 65) {
        title.innerHTML = "Projetos"
      }
      else {
        title.innerHTML = "&lt PineappleDevs / &gt"
      }

    }
  $(document).scroll(function(){changeScroll()});

})();

