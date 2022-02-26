import React, { useContext } from 'react'
import styled from 'styled-components/native'

import AppContext from '~/AppContext'
import RenderRightActions from '~/components/RenderRightActions'
import Swipe from '~/components/Swipeable'
import Header from '~/components/Header'

const Home: React.FC<AppContext> = () => {
  const { tasks, removeTask, openEditModal, checkCompleted } = useContext(
    AppContext
  )

  const renderRightActions = (taskId: string) => {
    return (
      <RenderRightActions 
        openEditModal={() => openEditModal(taskId)} 
        removeTask={() => removeTask(taskId)}
      />
    )
  }

  return (
    <>
      <Header label={'Your Tasks'}/>
      <Wrapper>
        {tasks.length < 1 ? (
          <EmptyView>
            <Text>Empty List</Text>
          </EmptyView>
        ) : (
          tasks.map((task) => (
            <Swipe 
              key={task.id}
              taskData={task}
              removeTask={() => removeTask(task.id)}
              checkCompleted= {() => checkCompleted(task.id)}
              renderRightActions= {() => renderRightActions(task.id)}
            />
          )).reverse()
        )}
      </Wrapper>
    </>
  )
}


const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`
const EmptyView = styled.View`
  display: flex;
  /* background-color: pink; */
  align-self: center;
  margin-top: 180px;
`
const Text = styled.Text`
  font-size: 20px;
  color: #cbc4bf;
  opacity: 0.5;
  text-align: center;
  margin: ${(props) => props.theme.spacing.unit * 1.5}px;
`

export default Home
