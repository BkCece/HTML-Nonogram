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

//Image from http://nonogramskatana.blogspot.com/2016/05/15x15-mouse.html
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

document.getElementById("p1").innerHTML = "Here we go!";
document.getElementById("p2").innerHTML = createTable(tableAnswer);