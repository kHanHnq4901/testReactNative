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
    Alert
} from "react-native"
import {
    images,
    icons,
    colors,
    fontSizes
} from "../../../constants"
import Icon from 'react-native-vector-icons/FontAwesome';


function _getColerFromStatus(status: string): string {
    const lowerCaseStatus = status.toLowerCase().trim();
    switch (lowerCaseStatus) {
        case 'opening now':
            return colors.success;
        case 'closing soon':
            return colors.warning;
        case 'close':
            return colors.danger;
        case 'comming soon':
            return colors.info;
        default:
            return colors.success;
    }
}
function FoodItem(props: any) {

    let { name,
        price,
        socialNetworks,
        status,
        url,
        website,

    } = props.food;
    const { onPress } = props
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 150,
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row',
        }}>
        <Image style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15,
        }}
            source={
                {
                    uri: url
                }
            }
        ></Image>
        <View style={{
            flex: 1,
            marginRight: 15,
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                fontWeight: 'bold',
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',
                flexDirection: 'row',
            }}></View>
            <View style={{
                flexDirection: 'row',

            }}>

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,

                }}>Status:</Text>

                <Text style={{
                    color: _getColerFromStatus(status),
                    fontSize: fontSizes.h5,
                }}>{status.toUpperCase()} </Text>
            </View>
            <Text style={{
                color: colors.gray,
                fontSize: fontSizes.h5,
            }}>Price : {price}$</Text>
            <Text style={{
                color: colors.gray,
                fontSize: fontSizes.h5,
            }}>Food type : pizza</Text>
            <Text style={{
                color: colors.gray,
                fontSize: fontSizes.h5,
            }}>Website : {website}</Text>
            <View style={{ flexDirection: 'row' }}>
                {socialNetworks['facebook'] != undefined && <Icon
                    name="facebook"
                    size={18}
                    style={{ paddingEnd: 10 }}>

                </Icon>}
                {socialNetworks['twitter'] != undefined && <Icon
                    name="twitter"
                    size={18}
                    style={{ paddingEnd: 10 }} >

                </Icon>}
                {socialNetworks['instagram'] != undefined && <Icon
                    name="instagram"
                    size={18}
                    style={{ paddingEnd: 10 }} >
                </Icon>}
            </View>
        </View>

    </TouchableOpacity>
    )
}
export default FoodItem