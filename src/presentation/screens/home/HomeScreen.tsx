import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Home" to={() => navigation.navigate('Home')} />

      <PrimaryButton
        label=" Products"
        to={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        to={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
