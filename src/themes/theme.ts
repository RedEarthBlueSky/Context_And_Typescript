// theme.ts
interface ColorTheme {
  primary: string;
  onPrimary: string;
  surface: string;
  onSurface: string;
  background: string;
}
export const COLOR: ColorTheme = {
  primary: '#03a9f4',
  onPrimary: '#fff',
  surface: '#fff',
  onSurface: '#000',
  background: '#dedede',
};
interface SpacingTheme {
  base: number;
  double: number;
}
export const SPACING: SpacingTheme = {
  base: 8,
  double: 16,
};