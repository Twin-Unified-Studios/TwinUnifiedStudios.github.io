/* script.js (updated) */
(function () {
  "use strict";

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  // ---------------------------
  // Mobile nav
  // ---------------------------
  function initNav() {
    const btn = qs(".nav-toggle");
    const menu = qs("[data-nav-menu]");
    if (!btn || !menu) return;

    btn.addEventListener("click", function () {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      document.body.classList.toggle("nav-open", !expanded);
    });

    menu.addEventListener("click", function (e) {
      const a = e.target.closest("a");
      if (!a) return;
      btn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  }

  // ---------------------------
  // Theme toggle
  // ---------------------------

  function applyThemeLogos() {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    const logos = document.querySelectorAll(".theme-logo");

    logos.forEach(function (logo) {
      const lightSrc = logo.getAttribute("data-logo-light");
      const darkSrc = logo.getAttribute("data-logo-dark");
      const nextSrc = theme === "dark" ? darkSrc : lightSrc;

      if (nextSrc) {
        logo.setAttribute("src", nextSrc);
      }
    });
  }

  function initTheme() {
    const toggle = document.getElementById("themeToggle");
    applyThemeLogos();
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", next);
      applyThemeLogos();
      document.documentElement.style.colorScheme = next;

      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // ---------------------------
  // Local time + open/closed + holidays
  // ---------------------------
  function initHours() {
    const timeEl = qs("[data-local-time]");
    const statusEl = qs("[data-open-status]");
    if (!timeEl || !statusEl) return;

    // Mon-Fri 09:00-17:00 ET, Sat/Sun closed
    const hours = {
      0: null,
      1: { open: 9, close: 17 },
      2: { open: 9, close: 17 },
      3: { open: 9, close: 17 },
      4: { open: 9, close: 17 },
      5: { open: 9, close: 17 },
      6: null
    };

    const TZ = "America/New_York";

    function pad2(n) {
      return String(n).padStart(2, "0");
    }

    function isoDateFromUTCParts(y, m, d) {
      return `${y}-${pad2(m)}-${pad2(d)}`;
    }

    // Returns weekday index (0=Sun..6=Sat) for a given date (calendar, computed via UTC)
    function weekdayIndex(y, m, d) {
      return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    }

    function addDaysUTC(y, m, d, deltaDays) {
      const dt = new Date(Date.UTC(y, m - 1, d));
      dt.setUTCDate(dt.getUTCDate() + deltaDays);
      return { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() };
    }

    function nthWeekdayOfMonth(y, m, weekday, n) {
      const firstDow = weekdayIndex(y, m, 1);
      const offset = (weekday - firstDow + 7) % 7;
      const day = 1 + offset + (n - 1) * 7;
      return { y, m, d: day };
    }

    function lastWeekdayOfMonth(y, m, weekday) {
      const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate();
      const lastDow = weekdayIndex(y, m, lastDay);
      const back = (lastDow - weekday + 7) % 7;
      return { y, m, d: lastDay - back };
    }

    // Observed rule:
    // - If holiday falls on Sat -> observed Fri
    // - If holiday falls on Sun -> observed Mon
    // - Otherwise observed on the day itself
    function observedDate(y, m, d) {
      const dow = weekdayIndex(y, m, d);
      if (dow === 6) return addDaysUTC(y, m, d, -1);
      if (dow === 0) return addDaysUTC(y, m, d, 1);
      return { y, m, d };
    }

    // Build a Map: "YYYY-MM-DD" -> holiday name, using observed dates for federal holidays
    function buildUSFederalObservedNameMap(year) {
      const out = new Map();

      function addObserved(name, y, m, d) {
        const obs = observedDate(y, m, d);
        out.set(isoDateFromUTCParts(obs.y, obs.m, obs.d), name);
      }

      function addFixed(name, y, m, d) {
        // For holidays already defined by nth/last weekday, they are inherently weekday dates (no observation needed)
        out.set(isoDateFromUTCParts(y, m, d), name);
      }

      // New Year's Day (Jan 1) - observed
      addObserved("New Year's Day", year, 1, 1);

      // Martin Luther King Jr. Day (3rd Monday in Jan)
      {
        const dt = nthWeekdayOfMonth(year, 1, 1, 3);
        addFixed("Martin Luther King Jr. Day", dt.y, dt.m, dt.d);
      }

      // Washington's Birthday / Presidents Day (3rd Monday in Feb)
      {
        const dt = nthWeekdayOfMonth(year, 2, 1, 3);
        addFixed("Presidents Day", dt.y, dt.m, dt.d);
      }

      // Memorial Day (last Monday in May)
      {
        const dt = lastWeekdayOfMonth(year, 5, 1);
        addFixed("Memorial Day", dt.y, dt.m, dt.d);
      }

      // Juneteenth (Jun 19) - observed
      addObserved("Juneteenth", year, 6, 19);

      // Independence Day (Jul 4) - observed
      addObserved("Independence Day", year, 7, 4);

      // Labor Day (1st Monday in Sep)
      {
        const dt = nthWeekdayOfMonth(year, 9, 1, 1);
        addFixed("Labor Day", dt.y, dt.m, dt.d);
      }

      // Columbus Day / Indigenous Peoples’ Day (2nd Monday in Oct)
      {
        const dt = nthWeekdayOfMonth(year, 10, 1, 2);
        addFixed("Columbus Day", dt.y, dt.m, dt.d);
      }

      // Veterans Day (Nov 11) - observed
      addObserved("Veterans Day", year, 11, 11);

      // Thanksgiving Day (4th Thursday in Nov)
      {
        const dt = nthWeekdayOfMonth(year, 11, 4, 4);
        addFixed("Thanksgiving Day", dt.y, dt.m, dt.d);
      }

      // Christmas Day (Dec 25) - observed
      addObserved("Christmas Day", year, 12, 25);

      return out;
    }

    // Your extra closures (non-federal) with name mapping.
    // These are calendar-date closures (not "observed"), which matches most businesses.
    function addExtraClosures(nameMap, year) {
      nameMap.set(`${year}-12-24`, "Christmas Eve");
      nameMap.set(`${year}-12-31`, "New Year's Eve");
    }

    // We include adjacent years to cover cross-year observed holidays (e.g., Jan 1 observed on Dec 31 prior year)
    function buildObservedHolidayNameMapAround(etYear) {
      const out = new Map();
      const years = [etYear - 1, etYear, etYear + 1];

      for (const y of years) {
        const federal = buildUSFederalObservedNameMap(y);
        for (const [k, v] of federal.entries()) out.set(k, v);

        addExtraClosures(out, y);
      }

      return out;
    }

    function getETDayIndex(date) {
      const fmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short" });
      const wd = fmt.format(date);
      const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      return map[wd] ?? 0;
    }

    function getETHourMinute(date) {
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: TZ,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
      const parts = fmt.formatToParts(date);

      let hour = 0;
      let minute = 0;

      for (const p of parts) {
        if (p.type === "hour") hour = parseInt(p.value, 10);
        if (p.type === "minute") minute = parseInt(p.value, 10);
      }

      return { hour, minute };
    }

    function getETISODate(date) {
      // en-CA -> YYYY-MM-DD
      const fmt = new Intl.DateTimeFormat("en-CA", {
        timeZone: TZ,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
      return fmt.format(date);
    }

    function getETYear(date) {
      const fmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, year: "numeric" });
      return parseInt(fmt.format(date), 10);
    }

    let holidayNameMap = null;
    let holidayMapYear = null;

    function tick() {
      const now = new Date();

      // Local time display (no seconds)
      const displayFmt = new Intl.DateTimeFormat("en-US", {
        timeZone: TZ,
        weekday: "short",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      });
      timeEl.textContent = displayFmt.format(now);

      const etYear = getETYear(now);
      if (holidayMapYear !== etYear || !holidayNameMap) {
        holidayNameMap = buildObservedHolidayNameMapAround(etYear);
        holidayMapYear = etYear;
      }

      const etDate = getETISODate(now);
      const holidayName = holidayNameMap.get(etDate) || null;
      const isHoliday = Boolean(holidayName);

      const day = getETDayIndex(now);
      const rule = hours[day];
      const { hour, minute } = getETHourMinute(now);
      const currentMins = hour * 60 + minute;

      let open = false;
      if (rule) {
        const openMins = rule.open * 60;
        const closeMins = rule.close * 60;
        open = currentMins >= openMins && currentMins < closeMins;
      }

      if (isHoliday) open = false;

      statusEl.classList.toggle("is-open", open);
      statusEl.classList.toggle("is-closed", !open);

      const text = statusEl.querySelector(".status-text");
      if (text) {
        if (isHoliday) text.textContent = `Closed (${holidayName})`;
        else text.textContent = open ? "Open now" : "Closed";
      }
    }

    tick();
    // No seconds displayed; update every 30s is enough and avoids unnecessary layout churn.
    window.setInterval(tick, 1000 * 30);
  }

// ---------------------------
// Global Policy Banner
// ---------------------------
function initPolicyBanner() {
  try {
    if (localStorage.getItem("policyAccepted")) return;

    const banner = document.createElement("div");
    banner.className = "policy-banner";

    banner.innerHTML = `
      <div class="policy-banner-inner">
        <p>
          By continuing, you agree to our
          <a href="tos.html">Terms</a>
          and
          <a href="privacypolicy.html">Privacy Policy</a>.
        </p>
        <button class="policy-accept-btn">Got it</button>
      </div>
    `;

    document.body.appendChild(banner);

    const btn = banner.querySelector(".policy-accept-btn");

    btn.addEventListener("click", function () {
      localStorage.setItem("policyAccepted", "true");
      banner.classList.add("hide");

      setTimeout(() => {
        banner.remove();
      }, 300);
    });
  } catch (e) {}
}
  
  // ---------------------------
  // Boot
  // ---------------------------
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initTheme();
    initHours();
    initPolicyBanner();
  });
})();
