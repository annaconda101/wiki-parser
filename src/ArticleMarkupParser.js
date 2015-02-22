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
  };
};

ArticleMarkupParser.prototype.recognisedArticles = function() {
  return { '1': 'Ruby the new PHP?', '2': 'Boring article' };
}

ArticleMarkupParser.prototype.toHtml = function() {
  var match = this.articleMarkupText.match(/\[(.+?)]*\]/);

  if (match) {
    var articleMarkupComponents = match[1].split('|');

    var id = articleMarkupComponents[1];

    if (!this.recognisedArticles().hasOwnProperty(id)) {
      return '';
    }

    var innerTextComponents = [];
    var caption = this.recognisedArticles()[id]
    innerTextComponents.push(caption);

    if ((articleMarkupComponents.length === 3) && (articleMarkupComponents[2] !== '')) {
      innerTextComponents.push(articleMarkupComponents[2]);
    }

    var innertText = innerTextComponents.join(', ')

    return '<a href="index.php?id=' + id + '">' + innertText + "</a>";
  } else {
    return '';
  }
};