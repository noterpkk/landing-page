$("img").attr("draggable","false")
$(".quadrado").css("transform","translate(0px) scale(0.8)").css("opacity","0.8")
        setTimeout(() => {
            $(".quadrado").css("transform","translate(0px) scale(1)").css("opacity","1")
        }, 120);
