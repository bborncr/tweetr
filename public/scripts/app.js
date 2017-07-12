// cleans up possible XSS strings
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet) {

  var date = new Date(tweet.created_at);

  var $header = $("<header>").addClass('tweet-header');
  $header.append($(`<img src="${tweet.user.avatars.small}"/>`));
  $header.append($(`<h1>${tweet.user.name}</h1>`));
  $header.append($(`<h2>${tweet.user.handle}</h2>`));

  var $body = $("<p>").addClass('tweet-text');

  $body.append(`${escape(tweet.content.text)}`);

  var $footer = $("<footer>").addClass('tweet-footer');
  $footer.append($(`<p>${date}</p>`));

  // final asssembly
  var $tweet = $('<article>').addClass('tweet');
  $tweet.append($header);
  $tweet.append($body);
  $tweet.append($footer);

  return $tweet;
}

function loadTweets(){
  $.getJSON('/tweets')
    .done((tweets) => {
      //console.log(tweets);
    })
    .done((tweets) => {
      renderTweets(tweets);
    })
}

function renderTweets(tweets) {
  $('#tweets-container').empty();
  for (tweet in tweets){
    var tweetData = tweets[tweet];
    // console.log(tweetData);
    var $tweet = createTweetElement(tweetData);
    $('#tweets-container').prepend($tweet);
  }
}

// Better to put the Document Ready wrap down here...less easy to screw things up
$( document ).ready(function(){

  // Compose button event listener
  $('.compose-button').on('click', function(event){
    $('.new-tweet').slideToggle("slow", function() {
    });
    $(".primary-input").focus();
  });

  // Tweet form event listener and ajax submit
  $('form').on('submit', function (event) {

    event.preventDefault();
    var $tweetInput = $(this);
    var numChars = $tweetInput.find('.primary-input').val().length;
    if(numChars > 140){
      alert("Tweets are limited to < 140 characters!");
      return;
    } else if(numChars === 0){
      alert("Message is empty!");
      return;
    }

    $.ajax({
      method: 'POST',
      url: $tweetInput.attr('action'),
      data: $tweetInput.find('.primary-input').serialize()
    }).done(function() {
      loadTweets();
      $tweetInput.find('.primary-input').val("");
    });

  });

  loadTweets();

});