class WoodenDoor {
  getDescription() {
    console.log("I am a wooden door");
  }
}

class IronDoor {
  getDescription() {
    console.log("I am an iron door");
  }
}

class Welder {
  getDescription() {
    console.log("I can only fit iron doors");
  }
}

class Carpenter {
  getDescription() {
    console.log("I can only fit wooden doors");
  }
}

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}

woodenFactory = new WoodenDoorFactory();
door = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();
door.getDescription(); // Output: I am a wooden door
expert.getDescription(); // Output: I can only fit wooden doors

// Same for Iron Factory
ironFactory = new IronDoorFactory();
door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();
door.getDescription(); // Output: I am an iron door
expert.getDescription(); // Output: I can only fit iron doors
