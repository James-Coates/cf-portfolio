(function() {
  const toggler = document.querySelector('.toggler');
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      toggler.checked = !toggler.checked;
      console.log(toggler.checked);
    });
  });
})();
