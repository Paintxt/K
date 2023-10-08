
function askQuestion() {
  var question = document.getElementById("question").value;
  var answer = document.getElementById("answer");

  if (question.trim() !== "") {
    answer.innerHTML = "Buscando la respuesta...";

    // Consulta a Google, Wikipedia u otras fuentes de información
    // y muestra la respuesta en el elemento 'answer'

    // Ejemplo para buscar en Google
    var googleUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(question);
    var result =
      '<a href="' +
      googleUrl +
      '" target="_blank">Haz clic aquí</a> para ver la respuesta en Google.';
    answer.innerHTML = result;
  }
}
