$( document ).ready(function() {
  let counter = 0;

  function updateCounter(event){
    counter = $(this).val().length;
    if(counter <= 140){
      $('.counter').css('color','black');
      $('.counter').text(counter);
    } else {
      $('.counter').css('color','red');
      counter = 140 - $(this).val().length;
    }
    $('.counter').text(counter);
  }

  // create eventListeners
  $('.primary-input').on('focus', updateCounter);
  $('.primary-input').on('keyup', updateCounter);

});

