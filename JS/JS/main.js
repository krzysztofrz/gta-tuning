// loader
// $(window).on('load', function () {
//     setTimeout(function () {
//         $("#cover").hide()
//     }, 800)
// });


$(window).on('load', function () {
    setTimeout(function () {
        $("#cover").hide();
        $("#loading-image").hide();
    }, 700)
});




$(".startM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".pseudoNav").offset().top
    })
})





$(".serwises").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".serwis").offset().top - $("header").height() + 1
    })
})

$(".pro").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".gallery").offset().top - $("header").height()
    })
})

$(".teams").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".team").offset().top - $("header").height()
    })
})

$(".contacts").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".contact").offset().top - $("header").height()
    })
})




// desktop
$(".offerD").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".serwis").offset().top + $("header").height() - 180
    })
})

$(".projectsD").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".gallery").offset().top - $("header").height()
    })
})

$(".teamD").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".team").offset().top - $("header").height()
    })
})

$(".contactD").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".contact").offset().top - $("header").height()
    })
})





function myFunctionX(x) {
    x.classList.toggle("change");
}





$(".container").on("click", function () {
    $(".menu").toggleClass("off");
})

$(".startM").on("click", function () {
    $(".menu").removeClass("contanier");
})

$(".startM").on("click", function () {
    $(".container").removeClass("change");
})

$(".startM").on("click", function () {
    $(".menu").addClass("off");
})



$(".serwises").on("click", function () {
    $(".menu").addClass("off");
})

$(".serwises").on("click", function () {
    $(".container").removeClass("change");
})




$(".pro").on("click", function () {
    $(".menu").addClass("off");
})

$(".pro").on("click", function () {
    $(".container").removeClass("change");
})




$(".teams").on("click", function () {
    $(".menu").addClass("off");
})

$(".teams").on("click", function () {
    $(".container").removeClass("change");
})





$(".contacts").on("click", function () {
    $(".menu").addClass("off");
})

$(".contacts").on("click", function () {
    $(".container").removeClass("change");
})






window.onscroll = function () {
    myFunctionBAR()
};

function myFunctionBAR() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 103;
    document.getElementById("myBar").style.width = scrolled + "%";
}