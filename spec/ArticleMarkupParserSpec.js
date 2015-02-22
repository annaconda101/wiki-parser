describe('ArticleMarkupParser', function() {
  describe('articleMarkupText', function() {
	it('should equal the argument passed to the constructor', function() {
	  var articleMarkupParser = new ArticleMarkupParser('blah blah blah');

	  expect(articleMarkupParser.articleMarkupText).toBe('blah blah blah');
	});
  });

  describe('recognisedArticles', function() {
    it("should return { '1': 'Ruby the new PHP?', 2: 'Boring article' };", function() {
	  var articleMarkupParser = new ArticleMarkupParser('');

      expect(articleMarkupParser.recognisedArticles()).toEqual({ '1': 'Ruby the new PHP?', '2': 'Boring article' });
    });
  });
});