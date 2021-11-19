//  use the TodosContextState type to create a provider components that stores the state
//  that we want to make available to other components using context
import React, { createContext, useState, FC } from 'react'
import { TodosContextState, ChildrenType } from '../types'

//  set default values for the context
const contextDefaultValues: TodosContextState = {
  todos: [],
  //  this will make typescript happy before they are set when we use the provider
  addTodo: () => {},
  resetTodo: () => {},
}

export const TodosContext = createContext<TodosContextState>(contextDefaultValues)

const TodosProvider: FC<any> = ({children}: ChildrenType) => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos)

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo])
  const resetTodo = () => setTodos(() => contextDefaultValues.todos)
  
  return (
    <TodosContext.Provider 
      value={{
        todos,
        addTodo,
        resetTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider

