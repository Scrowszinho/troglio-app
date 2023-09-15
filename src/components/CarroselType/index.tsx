import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';

interface CarroselTypeProps {
    containerStyle?: StyleProp<ViewStyle>;
}

const CarroselType = (props: CarroselTypeProps) => {
    return (
       <View style={props.containerStyle}>

       </View>
    );
}

export default CarroselType;