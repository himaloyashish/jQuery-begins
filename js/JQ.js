$(Document).ready(function () {
    $('p').on({
        mouseenter: function () {
            $(this).css("background-color", "green")
        },

        mouseleave: function () {
            $(this).css("background-color", "yellow")
        },
        click: function () {
            $(this).css("background-color", "blue")
        }
    })
})