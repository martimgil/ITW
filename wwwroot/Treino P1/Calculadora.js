function calcular() {
    var op1 = parseFloat(document.getElementById("op1").value);
    var op2 = parseFloat(document.getElementById("op2").value);
    var op = document.getElementById("op").value;
    var v = 0;

    if (isNaN(op1) || (isNaN(op2) && op !== "!")) {
        v = "Entrada inválida";
    } else {
        if (op === "+") {
            v = op1 + op2;
        } else if (op === "-") {
            v = op1 - op2;
        } else if (op === "/") {
            v = op2 === 0 ? "Erro!" : op1 / op2;
        } else if (op === "%") {
            v = op2 === 0 ? "Erro!" : op1 % op2;
        } else if (op === "!") {
            v = 1;
            for (var i = 1; i <= op1; i++) {
                v *= i;
            }
        } else {
            v = "Operação inválida";
        }
    }

    document.getElementById("res").value = v;
}
