import React, { useState, useEffect } from "react";
import { 
  View, 
  StyleSheet,
  ScrollView, 
  TouchableOpacity, 
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Text, Touchable } from '@src/components/elements';
import styles from './styles';

type VenueItemProps = {};
const DataDirectory = "http://35.207.12.159/PortyAPI/api/venues/";

const VenueItem: React.FC<VenueItemProps> = () => 
{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => 
  {
    fetch(DataDirectory)
    .then((response) => response.json())
    .then((json) => setData(json.results))
    .catch((error) => alert(error))
    .then(setLoading(false));
  })

  const navigation = useNavigation();
  const _onPlaceItemPressed = () =>
  {
    navigation.navigate('DishDetailsModal');
  };

  return (
    <SafeAreaView>  
      { isLoading ? ( <ActivityIndicator/> ) : ( 
        <FlatList 
          data = { data }
          KeyExtractor = {({ id }, index) => id }
          renderItem = {({ item }) => (
            <Touchable onPress={_onPlaceItemPressed}>
              <Container style={styles.container}>
                <Image style={styles.image} source={require("../../../assets/categories/category-1.png")} />
                <View>
                  <ScrollView
                    persistentScrollbar={true}>
                      <View style={styles.placeInfoContainer}>
                        <View style={styles.placeInfo}>
                          <Text style={styles.placeTitle}>{item.venue_name}</Text>
                          <Text style={styles.placeSubTitle}>{item.venue_desc}</Text>
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

export default VenueItem;
