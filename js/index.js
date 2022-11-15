const btnAlle = document.getElementById("alle")

const overzicht = document.getElementById("overzicht")

btnAlle.addEventListener('click', function (e){
    overzicht.classList.add("visible")
    overzicht.classList.remove("invisible")
})
