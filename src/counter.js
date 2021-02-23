$(document).ready(function () {

    var show = true;
    var countbox = ".outlets__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight(); 
        if (w_top + w_height - 50 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.outlets__number-cafe').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
            $('.outlets__number-food-truck').spincrement({
                thousandSeparator: "",
                duration: 2500
            });

            show = false;
        }
    });

});
