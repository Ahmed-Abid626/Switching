document.getElementById("btn").addEventListener("click", change);

function change() {
    var a = document.getElementById("image");
    a.classList.toggle("img");
    var b = document.getElementById("button");
    b.classList.toggle("remove");
} 