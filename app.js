$(document).ready(function () {
    //$("p").click(function(){
    //    $(this).hide();
    //})

    //$("p").dblclick(function(){
    //   $(this).hide();
    //})

    //$("p").mouseenter(function(){
    //   $(this).hide();
    //})

    //$("p").mouseleave(function(){
    //    $(this).hide();
    //})

    //$("p").mousedown(function(){
    //    $(this).hide();
    //})

    //$("p").mouseup(function(){
    //    $(this).hide();
    //})

    $("p").hover(function(){
        $(this).hide();
    },function(){
        $(this).show();
    });
});

