import React, { Component, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from 'react-native'
//import ProgressBar from "@ramonak/react-progress-bar";

export default StudentProgress = () => {
  const optionList = [
    {
      id: 1,
      color: '#FF4500',
      icon: './assets/icon.png',
      name: 'User 1',
      percentage: 75
    },
    {
      id: 2,
      color: '#E37383',
      icon: './assets/icon.png',
      name: 'User 2',
      percentage: 75
    },
    {
      id: 3,
      color: '#4682B4',
      icon: './assets/icon.png',
      name: 'User 3',
      percentage: 75
    },
    {
      id: 4,
      color: '#6A5ACD',
      icon: './assets/icon.png',
      name: 'User 4',
      percentage: 75
    },
    {
      id: 5,
      color: '#FF69B4',
      icon: './assets/icon.png',
      name: 'User 5',
      percentage: 75
    },
    {
      id: 6,
      color: '#00BFFF',
      icon: './assets/icon.png',
      name: 'User 6',
      percentage: 75
    }
  ]

  const [options, setOptions] = useState(optionList)
  const [query, setQuery] = useState()

  const cardClickEventListener = item => {
    Alert.alert(item.name)
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.notificationList}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { borderColor: '#E37383' }]}
              onPress={() => {
                cardClickEventListener(item)
              }}>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text> 
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.progressBar}>{item.percentage + ""}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center',
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: '#eee',
    marginTop: 5,
  },
  progressBar: {
    height: 20,
    width: 300,
    backgroundColor: 'pink',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5
  }
})