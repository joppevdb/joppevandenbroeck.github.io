const btnAlle = document.getElementById("alle")
const btnSoort = document.getElementById("soort")
const btnBrouwerij = document.getElementById("brouwerij")

const overzichtAlle = document.getElementById("overzichtAlle")
const overzichtSoort = document.getElementById("overzichtSoort")
const overzichtBrouwerij = document.getElementById("overzichtBrouwerij")

btnAlle.addEventListener('click', function (e){
    overzichtAlle.classList.add("visible")
    overzichtSoort.classList.add("invisible")
    overzichtBrouwerij.classList.add("invisible")

    overzichtAlle.classList.remove("invisible")
    overzichtSoort.classList.remove("visible")
    overzichtBrouwerij.classList.remove("visible")

})

btnSoort.addEventListener('click', function (e){
    overzichtAlle.classList.add("invisible")
    overzichtSoort.classList.add("visible")
    overzichtBrouwerij.classList.add("invisible")

    overzichtAlle.classList.remove("visible")
    overzichtSoort.classList.remove("invisible")
    overzichtBrouwerij.classList.remove("visible")

})

btnSoort.addEventListener('click', function (e){
    overzichtAlle.classList.add("invisible")
    overzichtSoort.classList.add("invisible")
    overzichtBrouwerij.classList.add("visible")

    overzichtAlle.classList.remove("visible")
    overzichtSoort.classList.remove("visible")
    overzichtBrouwerij.classList.remove("invisible")
})

