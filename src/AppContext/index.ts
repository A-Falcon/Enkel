import { TaskItem } from '~/components/Task'
import { createContext } from 'react'

interface AppContext {
  tasks: TaskItem[]
  addTask: (task: TaskItem) => void
  removeTask: (taskId: string) => void
  taskModalOpen: boolean
  closeTaskModal: () => void
  openEditModal: (taskId: string) => void
  saveTasks: VoidFunction
  checkCompleted: (taskId: string) => void
}

const AppContext = createContext<AppContext>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  taskModalOpen: false,
  closeTaskModal: () => {},
  openEditModal: () => {},
  saveTasks: () => {},
  checkCompleted: () => {}
})

export default AppContext
