

// Fake data taken from tweets.json
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweet) {

  var date = new Date(tweet.created_at);

  var $header = $("<header>").addClass('tweet-header');
  $header.append($(`<img src="${tweet.user.avatars.small}"/>`));
  $header.append($(`<h1>${tweet.user.name}</h1>`));
  $header.append($(`<h2>${tweet.user.handle}</h2>`));

  var $body = $("<p>").addClass('tweet-text');
  $body.append(`${tweet.content.text}`);

  var $footer = $("<footer>").addClass('tweet-footer');
  $footer.append($(`<p>${date}</p>`));

  // final asssembly
  var $tweet = $('<article>').addClass('tweet');
  $tweet.append($header);
  $tweet.append($body);
  $tweet.append($footer);

  return $tweet;
}

function renderTweets(tweets) {
  for (tweet in tweets){
    var tweetData = tweets[tweet];
    console.log(tweetData);
    var $tweet = createTweetElement(tweetData);
    $('#tweets-container').append($tweet);
  }
}

// Better to put the Document Ready wrap down here...less easy to screw things up
$( document ).ready(function(){

  // Tweet form event listener and ajax submit
  $('form').on('submit', function (event) {

    event.preventDefault();
    var $tweetInput = $(this);
    // console.log($tweetInput);
    console.log($tweetInput.find('textarea').val());
    console.log($tweetInput.find('textarea').serialize());

    $.ajax({
      method: 'POST',
      url: $tweetInput.attr('action'),
      data: $tweetInput.find('textarea').serialize()
    }).done(function() {
      console.log("Done POST!");
    });

  });

  renderTweets(data);

});