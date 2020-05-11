var formel = document.getElementById("indtast");
var over1 = document.getElementById("over");
var under1 = document.getElementById("fdn");
var endelig1 = document.getElementById("endelig");
var finale1 = document.getElementById("finale");
var finale3 = document.getElementById("finale2");

document.getElementById("submit--js").addEventListener("click", function(event) {
let kgMilk = document.getElementById("kgMilk--js").value;
let fatPercent = document.getElementById("fatPercent--js").value;
let skmFat = document.getElementById("skmFat--js").value;
let sFat = document.getElementById("sFat--js").value;
if (Math.round(fatPercent * 100) > Math.round(sFat * 100) || Math.round(fatPercent * 100) < Math.round(skmFat * 100)) {
    alert("Husk at den ønskede fedtprocent skal ligge mellem fedtprocenten for skummetmælk og sødmælk/fløde");
} else {
    function totalS() {
    return kgMilk * (fatPercent - skmFat) / (sFat - skmFat);
  };
  function totalSkm () {
    return kgMilk - totalS();
  };
    indtast.innerHTML += `Du skal bruge ${totalS().toFixed(2)} kg. sødmælk/fløde og 
    ${totalSkm().toFixed(2)} kg. skummetmælk`;
    document.getElementById("regnestykke").style.display = "block";
    document.getElementById("regnestykke2").style.display = "block";
    document.getElementById("igen").style.display = "block";
    document.getElementById("slet").style.display = "none";
    over.innerHTML +=`${kgMilk} x (${fatPercent} - ${skmFat})`;
    fdn.innerHTML += `(${sFat} - ${skmFat})`;
    endelig.innerHTML += `${totalS().toFixed(2)} kg.`
    finale.innerHTML += `${kgMilk} - ${totalS().toFixed(2)}`;
    finale2.innerHTML += `${totalSkm().toFixed(2)} kg.`
};

});


