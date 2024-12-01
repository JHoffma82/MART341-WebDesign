var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawCircles() {
  c.width = window.innerWidth;
  c.height = 100;

  var numCircles = 5;
  var radius = c.width / 50;
  var spacing = c.width / 20; 

  var startX = (c.width - (numCircles * (2 * radius) + (numCircles - 1) * spacing)) / 2;

  ctx.clearRect(0, 0, c.width, c.height);

  for (var i = 0; i < numCircles; i++) {
    var x = startX + i * (2 * radius + spacing);
    var y = c.height / 2;

 
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green"; 
    ctx.fill();
    ctx.strokeStyle = "#333"; 
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

drawCircles();

window.addEventListener("resize", drawCircles);