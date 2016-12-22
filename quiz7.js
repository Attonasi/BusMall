var allDogs = [];

function Dog (name, breed) {
  this.name = name,
  this.breed = breed,
  this.legs = 4,
  this.isAGoodDog = true,
  this.says(bark){
    console.log(this.name+' says ' +bark),
  }
  allDogs.push(this),
}

new Dog('Parker', 'English Sheperd');
new Dog('Demi', 'Border Collie');

allDogs[0].says('woof');

allDogs[1].legs = 3;
