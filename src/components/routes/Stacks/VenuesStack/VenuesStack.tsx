import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from '@src/components/elements';
import Venues from '@src/components/screens/Venues';
import {ScreenNavigationProps} from '../types';
import styles from './styles';
import {Alert, AlertButton} from 'react-native';

type VenuesStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const VenuesStack: React.FC<VenuesStackProps> = () => {
  const alertButtons: AlertButton[] = [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'OK'},
  ];

  return (
    <Stack.Navigator initialRouteName="NotificationScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Venues',
            headerRightContainerStyle: styles.headerRightContainer,
          };
        }}
        name="NotificationScreen"
        component={Venues}
      />
    </Stack.Navigator>
  );
};

export default VenuesStack;