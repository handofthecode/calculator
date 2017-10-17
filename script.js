calculator = {
  registerHandlers: function() {
    this.$num.on('click', this.handleNumber.bind(this));
    this.$op.on('click', this.handleOperator.bind(this));
    this.$equals.on('click',  this.handleCalculate.bind(this));
    this.$ce.on('click', this.handleClearEntry.bind(this));
    this.$c.on('click',  this.handleClearAll.bind(this));
    this.$neg.on('click', this.handleNegative.bind(this));
  },
  handleNegative: function() {
    var number = this.$result.html();
    if (number[0] !== '-') this.$result.html('-' + number);
  },
  handleCalculate: function() {
    this.$result.html(eval(this.$equation.html() + this.$result.html()));
    this.clearEquation();
  },
  handleClearEntry: function() {
    this.$result.html('');
  },
  handleClearAll: function() {
    this.clearEquation();
    this.handleClearEntry('');
  },
  clearEquation: function() {
    this.$equation.html('');
  },
  handleNumber: function(e) {
    var digit = e.target.innerHTML
    if (this.$result.html() === '0') this.$result.html('');
    this.buildNumber(digit)
  },
  handleOperator: function(e) {
    var operator = e.target.innerHTML;
    this.buildEquation(operator);
  },
  buildNumber: function(digit) {
    this.$result.html(this.$result.html() + digit);
  },
  buildEquation: function(operator) {
    var number = this.$result.html();
    var previousEquation = this.$equation.html();
    if (!!number) {
      this.$equation.html(previousEquation + number + ' ' + operator + ' ');
      this.$result.html('');
    }
  },
  init: function() {
    this.$neg = $('#neg');
    this.$ce = $('#ce');
    this.$c = $('#c');
    this.$num = $('.num');
    this.$op = $('.op');
    this.$result = $('#result');
    this.$equation = $('#equation');
    this.$equals = $('#equals');
    this.registerHandlers();
  }
}

calculator.init();