import {View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {optionStyles} from '../../styles/optionsStyles';
import Icons from '../global/Icons';
import {Colors} from '../../utils/Constants';
import CustomeText from '../global/CustomeText';

const Options: FC<{
  isHome?: boolean;
  onMediaPickedUp?: (media: any) => void;
  onFilePickedUp?: (file: any) => void;
}> = ({isHome, onFilePickedUp, onMediaPickedUp}) => {
  return (
    <View style={optionStyles.container}>
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icons
          name="image"
          iconsFamily="Ionicons"
          color={Colors.primary}
          size={20}
        />
        <CustomeText
          fontFamily="Okra-Medium"
          style={{marginTop: 4, textAlign: 'center'}}>
          Photo
        </CustomeText>
      </TouchableOpacity>
      <TouchableOpacity style={optionStyles.subContainer} onPress={()=> { }}>
        <Icons
          name="musical-notes-sharp"
          iconsFamily="Ionicons"
          color={Colors.primary}
          size={20}
        />
        <CustomeText fontFamily="Okra-Medium" style={{marginTop:4,textAlign:'center'}}>
          Audio
        </CustomeText>
      </TouchableOpacity>
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icons
          name="folder-open"
          iconsFamily="Ionicons"
          color={Colors.primary}
          size={20}
        />
        <CustomeText
          fontFamily="Okra-Medium"
          style={{marginTop: 4, textAlign: 'center'}}>
          Files
        </CustomeText>
      </TouchableOpacity>{' '}
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icons
          name="contacts"
          iconsFamily="MaterialCommunityIcons"
          color={Colors.primary}
          size={20}
        />
        <CustomeText
          fontFamily="Okra-Medium"
          style={{marginTop: 4, textAlign: 'center'}}>
          Contacts
        </CustomeText>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
