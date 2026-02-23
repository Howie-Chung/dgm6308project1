import FamilyMember from "./familymember.js";
class Father extends FamilyMember {
  constructor(name) {
    super(name);
    this.role = "father";
    this.hobby = "Climbing.";
  }

  introduce() {
    console.log(
      `Hello! I am ${this.name} and I am a ${this.role}. I like ${this.hobby}`,
    );
  }
}

export default Father;