$(document).ready(function () {

    $("button").click(function () {
        var ashu = $("div")
        ashu.animate({ height:"300px", opacity:"0.4"}, "slow")
        ashu.animate({ width:"300px", opacity:"0.5"}, "slow")
        ashu.animate({ height:"100px", opacity:"0.7"}, "slow")
        ashu.animate({ width:"100px", opacity:"0.9"}, "slow")
    })

}) 