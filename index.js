var pawnstructure = require('./lib/pawnstructure.js');
var evaluation = function(b) {
    var pawnresult = pawnstructure.analyze(b);
    return {
        pawnresult : pawnresult
    }
};
module.exports = exports = evaluation;
/*
var startboard = [
['1','1','1','1','1','1','1','1'],
['1','1','1','1','1','1','1','1'],
['1','P','1','1','1','1','1','1'],
['1','1','P','1','1','1','1','1'],
['1','1','p','1','1','1','1','1'],
['1','p','1','1','1','1','1','1'],
['1','1','1','1','1','1','1','1'],
['1','1','1','1','1','1','1','1']
];
evaluation(startboard);
*/
