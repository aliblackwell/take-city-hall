$(function(){

  // $('.detail-wrapper article').hide();

  $('.detail-wrapper article').hide();
  $('.detail-wrapper h4').hide();

  $('.circle').on('click', function(){
    var section = $(this).children('a').attr('href');
    var selector = section.split('#')[1]
    var circle = $('.circle.'+selector).clone();
    var blurb = $(section).html();
    console.log(blurb)
    $('body').append('<div class="lightbox"></div>');

    $('.lightbox').hide().append(circle).append('<div class="blurb-wrap"></div>');
    $('.blurb-wrap').append(blurb);
    $('.lightbox').append('<img class="close" src="img/vote-cross.png">');
    $('.lightbox').fadeIn('fast');

    $('body').css('overflow-y','hidden');
    initClose()


    // $('.circle-wrapper').fadeOut('fast');
    // $('#sidebar').fadeOut('fast',function(){
    //   $("#sidebar").html(copy)
    //   $(section +', #sidebar').fadeIn('fast');
    //   $('#get-involved').append('<img class="close" src="img/vote-cross.png">');
    //   initClose(copy, introCopy);
    // });

    return false;
  })


  function initClose() {
    $('.close').on('click', function(){
      $(this).remove();
      $('.lightbox').remove();
      $('.circle-wrapper').show();
      $('.detail-wrapper article').hide();
      $('body').css('overflow-y','auto');
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