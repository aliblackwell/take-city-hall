$(function(){

  // $('.detail-wrapper article').hide();

  $('.detail-wrapper article').hide();
  $('.detail-wrapper h4').hide();

  $('.circle').on('click', function(){
    var introCopy = $('#sidebar').html();
    var section = $(this).children('a').attr('href');
    var selector = section.split('#')[1]
    var copy = $('.circle.'+selector).clone();
    $('.circle-wrapper').fadeOut('fast');
    $('#sidebar').fadeOut('fast',function(){
      $("#sidebar").html(copy)
      $(section +', #sidebar').fadeIn('fast');
      $('#get-involved').append('<img class="close" src="img/vote-cross.png">');
      initClose(copy, introCopy);
    });

    return false;
  })


  function initClose(copy, introCopy) {
    $('.close').on('click', function(){
      $(this).remove();
      copy.remove();
      $('.circle-wrapper').show();
      $('.detail-wrapper article').hide();
      $('#sidebar').html(introCopy);

    });
  }

  function initFAQs() {
    $("dd").hide();
    $("dt").click(function() {
      $('dt').removeClass('selected');
      $('dd').hide();
      $(this).addClass('selected');
      $(this).next().toggle();
    });
  }

  initFAQs();
});