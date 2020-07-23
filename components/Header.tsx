import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

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
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
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