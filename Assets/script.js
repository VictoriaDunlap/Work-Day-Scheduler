var todayDateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// var nineAm = $('#9am');
var inputValues = $('.input')
var saveButton = $('.button')


// adds date and time to the page // while loop
var timeUpdate = () => {
    $("#currentDay").text(todayDateAndTime);
}
setInterval(timeUpdate, 1000); // while loop

// function setColorBasedOnTime () {
//     var now = Date()
//     if (now = todayDateAndTime) {
        
//     }
// }

// makes block red when it is within the current hour 
function colorChange () {
    var now = Date().getHours();
    if (now >= 9 || now < 10) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 10 || now < 11) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 11 || now < 12) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 12 || now < 13) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 13 || now < 14) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 14 || now < 15) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 15 || now < 16) {
        document.body.style.backgroundColor = "red"
    }
    if (now >= 16 || now < 17) {
        document.body.style.backgroundColor = "red"
    }
    // if (now >= 1 || now < 11) {
    //     document.body.style.backgroundColor = "red"
    // }
}

colorChange()

// changes color to grey when it is past that time // et color as function -- colors that way 
function colorChangeForPastTime () {
    var now = Date().getHours();
    if (now >= 9) {
       document.getElementById(nineAm).style.backgroundColor = "grey"
    }
    if (now >= 10) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 11) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 12) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 13) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 14) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 15) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 16) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
     if (now >= 17) {
        document.getElementById(nineAm).style.backgroundColor = "grey"
     }
}

colorChangeForPastTime()

// has the document save the input when the button is clicked once 
var eventOnSchedule = () => {
    saveButton.onclick.addEventListener('click', addEvent);
    localStorage.getItem(inputValues)
   
}

// add the event to the page 
function addEvent () {
    document.appendChild(eventOnSchedule)
}