import React, { useState, useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import Task, { TaskItem } from '~/components/Task'
import AppContext from '~/AppContext'
import { withTheme } from 'react-native-elements'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons'

const Home: React.FC<TaskItem> = () => {
  const { tasks, removeTask, openEditModal, checkCompleted } = useContext(
    AppContext
  )

  const renderRightActions = (taskId: string, progress: any, dragX: any) => {
    // const trans = dragX.interpolate({
    //   inputRange: [0, 50, 100, 101],
    //   outputRange: [-20, 0, 0, 1]
    // })

    return (
      <View
        style={{
          width: 200,
          marginLeft: 0,
          marginRight: 10,
          marginTop: 6,
          marginBottom: 6,
          flexDirection: 'row',
          borderRadius: 15,
          overflow: 'hidden'
        }}
      >
        <RectButton
          style={{
            backgroundColor: '#e64c56',
            borderRadius: 15,
            // margin: '6px, 6px, 6px, 0px'
            flex: 1,
            marginRight: 10,
            justifyContent: 'center'
          }}
          onPress={() => removeTask(taskId)}
        >
          <Feather
            name="trash-2"
            size={50}
            color="#cbc4bf"
            style={{
              alignSelf: 'center'
            }}
          />
        </RectButton>
        <RectButton
          style={{
            backgroundColor: '#526EAB',
            borderRadius: 15,
            flex: 1,
            justifyContent: 'center'
          }}
          onPress={() => openEditModal(taskId)}
        >
          <EditText>Edit</EditText>
        </RectButton>
      </View>
    )
  }

  return (
    <Wrapper>
      <Header>
        <HeaderText>Your Tasks</HeaderText>
      </Header>
      {tasks.length < 1 ? (
        <EmptyView>
          <Text>Empty List</Text>
        </EmptyView>
      ) : (
        tasks.map((task) => (
          <StyledSwipeable
            key={task.id}
            friction={1.5}
            // rightThreshold={100}
            // rightThreshold={1}
            // overshootRight={false}
            renderRightActions={(...ra) => renderRightActions(task.id, ...ra)}
          >
            <Task
              taskData={task}
              removeTask={() => removeTask(task.id)}
              checkCompleted={() => checkCompleted(task.id)}
            />
          </StyledSwipeable>
        ))
      )}
    </Wrapper>
  )
}

const StyledSwipeable = styled(Swipeable)``

const ButtonWrapper = styled.View`
  background-color: transparent;
  flex: 1;
`

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`
const Header = styled.View`
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
const EmptyView = styled.View`
  display: flex;
  /* background-color: pink; */
  align-self: center;
  margin-top: 180px;
`
const Text = styled.Text`
  font-size: 20px;
  color: #cbc4bf;
  opacity: 0.5;
  text-align: center;
  margin: ${(props) => props.theme.spacing.unit * 1.5}px;
`
const EditText = styled.Text`
  font-size: 30px;
  color: #cbc4bf;
  align-self: center;
`

export default Home
