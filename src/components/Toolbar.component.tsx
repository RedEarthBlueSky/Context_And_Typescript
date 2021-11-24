//  reconfigure to consume the provided theme
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Theme } from '../types/Theme.interface';
import { useTheme } from '../Contexts/Theme.context';

//  Create a function to generate our style sheet
//  based on the recieved theme
//  Note that we're working with theme interface values
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
  //  consume the provided value of our theme context
  const { theme } = useTheme()

  //  Generate our style sheet based on the current theme
  //  Using React.useMemo hook for optimisation,
  //  the Styles object will be re-generated if the theme changes
  const Styles = React.useMemo(
    () => createStyles(theme),
    [theme]
  )

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        {props.title}
      </Text>
    </View>
  )
})


