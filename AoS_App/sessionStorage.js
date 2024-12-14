function store() {
    // (A) VARIABLES TO PASS
    var first = "Foo Bar",
        second = ["Hello", "World"];

    // (B) SAVE TO LOCAL STORAGE
    // (B1) FLAT STRING OR NUMBER
    // LOCALSTORAGE.SETITEM("KEY", "VALUE");
    localStorage.setItem("first", first);

    // (B2) ARRAY OR OBJECT
    // LOCAL STORAGE CANNOT STORE ARRAY AND OBJECTS
    // JSON ENCODE BEFORE STORING, CONVERT TO STRING
    localStorage.setItem("second", JSON.stringify(second));
    get();

}


function get() {
    // (A) GET FROM SESSION
    var first = localStorage.getItem("first"),
        second = JSON.parse(localStorage.getItem("second"));

    // (B) IT WORKS!
    // NOTE: LOCAL STORAGE IS PERSISTENT
    // WILL NOT BE DELETED UNLESS USER CLEARS BROWSER DATA OR MANUALLY CLEARED
    console.log(first);  // Foo Bar
    console.log(second); // ["Hello", "World"]
    alert(first);

    // (EXTRA) CLEAR LOCAL STORAGE
    // localStorage.removeItem("KEY");
    // localStorage.clear();
}