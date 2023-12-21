import React from 'react';
import {
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from react-native-vector-icons/FontAwesome
import { images, icons, colors } from "../constants";

function UiButton(props: any): any {
    const { onPress, title, isSelected } = props;

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                borderBlockColor: 'white',
                borderWidth: 1,
                height: 45,
                borderRadius: 5,
                marginHorizontal: 15,
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isSelected == true ? 'white':'black' ,
                borderColor: isSelected == true ? 'white' : '',
            }}>
            {isSelected == true && <Icon
                name="check-circle"
                size={20}
                style={{
                    color: 'green',
                    position: 'absolute',
                    left: 10,
                    top: 10,
                }}
            />}
            <Text style={{ color: colors.primary }}>{props.title}</Text>
        </TouchableOpacity >
    );
}

export default UiButton;