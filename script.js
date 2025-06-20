console.log("Website is running!");

// ==============================
// Light/Dark Mode Handling
// ==============================
function initializeMode() {
  const savedMode = localStorage.getItem('mode');

  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedMode === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    }
  }

  updateLogoTheme();
}

function toggleMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  const newMode = isDark ? 'dark' : 'light';
  localStorage.setItem('mode', newMode);
  updateLogoTheme();
}

function updateLogoTheme() {
  const logo = document.getElementById('site-logo');
  if (!logo) return;

  const isDark = document.body.classList.contains('dark-mode');
  logo.src = isDark
    ? 'images/TwinUnifiedStudios_logo_white.png'
    : 'images/TwinUnifiedStudios_logo_black.png';
}

// ==============================
// Contact Form Character Count
// ==============================
function setupCharCount() {
  const messageBox = document.getElementById('message');
  const charCount = document.getElementById('char-count');
  const maxChars = 400;

  if (messageBox && charCount) {
    messageBox.addEventListener('input', () => {
      const remaining = maxChars - messageBox.value.length;
      charCount.textContent = `${remaining} characters remaining`;

      if (remaining <= 40) {
        charCount.classList.add('warning');
      } else {
        charCount.classList.remove('warning');
      }
    });
  }
}

// ==============================
// Cookie Consent Banner (Accept & Decline)
// ==============================
function setupCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  if (
    cookieBanner &&
    !localStorage.getItem('cookiesAccepted') &&
    !localStorage.getItem('cookiesDeclined')
  ) {
    setTimeout(() => {
      cookieBanner.style.display = 'block';
      cookieBanner.classList.add('show');
    }, 100);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      cookieBanner.classList.remove('show');
      cookieBanner.classList.add('fade-out');
      localStorage.setItem('cookiesAccepted', 'true');
      setTimeout(() => (cookieBanner.style.display = 'none'), 600);
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      cookieBanner.classList.remove('show');
      cookieBanner.classList.add('fade-out');
      localStorage.setItem('cookiesDeclined', 'true');
      setTimeout(() => (cookieBanner.style.display = 'none'), 600);
      // Optional: disable analytics or scripts here
    });
  }
}

// ==============================
// Initialize All on DOM Load
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  initializeMode();

  const toggleBtn = document.getElementById('mode-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode);
  }

  setupCharCount();
  setupCookieBanner();
});

function resetCookieConsent() {
  localStorage.removeItem('cookiesAccepted');
  localStorage.removeItem('cookiesDeclined');

  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.remove('fade-out'); // In case it is hidden
    banner.style.display = 'block';
    setTimeout(() => {
      banner.classList.add('show');
    }, 50);
  }

  alert('Your cookie preferences have been reset. Please review them again.');
}
