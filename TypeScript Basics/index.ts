// TypeScript is superset to JavaScript with extra features like types, interfaces, generics and more + compile to oldJS by TS Compiler

// Types
// number, string, boolean, void, any, undefined, null, never, object, ...
function add(a: number, b: number): (string | number)[] {
  return [a + b, " years old"];
}
const result = add(2, 3); // because of type inference, no need to specify type
console.log(result);
// console.log(add(2, "3")); -> produces error

const numInput = document.getElementById("num1") as HTMLInputElement; // Type Casting (overriding default)
const num = +numInput.value; // convert to number

// Instead of use object type;
// Function type
const resultContainer: CalculationResults = {
  res: result,
  print() {
    console.log("Hello World");
  },
};

// Type aliases (type) + Union Type
type CalculationResults = { res: (string | number)[]; print: () => void };

// Enums
enum OutputMode {
  CONSOLE,
  ALERT,
}
if (OutputMode.CONSOLE) {
  console.log("console");
}

// '!' is non-null operator -> expression cannot be null or undefined, so dear compiler, don't complain!
let number!: string;

// Classes - in TS we have to add properties as fields (or shorthand)
class User implements IPerson {
  age: number;
  // name is shorthand version
  constructor(public name: string, age: number) {
    this.age = age;
  }

  greet!: () => void;
}
// Inheritance
class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

// Interfaces
interface IPerson {
  name: string;
  age: number;
  greet: () => void;
}

// Generic Types
const results: Array<CalculationResults> = [];

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}
console.log(logAndEcho<string>("Hi there!"));

// Configure TypeScript Compiler in tsconfig.json - strict mode, compile target, ...
// 'tsc --init' for create configuration file and compile with 'tsc'
