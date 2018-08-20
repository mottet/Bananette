'use strict';

var forbiddenChannel = ["Solfa", "BuzzFeedVideo"];

var configObserver = { attributes: true, childList: true, subtree: true };

var nodeToObserveOnSide = document.getElementById('related');
var nodeToObserveOnVideo = document.getElementsByClassName("html5-endscreen ytp-player-content videowall-endscreen")[0];

var removeRecommandation = () => {
  var recommandation = document.getElementsByTagName('ytd-compact-video-renderer');
  for (var i = 0; i < recommandation.length; ++i) {
    if (forbiddenChannel.includes(recommandation[i].innerText.split('\n').reverse()[1]))
      recommandation[i].outerHTML = "";
  }
};

var removeRecommandationEndVideo = () => {
  var recommandation = document.getElementsByClassName("ytp-videowall-still ytp-suggestion-set")
  for (var i = 0; i < recommandation.length; ++i) {
    if (forbiddenChannel.includes(recommandation[i].innerText.split('\n').reverse()[1].split('•')[0].trim()))
      recommandation[i].outerHTML = "";
  }
};

var observer = new MutationObserver(removeRecommandation);
observer.observe(nodeToObserveOnSide, configObserver);

var observerEndVideo = new MutationObserver(removeRecommandationEndVideo);
observerEndVideo.observe(nodeToObserveOnVideo, configObserver);
