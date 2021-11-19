import React, { useState, useContext } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Link, { useHistory } from 'react-router-native'
import { Auth } from 'aws-amplify'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .trim(),
  password: Yup.string()
    .min(8)
    .max(20)
    .required()
    .trim(),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')])
    .trim()
})

const SignUp: React.FC = () => {
  const history = useHistory<any>()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      try {
        const res = await Auth.signUp(values.email, values.password)
        console.log('Success')
      } catch (e) {
        console.log('ERROR')
        console.log(e)
      }
    },
    validationSchema
  })

  return (
    <Wrapper>
      <Text>Enkel</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={formik.values.email}
        placeholderTextColor="#cbc4bf"
        onChangeText={formik.handleChange('email')}
      ></TextInput>
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        placeholderTextColor="#cbc4bf"
        secureTextEntry={true}
        onChangeText={formik.handleChange('password')}
      ></TextInput>
      <TextInput
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        placeholderTextColor="#cbc4bf"
        secureTextEntry={true}
        onChangeText={formik.handleChange('confirmPassword')}
      ></TextInput>
      <Button onPress={formik.submitForm}>
        <ButtonText>Sign Up</ButtonText>
      </Button>
      <TouchableOpacity onPress={() => history.push('/login')}>
        <HelperText>Already have an Account? Login</HelperText>
      </TouchableOpacity>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
`
const TextInput = styled.TextInput`
  border-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  border-bottom-width: ${(props) => props.theme.spacing.unit * 0.01}px;
  height: ${(props) => props.theme.spacing.unit}px;
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin: ${(props) => props.theme.spacing.unit * 0.5}px;
`
const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-color: ${(props) => props.theme.colors.primaryDark};
  height: ${(props) => props.theme.spacing.unit}px;
  border-radius: ${(props) => props.theme.spacing.unit}px;
  border-width: ${(props) => props.theme.spacing.borderWidth};
  margin: ${(props) => props.theme.spacing.unit * 1}px;
`
const Text = styled.Text`
  font-size: 80px;
  color: ${(p) => p.theme.colors.text};
  align-self: center;
  margin: ${(props) => props.theme.spacing.unit * 0.5}px;
`
const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(p) => p.theme.colors.text};
  align-self: center;
`
const HelperText = styled.Text`
  font-size: 12px;
  color: ${(p) => p.theme.colors.text};
  align-self: center;
  margin: ${(props) => props.theme.spacing.unit * 0.1}px;
`

export default SignUp
