import React from 'react'
import { StyleSheet, View } from 'react-native'

import Price from './Price'
import CounterButton from './CounterButton'

const UnitsSelector = () => (
  <View style={styles.container}>
    <Price amount={29} />
    <CounterButton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default UnitsSelector
