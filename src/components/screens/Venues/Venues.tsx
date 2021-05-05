import * as React from 'react';
import {Animated, SafeAreaView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Container, Text} from '@src/components/elements';
import TabSectionList from '@src/components/elements/TabSectionList';
import VenueItem from '@src/components/common/VenueItem';
import {mockPlaceDetails} from '@src/data/mock-venues';
import styles from './styles';

type VenuesScreenProps = {};

const VenuesScreen: React.FC<VenuesScreenProps> = () => {
  const {
    colors: {primary, border, card},
  } = useTheme();

  const [scrollY] = React.useState(new Animated.Value(0));

  const tabBarOpacity = scrollY.interpolate({
    inputRange: [200, 500],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.tabSectionListContainer}>
        <TabSectionList
          sections={mockPlaceDetails.VenueSection || []}
          keyExtractor={(item) => item.title}
          stickySectionHeadersEnabled={false}
          scrollToLocationOffset={5}
          tabBarStyle={[styles.tabBar, {opacity: tabBarOpacity}]}
          tabBarScrollViewStyle={{backgroundColor: card}}
          ItemSeparatorComponent={() => (
            <Container style={[styles.separator, {backgroundColor: border}]} />
          )}
          renderTab={({title, isActive}) => {
            const borderBottomWidth = isActive ? 2 : 0;
            return (
              <Container
                style={{
                  borderBottomWidth,
                  borderColor: primary,
                }}>
                <Text isPrimary={isActive && true} style={styles.tabText}>
                  {title}
                </Text>
              </Container>
            );
          }}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          )}
          renderItem={({item}) => {
            return <VenueItem data={item} />;
          }}
          
        />
      </View>
    </SafeAreaView>
  );
};

export default VenuesScreen;
