import Icon from 'react-native-vector-icons/FontAwesome';
import {
    colors,
} from "../../constants"
import { View } from 'react-native';
function FiveStart(props: any) {
    const { numberOfStar } = props
    return <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginEnd: 5,
    }}>
        {[0, 1, 2, 3, 4].map(item => <Icon
            key={`${item}`}
            name="star"
            color={item <= numberOfStar - 1 ? colors.yellow : colors.gray}
            size={10}
            style={{ paddingEnd: 1 }
            }
        />
        )}
    </View>

}
export default FiveStart