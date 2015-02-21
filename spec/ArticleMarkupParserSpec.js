describe('ArticleMarkupParser', function() {
  it('assigns constructor argument to articleMarkup property', function() {
    var articleMarkupParser = new ArticleMarkupParser('blah blah blah');

    expect(articleMarkupParser.articleMarkup).toBe('blah blah blah');
  });

  describe('id', function() {
  	it('should extract value of id from articleMarkup', function() {
  		var articleMarkupParser = new ArticleMarkupParser('[Article|2|This one]');

  		expect(articleMarkupParser.id).toEqual('2');
  	});
  });

  describe('optionalHeadline', function() {
  	it('should extract value of optionalHeadline from articleMarkup', function() {
  		var articleMarkupParser = new ArticleMarkupParser('[Article|2|This one]');

  		expect(articleMarkupParser.optionalHeadline).toEqual('This one');
  	});

  	it('should be null when missing value from articleMarkup', function() {
  		var articleMarkupParser = new ArticleMarkupParser('[Article|3]');

  		expect(articleMarkupParser.optionalHeadline).toBeNull();
  	});
  });
});