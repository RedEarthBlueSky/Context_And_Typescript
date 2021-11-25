import React from 'react'
import { Animated, StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

import { Theme } from '../../types/Theme.interface'
import { useThemeAwareObject } from '../../hooks/ThemeAwareObject.hook'

import { renderComponentStyles } from './styles/RenderComponent.styles'

export const RenderCounter = React.memo(() => {
  const Styles = useThemeAwareObject(renderComponentStyles)

  const numberOfRendersRef = React.useRef<number>(1)

  const opacityAnimatedValueRef = React.useRef<Animated.Value>(new Animated.Value(0))

})  //  Closing tags RenderCounter