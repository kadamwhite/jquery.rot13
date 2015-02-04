# jQuery Rot13 Plugin

This plugin is designed to simplify encoding and decoding text on your webpage using [rot13](http://rot13.com/), for example to make it easier to [obscure or decode spoilers](http://gameshelf.jmac.org/2012/04/lets-use-rot13-for-game-spoilers) or other text in a blog post, game or application.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/kadamwhite/jquery.rot13/master/dist/jquery.rot13.min.js
[max]: https://raw.github.com/kadamwhite/jquery.rot13/master/dist/jquery.rot13.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.rot13.min.js"></script>
<script>
jQuery(function($) {
  var str = $.rot13(str); // rot13 encodes and returns the input string
  $('p').rot13(); // rot13 encodes the text of every <p> element on the page
});
</script>
```

## Usage

```javascript
$('p').rot13(); // rot13 encodes the text of every <p> element on the page
```
```javascript
var str = $.rot13(str); // rot13 encodes and returns the input string
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Contributors

[@kadamwhite](https://github.com/kadamwhite), [@ocReaper](https://github.com/ocReaper)

## License

Copyright (c) 2012–2015 K.Adam White  
Licensed under the MIT license.
