document.querySelector('#addItem').onclick = function(){
    if(document.querySelector('#enterItem input').value.length == 0){
        alert("Please enter a task");
    } else{
        document.querySelector('#listItems').innerHTML +=
        `
            <div class="task">
                <span id="taskname">${document.querySelector('#enterItem input').value}</span>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
    }
    var current_tasks = document.querySelectorAll(".delete");
    //parentNode of delete class is task
    for(var i = 0; i < current_tasks.length; i++){
        current_tasks[i].onclick = function() {
            this.parentNode.remove();
        }
    }

    var tasks = document.querySelectorAll(".task");
    for(var i = 0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    document.querySelector('#enterItem input').value = "";
}