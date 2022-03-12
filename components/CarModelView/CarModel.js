import React from 'react';
import {View, Text} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton";

const CarModel = ({car}) => {
    return (
        <>
            <View style={styles.carContainer}>
                {/*Background image for the view*/}
                <ImageBackground
                    source={car.image}
                    style={styles.image}
                />

                {/*Description of the car*/}
                <View style={styles.titles}>
                    <Text styles={styles.title}>{car.name}</Text>
                    <Text styles={styles.subtitle}>
                        {car.tagline} {' '}
                        <Text style={styles.subtitleCta}>
                            {car.taglineCta}
                        </Text>
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton type="primary" content="Custom Order"
                                  onPress={()=>{
                                      console.warn("Custom order was pressed")
                                  }}
                    />
                    <CustomButton type="secondary" content="Existing Inventory"
                                  onPress={()=>{
                                      console.warn("Existing inventory was pressed")
                                  }}
                    />
                </View>
            </View>

        </>
    )
};

export default CarModel;