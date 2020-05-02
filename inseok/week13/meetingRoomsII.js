/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const sorted = intervals.sort((a, b) => {
      return a[0] - b[0];
  });
  const rooms = [];
  for (let i = 0; i < intervals.length; i += 1) {
      if (rooms.length === 0) {
          rooms.push(intervals[i]);
      } else {
          let foundRoom = false;
          for (let j = 0; j < rooms.length; j += 1) {
              if (rooms[j][1] <= intervals[i][0] && !foundRoom) {
                  rooms[j] = intervals[i];
                  foundRoom = true;
              }
          }
          if (!foundRoom) {
              rooms.push(intervals[i]);
          }
      }
  }
  return rooms.length;
};