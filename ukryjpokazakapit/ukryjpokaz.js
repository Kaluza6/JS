document.getElementById("pokaz").onchange = function() {myFunction()}
function myFunction() {
    let a = document.getElementById("paragraf")
    a.style.display = "block"
}
document.getElementById("ukryj").onchange = function() {myFunction1()}
function myFunction1() {
    let b = document.getElementById("paragraf")
    b.style.display = "none"
}