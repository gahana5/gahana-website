$(document).ready(function() {

    // Add a small effect when navigation links are clicked
    $("nav a").click(function() {

        $("nav a").css("opacity", "1");

        $(this).css("opacity", "0.7");

    });


    // Button hover effect
    $(".button").hover(

        function() {
            $(this).css("transform", "translateY(-2px)");
        },

        function() {
            $(this).css("transform", "translateY(0)");
        }

    );

});