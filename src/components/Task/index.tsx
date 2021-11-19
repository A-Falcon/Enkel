import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

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
}

const Task: React.FC<TaskProps> = ({ taskData, removeTask }) => {
  return (
    <Wrapper>
      <TitleText>{taskData.title}</TitleText>
      <NoteText>{taskData.notes}</NoteText>
      <Text>
        <AntDesign name="calendar" size={24} color="#cbc4bf" /> Due Today
      </Text>
      <Delete onPress={removeTask} />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  /* border-width: 0.2px; */
  /* border-color: ${(props) => props.theme.colors.text}; */
`
const Delete = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  align-self: flex-end;
  background-color: pink;
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
