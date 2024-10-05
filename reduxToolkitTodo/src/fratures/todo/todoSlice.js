import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        // filter ye kr raha hai ki, jab bhi usko todo ki id match nhi ho rhi hai to usko display kr de raha hai aur todo ki id match hone pe delete/dikha kr/de raha hai 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer