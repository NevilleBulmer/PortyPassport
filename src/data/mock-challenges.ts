import {ImageSourcePropType} from 'react-native';
const faker = require('faker');

export type ChallengesSection = {
  title: string;
};

export const mockPlaceDetails = {
  ChallengesSection: [
    {
      title: '',
      data: Array([])
        .fill([])
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    }
  ],
};

