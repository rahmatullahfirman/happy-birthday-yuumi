const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");

function makeStars() {
  const stars = document.getElementById("stars");
  for (let i = 0; i < 110; i++) {
    const s = document.createElement("span");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.setProperty("--d", (1.5 + Math.random() * 4) + "s");
    s.style.opacity = 0.15 + Math.random() * 0.75;
    stars.appendChild(s);
  }
}

function makeParticles() {
  const holder = document.getElementById("particles");
  for (let i = 0; i < 34; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.setProperty("--s", (2 + Math.random() * 5) + "px");
    p.style.setProperty("--t", (6 + Math.random() * 9) + "s");
    p.style.setProperty("--x", (-100 + Math.random() * 200) + "px");
    p.style.animationDelay = (-Math.random() * 12) + "s";
    holder.appendChild(p);
  }
}

function openGarden() {
  intro.classList.add("hide");
  scene.classList.add("show");
  setTimeout(() => intro.style.display = "none", 1400);
}

function replay() {
  scene.classList.remove("show");
  void scene.offsetWidth;
  scene.classList.add("show");
}

openBtn.addEventListener("click", openGarden);
replayBtn.addEventListener("click", replay);

makeStars();
makeParticles();
