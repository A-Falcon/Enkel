import React from 'react'
import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput
} from 'react-native'
import styled from 'styled-components/native'
import { FormikProps } from 'formik'



// NOT YET IMPLEMENTED.
// CURRENT: LOCAL DATA PERSISTENCE ONLY


interface TextInputProps extends RNTextInputProps {
  formik: FormikProps<any>
  formikKey: string
  label?: string
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  formikKey,
  formik,
  ...props
}) => {
  return (
    <Wrapper>
      <Label></Label>
      <InputWrapper>
        <Input
          value={formik.values[formikKey]}
          onChangeText={formik.handleChange(formikKey)}
          {...props}
        />
      </InputWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
`
const Label = styled.Text``

const InputWrapper = styled.View`
  background-color: transparent;
`

const Input = styled.TextInput`
  border-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  border-bottom-width: ${(props) => props.theme.spacing.unit * 0.01}px;
  height: ${(props) => props.theme.spacing.unit}px;
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin: ${(props) => props.theme.spacing.unit * 0.5}px;
`

export default TextInput
