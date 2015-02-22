describe('ImageMarkupParser', function() {
  describe('ImageMarkupText', function() {
	it('should equal the argument passed to the constructor', function() {
	  var imageMarkupParser = new ImageMarkupParser('blah blah blah');

	  expect(imageMarkupParser.imageMarkupText).toBe('blah blah blah');
	});
  });

  describe('recognisedImages', function() {
    it('should return [ "guitar.jpg", "gavin\'s new car.jpg", "coffee.jpg" ];' , function() {
	  var imageMarkupParser = new ImageMarkupParser('');

      expect(imageMarkupParser.recognisedImages()).toEqual([ "guitar.jpg", "gavin/'s new car.jpg", "coffee.jpg" ]);
    });
  });
});