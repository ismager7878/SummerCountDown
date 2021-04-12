
var targetDate = new Date("06/25/2021"); 


var x = self.setInterval(function(){

var currentDate = new Date();
var timeBetween = targetDate.getTime() - currentDate.getTime();
var days = Math.floor(timeBetween / (1000*3600*24));
var hours = Math.floor(timeBetween / (1000*3600)-(days*24))
var minuttes = Math.floor(timeBetween / (1000*60)-(days*24*60 + hours*60))
var seconds = Math.floor(timeBetween / 1000 - (days*24*3600 + hours*3600 + minuttes*60))
console.log(days);
console.log(hours);
console.log(minuttes);
console.log(seconds);
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minuttes").innerHTML = minuttes;
document.getElementById("seconds").innerHTML = seconds;

},1000)
