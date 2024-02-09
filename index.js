let [milliseconds, seconds, miuntes, hours] = [0, 0, 0, 0];
let timeref = document.querySelector(".timer-display");
let int = null;
document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displaytimer, 10);
});
document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});
document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, miuntes, hours] = [0, 0, 0, 0];
  timeref.innerText = " 00 : 00 : 00 : 000 ";
});

function displaytimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      miuntes++;
      if (miuntes == 60) {
        miuntes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = miuntes < 10 ? "0" + miuntes : miuntes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timeref.innerText = `${h} : ${m} : ${s} : ${ms}`;
}
