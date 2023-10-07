import React from 'react'
import Background from 'my-project/src/components/Background.js'
import Logo from 'my-project/src/components/Logo.js'
import Header from 'my-project/src/components/Header.js'
import Button from 'my-project/src/components/Button.js'

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