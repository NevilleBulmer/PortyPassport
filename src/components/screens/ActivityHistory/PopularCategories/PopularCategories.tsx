import * as React from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {Text, Container, Touchable} from '@src/components/elements';
import {mockCategories} from '@src/data/mock-categories';
import styles from './styles';

type PopularCategoriesProps = {};

const PopularCategories: React.FC<PopularCategoriesProps> = () => {
  
  const {
    colors: {border},
  } = useTheme();

  return (
    <Container style={styles.categoryContainer}>
      <Touchable>
        <View style={[styles.codeItem, {borderColor: border}]}>
          
          <Container>
            <Text style={styles.categoryTitle}>1500 - Points</Text>
            <Text style={styles.codeTitle}>5674238956234785624</Text>
          </Container>
        </View>
      </Touchable>
    </Container>
  );
};

export default PopularCategories;
