import React from "react";
import {Text, TextInput, StyleSheet, View} from "react-native";

interface TextInputComponentProps {
    text: string;
    placeholder: string;
}
const TextInputComponent: React.FC<TextInputComponentProps> = ({text, placeholder}) => {
    return(
        <View>
            <Text style={styles.textInputLabel}>{text}</Text>
            <TextInput style={styles.inputFieldText} placeholder={placeholder}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
    },
    inputFieldText: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
    },
});

export default TextInputComponent;