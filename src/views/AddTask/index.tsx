import React, { useState, useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {  KeyboardAvoidingView } from 'react-native'

import AppContext from '~/AppContext'
import { TaskItem } from '~/components/Task'
import FormInput from '~/components/Form'

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
    <FormInput
        closeModal={closeModal}
        onSubmit={onSubmit}
        title={title}
        setTitle={setTitle} 
        notes={notes} 
        setNotes={setNotes} 
        isEnabled={isEnabled} 
        setIsEnabled={setIsEnabled}
        date={date}
        setDate={setDate}
    />
    </KeyboardAvoidingView>
  )
}


export default AddTask
