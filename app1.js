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

  var leftPicSame = true;
  var centerPicSame = true;
  var rightPicSame  = true;
  var leftPicIndex = -1;
  var centerPicIndex = -1;
  var rightPicIndex = -1;


  while(leftPicSame){
    leftPicIndex=bigRandom();
    leftPic.src = picArray[leftPicIndex].filePath;
    leftPic.alt = leftPicIndex;
    for(var i=0; i<cantBe.length; i++){
      if(cantBe[i]===leftPic.src){
        leftPicIndex=bigRandom();
        leftPic.src = picArray[leftPicIndex].filePath;
        leftPic.alt = leftPicIndex;
      }
    }
    cantBe.push(leftPic.src);
    picArray[leftPicIndex].howOftenAppear+=1;
    leftPicSame = false;
  }

  while(centerPicSame){
    centerPicIndex=bigRandom();
    centerPic.src = picArray[centerPicIndex].filePath;
    centerPic.alt = centerPicIndex;
    for(var j=0; j<cantBe.length; j++){
      if(cantBe[j]===centerPic.src){
        centerPicIndex=bigRandom();
        centerPic.src = picArray[centerPicIndex].filePath;
        centerPic.alt = centerPicIndex;
      }
    }
    cantBe.push(centerPic.src);
    picArray[centerPicIndex].howOftenAppear+=1;
    centerPicSame = false;
  }

  while(rightPicSame){
    rightPicIndex=bigRandom();
    rightPic.src = picArray[rightPicIndex].filePath;
    rightPic.alt = rightPicIndex;
    for(var k=0; k<cantBe.length; k++){
      if(cantBe[k]===rightPic.src){
        rightPicIndex=bigRandom();
        rightPic.src = picArray[rightPicIndex].filePath;
        rightPic.alt = rightPicIndex;
      }
    }
    cantBe.push(rightPic.src);
    picArray[rightPicIndex].howOftenAppear+=1;
    rightPicSame = false;
  }
  // console.log('The alts are '+leftPic.alt, centerPic.alt, rightPic.alt);

  if(cantBe.length>3){
    cantBe.shift();
    cantBe.shift();
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
  if (resultsViewed){
    return alert('gosh you are annoying');
  }
  if(userChoices<25){
    resultsViewed = true;
    return alert('Please complete the survey!')
  }
  console.table(picArray);
}

// Event Listeners
threePicturesID.addEventListener('click', superEventHandler);
surveyForm.addEventListener('submit', buttonHandler);
