
/* ...........For triggering when element is not in viewport...............*/

var distance = $('#main').offset().bottom;
$(window).scroll(function() {
    if ($('#main').visible(true)== false){

    console.log("first is not visible");
} else {
    console.log("first is visible");
}
});


/* ...........For triggering only when it is on top...............*/

var distance = $('#main').offset().bottom;
$(window).scroll(function() {
    if ($('#main').visible(true) && $(window).scrollTop() >= distance){

    console.log("third visible working");
} else {
    console.log("third not visible ");
}
});


/* ...........For triggering to check one div visibility top...............*/


$(window).scroll(function() {
    if ($('#main').visible(true)==false && $('#third').visible()==false){

    console.log("second is Complete Visible");
} else {
    console.log("Second is partial or no visible");
}
});

/* ...........To check number of divs present in a div...............*/

         var n = $("#main div").length;
         var g = $("#second").length;
         var f = $("#third").length;
         console.log("n="+n);
         console.log("second="+g);
         console.log("tird"+f);




/*if ($('#main').visible(true)) {
    // The element is visible, do something
    console.log("main visible working");
} else {
    // The element is NOT visible, do something else
    console.log("main not visible working");
}*/

/*//Below code is useful but not using now
       // $('#second:in-viewport').hide("#main").hide("#third");

        var element_position = $("#third").offset().top;
        var scroll_position = $(window).scrollTop();
        var viewport_height = $(window).height();
        if((scroll_position + viewport_height) > element_position){
            console.log("is working");
            $("#second").css("position","fixed");
        }else{
            console.log("else is working");
            $("#second").css("position","relative");
            $("#third").Fade();

        }
//above code is useful but not using*/





$(window).scroll(function() {
    if ($('#main').visible()==false && $('#third').visible(true)==false && $("#fourth").visible(true)){

    console.log("not visible");
    $("#second").hide();
    $("#fifth").css("position","fixed");
    $("#fourth").css("margin-top","100vh");
   
    

} else{
    console.log("else");
    $("#second").show();
    $("#fifth").css("position","static");
    $("#fourth").css("margin-top","100vh");
}
});




Very Nice layout

$(window).scroll(function() {
    if ($('#main').visible(true) == true && $('#third').visible(true)==false){

        //$("#fourth").css("margin-top","100vh");
        console.log("showing");
        $("#fifth").css("display","none");

        } else {

        //$("#fourth").css("margin-top","100vh");
        console.log("not showing");
        $("#fifth").fadeIn(10000);

        }
    });