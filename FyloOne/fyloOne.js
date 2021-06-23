var setUp = function() {
    //Node Attachments
    var hue = document.getElementById("front");
    var sat = document.getElementById("middle");
    var light = document.getElementById("back");
    var con = document.getElementById("container");
    var used = document.getElementById("used");
    var leftover = document.getElementById("remains");
    var ball = document.getElementById("ball");
    var track = document.getElementById("track");

    function Bamer() {
        location.assign("Storage/documents.html");
    }
    function Tamer() {
        location.assign("Storage/folders.html");
    }
    function Famer() {
        location.assign("Storage/uploads.html");
    }


    var list = [];
    function range(start, end) {
        var pos = 0;
        for (var i = start; i <= end; i++) {
            list[pos]  = i;
            pos += 1;
        }
        console.log(...list);
    }
    range(1, 100);
    var jungle = Math.floor(Math.random() * list.length);

    function Used() {
        if (list[jungle] == 100) {
            used.innerHTML = `${list[jungle]}GB`; 
            leftover.innerHTML = `0${100 - list[jungle]}`;
        }

        else {
            used.innerHTML = `0${list[jungle]}GB`;
            leftover.innerHTML = `0${100 - list[jungle]}`;
        }

  
    }
    Used();


    if (window.innerWidth > 900) {
        function Track() {
            if (list[jungle] < 10) {
                track.style.width = "16px";
                ball.style.marginLeft = "0px";
            }
            else if (list[jungle] >= 10 && list[jungle] < 20) {
                track.style.width = "50px";
                ball.style.marginLeft = "34px";
            }
            else if (list[jungle] >= 20 && list[jungle] < 30) {
                track.style.width = "100px";
                ball.style.marginLeft = "84px";
            }
            else if (list[jungle] >= 30 && list[jungle] < 40) {
                track.style.width = "150px";
                ball.style.marginLeft = "134px";
            }
            else if (list[jungle] >= 40 && list[jungle] < 50) {
                track.style.width = "200px";
                ball.style.marginLeft = "184px";
            }
            else if (list[jungle] >= 50 && list[jungle] < 60) {
                track.style.width = "250px";
                ball.style.marginLeft = "234px";
            }
            else if (list[jungle] >= 60 && list[jungle] < 70) {
                track.style.width = "300px";
                ball.style.marginLeft = "284px";
            }
            else if (list[jungle] >= 70 && list[jungle] < 80) {
                track.style.width = "350px";
                ball.style.marginLeft = "334px";
            }
            else if (list[jungle] >= 80 && list[jungle] < 90) {
                track.style.width = "400px";
                ball.style.marginLeft = "384px";
            }
            else if (list[jungle] >= 90 && list[jungle] < 100) {
                track.style.width = "450px";
                ball.style.marginLeft = "434px";
            }
            else if (list[jungle] == 100) {
                track.style.width = "499px";
                ball.style.marginLeft = "483px";
            }
        }
        Track();
    }


    else {
        function Track_2() {
            if (list[jungle] < 10) {
                track.style.width = "16px";
                ball.style.marginLeft = "0px";
            }
            else if (list[jungle] >= 10 && list[jungle] < 20) {
                track.style.width = "27px";
                ball.style.marginLeft = "11px";
            }
            else if (list[jungle] >= 20 && list[jungle] < 30) {
                track.style.width = "54px";
                ball.style.marginLeft = "38px";
            }
            else if (list[jungle] >= 30 && list[jungle] < 40) {
                track.style.width = "81px";
                ball.style.marginLeft = "65px";
            }
            else if (list[jungle] >= 40 && list[jungle] < 50) {
                track.style.width = "108px";
                ball.style.marginLeft = "92px";
            }
            else if (list[jungle] >= 50 && list[jungle] < 60) {
                track.style.width = "135px";
                ball.style.marginLeft = "119px";
            }
            else if (list[jungle] >= 60 && list[jungle] < 70) {
                track.style.width = "162px";
                ball.style.marginLeft = "146px";
            }
            else if (list[jungle] >= 70 && list[jungle] < 80) {
                track.style.width = "189px";
                ball.style.marginLeft = "173px";
            }
            else if (list[jungle] >= 80 && list[jungle] < 90) {
                track.style.width = "216px";
                ball.style.marginLeft = "200px";
            }
            else if (list[jungle] >= 90 && list[jungle] < 100) {
                track.style.width = "243px";
                ball.style.marginLeft = "227px";
            }
            else if (list[jungle] == 100) {
                track.style.width = "269px";
                ball.style.marginLeft = "253px";
            }

        }
        Track_2();
    }



    //Front Events
    hue.onmousedown = function() {
        hue.style.width = "47px";
        hue.style.height = "47px";
    }
    hue.onmouseup = function() {
        hue.style.width = "50px";
        hue.style.height = "50px";
    }
    hue.onclick = function() {
        setTimeout(Bamer, 1000);
    }

    //Middle Events
    sat.onmousedown = function() {
        sat.style.width = "47px";
        sat.style.height = "47px";
    }
    sat.onmouseup = function() {
        sat.style.width = "50px";
        sat.style.height = "50px";
    }
    sat.onclick = function() {
        setTimeout(Tamer, 1000);
    }

    //Back Events
    light.onmousedown = function() {
        light.style.width = "47px";
        light.style.height = "47px";
    }
    light.onmouseup = function() {
        light.style.width = "50px";
        light.style.height = "50px";
    }
    light.onclick = function() {
        setTimeout(Famer, 1000);
    }

    //Mobile to Desktop
    if (window.innerWidth > 800) {
        var swirl = document.createElement("img");
        con.append(swirl);

        swirl.setAttribute("src", "images/bg-desktop.png");
        swirl.setAttribute("style", "margin-top: 380px");
    }
    

   
}


window.onload = function() {
    setUp();
}