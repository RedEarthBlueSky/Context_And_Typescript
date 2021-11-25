import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View} from 'react-native'

import { DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME } from '../../themes'
import { Theme } from '../../types/Theme.interface'
import { useThemeAwareObject } from '../../hooks/ThemeAwareObject.hook'
import { useTheme } from '../../Contexts/Theme.context'
import { cardStyles } from './styles/CardStyles'
// import { RenderCounter } from './RenderCounter.todoscomponents

export const Card = React.memo(() =>{
  const { theme, setTheme, toggleTheme } = useTheme()
  const Styles = useThemeAwareObject(cardStyles)
  console.log(useTheme())
  //  have a seperate helper file?
  const InfoTextBoldStyles = React.useMemo<StyleProp<TextStyle>>(() => {
    const infoTextBoldStyles: StyleProp<TextStyle> = [Styles.infoText, Styles.infoTextBold]
    return infoTextBoldStyles
  }, [Styles])

  //  refactor to a seperate components?
  const ToggleButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={toggleTheme} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Toggle the Theme'}</Text>
      </TouchableOpacity>
    )
  }, [setTheme, Styles])

  const SetLightThemeButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={() => setTheme(DEFAULT_LIGHT_THEME)} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Set Light Theme!'}</Text>
      </TouchableOpacity>
    )
  }, [setTheme, Styles])

  const SetDarkThemeButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={() => setTheme(DEFAULT_DARK_THEME)} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Set Dark Theme!'}</Text>
      </TouchableOpacity>
    )
  }, [setTheme, Styles])

  return (
    <View style={Styles.root}>
      <View style={Styles.infoTextWrapper}>
        <Text style={Styles.infoText}>{'The current theme is: '}</Text>
        <Text style={InfoTextBoldStyles}>{theme.id}</Text>
      </View>
      <RenderCounter />
      <View style={Styles.buttonsWrapper}>
        {ToggleButtonElement}
        {SetLightThemeButtonElement}
        {SetDarkThemeButtonElement}
      </View>
    </View>
  ) //  Close JSX return element
}) //  Close Card Functional Component