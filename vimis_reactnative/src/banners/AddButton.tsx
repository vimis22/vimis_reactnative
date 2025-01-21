import React from "react";
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";

interface AddButtonProps {
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

const AddButton: React.FC<AddButtonProps> = ({text, path, navigation}) => {
    const randomColor = getRandomColor();

    return (
        <View style={styles.informationsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(path)} style={[styles.buttonContainer, { backgroundColor: randomColor }]}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    informationsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        height: 50,
        width: "3%",
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: "70%",
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default AddButton;