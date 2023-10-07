import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from 'my-project/src/components/Background.js'
import Logo from 'my-project/src/components/Logo.js'
import Header from 'my-project/src/components/Header.js'
import Button from 'my-project/src/components/Button.js'
import TextInput from 'my-project/src/components/TextInput.js'
import BackButton from 'my-project/src/components/BackButton.js'
import { theme } from '../core/theme'
import { emailValidator } from 'my-project/src/helpers/emailValidator.js'
import { passwordValidator } from 'my-project/src/helpers/passwordValidator.js'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value, "Leader")
    const passwordError = passwordValidator(password.value, "Leader")
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    if (email.value !== "clubleader@email.com" || password.value !== "leaderpassword") {
        setPassword({ ...password, error: "You're not allowed to access this page" })
    } else {
        console.log(email.value)
        console.log(password.value)
        navigation.navigate('Leader Dashboard')
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Hello.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password ?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={() => onLoginPressed()}>
        Log in
      </Button>
      <View style={styles.row}>
        <Text>You do not have an account yet ?</Text> 
      </View>
      <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Create !</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})