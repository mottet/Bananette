'use strict';

var forbiddenChannel = ["Solfa", "BuzzFeedVideo"];

var configObserver = { attributes: true, childList: true, subtree: true };
var nodeToObserve = document.getElementById('related');

var removeRecommandation = () => {
  var recommandation = document.getElementsByTagName('ytd-compact-video-renderer');
  for (var i = 0; i < recommandation.length; ++i) {
    if (forbiddenChannel.includes(recommandation[i].innerText.split('\n').reverse()[1]))
      recommandation[i].outerHTML = "";
  }
};

var observer = new MutationObserver(removeRecommandation);
observer.observe(nodeToObserve, configObserver);
