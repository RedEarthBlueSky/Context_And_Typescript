import React, { useContext, FC } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import TodosProvider, { TodosContext } from '../TodosContext/TodosProvider'

const Todos: FC<any> = () => {
  const {todos, addTodo} = useContext(TodosContext)
  return (
    <View>
      <View>
        {todos.map((todo, i) => (
          <Text key={i}>{todo}</Text>
        ))}
      </View>
      <Button 
        onPress={() => addTodo('new todo')}
        title="Add Todo"
      />
    </View>
  )
}

export default () => (
  <TodosProvider>
    <Todos />
  </TodosProvider>
)


