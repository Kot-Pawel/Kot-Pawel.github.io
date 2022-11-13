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