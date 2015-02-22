describe("WikiParser", function() {

  var markup = 'Another day, another blog entry. Did you see my new ' +
               'guitar? [Image|guitar.jpg|a guitar] I found this ' +
               '[Article|1|article] interesting, but this one "[Article|3]" ' +
               'was more interesting -- actually, it was [Article|2|This one].';

  it('assigns constructor argument to markup property', function() {
    var wikiParser = new WikiParser('blah blah blah');

    expect(wikiParser.markup).toBe('blah blah blah');
  });

  describe('toHtml', function() {
    it('converts wiki markup to html', function() {
      var wikiParser = new WikiParser(markup);

      expect(wikiParser.toHtml()).toEqual(
        'Another day, another blog entry. Did you see my new guitar? ' + 
        '<img src="im.php?imname=guitar.jpg" alt="a guitar" /> ' +
        'Caption: a guitar I found this <a href="index.php?id=1">' +
        'Ruby the new PHP?, article</a> interesting, but this one "" ' + 
        'was more interesting -- actually, it was ' +
        '<a href="index.php?id=2">Boring article, This one</a>.'
      );
    })
  });

  describe('articles', function() {
    describe('articleMarkupTexts', function() {
      it('should extract all article markup texts', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.articleMarkupTexts()).toEqual([
          '[Article|1|article]', '[Article|3]', '[Article|2|This one]'
        ]);
      });
    });
  });

  describe('images', function() {
    describe('imageMarkupTexts', function() {
      it ('should extract all image mark up texts', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.imageMarkupTexts()).toEqual([
          '[Image|guitar.jpg|a guitar]'
        ]);
      });
    });
  });
});
