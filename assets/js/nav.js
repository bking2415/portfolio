/*
	https://jsfiddle.net/cse_tushar/Dxtyu/141/
*/

$(document).ready(function() {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  	var scrollPos = $(document).scrollTop();
	if(scroll_pos > 48) {
		$("#scrollHeader h1 a").css("font-weight", "900");
	} else {
  		$("#scrollHeader h1 a").css("font-weight", "normal");
        }
  	$('#scrollHeader nav a').each(function() {
    	var currLink = $(this);
    	var refElement = $(currLink.attr("href"));
    	if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//      		$("#scrollHeader h1 a").css("font-weight", "900");
		$('#scrollHeader nav ul li a').removeClass("active");
      		currLink.addClass("active");
    	} else {
      		currLink.removeClass("active");
    	}
  });
}
