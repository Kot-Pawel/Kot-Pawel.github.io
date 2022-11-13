$(document).ready(function () {
$("#submit").on('click', function (e) {
    e.preventDefault();
    var data = $("#player1 tr.data").map(function (index, elem) {
        var ret = [];
        $('.inputValue', this).each(function () {
            var d = $(this).val() || $(this).text();
            ret.push(d);
            console.log(d);
            if (d == "N/A") {
                console.log(true);
            }
        });
        return ret;
    });
    console.log(data);
    console.log(data[0]);
});
});

function start() {

    tableToJson(document.getElementById("player1"));

}

function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].value;

        }
        data.push(rowData);
    }       

    //return data;
    console.log(data);
    console.log(JSON.stringify(data));
}


$(document).ready(function () {
$('#convert-table').click(function () {
    var table = $('#player1').tableToJSON();
    console.log(table);
    console.log(JSON.stringify(table));
});
});

