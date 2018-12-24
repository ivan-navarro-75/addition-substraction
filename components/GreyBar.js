import React from 'react'
import { StyleSheet, View } from 'react-native'

const GreyBar = ({ width, height }) => (
  <View style={[styles.bar, { width, height }]} />
)

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#d3d3d3',
    margin: 5,
    borderRadius: 5
  }
})

export default GreyBar
