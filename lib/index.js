var esprima = require('esprima');
var astring = require('astring');
function reformat(source) {
    var tree = esprima.parseScript(source);
    var options = {
        indent: '    '
    };
    return astring.generate(tree, options);
}
exports.reformat = reformat;
