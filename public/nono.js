//Values for the answer key and user's table are all hardcoded
//1: the tile should be shown black
//2: the tile should be shown white
//Size is 15x15 and has 4 additional rows & columns for the hint values
var multilineOn = false;
var hardPuzzleChosen = true;
var multiStartRow = -1;
var multiStartCol = -1;
var multiEndRow = -1;
var multiEndCol = -1;

//Nonogram design from http://nonogramskatana.blogspot.com/2016/05/15x15-mouse.html
//Default puzzle is the harder puzzle
var tableAnswer = [
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 3, 2, 0, 4, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 6, 2, 3, 2, 1, 1, 2, 2, 2, 1],
    [0, 0, 0, 0, 2, 3, 1, 1, 1, 2, 2, 2, 5, 1, 1, 1, 2, 5, 5],

    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 4, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
    [3, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [3, 1, 2, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 2, 1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 4, 2, 2, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [0, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 0, 4, 3, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 2, 2, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 5, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 3, 2, 3, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0]
];

var tableAnswerHard = [
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 3, 2, 0, 4, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 6, 2, 3, 2, 1, 1, 2, 2, 2, 1],
    [0, 0, 0, 0, 2, 3, 1, 1, 1, 2, 2, 2, 5, 1, 1, 1, 2, 5, 5],

    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 4, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
    [3, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [3, 1, 2, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 2, 1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 4, 2, 2, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [0, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 0, 4, 3, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 2, 2, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 5, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 3, 2, 3, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0]
];

var tableAnswerEasy = [
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 4, 1, 4, 0, 0, 3, 4, 0, 0],
    [0, 0, 0, 0, 0, 7, 4, 7, 5, 4, 1, 1, 1, 4, 5, 7, 4, 7, 0],
    [0, 0, 0, 0, 15, 7, 2, 3, 5, 4, 4, 1, 4, 4, 5, 3, 2, 7, 15],

    [0, 0, 0, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 7, 7, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [2, 4, 4, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [0, 3, 7, 3, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 5, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [4, 1, 1, 4, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 5, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 3, 7, 3, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [2, 4, 2, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 7, 7, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

var tableUser = [
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 3, 2, 0, 4, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 6, 2, 3, 2, 1, 1, 2, 2, 2, 1],
    [0, 0, 0, 0, 2, 3, 1, 1, 1, 2, 2, 2, 5, 1, 1, 1, 2, 5, 5],

    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var tableUserHard = [
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 3, 2, 0, 4, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 6, 2, 3, 2, 1, 1, 2, 2, 2, 1],
    [0, 0, 0, 0, 2, 3, 1, 1, 1, 2, 2, 2, 5, 1, 1, 1, 2, 5, 5],

    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var tableUserEasy = [
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 4, 1, 4, 0, 0, 3, 4, 0, 0],
    [0, 0, 0, 0, 0, 7, 4, 7, 5, 4, 1, 1, 1, 4, 5, 7, 4, 7, 0],
    [0, 0, 0, 0, 15, 7, 2, 3, 5, 4, 4, 1, 4, 4, 5, 3, 2, 7, 15],

    [0, 0, 0, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 3, 7, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 3, 7, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//Creates the answer table as html code - a string
function createTable(tbl) {
    var newTable = "<table>";
    for (var i = 0; i < tbl.length; i++) {
        newTable += "<tr>";
        for (var j = 0; j < tbl[i].length; j++) {
            //check if guide row
            //these can't be altered by the user & display differently
            if ((i < 4) || (j < 4)) {
                if (tbl[i][j] == 0) {
                    //don't display a number if value is zero
                    newTable += "<td id=guide> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    //display when the number is used as a guide for the puzzle
                    newTable += "<td id=guide> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }

            } else {
                //different id's to set cell colours if toggled/not
                if (tbl[i][j] == 1) {
                    newTable += "<td id=one> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    newTable += "<td id=zero> &nbsp; &nbsp; &nbsp; </td>";
                }
            }

        }
        newTable += "</tr>";
    }
    newTable += "</table>";

    return newTable;
}

//Creates the user table as html code - a string
function createUserTable(tbl) {
    var newTable = "<table>";
    for (var i = 0; i < tbl.length; i++) {
        newTable += "<tr>";
        for (var j = 0; j < tbl[i].length; j++) {
            //check if guide row
            //these can't be altered by the user & display differently
            if ((i < 4) || (j < 4)) {
                if (tbl[i][j] == 0) {
                    //don't display a number if value is zero
                    newTable += "<td id=guide> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    //display when the number is used as a guide for the puzzle
                    newTable += "<td id=guide> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }

            } else {
                //different id's to set cell colours if toggled/not
                if (tbl[i][j] == 1) {
                    newTable += "<td id=one onclick='toggleCell(" + i + ", " + j + "); return false;'> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    newTable += "<td id=zero onclick='toggleCell(" + i + ", " + j + "); return false;'> &nbsp; &nbsp; &nbsp; </td>";
                }
            }

        }
        newTable += "</tr>";
    }
    newTable += "</table>";

    return newTable;
}

//Sets cell value to zero if 1, and to 1 of zero
//Toggles cell value and re-displays table with new cell values
function toggleCell(r, c) {
    if (multilineOn) {
        //for selecting multiple lines
        //Need mult start and end to be set
        //If both have values, fill tiles
        //otherwise, wait
        if (multiStartRow == -1 || multiStartCol == -1) {
            //set multistart
            multiStartRow = r;
            multiStartCol = c;
        } else {
            //set multiend
            if (multiEndRow == -1 || multiEndCol == -1) {
                multiEndRow = r;
                multiEndCol = c;
                //Need either row or column of start & end to be the same to multiselect
                if ((multiStartRow == multiEndRow) || (multiStartCol == multiEndCol)) {

                    if (multiStartRow == multiEndRow) {
                        //fill a row
                        if (multiStartCol < multiEndCol) {
                            //left to right
                            for (var i = multiStartCol; i <= multiEndCol; i++) {
                                if (tableUser[multiStartRow][i] == 0) {
                                    tableUser[multiStartRow][i] = 1;
                                } else {
                                    tableUser[multiStartRow][i] = 0;
                                }
                            }
                        } else if (multiStartCol > multiEndCol) {
                            //left to right
                            for (var i = multiEndCol; i <= multiStartCol; i++) {
                                if (tableUser[multiStartRow][i] == 0) {
                                    tableUser[multiStartRow][i] = 1;
                                } else {
                                    tableUser[multiStartRow][i] = 0;
                                }
                            }
                        }
                    } else if (multiStartCol == multiEndCol) {
                        //fill col
                        if (multiStartRow < multiEndRow) {
                            //top to bot
                            for (var i = multiStartRow; i <= multiEndRow; i++) {
                                if (tableUser[i][multiStartCol] == 0) {
                                    tableUser[i][multiStartCol] = 1;
                                } else {
                                    tableUser[i][multiStartCol] = 0;
                                }
                            }
                        } else if (multiStartRow > multiEndRow) {
                            //bot to top
                            for (var i = multiEndRow; i <= multiStartRow; i++) {
                                if (tableUser[i][multiStartCol] == 0) {
                                    tableUser[i][multiStartCol] = 1;
                                } else {
                                    tableUser[i][multiStartCol] = 0;
                                }
                            }
                        }
                    }
                }

                //reset multistart and multiend
                multiStartRow = -1;
                multiStartCol = -1;
                multiEndRow = -1;
                multiEndCol = -1;
            }
        }

    } else {
        //Single cell click
        if (tableUser[r][c] == 0) {
            tableUser[r][c] = 1;
        } else {
            tableUser[r][c] = 0;
        }
    }

    document.getElementById("userTable").innerHTML = createUserTable(tableUser);

    //Check if correct
    submitAnswer();
}

//Sets all user-accessable cells to 0
//Does not change guide cells
function clearUserTable() {
    for (var i = 0; i < tableUser.length; i++) {
        for (var j = 0; j < tableUser[i].length; j++) {
            if ((i > 3) && (j > 3)) {
                if (hardPuzzleChosen) {
                    tableUser[i][j] = 0;
                } else {
                    tableUser[i][j] = 1;
                }

            }
        }
    }

    document.getElementById("userTable").innerHTML = createUserTable(tableUser);
}

//Hides or displays answer table - toggles
function toggleAnswerTable() {
    var tbl = document.getElementById("answerTable");
    if (tbl.style.display === "none") {
        tbl.style.display = "block";

    } else {
        tbl.style.display = "none";
    }
}

//Compares user input to answer guide
function submitAnswer() {
    var correct = false;
    for (var i = 0; i < tableUser.length; i++) {
        for (var j = 0; j < tableUser[i].length; j++) {
            if (tableUser[i][j] == tableAnswer[i][j]) {
                correct = true;
            } else {
                correct = false;
                break;
            }
        }
        if (!correct) {
            break;
        }
    }

    if (correct) {
        alert("CORRECT!!!! Congratulations!");
    }
}

//Switches to a different puzzle - toggles
function changeNono() {
    //if hard puzzle is displayed, switch to easier one
    if (hardPuzzleChosen) {
        for (var i = 0; i < tableAnswer.length; i++) {
            for (var j = 0; j < tableAnswer[i].length; j++) {
                tableAnswer[i][j] = tableAnswerEasy[i][j];
                tableUser[i][j] = tableUserEasy[i][j];
            }
        }
        hardPuzzleChosen = false;

        //if easy puzzle is chosen, switch to harder one
    } else {
        for (var i = 0; i < tableAnswer.length; i++) {
            for (var j = 0; j < tableAnswer[i].length; j++) {
                tableAnswer[i][j] = tableAnswerHard[i][j];
                tableUser[i][j] = tableUserHard[i][j];
            }
        }
        hardPuzzleChosen = true;
    }

    document.getElementById("userTable").innerHTML = createUserTable(tableUser);
    document.getElementById("answerTable").innerHTML = createTable(tableAnswer);
}

//Switches selection method to multiline
//Requires the user to click for start end and of selection
//Affects toggleCell function
function toggleSelect() {
    if (multilineOn) {
        multilineOn = false;
    } else {
        multilineOn = true;
    }
}

document.getElementById("userTable").innerHTML = createUserTable(tableUser);
document.getElementById("answerTable").innerHTML = createTable(tableAnswer);
document.getElementById("answerTable").style.display = "none";