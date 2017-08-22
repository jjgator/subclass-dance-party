//moonwalkDancer.js

var makeMoonwalkDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer moonwalk"></span>');

};


makeMoonwalkDancer.prototype = Object.create(makeDancer.prototype);
makeMoonwalkDancer.prototype.constructor = makeMoonwalkDancer;

makeMoonwalkDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.toggleClass('move');
};