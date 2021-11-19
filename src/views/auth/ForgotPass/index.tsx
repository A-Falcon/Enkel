import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Link, { useHistory } from 'react-router-native'

const ForgotPass: React.FC = () => {
  const history = useHistory<any>()
  return (
    <Wrapper>
      <Text>Forgot Pass Screen</Text>
      <TouchableOpacity onPress={() => history.push('/login')}>
        <Text>go back</Text>
      </TouchableOpacity>
    </Wrapper>
  )
}
const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
`
const Text = styled.Text`
  font-size: 80px;
  color: ${(p) => p.theme.colors.text};
  align-self: center;
  margin: ${(props) => props.theme.spacing.unit * 0.5}px;
`
export default ForgotPass
