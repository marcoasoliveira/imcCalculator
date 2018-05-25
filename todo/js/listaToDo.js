function novoTodo(){
    let task = $('#tarefa')
    let prioridade = $('#prioridade')
    let id = Math.floor(Math.pow((Math.random()*1000), 3))
    let data = new Date()

    let todo = {'id': id, 'task' : task.value, 'prioridade' : prioridade.value, 'data' : `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}` }

    return todo;
    
}

function removeTodo(id){
    console.log('apaga o item ' + id)

    todos = todos.filter( item => item.id !== id)

    todoTest()
}