/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time_string) {
  if (parseInt(timeparts[0]) < 17) {
    let string = 'Good Afternoon'
    } 
  let timeparts = timestring.split()
  if (parseInt(timeparts[0]) < 12) {
  let string = 'Good Morning'
  }
    if (parseInt(timeparts[0]) > 17) {
      let string = 'Good Evening'
      }
      return string
}

function displayMessage(textual){
  box = document.getElementById('time')
  box.textContent(textual)

}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
