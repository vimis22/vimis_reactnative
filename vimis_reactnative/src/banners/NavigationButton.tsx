import React from "react";
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface NavigationButtonProps {
    text: string;
    path: string;
    navigation: any;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({text, path, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#330099',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default NavigationButton;
