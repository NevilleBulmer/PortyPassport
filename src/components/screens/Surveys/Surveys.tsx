import * as React from 'react';
import {Animated, SafeAreaView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Container, Text} from '@src/components/elements';
import TabSectionList from '@src/components/elements/TabSectionList';
import SurveyItem from '@src/components/common/SurveyItem';
import {mockSurveysDetails} from '@src/data/mock-surveys';
import styles from './styles';

type SurveysScreenProps = {};

const SurveysScreen: React.FC<SurveysScreenProps> = () => {
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
          sections={mockSurveysDetails.SurveysSection || []}
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
            return <SurveyItem data={item} />;
          }}
          
        />
      </View>
    </SafeAreaView>
  );
};

export default SurveysScreen;
