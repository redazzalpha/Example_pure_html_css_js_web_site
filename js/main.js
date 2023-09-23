// varialbes

let header;
let heroText;
let heroBtn;
let scrollTopBtn;
let mainTitle;
let introSection;
let cvSection;
let certSection;
let expSection;
let visionSection;

let headerOffset = 540;
let heroOffset = 80;
let mainTitleOffset = 300;
let introOffset = 490;
let cvOffset = 1490;
let certOffet = 2190;
let expOffset = 3380;
let visionOffset = 4000;

// event handlers

function onScroll() {
  let scroll = window.scrollY;

  if (scrollTopBtn && scroll >= headerOffset) scrollTopBtn.style.right = "10px";
  else scrollTopBtn.style.right = "-100px";

  if (scroll <= heroOffset) {
    appear(heroText);
    growUp(heroBtn);
  } else {
    appearReverse(heroText, "0");
    growUpReverse(heroBtn, "0");
  }

  // if (scroll > heroOffset && scroll <= mainTitleOffset) slideLeft(mainTitle);
  // else slideLeftReverse(mainTitle, "-500px");

  // if (scroll > mainTitleOffset && scroll <= introOffset)
  //   slideRight(introSection);
  // else slideRightReverse(introSection, "-100vw");

  if (scroll > introOffset && scroll <= cvOffset) slideLeft(cvSection);
  else slideLeftReverse(cvSection, "-100vw");

  if (scroll > cvOffset && scroll <= certOffet) growUp(certSection);
  else growUpReverse(certSection, "0");

  if (scroll > certOffet && scroll <= expOffset) slideRight(expSection);
  else slideRightReverse(expSection, "-100vw");

  if (scroll > expOffset && scroll <= visionOffset) growUp(visionSection);
  else growUpReverse(visionSection, "0");

  console.log(scroll);
}

// functions

function contactMe() {
  console.log("in the js function contact me");
}
function goTop() {
  window.scroll({ behavior: "smooth", top: 0 });
}

function slideTop(element) {
  element.style.top = "0";
}
function slideLeft(element) {
  element.style.left = "0";
}
function slideRight(element) {
  element.style.right = "0";
}
function growUp(element) {
  element.style.transform = "scale(1)";
}
function appear(element) {
  element.style.opacity = "1";
}

function slideTopReverse(element, reverse) {
  element.style.top = reverse;
}
function slideLeftReverse(element, reverse) {
  element.style.left = reverse;
}
function slideRightReverse(element, reverse) {
  element.style.right = reverse;
}
function growUpReverse(element, reverse) {
  element.style.transform = `scale(${reverse})`;
}
function appearReverse(element, reverse) {
  element.style.opacity = reverse;
}

// entry point
window.onload = () => {
  // init vars
  header = document.querySelector("header");
  heroText = document.querySelector(".hero-text");
  heroBtn = document.querySelector(".hero-btn");
  scrollTopBtn = document.querySelector(".scroll-top-btn");
  mainTitle = document.querySelector(".main-title");
  introSection = document.querySelector("#intro");
  cvSection = document.querySelector("#cv");
  certSection = document.querySelector("#cert");
  expSection = document.querySelector("#exp");
  visionSection = document.querySelector("#vision");
  visionTitle = document.querySelector(".vision_title");
  visionContent = document.querySelector(".vision_content");
  let timeout = 500;

  setTimeout(() => {
    slideTop(header);
    setTimeout(() => {
      appear(heroText);
      growUp(heroBtn);
      setTimeout(() => {
        slideLeft(mainTitle);
        setTimeout(() => {
          slideRight(introSection);
        }, timeout);
      }, timeout);
    }, timeout);
  }, timeout);

  window.onscroll = onScroll;
};
