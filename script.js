/* =========================
   MIRA'S BIRTHDAY SITE
   EDIT THE PERSONALIZATION
   SECTION BELOW LATER.
========================= */

const PERSONAL = {
  name: "Mira",
  age: 18,

  // Change this to the actual birthday.
  // JavaScript months: January=0, February=1 ... December=11.
  birthday: new Date(2026, 10, 13, 0, 0, 0),

  opening: "A little universe for someone with a curious mind, a caring heart, and a love for life’s little details.",

  letter: `Dear Mira,

Happy 18th birthday! ❤️

Eighteen is a lovely milestone, but I hope you never feel that you must have everything figured out just because another year has begun.

I hope you always make room for the things that bring you joy: getting lost in a novel, listening to Arijit Singh or Shreya Ghoshal, enjoying a plate of mutton kosa, playing Ludo or chess, and finding a reason to smile at the little things. May there always be a good movie to revisit, a new place to discover, and perhaps a panda or a horse to make your day.

I know you are still figuring out what you want to do and where you might want to go. That's completely fine. You don't owe the world a fixed answer at eighteen. You have time to explore, change your mind and find a direction that feels right.

You once described a fear that life might not turn out the way you imagined. I hope you remember that an unexpected path isn't automatically a failed one. Some beautiful things may be waiting beyond the plans you have today. I wish you the courage to keep choosing, learning and beginning again.

I also appreciate the way you question the world, care about fairness, and value the people close to you. May you find people who return your kindness with sincerity, and may you always have the freedom to build a life that feels like your own.

Happy birthday, Mira. May this wine-red chapter be full of warmth, courage, laughter and lovely surprises. ✨`,

  final: "May eighteen bring you stories worth reading, songs worth replaying, new places to explore, people who value you, and the freedom to become whoever you choose. ❤️",

  gifts: [
    "A wish for courage: may you try the things that once felt a little out of reach. ✨",
    "A wish for discovery: may you travel, meet different people and keep learning about the world. 🌍",
    "A wish for peace: may you have people around whom you can be entirely yourself. ❤️"
  ]
};


/* ---------- Opening ---------- */

const openingText = document.getElementById("openingText");
let openIndex = 0;

function typeOpening() {
  if (openIndex < PERSONAL.opening.length) {
    openingText.textContent += PERSONAL.opening[openIndex++];
    setTimeout(typeOpening, 45);
  }
}
typeOpening();

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("opening").classList.add("hidden");
  document.getElementById("site").classList.remove("hidden");
  burstConfetti(90);
});


/* ---------- Floating particles ---------- */

const particleBox = document.getElementById("particles");

const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
const particleCount = isSmallScreen ? 10 : 22;

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement("i");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDelay = Math.random() * 8 + "s";
  p.style.animationDuration = 6 + Math.random() * 8 + "s";
  particleBox.appendChild(p);
}




/* ---------- Premium V2 motion ---------- */
const progressBar = document.getElementById("scrollProgress");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal-section").forEach(section => revealObserver.observe(section));

let scrollTicking = false;
function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  scrollTicking = false;
}
window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(updateScrollProgress);
  }
}, { passive: true });
updateScrollProgress();

// Subtle pointer depth on larger screens.
if (window.matchMedia("(min-width: 800px)").matches) {
  const hero = document.querySelector(".hero-content");
  window.addEventListener("pointermove", e => {
    const x = (e.clientX / window.innerWidth - .5) * 8;
    const y = (e.clientY / window.innerHeight - .5) * 6;
    if (hero) hero.style.transform = `translate3d(${x}px,${y}px,0)`;
  }, { passive: true });
}


/* ---------- Smooth navigation ---------- */

document.querySelectorAll("[data-scroll]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.scroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});


/* ---------- Conversation room ---------- */
const questionThoughts = ["Being understood can feel like being seen; being accepted can feel like being safe. Perhaps the rare thing is finding people with whom you don't have to choose between the two.","Maybe happiness becomes less about having everything go right, and more about noticing what is meaningful—even when life is ordinary or imperfect.","I think respect matters most when agreement ends. Listening does not require surrendering your values, and disagreement does not have to become disrespect."];
const questionReveal = document.getElementById("questionReveal");
document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-question]").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    const thought = questionThoughts[Number(button.dataset.question)];
    questionReveal.innerHTML = "<p class=\"question-prompt\">A thought to begin with</p><p class=\"question-thought\"></p>";
    questionReveal.querySelector(".question-thought").textContent = thought;
  });
});

/* ---------- Eighteen wishes ---------- */
const birthdayWishes = [
  "May you find stories that stay with you.",
  "May music meet you in exactly the right mood.",
  "May you keep asking questions without losing your wonder.",
  "May your kindness be met with kindness.",
  "May you feel safe being fully yourself.",
  "May you find courage for unfamiliar beginnings.",
  "May laughter arrive on ordinary days.",
  "May you have time for the people you love.",
  "May you discover places that make you feel alive.",
  "May you never feel rushed to have every answer.",
  "May your efforts be noticed and valued.",
  "May you keep the freedom to change your mind.",
  "May there always be a good book nearby.",
  "May you stand firm for what matters to you.",
  "May small joys never feel too small to celebrate.",
  "May difficult days remind you that they are only days.",
  "May the next year bring unexpected reasons to smile.",
  "May eighteen be the beginning of a chapter that feels like yours."
];
const wishSky = document.getElementById("wishSky");
const starWish = document.getElementById("starWish");
if (wishSky && starWish) {
  birthdayWishes.forEach((wish, index) => {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "wish-star";
    star.textContent = "✦";
    star.setAttribute("aria-label", "Open birthday wish " + (index + 1));
    star.style.setProperty("--star-delay", (index % 6) * 0.23 + "s");
    star.addEventListener("click", () => {
      wishSky.querySelectorAll(".wish-star").forEach(item => item.classList.remove("chosen"));
      star.classList.add("chosen");
      starWish.innerHTML = "<span>✦</span><p></p>";
      starWish.querySelector("p").textContent = wish;
    });
    wishSky.appendChild(star);
  });
}

/* ---------- Countdown ---------- */

function updateCountdown() {
  const diff = PERSONAL.birthday - new Date();

  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);


/* ---------- Letter ---------- */

const envelope = document.getElementById("envelope");
const letterCard = document.getElementById("letterCard");
const letterElement = document.getElementById("personalLetter");
let letterStarted = false;

envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  letterCard.classList.remove("hidden");

  if (!letterStarted) {
    letterStarted = true;
    typeLetter();
  }
});

let letterIndex = 0;

function typeLetter() {
  if (letterIndex < PERSONAL.letter.length) {
    letterElement.textContent += PERSONAL.letter[letterIndex++];
    setTimeout(typeLetter, 18);
  }
}


/* ---------- 18 candles: microphone blow + tap fallback ---------- */

const candleBox = document.getElementById("candles");
const micBlowBtn = document.getElementById("micBlowBtn");
const blowStatus = document.getElementById("blowStatus");
let candlesOut = 0;
let micStream = null;
let micContext = null;
let micFrame = 0;
let blowFrames = 0;
let candlesFinished = false;

function finishCandles() {
  if (candlesFinished) return;
  candlesFinished = true;
  document.querySelectorAll(".candle:not(.blown)").forEach(candle => {
    candle.classList.add("blown");
  });
  candlesOut = PERSONAL.age;
  document.getElementById("wishMessage").textContent =
    "✨ You did it! All 18 candles are out. Make a wish for the chapter ahead, Mira. ✨";
  blowStatus.textContent = "Wish made. Happy 18th birthday! 💗";
  micBlowBtn.textContent = "✨ All candles blown";
  micBlowBtn.disabled = true;
  stopMic();
  burstConfetti(140);
}

function stopMic() {
  if (micFrame) cancelAnimationFrame(micFrame);
  micFrame = 0;
  if (micStream) micStream.getTracks().forEach(track => track.stop());
  micStream = null;
  if (micContext && micContext.state !== "closed") micContext.close();
  micContext = null;
}

for (let i = 1; i <= PERSONAL.age; i++) {
  const candle = document.createElement("button");
  candle.className = "candle";
  candle.type = "button";
  candle.setAttribute("aria-label", "Candle " + i);
  const flame = document.createElement("span");
  flame.className = "flame";
  candle.appendChild(flame);
  candle.addEventListener("click", () => {
    if (candlesFinished || candle.classList.contains("blown")) return;
    candle.classList.add("blown");
    candlesOut++;
    if (candlesOut === PERSONAL.age) finishCandles();
  });
  candleBox.appendChild(candle);
}

async function enableBlowDetection() {
  if (!navigator.mediaDevices?.getUserMedia || !window.AudioContext) {
    blowStatus.textContent = "This browser does not support microphone access here. You can still tap the candles.";
    return;
  }
  micBlowBtn.disabled = true;
  micBlowBtn.textContent = "Listening…";
  blowStatus.textContent = "Allow microphone access, bring the phone near you, and give one clear, steady blow.";
  try {
    micStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
    });
    micContext = new AudioContext();
    if (micContext.state === "suspended") await micContext.resume();
    const source = micContext.createMediaStreamSource(micStream);
    const analyser = micContext.createAnalyser();
    analyser.fftSize = 1024;
    source.connect(analyser);
    const samples = new Float32Array(analyser.fftSize);
    blowFrames = 0;
    micBlowBtn.textContent = "🎤 Listening for your blow";
    blowStatus.textContent = "Now blow gently towards the microphone. The flames will go out together.";
    const detect = () => {
      if (!micStream || candlesFinished) return;
      analyser.getFloatTimeDomainData(samples);
      let energy = 0;
      for (let i = 0; i < samples.length; i++) energy += samples[i] * samples[i];
      const rms = Math.sqrt(energy / samples.length);
      blowFrames = rms > 0.055 ? blowFrames + 1 : Math.max(0, blowFrames - 1);
      if (blowFrames >= 5) {
        finishCandles();
        return;
      }
      micFrame = requestAnimationFrame(detect);
    };
    micFrame = requestAnimationFrame(detect);
  } catch (error) {
    stopMic();
    micBlowBtn.disabled = false;
    micBlowBtn.textContent = "🎤 Try microphone again";
    blowStatus.textContent = error.name === "NotAllowedError"
      ? "Microphone permission was denied. You can allow it in browser settings or tap the candles instead."
      : "Couldn't start the microphone. Try again or tap the candles instead.";
  }
}

micBlowBtn.addEventListener("click", enableBlowDetection);


/* ---------- Photo placeholders ---------- */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

document.querySelectorAll(".photo-card").forEach(card => {
  const filename = card.dataset.photo;
  const probe = new Image();
  probe.onload = () => {
    card.classList.remove("placeholder");
    card.innerHTML = `<img src="${filename}" alt="${card.querySelector("b")?.textContent || "Memory"}"><span>${card.querySelector("span")?.textContent || ""}</span><b>${card.querySelector("b")?.textContent || "Memory"}</b>`;
  };
  probe.onerror = () => {};
  probe.src = filename;

  card.addEventListener("click", () => {
    if (card.classList.contains("placeholder")) {
      showToast("Later, add " + filename + " to the website folder.");
      return;
    }
    lightboxImg.src = filename;
    lightboxCaption.textContent = card.querySelector("b")?.textContent || "Memory";
    lightbox.classList.remove("hidden");
  });
});

document.getElementById("closeLightbox")?.addEventListener("click", () => lightbox.classList.add("hidden"));
lightbox?.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.add("hidden"); });


/*
  When you add photos later, change a card in index.html from:

  <button class="photo-card placeholder" data-photo="photo1.jpg">
    <span>01</span><b>Add photo 1</b>
  </button>

  to:

  <button class="photo-card" data-photo="photo1.jpg">
    <img src="photo1.jpg" alt="Memory 1">
    <span>01</span><b>A caption</b>
  </button>
*/


/* ---------- Gifts ---------- */

document.querySelectorAll(".gift").forEach(gift => {
  gift.addEventListener("click", () => {
    const number = Number(gift.dataset.gift);
    document.getElementById("giftMessage").textContent = PERSONAL.gifts[number];

    if (number === 2) burstConfetti(60);
  });
});


/* ---------- Chocolate secret ---------- */

let chocolateTaps = 0;
document.getElementById("chocolateBtn").addEventListener("click", () => {
  chocolateTaps++;
  const button = document.getElementById("chocolateBtn");
  button.classList.remove("chocolate-pop");
  void button.offsetWidth;
  button.classList.add("chocolate-pop");
  document.getElementById("secretMessage").classList.remove("hidden");
  burstConfetti(chocolateTaps >= 3 ? 90 : 45);
  if (chocolateTaps === 3) showToast("You found the extra-sweet secret. 🍫✨");
});


/* ---------- Soundtrack ---------- */

const music = document.getElementById("music");
const trackName = document.getElementById("trackName");
const musicStopBtn = document.getElementById("musicStopBtn");
const trackTitles = {
  "aashiyan": "Aashiyan · Barfi!",
  "iktara": "Iktara · Wake Up Sid",
  "phir-le-aya-dil": "Phir Le Aya Dil · Barfi!",
  "ilahi": "Ilahi · Yeh Jawaani Hai Deewani"
};
let activeTrack = "";

document.querySelectorAll("[data-track]").forEach(button => {
  button.addEventListener("click", async () => {
    const track = button.dataset.track;
    const path = "music/" + track + ".mp3";
    try {
      if (activeTrack === track && !music.paused) {
        music.pause();
        button.textContent = "▶ Resume song";
        return;
      }
      music.pause();
      music.src = path;
      music.load();
      await music.play();
      activeTrack = track;
      trackName.textContent = trackTitles[track] || track;
      document.querySelectorAll("[data-track]").forEach(item => {
        item.textContent = item === button ? "⏸ Pause" : "▶ Play this song";
      });
    } catch {
      trackName.textContent = "Song file not added yet";
      showToast("Upload " + track + ".mp3 into the music folder first.");
    }
  });
});

music.addEventListener("ended", () => {
  document.querySelectorAll("[data-track]").forEach(item => item.textContent = "▶ Play this song");
});
musicStopBtn.addEventListener("click", () => {
  music.pause();
  music.currentTime = 0;
  document.querySelectorAll("[data-track]").forEach(item => item.textContent = "▶ Play this song");
  trackName.textContent = "Choose a song to begin";
  activeTrack = "";
});


/* ---------- Final surprise ---------- */

document.getElementById("finalMessage").textContent = PERSONAL.final;

document.getElementById("finalBtn").addEventListener("click", () => {
  burstConfetti(180);
  document.getElementById("finalBtn").textContent = "Happy Birthday, Mira! ❤️";
  showToast("The final chapter begins.");
});


/* ---------- Confetti ---------- */

function burstConfetti(amount = 80) {
  amount = isSmallScreen ? Math.min(amount, 35) : Math.min(amount, 90);
  const colors = ["#ff78aa", "#b99cff", "#ffd98a", "#ffffff", "#ffb5d0"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * .8 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 3600);
  }
}


/* ---------- Toast ---------- */

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("toast-show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("toast-show");
  }, 2800);
}
