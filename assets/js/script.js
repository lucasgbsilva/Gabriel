function agendar() {

    // Obtendo o elemento do corpo da página
  
    var body = document.body;
  
    // Definindo o novo background
  
    body.style.background = "lightblue"; // Você pode usar qualquer cor válida aqui, como "blue", "#FF0000", "rgba(0, 255, 0, 0.5)", etc.
  
  }
  function mudarcor() {

    // Verifica a cor atual da div e alterna entre azul e vermelho

    if (minhaDiv.style.backgroundColor === "blue") {

      minhaDiv.style.transition = "background-color 1s";

       minhaDiv.style.backgroundColor = "red";

    } else {

      minhaDiv.style.transition = "background-color 1s";

      minhaDiv.style.backgroundColor = "blue";

    }

  }