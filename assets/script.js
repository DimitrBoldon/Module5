// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function init() {
    var hour9 = localStorage.getItem("hour-9")
    $("#hour-9 > .description").text(hour9)
    var hour10 = localStorage.getItem("hour-10")
    $("#hour-10 > .description").text(hour10)
    var hour11 = localStorage.getItem("hour-11")
    $("#hour-11 > .description").text(hour11)
    var hour12 = localStorage.getItem("hour-12")
    $("#hour-12 > .description").text(hour12)
    var hour13 = localStorage.getItem("hour-13")
    $("#hour-13 > .description").text(hour13)
    var hour14 = localStorage.getItem("hour-14")
    $("#hour-14 > .description").text(hour14)
    var hour15 = localStorage.getItem("hour-15")
    $("#hour-15 > .description").text(hour15)
    var hour16 = localStorage.getItem("hour-16")
    $("#hour-16 > .description").text(hour16)
    var hour17 = localStorage.getItem("hour-17")
    $("#hour-17 > .description").text(hour17)
}
$(function () {

  });

  function saveEvent(event){
    var hour = event.target.parentElement;
    var textArea = event.target.parentElement.querySelector(".description");
    localStorage.setItem(hour.getAttribute("id"), textArea.value);

 }

  $(".btn").on("click", saveEvent)
 init();

 var currentHour = new Date().getHours();
//  var timeBlocks = [
//     { hour9: 9 },
//     { hour10: 10 },
//     { hour11: 11 },
//     { hour12: 12 },
//     { hour13: 13 },
//     { hour14: 14 },
//     { hour15: 15 },
//     { hour16: 16 },
//     { hour17: 17 },
//  };

 for (var i = 9; i <= 17; i++) {
  

    var timeBlockElement = document.getElementById('hour-' + i);
  

    timeBlockElement.classList.remove('past', 'present', 'future');
  

    if (i < currentHour) {
      timeBlockElement.classList.add('past');
    } else if (i === currentHour) {
      timeBlockElement.classList.add('present');
    } else {
      timeBlockElement.classList.add('future');
    }
  }


// var storedInput = localStorage


// if (storedInput) {

//   // var storedInput = JSON.parse(storedInput);


//   for (var key in storedInput) {
//     if (storedInput.hasOwnProperty(key)) {
      
//       var textarea = document.querySelector("#" + key + " > .description");

      
//       textarea.value = storedInput[key];
//     }
//   }
// }









  

 var today = dayjs();
 var formatTime = today.format("MMM D, YYYY")
 $('#currentDay').text(formatTime);

