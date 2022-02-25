import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Keyboard, KeyboardAvoidingView } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Collapsible from 'react-native-collapsible'

import AppContext from '~/AppContext'
import { TaskItem } from '~/components/Task'
import FormButton from '~/components/Form/Button'
import FormSwitch from '~/components/Form/Switch'
import SelectDate from '~/components/Form/SelectDate'
import TaskInput from '~/components/Form/TaskTextInput'
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
          <FormButton label={'Cancel'} onPress={closeModal} />
          <FormButton label={'Add'} onPress={onSubmit} style={{alignItems: 'flex-end'}} />
        </ButtonWrapper>
        <TaskInput
          label={title}
          onChangeText={setTitle}
          placeholder={"Task Name"}
          maxLength={50}
        />
        <TaskInput
          label={notes}
          onChangeText={setNotes}
          placeholder={"Add notes..."}
          maxLength={350}
        />
        <FormSwitch label={'Date'} value={isEnabled} onValueChange={() => {
              setIsEnabled(!isEnabled)
              !isEnabled && Keyboard.dismiss()
            }}
          />
          <SelectDate
            collapsed={!isEnabled}
            value={date ? new Date(date) : new Date()}
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                setDate(selectedDate.toISOString())
              }
            }}
          />       
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


// const TextInput = styled.TextInput`
//   color: ${(props) => props.theme.colors.text};
//   background-color: ${(props) => props.theme.colors.primary};
//   height: ${(props) => props.theme.spacing.unit}px;
//   max-height: 100px;
//   height: auto;
//   min-height: 60px;
//   padding: ${(props) => props.theme.spacing.unit * 0.25}px;
//   border-radius: ${(props) => props.theme.spacing.borderRadius};
//   margin-bottom: ${(props) => props.theme.spacing.unit * 0.15}px;
// `



export default AddTask
