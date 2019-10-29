/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let msg = timeString.split(":");
  if (parseInt(msg[0]) < 12) {
    return "Good Morning";
  } else if (parseInt(msg[0]) >= 12 && parseInt(msg[0]) < 17) {
    return "Good Afternoon";
  } else if (parseInt(msg[0]) >= 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greetFn='Text') {
  document.querySelector("h1#greeting").innerText = greetFn;
}