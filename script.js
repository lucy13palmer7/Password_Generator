// generate random password
function generate() {
  //set password length/complexity
  event.preventDefault();
  let complexity = document.getElementById("slider").value;
  console.log(complexity);
  document.getElementById("length").innerHTML = `Length: ${complexity}`;

  //possibly password values
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*?.,=+_-1234567890";
  let password = "";

  //create for loop to choose password characters while using the users value setting from above
  for (let i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // add password to textbox/display area
  document.getElementById("display").value = password;

  // add password to previously generated list
  document.getElementById("lastPassword").innerHTML += password + "<br />";
}
function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password Copied!");
}
