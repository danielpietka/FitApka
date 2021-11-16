var btnScrollUp = $("#btnScrollUp");

$(".nav-links a").on('click', function(e){
    if(this.hash !== ""){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
        800);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        btnScrollUp.addClass("showBtn");
    }else {
        btnScrollUp.removeClass("showBtn");
    }
});

btnScrollUp.on("click", function(e){
    e.preventDefault();
    $("html,body").animate({
        scrollTop: 0
    },
    300);
});