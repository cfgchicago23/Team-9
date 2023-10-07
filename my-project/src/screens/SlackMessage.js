// Credit: https://github.com/FaridSafi/react-native-gifted-chat/tree/09271fb04668f13fad602c7257c98aa7a72d23dc
// All unnecessary parts (eg avatars) are removed

import PropTypes from 'prop-types'
import React from 'react'
import { View, ViewPropTypes, StyleSheet } from 'react-native'

import { Day, utils } from 'react-native-gifted-chat'
import Bubble from './SlackBubble'

const { isSameUser, isSameDay } = utils

export default class Message extends React.Component {
  getInnerComponentProps() {
    const { containerStyle, ...props } = this.props
    return {
      ...props,
      position: 'left',
      isSameUser,
      isSameDay,
    }
  }

  renderDay() {
    if (this.props.currentMessage.createdAt) {
      const dayProps = this.getInnerComponentProps()
      if (this.props.renderDay) {
        return this.props.renderDay(dayProps)
      }
      return <Day {...dayProps} />
    }
    return null
  }

  renderBubble() {
    const bubbleProps = this.getInnerComponentProps()
    if (this.props.renderBubble) {
      return this.props.renderBubble(bubbleProps)
    }
    return <Bubble {...bubbleProps} />
  }

  render() {
    const marginBottom = isSameUser(
      this.props.currentMessage,
      this.props.nextMessage,
    )
      ? 2
      : 10

    return (
      <View>
        {this.renderDay()}
        <View
          style={[
            styles.container,
            { marginBottom },
            this.props.containerStyle,
          ]}
        >
          {this.renderBubble()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginRight: 0,
  },
})

Message.defaultProps = {
  renderBubble: null,
  renderDay: null,
  currentMessage: {},
  nextMessage: {},
  previousMessage: {},
  user: {},
  containerStyle: {},
}

Message.propTypes = {
  renderBubble: PropTypes.func,
  renderDay: PropTypes.func,
  currentMessage: PropTypes.object,
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  user: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
}