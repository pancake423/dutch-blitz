/*
main JS file for this project. controls the flow of code excecution in other files and also handles all events.
also responsible for changing settings.

author: William Jackson
first created: 4 Sept 2021
last modified: 6 Sept 2021
*/

//global constants for settings.
const LIGHT_BODY_COLOR = "white";
const LIGHT_TEXT_COLOR = "black";
const DARK_BODY_COLOR = "#1a1a1a";
const DARK_TEXT_COLOR = "white";

//canvas variables for main play-window script.
var c;
var ctx;
var cw;
var ch;

//main script, runs on window load.
window.onload = function() {
  c = document.getElementById("canvas");
  ctx = c.getContext("2d");
  resize();
}
window.onresize = resize;
function resize() {
  cw = c.width = Math.floor(window.innerWidth);
  ch = c.height = Math.floor(window.innerHeight * 0.9);
}

//function for changing the displayed page.
function selectPage(id) {
  let pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    if (i == id) {
      pages[i].style.display = "block";
    } else {
      pages[i].style.display = "none";
    }
  }

  //returning false cancels default browser behavior for onclick events.
  //in html, onclick = "return selectPage(id)".
  return false;
}

//function for changing from light to dark theme.
function globalTheme(id) {
  let newBodyColor;
  let newTextColor;
  switch (id) {
    case 0:
      newBodyColor = LIGHT_BODY_COLOR;
      newTextColor = LIGHT_TEXT_COLOR;
      break
    case 1:
      newBodyColor = DARK_BODY_COLOR;
      newTextColor = DARK_TEXT_COLOR;
      break
  }

  document.documentElement.style.setProperty("--main-text-color", newTextColor);
  document.documentElement.style.setProperty("--main-body-color", newBodyColor);
}
