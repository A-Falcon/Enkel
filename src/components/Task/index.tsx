import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CheckBox from '~/components/Complete'

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
  return (
    <Wrapper>
      <ContentDiv>
        <TitleText>{taskData.title}</TitleText>
        <NoteText>{taskData.notes}</NoteText>
        <Text>
          {taskData.dueAt && (
            <>
              <AntDesign name="calendar" size={24} color="#cbc4bf" />
              {new Date(taskData.dueAt).toDateString()}
            </>
          )}
        </Text>
      </ContentDiv>
      <Div>
        <CheckBox
          checked={taskData.completed}
          onPress={checkCompleted}
        ></CheckBox>
      </Div>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  padding: 20px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: row;
  /* border-width: 0.2px; */
  /* border-color: ${(props) => props.theme.colors.text}; */
`

const ContentDiv = styled.View`
  flex: 1;
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

export default Task
