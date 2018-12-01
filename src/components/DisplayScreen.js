import React from 'react'
import { connect } from 'react-redux'
import { Button, View, ScrollView, Text, TextInput } from 'react-native'

import * as appActions from './../store/actions/actions';
import { Styles, About } from './styles'
import { ConnectedPlayerRow } from './PlayerRow'
import { ConnectedBackButton } from './BackButton'


class DisplayScreen extends React.Component {
  render() {

    const scorers = this.props.initialData.scorers

    return (
      <View style={ Styles.topScorersContainer }>
        <Text style={Styles.topScorersText}>Top Scorers:</Text>
          <View>
            <ScrollView style={Styles.scorersScrollView}>
              { Array(5).fill().map((_, i) => {
                  return <ConnectedPlayerRow key={i} playerRowIndex={i} record={scorers[i]}/>
                })
              }
            </ScrollView>
          </View>
          <View>
            <ConnectedBackButton />
          </View>
      </View>
    )
  }
}

export const ConnectedDisplayScreen = connect((store) => ({
  initialData: store.app.initialData,
  dispatch: store.dispatch,
}))(DisplayScreen)
