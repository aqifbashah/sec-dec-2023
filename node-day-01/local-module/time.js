const todayDate = new Date();
const thisMonth = todayDate.getMonth() + 1;
const thisDay = todayDate.getDate();
const thisTime = todayDate.getTime();
const formatedTime = todayDate.toLocaleTimeString();
const thisYear = todayDate.getFullYear();

console.log("time.js is loaded");

const time = {
  time: thisTime,
  formatedTime: formatedTime,
  today: todayDate,
  month: thisMonth,
  day: thisDay,
  year: thisYear,
};

module.exports = time;
