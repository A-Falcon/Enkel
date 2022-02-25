import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons'


interface CheckBoxProps {
  checked: boolean
  onPress: () => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onPress }) => {
  return (
    <Wrapper>
      <StyledTouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: checked ? '#655969' : '#282737'
        }}
      >
      {checked && (
        <Entypo
          name="check"
          size={20}
          color="#cbc4bf"
          style={{ alignSelf: 'center' }}
        />
      )}
      </StyledTouchableOpacity>
    </Wrapper>
  )
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex-direction: row; 
  justify-content: center;
  height: 35px;
  width: 35px;
  background-color: transparent;
  border-radius: 50px;
`
const Wrapper = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  align-self: center;
`

export default CheckBox
