import React, { useContext, FC, useState } from 'react'
import { TextInput, Button, View, Text, StyleSheet } from 'react-native'
import TodosProvider, { TodosContext } from '../Contexts/Todos.context'

const Todos: FC<any> = () => {
  const {todos, addTodo, resetTodo} = useContext(TodosContext)
  const [text, setText] = useState<string>('')
  const [val, setVal] = useState<string>('')
  return (
    <View>
      <View>
        {todos.map((todo, i) => (
          <Text key={i}>{todo}</Text>
        ))}
      </View>
      <Text>Add a Todo</Text>
      <TextInput 
        style={{height: 40}}
        placeholder='Type a todo here'
        onChangeText={text  => {
          setText(text)
          setVal(text)
        }}
        defaultValue={val}
      />
      <Button 
        onPress={() => {
          addTodo(text)
          setVal('')
        }}
        title="Add Todo"
      />
      <Button 
        onPress={() => resetTodo()}
        title="Reset Todo"
      />
    </View>
  )
}

//  still not sure how this works lol
export default () => (
  <TodosProvider>
    <Todos />
  </TodosProvider>
)


