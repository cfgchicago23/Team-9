import React from 'react'
import Background from '../components/Background.js'
import Logo from '../components/Logo.js'
import Header from '../components/Header.js'
import Button from '../components/Button.js'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo/>
      <Header>Choose Your Role</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LeaderLoginScreen')}
      >
        Leader
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('StudentLoginScreen')}
      >
        Student
      </Button>
    </Background>
  )
}