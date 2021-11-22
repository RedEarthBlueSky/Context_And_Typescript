import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLOR, SPACING } from '../themes/theme'

const Styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: COLOR.primary,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: SPACING.base,
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: COLOR.onPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export interface ToolbarProps {
  title: string;
}
export class Toolbar extends React.Component<ToolbarProps> {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}
