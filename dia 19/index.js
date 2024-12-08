    class todo{
        texto
        prioridade
        feito = false
            constructor(texto,prioridade){
                this.texto = texto
                this.prioridade = prioridade

            }
    }
    function CriarToDo(texto,prioridade, array){
        let objetoTodo = new todo(texto,prioridade)
        if (!array.some(x => x.texto == texto))
            array.push(objetoTodo)
        return objetoTodo
    }
    function AtualizarToDo(textoAntigo,Textonovo,array){
        atualizar = false
        array.forEach(todo => {
            if(todo.texto == textoAntigo) {
                todo.texto = Textonovo
                Atualizar =true
            }
        })
        return atualizar
    }
    function concluirToDo(texto,array){
        concluir = false
        array.forEach(todo =>{
            if(todo.texto == todo.texto){
                if (todo.feito)
                    todo.feito = false
                else {
                    todo.feito = true
                }
                concluir = true
            }
        })
        return concluir
    }
    function ExcluirToDo(texto,array){
        let index
        let removido = false
        array.forEach(texto => {
            if(todo.texto == texto){
                index = array.indexOf(todo)
                removido = true

            }
            
        })
        array.splice(index, 1)
        return removido
    }
    
    function PesquisarToDo(texto,array){
        let encontrado = false
        array.forEach(texto => {
            if(todo.texto.includes(texto)){
                encontrado = true
            } 
        })
      return encontrado
    }

    function OrdenarCrecente(array){
        array.sort((a,b) => a.prioridade - b.prioridade)
        return array
    }

    function OrdenarDecrescente(array){
        array.sort((a,b)) = b.prioridade - a. prioridade
        return array
    }