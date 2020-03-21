$(document).ready(function() {
    // include html files
    $("#footer").load("/includes/footer.html");
    $("#main-body").load("/includes/main-body.html");
    $("#left_nav").load("/includes/left_nav.html");
    $("#right_nav").load("/includes/right_nav.html");
    $("#momo-body").load("/includes/momo-body.html");
    $(".monster").fadeIn("slow");

    // //HIDE-DIV - OPEN DIV - TOGGLER
    // $(".event_toggle").click(function() {
    //     $(".hide_div").fadeToggle(750);
    // });

    /* Scroll-Hideme-Appear */
    $(window).scroll(function() {
        /* Check the location of each desired element */
        $(".hideme").each(function(i) {
            var bottom_of_object =
                $(this).position().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ opacity: "1" }, 1500);
            }
        });
    });
});
