import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfilScreen} from '../screens/profile/ProfilScreen';
import {AboutScreen} from '../screens/about/About';
import {HamburguerMenu} from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfilScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
