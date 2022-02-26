import React from 'react'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface BigButtonProps {
  onPress: () => void
  label?: any
  style?: Object
}

const BigButton: React.FC<BigButtonProps>= ({onPress, label, style, children }) => {
  return (
    <Wrapper onPress={onPress} style={style}>
      {children ?? <Text>{label}</Text>}
      
    </Wrapper>
  )
}


const Wrapper = styled(RectButton)`
  background-color: #655969;
  border-radius: 15px;
  flex: 1;
  justify-content: center;
`
const Text = styled.Text`
  font-size: 16px;
  color: #cbc4bf;
  align-self: center;
`
export default BigButton
