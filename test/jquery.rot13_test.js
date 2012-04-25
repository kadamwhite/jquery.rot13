/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery#rot13', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.awesome(), this.elems, 'should be chaninable');
  });

  test('is awesome', 1, function() {
    strictEqual(this.elems.awesome().text(), 'awesomeawesomeawesome', 'should be thoroughly awesome');
  });

  module('jQuery.rot13', {
    setup: function() {
      this.normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!%*#@abcdefghijklmnopqrstuvwxyz';
      this.encoded = 'NOPQRSTUVWXYZABCDEFGHIJKLM!%*#@nopqrstuvwxyzabcdefghijklm';
    }
  });

  test('mono-directional encoding', 1, function() {
    strictEqual($.rot13(this.normal), this.encoded, 'should encode correctly');
  });

  test('mono-directional DE-coding', 1, function() {
    strictEqual($.rot13(this.encoded), this.normal, 'should decode correctly');
  });

  test('bi-directional encoding', 1, function() {
    strictEqual($.rot13($.rot13(this.encoded)), this.encoded, 'should decode encoded text correctly');
  });

  module('jQuery.fn.rot13: pure text', {
    setup: function() {
      this.normal = $('#rot13-source p.normal').text('ABCDEFGHIJKLMNOPQRSTUVWXYZ!%*#@abcdefghijklmnopqrstuvwxyz');
      this.encoded = $('#rot13-source p.encoded').text('NOPQRSTUVWXYZABCDEFGHIJKLM!%*#@nopqrstuvwxyzabcdefghijklm');
    }
  });

  test('properly encode pure text', 1, function() {
    strictEqual(this.normal.rot13().html(), this.encoded.html());
  });

  test('properly DE-code pure text', 1, function() {
    strictEqual(this.encoded.rot13().html(), this.normal.html());
  });

  test('encode then decode the same text', 1, function() {
    var target = this.normal.html();
    strictEqual(this.normal.rot13().rot13().html(), target);
  });

  module('jQuery.fn.rot13: HTML', {
    setup: function() {
      this.normal = $('#rot13-source p.normal').html('ABCDEFGHIJKL<b>MNOPQRSTUVWXYZ!%*#@abc</b>defghijklmnopqrstuvwxyz');
      this.encoded = $('#rot13-source p.encoded').html('NOPQRSTUVWXY<b>ZABCDEFGHIJKLM!%*#@nop</b>qrstuvwxyzabcdefghijklm');
    }
  });

  test('properly encode text, ignoring HTML tags', 1, function() {
    strictEqual(this.normal.rot13().html(), this.encoded.html());
  });

  test('properly DE-code text, ignoring HTML tags', 1, function() {
    strictEqual(this.encoded.rot13().html(), this.normal.html());
  });

  test('encode then decode the same text, ignoring HTML tags', 1, function() {
    var target = this.normal.html();
    strictEqual(this.normal.rot13().rot13().html(), target);
  });

  module('jQuery.awesome');

  test('is awesome', 1, function() {
    strictEqual($.awesome(), 'awesome', 'should be thoroughly awesome');
  });

  module(':awesome selector', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', 1, function() {
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));
