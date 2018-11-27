/* eslint-disable */
import AOS from 'aos';
import Jump from 'jump.js';
import gumshoe from 'gumshoejs';

AOS.init({
  offset: 160,
});

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

(function(){

  function typeWriter(element, text) {
    element.innerHTML = '';
    const textArray = text.split('');
    textArray.forEach((letter, i) => {
      setTimeout(function(){element.innerHTML += letter}, 75 * i);
    })
  }

  var title = document.getElementsByTagName('h1')[0];
  console.log(title);

  var lastSection = ""

  gumshoe.init({
    selector: '[data-gumshoe] a', // Default link selector (must use a valid CSS selector)
    container: window, // The element to spy on scrolling in (must be a valid DOM Node)
    scrollDelay: 2, // Wait until scrolling has stopped before updating the navigation
    offset: 57, // Distance in pixels to offset calculations
    callback: function (nav) {

      if (lastSection != nav.nav ) {
        var idd = nav.nav.innerHTML;
        console.log(idd);
        typeWriter(title, idd);
        lastSection = nav.nav;
      }
    }
  });
})();
