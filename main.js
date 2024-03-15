(function() {
    var elem = document.getElementById('download'), pos = 0,
        timer = setInterval(function() {
            pos++;
            elem.style.left = pos+"px";
            if (pos == 200) clearInterval(timer);
        })
})();