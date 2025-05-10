import {View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {FC, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {sendStyles} from '../styles/sendStyles';
import Icons from '../components/global/Icons';
import CustomeText from '../components/global/CustomeText';
import BreakerText from '../components/ui/BreakerText';
import {Colors} from '../utils/Constants';
import LottieView from 'lottie-react-native';
import QRGenrateModel from '../components/models/QRGenrateModel';
import DeviceInfo from 'react-native-device-info';
import {goBack} from '../utils/NavigationUtil';

const ReceiveScreen: FC = () => {
  const [qrValue, setQRValue] = useState(false);
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  return (
    <LinearGradient
      colors={['#FFFFFF', '#4DA0DE', '#3387C5']}
      style={sendStyles.container}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}>
      <SafeAreaView style={{marginTop: 16}} />

      <View style={sendStyles.mainContainer}>
        <View style={sendStyles.infoContainer}>
          <Icons
            name="blur-on"
            iconsFamily="MaterialIcons"
            color="#fff"
            size={40}
          />

          <CustomeText
            fontFamily="Okra-Bold"
            color="#fff"
            fontSize={16}
            style={{marginTop: 20}}>
            Receiving from nearby devices.
          </CustomeText>

          <CustomeText
            fontFamily="Okra-Medium"
            color="#fff"
            fontSize={12}
            style={{textAlign: 'center'}}>
            Ensure your device is connected to sender's hospot network
          </CustomeText>
          <BreakerText text="or" />

          <TouchableOpacity
            style={sendStyles.qrButton}
            onPress={() => setIsScannerVisible(true)}>
            <Icons
              name="qrcode"
              iconsFamily="MaterialCommunityIcons"
              size={16}
              color={Colors.primary}
            />
            <CustomeText fontFamily="Okra-Bold" color={Colors.primary}>
              Show QR
            </CustomeText>
          </TouchableOpacity>
        </View>

        <View style={sendStyles.animationContainer}>
          <View style={sendStyles.lottieContainer}>
            <LottieView
              style={sendStyles.lottie}
              source={require('../assets/animations/scan2.json')}
            />
          </View>
          <Image
            source={require('../assets/images/profile2.jpg')}
            style={sendStyles.profileImage}
          />
        </View>
        <TouchableOpacity onPress={goBack} style={sendStyles.backButton}>
          <Icons
            name="arrow-back"
            iconsFamily="Ionicons"
            size={16}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {isScannerVisible && (
        <QRGenrateModel
          visible={isScannerVisible}
          onClose={() => setIsScannerVisible(false)}
        />
      )}
    </LinearGradient>
  );
};

export default ReceiveScreen;
