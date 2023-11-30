const secondHand = document.querySelector(".hand");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function clock() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondsDegrees = date.getSeconds() / 60;
  const minsDegrees = (secondsDegrees + date.getMinutes()) / 60;
  const hourDegrees = (minsDegrees + date.getHours()) / 12;

  // console.log(secondsDegrees, minsDegrees, hourDegrees);

  secondHand.style.transform = `translate(-50%) rotate(${
    secondsDegrees * 360
  }deg)`;
  minuteHand.style.transform = `translate(-50%) rotate(${
    minsDegrees * 360
  }deg)`;
  hourHand.style.transform = `translate(-50%) rotate(${hourDegrees * 360}deg)`;
}
setInterval(clock, 1000);
clock();

/****************
 * FORMULA-1*
 ****************/
// const secondsDegrees = date.getSeconds() / 60;
// const minsDegrees = (secondsDegrees + date.getMinutes()) / 60;
// const hourDegrees = (minsDegrees + date.getHours()) / 12;
// secondHand.style.transform = `translate(-50%) rotate(${secondsDegrees * 360}deg)`;
// minuteHand.style.transform = `translate(-50%) rotate(${ minsDegrees * 360}deg)`;
// hourHand.style.transform = `translate(-50%) rotate(${hourDegrees * 360}deg)`;

/****************
 * FORMULA-2 *
 ****************/
// const date = new Date();
// const seconds = date.getSeconds();
// const minutes = date.getMinutes();
// const hours = date.getHours();

//   const secondsDegrees = (seconds / 60) * 360 + 90;
//   const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
//   const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

/****************
 * FORMULA-3 *
 ****************/
// const date = new Date();
// const seconds = date.getSeconds();
// const minutes = date.getMinutes();
// const hours = date.getHours();

//   const secondsDegrees = 6 * seconds;
//   const minsDegrees = 6 * minutes;
//   const hourDegrees = 30 * hours + minutes / 2;
