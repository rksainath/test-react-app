function displayDateTime() {
  // Get the current date
  let currentDate = new Date()

  // Get the day of the week as a string
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let dayOfWeek = daysOfWeek[currentDate.getDay()]

  // Get the current time
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()
  let seconds = currentDate.getSeconds()

  // Format hours, minutes, and seconds with leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  // Create a string with the current date, day of the week, and time
  let dateTimeString = 'Today is ' + dayOfWeek + ', ' + currentDate.toDateString() + '. The time is ' + hours + ':' + minutes + ':' + seconds

  // Display the result in an alert dialog
  alert(dateTimeString)
}

// Call the displayDateTime function to show the date, day, and time when the page loads
window.onload = displayDateTime
