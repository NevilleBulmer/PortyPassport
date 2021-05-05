import React, { useState, useEffect } from "react";
import { 
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Text, Touchable } from '@src/components/elements';
import styles from './styles';

type SurveyItemProps = {};
const DataDirectory = "http://35.207.12.159/PortyAPI/api/surveys/";

const SurveyItem: React.FC<SurveyItemProps> = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(DataDirectory)
    .then((response) => response.json())
    .then((json) => setData(json.results))
    .catch((error) => alert(error))
    .then(setLoading(false));
  })

  const navigation = useNavigation();

  return (
    <SafeAreaView>  
      
      { isLoading ? ( <ActivityIndicator/> ) : ( 
        <FlatList 
          data = { data }
          KeyExtractor = {({ id }, index) => id }
          renderItem = {({ item }) => (
            <Touchable onPress={() => navigation.navigate('SurveyDetailsModal', {
              title: item.survey_title,
              question_one: item.survey_question_one,
              question_two: item.survey_question_two,
              question_three: item.survey_question_three,
              question_four: item.survey_question_four,
              question_five: item.survey_question_five,
              value: item.survey_value
              })}>
              <Container style={styles.container}>
                <View>
                  <ScrollView
                    persistentScrollbar={true}>
                      <View style={styles.placeInfoContainer}>
                        <View style={styles.placeInfo}>
                          <Text style={styles.placeTitle}>{item.survey_title}</Text>
                          <Text style={styles.placeSubTitle}>Points - {item.survey_value}</Text>
                        </View>
                      </View>
                  </ScrollView>
                </View>
              </Container>
            </Touchable>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default SurveyItem;
