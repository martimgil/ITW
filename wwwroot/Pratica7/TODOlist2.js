function addtask(){
    var newtask = document.getElementById("newtask").value;

    if (newtask.length==0){
        alert("Por favor, indique uma tarefa!")
    }
    else{
        document.getElementById("tasks").innerHTML += '<div class="input-group mb-1">' + '<span class="form-control form-control-sm">' + newtask + '</span>' + '<button class="btn btn-danger btn-sm input-group-text"><i class="fa fa-trash-o"></i></button>'+
            '</div>';

    var current_task = document.querySelectorAll(".btn-danger");

    for(var i = 0; i<current_task.length; i++){
        current_task[i].onclick = function () {
            this.parentNode.remove();
        }
    }
    }
}