import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import SlackMessage from './SlackMessage'

export default class App extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    data = require('my-project/data2.json');

    this.setState({
      messages: [this.populateMsgs(data.messages)],
    })
  }

  populateMsgs(msgs = []){
    messages = []
    msgs.map((message) => {
        console.log(message)
        messages.push({
            _id: message.recipientID,
            text: message.message,
            createdAt: message.timeCreated,
            user: {
              _id: message.senderID,
              name: message.senderName,
            },
          })
    });
    console.log(messages)
    return messages;
  }

  onSend(messages = []) {
    const fs = require('react-native-fs');
 
    print(messages.user['name'])
    data.messages.push({
        "senderID": messages.user['_id'],
        "senderName": messages.user['name'],
        "recipientID": message.user['_id'],
        "recipientName": message.user['name'], 
        "message": messages['renderMessage'],
        "timeCreated": messages['timeCreated']
    })
    fs.writeFile("my-project/data.json", data, (err) => {
        if (err) 
            console.log(err); 
        else { 
            console.log("JSON database updated successfully\n"); 
        } 
    })

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderMessage(props) {
    const {
      currentMessage: { text: currText },
    } = props

    console.log(currText)
    return <SlackMessage {...props}/>
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 6,
          name: "leader1"
        }}
        timeCreated={new Date()}
        renderMessage={this.renderMessage}
      />
    )
  }
}