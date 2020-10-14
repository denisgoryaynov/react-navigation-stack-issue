import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const Screen = ({navigation, route}) => (
  <View style={styles.view}>
    <Text>{route.params.text}</Text>
    {route.params.nextScreen && (
      <Button
        onPress={() => navigation.navigate(route.params.nextScreen)}
        title={'Next Screen'}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
