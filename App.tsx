import React, { useState, useEffect, createContext } from 'react'
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
import Home from './src/views/Home'

import AppContext from '~/AppContext'
import AddTask from '~/views/AddTask'
import FloatingActionButton from '~/components/FloatingActionButton'

const TASKS_KEY = 'TASKS'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
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
    AsyncStorage.removeItem(TASKS_KEY)
    getTasksFromStorage()
  }, [])

  async function addTask(task: TaskItem) {
    const newTasks = [...tasks, task]
    console.log('new Task')
    console.log(task)
    setTasks(newTasks)

    await setTasksOnStorage(newTasks)
  }

  // console.log(tasks)

  return (
    <AppContext.Provider value={{ tasks, addTask, removeTask }}>
      <ThemeProvider theme={theme}>
        <NativeRouter>
          <BackButton>
            <SafeAreaView>
              <StatusBar style="auto" />
              <Routes />
              <Overlay
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                overlayStyle={{
                  padding: 0,
                  backgroundColor: 'transparent'
                }}
              >
                <AddTask closeModal={() => setModalVisible(false)} />
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
