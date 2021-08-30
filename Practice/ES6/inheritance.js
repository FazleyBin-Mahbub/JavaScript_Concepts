class TeamMember {
  name;
  designation = "Support Web Dev";

  address = "BD";
  constructor({ name, address }) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  startSession() {
    console.log(this.name, "start a support session");
  }
}

class StudentCare extends TeamMember {
  buildARoutine(student) {
    console.log(this.name, "Build a routine for", student);
  }
}
class NeptunDev extends TeamMember {
  buildARoutine(release) {
    console.log(this.name, "release app", release);
  }
}

const alia = new StudentCare("Alia Bhatt", "Mumbai");
console.log(alia);
