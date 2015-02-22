var ArticleMarkupParser = function (articleMarkupText){
	this.articleMarkupText = articleMarkupText;
};

ArticleMarkupParser.prototype.articleMarkup = function() {
  var match = this.articleMarkupText.match(/\[(.+?)]*\]/);

  if (match) {
    var articleMarkupComponents = match[1].split('|');

    var id = articleMarkupComponents[1];
    var optionalHeadline = (articleMarkupComponents.length) === 3 ? articleMarkupComponents[2] : null;

    return {
      id: id,
      optionalHeadline: optionalHeadline
    };
  }
};