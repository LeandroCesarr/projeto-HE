import Jump from 'jump.js';

class MenuPage {
  constructor(navMenuButton, navMenu) {
    this.navMenuButton = document.getElementById(navMenuButton);
    this.navMenu = document.getElementById(navMenu);

    this.setup();
  }

  setup() {
    this.setupNavMenu();
    this.setupNavMenuLinks();
  }

  setupNavMenu() {
    this.navMenuButton.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.navMenuButton.classList.toggle('is-active');
    this.navMenu.classList.toggle('header-nav__active');
  }

  setupNavMenuLinks() {
    const links = this.navMenu.querySelectorAll('a');

    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', (event) => {
        event.preventDefault();

        const sectionId = event.currentTarget.getAttribute('href');
        // var offset = event.currentTarget.getAttribute('data-offset');

        MenuPage.jumpToSection(sectionId);
        this.toggleMenu();
      });
    }
  }

  static jumpToSection(sectionId) {
    Jump(sectionId, {
      duration: 1000,
      offset: -87,
      a11y: false,
    });
  }
}

export default {
  create(navMenuButton, navMenu) {
    return new MenuPage(navMenuButton, navMenu);
  },
};

export const Class = MenuPage;
