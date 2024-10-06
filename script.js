//your JS code here. If required.
const timerElement = document.getElementById("timer");
 
function update() {
const cd = new Date(); 
const month = cd.getMonth()+1;
const date = cd.getDate(); 
const year = cd.getFullYear(); 
const hour = cd.getHours(); 
const formatHour = hour % 12 || 12; 
const minutes = cd.getMinutes(); 
const seconds = cd.getSeconds();

const ampm = hour >= 12 ? "PM" : "AM";
	
const string =`${month}/${date}/${year}, ${hour}:${minutes}:${seconds} `+ ampm;

timerElement.innerText = string;
}

 setInterval(update, 1000);
