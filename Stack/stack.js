function Stack() {
  let item = [],
    top = 0;

  this.push = function (element) {
    return item[top++]=element;
  };

  this.pop = function () {
    return item[--top];
  };

  this.peek = function () {
    return item[top - 1];
  };

  this.isEmpty = function () {
    return top === 0;
  };

  this.clear = function () {
    top = 0;
  };
  this.size = function () {
    return top;
  };
}

var stack = new Stack()
stack.push(1)
stack.push(4)
stack.push(5)
stack.push(6)

console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
