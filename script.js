
(function($){
  var search_button = $('.fa-heart'),
      close_button  = $('.close'),
      input = $('.input');
      form = $('.form-background')
  search_button.on('click',function(){
    $(this).parent().addClass('open');
    close_button.fadeIn(500);
    form.fadeIn(500);
    input.fadeIn(500);
  });
  
  close_button.on('click',function(){
    search_button.parent().removeClass('open');
    close_button.fadeOut(500);
    input.fadeOut(500);
  });
})(jQuery);
