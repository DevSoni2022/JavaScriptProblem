const calculator = {
  total: 0,

  add: function (val) {
    this.total = this.total + val;
    return this;
  },

  sub: function (val) {
    this.total = this.total - val;
    return this;
  },

  mul: function (val) {
    this.total = this.total * val;
    return this;
  },

  div: function (val) {
    this.total = this.total / val;
    return this;
  },
};
console.log(calculator.add(20).mul(20).div(100).total)