import { StyleSheet, NativeModules  } from "react-native"
import { Theme } from "../../../types/Theme.interface"

const { StatusBarManager } = NativeModules

export const toolbarStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    iosStatusBar: {
      height: (StatusBarManager.HEIGHT) ? 44 : 20,
      backgroundColor: theme.color.primary,
    },
    container: {
      alignItems: 'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: theme.spacing.base,
      width: '100%',
      marginVertical: 20,
    },
    text: {
      color: theme.color.onPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
  })
  return styles;
}
