  const toggleBtn = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });