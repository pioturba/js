var number = Math.floor(Math.random()*5)+1;
var timerOne = 0;
var timerTwo = 0;

function useSlide(slideNumber) {
    clearTimeout(timerOne);
    clearTimeout(timerTwo);
    number = slideNumber - 1;
    hide();
    setTimeout("changePicture()", 500);
}
// function hide - jQuery
function hide() {
    $("#slider").fadeOut(500);
}

function changePicture() {
    number++; if(number > 5) number = 1;
    var file = "<img src=\"slider/slide" + number + ".png\" />";
    document.getElementById("slider").innerHTML = file;
    // next line in jQuery
    $("#slider").fadeIn(500);
    timerOne = setTimeout("slider()", 5000);
    timerTwo = setTimeout("hide()", 4500);
}






// in HTML
// add to head  <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>

//          <body onload="changePicture()">
//          <span onclick="useslide(1)" style="cursor.pointer;">[1]</span>
//          <span onclick="useslide(2)" style="cursor.pointer;">[2]</span>
//          <span onclick="useslide(3)" style="cursor.pointer;">[3]</span>
//          <div id="slider"></div>

// need to be created folfer with pictures "slider/slide_number.png"