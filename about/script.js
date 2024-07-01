import {
  listExperience,
  listEducation,
  displayMobileMenu,
  listExperienceMobile,
} from '../modules.js';
import data from '../data.js';
(function () {
  const isMobile = Math.min(window.screen.width, window.screen.height) < 768;
  if (isMobile && data.length !== 0) {
    displayMobileMenu();
    listExperienceMobile(data.experience);
  }
  if (data.length !== 0) {
    listEducation(data.eduListItems);
    listExperience(data.experience);
  }
})();
