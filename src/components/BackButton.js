import React from 'react'
import { connect } from 'react-redux'

import {
  View,
  Text,
} from 'react-native'

import { changeScreen } from '../store/actions/actions'
import { About } from './styles'


class BackButton extends React.Component {
  constructor(props) {
    super(props)
    this.back = this.back.bind(this)
  }

  back() {
    this.props.dispatch(changeScreen('Splash'))
  }

  render() {
    return (
      <View style={About.backButtonContainer}>
        <Text style={About.backButton} onPress={this.back}>Back</Text>
      </View>
    )
  }
}


export const ConnectedBackButton = connect((store) => ({
  dispatch: store.dispatch,
}))(BackButton)
