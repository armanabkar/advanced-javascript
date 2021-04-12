class Sheep {
  constructor(name, category = "Mountain Sheep") {
    this.name = name;
    this.category = category;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    console.log(this.category);
  }
}

class SheepPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    return new Sheep(this.proto.name, this.proto.category);
  }
}

const original = new Sheep("Jolly");
original.getName(); // Jolly
original.getCategory(); // Mountain Sheep

// Clone and modify what is required
const prototype = new SheepPrototype(original);
const clonedSheep = prototype.clone();
clonedSheep.setName("Dolly");
clonedSheep.getName(); // Dolly
clonedSheep.getCategory(); // Mountain sheep
