function addOneRowP1() {

        var newRow = document.getElementById('player1').insertRow();

        var currentRow = document.getElementById("player1").rows.length;
        var roundNumber = currentRow - 1;
        var roundNumberCell = "<tr><td>R" + roundNumber + "</td></tr >";

    if (roundNumber >= 6) {
        alert("Max number of rounds reached");
    }

    if (roundNumber < 6) {

        var newCell = newRow.insertCell();
        newCell.innerHTML = roundNumberCell;

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><select name='StrategyP1'><option value='GainingMomentum'>Gaining momentum</option><option value='EyeForAnEye'>Eye for an eye</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='ThisOnesMine'>This one's mine</option><option value='HeadToHead'>Head-to-head</option><option value='Outmusclce'>Outmuscle</option><option value='AgainstTheOdds' selected>Against the odds</option><option value='BargeThroughEnemyLines'>Barge through enemy lines</option></select></td></tr>";

        var newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='objectivesNumberP1' id='objectivesNumberP1Id" + roundNumber + "' onchange='calculateVP()'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='victoryPointsP1' id='victoryPointsP1id" + roundNumber + "'></td></tr>";
    }

}

function addOneRowP2() {

    var newRow = document.getElementById('player2').insertRow();

    var currentRow = document.getElementById("player2").rows.length;
    var roundNumber = currentRow - 1;
    var roundNumberCell = "<tr><td>R" + roundNumber + "</td></tr >";

    if (roundNumber >= 6) {
        alert("Max number of rounds reached");
    }

    if (roundNumber < 6) {

        var newCell = newRow.insertCell();
        newCell.innerHTML = roundNumberCell;

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><select name='StrategyP2'><option value='GainingMomentum'>Gaining momentum</option><option value='EyeForAnEye'>Eye for an eye</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='ThisOnesMine'>This one's mine</option><option value='HeadToHead'>Head-to-head</option><option value='Outmusclce'>Outmuscle</option><option value='AgainstTheOdds' selected>Against the odds</option><option value='BargeThroughEnemyLines'>Barge through enemy lines</option></select></td></tr>";

        var newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='objectivesNumberP2'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='victoryPointsP2'></td></tr>";
    }

    

}


function calculateVP() {

    var pointsPerObjective = Number(document.getElementById("pointsPerObjectiveId").value);
    var objectivesHeld = Number(document.getElementById("player1").rows[1].cells[2].children[0].value);
    var vitoryPoints = pointsPerObjective * objectivesHeld;
    document.getElementById("victoryPointsP1id1").value = vitoryPoints;
    
    
}

function clearSessionStorage() {
    sessionStorage.clear();
    
}


/***
function nieRozumiemThis() {


    console.log($("#pointsPerObjectiveId").attr("id"));
    console.log(this.id);
    console.log($(this).attr("id"));
    console.log($(this).get(0).id);
    console.log($(this)[0].id);


}
 */