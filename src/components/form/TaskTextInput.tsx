import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/native'

import AppContext from '~/AppContext'
import { TaskItem } from '~/components/Task'


interface TaskInputProps {
  label: string
  onChangeText:any
  placeholder: string
  maxLength: number
}

const TaskInput:React.FC<TaskInputProps> = ({label, onChangeText, placeholder, maxLength}) => {
  return (
    <Wrapper>
        <TextInput
          value={label}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#cbc4bf"
          returnKeyType="done"
          multiline={true}
          maxLength={maxLength}
        />
    </Wrapper>
  )
}

const Wrapper = styled.View`

`
const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.spacing.unit}px;
  max-height: 100px;
  height: auto;
  min-height: 60px;
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin-bottom: ${(props) => props.theme.spacing.unit * 0.15}px;
`
export default TaskInput