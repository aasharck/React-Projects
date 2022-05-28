import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
import todosReducer from "../reducers/todos.reducers";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
    {id:1, task: "Finish learning React", completed: false},
    {id:2, task: "Create full stack web applications", completed: false}
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    //const todoStuff = useTodoState(defaultTodos);

    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todosReducer)

    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
            {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}