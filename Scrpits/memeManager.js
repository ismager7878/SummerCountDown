https://www.khanacademy.org/computing/computer-programming/html-csshttps://www.khanacademy.org/computing/computer-programming/html-csshttps://www.khanacademy.org/computing/computer-programming/html-csshttps://www.khanacademy.org/computing/computer-programming/html-csshttps://www.khanacademy.org/computing/computer-programming/html-css
var targetDate = new Date("06/23/2022"); 


var x = self.setInterval(function(){

var currentDate = new Date();
var timeBetween = targetDate.getTime() - currentDate.getTime();
var days = Math.floor(timeBetween / (1000*3600*24));
var hours = Math.floor(timeBetween / (1000*3600)-(days*24))
var minuttes = Math.floor(timeBetween / (1000*60)-(days*24*60 + hours*60))
var seconds = Math.floor(timeBetween / 1000 - (days*24*3600 + hours*3600 + minuttes*60))

var fDays = ("0" + days).slice(-2); 
var fHours = ("0" + hours).slice(-2); 
var fMinuttes = ("0" + minuttes).slice(-2); 
var fSeconds = ("0" + seconds).slice(-2); 

console.log(fDays);
console.log(fHours);
console.log(fMinuttes);
console.log(fSeconds);

document.getElementById("days").innerHTML = fDays + " : " + fHours + " : " + fMinuttes + " : " + fSeconds;
},1000)
