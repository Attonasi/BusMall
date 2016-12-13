'use strict';

// Globals and data defined

var threePicturesID = document.getElementById('threePictures');
var surveyForm = document.getElementById('survey-form');
var userChoices = 0;
var cantBe = [];
var currentArray = [];
var resultsViewed = false;
var imagePaths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'chthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var leftPic = document.getElementById('leftPicture');
var centerPic = document.getElementById('centerPicture');
var rightPic = document.getElementById('rightPicture');
var barChart = document.getElementById('barChart');
var picArray = [];

var barChartData = {

  labels : imageNames['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'chthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']

  datasets : [
    {
      fillColor : "red",
      strokeColor : "green",
      data : picArray.howOftenAppear;
    },
    {
      fillColor : "blue",
      strokeColor : "green)",
      data : howOftenClicked;
    }
  ]
}


new Chart(barChart).Bar(barChartData)
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

  currentArray[0] = bigRandom();
  currentArray[1] = bigRandom();
  currentArray[2] = bigRandom();

  while(currentArray[0]===cantBe[0]||currentArray[0]===cantBe[1]||currentArray[0]===cantBe[2]){
    currentArray[0]=bigRandom();
  }

  while(currentArray[0]===currentArray[1]||currentArray[1]===cantBe[0]||currentArray[1]===cantBe[1]||currentArray[1]===cantBe[2]) {
    currentArray[1]=bigRandom();
  }

  while(currentArray[2]===currentArray[1]||currentArray[2]===currentArray[0]||currentArray[2]===cantBe[0]||currentArray[2]===cantBe[1]||currentArray[2]===cantBe[2]){
    currentArray[2]=bigRandom();
  }

  setCantBe();

  leftPic.src = picArray[currentArray[0]].filePath;
  centerPic.src = picArray[currentArray[1]].filePath;
  rightPic.src = picArray[currentArray[2]].filePath;
  picArray[currentArray[0]].howOftenAppear+=1;
  picArray[currentArray[1]].howOftenAppear+=1;
  picArray[currentArray[2]].howOftenAppear+=1;
  leftPic.alt=currentArray[0];
  centerPic.alt=currentArray[1];
  rightPic.alt=currentArray[2];
}

function setCantBe(){
  cantBe[0] = currentArray[0];
  cantBe[1] = currentArray[1];
  cantBe[2] = currentArray[2];
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

  userChoices+=1;

  if(userChoices >=25){
    return alert('Thank you for completing the survey! Please click on the view results button to review the results.');
  }

  displayThreePictures(leftPic, centerPic, rightPic);
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
