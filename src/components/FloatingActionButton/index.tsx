import React from 'react'
import styled from 'styled-components/native'
import { SimpleLineIcons } from '@expo/vector-icons'

interface FloatingActionButtonProps {
  onPress: VoidFunction
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = (props) => {
  return (
    <Wrapper onPress={props.onPress}>
      <SimpleLineIcons
        name="pencil"
        size={25}
        color="#cbc4bf"
        style={{ alignSelf: 'center' }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 25px;
  align-self: flex-end;
  height: 65px;
  width: 65px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 50px;
  shadow-color: black;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  justify-content: center;
  flex-direction: row;
`

export default FloatingActionButton
