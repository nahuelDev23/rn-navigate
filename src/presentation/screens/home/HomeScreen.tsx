import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  });

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
