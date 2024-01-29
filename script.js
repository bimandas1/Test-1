// Search space
$(".search-space").hide();
$(".search").click(function() {
    $(".search-space").slideToggle()
})

// 2nd section (position: fixed)
var firstHeight = $(".first-main").height();  // returns only the value in pixel
var second_bgc = $(".second").css("background-color");

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= firstHeight){
        $(".second").css({
            "background-color": "var(--blue2)",
            "position": "fixed",
            "top": "0px"
        })
    }
    else {
        $(".second").css({
            "backgroundColor": second_bgc,
            "position": "absolute",
            "top": firstHeight.toString() + "px"
        })
    }
})