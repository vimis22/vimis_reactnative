import React from 'react';
import {StyleSheet, View,} from "react-native";
import SectionTitle from "../banners/SectionTitle";
import TextInputComponent from "../banners/TextInputComponent";
import NavigationButton from "../banners/NavigationButton";
import TextTitle from "../banners/TextTitle";

const LoginScreen = ({navigation}: any) => {
    return(
        <View style={styles.pageContainer}>
            {/*Vi bruger form til at skifte side, sådan at det fungerer.*/}
            <form action={"SignupScreen"}>
                <SectionTitle title={"Login"}/>
                <TextInputComponent text={"UserID"} placeholder={"Please enter your UserID"}/>
                <TextInputComponent text={"Password"} placeholder={"Please enter your Password"}/>
            </form>
            {/*Når man klikker på knappen, så virker formen.*/}
            <NavigationButton text={"LOGIN"} path={"MainScreen"} navigation={navigation}/>
            <TextTitle text={"Don't have an Account?"}/>
            <NavigationButton text={"PRESS SIGNUP HERE"} path={"SignupScreen"} navigation={navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "grey",
        padding: 20,
    },
});

export default LoginScreen;