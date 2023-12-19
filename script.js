const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//Dark or Light images
function imageMode(color) {
  image1.src = `img/undraw_heartbroken_${color}.svg`;
  image2.src = `img/undraw_starry_window_${color}.svg`;
  image3.src = `img/undraw_walking_outside_${color}.svg`;
}

//Dark Mode Styles
function darkMode() {
  nav.style.background = "rgb( 0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark-Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

//Dark Mode Styles
function darkMode() {
  nav.style.background = "rgb( 0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark-Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

//Light Mode Styles
function lightMode() {
  nav.style.background = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb( 0 0 0 /50%)";
  toggleIcon.children[0].textContent = "Light-Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  image1.src = "img/undraw_heartbroken_light.svg";
  image2.src = "img/undraw_starry_window_light.svg";
  image3.src = "img/undraw_walking_outside_light.svg";
}

//Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);
