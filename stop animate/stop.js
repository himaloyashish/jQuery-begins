$(document).ready(function(){
    $(".click").click(function(){
        $(".lorem").slideDown(2000)
    })


    $("button").click(function(){
        $(".lorem").stop()
    })
})