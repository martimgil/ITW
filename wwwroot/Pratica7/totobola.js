function validate(){
    var jogo1 = validateGame1();
}

function validteGame1() {
    game1 = document.getElementByName("Jogo1_1");
    count = 0
    game1.forEach(element => {
        if (element.type == "checkbox" && element.checked) {
            count++;
        }
    });
    if (count===0){
        return false;
    }
    return true;
}




