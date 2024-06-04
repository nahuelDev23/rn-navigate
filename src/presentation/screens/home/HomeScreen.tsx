import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Home"
        to={() => navigation.navigate('Home' as never)}
      />

      <PrimaryButton
        label=" Products"
        to={() => navigation.navigate('Products' as never)}
      />
      <PrimaryButton
        label="Settings"
        to={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
