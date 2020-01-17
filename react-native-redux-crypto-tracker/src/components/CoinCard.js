import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    conatiner: {
        display: "flex"
    },
    image: {
        width: 40,
        height: 40,
    },
    bold: {
        fontWeight: 'bold'
    }
})




const { conatiner, image, bold } = styles;

const CoinCard = ({symbol,coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    return (
        <View style={conatiner}>
            <Image
            
            style={style.image}
            source={{uri: image[symbol]}}
            
            />
            <Text>{symbol}</Text>
            <Text>{coin_name}</Text>
            <Text>{price_usd}<Text style={bold}>$</Text></Text>
            <Text> Change past 24 hours: {percent_change_24h}</Text>
    <Text>Change past 7 dyas: {percent_change_7d}</Text>
        </View>

    )
}

export default CoinCard;