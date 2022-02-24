import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Keyboard, KeyboardAvoidingView } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Collapsible from 'react-native-collapsible'

import AppContext from '~/AppContext'
import { TaskItem } from '~/components/Task'
import { updateTask } from '~/graphql/mutations'


interface AddTaskProps {
  closeModal: () => void
  taskIdToEdit: string | null
}

const AddTask: React.FC<AddTaskProps> = ({ closeModal, taskIdToEdit }) => {
  const { addTask, tasks, saveTasks } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [date, setDate] = useState<null | string>(null)

  useEffect(() => {
    if (taskIdToEdit) {
      const taskToEditIndex = tasks.findIndex(
        (task) => task.id === taskIdToEdit
      )
      if (taskToEditIndex === -1) return

      const task = tasks[taskToEditIndex]
      setTitle(task.title)
      // setNotes(task.notes)
      task.notes && setNotes(task.notes)
      task.dueAt && setDate(task.dueAt)
    }
  }, [])

  function onSubmit() {
    const taskTitle = title.trim()
    if (taskTitle.length === 0) return

    if (taskIdToEdit) {
      const updatedTask = tasks.find((task) => task.id === taskIdToEdit)!
      updatedTask.title = title
      updatedTask.dueAt = date ? date : undefined
      updatedTask.notes = notes
      saveTasks()
      closeModal()
    } else {
      const task: TaskItem = {
        id: uuidv4(),
        completed: false,
        title: taskTitle,
        notes
      }

      if (date) {
        // console.log('we here')
        task.dueAt = date
      }

      addTask(task)
      setTitle('')
      setNotes('')
      setDate(null)
    }
  }

  return (
  <KeyboardAvoidingView style={{ flex: .5 }}>
    <Wrapper>
        <ButtonWrapper>
          <Button onPress={closeModal}>
            <Text>Cancel</Text>
          </Button>
          <Button onPress={onSubmit} style={{ justifyContent: 'flex-end'}}>
            <Text>Add</Text>
          </Button>
        </ButtonWrapper>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Task Name"
          placeholderTextColor="#cbc4bf"
          returnKeyType="done"
          multiline={true}
          maxLength={50}
        />
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="Add notes..."
          placeholderTextColor="#cbc4bf"
          returnKeyType="done"
          multiline={true}
          maxLength={350}
        />
        <DateDiv>
          <Text>Date</Text>
          <StyledSwitch
            onValueChange={() => {
              setIsEnabled(!isEnabled)
              !isEnabled && Keyboard.dismiss()
            }}
            value={isEnabled}
          />
        </DateDiv>
      <Collapsible collapsed={!isEnabled}>
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
            textColor="#cbc4bf"
          />       
      </Collapsible>
    </Wrapper>
    </KeyboardAvoidingView>
  )
}

const Wrapper = styled.View`
  height: auto;
  width: 325px;
  padding: ${(props) => props.theme.spacing.unit * 0.15}px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledSwitch = styled(Switch)``

const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.spacing.unit}px;
  max-height: 100px;
  height: auto;
  min-height: 60px;
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin-bottom: ${(props) => props.theme.spacing.unit * 0.15}px;
`

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  width: 100px;
  
  height: ${(p) => p.theme.spacing.unit / 2}px;

`

const Text = styled.Text`
  align-self: center;
  font-size: 15px;
  
  color: ${(p) => p.theme.colors.text};
`

export default AddTask
