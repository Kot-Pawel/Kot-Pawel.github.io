function saveRollProbability(){
    var rend = document.getElementById("rend").value;
    var targetSave = document.getElementById("targetSave").value;
    //var int = Number(targetSave) + Number(rend);
    //var int = 6 - int;
    //var int = int + 1;
    //var int = int / 6;
    //var saveRollProbability = int;
    var saveRollProbability = (6 - (Number(targetSave) + Number(rend)) + 1) / 6;
    document.getElementById("saveRollProbability").innerHTML = "Save probability " + saveRollProbability;
    wardSaveRollProbability();
}

function wardSaveRollProbability() {
    var targetWardSave = document.getElementById("targetWardSave").value;
    var wardSaveRollProbability = ((6 - Number(targetWardSave) + 1)) / 6;
    document.getElementById("wardSaveRollProbability").innerHTML = "Ward save probability " + wardSaveRollProbability;
    toHitProbability();
}

function toHitProbability() {
    var attackerToHit = document.getElementById("attackerToHit").value;
    var toHitProbability = (6 - Number(attackerToHit) + 1) / 6;
    document.getElementById("toHitProbability").innerHTML = "To hit probability " + toHitProbability;
    toWoundProbability();
}

function toWoundProbability() {
    var attackerToWound = document.getElementById("attackerToWound").value;
    var toWoundProbability = (6 - Number(attackerToWound) + 1) / 6;
    document.getElementById("toWoundProbability").innerHTML = "To wound probability" + toWoundProbability;
}

function calculateDmg()
    {
    var numberOfAttacks = document.getElementById("numberOfAttacks").value;
    var dmgPerAttack = document.getElementById("dmgPerAttack").value;
    var calculated = numberOfAttacks * dmgPerAttack;
    document.getElementById("calculatedDmg").innerHTML = "Your total damage is: " + calculated;
}



