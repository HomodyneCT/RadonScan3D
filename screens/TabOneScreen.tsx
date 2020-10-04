import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import {
    Accelerometer,
} from "expo-sensors";

export default function TabOneScreen() {
    const [data, setData] = React.useState({});

    var _subscription = null;

    Accelerometer.setUpdateInterval(200);

    const _subscribe = () => {
        _subscription = Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
        });
    };

    const _unsubscribe = () => {
        _subscription && _subscription.remove();
        _subscription = null;
    };

    if (!_subscription) {
        _subscribe();
    }

    let { x, y, z } = data;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.text}>
                x: {round(x)} y: {round(y)} z: {round(z)}
            </Text>
            <EditScreenInfo path="/screens/TabOneScreen.js" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});


function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}
