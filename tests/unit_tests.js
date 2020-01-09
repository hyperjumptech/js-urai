var assert = require('assert');
var lib = require('../lib');

describe('js-urai', function() {
    it('should insert spaces', function() {
        var source = 'answer=40+2;';
        var formatted = lib.reformat(source);
        var expected = 'answer = 40 + 2;\n';
        assert.equal(formatted, expected);
    });

    it('should add a semicolon', function() {
        var source = 'x';
        var formatted = lib.reformat(source);
        var expected = 'x;\n';
        assert.equal(formatted, expected);
    });

    it('should indent', function() {
        var source = 'for(;;){ var i }';
        var formatted = lib.reformat(source);
        var expected = ['for (; ; ) {', '    var i;', '}', ''].join('\n');
        assert.equal(formatted, expected);
    });
});
