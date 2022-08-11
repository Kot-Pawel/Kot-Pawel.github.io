function saveRollProbability() {
    var rend = document.getElementById("rend").value;
    var targetSave = document.getElementById("targetSave").value;
    var saveRollProbability = (6 - (Number(targetSave) + Number(rend)) + 1) / 6;
    //document.getElementById("saveRollProbability").innerHTML = "Save probability " + saveRollProbability;
    sessionStorage.setItem("saveRollProbability", saveRollProbability);
    wardSaveRollProbability();
}

function wardSaveRollProbability() {
    var targetWardSave = document.getElementById("targetWardSave").value;
    var wardSaveRollProbability = ((6 - Number(targetWardSave) + 1)) / 6;
    //document.getElementById("wardSaveRollProbability").innerHTML = "Ward save probability " + wardSaveRollProbability;
    sessionStorage.setItem("wardSaveRollProbability", wardSaveRollProbability);
    toHitProbability();
}


function toHitProbability() {
    var attackerToHit = document.getElementById("attackerToHit").value;
    var toHitProbability = (6 - Number(attackerToHit) + 1) / 6;
    //document.getElementById("toHitProbability").innerHTML = toHitProbability;
    sessionStorage.setItem("toHitProbability", toHitProbability); //save toHitProbability to session storage
    toWoundProbability();
}



function toWoundProbability() {
    var attackerToWound = document.getElementById("attackerToWound").value;
    var toWoundProbability = (6 - Number(attackerToWound) + 1) / 6;
    //document.getElementById("toWoundProbability").innerHTML = "To wound probability" + toWoundProbability;
    sessionStorage.setItem("toWoundProbability", toWoundProbability);
    hits();
}


function hits() {
    var numberOfAttacks = document.getElementById("numberOfAttacks").value;
    var toHitProbability = sessionStorage.getItem("toHitProbability"); //retrieve toHitProbability from session storage
    var hits = Math.round(Number(numberOfAttacks) * Number(toHitProbability));
    sessionStorage.setItem("hits", hits);
    document.getElementById("hits").value = hits;
    misses();
}


function misses() {
    var numberOfAttacks = document.getElementById("numberOfAttacks").value;
    var misses = Number(numberOfAttacks) - Number(sessionStorage.getItem("hits"));
    document.getElementById("misses").value = misses;
    mortal6hitdmg();
}

function mortal6hitdmg() {
    var mortal6HitIdS = document.getElementById("mortal6HitId");
    var mortal6HitIdv = mortal6HitIdS.options[mortal6HitIdS.selectedIndex].value;
    console.log(mortal6HitIdv);
    
    if (mortal6HitIdv == "yes")
    {
        var numberOfAttacks = document.getElementById("numberOfAttacks").value;
        var dmgPerAttack = document.getElementById("dmgPerAttack").value;
        var mortal6hitdmg = Math.round((Number(numberOfAttacks) * (1 / 6)) * Number(dmgPerAttack));
        document.getElementById("mortal6hitdmg").value = mortal6hitdmg;
        sessionStorage.setItem("mortal6hitdmg", mortal6hitdmg);
    }

    if (mortal6HitIdv == "no")
    {
        var mortal6hitdmg = 0;
        document.getElementById("mortal6hitdmg").value = mortal6hitdmg;
        sessionStorage.setItem("mortal6hitdmg", mortal6hitdmg);
    }
    mortal6wounds();
}


function mortal6wounds() {

    var mortal6wounds = 0;
    document.getElementById("mortal6wounds").value = mortal6wounds;
    sessionStorage.setItem("mortal6wounds", mortal6wounds);
    wounds();
}


function wounds() {

    var wounds = Math.round((Number(sessionStorage.getItem("hits")) - Number(sessionStorage.getItem("mortal6hitdmg"))) * Number(sessionStorage.getItem("toWoundProbability"))) - Number(sessionStorage.getItem("mortal6wounds"));
    document.getElementById("wounds").value = wounds;

}

