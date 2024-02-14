/**Date object*/
let date = new Date();
let counter = date.getSeconds();
let minuteCount = date.getMinutes();
let hourCount = date.getHours();

/**DOM id's */
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let seconds = document.getElementById("seconds");
let fullDate = document.getElementById('full-date');
let dateBtn = document.getElementById('show-date')
/**counter */
let counterInterval = setInterval(count, 1000);

/**CLock function */
function count() {
  counter++;
  if (counter >= 60 && counter % 60 == 0) {
    minuteCount++;
    if (minuteCount >= 60 && minuteCount % 60 == 0) {
      hourCount++;
    }
    // let time = `${hourCount}h:${minuteCount}m:${counter}s`;
    // console.log(time);
  }
  minutes.innerHTML = minuteCount;

  hours.innerHTML = hourCount;

  seconds.innerHTML = counter;

  dateBtn.addEventListener("click", () => {
    fullDate.innerHTML = date;
  });
}





