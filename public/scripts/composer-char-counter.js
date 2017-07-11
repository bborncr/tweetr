
$( document ).ready(function() {
  let counter = 0;
  let isFocussed = false;
  console.log('Document is ready...');

  // create eventListeners
  $('.primary-input').on('focus', function(event){
    isFocussed = true;
    $('.counter').text(counter);
  });
  $('.primary-input').on('keyup', function(event){
    if(isFocussed){
      counter = $(this).val().length;
      $('.counter').text(counter);

    }
  });

});

