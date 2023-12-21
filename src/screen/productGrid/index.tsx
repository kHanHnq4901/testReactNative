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
} from "../../../constants"
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
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 1,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/5/_/5_158_3.jpg',
            name: 'iPad Air 5 10.9 inch (2022) 64GB I Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 2,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/_/x_mmas.png',
            name: 'iPad 10.2 2021 WiFi 64GB | Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 3,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-2022-hero-silver-wifi-select.png',
            name: 'iPad Gen 10 10.9 inch 2022 Wifi 64GB I Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 4,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/3/_/3_229.jpg',
            name: 'iPad mini 6 WiFi 64GB | Chính hãng Apple Việt Nam',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/i/mi-pad-6-cps-doc-quyen.jpg',
            name: 'Sam Sung A70',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png',
            name: 'Samsung Galaxy S23 Ultra',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
            name: 'Iphonne 15 pro max',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png',
            name: 'Iphonne 14 pro max',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/t/gtt_7766_3__1_5.jpg',
            name: 'Xiaomi Redmi Note 12 8GB 128GB',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png',
            name: 'iPhone 15 Plus 128GB | Chính hãng VN/A',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png',
            name: 'iPhone 11 64GB | Chính hãng VN/A ',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-5-256gb_1_5.png',
            name: 'Samsung Galaxy Z Flip5 512GB',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png',
            name: 'iPhone 15 Pro 128GB | Chính hãng VN/A',
            priceOld: 103000000,
            priceNew: 103000000,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png',
            name: 'iPhone 15 Pro 128GB | Chính hãng VN/A',
            priceOld: 103000000,
            priceNew: 10300000011,
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
                'Dry clean',
                'cyclone filter',
                'convenience cord storages',
            ],
            reviews: 19,
            stars: 5,
        }
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
                <Text style={{
                    marginTop: 10,
                    color: colors.primary,
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                    marginHorizontal: 10,
                }}>{item.name}</Text>

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
                    <Icon
                        name="heart"
                        color='red'
                        size={22}
                        style={{ paddingEnd: 10 }} >

                    </Icon>
                    <Text style={{
                        marginTop: 3,
                        fontSize: fontSizes.h6,
                        width: 50,
                    }}>Lưu lại xem sau</Text>
                    <View style={{
                        flexDirection: 'row',
                        paddingStart: 15
                    }}>
                        <FiveStart numberOfStar={item.stars} />
                    </View>
                </View>

            </View>
            }
        />

    </View >
}
export default ProductGridView;