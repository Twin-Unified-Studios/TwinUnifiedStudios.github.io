console.log("Website is running!");

// Set mode based on preference (system or stored)
function initializeMode() {
  const savedMode = localStorage.getItem('mode');

  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedMode === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // No stored preference — detect system mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    }
  }

  updateLogoTheme(); // Set correct logo after mode is applied
}

// Toggle mode on user action
function toggleMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  const newMode = isDark ? 'dark' : 'light';
  localStorage.setItem('mode', newMode);
  console.log(`Switched to ${newMode} mode`);
  updateLogoTheme(); // Update logo when mode changes
}

// Update logo image based on mode
function updateLogoTheme() {
  const logo = document.getElementById('site-logo');
  if (!logo) return;

  const isDark = document.body.classList.contains('dark-mode');
  logo.src = isDark
    ? 'images/TwinUnifiedStudios_logo_white.png'
    : 'images/TwinUnifiedStudios_logo_black.png';
}

document.addEventListener('DOMContentLoaded', () => {
  initializeMode();

  const toggleBtn = document.getElementById('mode-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const messageBox = document.getElementById('message');
  const charCount = document.getElementById('char-count');
  const maxChars = 400;

  messageBox.addEventListener('input', () => {
    const remaining = maxChars - messageBox.value.length;
    charCount.textContent = `${remaining} characters remaining`;

    // Add warning color if near limit
    if (remaining <= 40) {
      charCount.classList.add('warning');
    } else {
      charCount.classList.remove('warning');
    }
  });
});