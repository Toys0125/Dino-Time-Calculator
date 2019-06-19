$(document).ready(function () {
  $('.modal').modal();
  $('select').formSelect();
});

var functions = {
  TimeCalculate: function (totalMins, maxGrowth, minGrowth, curGrowth, totaltimeLeft) {
    curGrowth = this.PushUp(curGrowth)
    var remainingTime, seconds;
    remainingTime = (totalMins / (maxGrowth - minGrowth) * (maxGrowth - curGrowth));
    seconds = remainingTime % 1;
    remainingTime -= seconds;
    seconds = seconds * 60;
    seconds = Math.floor(Math.pow(10, 1) * seconds) / Math.pow(10, 1);
    const values = {
      "remainingTime": remainingTime,
      "seconds": seconds,
      "totaltime": (remainingTime+totaltimeLeft)
    };
    return values;
  },
  
  PushUp: function (input) {
    while (input / 100 < 1) {
      input = input * 10;
    }
    return input
  }
}