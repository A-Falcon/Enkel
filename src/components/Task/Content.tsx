import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

interface ContentProps {
  title: string
  notes?: string
  dueAt?: any
  numberOfLines?: number | null
}

const Content:React.FC<ContentProps>= ({title, notes, dueAt, numberOfLines}) => {
  
  return (
    <Wrapper>
      <TitleText ellipsizeMode="tail" numberOfLines={numberOfLines || undefined}>{title}</TitleText>

      {notes 
        ? <NoteText ellipsizeMode="tail" numberOfLines={numberOfLines || undefined}>{notes}</NoteText> 
        : null
      }

      {dueAt && (
        <DateText>
          <AntDesign name="calendar" size={24} color="#cbc4bf" />
          {new Date(dueAt).toDateString()}
        </DateText>
      )}
  </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 5;
  flex-direction: column;
  justify-content: center;
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


export default Content