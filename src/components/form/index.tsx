import React from 'react'
import styled from 'styled-components/native'
import {  Keyboard  } from 'react-native'

import FormButton from '~/components/Form/Button'
import FormSwitch from '~/components/Form/Switch'
import SelectDate from '~/components/Form/SelectDate'
import TaskInput from '~/components/Form/TaskTextInput'

interface FormInputProps {
  closeModal: () => void
  onSubmit: () => void
  title: string
  setTitle: any
  notes: string
  setNotes: any
  isEnabled: boolean
  setIsEnabled: any
  date: any
  setDate: any
}

const FormInput:React.FC<FormInputProps> = ({
  closeModal,
  onSubmit,
  title,
  setTitle, 
  notes, 
  setNotes, 
  isEnabled, 
  setIsEnabled,
  date,
  setDate,

}) => {
  return (
    <Wrapper>
        <ButtonWrapper>
          <FormButton label={'Cancel'} onPress={closeModal} />
          <FormButton label={'Add'} onPress={onSubmit} style={{alignItems: 'flex-end'}} />
        </ButtonWrapper>
        <TaskInput
          label={title}
          onChangeText={setTitle}
          placeholder={"Task Name"}
          maxLength={50}
        />
        <TaskInput
          label={notes}
          onChangeText={setNotes}
          placeholder={"Add notes..."}
          maxLength={350}
        />
        <FormSwitch label={'Date'} value={isEnabled} onValueChange={() => {
              setIsEnabled(!isEnabled)
              !isEnabled && Keyboard.dismiss()
            }}
          />
          <SelectDate
            collapsed={!isEnabled}
            value={date ? new Date(date) : new Date()}
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                setDate(selectedDate.toISOString())
              }
            }}
          />       
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: auto;
  width: 325px;
  padding: ${(props) => props.theme.spacing.unit * 0.15}px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
`

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`

export default FormInput