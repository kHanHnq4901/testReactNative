import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../../constants';

import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail,isValidPassword,isValidRePassword} from '../../util/validations';


function Register(props: any) {
    const {navigation,route} =props
    const {navigate,goBack} = navigation
    const [errEmail,setErrorEmail] = useState('');
    const [errPassword, setErrorPassword] = useState('');  
    const [errRePassword, setErrorRePassword] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const isValidationOk = () => email.length > 0
                                && password.length >0
                                && isValidEmail(email) == true 
                                && isValidPassword(password) == true
                                && isValidRePassword(rePassword) == true
                                && password == rePassword;
    const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  useEffect(() => {
    //componentDidMount
    Keyboard.addListener('keyboardDidShow', () => {
      //Alert.alert('keyboardDidShow')
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      //Alert.alert('keyboardDidHide')
      setKeyboardIsShown(false);
    });
  });
  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: colors.primary,
     
      }}>
        <TouchableOpacity onPress={() =>{
                    navigate ('Login')
                }}>
          <Icon name="arrow-left" size={35} color={colors.white} />
        </TouchableOpacity>
      <View
        style={{
          flex: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 10,
            width: '50%',
          }}>
          Bạn có sẵn sàng để tạo một tài khoản?
        </Text>
        <Image
          source={images.meter}
          style={{
            width: 100,
            height: 100,
            marginLeft: 10,
            marginTop: 10,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 50,
          flexDirection: 'column',
          backgroundColor: colors.white,
          borderRadius: 10,
          marginHorizontal: 25,
          padding:15
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.primary,
            }}>
            Email :
          </Text>
          <TextInput
            onChangeText={(text: string) =>{
                if(isValidEmail(text) == false) {
                    setErrorEmail('Email không đúng định dạng');
                }else {
                    setErrorEmail('')
                }
                setEmail(text)
            }}
            style={{
              color: 'black',
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={colors.gray}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}/>
             <Text style={{
                color:'red',
                marginHorizontal:15,
                marginBottom:5,
                alignSelf : 'center',
             }}>{errEmail}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.primary,
            }}>
            Password :
          </Text>
          <TextInput
              onChangeText={(text: string) =>{
                if(isValidPassword(text) == false) {
                    setErrorPassword('Mật khẩu không được nhỏ hơn 3 ký tự');
                }else {
                    setErrorPassword('')
                }
                setPassword(text)
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={colors.gray}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}/>
                     <Text style={{
                color:'red',
                marginHorizontal:15,
                marginBottom:5,
                alignSelf : 'center',
             }}>{errPassword}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.primary,
            }}>
            Re-Password :
          </Text>
          <TextInput
              onChangeText={(text: string) =>{
                if(isValidRePassword(text) == false) {
                    setErrorRePassword('Mật khẩu không được nhỏ hơn 3 ký tự');
                }else {
                    setErrorRePassword('')
                }
                setRePassword(text)
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Re-Enter your password"
            placeholderTextColor={colors.gray}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}/>
                     <Text style={{
                color:'red',
                marginHorizontal:15,
                marginBottom:5,
                alignSelf : 'center',
             }}>{errRePassword}</Text>
        </View>
        <TouchableOpacity
        disabled = {isValidationOk() == false ? true : false}
        onPress={() =>{
            navigate ('Login')
        }}
          style={{
            backgroundColor: isValidationOk() == false ? colors.gray : colors.primary ,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: '50%',
            borderRadius: 20,
          }}>
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h4,
            }}>
            Đăng kí
          </Text>
        </TouchableOpacity>
      </View>  
      
      {keyboardIsShown == false && <View
        style={{
          flex: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 30,
          }}>
          <View style={{height: 1, backgroundColor: 'white', flex: 1}}></View>
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h4,
              color: colors.white,
              alignSelf: 'center',
              marginHorizontal: 10,
            }}>
            User other methods?
          </Text>
          <View style={{height: 1, backgroundColor: 'white', flex: 1}}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
        <TouchableOpacity>
          <Icon name="facebook" size={35} color={colors.facebook} />
          </TouchableOpacity>
          <View style={{width: 20}} />
          <TouchableOpacity>
          <Icon name="google" size={35} color={colors.google} />
        </TouchableOpacity>
        </View>
      </View>}
    </KeyboardAvoidingView>
  );
}
export default Register;
