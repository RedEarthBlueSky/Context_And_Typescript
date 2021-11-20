//  Theme.context.tsx
import React, { useContext } from 'react'
import { ProgressViewIOSComponent } from 'react-native'
import {DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID} from '../themes/DefaultDark.theme'
import {DEFAULT_LIGHT_THEME, DEFAULT_LIGHT_THEME_ID} from '../themes/DefaultLight.theme'
import { Theme } from '../types/theme.interface'

//  Our context provider will provide this object shape
interface ProvidedValue {
  theme: Theme,
  toggleTheme: () => void
}

//  Creating our context
//  Important: the defined object here is only received by the 
//  consumer components when there is no rendered context provider
//  in the view heirarchy, so basically it will provide a 
//  fall back object 
const ThemeContext = React.createContext<ProvidedValue> ({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered')
  }
})

//  Because our stateful context provider will be a React component
//  we can define some props for it too
interface Props {
  initial: Theme
  children?: React.ReactNode
}

//  Creating our stateful context provider
//  We are using React.memo for optimisation
export const ThemeProvider = React.memo<Props>((props) => {

  //  store the actual theme as an internal state of the provider
  const [theme, setTheme] = React.useState<Theme>(props.initial)

  //  Implement method for toggling the theme
  //  Using the React.useCallback hoook for optimization
  const ToggleThemeCallback = React.useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_LIGHT_THEME
      }

      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_DARK_THEME
      }
      return currentTheme
    })
  }, [])

  //  Building up the provider object
  //  We're using useMemo hook for optimisation
  const MemoisedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback
    }

    return value
  }, [theme, ToggleThemeCallback])

  //  Render our context provider by passing it the value to provide
  return (
    <ThemeContext.Provider value={MemoisedValue}>
      {props.children}
    </ThemeContext.Provider>
  )
})

//  creating a custom context consumer hook for function components
export const useTheme = () => React.useContext(ThemeContext)






