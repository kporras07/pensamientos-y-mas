(function(d, s) {
  var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.src = url; js.id = id;
    fjs.parentNode.insertBefore(js, fjs);
  };
  load('//platform.twitter.com/widgets.js', 'tweetjs');
  load('//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1560868307491624&version=v2.0', 'fbjssdk');
  load('https://apis.google.com/js/plusone.js', 'gplus1js');
}(document, 'script'));

