import React, {
    useState,
    useEffect
} from "react";
import {
    Image,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert,
    ScrollView,
    FlatList,
    TextInput
} from "react-native"
import {
    images,
    icons,
    colors,
    fontSizes
} from "../constants"

function UiHeader(props : any ) {
    const {title} = props
    return   <View style={{
        height: 50,
        backgroundColor: '#FA6F62',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: fontSizes.h3,
          alignSelf: 'center',
          color: colors.white,
          fontWeight: 'bold',
        }}>{title}</Text>
      </View>
}
export default UiHeader;