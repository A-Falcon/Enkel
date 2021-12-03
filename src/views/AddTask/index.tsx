import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Keyboard } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'

import AppContext from '~/AppContext'
import { TaskItem } from '~/components/Task'

interface AddTaskProps {
  closeModal: () => void
}

const AddTask: React.FC<AddTaskProps> = ({ closeModal }) => {
  const { addTask } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [date, setDate] = useState<null | string>(null)

  function onSubmit() {
    const taskTitle = title.trim()
    if (taskTitle.length === 0) return

    const task: TaskItem = {
      id: uuidv4(),
      completed: false,
      title: taskTitle,
      notes
    }

    if (date) {
      console.log('we here')
      task.dueAt = date
    }

    addTask(task)

    setTitle('')
    setNotes('')
    setDate(null)
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onPress={closeModal}>
          <Text>cancel</Text>
        </Button>
        <Button onPress={onSubmit}>
          <Text>Add</Text>
        </Button>
      </ButtonWrapper>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Task Name"
        placeholderTextColor="#cbc4bf"
        returnKeyType="done"
        // onSubmitEditing={onSubmit}
      />
      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder="Add notes..."
        placeholderTextColor="#cbc4bf"
        returnKeyType="done"
        // onSubmitEditing={onSubmit}
      />
      <DateDiv>
        <Text>Date</Text>
        <StyledSwitch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? 'pink' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            setIsEnabled(!isEnabled)
            !isEnabled && Keyboard.dismiss()
          }}
          value={isEnabled}
        />
      </DateDiv>
      {isEnabled && (
        <RNDateTimePicker
          testID="dateTimePicker"
          minimumDate={new Date()}
          value={date ? new Date(date) : new Date()}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate.toISOString())
            }
          }}
          textColor="pink"
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 475px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 10px;
  padding: ${(props) => props.theme.spacing.unit * 0.15}px;
`
const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
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
