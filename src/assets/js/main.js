/* eslint-disable */
import AOS from 'aos';
import MenuPage from './components/menuPage';
import typeWriter from './components/typeWriter';
import BackTop from './components/backTop';

MenuPage.create('nav-menu-button', 'navBox');
typeWriter.create();
BackTop.create('[data-back]');

AOS.init({
  offset: 160,
});

