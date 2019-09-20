document.querySelector("p").innerHTML = dict1;

var text = dict[Math.floor(Math.random() * dict.length)];
createSpan();
var eventGlob;
var time = 0;
var click = false; // boolean value for clicked or not i.e can be keys from keyboard or restart button
var IndexRunner = 0; //index pointer for text i.e where the current pointer is in the typer
var wordIndex = 0; //points to current word
var words = text.split(" ");
var index = 0; //for single word index
document.getElementsByClassName("restart")[0].style.display = "none";

//setting of an interval
var interval = setInterval(function() {
    if (click == true) {
        time++;
        if (time >= 0) {
            document.getElementsByClassName("restart")[0].style.display = "block";
            document.getElementsByClassName("show-time")[0].innerHTML = time + "s";
        }
    }
}, 1000);


//restart button clicked procudure
var button = document.getElementsByClassName("restart")[0].addEventListener("click", function() {
    click = false;
    time = 0;
    document.getElementsByClassName("show-time")[0].innerHTML = time + "s";
    IndexRunner = 0;
    for (i = 0; i < text.length; i++) {
        putColor("rgb(184, 178, 178)");
        IndexRunner++;
    }
    IndexRunner = 0;
    index = 0;
    wordIndex = 0;

    //new text
    document.getElementsByClassName("text")[0].innerHTML = "";
    text = dict[Math.floor(Math.random() * dict.length)];
    createSpan();
    words = text.split(" ");


    document.getElementsByClassName("restart")[0].style.display = "none";
    document.getElementsByClassName("show-word")[0].style.display = "none";
    document.getElementById("input").value = "";
}, false);

//key down procedure
document.getElementById("input").addEventListener("keydown", function(event) {
    click = true;
    eventGlob = event;
    /* Invokes word checking function */
    wordCheck(event);
    //charChecker(event);
}, false);

function wordCheck(event) {
    if (event.keyCode != 16 && event.keyCode != 20 && event.keyCode != 17 && event.keyCode != 18 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 19 && event.keyCode != 27 && event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40) {
        document.getElementsByClassName("show-word")[0].style.display = "block";
        document.getElementsByClassName("show-word")[0].innerHTML = words[wordIndex];
        if (IndexRunner == text.length - 1) {
            // text over
            if (text[IndexRunner] == event.key && document.getElementsByClassName("result")[0].style.display == "none") {
                putColor("blue");
                status();
            } else if (event.keyCode == 8 && document.getElementsByClassName("result")[0].style.display == "none") {
                backspace();
            } else if (text[IndexRunner] != event.key && document.getElementsByClassName("result")[0].style.display == "none") {
                putColor("red");
                status();
            }else  {  
                status();
            }
        } else {
            if (event.keyCode == 32 && words.length - 1 != wordIndex) {
                if (document.getElementById("input").value != " " && index >= words[wordIndex].length) {
                    wordIndex++;
                    IndexRunner++;
                    index = 0;
                    document.getElementsByClassName("show-word")[0].innerHTML = words[wordIndex];
                } else if (index < words[wordIndex].length && document.getElementById("input").value != " ") {
                    cnt = 0;
                    wordIndex++;
                    for (i = 0; i < wordIndex; i++) {
                        cnt += words[i].length;
                    }
                    cnt = cnt + wordIndex;
                    IndexRunner = cnt;
                    index = 0;
                    document.getElementsByClassName("show-word")[0].innerHTML = words[wordIndex];
                }
                document.getElementById("input").value = '';
            } else if (event.key == words[wordIndex][index]) {
                //when matched the character
                putColor("blue");
                index++;
                IndexRunner++;
            } else if (event.keyCode == 8) {
                backspace();
            } else if (words[wordIndex][index] == undefined) {
                // when the entered key cross the length of word
                IndexRunner--;
                putColor("red");
                IndexRunner++;
            } else if (event.key != words[wordIndex][index]) {
                //unmatched condition
                putColor("red");
                index++;
                IndexRunner++;
            }
        }
    }
}

//create span tag for every character in text
function createSpan() {
    for (i = 0; i < text.length; i++) {
        var span = document.createElement("span");
        span.setAttribute("class", "color-span");
        span.innerHTML = text[i];
        document.getElementsByClassName("text")[0].appendChild(span);
    }
}

//color the text at current Index
function putColor(color) {
    var span = document.getElementsByClassName("text")[0].getElementsByClassName("color-span");
    span[IndexRunner].setAttribute("style", "color:" + color);
}

//decolor the text on backspace
function remColor() {
    var span = document.getElementsByClassName("color-span");
    span[IndexRunner].removeAttribute("style");
}

//status i.e accuracy and speed
function status() {

    click = false;
    document.getElementsByClassName("show-word")[0].style.display = "none";
    document.getElementsByClassName("restart")[0].style.display = "none";
    /* -- calculator section -- */
    var span = document.getElementsByClassName("color-span");
    var accuracy = 0;
    var color;
    var accuracyPercent = 0;
    var speed = parseInt((text.length - text.split(" ").length -1) / (time*5) * 60);
    for (i = 0; i < span.length; i++) {
        color = span[i].style.color;
        if (color == "blue") {
            accuracy++;
        }
    }
    accuracyPercent = accuracy / (text.length - words.length + 1) * 100;

    /* -- display section -- */
    document.getElementsByClassName("result")[0].style.display = "block";
    if (accuracyPercent > 90) {
        if (speed < 20) {
            remark = "You're Turtle";
        } else if (speed < 40) {
            remark = "Average";
        } else if (speed > 40 && speed < 50) {
            remark = "Good";
        } else if (speed > 50 && speed < 60) {
            remark = "Perfect";
        } else if (speed > 60 && speed < 80) {
            remark = "Pro";
        } else if (speed > 80) {
            remark = "Expert";
        }
    } else if (accuracyPercent > 60 && accuracyPercent < 90) {
        remark = "Not good accuracy";
    } else {
        remark = "Very bad accuracy";
    }
    document.getElementsByClassName("status")[0].innerHTML = remark + " <br> Accuracy : " + accuracyPercent.toFixed(2) + "% <br> Speed: " + speed + "WPM"+"<br> Press Enter";

    /* -- restart -- */
    if (eventGlob.keyCode == 13) {
        document.getElementById("input").value = "";
        document.getElementsByClassName("result")[0].style.display = "none";
        IndexRunner = 0;
        for (i = 0; i < text.length; i++) {
            putColor("rgb(184, 178, 178)");
            IndexRunner++;
        }
        IndexRunner = 0;
        time = 0;
        index = 0;
        wordIndex = 0;
        document.getElementsByClassName("show-time")[0].innerHTML = time + "s";

        //new text
        document.getElementsByClassName("text")[0].innerHTML = "";
        text = dict[Math.floor(Math.random() * dict.length)];
        createSpan();
        words = text.split(" ");;
    }
}

function backspace() {
    //backspace key press
    /* -- for putting blue color when word matches the input -- */
    var input = document.getElementById("input");
    if (input.value.trim().substr(0, input.value.trim().length - 1) == words[wordIndex]) {
        IndexRunner--;
        putColor("blue");
        IndexRunner++;
    }
    if (index > 0 && words[wordIndex].length >= document.getElementById("input").value.trim().length) {
        index--;
        IndexRunner--;
        remColor();
    }
}


//document.getElementsByClassName("restart")[0].innerHTML = IndexRunner + " and " + text.length;