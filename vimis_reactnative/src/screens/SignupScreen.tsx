import React from 'react';
import {StyleSheet, View} from "react-native";
import SectionTitle from "../banners/SectionTitle";
import TextInputComponent from "../banners/TextInputComponent";
import NavigationButton from "../banners/NavigationButton";

const SignupScreen = ({navigation}: any) => {
    return (
        <View style={styles.pageContainer}>
            {/*Vi bruger form til at skifte side, sådan at det fungerer.*/}
            <form action={"LoginScreen"}>
                <SectionTitle title={"SignupScreen"}/>
                <TextInputComponent text={"UserID"} placeholder={"Please enter your UserID"}/>
                <TextInputComponent text={"Email"} placeholder={"Please enter your Email"}/>
                <TextInputComponent text={"Password"} placeholder={"Please enter your Password"}/>
                <TextInputComponent text={"Confirm Password"} placeholder={"Please confirm your Password"}/>
            </form>
            {/*Når man klikker på knappen, så virker formen.*/}
            <NavigationButton text={"LOGIN"} path={"MainScreen"} navigation={navigation}/>
            <NavigationButton text={"Dont have an Account?"} path={"SignupScreen"} navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "grey",
        padding: 20,
    },
});

export default SignupScreen;
