addEventListener('load', function(){

    console.log("movies success");

    let mvBody = document.querySelector("body");
    let mvH1 = document.querySelector("h1");

    let dark = confirm("¿desea el modo oscuro?");

    if(dark){
        document.querySelector("body").style.backgroundColor = "#7f7f7f"
        mvBody.classList.add("fondoMoviesList");
    }

    mvH1.innerHTML = "LISTADO DE PELICULAS"
    mvH1.style.color = "white";
    mvH1.style.backgroundColor = "teal"
    mvH1.style.padding = "20px"

})