var ImageMarkupParser = function (imageMarkupText){
  this.imageMarkupText = imageMarkupText;
};

ImageMarkupParser.prototype.recognisedImages = function() {
  return [ "guitar.jpg", "gavin/'s new car.jpg", "coffee.jpg" ];
};

ImageMarkupParser.prototype.toHtml = function() {
  var match = this.imageMarkupText.match(/\[(.+?)]*\]/);

  if (match) {
    var imageMarkupComponents = match[1].split('|');

    var name = imageMarkupComponents[1];

    if (this.recognisedImages().indexOf(name) === -1) {
      return '';
    }

    var caption = imageMarkupComponents[2];

    return '<img src="im.php?imname=' + name + '" alt="' + caption + '"' + ' /> Caption: ' + caption;
  } else {
    return '';
  }
};