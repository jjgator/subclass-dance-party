$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for ( var i = 0; i < dancers.length; i++) {
      dancers[i].lineUp();    
    }
  });

  // $('.joinButton').on('click', function(event) {

  //   var partnered = [];

  //   var currentDistance;
    
  //   var partnerFinder = function(dancers) {

  //     var closest = {
  //       dancer: null,
  //       distance: null
  //     };

  //     for (var i = 1; i < dancers.length; i++) {
  //       //currentDistance = distance between dancer[0] and dancer[i];
  //       //if (closest.distance is null OR currentDistance is less than closest.distance) {
  //         //closest.distance = currentDistance;
  //         //closest.dancer = dancer[i];
  //       //}
  //     } 
  //     //push dancer[0] and closest.dancer to partnered array
  //     //call 'action' on dancer[0] and closest.dancer
  //     //reset closest.distance = null;

  //     //2nd 'on click' on joinButton...
      
  //     //{//if partnered.length is less than dancers.length, create new array with only dancers not found in partnered array
  //         //recursively call partnerFinder on new array
  //     //}
      
  //     //partnerFinder(dancers);
  //   };     
    
  // });

});

