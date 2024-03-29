function setRoundNumber(playerContext) {

    var roundNumber = Number(document.getElementById(playerContext).rows.length) - 1;
    if (playerContext == "player1") {
        sessionStorage.setItem("roundNumberP1", roundNumber);
        localStorage.setItem("roundNumberP1", roundNumber);
    }
    if (playerContext == "player2") {
        sessionStorage.setItem("roundNumberP2", roundNumber);
        localStorage.setItem("roundNumberP2", roundNumber);
    }

    

}

function tryAddingRow(playerContext) {

    var roundNumber = document.getElementById(playerContext).rows.length; //gets round number from table length

    if (roundNumber >= 6) {
        maxNumberOfRows();
    }

    if (roundNumber < 6) {
        addOneRow(roundNumber, playerContext);
    }
    
}

function addOneRow(roundNumber, playerContext) {

    var newRow = document.getElementById(playerContext).insertRow();
    
    if (playerContext == "player1") { var playerContextShort = "P1"; }
    if (playerContext == "player2") { var playerContextShort = "P2"; }

    var roundNumberCell = "<tr><td class='inputValue'>R" + roundNumber + "</td></tr>";
    var dropdown = "<select name='Strategy" + playerContextShort + "' id='strategy" + playerContextShort + "Id" + roundNumber + "' class='inputValue'><option value='AMatterOfHonour'>A matter of honour</option><option value='EyeForAnEye'>Eye for an eye</option><option value='CunningManoeuvre'>Cunning Manoeuvre</option><option value='DesecrateTheirLands'>Desecrate their lands</option><option value='GainingMomentum'>Gaining momentum</option><option value='LeadTheAssault'>Lead the asault</option><option value='ThisOnesMine' selected=''>This one's mine</option><option value='UnitedOffence'>United Offence</option><option value='Faction'>Faction strategy</option></select>";

    var newCell = newRow.insertCell();
    newCell.innerHTML = roundNumberCell; //contains td and tr in var above

    newCell = newRow.insertCell();
    newCell.innerHTML = "<tr><td>" + dropdown + "</td></tr>";

    newCell = newRow.insertCell();
    newCell.innerHTML = "<tr><td><input type='checkbox' id='strategyDone" + playerContextShort + "Id" + roundNumber + "' onchange='calculateVP_" + playerContext + "()' class='inputValue'><tr><td>";

    newCell = newRow.insertCell();
    newCell.innerHTML = "<tr><td><input type='number' name='objectivesNumber" + playerContextShort + "' id='objectivesNumber" + playerContextShort + "Id" + roundNumber + "'" + "onchange='calculateVP_" + playerContext + "()' class='inputValue'></td></tr>"; 

    newCell = newRow.insertCell();
    newCell.innerHTML = "<tr><td><input type='number' name='victoryPoints" + playerContextShort + "' id='victoryPoints" + playerContextShort + "id" + roundNumber + "' class='inputValue'></td></tr>";

    document.getElementById(playerContext).rows[roundNumber].classList.add("data");

    setRoundNumber(playerContext);
    
    
}

function maxNumberOfRows() {
    alert("Max number of rounds reached");
}

function calculateVP_player1() {

    var isAutomaticCountOn = document.getElementById("automaticCount").checked;

    if (isAutomaticCountOn == true) {

    var roundNumberP1 = Number(document.getElementById("player1").rows.length) - 1;
    var pointsPerObjective = Number(document.getElementById("pointsPerObjectiveId").value);
    var totalScoreP1;
    console.log(roundNumberP1);

    if (roundNumberP1 > 0) {

        var objectivesHeld = Number(document.getElementById("player1").rows[1].cells[3].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        var isStrategyDone = document.getElementById("player1").rows[1].cells[2].children[0].checked;
        
        if (isStrategyDone == true) {
            var victoryPoints = victoryPoints + 2;
        }

        document.getElementById("victoryPointsP1id1").value = victoryPoints;
        totalScoreP1 = victoryPoints;
        
    }

    if (roundNumberP1 > 1) {
             
        var objectivesHeld = Number(document.getElementById("player1").rows[2].cells[3].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        var isStrategyDone = document.getElementById("player1").rows[2].cells[2].children[0].checked;

        if (isStrategyDone == true) {
            var victoryPoints = victoryPoints + 2;
        }

        document.getElementById("victoryPointsP1id2").value = victoryPoints;
        totalScoreP1 = totalScoreP1 + victoryPoints;

    }

    if (roundNumberP1 > 2) {

        var objectivesHeld = Number(document.getElementById("player1").rows[3].cells[3].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        var isStrategyDone = document.getElementById("player1").rows[3].cells[2].children[0].checked;

        if (isStrategyDone == true) {
            var victoryPoints = victoryPoints + 2;
        }

        document.getElementById("victoryPointsP1id3").value = victoryPoints;
        totalScoreP1 = totalScoreP1 + victoryPoints;

    }

    if (roundNumberP1 > 3) {

        var objectivesHeld = Number(document.getElementById("player1").rows[4].cells[3].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        var isStrategyDone = document.getElementById("player1").rows[4].cells[2].children[0].checked;

        if (isStrategyDone == true) {
            var victoryPoints = victoryPoints + 2;
        }

        document.getElementById("victoryPointsP1id4").value = victoryPoints;
        totalScoreP1 = totalScoreP1 + victoryPoints;

    }

    if (roundNumberP1 > 4) {

        var objectivesHeld = Number(document.getElementById("player1").rows[5].cells[3].children[0].value);
        var victoryPoints = pointsPerObjective * objectivesHeld;
        var isStrategyDone = document.getElementById("player1").rows[5].cells[2].children[0].checked;

        if (isStrategyDone == true) {
            var victoryPoints = victoryPoints + 2;
        }

        document.getElementById("victoryPointsP1id5").value = victoryPoints;
        totalScoreP1 = totalScoreP1 + victoryPoints;

    }

    var totalScoreP1Text = "Total score " + totalScoreP1;
    document.getElementById("totalScoreP1").innerHTML = totalScoreP1Text;
    localStorage.setItem("totalScoreP1", totalScoreP1Text);
    }
}

function calculateVP_player2() {

    var isAutomaticCountOn = document.getElementById("automaticCount").checked;

    if (isAutomaticCountOn == true) {

        var roundNumberP2 = Number(document.getElementById("player2").rows.length) - 1;
        var pointsPerObjective = Number(document.getElementById("pointsPerObjectiveId").value);
        var totalScoreP2;


        if (roundNumberP2 > 0) {

            var objectivesHeld = Number(document.getElementById("player2").rows[1].cells[3].children[0].value);
            var victoryPoints = pointsPerObjective * objectivesHeld;
            var isStrategyDone = document.getElementById("player2").rows[1].cells[2].children[0].checked;

            if (isStrategyDone == true) {
                var victoryPoints = victoryPoints + 2;
            }

            document.getElementById("victoryPointsP2id1").value = victoryPoints;


            totalScoreP2 = victoryPoints;

        }

        if (roundNumberP2 > 1) {

            var objectivesHeld = Number(document.getElementById("player2").rows[2].cells[3].children[0].value);
            var victoryPoints = pointsPerObjective * objectivesHeld;
            var isStrategyDone = document.getElementById("player2").rows[2].cells[2].children[0].checked;

            if (isStrategyDone == true) {
                var victoryPoints = victoryPoints + 2;
            }

            document.getElementById("victoryPointsP2id2").value = victoryPoints;
            totalScoreP2 = totalScoreP2 + victoryPoints;

        }

        if (roundNumberP2 > 2) {

            var objectivesHeld = Number(document.getElementById("player2").rows[3].cells[3].children[0].value);
            var victoryPoints = pointsPerObjective * objectivesHeld;
            var isStrategyDone = document.getElementById("player2").rows[3].cells[2].children[0].checked;

            if (isStrategyDone == true) {
                var victoryPoints = victoryPoints + 2;
            }

            document.getElementById("victoryPointsP2id3").value = victoryPoints;
            totalScoreP2 = totalScoreP2 + victoryPoints;

        }

        if (roundNumberP2 > 3) {

            var objectivesHeld = Number(document.getElementById("player2").rows[4].cells[3].children[0].value);
            var victoryPoints = pointsPerObjective * objectivesHeld;
            var isStrategyDone = document.getElementById("player2").rows[4].cells[2].children[0].checked;

            if (isStrategyDone == true) {
                var victoryPoints = victoryPoints + 2;
            }

            document.getElementById("victoryPointsP2id4").value = victoryPoints;
            totalScoreP2 = totalScoreP2 + victoryPoints;

        }

        if (roundNumberP2 > 4) {

            var objectivesHeld = Number(document.getElementById("player2").rows[5].cells[3].children[0].value);
            var victoryPoints = pointsPerObjective * objectivesHeld;
            var isStrategyDone = document.getElementById("player2").rows[5].cells[2].children[0].checked;

            if (isStrategyDone == true) {
                var victoryPoints = victoryPoints + 2;
            }

            document.getElementById("victoryPointsP2id5").value = victoryPoints;
            totalScoreP2 = totalScoreP2 + victoryPoints;

        }

        var totalScoreP2Text = "Total score " + totalScoreP2;
        document.getElementById("totalScoreP2").innerHTML = totalScoreP2Text;
        localStorage.setItem("totalScoreP2", totalScoreP2Text);
    }
}

