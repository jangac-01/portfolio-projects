var app = {};

app.countdown = function() {
  var countdownDeadline = new Date("2021-08-28T18:00:00+01:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countdownDeadline - now;

    //count individual time units
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = doubleDigit(Math.floor((distance % (1000*60*60)) / (1000*60)));
    var seconds = doubleDigit(Math.floor((distance % (1000*60)) / 1000));


    var transition = document.getElementById("countdown");
    transition.innerText = days + " days " + hours +
    " hours " + minutes + " minutes " + seconds + " seconds";


    if (distance<0) {
      clearInterval(x);
      document.getElementById('countdown').innerText = "OH NO! IT'S OVER. NOW WE'RE LIVING HAPPILY EVER AFTER";
    }
  }, 1000)

  var doubleDigit = function (u) {
    if (u<10) {
      return "0" + u;
    }
    else {
      return u;
    }
  }
}

app.countdown();
