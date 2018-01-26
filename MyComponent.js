import React from 'react'
import { View, Text } from 'react-native'

const MyText = 'Hello World! This is my component :D'

export default class MyComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {MyText}
        </Text>
      </View>
    )
  }
}