import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from '@src/components/elements';
import Challenges from '@src/components/screens/Challenges';
import EditProfile from '@src/components/screens/EditProfile';
import {ScreenNavigationProps} from '../types';
import styles from './styles';

type ChallengeStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const ChallengeStack: React.FC<ChallengeStackProps> = (props) => {
  const {navigation} = props;
  const _renderAddAddressHeaderRight = () => {
    return (
      <Icon
        name="map"
        size={18}
        isPrimary
        onPress={() => navigation.navigate('SelectLocationScreen')}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="ChallengesScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Challenges',
          };
        }}
        name="ChallengesScreen"
        component={Challenges}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Edit Profile',
          };
        }}
        name="EditProfileScreen"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ChallengeStack;
