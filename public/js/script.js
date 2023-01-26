//togle class active
const navList = document.querySelector(".navlist");

//toggle hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navList.classList.toggle("active");
};

//Accordion Skills
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//project
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("project__active");
    });
    target.classList.add("project__active");

    tabs.forEach((tab) => {
      tab.classList.remove("project__active");
    });
    tab.classList.add("project__active");
  });
});
