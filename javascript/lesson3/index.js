function promptForUserName() {
  let userName = window.prompt("What is your name?"); // Prompt the user for their name

  document.getElementById("userName").innerText = userName;
}
