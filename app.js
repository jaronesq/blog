//grabbed the element we want to do the time in
var timeForPost = document.getElementById('postTime');

//utc

// console.log(today);


function setTime() {
  //today
  var today = new Date();

  //gather information we need
  var day = today.getDate()
  var month = today.getMonth() +1
  var year = today.getFullYear()

  //format text
  var date = month + '-' + day + '-' + year

  //display
  timeForPost.innerHTML = date
}

setTime()