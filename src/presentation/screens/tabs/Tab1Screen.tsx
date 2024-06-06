import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
import {IoIcon} from '../../components/shared/IoIcon';
export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1</Text>
      <IoIcon name="rocket-outline" size={40} />
    </View>
  );
};
