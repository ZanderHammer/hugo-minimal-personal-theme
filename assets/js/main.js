// Dark Mode Toggle
(function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const html = document.documentElement;
  const icon = darkModeToggle.querySelector('i');
  
  // Get current theme (already set in head)
  const currentTheme = html.getAttribute('data-theme') || 'light';
  updateIcon(currentTheme);
  
  darkModeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });
  
  function updateIcon(theme) {
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
})();

