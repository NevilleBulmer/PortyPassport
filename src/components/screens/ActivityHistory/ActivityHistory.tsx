import * as React from 'react';
import {useFocusEffect, useScrollToTop} from '@react-navigation/native';
import {ScrollView, SafeAreaView, InteractionManager} from 'react-native';
import {LoadingIndicator} from '@src/components/elements';
import PopularPlaces from './PopularPlaces';
import RecommendedPlaces from './RecommendedPlaces';
import MerchantCampaigns from './MerchantCampaigns';
import PopularCategories from './PopularCategories';
import HotDeals from './HotDeals';
import NextOffer from './RemarkablePlaces';
import RemarkablePlaces from './RemarkablePlaces';
import AppReviewModal from '@src/components/common/AppReviewModal';

type HomeProps = {};

const ActivityHistory: React.FC<HomeProps> = () => {
  // const navigation = useNavigation();
  const [
    isNavigationTransitionFinished,
    setIsNavigationTransitionFinished,
  ] = React.useState(false);
  const scrollViewRef = React.useRef(null);

  useScrollToTop(scrollViewRef);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setIsNavigationTransitionFinished(true);
      });
      return () => task.cancel();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef} stickyHeaderIndices={[0]}>
        <PopularCategories />
        {isNavigationTransitionFinished ? (
          <>
            <NextOffer />

            <RemarkablePlaces />
          </>
        ) : (
          <LoadingIndicator size="large" hasMargin />
        )}
      </ScrollView>
      <AppReviewModal daysBeforeReminding={1} />
    </SafeAreaView>
  );
};

export default ActivityHistory;
