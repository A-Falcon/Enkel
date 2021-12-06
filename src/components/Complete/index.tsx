import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface CheckBoxProps {
  checked: boolean
  onPress: () => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onPress }) => {
  return (
    <Wrapper
      onPress={onPress}
      style={{
        backgroundColor: checked ? '#655969' : '#282737'
      }}
    ></Wrapper>
  )
}

const Wrapper = styled(TouchableOpacity)`
  background-color: transparent;
  height: 35px;
  width: 35px;
  /* border: 0.2px;
  border-color: white; */
  border-radius: 50px;
`

// const Check = styled.View`
//   background-color: red;
// `

export default CheckBox
