import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CheckBox from '~/components/Complete'

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
        {isCollapsed ? (
          <ContentDiv>
            <TitleText ellipsizeMode="tail">{taskData.title}</TitleText>

            {taskData.notes 
              ? <NoteText ellipsizeMode="tail">{taskData.notes}</NoteText> 
              : null
            }

            {taskData.dueAt && (
              <DateText>
                <AntDesign name="calendar" size={24} color="#cbc4bf" />
                {new Date(taskData.dueAt).toDateString()}
              </DateText>
             )}
          </ContentDiv>
        ) : (
          <ContentDiv>
            <TitleText ellipsizeMode="tail" numberOfLines={1}>
              {taskData.title}
            </TitleText>

            {taskData.notes
             ? <NoteText ellipsizeMode="tail" numberOfLines={1}>{taskData.notes}</NoteText>
             : null
            }

            {taskData.dueAt && (
              <DateText>
                <AntDesign name="calendar" size={24} color="#cbc4bf" />
                {new Date(taskData.dueAt).toDateString()} 
              </DateText>
            )}
          </ContentDiv>
        )}
        <Div>
          <CheckBox
            checked={taskData.completed}
            onPress={checkCompleted}
          />
        </Div>
      </StyledTouchable>
    </>
  )
}


const StyledTouchable = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  min-height: 100px;
  height: auto;
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
const DateText = styled.Text`
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
