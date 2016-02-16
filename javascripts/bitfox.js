// Scrollfire effects
function fadeIn(selector) {
  var element = $(selector);
  element.css({opacity: 0});
  $(element).velocity({opacity: 1}, {
    duration: 650,
    queue: false,
    easing: 'swing'
  });
}

function slideIn(selector) {
  var time = 0;
  $(selector).velocity(
    { translateX: "-100px"},
    { duration: 0 }
  );

  $(selector).each(function() {
    $(this).velocity(
      { opacity: "1", translateX: "0"},
      { duration: 800, delay: time, easing: [60, 10] }
    );
    time += 120;
  });
}

// Resize header to cover entire above-fold area
function resizeHeader() {
  $('#header').height($(window).height() - $('nav.main').height());
  $('#header').width($(window).width());
}

$(document).ready(function() {
  resizeHeader();
  $('.scrollspy').scrollSpy();
  Materialize.scrollFire([
    {selector: '.service', offset: 200, callback:'slideIn(".service")' },
    {selector: '.team', offset: 200, callback:'fadeIn(".team")' },
  ]);
  $('select').material_select();
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});

$(window).resize(function() {
  resizeHeader();
});
