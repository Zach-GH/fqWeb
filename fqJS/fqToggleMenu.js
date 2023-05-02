window.onload = function() {
    const menuIcon = document.querySelector('.toggle-menu-icon');
    const menu = document.querySelector('.toggle-menu');
  
    menuIcon.addEventListener('click', () => {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
      menuIcon.classList.toggle('change');
    });
  }
  