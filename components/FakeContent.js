import React from 'react'
import { StyleSheet, View } from 'react-native'

import GreyBar from './GreyBar'

const FakeContent = () => (
  <View>
    <GreyBar height={100} />
    <View style={styles.row}>
      <GreyBar width="35%" height={25} />
      <GreyBar width="25%" height={25} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 10
  }
})

export default FakeContent
