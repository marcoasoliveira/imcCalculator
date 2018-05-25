let $ = document.querySelector.bind(document)
let create = document.createElement.bind(document)
let tNode = document.createTextNode.bind(document)
let data = new Date()

let todos = [
    {'id' : 0, 'task' : 'Estudar', 'prioridade' : '2', 'data' : `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}` },
    {'id' : 1, 'task' : 'Fazer Compras', 'prioridade' : '1', 'data' : `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}` },
    {'id' : 2, 'task' : 'Comprar Livros', 'prioridade' : '1', 'data' : `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}` },
    {'id' : 3, 'task' : 'Assistir ao Jogo', 'prioridade' : '0', 'data' : `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}` }
]

function todoTest(){
    
    let lista = $('.listaTarefas')
    lista.innerHTML = ''
    
    todos.map( item => {
        let divTarefa = create('div')
        divTarefa.classList.add('tarefa')
        
        let task = create('h3')
        let taskText = tNode(item.task)
        task.appendChild(taskText)

        let prioridade = create('p')
        let prioridadeText

        switch (item.prioridade) {
            case '0':
                divTarefa.classList.add('pbaixa')
                prioridadeText= tNode('Baixa')                
                break;
            
            case '1':
                divTarefa.classList.add('pnormal')
                prioridadeText = tNode('Normal')                
                break;
            
            case '2':
                divTarefa.classList.add('palta')
                prioridadeText = tNode('Alta')                
                break;
        
            default:
                console.log('Valor incorreto')
                break;
        }
        
        prioridade.appendChild(prioridadeText)

        let data = create('p')
        let dataText = tNode(item.data)
        data.appendChild(dataText)

        let btn = create('button')
        let btnText = tNode('Apagar')
        btn.classList.add('btn-remove')
        btn.setAttribute('onClick', `removeTodo(${item.id})`)
        btn.appendChild(btnText)

        divTarefa.appendChild(task)
        divTarefa.appendChild(prioridade)
        divTarefa.appendChild(data)
        divTarefa.appendChild(btn)

        lista.appendChild(divTarefa)

    });

}

function adiciona(event){
    event.preventDefault();
    
    todos.push(novoTodo())
    todoTest()
}


todoTest()