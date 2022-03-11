import React from 'react';
import {View, Text} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton";

const CarModel = ({name, tagline, image, taglineCta}) => {
    return (
        <>
            <View style={styles.carContainer}>
                {/*Background image for the view*/}
                <ImageBackground
                    source={image}
                    style={styles.image}
                />

                {/*Description of the car*/}
                <View style={styles.titles}>
                    <Text styles={styles.title}>{name}</Text>
                    <Text styles={styles.subtitle}>
                        {tagline} {' '}
                        <Text style={styles.subtitleCta}>
                            {taglineCta}
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