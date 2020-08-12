import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

type AppProps = {
    title: String
};

const Header = (props: AppProps) => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,

        alignItems: 'center',
        justifyContent: 'center',

    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        //Expo can't load custom fonts when fontWeight is set
        // fontWeight: 'bold',
        fontSize: 18,
        height: '100%',
        fontFamily: 'open-sans',
    }
});

export default Header;