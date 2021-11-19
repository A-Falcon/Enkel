import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'

import AppContext from '~/AppContext'

const AddTask: React.FC = () => {
  const { addTask } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  function onSubmit() {
    addTask({ id: uuidv4(), completed: false, title, notes })
    setTitle('')
    setNotes('')
  }

  return (
    <Wrapper>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Task Name"
        placeholderTextColor="#cbc4bf"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder="Add notes..."
        placeholderTextColor="#cbc4bf"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Button onPress={onSubmit}>
        <Text>Add</Text>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 500px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 10px;
  padding: ${(props) => props.theme.spacing.unit * 0.15}px;
`

const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.spacing.unit}px;
  /* border-color: ${(props) => props.theme.colors.text}; */
  /* border-width: ${(props) => props.theme.spacing.borderWidth}; */
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin-bottom: ${(props) => props.theme.spacing.unit * 0.15}px;
`

const Button = styled.TouchableOpacity`
  background-color: ${(p) => p.theme.colors.primaryDark};
  height: ${(p) => p.theme.spacing.unit / 2}px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.spacing.borderRadius};
`

const Text = styled.Text`
  font-size: 16px;
  color: ${(p) => p.theme.colors.text};
`

export default AddTask
