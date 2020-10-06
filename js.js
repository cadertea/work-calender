$(document).ready(function () {
    
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        // console.log(this);
        
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage
    $("#9  .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    function timetracker() {
        //gets what time it is now in hours from your computer
        var currentime = moment().hour();

        
        $(".time-block").each(function () {
            var idtime = parseInt($(this).attr("id"));
            // console.log( idtime, currentime)

            //check if we've moved past this time
            if (idtime < currentime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
               
            }
            else if (idtime === currentime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }
    timetracker();
})