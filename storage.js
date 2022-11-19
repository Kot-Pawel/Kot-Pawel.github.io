function getFromLocalStorage() {

    document.getElementById("pointsPerObjectiveId").value = localStorage.getItem('pointsPerObjective');
    document.getElementById("totalScoreP1").innerHTML = localStorage.getItem('totalScoreP1');
    document.getElementById("totalScoreP2").innerHTML = localStorage.getItem('totalScoreP2');
    var roundNumberP1 = Number(localStorage.getItem("roundNumberP1"));
    var roundNumberP2 = Number(localStorage.getItem("roundNumberP2"));
          
    if (roundNumberP1 > 0) {

        document.getElementById("strategyP1Id1").value = localStorage.getItem('strategyP1Id1');

        if (localStorage.getItem('strategyDoneP1Id1') == "true") {
            document.getElementById("strategyDoneP1Id1").checked = localStorage.getItem('strategyDoneP1Id1');
        }

        if (localStorage.getItem('strategyDoneP1Id1') != "true") {
            document.getElementById("strategyDoneP1Id1").value = localStorage.getItem('strategyDoneP1Id1');
        }
        
        document.getElementById("objectivesNumberP1Id1").value = localStorage.getItem('objectivesNumberP1Id1');
        document.getElementById("victoryPointsP1id1").value = localStorage.getItem('victoryPointsP1id1');

    }

    if (roundNumberP1 > 1) {

        addOneRow(2, "player1");
        document.getElementById("strategyP1Id2").value = localStorage.getItem('strategyP1Id2');
        if (localStorage.getItem('strategyDoneP1Id2') == "true") {
            document.getElementById("strategyDoneP1Id2").checked = localStorage.getItem('strategyDoneP1Id2');
        }

        if (localStorage.getItem('strategyDoneP1Id2') != "true") {
            document.getElementById("strategyDoneP1Id2").value = localStorage.getItem('strategyDoneP1Id2');
        }
        document.getElementById("objectivesNumberP1Id2").value = localStorage.getItem('objectivesNumberP1Id2');
        document.getElementById("victoryPointsP1id2").value = localStorage.getItem('victoryPointsP1id2');
        
    }
        
    if (roundNumberP1 > 2) {

        addOneRow(3, "player1");
        document.getElementById("strategyP1Id3").value = localStorage.getItem('strategyP1Id3');
        if (localStorage.getItem('strategyDoneP1Id3') == "true") {
            document.getElementById("strategyDoneP1Id3").checked = localStorage.getItem('strategyDoneP1Id3');
        }

        if (localStorage.getItem('strategyDoneP1Id3') != "true") {
            document.getElementById("strategyDoneP1Id3").value = localStorage.getItem('strategyDoneP1Id3');
        }
        document.getElementById("objectivesNumberP1Id3").value = localStorage.getItem('objectivesNumberP1Id3');
        document.getElementById("victoryPointsP1id3").value = localStorage.getItem('victoryPointsP1id3');
        
    }

    if (roundNumberP1 > 3) {

        addOneRow(4, "player1");
        document.getElementById("strategyP1Id4").value = localStorage.getItem('strategyP1Id4');
        if (localStorage.getItem('strategyDoneP1Id4') == "true") {
            document.getElementById("strategyDoneP1Id4").checked = localStorage.getItem('strategyDoneP1Id4');
        }

        if (localStorage.getItem('strategyDoneP1Id4') != "true") {
            document.getElementById("strategyDoneP1Id4").value = localStorage.getItem('strategyDoneP1Id4');
        }
        document.getElementById("objectivesNumberP1Id4").value = localStorage.getItem('objectivesNumberP1Id4');
        document.getElementById("victoryPointsP1id4").value = localStorage.getItem('victoryPointsP1Id4');

    }

    if (roundNumberP1 > 4) {

        addOneRow(5, "player1");
        document.getElementById("strategyP1Id5").value = localStorage.getItem('strategyP1Id5');
        if (localStorage.getItem('strategyDoneP1Id5') == "true") {
            document.getElementById("strategyDoneP1Id5").checked = localStorage.getItem('strategyDoneP1Id5');
        }

        if (localStorage.getItem('strategyDoneP1Id5') != "true") {
            document.getElementById("strategyDoneP1Id5").value = localStorage.getItem('strategyDoneP1Id5');
        }
        document.getElementById("objectivesNumberP1Id5").value = localStorage.getItem('objectivesNumberP1Id5');
        document.getElementById("victoryPointsP1id5").value = localStorage.getItem('victoryPointsP1Id5');

    }

    if (roundNumberP2 > 0) {

        document.getElementById("strategyP2Id1").value = localStorage.getItem('strategyP2Id1');

        if (localStorage.getItem('strategyDoneP2Id1') == "true") {
            document.getElementById("strategyDoneP2Id1").checked = localStorage.getItem('strategyDoneP2Id1');
        }

        if (localStorage.getItem('strategyDoneP2Id1') != "true") {
            document.getElementById("strategyDoneP2Id1").value = localStorage.getItem('strategyDoneP2Id1');
        }

        document.getElementById("objectivesNumberP2Id1").value = localStorage.getItem('objectivesNumberP2Id1');
        document.getElementById("victoryPointsP2id1").value = localStorage.getItem('victoryPointsP2id1');

    }

    if (roundNumberP2 > 1) {

        addOneRow(2, "player2");
        document.getElementById("strategyP2Id2").value = localStorage.getItem('strategyP2Id2');
        if (localStorage.getItem('strategyDoneP2Id2') == "true") {
            document.getElementById("strategyDoneP2Id2").checked = localStorage.getItem('strategyDoneP2Id2');
        }

        if (localStorage.getItem('strategyDoneP2Id2') != "true") {
            document.getElementById("strategyDoneP2Id2").value = localStorage.getItem('strategyDoneP2Id2');
        }
        document.getElementById("objectivesNumberP2Id2").value = localStorage.getItem('objectivesNumberP2Id2');
        document.getElementById("victoryPointsP2id2").value = localStorage.getItem('victoryPointsP2id2');

    }

    if (roundNumberP2 > 2) {

        addOneRow(3, "player2");
        document.getElementById("strategyP2Id3").value = localStorage.getItem('strategyP2Id3');
        if (localStorage.getItem('strategyDoneP2Id3') == "true") {
            document.getElementById("strategyDoneP2Id3").checked = localStorage.getItem('strategyDoneP2Id3');
        }

        if (localStorage.getItem('strategyDoneP2Id3') != "true") {
            document.getElementById("strategyDoneP2Id3").value = localStorage.getItem('strategyDoneP2Id3');
        }
        document.getElementById("objectivesNumberP2Id3").value = localStorage.getItem('objectivesNumberP2Id3');
        document.getElementById("victoryPointsP2id3").value = localStorage.getItem('victoryPointsP2id3');

    }

    if (roundNumberP2 > 3) {

        addOneRow(4, "player2");
        document.getElementById("strategyP2Id4").value = localStorage.getItem('strategyP2Id4');
        if (localStorage.getItem('strategyDoneP2Id4') == "true") {
            document.getElementById("strategyDoneP2Id4").checked = localStorage.getItem('strategyDoneP2Id4');
        }

        if (localStorage.getItem('strategyDoneP2Id4') != "true") {
            document.getElementById("strategyDoneP2Id4").value = localStorage.getItem('strategyDoneP2Id4');
        }
        document.getElementById("objectivesNumberP2Id4").value = localStorage.getItem('objectivesNumberP2Id4');
        document.getElementById("victoryPointsP2id4").value = localStorage.getItem('victoryPointsP2Id4');

    }

    if (roundNumberP2 > 4) {

        addOneRow(5, "player2");
        document.getElementById("strategyP2Id5").value = localStorage.getItem('strategyP2Id5');
        if (localStorage.getItem('strategyDoneP2Id5') == "true") {
            document.getElementById("strategyDoneP2Id5").checked = localStorage.getItem('strategyDoneP2Id5');
        }

        if (localStorage.getItem('strategyDoneP2Id5') != "true") {
            document.getElementById("strategyDoneP2Id5").value = localStorage.getItem('strategyDoneP2Id5');
        }
        document.getElementById("objectivesNumberP2Id5").value = localStorage.getItem('objectivesNumberP2Id5');
        document.getElementById("victoryPointsP2id5").value = localStorage.getItem('victoryPointsP2Id5');

    }
    
}


function saveRoundsToLocalStorage() {

    var roundNumberP1 = Number(sessionStorage.getItem("roundNumberP1"));
    var roundNumberP2 = Number(sessionStorage.getItem("roundNumberP2"));

    if (roundNumberP1 > 0) {

        localStorage.setItem("strategyP1Id1", (document.getElementById("strategyP1Id1").value));
        localStorage.setItem("strategyDoneP1Id1", document.getElementById("strategyDoneP1Id1").checked);
        localStorage.setItem("objectivesNumberP1Id1", document.getElementById("objectivesNumberP1Id1").value);
        localStorage.setItem("victoryPointsP1id1", document.getElementById("victoryPointsP1id1").value);

    }

    if (roundNumberP1 > 1) {

        localStorage.setItem("strategyP1Id2", (document.getElementById("strategyP1Id2").value));
        localStorage.setItem("strategyDoneP1Id2", document.getElementById("strategyDoneP1Id2").checked);
        localStorage.setItem("objectivesNumberP1Id2", document.getElementById("objectivesNumberP1Id2").value);
        localStorage.setItem("victoryPointsP1id2", document.getElementById("victoryPointsP1id2").value);

    }

    if (roundNumberP1 > 2) {

        localStorage.setItem("strategyP1Id3", (document.getElementById("strategyP1Id3").value));
        localStorage.setItem("strategyDoneP1Id3", document.getElementById("strategyDoneP1Id3").checked);
        localStorage.setItem("objectivesNumberP1Id3", document.getElementById("objectivesNumberP1Id3").value);
        localStorage.setItem("victoryPointsP1id3", document.getElementById("victoryPointsP1id3").value);

    }

    if (roundNumberP1 > 3) {

        localStorage.setItem("strategyP1Id4", (document.getElementById("strategyP1Id4").value));
        localStorage.setItem("strategyDoneP1Id4", document.getElementById("strategyDoneP1Id4").checked);
        localStorage.setItem("objectivesNumberP1Id4", document.getElementById("objectivesNumberP1Id4").value);
        localStorage.setItem("victoryPointsP1Id4", document.getElementById("victoryPointsP1id4").value);

    }

    if (roundNumberP1 > 4) {

        localStorage.setItem("strategyP1Id5", (document.getElementById("strategyP1Id5").value));
        localStorage.setItem("strategyDoneP1Id5", document.getElementById("strategyDoneP1Id5").checked);
        localStorage.setItem("objectivesNumberP1Id5", document.getElementById("objectivesNumberP1Id5").value);
        localStorage.setItem("victoryPointsP1Id5", document.getElementById("victoryPointsP1id5").value);

    }

    if (roundNumberP2 > 0) {

        localStorage.setItem("strategyP2Id1", (document.getElementById("strategyP2Id1").value));
        localStorage.setItem("strategyDoneP2Id1", document.getElementById("strategyDoneP2Id1").checked);
        localStorage.setItem("objectivesNumberP2Id1", document.getElementById("objectivesNumberP2Id1").value);
        localStorage.setItem("victoryPointsP2id1", document.getElementById("victoryPointsP2id1").value);

    }

    if (roundNumberP2 > 1) {

        localStorage.setItem("strategyP2Id2", (document.getElementById("strategyP2Id2").value));
        localStorage.setItem("strategyDoneP2Id2", document.getElementById("strategyDoneP2Id2").checked);
        localStorage.setItem("objectivesNumberP2Id2", document.getElementById("objectivesNumberP2Id2").value);
        localStorage.setItem("victoryPointsP2id2", document.getElementById("victoryPointsP2id2").value);

    }

    if (roundNumberP2 > 2) {

        localStorage.setItem("strategyP2Id3", (document.getElementById("strategyP2Id3").value));
        localStorage.setItem("strategyDoneP2Id3", document.getElementById("strategyDoneP2Id3").checked);
        localStorage.setItem("objectivesNumberP2Id3", document.getElementById("objectivesNumberP2Id3").value);
        localStorage.setItem("victoryPointsP2id3", document.getElementById("victoryPointsP2id3").value);

    }

    if (roundNumberP2 > 3) {

        localStorage.setItem("strategyP2Id4", (document.getElementById("strategyP2Id4").value));
        localStorage.setItem("strategyDoneP2Id4", document.getElementById("strategyDoneP2Id4").checked);
        localStorage.setItem("objectivesNumberP2Id4", document.getElementById("objectivesNumberP2Id4").value);
        localStorage.setItem("victoryPointsP2Id4", document.getElementById("victoryPointsP2id4").value);

    }

    if (roundNumberP2 > 4) {

        localStorage.setItem("strategyP2Id5", (document.getElementById("strategyP2Id5").value));
        localStorage.setItem("strategyDoneP2Id5", document.getElementById("strategyDoneP2Id5").checked);
        localStorage.setItem("objectivesNumberP2Id5", document.getElementById("objectivesNumberP2Id5").value);
        localStorage.setItem("victoryPointsP2Id5", document.getElementById("victoryPointsP2id5").value);

    }

}

function saveToLocalStorage(fieldId) {

    if (fieldId == "pointsPerObjective") {
        localStorage.setItem(fieldId, Number(document.getElementById("pointsPerObjectiveId").value));
    }
    
}

function clearData() {

    location.reload();
    localStorage.clear();
    sessionStorage.clear();

}