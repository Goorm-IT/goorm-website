const navEl = document.querySelector(".nav");
const subItemEls = navEl.querySelectorAll(".sub-item");
const subMenu = navEl.querySelectorAll(".sub-menu");
const projectImgs = document.querySelectorAll(".project__img");

subMenu.forEach((menuItem) => {
  menuItem.addEventListener("mouseenter", () => {
    navEl.style.backgroundColor = "rgba(239, 242, 249, 0.05)";
    subItemEls.forEach((subItem) => {
      subItem.classList.remove("hide");
    });
  });
});

navEl.addEventListener("mouseleave", () => {
  navEl.style.backgroundColor = "transparent";
  subItemEls.forEach((subItem) => {
    subItem.classList.add("hide");
  });
});

projectImgs.forEach((projectImg) => {
  projectImg.addEventListener("click", () => {
    projectImg.classList.toggle("clicked");
  });
});
