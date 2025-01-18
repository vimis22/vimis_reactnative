import React from "react";
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as path from "node:path";

interface NavigationButtonProps {
    text: string;
    path: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({text, path, navigation}: any) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)}>
            <Text style={styles.buttonText}>{text} <Text>{text}</Text></Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#330099',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default NavigationButton;