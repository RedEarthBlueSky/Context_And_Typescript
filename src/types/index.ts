import { ReactChild, ReactChildren } from "react"

export type TodosContextState = {
  todos: string[]
  addTodo: (name: string) => void
}

interface AuxProps {
  children: ReactChild | ReactChildren
}

export type ChildrenType = AuxProps