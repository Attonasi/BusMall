'use strict';

//start here

// Globals
var threePicturesID = document.getElementById('threePictures');
var userChoices = 0;
var lastLeftPic = null;
var lastRightPic = null;
var lastCenterPic = null;

var imagePaths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'chthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var picArray = [];

for(var i=0; i<imagePaths.length; i++){
  var imageName = imageNames[i];
  var imagePath = imagePaths[i];
  new NewPicture(imagePath, imageName);
}

// constructor
function NewPicture(imagePath, imageName){

  this.name = imageName;
  this.filePath = imagePath;
  this.howOftenAppear = 0;
  this.howOftenClicked = 0;

  picArray.push(this);
}

// Event Handler



function superEventHandler(event){

  event.preventDefault();


  var leftPic = document.getElementById('leftPicture');
  var centerPic = document.getElementById('centerPicture');
  var rightPic = document.getElementById('rightPicture');

  displayThreePictures(leftPic, centerPic, rightPic);

}
// Event Listener
threePicturesID.addEventListener('click', superEventHandler);

console.log(userChoices);
// Functions

function displayThreePictures(leftPic, centerPic, rightPic){


  leftPic.src = picArray[bigRandom()].filePath;
  centerPic.src = picArray[bigRandom()].filePath;
  rightPic.src = picArray[bigRandom()].filePath;


}

function bigRandom() {
  return Math.floor(Math.random()*20);
}
