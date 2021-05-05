import {ImageSourcePropType} from 'react-native';
const faker = require('faker');

export type VenueSection = {
  title: string;
};

export const mockPlaceDetails = {
  VenueSection: [
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

