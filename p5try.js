let step;
let male, female;
let confirm;
let clicked;
let headChosen;

function preload(){

}

function setup(){
step = 0;
clicked = undefined;
headChosen = undefined;
}

function draw(){
if (step == 0){
step0();
}else if(step == 1){
step1();
}

}

function step0(){
image(male, 0, 0);
image(female, 0, 0);
if(clicked == "male"){
	stroke();
	ellipse();
}else if(clicked == "female"){

}

}

function step1(){

}

function checkImageClick(img, x, y, msg) {
	if((mouseX>x)&&(mouseX<x+img.width)&&(mouseY>y)&&(mouseY<y+img.height)){
		return msg
	}
	return undefined;
}

function mouseClicked(){
	if(step == 0){
		if(checkImageClick(male, 0, 0, "male") != undefined){
			clicked = "male";
		}
		
		if(checkImageClick(female, 0, 0, "female")>0){
			clicked = "female";
		}

		if(checkImageClick(confirm, 0, 0, "confirm")>0){
		  if(clicked != undefined){
		  	headChosen = clicked;
		  	step ++;
		  }
	}
}