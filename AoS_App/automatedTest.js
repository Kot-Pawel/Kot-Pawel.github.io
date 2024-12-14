function startTestFor123Attacks() {
    inputTestDataIntoVariablesFor123Atacks();
    saveRollProbability();
    testHits();
}

function testHits() {
   
    var hits = document.getElementById("hits").value;
    var testName = "Test for *hits function* with 123 attacks";
    sessionStorage.setItem("testName", testName);
    
    if (hits == 62) {
        var testStatus = "green";
        sessionStorage.setItem("testStatus", testStatus);
        testMisses();
    }

    if (hits != 62) {
        var testStatus = "red";
        sessionStorage.setItem("testStatus", testStatus);
        checkTests();
    }
    
}

function testMisses() {

    var misses = document.getElementById("misses").value;
    var testName = "Test for *misses function* with 123 attacks";
    sessionStorage.setItem("testName", testName);

    if (misses == 61) {
        var testStatus = "green";
        sessionStorage.setItem("testStatus", testStatus);
        //run next test
        checkTests(); //remove after adding next test
     }

    if (misses != 61) {
        var testStatus = "red";
        sessionStorage.setItem("testStatus", testStatus);
        checkTests();
    }

}

function checkTests() {

    //ale mnie wnerwia takie wykorzystanie zmiennych globalnych, serio nie ma innej opcji?? o.O
    var testName = sessionStorage.getItem("testName");
    var testStatus = sessionStorage.getItem("testStatus");

    if (testStatus == "red") {
        alert(testName + " " + testStatus);
    }

    if (testStatus == "green") {
        alert("All tests are green");
    }
    

}

function inputTestDataIntoVariablesFor123Atacks() {

    document.getElementById("numberOfAttacks").value = 123;
    document.getElementById("dmgPerAttack").value = 2;
    document.getElementById("rend").value = 1;
    document.getElementById("targetSave").value = 3;
    document.getElementById("targetWardSave").value = 7;
    document.getElementById("attackerToHit").value = 4;
    document.getElementById("mortal6HitId").value = "no";
    document.getElementById("attackerToWound").value = 4;
    document.getElementById("mortal6WoundId").value = "no";
    document.getElementById("mortal6WoundContinuesId").value = "no";

}