//when user scrolls the page execute function
window.onscroll = function () {
  sticky();
};

//get the navbar
var navbar = document.getElementById("nav");
//get the offset position of the navbar
var offset = navbar.offsetTop;
//function for adding and removing sticky class
function sticky() {
  if (window.pageYOffset >= offset) {
    navbar.parentElement.classList.add("sticky");
  } else {
    navbar.parentElement.classList.remove("sticky");
  }
}
