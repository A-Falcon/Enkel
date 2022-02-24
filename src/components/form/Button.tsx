import React from 'react'
import styled from 'styled-components/native'

interface ButtonProps {
  onPress: () => void
  label: string
  style?: Object
}
const FormButton:React.FC<ButtonProps>= ({onPress, label, style}) => {
  return (
    <Wrapper style={style}>
      <Button onPress={onPress}>
        <Text>{label}</Text>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  height: ${(p) => p.theme.spacing.unit * .6}px;
  width: 100px;
`
const Button = styled.TouchableOpacity`

`
const Text = styled.Text`
  align-self: center;
  font-size: 15px;
  color: ${(p) => p.theme.colors.text};
`
export default FormButton