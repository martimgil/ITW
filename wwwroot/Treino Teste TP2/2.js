function validate(){
    var retVal = true;
    retVal1 = validateName();
    retVal2 = validateMorada();
    retVal3 = validateEmail();
    retVal4 = validateLocal();


    return retVal1 && retVal2 && retVal3 && retVal4;

}
function validateNome(){
    nome = $("#nome").val();
    if(10<nome.length<100){
        $("#NameError").classList.remove("d-none");
        return false;
    } else{
        if (!$("#NameError").classList.contains("d-none")){
            $("#NameError").classList.add("d-none");
        }
        return true;
    }
};
function validateMorada(){
    morada = $("#morada").val().trim().split(" ");
    if(morada.length<3){
        $("#MoradaError").classList.remove("d-none");
        return false;
    } else{
        if (!$("#MoradaError").classList.contains("d-none")){
            $("#MoradaError").classList.add("d-none");
        }
        return true;
    }
};

function validateEmail(){
    email = $("#email").val();
    if(email.indexOf("@") == -1){
        $("#EmailError").classList.remove("d-none");
        return false;
    } else{
        if (!$("#EmailError").classList.contains("d-none")){
            $("#EmailError").classList.add("d-none");
        }
        return true;
    }
};

function validateLocal(){
    local = querySelectorAll("input[name='local']:checked");
    if (local <2){
        $("#LocalError").classList.remove("d-none");
        return false;
    }
    else{
        if (!$("#LocalError").classList.contains("d-none")){
            $("#LocalError").classList.add("d-none");
        }
        return true;
    }

};


$(document).ready(function(){
    $('#personDataForm').bootstrapValidator();

});