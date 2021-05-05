import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from '@src/components/elements';
import Surveys from '@src/components/screens/Surveys';
import EditProfile from '@src/components/screens/EditProfile';
import {ScreenNavigationProps} from '../types';
import styles from './styles';

type SurveyStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const SurveyStack: React.FC<SurveyStackProps> = (props) => {
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
    <Stack.Navigator initialRouteName="SurveysScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Surveys',
          };
        }}
        name="SurveysScreen"
        component={Surveys}
      />
    </Stack.Navigator>
  );
};

export default SurveyStack;
