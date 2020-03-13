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

MovingAverage.prototype.next = function(val) {
  this.queue.push(val);
  let sum = 0;
  for (let i = Math.max(0, this.queue.length - this.size); i < this.queue.length; i += 1) {
      sum += this.queue[i];
  }
  return sum / Math.min(this.size, this.queue.length);
}

MovingAverage.prototype.next = function(val) {
  let popped = 0;
  this.queue.push(val);
  if (this.queue.length > this.size) {
      popped = this.queue.shift();
  }
  this.windowSum += val - popped;
  return this.windowSum / Math.min(this.queue.length, this.size);
}
MovingAverage.prototype.next = function(val) {
  let tail = (this.head + 1) % this.size;
  this.windowSum += val - (this.queue[tail] ? this.queue[tail] : 0);
  this.head = (this.head + 1) % this.size;
  this.queue[this.head] = val;
  return this.windowSum / Math.min(this.queue.length, this.size);
}

/** 
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/