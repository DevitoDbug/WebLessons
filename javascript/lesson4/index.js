function updateInfo() {
  const nameValue = document.getElementById("userNameInputBox").value;
  const ageValue = document.getElementById("userAgeInputBox").value;

  document.getElementById("userName").innerText = nameValue;
  document.getElementById("userAge").innerText = ageValue;
}
