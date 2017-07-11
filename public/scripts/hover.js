$( document ).ready(function() {

  function noHover(){
    let hoverAttributes = {
      color: '#bebebe'
    }
    $('.tweet *').css(hoverAttributes);
  }

  function activeHover(){
    let hoverAttributes = {
      color: 'black'
    }
    $('.tweet *').css(hoverAttributes);
  }

  $('.tweet').on('mouseover', activeHover);
  $('.tweet').on('mouseout', noHover);
});