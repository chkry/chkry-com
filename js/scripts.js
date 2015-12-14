   $(document).ready(function() {
       $("#dream").fadeIn(1400);
       $("#design").fadeIn(2200);
       $("#develop").fadeIn(2800);
       $("#descri").fadeIn(1000);
       $("#social").fadeIn(1000);

//Srolling to division functions.........................................
       $("#logo").click(function() {
           $('html, body').animate({
               scrollTop: $("#third").offset().top
           }, 3000);
       });

       $("#descri").click(function() {
           $('html, body').animate({
               scrollTop: $("#fourth").offset().top
           }, 6000);
       });

              $("#social").click(function() {
           $('html, body').animate({
               scrollTop: $("#fourth").offset().top
           }, 3000);
       });




//Srolling to division functions.........................................
       var n = $("#main div").length;
       var g = $("#second").length;
       var f = $("#third").length;
       console.log("n=" + n);
       console.log("second=" + g);
       console.log("tird" + f);



       $(window).scroll(function() {
           if ($('#second').visible(true) && $('#third').visible(true) && $("#fourth").visible(true) == false) {

               $("#fifth").css("display", "none");

           }
       });

       $(window).scroll(function() {
           if ($('#main').visible(true) == true && $('#third').visible(true) == false) {

               //$("#fourth").css("margin-top","100vh");
               console.log("showing");
               $("#fifth").css("display", "none");

           } else {

               //$("#fourth").css("margin-top","100vh");
               console.log("not showing");
               if ($('#third').visible(true) && $('#fourth').visible(true)) {
                   /*$("#fifth").fadeIn();*/
                   $("#fifth").show();
               }

           }
       });



       /* Sixth division visibility scrolling */

      $(window).scroll(function() {
           if ($('#main').visible(true) == true && $('#third').visible(true) == false) {
               console.log("chakri showing");
               $("#sixth").css("display", "none");
           } else {
               console.log("chakri not showing");
               if ($('#third').visible()==false && $('#fourth').visible(true) && $('#fifth').visible(true)) {
                   $("#sixth").show();
                   if($('#third').visible(true)){
                     $("#sixth").css("display", "none");
                   }
               }

           }
       });

/*       $(window).scroll(function() {
           if ($('#fourth').visible(true) && $('#fifth').visible(true) && $("#third").visible(true) == false) {

               $("#sixth").show().slideDown(4000);

               console.log("normal is going on");

           } else {
             // $("#sixth").slideUp(4000);
               $("#sixth").hide().css("display", "none");
                console.log("else is going on");
           }
       });*/



   });
