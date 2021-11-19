import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'

// import ComposeModal from '~/views/ComposeModal'
import Task, { TaskItem } from '~/components/Task'
import AppContext from '~/AppContext'

const Home: React.FC = () => {
  const { tasks, removeTask } = useContext(AppContext)
  return (
    <Wrapper>
      {/* <ComposeModal /> */}
      {tasks.map((task) => (
        <Task
          key={task.id}
          taskData={task}
          removeTask={() => removeTask(task.id)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`

export default Home
