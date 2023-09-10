const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekday[d.getDay()];

const dayData = (document.querySelector(".dotw").innerHTML = day);

const start = Date.now();

// const now = new Date();

// const year = now.getUTCFullYear();
// const month = now.getUTCMonth() + 1;
// const day1 = now.getUTCDate();
// const hours = now.getUTCHours();
// const minutes = now.getUTCMinutes();
// const seconds = now.getUTCSeconds();
// const milliseconds = now.getUTCMilliseconds();

// console.log(`${year}-${month}-${day} 
//             ${hours}:${minutes}:${seconds}.${milliseconds}`);
const dayData1 = (document.querySelector(".utc").innerHTML = start);




console.log(day);
