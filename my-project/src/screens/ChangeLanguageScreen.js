import React from 'react'
import Background from 'my-project/src/components/Background.js'
import { Button } from "react-native-paper";

export default function ChangeLanguageScreen({ navigation }) {
  return (
    <Background>
      <Button mode="contained" onPress={() => navigation.navigate('SpanishLogin')}>
        Spanish
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('SpanishLogin')}>
        Nepali
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('SpanishLogin')}>
        Thai
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('SpanishLogin')}>
        Scottish
      </Button>
    </Background>
  )
}
