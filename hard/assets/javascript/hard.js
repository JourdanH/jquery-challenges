/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){
    //  * 1. Any time someone clicks on the title at the top "feed template,"
    //  *    make the color of the "feed template" text change from black to red
    //  *    and then from red to black when clicked again.
      let title = $("div").children("h1");

      title.click(function(){
        if ($(this).css('color') != 'rgb(255, 0, 0)') {
          $(this).css('color', 'red');
        }
        else {
          $(this).css('color', 'black');
        }

      })

      // * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
      // *    hide every odd-numbered link in the menu.

      let listLinks = $(".title:even");

      listLinks.hide();

    // 3. Change every instance of the word "bacon" on the page to be "LASER VISION"

    // $('.large-10.columns p').each(function() {
    //     var text = $(this).text();
    //     text = text.replace("Bacon", "LASER VISION");
    //     $(this).text(text);
    //   });

    $('.large-10.columns p').html($("p").html().replace("Bacon", "LASER VISION"));
    //  Delete the last two posts in the middle section (they have a CSS class "post"
    let deletePost = $(".post:nth-last-child(1)")
    let deletePost2 =$(".post:nth-last-child(2)")


      deletePost.hide();
      deletePost2.hide();
      console.log(deletePost2)
      console.log(deletePost)
// Remove the images in the right column

  $('aside img').hide();
  });

 })();
