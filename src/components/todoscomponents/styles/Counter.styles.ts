//  RenderComponent.styles.ts
import { StyleSheet } from 'react-native'

import { Theme } from '../../../types/Theme.interface'

export const counterStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
    },
    infoText: {
      color: theme.color.onSurface,
      fontSize: 14,
    },
    infoTextBold: {
      fontWeight: 'bold',
    },
  })
  return styles
}