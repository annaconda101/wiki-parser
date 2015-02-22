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

    describe('articleMarkupTexts', function() {
      it('should extract all article markup texts', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.articleMarkupTexts()).toEqual([
          '[Article|1|article]', '[Article|3]', '[Article|2|This one]'
        ]);
      });
    });

    describe('articleMarkups', function() {
      it('should extract all article markups', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.articleMarkups()).toEqual([
          { id: '1', optionalHeadline: 'article' },
          { id: '3', optionalHeadline: null },
          { id: '2', optionalHeadline: 'This one'}
        ]);
      });
    });

    describe('articleAnchors', function() {
      it('should translate all articleMarkups', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.articleAnchors()).toEqual([
          '<a href="index.php?id=1">Ruby the new PHP?, article</a>',
          '<a href="index.php?id=2">Boring article, This one</a>'
        ])
      });
    });

    xit('translates markup to html', function() {

    });
  });


//Images

  describe('images', function() {
    //step 1: recognisedArticles
    describe('recognisedImages', function() {
      it('should return [ "guitar.jpg", "gavin\'s new car.jpg", "coffee.jpg" ];' , function() {
        var wikiParser = new WikiParser('');

        expect(wikiParser.recognisedImages()).toEqual([ "guitar.jpg", "gavin/'s new car.jpg", "coffee.jpg" ]);
      });
    });

    //step 2: imageMarkupTexts
    describe('imageMarkupTexts', function() {
      it ('should extract all image mark up texts', function() {
        var wikiParser = new WikiParser(markup);

        expect(wikiParser.imageMarkupTexts()).toEqual([
          '[Image|guitar.jpg|a guitar]'
        ]);
      });
    });

    //step 3:
    // describe('imageMarkup', function(){
      // it ('should extract all image markups', function(){
        // var wikiParser = new WikiParser(markup);

        // expect(wikiParser.imageMarkup()).toEqual([
          // [];
        // ]);  
      // });
    // }); 

  
  });//images closing tag- do not delete
});//wikiparser closing tag- to not delete




