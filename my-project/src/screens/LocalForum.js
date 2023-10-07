import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import SlackMessage from './SlackMessage'

export default class App extends React.Component {
  state = {
    messages: [],
  }

  // need to add in mongodb database
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer!!!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    //make this take in what user id m is to add to the "slack" profile
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderMessage(props) {
    const {
      currentMessage: { text: currText },
    } = props

    return <SlackMessage {...props}/>
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderMessage={this.renderMessage}
      />
    )
  }
}