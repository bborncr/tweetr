$( document ).ready(function() {
  let counter = 0;

  function updateCounter(event){
    counter = $(this).val().length;
    let el = $(this).closest('.new-tweet').find('.counter');
    if(counter <= 140){
      el.css('color','black');
      el.text(140 - counter);
    } else {
      el.css('color','red');
      counter = 140 - $(this).val().length;
      el.text(counter);
    }
  }

  // create eventListeners
  $('.primary-input').on('focus', updateCounter);
  $('.primary-input').on('keyup', updateCounter);

});

