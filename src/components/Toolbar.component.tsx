//  reconfigure to consume the custom hoook
import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'

import { Theme, ToolbarProps } from '../types/Theme.interface'
import { useThemeAwareObject } from '../hooks/ThemeAwareObject.hook'
import { toolbarStyles } from './todoscomponents/styles/Toolbar.styles'

const createStyleVariables = (theme: Theme) => {
  const styleVariables = {
    statusBarColor: theme.color.primaryDark,
  };
  return styleVariables;
};

export const Toolbar = React.memo<ToolbarProps>((props) => {
  const Styles = useThemeAwareObject(toolbarStyles);
  const StyleVariables = useThemeAwareObject(createStyleVariables);

  const IosStatusBarElementOrNull = React.useMemo(() => {
    if (Platform.OS !== 'ios') {
      return null;
    }

    return <View style={Styles.iosStatusBar} />;
  }, [Styles]);

  return (
    <View>
      {IosStatusBarElementOrNull}
      <View style={Styles.container}>
        <StatusBar backgroundColor={StyleVariables.statusBarColor} barStyle={'light-content'} />
        <Text style={Styles.text}>{props.title}</Text>
      </View>
    </View>
  );
});




