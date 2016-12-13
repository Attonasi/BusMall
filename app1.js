'use strict';

// Globals and data defined

var threePicturesID = document.getElementById('threePictures');
var surveyForm = document.getElementById('survey-form');
var userChoices = 1;
var cantBe = [];
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

// Event Listeners
threePicturesID.addEventListener('click', superEventHandler);
surveyForm.addEventListener('submit', buttonHandler);

// Event Handler >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function superEventHandler(event){

  event.preventDefault();
  // console.log('do something');
  if (event.currentTarget === event.target){
    return alert('Click on the picture please');
  }
  if(userChoices >=5)
    return alert('Thank you for completing the survey! Please click on the view results button to review the results.')

  var clickedPic = event.target.id.value;

  console.log('event target is ' +clickedPic);

  displayThreePictures(leftPic, centerPic, rightPic);
  userChoices+=1;
  console.log(userChoices);

}

function buttonHandler(event){

  event.preventDefault();
  if(userChoices<5){
    return alert('Please complete the survey!')
  }
  // for(var v=0; v<picArray.length; v++){
  //   document.write(picArray[v]);
  // }
  console.table(picArray);
}

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
    for(var i=0; i<cantBe.length; i++){
      if(cantBe[i]===leftPic.src){
        leftPicIndex=bigRandom();
        leftPic.src = picArray[leftPicIndex].filePath;
      }
    }
    cantBe.push(leftPic.src);
    picArray[leftPicIndex].howOftenAppear+=1;
    leftPicSame = false;
  }

  while(centerPicSame){
    centerPicIndex=bigRandom();
    centerPic.src = picArray[centerPicIndex].filePath;
    for(var j=0; j<cantBe.length; j++){
      if(cantBe[j]===centerPic.src){
        centerPicIndex=bigRandom();
        centerPic.src = picArray[centerPicIndex].filePath;
      }
    }
    cantBe.push(centerPic.src);
    picArray[centerPicIndex].howOftenAppear+=1;
    centerPicSame = false;
  }

  while(rightPicSame){
    rightPicIndex=bigRandom();
    rightPic.src = picArray[rightPicIndex].filePath;
    for(var k=0; k<cantBe.length; k++){
      if(cantBe[k]===rightPic.src){
        rightPicIndex=bigRandom();
        rightPic.src = picArray[rightPicIndex].filePath;
      }
    }
    cantBe.push(rightPic.src);
    picArray[rightPicIndex].howOftenAppear+=1;
    rightPicSame = false;
  }

  if(cantBe.length>3){
    cantBe.shift();
    cantBe.shift();
    cantBe.shift();
  }
}

function bigRandom() {
  return Math.floor(Math.random()*20);
}
