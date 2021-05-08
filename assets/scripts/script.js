
function validate() {
  let firstName = document.getElementById('inputFirstName');
  let lastName = document.getElementById('inputLastName');
  let address = document.getElementById('inputAddress');
  let city = document.getElementById('inputCity');


  event.preventDefault();
  if(firstName.value === '' || firstName.value.length === 0) {
    alert('First Name must be filled');
  } else if(lastName.value === '' || lastName.value.length ===0) {
    alert('Last Name must be filled');
  } else if(address.value === ''|| address.value.length === 0) {
    alert('Please enter your address');
  } else if (city.value === '' || city.value.length === 0) {
    alert('Please enter your city');
  }else {
    alert('Please fill all the fields'); ;
  }

}



function discount() {
  let zip = document.getElementById("inputZip").value;
  let firstName = document.getElementById("inputFirstName").value;
  let greeting;
  let x = zip

  if (x === "11419") {
    greeting = firstName + ' ' + "you are eligible for <strong>25%</strong> off your next bill, please provide us a valid driver\s license at the diner to redeem.";
  } else if (x === "11417") {
    greeting = firstName + ' ' + "you are eligible for <strong>5%</strong> off your next bill, please provide us a valid driver\s license at the diner to redeem.";
  } else {
    greeting = firstName + ' ' + "sorry you have to pay full price.";
  }

  document.getElementById("seeresults").innerHTML = greeting;
  
}


  

  







