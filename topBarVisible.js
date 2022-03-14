const HIDDEN_CLASSNAME = "hidden";
const SHOWN_CLASSNAME = "shown";

const dkHead = document.getElementById("dkHead");
const areaMenu = document.querySelector(".area_menu");
const areaTitle = document.querySelector(".area_title");

let beforeScrollY = [];

const handleTopBar = (useClassName, unuseClassName) => {
  dkHead.classList.add(useClassName);
  dkHead.classList.remove(unuseClassName);
  areaMenu.classList.add(useClassName);
  areaMenu.classList.remove(unuseClassName);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > areaTitle.offsetHeight) {
    if (beforeScrollY.pop() < window.scrollY) {
      handleTopBar(HIDDEN_CLASSNAME, SHOWN_CLASSNAME);
    } else {
      handleTopBar(SHOWN_CLASSNAME, HIDDEN_CLASSNAME);
    }
    beforeScrollY.push(window.scrollY);
  }
});
