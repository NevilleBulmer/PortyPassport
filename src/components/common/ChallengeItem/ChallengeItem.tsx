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

type ChallengeItemProps = {};
const DataDirectory = "http://35.207.12.159/PortyAPI/api/challenges/";

const ChallengeItem: React.FC<ChallengeItemProps> = () => {
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
            <Touchable onPress={() => navigation.navigate('ChallengeDetailsModal', {
              title: item.challenge_title,
              description: item.challenge_desc,
              value: item.challenge_value
              })}>
              <Container style={styles.container}>
                <View>
                  <ScrollView
                    persistentScrollbar={true}>
                      <View style={styles.placeInfoContainer}>
                        <View style={styles.placeInfo}>
                          <Text style={styles.placeTitle}>{item.challenge_title}</Text>
                          <Text style={styles.placeSubTitle}>{item.challenge_desc}</Text>
                          <Text style={styles.placeSubTitle}>Points - {item.challenge_value}</Text>
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

export default ChallengeItem;
