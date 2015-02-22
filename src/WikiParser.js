var WikiParser = function (markup) {
	this.markup = markup;
};

WikiParser.prototype.recognisedArticles = function() {
	return { '1': 'Ruby the new PHP?', '2': 'Boring article' };
};

WikiParser.prototype.articleMarkupTexts = function() {
	return this.markup.match(/\[Article\|.+?\]/g);
};

WikiParser.prototype.articleAnchors = function() {
  var articleMarkups = this.articleMarkups();
  var recognisedArticles = this.recognisedArticles();

  var ret = [];

  for(var i = 0; i < articleMarkups.length; i++) {
  	var articleMarkup = articleMarkups[i];
  	var id = articleMarkup.id;
  	var optionalHeadline = articleMarkup.optionalHeadline;

  	if(recognisedArticles.hasOwnProperty(id)) {
  	  var headline = recognisedArticles[id];

	  var htmlAnchorElements = [headline];
	  if(optionalHeadline !== null) {
	  	htmlAnchorElements.push(optionalHeadline);
	  }
	  var htmlAnchorText = htmlAnchorElements.join(', ');

  	  var htmlAnchor = '<a href="index.php?id=' + id + '">' + htmlAnchorText + "</a>";

  	  ret.push(htmlAnchor);  	  
  	}
  }

  return ret;
};

WikiParser.prototype.articleMarkups = function() {
  var articleMarkupTexts = this.articleMarkupTexts();

  var ret = [];

  for(var i = 0; i < articleMarkupTexts.length; i++) {
  	var articleMarkupText = articleMarkupTexts[i];
  	var articleMarkupParser = new ArticleMarkupParser(articleMarkupText);
  	var articleMarkup = articleMarkupParser.articleMarkup();

    ret.push(articleMarkup);
  }

  return ret;
};