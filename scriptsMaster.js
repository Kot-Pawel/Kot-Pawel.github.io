function saveRollProbability() {
    var rend = document.getElementById("rend").value;
    var targetSave = document.getElementById("targetSave").value;
    var saveRollProbability = (6 - (Number(targetSave) + Number(rend)) + 1) / 6;
    sessionStorage.setItem("saveRollProbability", saveRollProbability); //session storage allows other functions to use this value
    wardSaveRollProbability();
}

function wardSaveRollProbability() {
    var targetWardSave = document.getElementById("targetWardSave").value;
    var wardSaveRollProbability = ((6 - Number(targetWardSave) + 1)) / 6;
    sessionStorage.setItem("wardSaveRollProbability", wardSaveRollProbability);
    toHitProbability();
}


function toHitProbability() {
    var attackerToHit = document.getElementById("attackerToHit").value;
    var toHitProbability = (6 - Number(attackerToHit) + 1) / 6;
    sessionStorage.setItem("toHitProbability", toHitProbability); 
    toWoundProbability();
}



function toWoundProbability() {
    var attackerToWound = document.getElementById("attackerToWound").value;
    var toWoundProbability = (6 - Number(attackerToWound) + 1) / 6;
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
    var mortal6HitIdS = document.getElementById("mortal6HitId"); //first you need a var to get all data of a dropdown input
    var mortal6HitIdv = mortal6HitIdS.options[mortal6HitIdS.selectedIndex].value; //then you need a var to get selected value out of that dropdown
    
    
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
    var mortal6WoundIdS = document.getElementById("mortal6WoundId");
    var mortal6WoundIdv = mortal6WoundIdS.options[mortal6WoundIdS.selectedIndex].value;

    if (mortal6WoundIdv == "yes")
    {
        var mortal6wounds = Math.Round((Number(sessionStorage.getItem("hits")) - Number(sessionStorage.getItem("mortal6hitdmg"))) * Number(1/6));
    }

    if (mortal6WoundIdv == "no")
    {
        var mortal6wounds = 0;
    }

    document.getElementById("mortal6wounds").value = mortal6wounds;
    sessionStorage.setItem("mortal6wounds", mortal6wounds);

    wounds();

}

function wounds() {
    mortal6WoundContinuesId
    var wounds = Math.round((Number(sessionStorage.getItem("hits")) - Number(sessionStorage.getItem("mortal6hitdmg"))) * Number(sessionStorage.getItem("toWoundProbability"))) - Number(sessionStorage.getItem("mortal6wounds"));
    document.getElementById("wounds").value = wounds;
    sessionStorage.setItem("wounds", wounds);
    mortal6WoundsSeqCont();
}

function mortal6WoundsSeqCont() {
    var mortal6WoundContinuesIdS = document.getElementById("mortal6WoundContinuesId");
    var mortal6WoundContinuesIdv = mortal6WoundContinuesIdS.options[mortal6WoundContinuesIdS.selectedIndex].value;

    if (mortal6WoundContinuesIdv=="yes")  {

        var mortal6WoundsSeqCont = Math.round((Number(sessionStorage.getItem("hits")) - Number(sessionStorage.getItem("mortal6hitdmg"))) * Number(1 / 6));

    }

    if (mortal6WoundContinuesIdv == "no") {

        var mortal6WoundsSeqCont = 0;

    }

    document.getElementById("mortal6WoundsSeqCont").value = mortal6WoundsSeqCont;
    sessionStorage.setItem("mortal6WoundsSeqCont", mortal6WoundsSeqCont);

    saved();
}


function saved() {

    var saved = Math.round((Number(sessionStorage.getItem("wounds")) - Number(sessionStorage.getItem("mortal6wounds"))) * Number(sessionStorage.getItem("saveRollProbability")));
    document.getElementById("saved").value = saved;
    sessionStorage.setItem("saved", saved);
    dmgOutput()
}

function dmgOutput() {

    var dmg = document.getElementById("dmgPerAttack").value;
    var wounds = Number(sessionStorage.getItem("wounds"));
    var saved = Number(sessionStorage.getItem("saved"));
    var mortal6hitdmg = Number(sessionStorage.getItem("mortal6hitdmg"));
    var mortal6wounds = Number(sessionStorage.getItem("mortal6wounds"));
    var mortal6WoundsSeqCont = Number(sessionStorage.getItem("savemortal6WoundsSeqContd"));

    var dmgOutput = dmg * (wounds * saved) + mortal6hitdmg + mortal6wounds + mortal6WoundsSeqCont;
    document.getElementById("dmgOutput").value = dmgOutput;
    sessionStorage.setItem("dmgOutput", dmgOutput);

    wardSaved()
}

function wardSaved() {

    var targetWardSave = document.getElementById("targetWardSave").value;

    if (targetWardSave == 7) {
        var wardSaved = 0;
    }

    if (targetWardSave != 7) {
        var wardSaved = Math.round(Number(sessionStorage.getItem("dmgOutput")) * Number(sessionStorage.getItem("wardSaveRollProbability")));
    }

    document.getElementById("wardSaved").value = wardSaved;
    sessionStorage.setItem("wardSaved", wardSaved);

    dmgInflicted();
}

function dmgInflicted() {

    var dmgInflicted = Number(sessionStorage.getItem("dmgOutput")) - Number(sessionStorage.getItem("wardSaved"));
    document.getElementById("dmgInflicted").value = dmgInflicted;
    
}