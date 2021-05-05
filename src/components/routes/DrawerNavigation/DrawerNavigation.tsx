import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SurveyStack from '../Stacks/SurveyStack';
import AccountStack from '../Stacks/AccountStack';
import VenuesStack from '../Stacks/VenuesStack';
import ActivityHistoryStack from '../Stacks/ActivityHistoryStack';

import DrawerContent from "./custom"

import {
  Divider,
} from '@src/components/elements';

import TabNavigation from '../TabNavigation';

type DrawerNavigationProps = {};
const Drawer = createDrawerNavigator();
const {Navigator} = Drawer;

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
  return (
    <Navigator
      // drawerContent={ props => <DrawerContent { ...props } />}
      drawerStyle={{ 
        width: '50%' 
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigation} />
      {/* <Drawer.Screen name="Surveys" component={SurveyStack} /> */}
      <Drawer.Screen name="Account" component={AccountStack} />
    </Navigator>
  );
};

// To revert remove drawerContent={ props => <DrawerContent { ...props } /> from the navigator
// and delete custom.tsx
export default DrawerNavigation;



      

      
