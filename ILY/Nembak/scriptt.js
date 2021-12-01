var nama = prompt("Coba masukin nama nya");

alert("Hai " + nama + " cantik");

var ulangi = false;

while ( ulangi === false ) {
    ulangi = confirm("Apakah kamu sayang ama Yuna? (Ok = iya)");
}
window.location = "index.html"