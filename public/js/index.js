window.addEventListener("load", function () {
  console.log("index succes");

  let main = document.querySelector("main");
  let h2 = document.querySelector("h2");
  let a = document.querySelector("a");
  let p = document.querySelectorAll("p");

  let name = prompt("ingrese su nombre");

  if (name) {
    document.querySelector(".subtitulo").innerText += " " + name;
  } else {
    document.querySelector(".subtitulo").innerText += " invitado";
  }
  h2.style.fontFamily = "uppercase";

  a.style.color = "#E51B3E";

  let darkMode = confirm("¿desea colocar un fondo de pantalla?");

  if (darkMode) {
    this.document.querySelector("body").classList.add("fondo");
  }

  for (let i = 0; i < p.length; i++) {
    if (i % 2 == 0) {
      p[i].classList.add("destacadoPar");
    } else {
      p[i].classList.add("destacadoImpar");
    }
  }

  document.querySelector(".container").style.display = "block";
});
