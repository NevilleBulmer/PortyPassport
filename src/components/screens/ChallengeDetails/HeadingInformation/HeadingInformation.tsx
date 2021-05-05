import * as React from 'react';
import {Container, Text} from '@src/components/elements';
import {Dish} from '@src/data/mock-places';
import styles from './styles';

type HeadingInformationProps = {
  data: Dish;
};

const HeadingInformation: React.FC<HeadingInformationProps> = ({data}) => {
  const {title, description, value} = data;
  return (
    <Container style={styles.headingContainer}>
      <Container style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text isPrimary style={styles.title}>
          Value: {value}
        </Text>
      </Container>
      <Text style={styles.description}>{description}</Text>
    </Container>
  );
};

export default HeadingInformation;
