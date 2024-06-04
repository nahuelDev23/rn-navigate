import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface Props {
  to: () => void;
  label: string;
}
export const PrimaryButton = ({to, label}: Props) => {
  return (
    <View style={globalStyles.container}>
      <Pressable style={globalStyles.primaryButton} onPress={() => to()}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};
