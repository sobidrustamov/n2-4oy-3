let redd = document.querySelector("#circle1");
let yelloww = document.querySelector("#circle2");
let greenn = document.querySelector("#circle3");

function redLight() {
  redd.style.backgroundColor = "red";
  greenn.style.backgroundColor = "#333";
  yelloww.style.backgroundColor = "#333";
}

function yellowLight() {
  yelloww.style.backgroundColor = "yellow";
  greenn.style.backgroundColor = "#333";
  redd.style.backgroundColor = "#333";
}

function greenLight() {
  greenn.style.backgroundColor = "lime";
  redd.style.backgroundColor = "#333";
  yelloww.style.backgroundColor = "#333";
}

const wait = (time) => new Promise((res) => setTimeout(res, time));

function tl() {
  redLight();
  wait(5000)
    .then(() => {
      yellowLight();
      return wait(2000);
    })
    .then(() => {
      greenLight();
      return wait(5000);
    })
    .then(() => {
      yellowLight();
      return wait(2000);
    })
    .then(() => {
      redLight();
    });
}

tl();
setInterval(tl, 14_000);
