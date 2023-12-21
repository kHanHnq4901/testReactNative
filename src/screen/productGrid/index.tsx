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
} from "../../constants"
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * -Listview - List
 * -flatlist
 */

import FiveStart from "./fiveStart";

function ProductGridView(props: any) {
    const [products, setProducts] = useState([
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-pro-13-select-wifi-spacegray-202210-02.jpg',
            name: 'iPad Pro 11 inch 2022 M2 Wifi 128GB I Chính hãng Apple Việt Nam ',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean47',
                'cyc34567lone fil35ter',
                'conve68nien62ce cor67d st85orages',
            ],
            reviews: 19,
            stars: 1,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/5/_/5_158_3.jpg',
            name: 'iPad Air 5 10.9 inch (2022) 64GB I Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean47',
                'cyc857lone fil467ter',
                'conveni4ence cord s8torages',
            ],
            reviews: 19,
            stars: 2,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/_/x_mmas.png',
            name: 'iPad 10.2 2021 WiFi 64GB | Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean74',
                'cyc467lone fi138lter',
                'conve14nience co54rd st714orages',
            ],
            reviews: 19,
            stars: 3,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-2022-hero-silver-wifi-select.png',
            name: 'iPad Gen 10 10.9 inch 2022 Wifi 64GB I Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean135',
                'cycl461one fi47lter',
                'convenie146nce c47ord st416orages',
            ],
            reviews: 19,
            stars: 4,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/3/_/3_229.jpg',
            name: 'iPad mini 6 WiFi 64GB | Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean123',
                'cyc146lone fil461ter',
                'conve46nience cord s164torages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/i/mi-pad-6-cps-doc-quyen.jpg',
            name: 'Sam Sung A70',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean13',
                'cy461clone fi641lter',
                'conveni614ence cor146d stor614ages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png',
            name: 'Samsung Galaxy S23 Ultra',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean9',
                'cyclo471ne filter',
                'convenien147ce cord st471orages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
            name: 'Iphonne 15 pro max',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean8',
                'cycl71ne filter',
                'convenien4ce cord st14orages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png',
            name: 'Iphonne 14 pro max',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean7',
                'cycl417one fil417ter',
                'convenie147nce cord storages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/t/gtt_7766_3__1_5.jpg',
            name: 'Xiaomi Redmi Note 12 8GB 128GB',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean6',
                'cycl147one filter',
                'conven417ience cord storages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png',
            name: 'iPhone 15 Plus 128GB | Chính hãng VN/A',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean5',
                'cyc147lone filter',
                'convenien47ce cord storages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png',
            name: 'iPhone 11 64GB | Chính hãng VN/A ',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean2',
                'cyclone 136filter',
                'convenience cord13 storages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-5-256gb_1_5.png',
            name: 'Samsung Galaxy Z Flip5 512GB',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean3',
                'cyclon1e filter',
                'convenience cord 36storages',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png',
            name: 'iPhone 15 Pro 128GB | Chính hãng VN/A2',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean1',
                'cyclone filter',
                'convenience cord storage3s',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png',
            name: 'iPhone 15 Pro 128GB | Chính hãng VN/A1',
            priceOld: 103000000,
            priceNew: 10300000011,
            specifications: [
                'Dry clea415n',
                'cy47clone filter',
                'conveni14ence cord storages',
                'Dry clea461n',
                'cyclone f17ilter',
                'convenie4nce cord storage63s',
            ],
            reviews: 19,
            stars: 5,
            isSaved: true,
        }, {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png',
            name: 'iPhone 15 Pro 128GB | Chính hãng VN/A3',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dr14y clean12',
                'cycl31one filter45',
                'convenie3nce cord storage3s61',
            ],
            reviews: 19,
            stars: 5,
            isSaved: false,
        },
    ])
    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
            data={products}
            numColumns={2}
            keyExtractor={item => item.name}
            renderItem={({ item, index }) => <View style={{
                flex: 0.5,
                marginLeft: index % 2 == 0 ? 10 : 0,
                marginTop: index == 0 || index == 1 ? 10 : 5,
                marginRight: 10,
                marginBottom: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.gray,
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                }}>
                    <Image style={{
                        width: 70,
                        height: 90,
                        resizeMode: 'cover',
                        marginRight: 10,
                        marginLeft: 10,
                    }}
                        source={
                            {
                                uri: item.url
                            }
                        }
                    ></Image>
                    <View style={{
                    }}>
                        <Text style={{
                            alignSelf: "auto",
                            marginTop: 10,
                            textDecorationLine: "line-through",
                            color: colors.gray,
                            fontSize: fontSizes.h6,
                        }}>Giá : {item.priceOld.toLocaleString()} VNĐ</Text>
                        <Text style={{
                            alignSelf: "auto",
                            color: 'black',
                            fontSize: fontSizes.h6,
                            fontWeight: 'bold',
                        }}>Giá :{item.priceNew.toLocaleString()} VNĐ</Text>

                    </View>


                </View>
                <TouchableOpacity onPress={()=>{
                    Alert.alert('Thông báo' , `Bạn đã click vào ${item.name}`)
                }}>
                <Text style={{
                    marginTop: 10,
                    color: colors.primary,
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                    marginHorizontal: 10,
                }}>{item.name}</Text>
                </TouchableOpacity>
                {
                    item.specifications.map(specification =>
                        <Text
                            key={specification}
                            style={{
                                color: colors.black,
                                fontSize: fontSizes.h5,
                                marginLeft: 10,
                                marginTop: 5,
                                marginRight: 5,
                                marginBottom: 5,
                            }}>
                            * {specification}
                        </Text>)
                }
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 10,
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                    }}
                    onPress={() => {
                        let cloneProducts = products.map((eachProduct) => {
                          if (item.name === eachProduct.name) {
                            const isSaved = eachProduct.isSaved === false || eachProduct.isSaved === undefined ? true : false;
                            if (isSaved) {
                              Alert.alert('Thông báo', `Đã lưu vào ${eachProduct.name} xem sau`);
                            } else {
                              Alert.alert('Thông báo', `Đã xóa khỏi ${eachProduct.name} xem sau`);
                            }
                            return { ...eachProduct, isSaved };
                          }
                          return eachProduct;
                        });
                        setProducts(cloneProducts);
                      }}>
                        <Icon
                            name="heart"
                            color={item.isSaved == true ? 'red' : colors.gray}
                            size={22}
                            style={{ paddingEnd: 10 }} >

                        </Icon>
                        <Text style={{
                            marginTop: 3,
                            fontSize: fontSizes.h6,
                            width: 50,
                        }}>Lưu lại xem sau
                        </Text>
                    </TouchableOpacity>

                    <View style={{
                        flex: 1
                    }}>
                        <FiveStart numberOfStar={item.stars} />
                        <Text style={{
                            color: colors.success,
                            fontSize: fontSizes.h5,
                            textAlign: 'right',
                            paddingTop: 5,
                        }}>{item.reviews} Đánh giá </Text>
                    </View>
                </View>

            </View>
            }
        />

    </View >
}
export default ProductGridView;