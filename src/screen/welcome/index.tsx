import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert
} from "react-native";
import { images, fontSizes } from "../../constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { UiButton } from "../../components/index";

//import { sum2Number, substract2Number, NhanNumber, ChiaNumber, PI } from "../../../utilies/Calculation";
// function MainScreen(props: any) {
//     return <Text>Đây là trang login</Text>
// }
function Welcome(props: any) {
    //const => let => var
    //destructuring person object
    const {navigation,route} =props

    const {navigate,goBack} = navigation
    // return <Text>Homeeee {sum2Number(4, 5)} {substract2Number(6, 5)} {NhanNumber(6, 5)} {ChiaNumber(6, 5)} {PI}</Text>
    const [accountTypes, setAccountTypes] = useState([
        {
            key: 1,
            name: 'ĐL Hà Nội',
            isSelected: false,
        },
        {
            key: 2,
            name: 'NPC',
            isSelected: false,
        },
        {
            key: 3,
            name: 'Khách hàng lẻ',
            isSelected: false,
        }
    ]);

    // state => where a state is changed => ui is reloaded
    return <View style={{ backgroundColor: "white", flex: 100 }}>
        <ImageBackground source={images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: "row",
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    {/* <Image source={icons.fire}
            style={{
                marginStart: 10,
                marginEnd: 10,
                width: 30,
                height: 30,
            }} /> */}
                    <Icon
                        name="fire"
                        size={25}
                        style={{
                            color: 'white',
                            marginStart: 10,
                            marginEnd: 10,
                            width: 30,
                            height: 30,
                        }} />

                    <Text style={{
                        color: 'white',
                    }}>EMIC</Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity onPress={() => Alert.alert('Tính năng đang phát triển')}>
                        <Icon
                            name="gear"
                            size={25}
                            style={{
                                color: 'white',
                                marginEnd: 10,
                            }} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ marginBottom: 7, color: 'white', }}>Chào mừng bạn đến</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontWeight: 'bold', fontSize: 14, }}> Phần mềm ghi chỉ số HU-01 Esof</Text>
                <Text style={{ marginBottom: 7, color: 'white', }}>
                    Vui lòng chọn loại tài khoản của bạn</Text>
            </View>
            <View style={{ flex: 40 }}>
                {accountTypes.map(accountType => <UiButton onPress={() => {
                    setAccountTypes(accountTypes.map(eachAccountType => {
                        return {
                            ...eachAccountType,
                            isSelected: eachAccountType.name === accountType.name,
                        };
                    }));
                }}
                key = {accountType.key}
                    title={accountType.name}
                    isSelected={accountType.isSelected} />)}
            </View>
            <View style={{
                flex: 20,
            }}>
                <UiButton onPress={() =>{
                    navigate ('Login')
                }}title="Đăng nhập"></UiButton>
                <Text style={{
                    color: 'white',
                    fontSize: fontSizes.h5,
                    alignSelf: 'center',
                }}>Bạn chưa có tài khoản ?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigate ('Register')
                    }}
                    style={{
                        padding: 10,
                    }}>
                    <Text style={{
                        color: 'red',
                        alignSelf: 'center',
                        fontSize: fontSizes.h5,
                        textDecorationLine: 'underline',
                    }}>Đăng ký</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    </View>;
}
export default Welcome;
