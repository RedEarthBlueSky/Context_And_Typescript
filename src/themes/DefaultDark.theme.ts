//  DefaultDark.theme.ts

import { ColorTheme, SpacingTheme, Theme } from "../types/theme.interface"

//  Define our light theme colors
const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  primary: '#03a9f4',
  onPrimary: '#fff',
  surface: '#fff',
  onSurface: '#000',
  background: '#dedede'
}

const DEFAULT_DARK_SPACING_THEME = {
  base: 8,
  double: 16,
}

export const DEFAULT_DARK_THEME_ID = 'default-dark'

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
}