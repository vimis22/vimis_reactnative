import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface LocationPageProps {
    circletext: string;
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

const LocationPage: React.FC<LocationPageProps> = ({circletext, text, path, navigation}) => {
    const randomColor = getRandomColor();

    return(
        <View style={styles.pageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(path)} style={[styles.buttonContainer, { backgroundColor: randomColor }]}>
                <Text style={styles.buttonText}>{circletext}</Text>
            </TouchableOpacity>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 50,
    },
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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default LocationPage;