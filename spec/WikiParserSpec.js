describe("WikiParser", function() {

  var markup = 'Another day, another blog entry. Did you see my new ' +
               'guitar? [Image|guitar.jpg|a guitar] I found this ' +
               '[Article|1|article] interesting, but this one "[Article|3]" ' +
               'was more interesting -- actually, it was [Article|2|This one].';

  it('assigns constructor argument to markup property', function() {
    var wikiParser = new WikiParser('blah blah blah');

    expect(wikiParser.markup).toBe('blah blah blah');
  });

  describe('articles', function() {
    describe('recognisedArticles', function() {
      it("should return { '1': 'Ruby the new PHP?', 2: 'Boring article' };", function() {
        var wikiParser = new WikiParser('');

        expect(wikiParser.recognisedArticles()).toEqual({ '1': 'Ruby the new PHP?', '2': 'Boring article' });
      });
    });

    describe('articleMarkups', function() {
      it('should extract all article markups', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.articleMarkups()).toEqual([
          '[Article|1|article]', '[Article|3]', '[Article|2|This one]'
        ]);
      });
    });

    describe('articleAnchors', function() {
      xit('should translate all articleMarkups', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.articleAnchors()).toEqual([
          '<a href="index.php?id=1">Ruby the new PHP?, article></a>',
          '<a href="index.php?id=2">Boring article></a>'
        ])
      });
    });
  });
});



