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
import FoodItem from "./item";
/**
 * -Listview - List
 * -flatlist
 */
function FoodList(props: any) {
    //list of food = state

    const [foods, setFooods] = useState([
        {
            name: 'Pealla Valenciana , with rabbit and chicken;and seafood pealla',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg',
            status: 'Opening soon',
            price: 10000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',
                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pealla Valenciana1',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Opening now',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {

                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pealla Valenciana2',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg',
            status: 'closing soon',
            price: 30000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {

                twitter: 'https://twitter.com/',

            }

        },
        {
            name: 'Pealla Valenciana3',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',

            }

        },
        {
            name: 'Pealla Valenciana4',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',

                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pealla Valenciana5',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        },
        {
            name: 'Pealla Valenciana6',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {

                twitter: 'https://twitter.com/',
                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pealla Valenciana7',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana8',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana9',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana10',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana11',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana12',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana13',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana14',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana15',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana16',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana17',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana18',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana19',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana20',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana21',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana22',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana23',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana24',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana25',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana26',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana27',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana28',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana29',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana30',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana31',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana32',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana33',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana34',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana35',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana36',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana37',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana38',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana39',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana40',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana41',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana42',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana43',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana44',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana45',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana46',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana47',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana48',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana49',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana50',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana51',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana52',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana53',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana54',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana55',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana56',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana57',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana58',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana59',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana60',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana61',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana62',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana63',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana64',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana65',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana66',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana67',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana68',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana69',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        }, {
            name: 'Pealla Valenciana70',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg',
            status: 'Comming soon',
            price: 20000,
            website: 'http://emic.com.vn',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',

            }

        },
    ])

    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg'
        }, {
            name: 'Pizza',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg'
        },
        {
            name: 'Mì',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg'
        },
        {
            name: 'Phở',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg'
        },
        {
            name: 'Breakfast',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg'
        },
        {
            name: 'Coffee',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg'
        },
        {
            name: 'HotDogs',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg'
        },
        {
            name: 'Noodle',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg'
        },
        {
            name: 'Dinner',
            url: 'https://giadinh.mediacdn.vn/zoom/740_463/2021/3/22/photo1616404350792-1616404350799423896778-crop-1616404378198386850609.jpg'
        },
        {
            name: 'Beverages',
            url: 'https://togiaysaigon.com/wp-content/uploads/2020/11/cach-chon-to-pho.jpg'
        },
    ]);
    const [searchText, setSearchText] = useState('')
    const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()));
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
            <View style={{
                height: 50,
                marginHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon
                    color={colors.black}
                    name="search"
                    size={18}
                    style={{ paddingEnd: 10, position: 'absolute', left: 5 }} >
                </Icon>
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchText(text)
                    }}
                    style={{
                        backgroundColor: colors.gray,
                        height: 40,
                        flex: 1,
                        paddingStart: 30,
                        marginEnd: 5,
                        borderRadius: 10,
                        opacity: 0.3,
                    }}>

                </TextInput>
                <Icon
                    color={colors.black}
                    name="bars"
                    size={30}
                    style={{
                        marginTop: 2, marginLeft: 5, paddingEnd: 5
                    }} >
                </Icon>
            </View>
            <View style={{
                height: 80,
            }}>
                <View style={{ height: 1, backgroundColor: colors.gray }}></View>
                <FlatList
                    horizontal={true}
                    keyExtractor={item => item.name}
                    data={categories}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => {
                            Alert.alert(`Bạn đã click vào loại ${item.name}`)
                        }}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 25,
                                        resizeMode: 'cover',
                                        margin: 10,
                                    }}
                                    source={{
                                        uri: item.url
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: fontSizes.h6,
                                        color: colors.black
                                    }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    }
                    style={{
                        flex: 1,
                    }}>

                </FlatList>

                <View style={{ height: 1, backgroundColor: colors.gray }}></View>
            </View>
            {/* <ScrollView>

                {foods.map(eachFood => {
                    return <FoodItem food={eachFood} key={eachFood.name} />
                })}
            </ScrollView> */}
            {/* <View style={{
                flex: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
            }}>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h2,
                }}>
                    Không có kết quả
                </Text>
            </View> */}
        </View>
        {filteredFoods().length > 0 ?
            <FlatList
                data={foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))}
                renderItem={({ item }) => (
                    <FoodItem
                        food={item}
                        key={item.name}
                        onPress={() => {
                            Alert.alert(`Bạn đã click ${item.name}`);
                        }} />
                )}
                keyExtractor={item => item.name}
            />
            :
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSizes.h2,
                }}>
                    Không có kết quả
                </Text>
            </View>
        }

    </View>

}

export default FoodList;