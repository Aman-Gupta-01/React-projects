import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../fratures/todo/todoSlice";

export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return(
        <>
        <div className="font-bold pt-8 text-3xl">Todos</div>
        <ul className="list-none">
            {
                todos.map((todo)=>(
                    <li key={todo.id} className="mt-4 flex justify-between
                    item-center bg-zinc-800 px-4 py-2 rounded" >

                        <div className="text-white">{todo.text}</div>

                        <button onClick={() => dispatch(removeTodo(todo.id))}
                        className="text-white bg-red-500 border-0 py-1 px-4
                        focus:outline-none hover:bg-red-600 rounded text-md">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 24 24">
                                <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                                </svg>
                        </button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}