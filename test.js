//load X image
xPic = new Image(100,100);
xPic.src = "images/X.jpg";


//blocks for row0
var block0 = document.getElementById("E0");
var block1 = document.getElementById("E1");
var block2 = document.getElementById("E2");

//row0 of blocks
var row0 = [block0, block1, block2];

//blocks for row1
var block3 = document.getElementById("E3");
var block4 = document.getElementById("E4");
var block5 = document.getElementById("E5");

//row1 of blocks
var row1 = [block3, block4, block5];

//blocks for row2
var block6 = document.getElementById("E6");
var block7 = document.getElementById("E7");
var block8 = document.getElementById("E8");

//row2 of blocks
var row2 = [block6, block7, block8];

//2d array of row and blocks
var table = [row0,row1,row2];

var numX = [];

//click handler that appends an X image 
//as a child element into the block 
//that received click event
function addX(){
	this.appendChild(xPic);
	console.log(this.id);
}

//set click property for each block in table
for(var a = 0; a < 3; a++)
{
	for(var b = 0; b < 3; b++)
	{
		//set click handler 
		//Problems: When user clicks on another block
		//image is removed from previous block and appended
		//to current clicked block
		//Need to find a way to keep previously appended 
		//image on clicked blocks
		table[a][b].addEventListener("click", addX);
	}
}

