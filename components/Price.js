import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Price = ({ amount }) => (
  <Text style={styles.priceText}>{`${amount}$`}</Text>
)

const styles = StyleSheet.create({
  priceText: {
    fontSize: 70,
    color: '#808080'
  }
})

export default Price
