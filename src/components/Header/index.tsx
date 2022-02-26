import React from 'react'
import styled from 'styled-components/native'


interface HeaderProps {
  label: string
}
const Header: React.FC<HeaderProps>= ({label}) => {
  return (
    <Wrapper>
      <HeaderText>{label}</HeaderText>
    </Wrapper>
  )
}


const Wrapper = styled.View`
  height: 55px;
  width: auto;
  justify-content: center;
`
const HeaderText = styled.Text`
  font-size: 35px;
  color: ${(props) => props.theme.colors.subText};
  align-self: flex-start;
  margin-left: 15px;
`
export default Header
