import React from 'react';
import {StyleSheet, View,} from "react-native";
import SectionTitle from "../banners/SectionTitle";
import TextInputComponent from "../banners/TextInputComponent";
import Button from "../banners/Button";
import NavigationButton from "../banners/NavigationButton";

const SignupScreen = ({navigation}: any) => {
    return(
        <View style={styles.pageContainer}>
            <SectionTitle title={"Login"}/>
            <TextInputComponent text={"UserID"} placeholder={"Please enter your UserID"}/>
            <TextInputComponent text={"Email"} placeholder={"Please enter your Email"}/>
            <TextInputComponent text={"Password"} placeholder={"Please enter your Password"}/>
            <TextInputComponent text={"Confirm Password"} placeholder={"Please confirm your password"}/>
            <Button text={"SIGNUP"}/>
            <NavigationButton text={"Have already an Account?"} path={'LoginScreen'}/>
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

export default SignupScreen;