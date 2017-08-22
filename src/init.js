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
  // Commented out for commit
  // $('.joinDanceParty').on('click', function(event) {
    
  //   var closestDancer;
  //   for (var i = 0; i < dancers.length; i++) {
  //     dancers[i] 
  //   }

  // });

});

//for first dancer in the array, find the closest dancer
//make those two dancers do something new
//keep track of dancers already called
//for second dancer called, find closest dancer that hasn't been called yet
//make closest dancer do new thing too
//set break to end function when all dancers have been called