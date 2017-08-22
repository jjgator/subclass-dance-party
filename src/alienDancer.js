var makeAlienDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, 1500);

  this.$node.addClass('alien');

};


makeAlienDancer.prototype = Object.create(makeDancer.prototype);
makeAlienDancer.prototype.constructor = makeAlienDancer;

makeAlienDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  this.$node.toggleClass('move');
};