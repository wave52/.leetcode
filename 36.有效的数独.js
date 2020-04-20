/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var temp = [];
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if(!temp[i]) temp[i] = [];
            temp[i][j] = board[j][i];
        }
    }
    if(board.some(row => row.some((item) => item !== '.' && row.filter(m => m === item).length > 1))) {    
        return false;
    } 
    if(temp.some(row => row.some((item) => item !== '.' && row.filter(m => m === item).length > 1))) {
        return false;
    } 
    for(var i = 0; i < 9; i = i + 3) {
        for(var j = 0; j < 9; j = j + 3) { 
            var row = [board[i][j], board[i][j+1], board[i][j+2],
            board[i+1][j], board[i+1][j+1], board[i+1][j+2],
            board[i+2][j], board[i+2][j+1], board[i+2][j+2]];
            if(row.some((item) => item !== '.' && row.filter(m => m === item).length > 1)){                
                return false;
            }
        }
    }
    return true
};