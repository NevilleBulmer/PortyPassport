import * as React from 'react';
import {Container, Text, TextField} from '@src/components/elements';
import {Survey} from '@src/data/mock-places';
import styles from './styles';

type HeadingInformationProps = {
  data: Survey;
};

const HeadingInformation: React.FC<HeadingInformationProps> = ({data}) => {
  const {title, question_one, question_two, question_three, question_four, question_five, value} = data;
  return (
    <Container style={styles.headingContainer}>
      <Container style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text isPrimary style={styles.title}>
          Value: {value}
        </Text>
      </Container>
      <Text style={styles.description}>{question_one}</Text>
      <TextField placeholder="Enter Answer" />
      <Text style={styles.description}>{question_two}</Text>
      <TextField placeholder="Enter Answer" />
      <Text style={styles.description}>{question_three}</Text>
      <TextField placeholder="Enter Answer" />
      <Text style={styles.description}>{question_four}</Text>
      <TextField placeholder="Enter Answer" />
      <Text style={styles.description}>{question_five}</Text>
      <TextField placeholder="Enter Answer" />
    </Container>
  );
};

export default HeadingInformation;
