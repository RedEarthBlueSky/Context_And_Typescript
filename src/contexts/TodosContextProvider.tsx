import React, { createContext, useState, FC } from 'react'
import { TodosContextState, ChildrenType } from '../types'

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {}
}

export const TodosContext = createContext<TodosContextState>(contextDefaultValues)

const TodosContextProvider: FC<any> = ({children}: ChildrenType) => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos)

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo])
  
  return (
    <TodosContext.Provider 
      value={{
        todos,
        addTodo
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider

