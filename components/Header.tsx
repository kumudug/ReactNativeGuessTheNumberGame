import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AppProps = {
    title: String
};

const Header = (props: AppProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#731359',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        height: '100%'
    }
});

export default Header;