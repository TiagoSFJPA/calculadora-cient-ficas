var display = document.getElementById("output");
var botoes = document.getElementsByClassName("botao");

Array.prototype.forEach.call(botoes, function(botao) {
  botao.addEventListener("click", function() {
    if (botao.textContent != "=" && botao.textContent != "C" && botao.textContent != "x" && botao.textContent != "÷" && botao.textContent != "sqrt" && botao.textContent != "sq" && botao.textContent != "%" && botao.textContent != "<=" && botao.textContent != "+/-" && botao.textContent != "sin" && botao.textContent != "cos" && botao.textContent != "tan" && botao.textContent != "log" && botao.textContent != "ln" && botao.textContent != "^" && botao.textContent != "n!" && botao.textContent != "π" && botao.textContent != "exp" && botao.textContent != "radiando" && botao.textContent != "graus") {
      display.value += botao.textContent;
    } else if (botao.textContent === "=") {
      igualA();
    } else if (botao.textContent === "C") {
      limpar();
    } else if (botao.textContent === "x") {
      multiplicar();
    } else if (botao.textContent === "÷") {
      divide();
    } else if (botao.textContent === "+/-") {
      maisMenos();
    } else if (botao.textContent === "<=") {
      apagar();
    } else if (botao.textContent === "%") {
      percentual();
    } else if (botao.textContent === "π") {
      pi();
    } else if (botao.textContent === "sq") {
      quadrado();
    } else if (botao.textContent === "sqrt") {
      raizQuadrada();
    } else if (botao.textContent === "sin") {
      sin();
    } else if (botao.textContent === "cos") {
      cos();
    } else if (botao.textContent === "tan") {
      tan();
    } else if (botao.textContent === "log") {
      log();
    } else if (botao.textContent === "ln") {
      ln();
    } else if (botao.textContent === "^") {
      exponencial();
    } else if (botao.textContent === "n!") {
      fatorial();
    } else if (botao.textContent === "exp") {
      exp();
    } else if (botao.textContent === "radiando") {
      radiando();
    } else if (botao.textContent === "graus") {
      graus();
    }
  });
});


function checkLength() {
  if (display.value.length >= 23) {
    display.value = "Erro de Sobrecarga";
  }
}

function erroSintaxe() {
  if (eval(display.value) == erroSintaxe) {
    display.value = "Erro de Sintaxe";
  }
}

function igualA() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponencial = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponencial + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    erroSintaxe();
  }
}

function limpar() {
  display.value = "";
}

function apagar() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiplicar() {
  display.value = display.value + "*";
}

function divide() {
  display.value = display.value + "/";
}

function maisMenos() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function fatorial() {
  var result = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var result = 1;
    for (var i = display.value; i > 0; i--) {
      result = result * i;
    }
    display.value = result;
  }
}

function pi() {
  
  display.value = (display.value * Math.PI);
}

function quadrado() {
  display.value = eval(display.value * display.value);
}

function raizQuadrada() {
  display.value = Math.sqrt(display.value);
}

function percentual() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponencial() {
  display.value = display.value + "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radiando() {
  display.value = display.value * (Math.PI / 180);
}

function graus() {
  display.value = display.value * (180 / Math.PI);
}