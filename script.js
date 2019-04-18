function readTime() {
  var rounds = document.getElementById("rounds").value;
  var work_time = document.getElementById("work_time").value;
  var rest_time = document.getElementById("rest_time").value;
  function myson() {
    if (work_time > 5) {
      document.getElementById("round_time").innerHTML =
        "Workout timing : " + work_time;
      work_time--;
    } else if (work_time == 5) {
      document.getElementById("round_time").innerHTML =
        "COME ON!! " + work_time;
      work_time--;
      var oAudio = document.getElementById("myaudio");
      oAudio.src = "work.ogg";
      oAudio.play();
    } else if (work_time > 0) {
      document.getElementById("round_time").innerHTML =
        "COME ON!! " + work_time;
      work_time--;
    } else if (rest_time > 3) {
      document.getElementById("round_time").innerHTML =
        "Rest timing: " + rest_time;
      rest_time--;
          } 
     else if (rest_time > 0) {
      document.getElementById("round_time").innerHTML =
        "Rest timing: " + rest_time;
      rest_time--;
      var oAudio = document.getElementById("myaudio");
      oAudio.src = "rest.ogg";
      oAudio.play();
          } 
      else {
      work_time = document.getElementById("work_time").value;
      rest_time = document.getElementById("rest_time").value;
      rounds--;
    }
  }
  function countdown() {
    if (rounds > 0) {
      myson();
      // document.getElementById("round_time").innerHTML = "Round " + rounds;
    } else {
      document.getElementById("round_time").innerHTML =
        "workout compeleted.";
    }
  }
  function toBottom(){
    window.scrollTo(0,document.body.scrollHeight);return false;
  }
  toBottom();
  var x = setInterval(countdown, 1000);
  clearInterval(x);
  x = setInterval(countdown, 1000);
}