import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'
import { Switch } from 'react-native'
import DatePicker from 'react-native-date-picker'

import AppContext from '~/AppContext'

const AddTask: React.FC = () => {
  const { addTask } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [date, setDate] = useState(new Date())

  function onSubmit() {
    const taskTitle = title.trim()
    if (taskTitle.length === 0) return

    addTask({ id: uuidv4(), completed: false, title: taskTitle, notes })
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
      <DateDiv>
        <Text>Date</Text>
        <StyledSwitch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? 'pink' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </DateDiv>
      {/* {isEnabled && <DatePicker date={date} onDateChange={setDate} />} */}
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
const DateDiv = styled.View`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin-bottom: ${(props) => props.theme.spacing.unit * 0.25}px;
  margin-top: ${(props) => props.theme.spacing.unit * 0.25}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledSwitch = styled(Switch)``

const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.spacing.unit}px;
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
  font-size: 15px;

  color: ${(p) => p.theme.colors.text};
`

export default AddTask
