import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";
const SplashScreen = ({navigation}: any) => {
    return (
        <TouchableOpacity style={styles.pageContainer} onPress={()=> navigation.navigate("LoginScreen")}>
            <Text style={styles.welcomeTitle}>Welcome to vimis22</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    welcomeTitle: {
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default SplashScreen;
