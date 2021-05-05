import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from '../Stacks/HomeStack';
import ChallengesStack from '../Stacks/ChallengesStack';
import VenuesStack from '../Stacks/VenuesStack';
import ActivityHistoryStack from '../Stacks/ActivityHistoryStack';

type TabNavigationProps = {};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator();
const {Navigator} = Tab;

const renderTabBarIcon = (routeName: string) => {
  return (props: TabBarIconProps) => {
    const {color} = props;
    let iconName = 'home';
    switch (routeName) {
      case 'Wallet':
        iconName = 'wallet';
        break;
      case '1500':
        iconName = 'money-bill-wave';
        break;
      case 'Venues':
        iconName = 'map-pin';
        break;
      case 'Challenges':
        iconName = 'tasks';
        break;
      default:
        break;
    }
    return <Icon name={iconName} solid size={24} color={color} />;
  };
};

const TabNavigation: React.FC<TabNavigationProps> = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={(props) => {
        const {
          route: {name: routeName},
        } = props;
        return {
          tabBarIcon: renderTabBarIcon(routeName),
        };
      }}>
      <Tab.Screen name="Wallet" component={HomeStack} />
      <Tab.Screen name="1500" component={ActivityHistoryStack} />
      <Tab.Screen name="Venues" component={VenuesStack} />
      <Tab.Screen name="Challenges" component={ChallengesStack} />
    </Navigator>
  );
};

export default TabNavigation;
