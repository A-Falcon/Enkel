import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CheckBox: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Wrapper
      onPress={() => setChecked(!checked)}
      style={{
        backgroundColor: checked ? 'red' : 'transparent'
      }}
    ></Wrapper>
  )
}

const Wrapper = styled(TouchableOpacity)`
  background-color: transparent;
  height: 35px;
  width: 35px;
  border: 1px;
  border-radius: 50px;
`

const Check = styled.View`
  background-color: red;
`

export default CheckBox
