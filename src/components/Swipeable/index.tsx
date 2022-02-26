import React from 'react'
import styled from 'styled-components/native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import Task from '~/components/Task'

interface SwipeProps {
  taskData: any
  removeTask: () => void
  checkCompleted: () => void
  renderRightActions: any
}

const Swipe: React.FC<SwipeProps> = ({ taskData, removeTask, checkCompleted, renderRightActions}) => {
  return (
    <StyledSwipeable
      friction={1}
      renderRightActions={renderRightActions}
    >
    <Task
      taskData={taskData}
      removeTask={removeTask}
      checkCompleted={checkCompleted}
    />
  </StyledSwipeable>
  )
}

const StyledSwipeable = styled(Swipeable)``


export default Swipe
