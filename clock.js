function clock() {
    var today = new Date();
    
    var day = day.getDate();
    var month = month.getMonth();
    var year = year.get.FullYear();

    var hours = hours.get.Houhs();
    var minutes = minutes.getMinutes();
    var seconds = seconds.getSeconds();

    document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " | " + hours + ":" + minutes + ":" + seconds;
    setTimeout("clock()", 1000);
}



// in HTML need to be added
// <div id="clock"></div>