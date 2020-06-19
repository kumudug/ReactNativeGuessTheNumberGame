import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

type AppProps = {
    title: String
};

const Header = (props: AppProps) => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        //Expo can't load custom fonts when fontWeight is set
        // fontWeight: 'bold',
        fontSize: 18,
        height: '100%',
        fontFamily: 'open-sans'
    }
});

export default Header;