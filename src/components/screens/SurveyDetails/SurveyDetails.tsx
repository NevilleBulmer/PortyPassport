import * as React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet, 
  View,
  KeyboardAvoidingView,
  Platform,
  // TextInput
} from 'react-native';

import {useTheme, useNavigation} from '@react-navigation/native';
import {Text, Button} from '@src/components/elements';
import {mockDishDetails, Dish} from '@src/data/mock-places';
import CartContext from '@src/context/cart-context';
import TextField from "@src/components/elements/TextField";
// import {Viewer} from '@src/components/elements';

import HeadingInformation from './HeadingInformation';

import styles from './styles';

import styles_backup from './HeadingInformation/styles';

export default function SurveyDetails({ route, navigation }) {
  const { title, question_one, question_two, question_three, question_four, question_five, value } = route.params;

  const [totalPrice, setTotalPrice] = React.useState(
    parseFloat(mockDishDetails.price),
  );
  const [selectedSideDishes, setSelectedSideDishes] = React.useState<Dish[]>(
    [],
  );
  const [scrollY] = React.useState(new Animated.Value(0));
  const {
    colors: {background},
  } = useTheme();
  const {goBack} = useNavigation();
  const {updateCartItems} = React.useContext(CartContext);

  const onAddToBasketButtonPressed = () => {
    updateCartItems(
      [
        {
          dish: mockDishDetails,
          sideDishes: selectedSideDishes,
        },
      ],
      totalPrice,
    );
    goBack();
  };

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });

  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [150, 250],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rootContainer}>
        <KeyboardAvoidingView
          style={cardStyles.cardPrimary} 
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
          enabled>
          <Animated.ScrollView
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: scrollY,
                    },
                  },
                },
              ],
              {
                useNativeDriver: true,
              },
            )}>
            {/* <Viewer style={styles_backup.headingContainer}>
              <Viewer style={styles_backup.titleContainer}>
                <Text style={styles_backup.title}>{title}</Text>
                <Text isPrimary style={styles_backup.title}>
                  Value: {value}
                </Text>
              </Viewer>
              <Text style={styles_backup.description}>{question_one}</Text>
              <TextField placeholder="Enter Answer" />
              <Text style={styles_backup.description}>{question_one}</Text>
              <TextField placeholder="Enter Answer" />
              <Text style={styles_backup.description}>{question_one}</Text>
              <TextField placeholder="Enter Answer" />
              <Text style={styles_backup.description}>{question_one}</Text>
              <TextField placeholder="Enter Answer" />
              <Text style={styles_backup.description}>{question_one}</Text>
              <TextField placeholder="Enter Answer" />
            </Viewer> */}




          {/* .fill(0)
            .map((_) => {
              const image = require('@src/assets/place-details/main-photo.jpg');
              return {
                id: faker.random.uuid(),
                title: faker.commerce.department(),
                image,
                subTitle: faker.lorem.lines(2),
                distance: 75,
                time: 90,
                rating: 4,
              }; */}




            <HeadingInformation data={route.params} />
          </Animated.ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.addToBasketButtonContainer}>
          <Button
            childrenContainerStyle={styles.addToBasketButton}
            onPress={onAddToBasketButtonPressed}>
            <Text style={styles.addToBasketButtonText}>
              Take Survey
            </Text>
          </Button>
        </View>
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerOpacity,
              backgroundColor: background,
            },
          ]}>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const cardStyles = StyleSheet.create({

  cardPrimary: {
    height: 500,
    marginTop: 50
  }
});