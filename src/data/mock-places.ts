import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Dish = {
  id: string;
  title: string;
  description: string;
  price: string;
  sideDishes?: DishSection[];
};
export type Survey = {
  id: string;
  title: string;
  question_one: string;
  question_two: string;
  question_three: string;
  question_four: string;
  question_five: string;
  value: string;
};

export type DishSection = {
  title: string;
  data: Dish[];
};

export type Place = {
  id: string;
  title: string;
  subTitle: string;
  dishSection?: DishSection[];
};

export type RemarkablePlaceTab = {
  [name: string]: Place[];
};

export const mockDishDetails: Dish = {
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  description: faker.lorem.lines(3),
  price: faker.commerce.price(5, 60),

  sideDishes: [
    {
      title: 'Cake',
      data: Array(5)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Drink',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Salad',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
  ],
};

export const mockSurveyDetails: Survey = {
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  question_one: faker.lorem.lines(3),
  question_two: faker.lorem.lines(3),
  question_three: faker.lorem.lines(3),
  question_four: faker.lorem.lines(3),
  question_five: faker.lorem.lines(3),
  value: faker.commerce.price(5, 60),
};

export const mockPlaceDetails: Place = {
  id: '1',
  title: 'Neapolitan pizza, Italy. Neapolitan pizza',
  subTitle: 'Western, Spaghetti',
  dishSection: [
    {
      title: 'Burgers',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Pizza',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Sushi and rolls',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
    {
      title: 'Pasta',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Dessert',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
  ],
};

export const mockPlaceList: Place[] = Array(10)
  .fill(0)
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
    };
  });

export const mockPlaces: Place[] = Array(3)
  .fill(0)
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
    };
  });

export const mockRemarkablePlace: RemarkablePlaceTab = {
  featured: [
    {
      id: '1',
      title: 'Neapolitan pizza, Spaghetti - Italy',
      subTitle: 'Western, Spaghetti',
    },
    {
      id: '2',
      title: 'Banh mi - Saigon - 200 Bui Thi Xuan',
      subTitle: 'Eastern, BanhMi, Breads',
    },
    {
      id: '3',
      title: 'Moules frites, Belgium - United State',
      subTitle: 'US, Fast food, Burger, Chicken',
    }
  ],
  newest: [
    {
      id: '1',
      title: 'Spaghetti - Italy',
      subTitle: 'Western, Spaghetti',
    },
    {
      id: '2',
      title: 'Banh mi - Saigon',
      subTitle: 'Eastern, BanhMi, Breads',
    },
    {
      id: '3',
      title: 'KFC - United State',
      subTitle: 'US, Fast food, Burger, Chicken',
    }
  ],
  trending: [
    {
      id: '1',
      title: 'Spaghetti  - Italy',
      subTitle: 'Western, Spaghetti',
    },
    {
      id: '2',
      title: 'Banh mi - Saigon',
      subTitle: 'Eastern, BanhMi, Breads',
    },
    {
      id: '3',
      title: 'Gumbo, Louisiana, US - United State',
      subTitle: 'US, Fast food, Burger, Chicken',
    }
  ],
};
