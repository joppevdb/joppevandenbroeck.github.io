const btnAlle = document.getElementById("alle")
const btnSoort = document.getElementById("soort")

const overzichtAlle = document.getElementById("overzichtAlle")
const overzichtSoort = document.getElementById("overzichtSoort")

btnAlle.addEventListener('click', function (e){
    overzichtAlle.classList.add("visible")
    overzichtSoort.classList.add("invisible")
    overzichtSoort.classList.remove("visible")
    overzichtAlle.classList.remove("invisible")
})

btnSoort.addEventListener('click', function (e){
    overzichtAlle.classList.add("invisible")
    overzichtSoort.classList.add("visible")
    overzichtSoort.classList.remove("invisible")
    overzichtAlle.classList.remove("visible")
})

