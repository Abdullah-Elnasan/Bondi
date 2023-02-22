let myLiNav = document.querySelectorAll("nav ul li a");
let myOurWork = document.querySelectorAll(".our-work ul li");

console.log(myOurWork);
console.log(myLiNav);

myLiNav.forEach((lis) => {
  console.log(lis);
  lis.addEventListener("click", function () {
    myLiNav[0].classList.remove("active");
  });
});

myOurWork.forEach((lis) => {
  lis.addEventListener("click", function (e) {
    handleActive(e);
  });
});

// Handle Active Class From All Childrens

function handleActive(ev) {
  // Remove Class Active From All Children
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    console.log(ev.target.parentElement.querySelectorAll(".active"));

    element.classList.remove("active");
    element.classList.remove("rounded-pill");
  });

  // Add Active Class On target Self
  ev.target.classList.add("active");
  ev.target.classList.add("rounded-pill");
}
