console.log('这是content script!');

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {

	var goTopDiv = "<div id='h_go_top'></div>";
	$(document.body).append(goTopDiv);

	// jQuery返回顶部插件
	jQuery.fn.goToTop = function () {

		$('#h_go_top').hide();
		if ($(window).scrollTop() < 0) {
			$('#h_go_top').hide();
		}

		// 窗口滚动时，判断当前窗口滚动距离
		$(window).scroll(function () {
			$('#h_go_top').css({
				'transform': `rotate(${($(this).scrollTop())}deg)`
			});
			$(this).scrollTop() > 1 ? $('#h_go_top').fadeIn() : $('#h_go_top').fadeOut();
		});

		// 给这个按钮绑定一个click事件
		this.bind('click', function () {
			$('html ,body').stop().animate({ scrollTop: 0 }, 500);
			return false;
		});
	};

	//调用这个插件
	$(function () {
		$('#h_go_top').goToTop();
	});

});


