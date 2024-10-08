const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

export function createNavMenu() {
  // Create nav element
  const mainNav = document.createElement('nav');
  mainNav.classList.add('main-navigation');
  // Create ul element
  const navList = document.createElement('ul');
  navList.innerHTML = navContent;
  // Append ul to nav
  mainNav.append(navList);
  // Return nav element
  document.querySelector('.siteheader').append(mainNav);
}
