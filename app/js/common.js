$(function() {

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $("#form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "http://soulmelone.com/blueeasy/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за отзыв!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

  //nav Scroll
  //Animation lib
  jQuery.easing['jswing'] = jQuery.easing['swing'];

  jQuery.extend( jQuery.easing,
  {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
      //alert(jQuery.easing.default);
      return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInOutCubic: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t*t + b;
      return c/2*((t-=2)*t*t + 2) + b;
    },
  });

  //Scroll animate
  $("a[href^='#']").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700, "easeInOutCubic");
    return false;
  });

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // magnific-popup
  $('.gallery').magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    },
		removalDelay: 300,
		mainClass: 'mfp'
  });

	//gallery menu
	$( ".nav--gallery a, .main-nav a" ).click(function( event ) {
    event.preventDefault();
  	$( ".nav--gallery a, .main-nav a" ).each(function(){
  		$(this).removeClass( "active" );
  	})
    $( this )
      .addClass( "active" );
  });

  //mobile nav
  $('#menu').slicknav({
    label: "",
    easingOpen: "easeInOutCubic",
    easingClose: "easeInOutCubic",
    duration: 300,
  });
});
