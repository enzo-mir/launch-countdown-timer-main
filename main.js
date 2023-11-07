const contHour = document.querySelector("#hourContent span");
const contMinute = document.querySelector("#minuteContent span");
const contDay = document.querySelector("#dayContent span");
const contSecond = document.querySelector("#secondContent span");
let millisInDay = 86400000;

let dateend = new Date("11/10/2023").getTime();
let now = dateend - Date.now();
let day = now / millisInDay;
let hour = (day - Math.floor(day)) * 24;
let minutes = (hour - Math.floor(hour)) * 60;
let seconds = (minutes - Math.floor(minutes)) * 60;
contHour.innerHTML = Math.floor(hour);
contMinute.innerHTML = Math.floor(minutes);
contDay.innerHTML = Math.floor(day);
contSecond.innerHTML = Math.floor(seconds);
function writeSeconde() {
  let now = dateend - Date.now();
  let day = now / millisInDay;
  let hour = (day - Math.floor(day)) * 24;
  let minutes = (hour - Math.floor(hour)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;
  contHour.innerHTML = Math.floor(hour);
  contMinute.innerHTML = Math.floor(minutes);
  contDay.innerHTML = Math.floor(day);
  contSecond.innerHTML = Math.floor(seconds);
}
setInterval(writeSeconde, 1000);
