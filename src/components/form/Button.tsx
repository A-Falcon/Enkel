import React from 'react'
import styled from 'styled-components/native'

interface ButtonProps {
  onPress: () => void
  label: string
  style?: Object
}
const Button:React.FC<ButtonProps>= ({onPress, label, style}) => {
  return (
    <Wrapper onPress={onPress} style={style}>
        <Text>{label}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  height: ${(p) => p.theme.spacing.unit * .6}px;
  width: 100px;
`
const Text = styled.Text`
  align-self: center;
  font-size: 15px;
  color: ${(p) => p.theme.colors.text};
`
export default Button