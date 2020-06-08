//Nonogram design from http://nonogramskatana.blogspot.com/2016/05/15x15-mouse.html
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
    [0, 3, 2, 3, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
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
    [0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function createTable(tbl) {
    var newTable = "<table>";
    for (var i = 0; i < tbl.length; i++) {
        newTable += "<tr>";
        for (var j = 0; j < tbl[i].length; j++) {
            if ((i < 4) || (j < 4)) {
                if (tbl[i][j] == 0) {
                    newTable += "<td id = guide> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    newTable += "<td id = guide> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }

            } else {
                if (tbl[i][j] == 1) {
                    newTable += "<td id = one> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                } else {
                    newTable += "<td id = zero> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }
            }

        }
        newTable += "</tr>";
    }
    newTable += "</table>";

    return newTable;
}

function createUserTable(tbl) {
    var newTable = "<table>";
    for (var i = 0; i < tbl.length; i++) {
        newTable += "<tr>";
        for (var j = 0; j < tbl[i].length; j++) {
            if ((i < 4) || (j < 4)) {
                if (tbl[i][j] == 0) {
                    newTable += "<td id = guide> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    newTable += "<td id = guide> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }

            } else {
                if (tbl[i][j] == 1) {
                    newTable += "<td id = one onclick='toggleCell(" + i + ", " + j + "); return false;'> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                } else {
                    newTable += "<td id = zero onclick='toggleCell(" + i + ", " + j + "); return false;'> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }
            }

        }
        newTable += "</tr>";
    }
    newTable += "</table>";

    return newTable;
}

function toggleCell(r, c) {
    if (tableUser[r][c] == 0) {
        tableUser[r][c] = 1;
    } else {
        tableUser[r][c] = 0;
    }

    document.getElementById("userTable").innerHTML = createUserTable(tableUser);
}

function clearTable(tbl) {
    var newTable = "<table>";
    for (var i = 0; i < tbl.length; i++) {
        newTable += "<tr>";
        for (var j = 0; j < tbl[i].length; j++) {
            if ((i < 4) || (j < 4)) {
                if (tbl[i][j] == 0) {
                    newTable += "<td id = guide> &nbsp; &nbsp; &nbsp; </td>";
                } else {
                    newTable += "<td id = guide> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                }

            } else {
                tbl[i][j] = 0;
                //newTable += "<td id = zero onclick = \"toggleCell(" + i + ", " + j + ");\"> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
                newTable += "<td id = zero> &nbsp;" + tbl[i][j] + "&nbsp; </td>";
            }

        }
        newTable += "</tr>";
    }
    newTable += "</table>";

    return newTable;
}

function toggleAnswerTable() {
    var tbl = document.getElementById("answerTable");
    if (tbl.style.display === "none") {
        tbl.style.display = "block";

    } else {
        tbl.style.display = "none";
    }
}

var htmltableAnswer = createTable(tableAnswer);
document.getElementById("text").innerHTML = "Here we go!";
document.getElementById("userTable").innerHTML = createUserTable(tableUser);
document.getElementById("answerTable").innerHTML = htmltableAnswer;
document.getElementById("answerTable").style.display = "none";