"use strict";

const WHITE_COLOR = "#ffffff";

class FamilyMember {
  constructor(name) {
    this.name = name;
    this.role = "";
  }

  callName() {
    console.log(this.name);
  }
}

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

let dad = new Father("Hsiu");
let sister = new Sister("Wen");
let myself = new Me("Howie");

let showBtn = document.querySelector("#show-btn");
console.log(showBtn);

let familyList = document.getElementById("family-list");
console.log(familyList);

let allButtons = document.querySelectorAll("button");
console.log(allButtons);

// AI
// I wanted to apply JavaScript interactions directly on a web page
// rather than only seeing the results in the console, so I asked
// an AI for guidance. I also asked how to prevent content from
// repeatedly appearing when using event listeners.
// https://claude.ai/share/2ea328a6-708b-4421-8ad8-d2c1625ec3d6

// Traditional
// I looked into how others prevent duplicate content from appearing
// when using event listeners.
// https://stackoverflow.com/questions/16715075/preventing-multiple-clicks-on-button/67237426#67237426

showBtn.addEventListener("click", (event) => {
  console.log("Button clicked:", event.target);
  let dadCard = document.createElement("div");
  dadCard.innerText = `Hello! I am ${dad.name} and I am a ${dad.role}. I like ${dad.hobby}`;
  dadCard.style.background = "#73956f";
  dadCard.style.margin = "10px 0";
  dadCard.style.padding = "10px 5px";
  dadCard.style.color = WHITE_COLOR;
  familyList.appendChild(dadCard);

  let sisterCard = document.createElement("div");
  sisterCard.innerText = `Hello! I am ${sister.name} and I am a ${sister.role}. I like ${sister.hobby}`;
  sisterCard.style.background = "#bc6c25";
  sisterCard.style.margin = "10px 0";
  sisterCard.style.padding = "10px 5px";
  sisterCard.style.color = WHITE_COLOR;
  familyList.appendChild(sisterCard);

  let myselfCard = document.createElement("div");
  myselfCard.innerText = `Hello! I am ${myself.name} and I am a ${myself.role}. I like ${myself.hobby}`;
  myselfCard.style.background = "#003049";
  myselfCard.style.margin = "10px 0";
  myselfCard.style.padding = "10px 5px";
  myselfCard.style.color = WHITE_COLOR;
  familyList.appendChild(myselfCard);

  showBtn.disabled = true;
});
