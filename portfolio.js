/* Open when someone clicks on the span element */
function openNav() {
    console.log("opennav");
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    console.log("closenav");
    document.getElementById("myNav").style.width = "0%";
}
