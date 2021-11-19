import React, { useState, useContext } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Link, { useHistory } from 'react-router-native'
import { Auth } from 'aws-amplify'
import TextInput from '~/components/form/TextInput'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .trim(),
  password: Yup.string()
    .min(8)
    .max(20)
    .required()
    .trim()
})

const Login: React.FC = () => {
  // const [email, setEmail] = useState('xninjahinjax@gmail.com')
  // const [pass, setPass] = useState('password')
  const history = useHistory<any>()

  const formik = useFormik({
    initialValues: {
      email: 'xninjahinjax@gmail.com', // TODO: Remove hardcoded values
      password: 'password'
    },
    onSubmit: async (values) => {
      try {
        const res = await Auth.signIn(values.email, values.password)
        console.log('Success')
      } catch (e) {
        console.log('ERROR')
        console.log(e)
      }
    },
    validationSchema
  })

  // async function logInUser() {
  //   try {
  //     const res = await Auth.signIn(email, pass)
  //     console.log('Success')
  //   } catch (e) {
  //     console.log('ERROR')
  //     console.log(e)
  //   }
  // }

  return (
    <Wrapper>
      <Text>Enkel</Text>
      <TextInput
        formikKey="email"
        formik={formik}
        value={formik.values.email}
        onChangeText={formik.handleChange('Email')}
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="#cbc4bf"
      />
      <TextInput
        formikKey="password"
        formik={formik}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        placeholder="Password"
        placeholderTextColor="#cbc4bf"
        secureTextEntry={true}
      ></TextInput>
      <Button onPress={formik.submitForm}>
        <ButtonText>Login</ButtonText>
      </Button>

      <TouchableOpacity onPress={() => history.push('/forgot-pass')}>
        <HelperText>Forgot Password?</HelperText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/sign-up')}>
        <HelperText>Don't have an Account? Sign up now!</HelperText>
      </TouchableOpacity>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
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

export default Login
