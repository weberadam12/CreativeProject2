document.getElementById("calculateSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const operation = document.getElementById("operationInput").value;
  if (operation === "")
    return;
  const expression = document.getElementById("expressionInput").value;
  if (expression === "")
    return;

  const url = "https://newton.now.sh/api/v2/" + operation + "/" + expression;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
        results += '<h2>The result is ' + json.result + "</h2>";
        document.getElementById("mathResults").innerHTML = results;
    });
});
