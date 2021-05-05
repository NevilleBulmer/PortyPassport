import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Profile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: ImageSourcePropType;
  coverPhoto: ImageSourcePropType;
};

export const profile: Profile = {
  id: faker.random.uuid(),
  name: "Neville bulmer",
  email: "neville.bulmer@gmail.com",
  phone: "01916771261",
  avatar: require('../assets/profile/avatar.png'),
  coverPhoto: require('../assets/profile/cover-photo.jpg'),
};
