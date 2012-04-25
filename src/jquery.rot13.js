/*
 * jquery.rot13
 * https://github.com/kadamwhite/jquery.rot13
 *
 * Copyright (c) 2012 K.Adam White
 * Licensed under the MIT license.
 */

(function($) {

  var rot13 = function(str) {
    var chars = str.split('');
    return $.map(chars, function(char) {
      var charCode;
      if(!char.match(/[A-Za-z]/)) {
        return char;
      }
      charCode = char.charCodeAt(0);
      if(charCode < 97) {
        charCode = (charCode - 52) % 26 + 65;
      } else {
        charCode = (charCode - 84) % 26 + 97;
      }
      return String.fromCharCode(charCode);
    }).join('');
  };

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Collection method
  $.fn.rot13 = function() {
    var html = $(this).html();
    if(html.match(/[<>]/)) {
      // Here be HTML!
      // Catch any raw text preceding an initial HTML tag
      html = html.replace(/^([^<]*)</, rot13);
      // Catch any intermediate strings
      html = html.replace(/>([^<]*)</g, rot13);
      // Catch any raw text after a final HTML tag
      html = html.replace(/>([^<]*)$/, rot13);
    } else {
      // No HTML 'round these parts
      html = rot13(html);
    }
    return $(this).html(html);
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Static method.
  $.rot13 = function(str) {
    return rot13(str);
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
