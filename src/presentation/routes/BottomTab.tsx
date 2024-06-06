import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTab} from './TopTab';
import {StackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: globalColors.background}}
      screenOptions={{
        //headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>Tab1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen name="Tab2" options={{title: 'Tab2'}} component={TopTab} />
      <Tab.Screen
        name="Tab3"
        options={{title: 'Tab3'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
