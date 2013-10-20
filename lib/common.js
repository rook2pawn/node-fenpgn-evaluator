var getPawns = function(b) {
    var white = [];
    var black = [];
    for (var row = 0; row <= 7; row++) {
        for (var col = 0; col <= 7; col++) {
            var piece = b[row][col];
            if (piece == 'P') {
                white.push({piece:'P',row:row,col:col});
            } else if (piece == 'p') {
                black.push({piece:'p',row:row,col:col});
            }
        }
    }
    return {white:white,black:black}
}
exports.getPawns = getPawns;
