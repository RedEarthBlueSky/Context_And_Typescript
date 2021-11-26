//  Define the theme with the help of interfaces
//  Components will be styled based on the theme interface
//  Not on the concrete theme variations

export interface ColorTheme {
  primary: string,
  onPrimary: string,
  primaryDark: string,
  surface: string,
  onSurface: string,
  background: string,
}

export interface SpacingTheme {
  base: number,
  double: number
}

export interface Theme {
  id: string,
  color: ColorTheme,
  spacing: SpacingTheme,
}

export interface ToolbarProps {
  title: string;
}

