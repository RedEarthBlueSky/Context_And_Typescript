//  ThemeAwareObject.hook.tsx

//  REFACTORING THE THEME CONSUMING LOGIC
//  Became the them consuming and theme aware object generating logic
//  will be used in a number of components, we can apply the DRY 
//  paradigm by refactoring the logic into a custom hook

import React from 'react'

import { Theme } from '../types/Theme.interface'
import { useTheme } from '../Contexts/Theme.context'
import { findNodeHandle } from 'react-native'

//  Create a type alias for our generator function
//  Notice that it's matching the form of the 'createStyles
//  function we used previously
type Generator<T extends {}> = (theme: Theme) => T

//  Creating our custom hook
const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  // consume the provided value  of our theme context
  const { theme } = useTheme()

  //  Generate the object based on the current theme using React.useMemo
  //  optimisation, the object will be re-generated if the theme changes
  //  or the generator function reference changes
  const ThemeAwareObject = React.useMemo(
    () => fn(theme),
    [fn, theme]
  )

  return ThemeAwareObject
}

export { useThemeAwareObject }

