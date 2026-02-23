function checkNum(num) {
  if (num <= "2") {
    throw Error("0 is not allowed");
  }
  if (num > "3") {
    throw Error("0 is not allowed");
  }
  if (num == "3"){
    alert("This is right number!");
  }
  return true;
}

export { checkNum };