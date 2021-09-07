/*
File for rendering svg-style card graphics on HTML canvases for this project.

Author: William Jackson
Created: 6 Sept 2021
Last Modified: 6 Sept 2021
*/
var CARD_STYLE = "default";
var COLOR_PALATES = [["#eb482f", "#ffffff", "#000000"], ["#2feb3f", "#ffffff", "#000000"], ["#2f55eb", "#ffffff", "#000000"], ["#ebe82f", "#ffffff", "#000000"]];
const CARD_HEIGHT_RATIO = 1.5;

function translateAndRotate(context, x, y, angle) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
}

function restore(context) {
  context.restore();
}

//main wrapper function to draw any card.
//([ctx, x, y, dir, size, colorid, number, gender], mini=false)
//takes args context (canvasRenderingContext), x, y (position args), direction (rotation), size (in pixels),
//color palate (id from COLOR_PALATES), gender (a misnomer, but they're boy/girl in the original game oop) and mini (for displaying other people's cards in a smaller format)
function drawCard([context, x, y, direction, size, colorPalate, number, gender], mini = false) {
  switch (CARD_STYLE) {
    case "default":
      if (mini) {
        drawDefaultMini(context, x, y, direction, size, colorPalate, number, gender);
      } else {
        drawDefault(context, x, y, direction, size, colorPalate, number, gender);
      }
      break;
  }
}

//functions for drawing individual cards;
function drawDefault(context, x, y, direction, size, colorPalate, number, gender) {
  context.beginPath();
  context.strokeStyle = COLOR_PALATES[colorPalate][2];
  context.fillStyle = COLOR_PALATES[colorPalate][0];
  context.lineJoin = "round";
  context.lineCap = "round";
  context.lineWidth = size / 20;
  context.textAlign = "center";
  context.textBaseline = "alphabetic";
  context.font = Math.floor(size / 2) + "px Oxygen";

  translateAndRotate(context, x, y, direction);

  //main card body, color0 bg, color2 outline
  context.moveTo(size / -2, (size / -2) * CARD_HEIGHT_RATIO);
  context.lineTo(size / 2, (size / -2) * CARD_HEIGHT_RATIO);
  context.lineTo(size / 2, (size / 2) * CARD_HEIGHT_RATIO);
  context.lineTo(size / -2, (size / 2) * CARD_HEIGHT_RATIO);
  context.lineTo(size / -2, (size / -2) * CARD_HEIGHT_RATIO);
  context.fill();
  context.stroke();

  //card orientation line
  context.beginPath();
  context.moveTo(size / -2, (size / 2) * CARD_HEIGHT_RATIO * 0.8);
  context.lineTo(size / 2, (size / 2) * CARD_HEIGHT_RATIO * 0.8);
  context.stroke();

  //color1 bg circle, color2 outline
  context.beginPath();
  context.fillStyle = COLOR_PALATES[colorPalate][1];
  context.arc(0, 0, size / 2, 0, 2*Math.PI);
  context.fill();
  context.stroke()

  //text in color2
  context.beginPath();
  context.strokeText(number, 0, 0);
  context.font = Math.floor(size / 3) + "px Oxygen";
  let letter = "M";
  if (gender.toLowerCase() == "f") {
    letter = "F";
  }
  context.strokeText(letter, 0, size / 3);
  restore(context);
}
function drawDefaultMini(context, x, y, direction, size, colorPalate, number) {
  context.beginPath();
  context.strokeStyle = COLOR_PALATES[colorPalate][2];
  context.fillStyle = COLOR_PALATES[colorPalate][0];
  context.lineJoin = "round";
  context.lineCap = "round";
  context.lineWidth = size / 20;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = Math.floor(size / 2) + "px Oxygen";

  translateAndRotate(context, x, y, direction);

  //main card body, color0 bg, color2 outline
  context.moveTo((size / -2) / CARD_HEIGHT_RATIO, size / -2);
  context.lineTo((size / 2) / CARD_HEIGHT_RATIO, size / -2);
  context.lineTo((size / 2) / CARD_HEIGHT_RATIO, size / 2);
  context.lineTo((size / -2) / CARD_HEIGHT_RATIO, size / 2);
  context.lineTo((size / -2) / CARD_HEIGHT_RATIO, size / -2);
  context.fill();
  context.stroke();

  //card orientation line
  context.beginPath();
  context.moveTo((size / -2) / CARD_HEIGHT_RATIO, (size / 2) * 0.8);
  context.lineTo((size / 2) / CARD_HEIGHT_RATIO, (size / 2) * 0.8);
  context.stroke();

  //color1 bg circle, color2 outline
  context.beginPath();
  context.fillStyle = COLOR_PALATES[colorPalate][1];
  context.arc(0, 0, size / 3, 0, 2*Math.PI);
  context.fill();
  context.stroke()

  //text in color2
  context.beginPath();
  context.strokeText(number, 0, 0);
  restore(context);
}
