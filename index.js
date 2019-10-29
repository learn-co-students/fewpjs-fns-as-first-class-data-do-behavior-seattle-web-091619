/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time_string) {
  let timeparts = time_string.split()
  let string = ''
  if (parseInt(timeparts[0]) < 17) {
     string = 'Good Afternoon'
    } 
  if (parseInt(timeparts[0]) < 12) {
   string = 'Good Morning'
  }
    if (parseInt(timeparts[0]) > 17) {
       string = 'Good Evening'
      }
      return string
}

function displayMessage(textual="TEST") {
  let content = document.getElementById('greeting')
  content.innerText = textual
return content
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
