
function transpose(original) {
    var copy = [];
    for (var i = 0; i < original.length; ++i) {
        for (var j = 0; j < original[i].length; ++j) {
            
            if (original[i][j] === undefined) continue;
            
            if (copy[j] === undefined) copy[j] = [];
            
            copy[j][i] = original[i][j];
        }
    }
    return copy;
}

console.log(transpose([
    [1,2],
    [3,4],
    [5,6]
]));
