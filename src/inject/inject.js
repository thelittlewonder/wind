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
            currSpeed.innerHTML = "Playback Speed: " + speed;
            currSpeed.className = "speed";
            document.getElementsByClassName('out-bottom-small')[0].appendChild(currSpeed);

            function handleEvent(e) {
                var keyCode = e.keyCode;
                //if key is "-" decrease speed
                if (keyCode == 189 || keyCode == 109) {
                    //decrease speed
                    speed -= 0.25;
                    
                    //update Speed
                    currSpeed.innerHTML = "Playback Speed: " + speed;
                    
                    //decrease playback rate
                    document.querySelector('video').playbackRate -= 0.25;

                    //change time to finish
                    currTime = (currTime * 5) / 4;
                    currTimeDisplay = Math.ceil(currTime);

                    //update time to finish
                    document.getElementsByClassName('out-bottom-small')[0].getElementsByTagName('div')[0].innerHTML = "Estimated time to complete: " + currTimeDisplay + " mins";
                }
                //if key is "=" increase speed
                else if (keyCode == 187 || keyCode == 107) {
                    //increase speed
                    speed += 0.25;
                    
                    //update Speed
                    currSpeed.innerHTML = "Playback Speed: " + speed;

                    //increase playback rate
                    document.querySelector('video').playbackRate += 0.25;

                    //change time to finish
                    currTime = (currTime * 4) / 5;
                    currTimeDisplay = Math.ceil(currTime);

                    //update time to finish
                    document.getElementsByClassName('out-bottom-small')[0].getElementsByTagName('div')[0].innerHTML = "Estimated time to complete: " + currTimeDisplay + " mins";
                } else {
                    //do nothing
                }
            };
        }
    }, 10);
});
