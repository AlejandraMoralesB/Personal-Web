var navbar = document.getElementById("pb-navbar_super");
var sticky = navbar.offsetTop;
alert(sticky);

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
