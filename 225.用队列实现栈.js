/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  var MyQueue = function() {
    this.arr = [];
  };
  MyQueue.prototype.push = function(x) {
    this.arr.push(x);
  };
  MyQueue.prototype.pop = function() {
    return this.arr.splice(0, 1)[0];
  };
  MyQueue.prototype.peek = function() {
    return this.arr[0];
  };
  MyQueue.prototype.empty = function() {
    if (this.arr && this.arr.length > 0) return false;
    return true;
  };
  this.queue1 = new MyQueue();
  this.queue2 = new MyQueue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let last;
  while (!this.queue1.empty()) {
    let elm = this.queue1.pop();
    this.queue2.push(elm);
    if (this.queue1.empty()) {
      last = elm;
    }
  }
  while (!this.queue2.empty()) {
    let elm = this.queue2.pop();
    if (elm === last) continue;
    this.queue1.push(elm);
  }
  return last;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  let last;
  while (!this.queue1.empty()) {
    let elm = this.queue1.pop();
    this.queue2.push(elm);
    if (this.queue1.empty()) {
      last = elm;
    }
  }
  while (!this.queue2.empty()) {
    let elm = this.queue2.pop();
    this.queue1.push(elm);
  }
  return last;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  console.log(this.queue1.arr);

  return this.queue1.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 * ["MyStack","push","pop","empty"]\n[[],[1],[],[]]
 */
