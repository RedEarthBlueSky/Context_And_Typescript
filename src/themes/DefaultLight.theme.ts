//  DefaultLight.theme.ts

import { ColorTheme, SpacingTheme, Theme } from "../types/Theme.interface"

//  Define our light theme colors
const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  primary: '#03a9f4',
  onPrimary: '#fff',
  primaryDark: '#0288d1',
  surface: '#fff',
  onSurface: '#000',
  background: '#dedede'
}

const DEFAULT_LIGHT_SPACING_THEME = {
  base: 8,
  double: 16,
}

export const DEFAULT_LIGHT_THEME_ID = 'default-light'

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
}