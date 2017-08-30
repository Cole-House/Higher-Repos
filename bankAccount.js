var question = prompt("How many monies you withdrawing?")
//asks user how much they are taking from balance//
var bankAccount = {};
//object named bankAccount//
	bankAccount["name"] = "Swole Cole";
  bankAccount["balance"] = 100;
  //these are keys that go into the empty object named bankAccount//
  var calculation = [(bankAccount["balance"] )-(question)];
  //variable that calculates the balance(100) - the users requested withdrawal//
window.alert(calculation);
//pop-up with var calculation//
