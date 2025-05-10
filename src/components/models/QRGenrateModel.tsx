import {View,  Modal, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {modalStyles} from '../../styles/modalStyles';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import {multiColor} from '../../utils/Constants';
import CustomeText from '../global/CustomeText';
import Icons from '../global/Icons';
interface ModelProps {
  visible: boolean;
  onClose: () => void;
}

const QRGenrateModel: FC<ModelProps> = ({visible, onClose}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [qrValue, setQRValue] = useState('Aditya');
  const shimmerTranslateX = useSharedValue(-300);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{translateX: shimmerTranslateX.value}],
  }));

  useEffect(() => {
    shimmerTranslateX.value = withRepeat(
      withTiming(300, {duration: 1500, easing: Easing.linear}),
      -1,
      false,
    );
  }, [shimmerTranslateX, visible]);
  return (
    <Modal
      animationType="slide"
      visible={visible}
      presentationStyle="formSheet"
      onRequestClose={onClose}
      onDismiss={onClose}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.qrContainer}>
          {loading || qrValue === null || qrValue === '' ? (
            <View style={modalStyles.skeleton}>
              <Animated.View style={[modalStyles.shimmerOverlay, shimmerStyle]}>
                <LinearGradient
                  colors={['#f3f3f3', '#fff', '#f3f3f3']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={modalStyles.shimmerGradient}
                />
              </Animated.View>
            </View>
          ) : (
            <QRCode
              value={qrValue}
              size={250}
              logoSize={60}
              logoBackgroundColor="#FFF"
              logoMargin={2}
              logoBorderRadius={10}
              logo={require('../../assets/images/profile2.jpg')}
              linearGradient={multiColor}
              enableLinearGradient
            />
          )}
        </View>
        <View style={modalStyles.info}>
          <CustomeText style={modalStyles.infoText1}>
            Ensure you are on same Wi-Fi Newtwork.
          </CustomeText>
          <CustomeText style={modalStyles.infoText2}>
            Ask the sender to scan this QR code to connect and transfer files.
          </CustomeText>
        </View>

        <ActivityIndicator
          size="small"
          color="#000"
          style={{alignSelf: 'center'}}
        />
        <TouchableOpacity onPress={()=> onClose()} style={modalStyles.closeButton} >
            <Icons name="close" iconsFamily="Ionicons" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default QRGenrateModel;
