// NAVIGATION

const navItems =
document.querySelectorAll(".nav-item");

const pages =
document.querySelectorAll(".page");

navItems.forEach(btn => {

  btn.addEventListener("click", () => {

    pages.forEach(page => {

      page.classList.remove("active-page");

    });

    navItems.forEach(nav => {

      nav.classList.remove("active-nav");

    });

    const pageId =
    btn.getAttribute("data-page");

    document
    .getElementById(pageId)
    .classList
    .add("active-page");

    btn.classList.add("active-nav");

  });

});

// BALANCE

let visible = true;

const toggleBalance =
document.getElementById("toggleBalance");

toggleBalance.addEventListener("click", () => {

  const balance =
  document.getElementById("balanceText");

  const cfa =
  document.getElementById("cfaText");

  visible = !visible;

  if(visible){

    balance.innerText = "2500";

    cfa.innerText = "≈ 2500 FCFA";

    toggleBalance.innerHTML =
    '<i class="fa-regular fa-eye"></i>';

  }

  else{

    balance.innerText = "••••";

    cfa.innerText = "≈ ••••";

    toggleBalance.innerHTML =
    '<i class="fa-regular fa-eye-slash"></i>';

  }

});

// DARK MODE

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }

  else{

    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

});

// XP

let xp = 0;

setInterval(() => {

  xp += 5;

  if(xp > 100){

    xp = 0;

  }

  document
  .getElementById("xpFill")
  .style.width = xp + "%";

  document
  .getElementById("levelPercent")
  .innerText = xp + "%";

},2000);

// COPY LINK

const copyBtn =
document.getElementById("copyReferral");

copyBtn.addEventListener("click", () => {

  const input =
  document.querySelector(".referral-box input");

  navigator.clipboard.writeText(input.value);

  copyBtn.innerText =
  "Lien copié ✓";

  setTimeout(() => {

    copyBtn.innerText =
    "Copier le lien";

  },2000);

});

// ALERTS

document
.querySelectorAll(".mission-btn")
.forEach(btn => {

  btn.addEventListener("click", () => {

    alert("Mission bientôt disponible");

  });

});

document
.querySelectorAll(".action-btn")
.forEach(btn => {

  btn.addEventListener("click", () => {

    alert("Fonction bientôt disponible");

  });

});

document
.querySelector(".notif-btn")
.addEventListener("click", () => {

  alert("Aucune notification");

});

document
.querySelector(".center-btn")
.addEventListener("click", () => {

  alert("Mission du jour bientôt disponible");

});
