var WikiParser = function (markup) {
	this.markup = markup;
};

WikiParser.prototype.toHtml = function() {
  var res = this.markup.slice(); // slice() makes a copy of this.markup
  var replacements = this.replacements();

  for (var originalMarkup in replacements) {
    var replacementHtml = replacements[originalMarkup];

    res = res.replace(originalMarkup, replacementHtml, 'g');
  }

  return res;
};

WikiParser.prototype.replacements = function() {
  var res = {};

  var articleMarkupTexts = this.articleMarkupTexts();

  for(var i = 0; i < articleMarkupTexts.length; i++) {
    var articleMarkupText = articleMarkupTexts[i];

    var articleMarkupParser = new ArticleMarkupParser(articleMarkupText);
    var anchorHtml = articleMarkupParser.toHtml();

    res[articleMarkupText] = anchorHtml;
  }

  var imageMarkupTexts = this.imageMarkupTexts();

  for(var i = 0; i < imageMarkupTexts.length; i++) {
    var imageMarkupText = imageMarkupTexts[i];

    var imageMarkupParser = new ImageMarkupParser(imageMarkupText);
    var imageHtml = imageMarkupParser.toHtml();

    res[imageMarkupText] = imageHtml;
  }

  return res;
}

WikiParser.prototype.articleMarkupTexts = function() {
	return this.markup.match(/\[Article\|.+?\]/g);
};

WikiParser.prototype.imageMarkupTexts = function () {
  return this.markup.match (/\[Image\|.+?\]/g);
};