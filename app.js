let canvas = document.getElementById("canvas");
console.log(canvas);
let ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;


////////////////////////////////////////////////////


// LE TOIT DE LA VOITURE
ctx.fillStyle = "#08090A";
ctx.fillRect(65, 75, 450, 150);

// CARCASSE VOITURE
ctx.fillStyle = "#08090A";
ctx.fillRect(45, 200, 550, 85);

// WHEEL DROIT
ctx.beginPath();
ctx.arc(150, 300, 55, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// JANTE DROITE
ctx.beginPath();
ctx.arc(150, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#FFC15E";
ctx.fill();

// WHEEL GAUCHE
ctx.beginPath();
ctx.arc(450, 300, 55, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// JANTE GAUCHE
ctx.beginPath();
ctx.arc(450, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#FFC15E";
ctx.fill();

// FENÊTRE GAUCHE
ctx.fillStyle = "brown";
ctx.fillRect(100, 100, 175, 100);

// FENÊTRE DROITE
ctx.fillStyle = "brown";
ctx.fillRect(310, 100, 175, 100);

// // PORTIERE GAUCHE

// ctx.fillStyle = "#F55536";
// ctx.fillRect(250, 210, 20, 40);

// // PORTIERE DROITE
// ctx.fillStyle = "#F55536";
// ctx.fillRect(485, 210, 20, 40);

// PHARE GAUCHE
ctx.fillStyle = "yellow";
ctx.fillRect(555, 200, 20, 40);

// PHARE DROIT
ctx.fillStyle = "yellow";
ctx.fillRect(25, 200, 20, 40);

// LETTRAGE
// ctx.font = "20px 'Dela Gothic One'";
// ctx.fillStyle = "orange";
// ctx.fillText("Drop it like it's haaaawt", 100, 50);