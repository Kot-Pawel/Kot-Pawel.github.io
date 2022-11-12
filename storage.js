function getFromLocalStorage() {

    var pointsPerObjective = localStorage.getItem('pointsPerObjective');
    
    document.getElementById("pointsPerObjectiveId").value = pointsPerObjective;

}

function saveToLocalStorage(fieldId) {

    if (fieldId == "pointsPerObjective") {
        localStorage.setItem(fieldId, Number(document.getElementById("pointsPerObjectiveId").value));
    }
    
}

function clearLocalStorage() {

    localStorage.clear();

}




function playerInfo(strategyId, strategyDoneP1Id1, objectivesNumberP1Id1, victoryPointsP1id1) {
    this.strategy = strategyId; 
    this.strategyDone = strategyDoneP1Id1; 
    this.obj = objectivesNumberP1Id1; 
    this.victory = victoryPointsP1id1; 
}


$(document).ready(function () {
    $('#saveID').click(function () {

        $("#dataTable").find('tbody')
            .append($('<tr>')
                .append($('<td>')
                    .text($('#strategyId').val()))
                .append($('<td>')
                    .text($('#strategyDoneP1Id1').val()))
                .append($('<td>')
                    .text($('#objectivesNumberP1Id1').val()))
                .append($('<td>')
                    .text($('#victoryPointsP1id1').val()))
            );

        $('#strategyId').val('');
        $('#strategyDoneP1Id1').val('');
        $('#objectivesNumberP1Id1').val('');
        $('#victoryPointsP1id1').val('');

        var arr = [];  

        $("#dataTable").find('tbody tr').each(function (index, item) {

            var strategyId = $(item).find('td').eq(0).text();
            var strategyDoneP1Id1 = "test";//$(item).find('td').eq(2).number();
            var objectivesNumberP1Id1 = $(item).find('td').eq(2).text();
            var victoryPointsP1id1 = $(item).find('td').eq(3).text();
            arr.push(new playerInfo(strategyId, strategyDoneP1Id1, objectivesNumberP1Id1, victoryPointsP1id1));
            
        });

        arr.push("test");
        localStorage.setItem('playerInfo', arr);
        console.log(localStorage.getItem('playerInfo'));

    });
});

