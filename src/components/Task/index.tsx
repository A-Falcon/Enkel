import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CheckBox from '~/components/Complete'
import Collapsible from 'react-native-collapsible'

export interface TaskItem {
  id: string
  title: string
  completed: boolean
  notes: string
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
      {/* <Wrapper> */}
      <StyledTouchableOpacity
        onPress={() => {
          setIsCollasped(!isCollapsed)
        }}
      >
        {isCollapsed ? (
          <ContentDiv>
            <TitleText ellipsizeMode="tail">{taskData.title}</TitleText>
            <NoteText ellipsizeMode="tail">{taskData.notes}</NoteText>
            <Text>
              {taskData.dueAt && (
                <>
                  <AntDesign name="calendar" size={24} color="#cbc4bf" />
                  {new Date(taskData.dueAt).toDateString()}
                </>
              )}
            </Text>
          </ContentDiv>
        ) : (
          <ContentDiv>
            <TitleText ellipsizeMode="tail" numberOfLines={1}>
              {taskData.title}
            </TitleText>
            <NoteText ellipsizeMode="tail" numberOfLines={1}>
              {taskData.notes}
            </NoteText>
            <Text>
              {taskData.dueAt && (
                <>
                  <AntDesign name="calendar" size={24} color="#cbc4bf" />
                  {new Date(taskData.dueAt).toDateString()}
                </>
              )}
            </Text>
          </ContentDiv>
        )}

        <Div>
          <CheckBox
            checked={taskData.completed}
            onPress={checkCompleted}
          ></CheckBox>
        </Div>
      </StyledTouchableOpacity>
      {/* </Wrapper> */}
      {/* <Collapsible collapsed={!isCollapsed}>
        <TaskDetails>
          <TaskDetailsText style={{ fontSize: '20px' }}>
            {taskData.title}
          </TaskDetailsText>
          <TaskDetailsText>{taskData.notes}</TaskDetailsText>
        </TaskDetails>
      </Collapsible> */}
    </>
  )
}

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  height: 100px;
  /* max-height:100px; */
  padding: 20px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: row;
  /* border-width: 0.2px; */
  /* border-color: ${(props) => props.theme.colors.text}; */
`
const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  min-height: 100px;
  height: auto;
  /* max-height:100px; */
  padding: 20px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: row;
`
const ContentDiv = styled.View`
  flex: 5;
  flex-direction: column;
  justify-content: center;
`
const Div = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  align-self: center;
`
const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`
const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`
const NoteText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.subText};
`
const TaskDetails = styled.View`
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  height: auto;
  min-height: 100px;
  margin: 10px;
  margin-top: 0px;
  border-radius: 15px;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`
const TaskDetailsText = styled.Text`
  font-size: 16px;
  color: #cbc4bf;
`
export default Task
