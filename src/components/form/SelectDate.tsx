import React from 'react'
import styled from 'styled-components/native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Collapsible from 'react-native-collapsible'

interface DateProps {
  collapsed: boolean
  value: any
  onChange: any
}

const SelectDate: React.FC<DateProps> = ({collapsed, value, onChange}) => {
  return (
    <Collapsible collapsed={collapsed}>
          <RNDateTimePicker
            testID="dateTimePicker"
            minimumDate={new Date()}
            value={value}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
            textColor="#cbc4bf"
          />       
      </Collapsible>
  )
}


export default SelectDate