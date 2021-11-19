//  Theme.context.tsx

import React from 'react'

import { 
  DEFAULT_DARK_THEME, 
  DEFAULT_DARK_THEME_ID 
} from '../themes/DefaultDark.theme'

import { 
  DEFAULT_LIGHT_THEME, 
  DEFAULT_LIGHT_THEME_ID 
} from '../themes/DefaultLight.theme'

import { Theme } from '../types/theme.interface'

//  Our context provider will provide this object shape
interface ProvidedValue {
  theme: Theme,
  toggleTheme: () => void
}

//  Creating our context
//  Important: the defined object here is only received by the 





