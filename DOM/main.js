import { createNavMenu } from './createElements';

// Run function
const navMenu = createNavMenu();
document.querySelector('.siteheader').append(navMenu);
