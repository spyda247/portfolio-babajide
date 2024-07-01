import { displayMobileMenu, getFormData } from '../modules.js';
(function () {
  const isMobile = Math.min(window.screen.width, window.screen.height) < 768;
  if (isMobile) displayMobileMenu();
  getFormData(window.location.search);
})();
