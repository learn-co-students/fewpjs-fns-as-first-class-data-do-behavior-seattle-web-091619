/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  if(parseInt(time) < 12){
    return "Good Morning"
  }
  else if (parseInt(time) >= 12 && parseInt(time) < 17){
    return "Good Afternoon"
  }
  else if(parseInt(time) >= 17){
    return "Good Evening"
  }
}

function displayMessage(message){
  let content = document.getElementById("greeting")
  content.innerText = "TEST"
}
