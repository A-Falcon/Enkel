import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CheckBox from '~/components/Complete'
import Content from '~/components/Task/Content'

export interface TaskItem {
  id: string
  title: string
  completed: boolean
  notes?: string
  dueAt?: string
}

interface TaskProps {
  taskData: TaskItem
  removeTask: VoidFunction
  checkCompleted: VoidFunction
}

const Task: React.FC<TaskProps> = ({ taskData, checkCompleted }) => {
  const [isCollapsed, setIsCollasped] = useState(false)

  return (
    <>
      <StyledTouchable
        activeOpacity={1} 
        onPress={() => {
          setIsCollasped(!isCollapsed)
        }}
      >
      <Content
        title={taskData.title}
        notes={taskData.notes}
        dueAt={taskData.dueAt}
        numberOfLines={ !isCollapsed ? 1 :null}
      /> 
      <CheckBox
        checked={taskData.completed}
        onPress={checkCompleted}
      />  
      </StyledTouchable>
    </>
  )
}

const StyledTouchable = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  min-height: 115px;
  height: auto;
  padding: 20px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: row;
`

export default Task
