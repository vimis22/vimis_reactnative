import React from "react";
import {View, StyleSheet, Text} from "react-native";

interface TextTitleProps{
    text: string;
}

const TextTitle: React.FC<TextTitleProps> = ({text}) => {
    return (
        <View>
           <Text style={styles.buttonText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default TextTitle;