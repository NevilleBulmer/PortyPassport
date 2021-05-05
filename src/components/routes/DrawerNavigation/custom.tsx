// import * as React from 'react';
// import { View, Text, StyleSheet } from "react-native";
// import { 
//     DrawerContentScrollView, 
//     DrawerItem } from '@react-navigation/drawer';

// export function DrawerContent(props) 
// {
//     return(
//         <View>
//             <Text>TEST</Text>
//         </View>
//     );
// }

// export default DrawerContent;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import themeContext from '@src/context/theme-context';
import {ColorSchemeName} from 'react-native-appearance';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    // const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <View style={{marginLeft:10, flexDirection:'column'}}>
                                <Text style={styles.userTitle}>Neville Bulmer</Text>
                                <Text style={styles.userTitle}>Balance - 1500</Text>
                                
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            label="Surveys"
                            onPress={() => {props.navigation.navigate('Surveys')}}
                        />
                        <DrawerItem 
                            label="Account"
                            onPress={() => {props.navigation.navigate('Account')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {_onItemPressed}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={selectedTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    // icon={({color, size}) => (
                    //     <Icon 
                    //     name="exit-to-app" 
                    //     color={color}
                    //     size={size}
                    //     />
                    // )}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Account')}}
                />
            </Drawer.Section>
        </View>
        
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userTitle: {
        textDecorationColor: '#a6a6a8',
    },
    userInfoSection: {
        paddingLeft: 7,
    },
    categoryTitle: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold',
      },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#a6a6a8',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
  });

  export default DrawerContent;