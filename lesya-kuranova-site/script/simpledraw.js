var canvas;
var rSlider, gSlider, bSlider;

 function setup() {
   var h = document.body.clientHeight;
   canvas = createCanvas(windowWidth, h);
   canvas.position(0,0);
   canvas.style('z-index', '-1');
	 strokeWeight(2)
	 stroke(0);
   // pg = createGraphics(500,500);
   // pg.rSlider = createSlider(0, 255, 100);
   // pg.rSlider.position(20, 20);
}

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}
