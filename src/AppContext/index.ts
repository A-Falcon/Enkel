import { TaskItem } from '~/components/Task'
import { createContext } from 'react'

interface AppContext {
  tasks: TaskItem[]
  addTask: (task: TaskItem) => void
  removeTask: (taskId: string) => void
}

const AppContext = createContext<AppContext>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {}
})

export default AppContext
