   $(document).ready(function() {
       $("#dream").fadeIn(1400);
       $("#design").fadeIn(2200);
       $("#develop").fadeIn(2800);
       $("#descri").fadeIn(1000);
       $("#social").fadeIn(1000);


       $("#logo").click(function() {
           $('html, body').animate({
               scrollTop: $("#third").offset().top
           }, 3000);
       });


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



   });
