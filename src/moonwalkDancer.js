//moonwalkDancer.js

var makeMoonwalkDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, 1000);

  this.$node.addClass('moonwalker');

};


makeMoonwalkDancer.prototype = Object.create(makeDancer.prototype);
makeMoonwalkDancer.prototype.constructor = makeMoonwalkDancer;

makeMoonwalkDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  this.$node.toggleClass('move');
};