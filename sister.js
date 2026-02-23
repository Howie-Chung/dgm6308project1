// import Father from "./father.js";
import FamilyMember from "./familymember.js";
class Sister extends FamilyMember {
  constructor(name) {
    super(name);
    this.role = "sister";
    this.hobby = "Reading.";
  }

  introduce() {
    console.log(
      `Hello! I am ${this.name} and I am a ${this.role}. I like ${this.hobby}`,
    );
  }
}

export default Sister;