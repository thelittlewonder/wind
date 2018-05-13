chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            var speed = 1.00;
            window.addEventListener("keydown", handleEvent, false);

            function handleEvent(e) {
                var keyCode = e.keyCode;
                if (keyCode == 189) {
                    document.querySelector('video').playbackRate-=0.25;
                    //alert("Decrease");
                } else if (keyCode == 187) {
                    document.querySelector('video').playbackRate+=0.25;
                    //alert("Increase");
                } else {
                    //do nothing
                }
            };
        }
    }, 10);
});
