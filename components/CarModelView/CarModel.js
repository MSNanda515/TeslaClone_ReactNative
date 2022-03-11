import React from 'react';
import {View, Text} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton";

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
                <CustomButton type="primary" content="Custom Order"
                    onPress={()=>{
                        console.log("Custom order was pressed")
                    }}
                />
                <CustomButton type="secondary" content="Existing Inventory"
                  onPress={()=>{
                      console.log("Existing inventory was pressed")
                  }}
                />
            </View>

        </>
    )
};

export default CarModel;