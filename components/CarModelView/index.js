import React from 'react';
import {View, Text} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from "./styles";

const CarModel = () => {
    return (
        <>
            <View style={styles.carContainer}>
                {/*Background image for the view*/}
                <ImageBackground
                    source={require('../../assets/images/ModelX.jpeg')}
                    style={styles.image}
                />

                {/*Description of the car*/}
                <View style={styles.titles}>
                    <Text styles={styles.title}>Model S</Text>
                    <Text styles={styles.subtitle}>Starting at $69,420</Text>
                </View>
            </View>

        </>
    )
};

export default CarModel;