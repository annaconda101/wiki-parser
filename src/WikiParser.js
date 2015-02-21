var WikiParser = function (markup) {
	this.markup = markup;
};

WikiParser.prototype.recognisedArticles = function() {
	return { '1': 'Ruby the new PHP?', '2': 'Boring article' };
};

WikiParser.prototype.articleMarkups = function() {
	return this.markup.match(/\[Article\|.+?\]/g);
};

WikiParser.prototype.articleAnchors = function() {
	// for each articleMarkup in articleMarkups
		// if articleMarkup.id is not a key of recognisedArticles, skip
		// var headline = recognisedArticles[articleMarkup.id]
		// articleMarkup.optionalHeadline;
};