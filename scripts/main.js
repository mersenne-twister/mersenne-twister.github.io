const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// (function() {
//     var elem = document.getElementById('download'), pos = 0,
    
//         timer = setInterval(function() {
//             pos++;
//             elem.style.left = pos+"px";
//             if (pos == 200) clearInterval(timer);
//         })
// })();

const body = document.body;
const html = document.documentElement;
const height = body.scrollHeight;
// const height = window.screen.height;

var move = document.getElementById("cat");
var right = true;
var x = move.style.left;
var down = true;
var y = move.style.top;
// var horizontal = move.style.right;
// var vertical = move.style.bottom;

setInterval(function(){
    move.style.position = "absolute";
    
    // console.log(body.scrollHeight, body.offsetHeight,
//   html.clientHeight, html.scrollHeight, html.offsetHeight);

    console.log(height);

    // console.log(move.style.top);

    // use .right somehow
    if (right && move.style.left.slice(0, -2) > (window.screen.width - move.width)){
        right = false;
    } else if (!right && move.style.left.slice(0, -2) < 0) {
        right = true;
    }
    if (down && move.style.top.slice(0, -2) > (height - move.height)){
        down = false;
    } else if (!down && move.style.top.slice(0, -2) < 0) {
        down = true;
    }


    if (right) {
        x++;
    } else {
        x--;
    }
    if (down) {
        y++;
    } else {
        y--;
    }

    move.style.left = x + "px";
    move.style.top = y + "px";

}, 5);