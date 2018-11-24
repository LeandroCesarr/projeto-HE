/* eslint-disable */
import $ from 'jquery';

class Hello {
  constructor(message) {
    this.message = message;

    this.init();
  }

  init() {
    console.log(this.message, $);
  }
}

export default {
  create(message) {
    return new Hello(message);
  },
};
