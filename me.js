// import Sister from "./father.js";
import FamilyMember from "./familymember.js";
class Me extends FamilyMember {
  constructor(name) {
    super(name);
    this.role = "young brother";
    this.hobby = "Photography.";
  }

  introduce() {
    console.log(
      `Hello! I am ${this.name} and I am a ${this.role}. I like ${this.hobby}`,
    );
  }
}

export default Me;