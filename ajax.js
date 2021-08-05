$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 600,
    });
});

$(document).ready(function() {
    $("#slider2").bxSlider({
        auto: true,
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 650
    });
});

$(document).ready(function() {
    $("#about").click(function (){
        $("#pager").load("Contact-Ajax.html");
    });

});


$(document).ready(function(){
    $.getJSON("info.json", function (data) {
        $.each(data, function(){
            $.each(this, function (key, value) {
                $('#team').append(
                    "<h2>"+ value.title + "</h2>" +
                    "<p>"+ value.description + "</p>"
                );

            })
        })

    })
});
