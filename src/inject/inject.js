chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            //initial speed
            var speed = 1.00;

            //call events on key press
            window.addEventListener("keydown", handleEvent, false);

            //get total time to finish
            currTime = document.getElementsByClassName('out-bottom-small')[0].getElementsByTagName('div')[0].innerHTML.split(' ')[4];

            //Change "Estimated Time..." to inline-block
            document.getElementsByClassName('out-bottom-small')[0].getElementsByTagName('div')[0].style.display = 'inline-block';

            //Change Current Time to Float
            currTime = parseFloat(currTime);

            //Add Current Speed Node
            var currSpeed = document.createElement("span");
            currSpeed.innerHTML = "Current Speed: " + speed;
            currSpeed.className = "speed";
            document.getElementsByClassName('out-bottom-small')[0].appendChild(currSpeed);

            function handleEvent(e) {
                var keyCode = e.keyCode;
                //if key is "-" decrease speed
                if (keyCode == 189) {
                    console.log("Speed Before: " + currTime);
                    //decrease speed
                    speed -= 0.25;
                    currSpeed.innerHTML = "Current Speed: " + speed;
                    
                    //decrease playback rate
                    document.querySelector('video').playbackRate -= 0.25;

                    //change time to finish
                    currTime = (currTime * 5) / 4;
                    currTimeDisplay = Math.ceil(currTime);

                    //update time to finish
                    document.getElementsByClassName('out-bottom-small')[0].getElementsByTagName('div')[0].innerHTML = "Estimated time to complete: " + currTimeDisplay + " mins";
                    console.log("Speed Now: " + currTime);
                }
                //if key is "=" increase speed
                else if (keyCode == 187) {
                    console.log("Speed Before: " + currTime);
                    //increase speed
                    speed += 0.25;
                    currSpeed.innerHTML = "Current Speed: " + speed;

                    //increase playback rate
                    document.querySelector('video').playbackRate += 0.25;

                    //change time to finish
                    currTime = (currTime * 4) / 5;
                    currTimeDisplay = Math.ceil(currTime);

                    //update time to finish
                    document.getElementsByClassName('out-bottom-small')[0].getElementsByTagName('div')[0].innerHTML = "Estimated time to complete: " + currTimeDisplay + " mins";
                    console.log("Speed Now: " + currTime);
                } else {
                    //do nothing
                }
            };
        }
    }, 10);
});
