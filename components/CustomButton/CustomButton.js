import {View, Text, Pressable} from 'react-native'
import styles from "./styles";
import Constants from "../../assets/constants";

const CustomButton = ({type, content, onPress}) => {
    const backgroundColor = type === "primary" ? Constants.primaryColor : Constants.secondaryColor;
    const foregroundColor = type === "primary" ? Constants.secondaryColor : Constants.primaryColor;

    return (
        <>
            <View style={styles.container}>
                <Pressable
                    style={[styles.button, {backgroundColor: backgroundColor}]}
                    onPress={() => {
                        onPress();
                    }}
                >
                    <Text style={[styles.text, {color: foregroundColor}]}>{content}</Text>
                </Pressable>
            </View>
        </>
    );

}

export default CustomButton;