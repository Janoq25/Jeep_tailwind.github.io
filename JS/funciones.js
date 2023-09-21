
  document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var togle = document.getElementById('menu-toggle')
    menu.classList.toggle('hidden');
    togle.classList.toggle('border');
    togle.classList.toggle('rounded-md');
  });
