import React from "react";
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{text}</Text>
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

export default Button;