// varialbes

let scrollTopBtn;

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

// entry point
window.onload = () => {
  scrollTopBtn = document.querySelector(".scroll-top-btn");
  window.onscroll = onScroll;
};
