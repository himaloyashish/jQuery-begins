$(document).ready(function(){
    $("button:first").click(function(){
        $("img").before("<b>ok</b>")
    })

    $("button:last").click(function(){
        $("img").after("<b>ok</b>")
    })
})