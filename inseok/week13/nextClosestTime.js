/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const map = {};
  map[time[0]] = true;
  map[time[1]] = true;
  map[time[3]] = true;
  map[time[4]] = true;
  let found = false;
  const toMinutes = (t) => {
      const hours = Number(t.slice(0, 2));
      const minutes = Number(t.slice(3));
      return hours * 60 + minutes;
  }
  const toTime = (t) => {
      let hours = Math.floor(t / 60);
      let minutes = t % 60;
      if (hours < 10) {
          hours = `0${hours}`;
      }
      if (minutes < 10) {
          minutes = `0${minutes}`;
      }
      return `${hours}:${minutes}`;
  }
  let minutes = toMinutes(time);
  while (!found) {
      minutes += 1;
      if (minutes === 1440) minutes = 0;
      const nextTime = toTime(minutes);
      console.log('nextTime', nextTime);
      if (map[nextTime[0]] && map[nextTime[1]] && map[nextTime[3]] && map[nextTime[4]]) {
          found = true;
      }
  }
  return toTime(minutes);
};

