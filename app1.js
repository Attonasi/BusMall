'use strict';

// Globals
var threePicturesID = document.getElementById('threePictures');
var userChoices = 0;
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

// Event Listener
threePicturesID.addEventListener('click', superEventHandler);

// Event Handler >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function superEventHandler(event){

  event.preventDefault();
  // console.log('do something');
  if (event.currentTarget === event.target){
    return alert('Click on the picture please');
  }
  if(userChoices >=25)
    return alert('Thank you for completing the survey! Please click on the view results button to review the results.')

  var clickedPic = event.target.id.value;

  console.log('event target is ' +clickedPic);


  // console.log(cantBe);
  // if (event.target === rightPic){
  //   for(var z=0; z<picArray.length; z++){
  //     console.log(picArray[z].filePath, cantBe[2]);
  //     if (picArray[z].filePath===cantBe[2]){
  //       picArray[z].howOftenClicked+=1;
  //     }
  //   }
  //   console.log('rightPic clicked')
  // }
  // if (event.target === centerPic){
  //   for(var x=0; x<picArray.length; x++){
  //     if (picArray[x].filePath===cantBe[1]){
  //       picArray[x].howOftenClicked+=1;
  //     }
  //   }
  //   console.log('centerPic clicked')
  // }
  // if (event.target === leftPic){
  //   for(var c=0; c<picArray.length; c++){
  //     if (picArray[c].filePath===cantBe[0]){
  //       picArray[c].howOftenClicked+=1;
  //     }
  //   }
  //   console.log('leftPic clicked');
  // }

  displayThreePictures(leftPic, centerPic, rightPic);
  userChoices+=1;
  console.log(userChoices);

}



// Functioning Functions

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
    leftPicSame = false;
  }

  while(centerPicSame){
    centerPic.src = picArray[bigRandom()].filePath;
    for(var j=0; j<cantBe.length; j++){
      if(cantBe[j]===centerPic.src){
        centerPic.src = picArray[bigRandom()].filePath;
      }
    }
    cantBe.push(centerPic.src);
    centerPicSame = false;
  }

  while(rightPicSame){
    rightPic.src = picArray[bigRandom()].filePath;
    for(var k=0; k<cantBe.length; k++){
      if(cantBe[k]===rightPic.src){
        rightPic.src = picArray[bigRandom()].filePath;
      }
    }
    cantBe.push(rightPic.src);
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
