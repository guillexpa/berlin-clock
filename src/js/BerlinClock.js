var BerlinClock = { 
    tick: function(){
        var time = new Date(),
            second = time.getSeconds();
            hour = time.getHours();
            minute = time.getMinutes();

        BerlinClock.reset();
        BerlinClock.updateSeconds(second);
        BerlinClock.updateHours(hour);
        BerlinClock.updateMinutes(minute);
        BerlinClock.updateClock(hour, minute, second)
        
    },
    updateSeconds: function(second){
        var secondsDiv = document.getElementById("seconds").children[0];

        if (second % 2 == 0){
            secondsDiv.classList.add("yellow");
        }
     },
    updateHours: function(hour){
        var hoursOfFiveDiv = document.getElementById("hoursOfFive");
        var hoursOfOneDiv = document.getElementById("hoursOfOne");

        for (var i = 0; i <= hour / 5 -1 ; i++) {
            hoursOfFiveDiv.children[i].classList.add("red");
        };

        for (var i = 0; i <= hour % 5 -1 ; i++) {
            hoursOfOneDiv.children[i].classList.add("red");
        };

    },
    updateMinutes: function(minute){
        var minutesOfFiveDiv = document.getElementById("minutesOfFive");
        var minutesOfOneDiv = document.getElementById("minutesOfOne");

        for (var i = 0; i <= minute / 5 -1 ; i++) {
            if ((i+1) % 3 == 0){
                minutesOfFiveDiv.children[i].classList.add("red");
            }else{
                minutesOfFiveDiv.children[i].classList.add("yellow");
            }  
        };

        for (var i = 0; i < minute % 5 ; i++) {
            minutesOfOneDiv.children[i].classList.add("yellow");
        };

    },
    updateClock: function(hour, minute, second){
            time = hour+'h '+minute+'m '+second+'s'
            $('#clock').html(time)
    },
    reset: function(){
        var clock = document.getElementById("berlinClock")

        for (var i = 0; i < clock.children.length; i++) {    
            for (var j = 0; j < clock.children[i].children.length; j++) {
                clock.children[i].children[j].classList.remove("yellow");
                clock.children[i].children[j].classList.remove("red");
            }
        };


    }
}
