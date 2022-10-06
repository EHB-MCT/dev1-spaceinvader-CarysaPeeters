"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader ();
function drawSpaceInvader () {

// black background
context.beginPath ();
context.fillStyle = "black";
context.moveTo (50,50);
context.lineTo (350,50);
context.lineTo (350,350);
context.lineTo (50,350);
context.lineTo (50,50);
context.fill ();

// first rectangle above
context.beginPath ();
context.fillStyle = "#00FF00";
context.moveTo (75,125);
context.lineTo (75,225);
context.lineTo (125,225);
context.lineTo (125,125);
context.lineTo (75,125);
context.fill ();

// first rectangle below
context.beginPath ();
context.fillStyle = "#00FF00";
context.moveTo (125,225);
context.lineTo (125,325);
context.lineTo (175,325);
context.lineTo (175,225);
context.lineTo (125,225);
context.fill ();

// second rectangle above
context.beginPath ();
context.fillStyle = "#00FF00";
context.moveTo (175,225);
context.lineTo (225,225);
context.lineTo (225,125);
context.lineTo (175,125);
context.lineTo (175,225);
context.fill ();

//second rectangle below
context.beginPath ();
context.fillStyle = "#00FF00";
context.moveTo (225,225);
context.lineTo (225,325);
context.lineTo (275,325);
context.lineTo (275,225);
context.lineTo (225,225);
context.fill ();

// third rectangle above
context.beginPath ();
context.fillStyle = "#00FF00";
context.moveTo (275,225);
context.lineTo (325,225);
context.lineTo (325,125);
context.lineTo (275,125);
context.lineTo (275,225);
context.fill ();
}