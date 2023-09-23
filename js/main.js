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

// event handlers

function onScroll() {
  let offset = 540;
  if (scrollTopBtn && window.scrollY >= offset)
    scrollTopBtn.style.right = "10px";
  else scrollTopBtn.style.right = "-100px";
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

  slideTop(header);
  appear(heroText);
  growUp(heroBtn);
  slideLeft(mainTitle);
  slideRight(introSection);
  slideLeft(cvSection);
  growUp(certSection);
  slideLeft(expSection);
  growUp(visionSection);
  window.onscroll = onScroll;
};
