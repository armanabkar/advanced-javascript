class AfricanLion {
  roar() {
    console.log("Roar!");
  }
}

class AsianLion {
  roar() {
    console.log("Roar!");
  }
}

class Hunter {
  hunt(lion) {
    // ... some code before
    lion.roar();
    //... some code after
  }
}

// This needs to be added to the game
class WildDog {
  bark() {
    console.log("Bark!");
  }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter {
  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(wildDog);

hunter = new Hunter();
hunter.hunt(wildDogAdapter);
