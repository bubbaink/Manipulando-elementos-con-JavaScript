addEventListener("load", function () {
  console.log("moviesAdd success");

  let mvH1A = document.querySelector("h1");
  let mvSectionA = document.querySelector("section");
  let mvArticleA = document.querySelector("article");

  mvH1A.innerHTML = "AGREGAR PELICULAS";
  mvH1A.classList.add("titulo");
  mvArticleA.classList.add("fondoTransparente");
  mvSectionA.classList.add("fondoCRUD");
});
