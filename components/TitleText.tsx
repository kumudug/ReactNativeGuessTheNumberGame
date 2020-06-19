import React from 'react';
import { Text, StyleSheet } from 'react-native';

type AppProps = {
    style?: Object,
    children: React.ReactNode
}

const TitleText = (props: AppProps) => <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

export default TitleText;