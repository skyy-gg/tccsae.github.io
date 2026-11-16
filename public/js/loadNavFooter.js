// Carrega a barra de navegação
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  });

// Carrega o rodapé
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
