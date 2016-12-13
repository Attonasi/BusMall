'use strict';

//start here

// Globals
var threePicturesID = document.getElementById('threePictures');
var userChoices = 0;
// var lastLeftPic = null;
// var lastRightPic = null;
// var lastCenterPic = null;
var cantBe = [];

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
  console.log('do something');

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


  var leftPicSame = true;
  var centerPicSame = true;
  var rightPicSame  = true;

  while(leftPicSame){
    leftPic.src = picArray[bigRandom()].filePath;
    for(var i=0; i<cantBe.length; i++){
      if(cantBe[i]===leftPic.src){
        leftPic.src = picArray[bigRandom()].filePath;
      }
    }
    cantBe.push(leftPic.src);
    // console.log(leftPic.src);
    leftPicSame = false;
  }
  while(centerPicSame){
    centerPic.src = picArray[bigRandom()].filePath;
    for(var j=0; j<cantBe.length; j++){
      if(cantBe[i]===centerPic.src){
        centerPic.src = picArray[bigRandom()].filePath;
      }
    }
    cantBe.push(centerPic.src);
    // console.log(centerPic.src);
    centerPicSame = false;
  }
  while(rightPicSame){
    rightPic.src = picArray[bigRandom()].filePath;
    for(var k=0; k<cantBe.length; k++){
      if(cantBe[i]===rightPic.src){
        rightPic.src = picArray[bigRandom()].filePath;
      }
    }
    cantBe.push(rightPic.src);
    // console.log('rightPic.src')
    rightPicSame = false;
  }

  if(cantBe.length>3){
    cantBe.shift();
    cantBe.shift();
    cantBe.shift();
  }
  console.log(cantBe);
}

function bigRandom() {
  return Math.floor(Math.random()*20);
}
