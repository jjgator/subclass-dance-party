// Creates and returns a new dancer object that can step
// Refactor to be psuedoclassical
// Capitalization of M, timeBetweenSteps
// var makeDancer = function(top, left, timeBetweenSteps) {
var makeDancer = function(top, left, timeBetweenSteps) {
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step(timeBetweenSteps);
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next 
  //console.log('this.step', this.step);
  // console.log('time between', timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var lineUpSettings = {
    left: 10  
  };
  this.$node.css(lineUpSettings);
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body