# TwinUnifiedStudios.github.io README



# Twin Unified Studios

Welcome to the official repository for **Twin Unified Studios** — a creative software and design studio founded by two brothers passionate about innovation, storytelling, and user-centric experiences.

We specialize in:

- Game development  
- 3D asset creation & rendering  
- Graphic design & branding  
- Software engineering  
- Client engagement & technical services

---

## Live Website

[https://twinunifiedstudios.com](https://twinunifiedstudios.com)

---

## About This Repository

This repository contains the static source code for the official Twin Unified Studios website. It is fully client-side and deployed via GitHub Pages and a custom domain.

### Built With:

- HTML5 / CSS3 / Vanilla JavaScript  
- FormSubmit for contact handling  
- GitHub Pages for hosting  
- Fully responsive layout (mobile & desktop)

---

## Features

- Custom light/dark mode toggle with persistent preference  
- Cookie consent banner (accept, decline, reset support)  
- Privacy-aware form with required policy consent checkbox  
- Character limit feedback on message field  
- Sectioned footer with navigation and accessibility links

---

## Contact

For commissions, collaboration, or professional inquiries:  
info@twinunifiedstudios.com

---

## Developer Notes

> [!IMPORTANT]  
> Every `.html` page must include the cookie consent `<div>` and the `<script src="script.js">` before the closing `</body>` tag. Failure to include this will break cookie and dark mode functionality.

> [!TIP]  
> The cookie banner behavior (accept/decline/reset) is fully controlled through `localStorage`. To reset your preference for testing, run the following in your browser console:
> 
> ```js
> localStorage.removeItem('cookiesAccepted');
> localStorage.removeItem('cookiesDeclined');
> ```

> [!WARNING]  
> Do not rename or delete the `TwinUnifiedStudios.github.io` repository if you are using GitHub Pages to host the site. This will break your live deployment.

> [!NOTE]  
> The "Manage Cookie Preferences" button on the Cookies Notice page calls `resetCookieConsent()` defined in `script.js`. This function safely clears consent and re-displays the banner.

> [!CAUTION]  
> Any third-party integrations (analytics, embeds, etc.) must be manually conditioned on consent if added in the future. This site currently avoids third-party tracking by design.

---

## Legal

- [Privacy Policy](https://twinunifiedstudios.com/privacy.html)  
- [Cookie Notice](https://twinunifiedstudios.com/cookiesnotice.html)  
- [Terms of Service](https://twinunifiedstudios.com/terms.html)  
- [DMCA Notice](https://twinunifiedstudios.com/dmca.html)  
- [Accessibility Statement](https://twinunifiedstudios.com/accessibility.html)

---

## Licensing & Legal

> [!IMPORTANT]  
> This repository is not open source. All content, code, and materials are protected under copyright law and may not be used, copied, modified, or distributed without express written permission.

All rights reserved © 2025 Twin Unified Studios.

Unauthorized use, duplication, modification, or distribution of any part of this repository — including source code, images, text, layout, or design — is strictly prohibited and may result in civil and/or criminal penalties under applicable U.S. federal and state laws.

To request written permission or licensing terms, contact:  
info@twinunifiedstudios.com

---

## Behind the Scenes

This website was hand-built from scratch by the founders of Twin Unified Studios in early June 2025.

What began as a simple dev experiment turned into a full-scale brand launch.  
After weeks of iteration, polish, and late-night debugging sessions, the site officially launched on **June 19th, 2025**.

If you're reading this, you've found the Easter egg. You're now part of the story! (:
