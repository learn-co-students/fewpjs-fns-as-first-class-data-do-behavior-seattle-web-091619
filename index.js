/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
    let timeAsInt = time.split(":")
    let currentHour = timeAsInt[0]
    if (currentHour >= 0 && currentHour < 12)
    {
        console.log("morning")
        return "Good Morning"
    }
    else if (currentHour >= 12 && currentHour < 17)
    {
        console.log("afternoon")
        return "Good Afternoon"
    }
    else if (currentHour >= 17 && currentHour <= 24)
    {
        console.log("evening")
        return "Good Evening"
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(message)
{
    const greetMessage = document.getElementById("greeting")
    //greetMessage.textContent = greetMessage
    greetMessage.innerText = "TEST"
}
