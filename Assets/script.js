var todayDateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// adds date and time to the page 

var timeUpdate = () => {
    $("#currentDay").text(todayDateAndTime);
}
setInterval(timeUpdate, 1000);

