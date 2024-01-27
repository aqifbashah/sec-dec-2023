const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const time = {
  hours,
  minutes,
  seconds,
  year,
  month,
  day,
};

// module.exports = time;
export default time;
