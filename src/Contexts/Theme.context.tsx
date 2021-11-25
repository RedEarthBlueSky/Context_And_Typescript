//  Theme.context.tsx

//  Creating the theme context
//  Provide the Theme object with the help of a React context
//  This keeps wit theming logic within the lifecycle of the React app
//  And not bound to the global lifecycle of Node

//  When components are consuming the provided Theme object and the theme object changes
//  the components will re-render automatically

//  As Javascript functions are first class objects; can be stored as variables, passed
//  as an arguments to a function, returned from a function, we can provide a 
//  function to change the theme in the React Context to pass to our consumer components

import React from 'react'
import {DEFAULT_DARK_THEME_ID, DEFAULT_DARK_THEME} from '../themes/DefaultDark.theme'
import {DEFAULT_LIGHT_THEME_ID, DEFAULT_LIGHT_THEME } from '../themes/DefaultLight.theme'
import { Theme } from '../types/Theme.interface'

//  Our context provider will provide this object shape
interface ContextProvidedValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

//  Creating the Context: Important:  The defined object here is only received by
//  the consumber components when there is no rendered context provider in the view
//  hierarchy, so basically it will provide a fallback object
const ThemeContext = React.createContext<ContextProvidedValue> ({
  theme: DEFAULT_DARK_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!')
  }
})

//  Because our stateful context provider will be a React components we can define
//  some props for it too
interface ContextProviderProps {
  initial: Theme
  children?: React.ReactNode
}

//  Creating our stateful context provider we are using React.memo for optimization
export const ThemeProvider = React.memo<ContextProviderProps>((props) => {
  //  store the actual theme as an internal state of the provider
  const [theme, setTheme] = React.useState<Theme>(props.initial)

  //  implement a method for toggling the Themee
  //  using React.useCallback hook for optimisation

  const ToggleThemeCallback = React.useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME;
      }
      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  //  Build up the provided object with React.memo hook for optimisation
  const MemoizedValue = React.useMemo(() => {
    const value: ContextProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback
    }

    return value
  }, [theme, ToggleThemeCallback])

  //  Render our context provider by passing it the value to provide
  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  )
})

//  create a custom context consumer hook for function components
export const useTheme = () => React.useContext(ThemeContext)

