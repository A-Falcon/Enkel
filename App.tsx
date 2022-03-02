import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import { NativeRouter, BackButton } from 'react-router-native'
import Amplify from 'aws-amplify'
import { AsyncStorage } from 'react-native'
import { Overlay } from 'react-native-elements'


import config from './src/aws-exports'
Amplify.configure(config)

import Routes from '~/Routes'
import theme from '~/theme'
import { TaskItem } from '~/components/Task'

import AppContext from '~/AppContext'
import AddTask from '~/views/AddTask'
import FloatingActionButton from '~/components/FloatingActionButton'
import { set, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const TASKS_KEY = 'TASKS'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [taskIdToEdit, setTaskIdToEdit] = useState<string | null>(null)
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', title: 'task 1', notes: '', completed: true },
    { id: '2', title: 'task 2', notes: '', completed: false },
    { id: '3', title: 'task 3', notes: '', completed: false },
    { id: '4', title: 'task 4', notes: '', completed: false }
  ])

  async function getTasksFromStorage() {
    const json = await AsyncStorage.getItem(TASKS_KEY)
    const tasksFromStorage = json !== null ? JSON.parse(json) : []

    setTasks(tasksFromStorage)
  }

  async function setTasksOnStorage(tasks: TaskItem[]) {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
  }

  function removeTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasksOnStorage(newTasks)

    setTasks(newTasks)
  }

  useEffect(() => {
    // AsyncStorage.removeItem(TASKS_KEY) // for testing
    getTasksFromStorage()
  }, [])

  async function addTask(task: TaskItem) {
    const newTasks = [...tasks, task]

    setTasks(newTasks)

    await setTasksOnStorage(newTasks)
  }

  const openEditModal: AppContext['openEditModal'] = (taskId) => {
    setTaskIdToEdit(taskId)
    setModalVisible(true)
  }

  const saveTasks = () => setTasksOnStorage(tasks)
  const closeTaskModal = () => {
    setModalVisible(false)
    setTaskIdToEdit(null)
  }

  const checkCompleted: AppContext['checkCompleted'] = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId)
    if (taskIndex === -1) return

    const oldTask = tasks[taskIndex]

    const updatedTask: TaskItem = { ...oldTask, completed: !oldTask.completed }
    tasks[taskIndex] = updatedTask

    const updatedTaskList = [...tasks]
    setTasks(updatedTaskList)
    setTasksOnStorage(updatedTaskList)
  }

  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        taskModalOpen: modalVisible,
        closeTaskModal,
        openEditModal,
        saveTasks,
        checkCompleted
      }}
    >
      <ThemeProvider theme={theme}>
        <NativeRouter>
          <BackButton>
            <SafeAreaView>
              <StatusBar style="auto" />
              <Routes />
              <Overlay
                isVisible={modalVisible}
                onBackdropPress={closeTaskModal}
                overlayStyle={{
                  padding: 0,
                  backgroundColor: 'transparent'
                }}
              >
                <AddTask
                  closeModal={closeTaskModal}
                  taskIdToEdit={taskIdToEdit}
                />
              </Overlay>
              <FloatingActionButton onPress={() => setModalVisible(true)} />
            </SafeAreaView>
          </BackButton>
        </NativeRouter>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondaryDark};
`