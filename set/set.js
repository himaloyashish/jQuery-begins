$(document).ready(function(){
    $("#btn1").click(function(){
        $("#lorem1").text("Hi")
    })

    $("#btn2").click(function(){
        $("#lorem2").html("<h1>html is set</h1>")
    })

    $("#btn3").click(function(){
        $("#lorem3").val("Please put your name")
    })

    $("#btn4").click(function(){
        $("#link").attr("href", "https://github.com/")
    })
})