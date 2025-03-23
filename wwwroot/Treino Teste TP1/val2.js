function validate(){
    var val = true;
    var val1 = validateNome();
    var val2 = validateMorada();
    var val3 = validateCurso()
    var val4 = validateVeiculos();
    var val5 = validateColor();

    return val1 & val2 & val3 & val4 & val5
}

function validateNome() {
    nome = document.getElementById("Nome").value;
    if (nome.length < 3) {
        document.getElementById("NameError").classList.remove("d-none");
        return false
    } else {
        if (!document.getElementById("NameError").classList.contains("d-none")) {
            document.getElementById("NameError").classList.add("d-none");

        }
        return true
    }

}

function  validateMorada(){
    morada = document.getElementById("Morada").value.trim().split((""));
    if (nome.length < 3) {
        document.getElementById("NameError").classList.remove("d-none");
        return false
    } else {
        if (!document.getElementById("NameError").classList.contains("d-none")) {
            document.getElementById("NameError").classList.add("d-none");
        }
        return true
    }
}

function  validateVeiculos(){
    veiculos = document.getElementById(("Vehicles"));
    count=0
    veiculos.forEach(element=>{
        if (element.type =="checkbox" && element.checked){
            count++;
        }

    })
}

function  validateCores(){
    cores = document.querySelectorAll('input=[name="color"]:checked');

    if (cores==0)
        ...
}