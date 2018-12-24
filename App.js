import React from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { Constants } from 'expo'
import Icon from '@expo/vector-icons/FontAwesome'

import FakeContent from './components/FakeContent'
import UnitsSelector from './components/UnitsSelector'

const App = () => (
  <View style={styles.container}>
    <FakeContent />
    <UnitsSelector />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight + 20,
    marginLeft: 20,
    marginRight: 20
  }
})

export default App
