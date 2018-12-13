import Jump from 'jump.js';

class BackTop {
  constructor() {
    this.elm = document.querySelector('[data-back]');
    this.href = document.querySelector('[data-back]').getAttribute('href');
    this.setup();
  }

  setup() {
    this.elm.addEventListener('click', () => {
      BackTop.backTopJump(this.href);
    });
  }

  static backTopJump(pao) {
    Jump(pao, {
      duration: 1000,
      offset: -87,
      a11y: false,
    });
  }
}

export default {
  create() {
    return new BackTop();
  },
};

export const Class = BackTop;
