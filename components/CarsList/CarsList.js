import CarModel from "../CarModelView/CarModel";
import {FlatList, View, Dimensions} from "react-native";
import styles from "./styles";
import CarsDetail from "../../assets/CarsDetail";


const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={CarsDetail}
                renderItem={({item}) => <CarModel car={item} key={item.name}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
            {/*<CarModel car={CarsDetail[2]} />*/}
        </View>
    )
};

export default CarsList;