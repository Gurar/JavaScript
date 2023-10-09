/**
 * 1 Display the current day and time in the following format
 * Sample Output: Today is: Tuesday Current time is: 10 PM : 30 : 38;
 */

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const date = new Date();
const day = days[date.getDay() - 1];
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const prepand = hour >= 12 ? "PM" : "AM";
const currentTime = `${hour} ${prepand} ${date.getMinutes()} : ${date.getSeconds()} `;

console.log(`Today is: ${day} `);
console.log(`Current time is:  ${currentTime}`);