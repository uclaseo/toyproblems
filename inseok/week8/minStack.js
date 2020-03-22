/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = null
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === null) {
      this.min = x;
  } else if (x <= this.min) {
      this.min = x;
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const popped = this.stack.pop();
  if (this.stack.length === 0) {
      this.min = null;
      return;
  }
  if (popped === this.min) {
      this.min = this.stack[0];
      for (let i = 0; i < this.stack.length; i += 1) {
          if (this.stack[i] <= this.min) {
              this.min = this.stack[i];
          }
      }
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/