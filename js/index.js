const btnAlle = document.getElementById("alle")
const btnSoort = document.getElementById("soort")
const btnBrouwerij = document.getElementById("brouwerij")
const btnZoeken = document.getElementById("zoeken")

const overzichtAlle = document.getElementById("overzichtAlle")
const overzichtSoort = document.getElementById("overzichtSoort")
const zoekbalk = document.getElementById("zoekbalk")
const overzichtBrouwerij = document.getElementById("overzichtBrouwerij")

btnAlle.addEventListener('click', function (e){
    overzichtAlle.classList.add("visible")
    overzichtSoort.classList.add("invisible")
    zoekbalk.classList.add("invisible")

    overzichtAlle.classList.remove("invisible")
    overzichtSoort.classList.remove("visible")
    zoekbalk.classList.remove("visible")

})

btnSoort.addEventListener('click', function (e){
    overzichtAlle.classList.add("invisible")
    overzichtSoort.classList.add("visible")
    zoekbalk.classList.add("invisible")

    overzichtAlle.classList.remove("visible")
    overzichtSoort.classList.remove("invisible")
    zoekbalk.classList.remove("visible")

})

btnBrouwerij.addEventListener('click', function (e){
    overzichtAlle.classList.add("invisible")
    overzichtSoort.classList.add("invisible")
    zoekbalk.classList.add("visible")

    overzichtAlle.classList.remove("visible")
    overzichtSoort.classList.remove("visible")
    zoekbalk.classList.remove("invisible")
})

btnZoeken.addEventListener('click', function (e){
    overzichtBrouwerij.classList.add("visible")
    overzichtBrouwerij.classList.remove("invisible")

    const inputs = document.querySelector("#naam, #volume, #alcoholPercentage, #brouwerijIn, #soortIn, #land");

    inputs.forEach(input =>{
        input.value = "";
    });
})

