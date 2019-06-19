$(document).ready(function () {
  $('.modal').modal();
});
var functions = {
  TimeCalculate: function (totalMins, maxGrowth, minGrowth, curGrowth, totaltimeLeft) {
    var remainingTime, seconds;
    remainingTime = (totalMins / (maxGrowth - minGrowth) * (maxGrowth - curGrowth));
    seconds = remainingTime % 1;
    remainingTime -= seconds;
    seconds = seconds * 60;
    seconds = Math.floor(Math.pow(10, 1) * seconds) / Math.pow(10, 1);
    const values = {
      "remainingTime": remainingTime,
      "seconds": seconds
    }
    return values
  }
}