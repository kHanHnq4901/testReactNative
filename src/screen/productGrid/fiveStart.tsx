import Icon from 'react-native-vector-icons/FontAwesome';
import {
    colors,
} from "../../../constants"

function FiveStart(props: any) {
    const { numberOfStar } = props
    return [0, 1, 2, 3, 4].map(item => <Icon
        name="star"
        color={item <= numberOfStar - 1 ? colors.yellow : ''}
        size={10}
        style={{ paddingEnd: 1 }
        }
    />
    )

}
export default FiveStart