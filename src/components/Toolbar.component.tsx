//  reconfigure to consume the custom hoook
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Theme } from '../types/Theme.interface'
import { useThemeAwareObject } from '../hooks/ThemeAwareObject.hook'

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: theme.spacing.base,
      width: '100%',
      marginBottom: 20,
    },
    text: {
      color: theme.color.onPrimary,
      fontSize: 18,
      fontWeight: 'bold',
    },
  })
  return styles
}

export interface ToolbarProps {
  title: string;
}

export const Toolbar = React.memo<ToolbarProps>((props) => {
  //  Calling our custom hook
  const Styles = useThemeAwareObject(createStyles)


  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        {props.title}
      </Text>
    </View>
  )
})


