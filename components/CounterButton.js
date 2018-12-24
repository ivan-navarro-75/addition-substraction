import React from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

export default class CounterButton extends React.Component {
  state = {
    animation: new Animated.Value(0),
    tapAnimation: new Animated.Value(0),
    count: 0
  }

  toggleCounter = () => {
    const toValue = this.open ? 0 : 1

    Animated.timing(this.state.animation, {
      toValue,
      duration: 300
    }).start(() => {
      this.open = !this.open
    })
  }

  addClick = () => {
    if (this.open) {
      this.setState(state => ({
        count: state.count + 1
      }))
      Animated.timing(this.state.tapAnimation, {
        toValue: 1,
        duration: 500
      }).start(() => {
        this.state.tapAnimation.setValue(0)
        this.toggleCounter()
      })
    } else {
      this.toggleCounter()
    }
  }

  removeClick = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
    Animated.timing(this.state.tapAnimation, {
      toValue: 1,
      duration: 500
    }).start(() => {
      this.state.tapAnimation.setValue(0)
      this.toggleCounter()
    })
  }

  render() {
    const scalePlusInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.5]
    })

    const translatePlusInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 40]
    })

    const rotationPlusInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg']
    })

    const translateMinusInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -100]
    })

    const translateCountInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    })

    const scaleCounterInterpolate = this.state.tapAnimation.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.25, 1]
    })

    const plusStyle = {
      transform: [
        {
          scale: scalePlusInterpolate
        },
        {
          translateX: translatePlusInterpolate
        },
        { rotate: rotationPlusInterpolate }
      ]
    }

    const minusStyle = {
      transform: [
        {
          translateX: translateMinusInterpolate
        }
      ]
    }

    const countStyle = {
      transform: [
        {
          translateX: translateCountInterpolate
        }
      ]
    }

    const textChangeStyle = {
      transform: [
        {
          scale: scaleCounterInterpolate
        }
      ]
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          height: '100%',
          alignItems: 'center'
        }}
      >
        <TouchableWithoutFeedback onPress={this.removeClick}>
          <Animated.View
            style={[styles.button, styles.minusButton, minusStyle]}
          >
            <Icon name="minus" size={15} color="#808080" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.countLabel, countStyle]}>
          <Animated.Text style={[styles.countText, textChangeStyle]}>
            {this.state.count}
          </Animated.Text>
        </Animated.View>
        <TouchableWithoutFeedback onPress={this.addClick}>
          <Animated.View style={[styles.button, styles.plusButton, plusStyle]}>
            <Icon name="plus" size={30} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  },

  plusButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#38eeff'
  },
  minusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#808080'
  },
  countLabel: {
    position: 'absolute',
    right: 0,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#f6f6f6'
  },
  countText: {
    fontSize: 40,
    color: '#808080'
  }
})
