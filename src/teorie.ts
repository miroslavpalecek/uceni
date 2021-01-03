/*function error(message: string): never {
    throw new Error(message);
  }*/

  /*function fail() {
    return error("Something failed");
  }*/

  /*declare function create(o: object | null): void;*/

  /*function reverse(s: String): String {
    return s.split("").reverse().join("");
  }
  
  reverse("hello world");*/

  function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);