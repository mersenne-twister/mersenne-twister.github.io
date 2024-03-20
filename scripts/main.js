var initial = document.getElementById("initial");
var clicked = false

initial.addEventListener("mousedown", (event) => {
    clicked = true;
});

var count = 0;

// var right = true;
// var x = initial.style.left;
// var down = true;
// var y = initial.style.top;

function initBounce(element) {
    // TODO: MAKE X AND Y RANDOM
    element.dataset.right = true;
    // element.dataset.x = element.style.left;
    element.dataset.x = Math.random() * 1000
    element.dataset.down = true;
    // element.dataset.y = element.style.top;
    element.dataset.y = Math.random() * 1000

    // element.dataset.right = true;
    // element.dataset.x = element.style.left;
    // element.dataset.down = true;
    // element.dataset.x = element.style.top;
}

initBounce(initial);

setInterval(function(){
    if (count > 0) {
        bounce = document.createElement("img");
        bounce.setAttribute("width", "35%");
        bounce.setAttribute("class", "bounce button");
        bounce.setAttribute("src", "images/download-button.webp");
        bounce.setAttribute("alt", "An incredibly annoying bouncng download button!");
        initBounce(bounce);

        bounce.addEventListener("mousedown", (event) => {
            clicked = true;
        });

        document.body.appendChild(bounce);

        --count;
    }
}, 75);

setInterval(function(){
    if (clicked) {
        clicked = false;
        count += 15;
    }

    var array = document.getElementsByClassName("bounce");
    for (let index = 0; index < array.length; index++) {
        element = array[index];
        
        // maybe not needed?
        array[index].style.position = "absolute";
        
        // console.log("godown:", array[index].dataset.down, "goright:", array[index].dataset.right,
        //     "x:", array[index].dataset.x, "y:", array[index].dataset.y,
        //     "scrolly:", window.scrollY, "winheight:", window.innerHeight, "picheight:",
        //     array[index].height, "all3:", window.scrollY + window.innerHeight - array[index].height);
            
        // keep it in the boundary, and change the direction
        if (array[index].dataset.y < window.scrollY) {
            // console.log("hit top");
            array[index].dataset.y = window.scrollY;
            array[index].dataset.down = true;
        } else if (array[index].dataset.y > window.scrollY + window.innerHeight - array[index].height) {
            // console.log("hit bottom");
            array[index].dataset.y = window.scrollY + window.innerHeight - array[index].height;
            array[index].dataset.down = false;
        }
        if (array[index].dataset.x < window.scrollX) {
            // console.log("hit left");
            array[index].dataset.x = window.scrollX;
            array[index].dataset.right = true;
        } else if (array[index].dataset.x > window.scrollX + window.innerWidth - array[index].width) {
            // console.log("hit right");
            array[index].dataset.x = window.scrollX + window.innerWidth - array[index].width;
            array[index].dataset.right = false;
        }
        
        // increment/decrement
        if (array[index].dataset.right == "true") { // I hate javascript so so so much
            // console.log("going right");
            array[index].dataset.x++;
        } else {
            // console.log("going left");
            array[index].dataset.x--;
        }
        if (array[index].dataset.down == "true") {
            // console.log("going down");
            array[index].dataset.y++;
        } else {
            // console.log("going up");
            array[index].dataset.y--;
        }
        
        // move the element
        array[index].style.left = array[index].dataset.x + "px";
        array[index].style.top = array[index].dataset.y + "px";
    }
}, 5);