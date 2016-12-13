'use strict';

// Globals and data defined

var threePicturesID = document.getElementById('threePictures');
var surveyForm = document.getElementById('survey-form');
var userChoices = 0;
var cantBe = [];
var resultsViewed = false;
var imagePaths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'chthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var leftPic = document.getElementById('leftPicture');
var centerPic = document.getElementById('centerPicture');
var rightPic = document.getElementById('rightPicture');

var picArray = [];

// fill picArray
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

displayThreePictures(leftPic, centerPic, rightPic);

// Functioning Functions

function displayThreePictures(leftPic, centerPic, rightPic){

  // Left Picture Set
  var leftPicIndex=bigRandom();
  leftPic.src = picArray[leftPicIndex].filePath;
  leftPic.alt = leftPicIndex;
  for(var i=0; i<cantBe.length; i++){
    if(cantBe[i]===leftPicIndex){
      leftPicIndex=bigRandom();
      leftPic.src = picArray[leftPicIndex].filePath;
      leftPic.alt = leftPicIndex;
      i=0;
    }
  }
  cantBe.push(leftPicIndex);
  picArray[leftPicIndex].howOftenAppear+=1;

  // Center Picture Set
  var centerPicIndex=bigRandom();
  centerPic.src = picArray[centerPicIndex].filePath;
  centerPic.alt = centerPicIndex;
  for(var j=0; j<cantBe.length; j++){
    if(cantBe[j]===centerPicIndex){
      centerPicIndex=bigRandom();
      centerPic.src = picArray[centerPicIndex].filePath;
      centerPic.alt = centerPicIndex;
      j=0;
    }
  }
  cantBe.push(centerPicIndex);
  picArray[centerPicIndex].howOftenAppear+=1;

  // Right Picture Set
  var rightPicIndex=bigRandom();
  rightPic.src = picArray[rightPicIndex].filePath;
  rightPic.alt = rightPicIndex;
  for(var k=0; k<cantBe.length; k++){
    if(cantBe[k]===rightPic.src){
      rightPicIndex=bigRandom();
      rightPic.src = picArray[rightPicIndex].filePath;
      rightPic.alt = rightPicIndex;
      k=0;
    }
  }
  cantBe.push(rightPicIndex);
  picArray[rightPicIndex].howOftenAppear+=1;

  // console.log('The alts are '+leftPic.alt, centerPic.alt, rightPic.alt);

  while(cantBe.length>3){
    cantBe.shift();
  }
}

function bigRandom() {
  return Math.floor(Math.random()*20);
}

// Event Handlers >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function superEventHandler(event){

  event.preventDefault();
  if (event.currentTarget === event.target){
    return alert('Click on the picture please');
  }

  var clickedPic = parseInt(event.target.alt);

  for(var q=0; q<picArray.length; q++){
    if(q === clickedPic){
      picArray[q].howOftenClicked+=1;
    }
  }

  // console.log('event target is '+ event.target.alt, leftPic.alt, centerPic.alt, rightPic.alt);
  userChoices+=1;

  if(userChoices >=25){
    return alert('Thank you for completing the survey! Please click on the view results button to review the results.');
  }

  displayThreePictures(leftPic, centerPic, rightPic);
  // console.log(userChoices);
}

function buttonHandler(event){
  event.preventDefault();
  if (resultsViewed === true){
    return alert('gosh you are annoying');
  }
  if(userChoices<25){
    return alert('Please complete the survey!')
  }
  console.table(picArray);
  resultsViewed = true;
}

// Event Listeners
threePicturesID.addEventListener('click', superEventHandler);
surveyForm.addEventListener('submit', buttonHandler);
