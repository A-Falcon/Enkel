import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Keyboard } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
// import { interpolate, Extrapolate } from 'react-native-reanimated'
import Collapsible from 'react-native-collapsible'

import AppContext from '~/AppContext'
import { TaskItem } from '~/components/Task'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
      setNotes(task.notes)
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
    <Wrapper>
      <WrapperOne style={{ borderRadius: !isEnabled && 15 }}>
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
          multiline={true}
          maxLength={50}
          // onSubmitEditing={onSubmit}
        />
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="Add notes..."
          placeholderTextColor="#cbc4bf"
          returnKeyType="done"
          multiline={true}
          maxLength={350}

          // onSubmitEditing={onSubmit}
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
      </WrapperOne>
      <Collapsible collapsed={!isEnabled}>
        <WrapperTwo>
          {/* <StyledSwitch
          trackColor={{ false: 'red', true: '#282737' }}
          thumbColor={isEnabled ? '#3e3a4e' : '#282737'}
          ios_backgroundColor="#3e3a4e"
          onValueChange={() => {
            setIsEnabled(!isEnabled)
            !isEnabled && Keyboard.dismiss()
          }}
          value={isEnabled}
        /> */}

          {/* {isEnabled && ( */}
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

          {/* )} */}
        </WrapperTwo>
      </Collapsible>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 400px;
  width: 325px;
  /* background-color: ${(props) => props.theme.colors.primaryDark}; */
  background-color: transparent;
  border-radius: 10px;
  /* padding: ${(props) => props.theme.spacing.unit * 0.15}px; */
`
const WrapperOne = styled.View`
  /* height: 280px; */
  height: auto;
  max-height: 400px;
  width: 325px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-top-right-radius: ${(props) => props.theme.spacing.borderRadius};
  border-top-left-radius: ${(props) => props.theme.spacing.borderRadius};
  padding: ${(props) => props.theme.spacing.unit * 0.15}px;
  margin-bottom: -13px;
`
const WrapperTwo = styled.View`
  height: 250px;
  width: 325px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-bottom-right-radius: ${(props) => props.theme.spacing.borderRadius};
  border-bottom-left-radius: ${(props) => props.theme.spacing.borderRadius};
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
  /* flex: 1; */
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.spacing.unit}px;
  max-height: 100px;
  height: auto;
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
