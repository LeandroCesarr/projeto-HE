import gumshoe from 'gumshoejs';

class TypeWriter {
  constructor() {
    this.title = document.querySelector('[data-page-title]');
    this.setupGumshoe();
  }

  setupGumshoe() {
    let lastSection = '';

    gumshoe.init({
      selector: '[data-gumshoe] a', // Default link selector (must use a valid CSS selector)
      container: window, // The element to spy on scrolling in (must be a valid DOM Node)
      scrollDelay: 2, // Wait until scrolling has stopped before updating the navigation
      offset: 57, // Distance in pixels to offset calculations
      callback: (section) => {
        if (lastSection !== section.nav) {
          const text = section.nav.innerHTML;
          this.machineWriter(text);
          lastSection = section.nav;
        }
      },
    });
  }

  machineWriter(text) {
    const textArray = text.split('');
    this.title.innerHTML = '';

    textArray.forEach((letter, i) => {
      setTimeout(() => {
        this.title.innerHTML += letter;
      }, 75 * i);
    });
  }
}

export default {
  create() {
    return new TypeWriter();
  },
};

export const Class = TypeWriter;
