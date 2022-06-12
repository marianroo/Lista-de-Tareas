
export class TodoList {
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }
    nuevoTodo (todo){
        this.todos.push(todo);
        this.guardarLocalStorage ();
    }
    eliminarTodo (id){
       this.todos = this.todos.filter(todo => todo.id != id);
        
    }
    marcarCompletado (id){
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage ();
                break;
            }
        }


    }
    eliminarCompletados (){
        this.todos = this.todos.filter(todo => !todo.completado);
        this. guardarLocalStorage ();
    }

    guardarLocalStorage (){
        localStorage.setItem('todo', JSON.stringify(this.todos)); //Para guardar un objeto en el localStorage y detalladamente.
    }

    cargarLocalStorage (){
    this.todos = (localStorage.getItem('todo'))
     ? JSON.parse(localStorage.getItem('todo')) 
     : [];
    }

}