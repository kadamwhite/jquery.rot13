/*
 * jquery.rot13
 * https://github.com/kadamwhite/jquery.rot13
 *
 * Copyright (c) 2012 K.Adam White
 * Licensed under the MIT license.
 */

(function($) {

  window.rot13 = function(str) {
    var chars = str.split('');
    return chars.map(function(char) {
      if(char.match(/[A-Z]/)) {
        return String.fromCharCode((char.charCodeAt(0) - 52) % 26 + 65);
      } else if(char.match(/[a-z]/)) {
        return String.fromCharCode((char.charCodeAt(0) - 84) % 26 + 97);
      } else {
        return char;
      }
    }).join('');
  };

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
