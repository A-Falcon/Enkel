import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import BigButton from '~/components/BigButton'


interface ActionProps {
  openEditModal: () => void
  removeTask: () => void

}

const RenderRightActions:React.FC <ActionProps>= ({openEditModal, removeTask}) => {
  return (
    <Wrapper>
      <BigButton onPress={openEditModal} label={'Details'} style={{backgroundColor: '#655969'}}/>
      <BigButton onPress={removeTask} label={'Remove'} style={{backgroundColor: '#6B3741',  marginLeft: 10,}}>
        <Feather
          name="trash-2"
          size={30}
          color="#cbc4bf"
          style={{alignSelf: 'center'}}
          />
      </BigButton>
    </Wrapper>
  )
}
const Wrapper = styled.View`
  width: 200px;
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 6px;
  margin-bottom: 6px;
  flex-direction: row;
  border-radius: 15px;
  overflow: hidden;
`


export default RenderRightActions