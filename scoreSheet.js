function addOneRowP1() {

        var newRow = document.getElementById('player1').insertRow();

        var currentRow = document.getElementById("player1").rows.length;
        var roundNumber = currentRow - 1;
        var roundNumberCell = "<tr><td>Round " + roundNumber + "</td></tr >";

    if (roundNumber >= 6) {
        alert("Max number of rounds reached");
    }

    if (roundNumber < 6) {

        var newCell = newRow.insertCell();
        newCell.innerHTML = roundNumberCell;

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><select name='Strategy'><option value='GainingMomentum'>Gaining momentum</option><option value='EyeForAnEye'>Eye for an eye</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='ThisOnesMine'>This one's mine</option><option value='HeadToHead'>Head-to-head</option><option value='Outmusclce'>Outmuscle</option><option value='AgainstTheOdds' selected>Against the odds</option><option value='BargeThroughEnemyLines'>Barge through enemy lines</option></select></td></tr>";

        var newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='text' name='strategy'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='text' name='objectivesNumber'></td></tr>";
    }

}

function addOneRowP2() {

    var newRow = document.getElementById('player2').insertRow();

    var currentRow = document.getElementById("player2").rows.length;
    var roundNumber = currentRow - 1;
    var roundNumberCell = "<tr><td>Round " + roundNumber + "</td></tr >";

    if (roundNumber >= 6) {
        alert("Max number of rounds reached");
    }

    if (roundNumber < 6) {

        var newCell = newRow.insertCell();
        newCell.innerHTML = roundNumberCell;

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><select name='Strategy'><option value='GainingMomentum'>Gaining momentum</option><option value='EyeForAnEye'>Eye for an eye</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='ThisOnesMine'>This one's mine</option><option value='HeadToHead'>Head-to-head</option><option value='Outmusclce'>Outmuscle</option><option value='AgainstTheOdds' selected>Against the odds</option><option value='BargeThroughEnemyLines'>Barge through enemy lines</option></select></td></tr>";

        var newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='text' name='strategy'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='text' name='objectivesNumber'></td></tr>";
    }

    console.log(roundNumber);




}