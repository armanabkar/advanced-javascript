// Single Responsibility Principle
// A class shouldn't change for more than 1 reason
// Should have a single responsibility (be small)
class Product {}
class Customer {}
class Delivery {}
// Violating SRP:
class ReportDocument {
  generateReport() {}
  createPDF() {}
}

// Open-Closed Principle
// A class should be open for extension but closed for modification -> helps to stay DRY and have small classes
interface Printer {
  print();
}
class PrinterImplementation {
  verifyData() {}
}
class WebPrinter extends PrinterImplementation implements Printer {
  print() {}
}
class PDFPrinter extends PrinterImplementation implements Printer {
  print() {}
}
// Can extend Printer class or create new Printer

// Liskov Substitution Principle
// Objects should be replaceable with instances of their subclasses without altering the behavior -> don't model data in wrong way
class Bird {
  eat() {}
}
// Not every bird can fly! (e.g. Penguins)
class FlyingBird extends Bird {
  fly() {}
}
class Eagle extends FlyingBird {}
class Penguin extends Bird {}
const eagle = new Eagle();
const penguin = new Penguin();
eagle.fly();

// Interface Segregation Principle
// Many client-specific interfaces are better than one general purpose interface
interface Database {
  storeData();
}
// avoid big and general purpose interfaces
interface RemoteDatabase {
  connect();
}
class SQLDatabase implements Database, RemoteDatabase {
  storeData() {}
  connect() {}
}
class InMemoryDatabase implements Database {
  storeData() {}
}

// Dependency Inversion Principle
// You should depend upon abstractions, not concretions
class App {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  saveSettings() {
    this.database.storeData();
  }
}
// Now you choose which database you wanna use - useful in Dependency Injection
const database = new SQLDatabase();
database.connect();
const app = new App(database);
