// При появі блоку знизу

// $(document).ready(function() {
// 	var windowHeight = $(window).height();
 
// 	$(document).on('scroll', function() {
// 		$('.gallery-images').each(function() {
// 			var self = $(this),
// 			height = self.offset().top + self.height();
// 			if ($(document).scrollTop() + windowHeight >= height) {
// 				self.addClass('rectangle-hover')
// 			}
// 		});
// 	});
// });


$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.point').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$('.gallery-images').addClass('rectangle-hover')
			}
		});
	});
});

//  var show = true;
//     var countbox = ".benefits__inner";
//     $(window).on("scroll load resize", function () {
//         if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
//         var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
//         var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
//         var w_height = $(window).height(); // Высота окна браузера
//         var d_height = $(document).height(); // Высота всего документа
//         var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//         if (w_top + w_height - 50 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
//             $('.benefits__number').css('opacity', '1');
//             $('.benefits__number-udder').spincrement({
//                 thousandSeparator: "",
//                 duration: 1200
//             });
//              $('.benefits__number-apple').spincrement({
//                 thousandSeparator: "",
//                 duration: 2800
//             });
//             $('.benefits__number-heart').spincrement({
//                 thousandSeparator: "",
//                 duration: 2500
//             });

//             show = false;
//         }
//     });

// });