/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

//
// })();
//
// (function(){
//variables
    let oneShot = $("#teamone-numshots");
    let oneShoot = $("#teamone-shoot");
    let oneGoal = $("#teamone-numhits");
    let twoShot = $("#teamtwo-numshots");
    let twoShoot = $("#teamtwo-shoot");
    let twoGoal = $("#teamtwo-numhits");
    let resetCount = $("#num-resets");
    let reset= $("#reset");
    let smack= $('smack');
    let resetNoise= $('resetnoise');

    //Team 1 code
    oneShoot.click(function(){
      oneShot.html(parseInt(oneShot.html())+1)
        let shot1 = (Math.floor(Math.random()*50-1)+1);
        if (shot1> 30) {oneGoal.html(parseInt(oneGoal.html())+1);
        $("body").css('background','red');
        };
    });
    //team 2 variables

    twoShoot.click (function(){
      twoShot.html(parseInt(twoShot.html())+1);
        let shot2 = (Math.floor(Math.random()*50-1)+1);
        if (shot2> 25) {twoGoal.html(parseInt(twoGoal.html())+1)
        $("body").css('background','blue');
        };
    });

    reset.click(function(){
      resetCount.html(parseInt(resetCount.html())+1);
        oneShot.html(0);
        oneGoal.html(0);
        twoShot.html(0);
        twoGoal.html(0);
        $("body").css('background','white');
      });
      
  })

})();
