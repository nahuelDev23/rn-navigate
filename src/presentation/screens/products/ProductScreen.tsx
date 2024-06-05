import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';

export const ProductScreen = () => {
  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  //poner el titulo en el header del nav
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <View>
      <Text>
        Product {id}-{name}
      </Text>
    </View>
  );
};
