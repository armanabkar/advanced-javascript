class About {
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return "About page in " + this.theme.getColor();
  }
}

class Careers {
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return "Careers page in " + this.theme.getColor();
  }
}

class DarkTheme {
  getColor() {
    return "Dark Black";
  }
}
class LightTheme {
  getColor() {
    return "Off white";
  }
}
class AquaTheme {
  getColor() {
    return "Light blue";
  }
}

const darkTheme = new DarkTheme();
const aquaTheme = new AquaTheme();

const about = new About(darkTheme);
const careers = new Careers(aquaTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"
