import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";

interface SubjectsProps {
    text: string;
    path: string;
    navigation: any;
}

const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i< 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const CircularButtons: React.FC<SubjectsProps> = ({text, path, navigation}) => {
    const randomColor = getRandomColor();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)} style={[styles.buttonContainer, { backgroundColor: randomColor }]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: 100,
        width: 100,
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CircularButtons;