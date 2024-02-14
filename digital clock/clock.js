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
    counter = 0;
  }
  minutes.innerHTML = minuteCount;

  hours.innerHTML = hourCount;

  seconds.innerHTML = counter < 10 ? '0' + `${counter}` : counter;

  dateBtn.addEventListener("click", () => {
    let currentDate = new Date();
    fullDate.innerHTML = currentDate;
  });
}





