/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.window = [];
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.window.push(val);
  if (this.window.length <= this.size) {
      return this.window.reduce((acc, val) => {
          return acc += val;
      }, 0) / this.window.length;
  } else {
      let sum = 0;
      for (let i = this.window.length - 1; i > this.window.length - 1 - this.size; i -= 1) {
          sum += this.window[i];
      }
      return sum / this.size;
  }
};

/** 
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/