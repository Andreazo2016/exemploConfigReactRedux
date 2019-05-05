export const addTodo = texto =>({
    type:'ADD_TODO',
    payload:{
        texto:texto,
    }
});