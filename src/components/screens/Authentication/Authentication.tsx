import * as React from 'react';
import {View, Image} from 'react-native';
import {Container, Text, Button} from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';



type AuthenticationProps = {};

const Authentication: React.FC<AuthenticationProps> = () => {
  const navigation = useNavigation();
  const {primary} = useThemeColors();
  const {signIn} = React.useContext(AuthContext);

  // const _onConnectWithPhoneNumberButtonPressed = () => {
  //   navigation.navigate('AuthWithPhoneNumberScreen');
  // };
  const _onSocialNetworkConnectButtonPressed = () => {
    signIn();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: primary,
        },
      ]}>
      <View style={styles.appIconContainer}>
        <Image
          source={require('../../../assets/app/app_icon.png')}
          style={styles.appIcon}
        />
      </View>
      <Container style={styles.loginMethodContainer}>
        <Text isBold isHeadingTitle>
          PortyPassport Loyalty App
        </Text>
        <Text isSecondary style={styles.introductionText}>
          Complete challenges and earn points, these points can be redeemed for prizes.
        </Text>
        <View style={styles.loginMethod}>
          <Button
            style={styles.button}
            backgroundColor="#4267b2"
            isFullWidth
            onPress={_onSocialNetworkConnectButtonPressed}>
            <Text isBold isWhite>
              Connect with Facebook
            </Text>
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default Authentication;
