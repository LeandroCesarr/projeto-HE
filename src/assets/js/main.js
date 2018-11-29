/* eslint-disable */
import AOS from 'aos';
import MenuPage from './components/menuPage';
import typeWriter from './components/typeWriter';

MenuPage.create('nav-menu-button', 'navBox');
typeWriter.create();

AOS.init({
  offset: 160,
});

