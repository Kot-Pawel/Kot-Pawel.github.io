function addOneRowP1() {

        var newRow = document.getElementById('player1').insertRow();

        var currentRow = document.getElementById("player1").rows.length;
        var roundNumberP1 = currentRow - 1;
        var roundNumberCell = "<tr><td>R" + roundNumberP1 + "</td></tr >";

    if (roundNumberP1 >= 6) {
        alert("Max number of rounds reached");
    }

    if (roundNumberP1 < 6) {

        var newCell = newRow.insertCell();
        newCell.innerHTML = roundNumberCell;

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><select name='StrategyP1'><option value='GainingMomentum'>Gaining momentum</option><option value='EyeForAnEye'>Eye for an eye</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='ThisOnesMine'>This one's mine</option><option value='HeadToHead'>Head-to-head</option><option value='Outmusclce'>Outmuscle</option><option value='AgainstTheOdds' selected>Against the odds</option><option value='BargeThroughEnemyLines'>Barge through enemy lines</option></select></td></tr>";

        var newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='objectivesNumberP1' id='objectivesNumberP1Id" + roundNumberP1 + "' onchange='calculateVP_Player1()'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='victoryPointsP1' id='victoryPointsP1id" + roundNumberP1 + "'></td></tr>";

        sessionStorage.setItem("roundNumberP1", roundNumberP1);
        
    }

}

function addOneRowP2() {

    var newRow = document.getElementById('player2').insertRow();

    var currentRow = document.getElementById("player2").rows.length;
    var roundNumberP2 = currentRow - 1;
    var roundNumberCell = "<tr><td>R" + roundNumberP2 + "</td></tr >";

    if (roundNumberP2 >= 6) {
        alert("Max number of rounds reached");
    }

    if (roundNumberP2 < 6) {

        var newCell = newRow.insertCell();
        newCell.innerHTML = roundNumberCell;

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><select name='StrategyP2'><option value='GainingMomentum'>Gaining momentum</option><option value='EyeForAnEye'>Eye for an eye</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='ThisOnesMine'>This one's mine</option><option value='HeadToHead'>Head-to-head</option><option value='Outmusclce'>Outmuscle</option><option value='AgainstTheOdds' selected>Against the odds</option><option value='BargeThroughEnemyLines'>Barge through enemy lines</option></select></td></tr>";

        var newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='objectivesNumberP2' id='objectivesNumberP2Id" + roundNumberP2 + "' onchange='calculateVP_Player2()'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML = "<tr><td><input type='number' name='victoryPointsP2' id='victoryPointsP2id" + roundNumberP2 + "'></td></tr>";

        sessionStorage.setItem("roundNumberP2", roundNumberP2);
    }
       

}

function calculateVP_Player1() {

    var roundNumberP1 = Number(sessionStorage.getItem("roundNumberP1"));
    console.log(roundNumberP1);

    var pointsPerObjective = Number(document.getElementById("pointsPerObjectiveId").value);

    if (roundNumberP1 > 0) {

        var objectivesHeld = Number(document.getElementById("player1").rows[1].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP1id1").value = victoryPoints;

    }

    if (roundNumberP1 > 1) {
             
        var objectivesHeld = Number(document.getElementById("player1").rows[2].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP1id2").value = victoryPoints;

    }

    if (roundNumberP1 > 2) {

        var objectivesHeld = Number(document.getElementById("player1").rows[3].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP1id3").value = victoryPoints;

    }

    if (roundNumberP1 > 3) {

        var objectivesHeld = Number(document.getElementById("player1").rows[4].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP1id4").value = victoryPoints;

    }

    if (roundNumberP1 > 4) {

        var objectivesHeld = Number(document.getElementById("player1").rows[5].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP1id5").value = victoryPoints;

    }
}

function calculateVP_Player2() {

    var roundNumberP2 = Number(sessionStorage.getItem("roundNumberP2"));
    console.log(roundNumberP2);

    var pointsPerObjective = Number(document.getElementById("pointsPerObjectiveId").value);

    if (roundNumberP2 > 0) {

        var objectivesHeld = Number(document.getElementById("player2").rows[1].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP2id1").value = victoryPoints;

    }

    if (roundNumberP2 > 1) {

        var objectivesHeld = Number(document.getElementById("player2").rows[2].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP2id2").value = victoryPoints;

    }

    if (roundNumberP2 > 2) {

        var objectivesHeld = Number(document.getElementById("player2").rows[3].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP2id3").value = victoryPoints;

    }

    if (roundNumberP2 > 3) {

        var objectivesHeld = Number(document.getElementById("player2").rows[4].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP2id4").value = victoryPoints;

    }

    if (roundNumberP2 > 4) {

        var objectivesHeld = Number(document.getElementById("player2").rows[5].cells[2].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        document.getElementById("victoryPointsP2id5").value = victoryPoints;

    }
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