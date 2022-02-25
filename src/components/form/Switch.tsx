import React from 'react'
import styled from'styled-components/native'
import { Switch, Keyboard, KeyboardAvoidingView } from 'react-native'

interface SwitchProps {
  label: string
  value: boolean
  onValueChange: () => void
}

const FormSwitch:React.FC<SwitchProps> = ({label, value, onValueChange}) => {
  return (
    <Wrapper>
      <Text>{label}</Text>
        <StyledSwitch
          onValueChange={onValueChange}
          value={value}
        />
  </Wrapper>
  )
}

const Wrapper = styled.View`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin-bottom: ${(props) => props.theme.spacing.unit * 0.25}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Text = styled.Text`
  align-self: center;
  font-size: 15px;
  color: ${(p) => p.theme.colors.text};
`
const StyledSwitch = styled(Switch)`

`
export default FormSwitch