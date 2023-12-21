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
    TextInput,
    Switch,
} from "react-native"
import {
    images,
    icons,
    colors,
    fontSizes
} from "../../constants"
import Icon from 'react-native-vector-icons/FontAwesome';
import { UiHeader } from "../../components";
function Settings(props: any) {
    const {navigation,route} =props
    const {navigate,goBack} = navigation
    const [isEnabledLockApp, setEnabledLockApp] = useState(false)
    const [isEnabledUseFingerprint, setEnabledEnabledUseFingerprint] = useState(false)
    const [isEnabledChangePassword, setEnabledChangePassword] = useState(false)
    return <View style={{
        flex: 1,
    }}>
        <UiHeader title='Cài Đặt'></UiHeader>
        <ScrollView>
            {/* Chung */}
            <View style={{
                height: 40,
                backgroundColor: '#CECDCE',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: colors.red,
                    fontSize: fontSizes.h4,
                    padding: 10
                }}>Chung
                </Text>
            </View>
            <TouchableOpacity onPress={()=>{
                Alert.alert('Thông báo','Bạn đã click vào ngôn ngữ')
            }
            }>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 5,
                }}>
                    <Icon
                        name="globe"
                        size={20}
                        style={{
                            marginEnd: 10,
                            marginTop: 8,
                            marginStart: 20
                        }}>
                    </Icon>
                    <Text style={{
                        color: colors.black,
                        fontSize: fontSizes.h4,
                        padding: 10,
                    }}>Ngôn ngữ
                    </Text>
                    <View style={{
                        flex: 1
                    }}>

                    </View>
                    <Text style={{
                        color: '#C7C3C7',
                        fontSize: fontSizes.h4,
                        padding: 6,

                    }}>Tiếng Việt
                    </Text>
                    <Icon
                        name="chevron-right"
                        size={20}
                        style={{
                            marginEnd: 10,
                            marginTop: 8,
                            marginStart: 8
                        }}
                    >
                    </Icon>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào môi trường')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="cloud"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>
                    Môi trường
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>
                <Text style={{
                    color: '#C7C3C7',
                    fontSize: fontSizes.h4,
                    padding: 6,
                }}>
                    Sản xuất
                </Text>
                <Icon
                    name="chevron-right"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 8
                    }}
                >
                </Icon>
            </View>
            </TouchableOpacity>
            {/* Tài khoản*/}
            <View style={{
                height: 40,
                backgroundColor: '#CECDCE',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: colors.red,
                    fontSize: fontSizes.h4,
                    padding: 10
                }}>Tài khoản
                </Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Số điện thoại')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="phone"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>Số điện thoại
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Icon
                    name="chevron-right"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 8
                    }}
                >
                </Icon>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Email')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="envelope"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>Email
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Icon
                    name="chevron-right"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 8
                    }}
                >
                </Icon>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate ('Welcome')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="sign-out"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>Đăng xuất
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Icon
                    name="chevron-right"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 8
                    }}
                >
                </Icon>
            </View>
            </TouchableOpacity>
            {/* Bảo mật*/}
            <View style={{
                height: 40,
                backgroundColor: '#CECDCE',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: colors.red,
                    fontSize: fontSizes.h4,
                    padding: 10
                }}>Bảo mật
                </Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Khóa ứng dụng ở chế độ nền')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="globe"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>Khóa ứng dụng ở chế độ nền
                </Text>
                <View style={{
                    flex: 1
                }}>
                    <Switch

                        trackColor={{ false: "767577", true: colors.orange }}
                        thumbColor={isEnabledLockApp ? colors.orange : colors.gray}
                        onValueChange={() => {
                            setEnabledLockApp(!isEnabledLockApp)
                        }}
                        value={isEnabledLockApp}
                        style={{
                            paddingEnd: 20,
                        }
                        }
                    />
                </View>

            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Sử dụng dấu vân tay')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="tty"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>Sử dụng dấu vân tay
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Switch
                    trackColor={{ false: "767577", true: colors.orange }}
                    thumbColor={isEnabledUseFingerprint ? colors.orange : colors.gray}
                    onValueChange={() => {
                        setEnabledEnabledUseFingerprint(!isEnabledUseFingerprint)
                    }}
                    value={isEnabledUseFingerprint}
                    style={{
                        paddingEnd: 20,
                    }
                    }
                />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Đổi mật khẩu')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="lock"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>Đổi mật khẩu
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Switch
                    trackColor={{ false: "767577", true: colors.orange }}
                    thumbColor={isEnabledChangePassword ? colors.orange : colors.gray}
                    onValueChange={() => {
                        setEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                    style={{
                        paddingEnd: 20,
                    }
                    }
                />
            </View>
            </TouchableOpacity>   
            {/* Khac*/}
            <View style={{
                height: 40,
                backgroundColor: '#CECDCE',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: colors.red,
                    fontSize: fontSizes.h4,
                    padding: 10
                }}>Khác
                </Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Điều khoản dịch vụ')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="file"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>
                    Điều khoản dịch vụ
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Icon
                    name="chevron-right"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 8
                    }}
                >
                </Icon>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Thông báo' , ' Bạn đã click vào Giấy phép nguồn mở')}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}>
                <Icon
                    name="unlock"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 20
                    }}>
                </Icon>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h4,
                    padding: 10,
                }}>
                    Giấy phép nguồn mở
                </Text>
                <View style={{
                    flex: 1
                }}>

                </View>

                <Icon
                    name="chevron-right"
                    size={20}
                    style={{
                        marginEnd: 10,
                        marginTop: 8,
                        marginStart: 8
                    }}
                >
                </Icon>
            </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
}
export default Settings;