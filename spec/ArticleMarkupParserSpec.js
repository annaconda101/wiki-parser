describe('ArticleMarkupParser', function() {
  describe('articleMarkupText', function() {
	it('should equal the argument passed to the constructor', function() {
	  var articleMarkupParser = new ArticleMarkupParser('blah blah blah');

	  expect(articleMarkupParser.articleMarkupText).toBe('blah blah blah');
	});
  });

  describe('articleMarkup', function() {
	describe('id', function() {
	  it('should extract the value', function() {
	    var articleMarkupParser = new ArticleMarkupParser('[Article|2|This one]');

	  	expect(articleMarkupParser.articleMarkup().id).toEqual('2');
	  });
	});

	describe('optionalHeadline', function() {
	  describe('when the articleMarkupText contains 3 elements separated by pipe characters', function() {
	    it('should extract the last element', function() {
	  	  var articleMarkupParser = new ArticleMarkupParser('[Article|2|This one]');

	  	  expect(articleMarkupParser.articleMarkup().optionalHeadline).toEqual('This one');
	    });
	  });

	  describe('when the articleMarkupText contains 2 elements separated by pipe characters', function() {
	    it('should extract no value when missing value', function() {
	  	  var articleMarkupParser = new ArticleMarkupParser('[Article|3]');

	  	  expect(articleMarkupParser.articleMarkup().optionalHeadline).toBeNull();
	    });
	  });
	});
  });
});