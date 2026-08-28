(function () {
  "use strict";
  var personalityCopy = {
    normal: {
      greeting: "Hey. Welcome to my page.",
      heroKicker: "A productivity app with personality",
      heroLead: "Hey…",
      heroAccent: "welcome.",
      heroLede: "I’m Bro. I help turn “I should do that” into “done.” No productivity theater—just clear tasks, useful reminders, and a little encouragement.",
      introTitle: "Easy to start. Easy to come back to.",
      introBody: "Capture what needs doing, give it the detail it deserves, and keep moving without turning task management into another task.",
      voiceTitle: "What makes Bro, Bro?",
      voiceBody: "The same practical task tools, delivered in a voice you choose—from straightforward to delightfully chaotic.",
      breakTitle: "Big task? Break it down.",
      breakBody: "Turn something intimidating into smaller, resumable steps. Finish a piece, pause, and pick up where you left off.",
      personalityTitle: "Your tasks. Your vibe.",
      personalityBody: "Choose Normal, Casual, Gen Z, or brand-safe Unhinged. The voice changes; the useful task tools stay the same.",
      celebrateTitle: "Bro celebrates with you.",
      celebrateBody: "Finish early, right at the due time, or after the deadline—Bro still recognizes that you got it done.",
      quickTitle: "Do this often?",
      quickBody: "Save common task setups and bring them back quickly, with less tapping and less repeated setup.",
      recurringTitle: "Some things come back.",
      recurringBody: "Keep daily, weekly, and other repeating responsibilities from slipping through the cracks.",
      datesTitle: "Remember the important stuff.",
      datesBody: "Keep birthdays, anniversaries, holidays, and other dates visible alongside everything else that matters.",
      organizationTitle: "Find what matters.",
      organizationBody: "Move between Today, Upcoming, Overdue, Completed, and Recurring views, then use priorities and markers to focus.",
      ctaTitle: "Ready to do the thing?",
      ctaBody: "Bro’s App Store link will appear here when the listing is ready. Until then, the FAQ and support pages have the practical details.",
    },
    casual: {
      greeting: "Hey, glad you’re here. Let’s get that thing done.",
      heroKicker: "Your laid-back productivity buddy",
      heroLead: "Hey,",
      heroAccent: "you made it.",
      heroLede: "I’m Bro. Toss me the stuff you need to do and we’ll figure it out together. Clear tasks, helpful reminders, zero weird productivity guilt.",
      introTitle: "Jump in. Come back whenever.",
      introBody: "Write it down, add whatever details help, and keep moving. No need to make organizing your tasks a whole thing.",
      voiceTitle: "Pick the Bro that fits.",
      voiceBody: "Same useful tools, different energy. Keep it chill, keep it straightforward, or let things get a little weird.",
      breakTitle: "That task is huge. Let’s split it up.",
      breakBody: "Make it a few smaller steps, knock out what you can, and come back when you’re ready. We’ll keep your place.",
      personalityTitle: "Your list, your kind of Bro.",
      personalityBody: "Choose the way you want me to talk. The vibe changes; all the helpful stuff stays right where it is.",
      celebrateTitle: "You did it. That counts.",
      celebrateBody: "Early, right on time, or a little late—you finished the task. I’m celebrating with you either way.",
      quickTitle: "Do this a lot? Save it.",
      quickBody: "Keep your usual task setups ready to go so you can add them again without doing all that tapping.",
      recurringTitle: "Yep, that one comes back.",
      recurringBody: "Set up the stuff that repeats and let me keep it in rotation. Daily, weekly, whatever works.",
      datesTitle: "I’ve got the important dates.",
      datesBody: "Birthdays, anniversaries, holidays—keep the life stuff beside the regular task stuff so it doesn’t sneak past you.",
      organizationTitle: "Everything’s where you left it.",
      organizationBody: "Check today, look ahead, catch overdue tasks, or revisit what you finished. Priorities help when the list gets busy.",
      ctaTitle: "Alright, ready to do the thing?",
      ctaBody: "The App Store link is coming soon. For now, the FAQ and support pages have the useful details.",
    },
    genz: {
      greeting: "oh hey 👀 welcome. we’re about to lock in.",
      heroKicker: "productivity, but make it personal",
      heroLead: "oh hey 👀",
      heroAccent: "welcome.",
      heroLede: "I’m Bro. Give me the tasks living rent-free in your head and we’ll get them handled. Tiny steps, useful reminders, actual progress.",
      introTitle: "Low effort to start. Easy comeback arc.",
      introBody: "Drop the task in, add the important lore, and keep it moving. Your productivity app should not become another side quest.",
      voiceTitle: "Choose your Bro era.",
      voiceBody: "Normal, Casual, Gen Z, or Unhinged. Same task powers, completely different dialogue options.",
      breakTitle: "That task has too much lore 😭",
      breakBody: "Break the boss battle into smaller quests, clear one step at a time, and come back without losing the plot.",
      personalityTitle: "Your tasks. Your vibe check.",
      personalityBody: "Pick how I talk to you. The personality changes, but the productivity toolkit stays locked in.",
      celebrateTitle: "WAIT—you actually did it 🎉",
      celebrateBody: "Early? Massive W. On time? We love to see it. Late? Still finished. The task is done and that absolutely counts.",
      quickTitle: "Same task again? Speedrun it.",
      quickBody: "Save the setups you use all the time and bring them back in a few taps. Repeating yourself is not the main quest.",
      recurringTitle: "The task respawned.",
      recurringBody: "Daily, weekly, monthly—the recurring stuff can come back automatically so it doesn’t catch you lacking.",
      datesTitle: "Do not fumble the important dates.",
      datesBody: "Birthdays, anniversaries, holidays, personal lore—keep them visible before the group chat has questions.",
      organizationTitle: "The list is giving organized.",
      organizationBody: "Today, Upcoming, Overdue, Completed, Recurring—it all has a place. Use priorities when it’s time to lock in.",
      ctaTitle: "Ready to lock in?",
      ctaBody: "The App Store link is loading into the timeline soon. Until then, the FAQ and support pages have the full lore.",
    },
    unhinged: {
      greeting: "OH. YOU FOUND MY WEBSITE. THE TASKS KNOW.",
      heroKicker: "A productivity app that has seen the list",
      heroLead: "OH.",
      heroAccent: "YOU’RE HERE.",
      heroLede: "I’m Bro. Hand over the tasks. The forgotten ones. The overdue ones. The one that has been “marinating.” We are ending the era of “I’ll do it later.”",
      introTitle: "ENTER THE TASK. ESCAPE THE VOID.",
      introBody: "Write down what needs doing. Add the details. I will preserve the evidence until you return to finish what you started.",
      voiceTitle: "CHOOSE HOW I ADDRESS THE SITUATION.",
      voiceBody: "The tools remain stable. The voice ranges from responsible adult to someone who has been staring at the overdue list for too long.",
      breakTitle: "THE TASK IS TOO LARGE. DISMANTLE IT.",
      breakBody: "We are not fighting the entire task at once. We are separating it into smaller tasks and defeating them individually.",
      personalityTitle: "SELECT YOUR BRO. CHOOSE WISELY.",
      personalityBody: "Normal. Casual. Gen Z. Unhinged. Four voices enter. Your task list remains extremely visible in every one.",
      celebrateTitle: "THE TASK HAS BEEN DEFEATED.",
      celebrateBody: "Early? LEGENDARY. On time? PRECISION. Late? IT DOES NOT MATTER—the task is finally complete and I am celebrating immediately.",
      quickTitle: "WE HAVE DONE THIS BEFORE.",
      quickBody: "Save the setup. Summon it again. I refuse to watch you rebuild the same task from nothing for the seventh time.",
      recurringTitle: "THE TASK RETURNS.",
      recurringBody: "It happens every day? Every week? Fine. Make it recurring. I will be here when it respawns.",
      datesTitle: "THE IMPORTANT DATE APPROACHES.",
      datesBody: "Birthdays. Anniversaries. Holidays. The calendar advances without mercy, but at least we can see it coming.",
      organizationTitle: "BEHOLD: THE ENTIRE SITUATION.",
      organizationBody: "Today. Upcoming. Overdue. Completed. Recurring. Every task has been categorized. There is nowhere left for it to hide.",
      ctaTitle: "THE TASKS ARE WAITING.",
      ctaBody: "The App Store link will arrive soon. Until then, consult the FAQ. Contact support. Prepare yourself. We are going to do the thing.",
    },
  };
  var welcomeCopy = {
    normal: "Good choice. Ready when you are.",
    casual: "Nice. We’ll keep it casual.",
    genz: "okayyy good choice 👀",
    unhinged: "Good choice.. hopefully....",
  };
  var preferenceKey = "broWebsitePersonality";
  var easterRoundKey = "broEasterEggRound";
  var easterFinalKey = "broEasterEggFinal";
  var personalities = ["normal", "casual", "genz", "unhinged"];

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-bro-screenshot]").forEach(function (image) {
      function showFallback() {
        image.closest(".bro-device--expected").classList.add("is-missing");
      }

      image.addEventListener("error", showFallback);
      if (image.complete && image.naturalWidth === 0) showFallback();
    });

    var tabs = document.querySelectorAll("[data-personality]");
    var out = document.querySelector("[data-greeting]");
    var transition = document.querySelector("[data-personality-transition]");
    var copyTargets = document.querySelectorAll("[data-bro-copy]");
    var currentPersonality = "normal";
    var switching = false;
    var easterEgg = document.querySelector("[data-bro-easter-egg]");
    var easterButton = document.querySelector("[data-bro-easter-button]");
    var easterMessage = document.querySelector("[data-bro-easter-message]");
    var easterClicks = 0;
    var easterRound = 1;
    var easterFinal = false;
    var easterMessageTimer = null;
    var easterFinalAnimating = false;

    var easterEncounters = [
      [
        { clicks: 1, message: "Oh hey, you found me." },
        { clicks: 4, message: "Yes, I am here. You found my site." },
        { clicks: 7, message: "Bro.. are we REALLY DOING THIS???" },
        { clicks: 10, message: "Don't you have tasks to do?" },
        { clicks: 13, message: "Bro I'm done. Touch some grass." },
      ],
      [
        { clicks: 1, message: "Oh. You found me again." },
        { clicks: 4, message: "Wait. ARE WE REALLY DOING THIS AGAIN???" },
        { clicks: 7, message: "Bro. THE TASKS. THEY ARE STILL THERE." },
        { clicks: 10, message: "DO. YOUR. TASKS. I cannot keep meeting you down here." },
        { clicks: 13, message: "I am not doing this again. Go be productive." },
      ],
      [
        { clicks: 1, message: "No." },
        { clicks: 4, message: "I KNOW WHAT YOU'RE DOING." },
        { clicks: 7, message: "This is not a feature anymore. This is a recurring task." },
        { clicks: 10, message: "You have made finding me part of your routine. WHY." },
        { clicks: 13, message: "You made me recurring. I am done." },
      ],
      [
        { clicks: 1, message: "Bro. This is the fourth time." },
        { clicks: 4, message: "YOU CAME BACK FOR THE FINAL ENCOUNTER." },
        { clicks: 7, message: "I am a productivity app. THIS IS NOT PRODUCTIVITY." },
        { clicks: 10, message: "DO. LITERALLY. ONE. TASK." },
        { clicks: 13, message: "I am not doing this again." },
      ],
    ];

    try {
      easterRound = Math.min(
        4,
        Math.max(1, parseInt(localStorage.getItem(easterRoundKey), 10) || 1),
      );
      easterFinal = localStorage.getItem(easterFinalKey) === "true";
      if (easterFinal) {
        easterRound = 4;
        easterClicks = 13;
      }
    } catch (e) {}

    function isPersonality(value) {
      return personalities.indexOf(value) !== -1;
    }

    function savePersonality(personality) {
      try {
        localStorage.setItem(preferenceKey, personality);
      } catch (e) {}
    }

    function getEasterStage(clicks) {
      var stage = null;
      easterEncounters[easterRound - 1].forEach(function (candidate) {
        if (clicks >= candidate.clicks) stage = candidate;
      });
      return stage;
    }

    function hideFinalEasterMessageLater() {
      if (!easterMessage) return;
      window.clearTimeout(easterMessageTimer);
      easterMessageTimer = window.setTimeout(function () {
        easterMessage.hidden = true;
        easterButton.classList.remove("is-final-fading");
        easterButton.disabled = false;
        easterButton.setAttribute("aria-disabled", "false");
        easterFinalAnimating = false;
      }, 2600);
    }

    function renderEasterEgg(showFinalMessage) {
      if (!easterEgg || !easterButton || !easterMessage) return;
      var stage = getEasterStage(easterClicks);
      document.body.dataset.broEasterFinal = String(easterFinal);
      if (easterFinal) {
        easterMessage.textContent = "I am not doing this again.";
        easterMessage.hidden = !showFinalMessage;
        if (showFinalMessage) {
          easterFinalAnimating = true;
          easterButton.classList.add("is-final-fading");
          easterButton.disabled = true;
          easterButton.setAttribute("aria-disabled", "true");
          hideFinalEasterMessageLater();
        } else {
          window.clearTimeout(easterMessageTimer);
          easterButton.classList.remove("is-final-fading");
          easterFinalAnimating = false;
        }
      } else if (stage) {
        easterMessage.textContent = stage.message;
        easterMessage.hidden = false;
      } else {
        easterMessage.hidden = true;
      }
      var finished =
        (easterClicks >= 13 && !easterFinal) ||
        (easterFinal && easterFinalAnimating);
      easterButton.classList.toggle("is-done", finished);
      easterButton.classList.toggle("is-final", easterFinal);
      easterButton.disabled = finished;
      easterButton.setAttribute("aria-disabled", String(finished));
      easterButton.setAttribute(
        "aria-label",
        easterFinal ? "Bro, faded" : "Bro",
      );
    }

    renderEasterEgg();

    if (easterButton) {
      easterButton.addEventListener("click", function () {
        if (easterFinal) {
          if (easterFinalAnimating) return;
          renderEasterEgg(true);
          return;
        }
        if (easterClicks >= 13) return;
        easterClicks += 1;
        if (easterRound === 4 && easterClicks >= 13) {
          easterFinal = true;
          try {
            localStorage.setItem(easterRoundKey, "4");
            localStorage.setItem(easterFinalKey, "true");
          } catch (e) {}
        }
        renderEasterEgg(easterFinal);
      });
    }

    function applyPersonality(personality, save) {
      if (!isPersonality(personality)) personality = "normal";
      if (
        (personality === "normal" || personality === "casual") &&
        (currentPersonality === "genz" || currentPersonality === "unhinged")
      ) {
        if (!easterFinal) {
          if (easterClicks >= 13 && easterRound < 4) {
            easterRound += 1;
            try {
              localStorage.setItem(easterRoundKey, String(easterRound));
            } catch (e) {}
          }
          easterClicks = 0;
        }
        renderEasterEgg();
      }
      var selectedCopy = personalityCopy[personality];
      tabs.forEach(function (tab) {
        tab.setAttribute(
          "aria-selected",
          String(tab.dataset.personality === personality),
        );
      });
      copyTargets.forEach(function (target) {
        var value = selectedCopy[target.dataset.broCopy];
        if (value) target.textContent = value;
      });
      if (out) out.textContent = selectedCopy.greeting;
      document.body.dataset.broPersonality = personality;
      currentPersonality = personality;
      if (save) savePersonality(personality);
    }

    function switchPersonality(personality) {
      if (!isPersonality(personality) || personality === currentPersonality || switching) return;
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !transition) {
        applyPersonality(personality, true);
        return;
      }

      switching = true;
      transition.setAttribute("aria-hidden", "false");
      transition.classList.add("is-visible");
      window.setTimeout(function () {
        document.documentElement.classList.add("bro-copy-changing");
        applyPersonality(personality, true);
        window.setTimeout(function () {
          document.documentElement.classList.remove("bro-copy-changing");
          transition.classList.remove("is-visible");
          window.setTimeout(function () {
            transition.setAttribute("aria-hidden", "true");
            switching = false;
          }, 170);
        }, 170);
      }, 170);
    }

    var savedPersonality = null;
    try {
      savedPersonality = localStorage.getItem(preferenceKey);
    } catch (e) {}
    if (isPersonality(savedPersonality)) {
      applyPersonality(savedPersonality, false);
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        switchPersonality(tab.dataset.personality);
      });
    });

    var welcome = document.querySelector("[data-bro-welcome]");
    var welcomeOptions = Array.from(
      document.querySelectorAll("[data-welcome-personality]"),
    );
    var welcomePreview = document.querySelector("[data-welcome-preview]");
    var continueButton = document.querySelector("[data-welcome-continue]");
    var selectedPersonality = null;

    function selectWelcomePersonality(personality, focus) {
      selectedPersonality = personality;
      welcomeOptions.forEach(function (option) {
        var selected = option.dataset.welcomePersonality === personality;
        option.setAttribute("aria-checked", String(selected));
        option.tabIndex = selected ? 0 : -1;
        if (selected && focus) option.focus();
      });
      if (welcomePreview) welcomePreview.textContent = welcomeCopy[personality];
      if (continueButton) continueButton.disabled = false;
    }

    function enterSite(personality) {
      applyPersonality(personality, true);
      document.documentElement.classList.add("bro-gate-exiting");
      var heading = document.querySelector(".bro-display");
      if (heading) heading.focus({ preventScroll: true });
      if (welcome) welcome.setAttribute("aria-hidden", "true");

      var reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.setTimeout(
        function () {
          document.documentElement.classList.remove(
            "bro-gate-pending",
            "bro-gate-exiting",
          );
        },
        reduceMotion ? 0 : 320,
      );
    }

    welcomeOptions.forEach(function (option, index) {
      option.addEventListener("click", function () {
        selectWelcomePersonality(option.dataset.welcomePersonality, false);
      });
      option.addEventListener("keydown", function (event) {
        var nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = (index + 1) % welcomeOptions.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex =
            (index - 1 + welcomeOptions.length) % welcomeOptions.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = welcomeOptions.length - 1;
        }
        if (nextIndex === null) return;
        event.preventDefault();
        selectWelcomePersonality(
          welcomeOptions[nextIndex].dataset.welcomePersonality,
          true,
        );
      });
    });

    if (continueButton) {
      continueButton.addEventListener("click", function () {
        if (selectedPersonality) enterSite(selectedPersonality);
      });
    }
    if (
      document.documentElement.classList.contains("bro-gate-pending") &&
      welcomeOptions[0]
    ) {
      welcomeOptions[0].focus();
    }
  });
})();
