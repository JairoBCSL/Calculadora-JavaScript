var numero1, numero2, comando;

function comando(comando) {
  var ultimo = document
    .getElementById("tela")
    .value.charAt(document.getElementById("tela").value.length - 1);
  switch (comando) {
    case "limpar": {
      numero1 = null;
      numero2 = null;
      document.getElementById("tela").value = null;
      break;
    }
    case "parenteses": {
      var abre = 0;
      for (let c of document.getElementById("tela").value) {
        if (c == "(") abre++;
        else if (c == ")") abre--;
      }
      if (abre) document.getElementById("tela").value += ")";
      break;
    }
    case "porcentagem": {
      if (ultimo == ".") {
        document.getElementById("tela").value += 0;
        document.getElementById("tela").value =
          0 + document.getElementById("tela").value;
      }

      document.getElementById("tela").value /= 100;
      break;
    }
    case "dividir": {
      console.log(ultimo.charCodeAt());
      if (48 <= ultimo.charCodeAt() && ultimo.charCodeAt() <= 57) {
        document.getElementById("tela").value += "/";
      }
      break;
    }
    case "multiplicar": {
      console.log(ultimo.charCodeAt());
      if (48 <= ultimo.charCodeAt() && ultimo.charCodeAt() <= 57) {
        document.getElementById("tela").value += "*";
      }
      break;
    }
    case "subtrair": {
      console.log(ultimo.charCodeAt());
      if (48 <= ultimo.charCodeAt() && ultimo.charCodeAt() <= 57) {
        document.getElementById("tela").value += "-";
      }
      break;
    }
    case "somar": {
      console.log(ultimo.charCodeAt());
      if (48 <= ultimo.charCodeAt() && ultimo.charCodeAt() <= 57) {
        document.getElementById("tela").value += "+";
      }
      break;
    }
    case "igual": {
      if (48 <= ultimo.charCodeAt() && ultimo.charCodeAt() <= 57) {
        document.getElementById("tela").value = eval(
          document.getElementById("tela").value
        );
      }
      break;
    }
  }
}

function numero(numero) {
  if (!(numero == "." && document.getElementById("tela").value.includes("."))) {
    document.getElementById("tela").value += numero;
  }
}
