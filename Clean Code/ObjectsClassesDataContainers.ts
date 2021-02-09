// Object: private internals/properties, public API(methods), contain your business logic(in OOP), abstractions over concretions
// Data Containers/Structures: public internal/ properties, almost no API(methods), store and transport data, concretions only

//The way you use them is different, you probably need object to hide low level operations:
class Database {
  connection: any;

  connect() {}

  disconnect() {
    this.connection.close();
  }
}
let database = new Database();
database.connect();
database.disconnect(); // instead of database.connection.close()

// Polymorphism: the ability of an object to take an many forms
class Delivery {
  // different kinds of delivery based on method -> polymorphism
  deliverProduct(method) {
    if (method === "express") {
      console.log("express");
    } else if (method === "insured") {
      console.log("insured");
    }
  }
}

// Classes should be small (just like functions)
class Order {}
class Customer {}
class Product {}
// instead of a large OnlineShop class

// Cohesion: how much are your class methods using the class properties? e.g. Maximum Cohesion when all methods each use all properties (highly cohesive object) - avoid no cohesion classes
class Comments {
  private comment: string;

  public sendComment(cmt) {
    this.comment = cmt;
  }
}

// The Law of Demeter: code in a method may only access direct internals of the object it belongs to, objects that are stored in properties of that object, objects which are received as method parameters, objects which are created in the method
// Principle of Least knowledge; don't depend on the internals of 'strangers' (other objects which you don't directly know)
// avoid code like this.customer.lastPurchase.date
// Tell (the code what to do), Don't Ask!
class Purchase {
  warehouse: any;
  customer: any;

  constructor(customer, warehouse) {
    this.customer = customer;
    this.warehouse = warehouse;
  }
  deliverLastPurchase() {
    this.warehouse.deliverPurchase(this.customer.lastPurchase);
  }
}

// Continue in SOLID.ts
