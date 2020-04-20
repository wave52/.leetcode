/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  var MyStack = function() {
    this.arr = [];
  };
  MyStack.prototype.push = function(x) {
    this.arr.push(x);
  };
  MyStack.prototype.pop = function(x) {
    return this.arr.pop();
  };
  MyStack.prototype.peek = function(x) {
    return this.arr[this.arr.length - 1];
  };
  MyStack.prototype.empty = function(x) {
    if (this.arr && this.arr.length > 0) return false;
    return true;
  };

  this.stack1 = new MyStack();
  this.stack2 = new MyStack();
};

MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
  while (!this.stack1.empty()) {
    let elm = this.stack1.pop();
    this.stack2.push(elm);
  }
  const top = this.stack2.peek();
  while (!this.stack2.empty()) {
    let elm = this.stack2.pop();
    if (elm === top) continue;
    this.stack1.push(elm);
  }
  return top;
};

MyQueue.prototype.peek = function() {
  while (!this.stack1.empty()) {
    let elm = this.stack1.pop();
    this.stack2.push(elm);
  }
  const top = this.stack2.peek();
  while (!this.stack2.empty()) {
    let elm = this.stack2.pop();
    this.stack1.push(elm);
  }
  return top;
};

MyQueue.prototype.empty = function() {
  return this.stack1.empty();
};

// var MyQueue = function() {
//   this.arr = [];
// };
// /**
//  * Push element x to the back of queue.
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//   this.arr.push(x);
// };

// /**
//  * Removes the element from in front of queue and returns that element.
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//   return this.arr.splice(0, 1)[0];
// };

// /**
//  * Get the front element.
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//   return this.arr[0];
// };

// /**
//  * Returns whether the queue is empty.
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//   if (this.arr && this.arr.length > 0) return false;
//   return true;
// };

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
