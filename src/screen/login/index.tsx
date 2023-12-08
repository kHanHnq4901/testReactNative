import React from "react";
import { Image, View, Text, ImageBackground, TouchableOpacity } from "react-native"
import { images, icons } from "../../../constants"

//import { sum2Number, substract2Number, NhanNumber, ChiaNumber, PI } from "../../../utilies/Calculation";

// function MainScreen(props: any) {
//     return <Text>Đây là trang login</Text>
// }

function MainScreen(props: any) {

    //const => let => var
    //destructuring person object

    // return <Text>Homeeee {sum2Number(4, 5)} {substract2Number(6, 5)} {NhanNumber(6, 5)} {ChiaNumber(6, 5)} {PI}</Text>
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
                    <Image source={icons.fire}
                        style={{
                            marginStart: 10,
                            marginEnd: 10,
                            width: 30,
                            height: 30,
                        }} />

                    <Text style={{
                        color: 'white',
                    }}>YOURCOMPANY.CO</Text>
                    <View style={{ flex: 1 }} />
                    <Image source={icons.question}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: 'white',
                            marginEnd: 10,
                        }} />

                </View>
            </View>
            <View style={{
                flex: 20,

                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ marginBottom: 7, color: 'white', }}>Welcome to</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontWeight: 'bold', fontSize: 14, }}>YOURCOMPANY.CO</Text>
                <Text style={{ marginBottom: 7, color: 'white', }}>Please select your account type</Text>
            </View>
            <View style={{ flex: 40 }}>

                <TouchableOpacity style={{
                    borderBlockColor: 'white',
                    borderWidth: 1,
                    height: 45,
                    borderRadius: 5,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',

                }}>
                    <Text style={{
                        color: '#FF7F00'

                    }}>Infulencer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderBlockColor: 'white',
                    borderWidth: 1,
                    height: 45,
                    borderRadius: 5,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',

                }}>
                    <Text style={{
                        color: '#FF7F00'

                    }}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderBlockColor: 'white',
                    borderWidth: 1,
                    height: 45,
                    borderRadius: 5,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',

                }}>
                    <Text style={{
                        color: '#FF7F00'

                    }}>Individual</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 20,
                backgroundColor: 'green',
            }}>
                <TouchableOpacity style={{
                    borderBlockColor: 'white',
                    borderWidth: 1,
                    height: 45,
                    borderRadius: 5,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',

                }}>
                    <Text style={{
                        color: '#FF7F00'

                    }}>LOGIN</Text>
                </TouchableOpacity>
                <Text>Want to register Account</Text>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Register</Text>
            </View>
        </ImageBackground >
    </View >


}
export default MainScreen;