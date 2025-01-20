import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Subjects from "../banners/Subjects";
import SectionTitle from "../banners/SectionTitle";

const MainScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <SectionTitle title={"MainPage"}/>
            <View style={styles.subjectListContainer}>
                <Subjects text={"Fag1"} path={"SubjectScreen"} navigation={navigation}/>
                <Subjects text={"Fag2"} path={"SubjecScreen"} navigation={navigation}/>
                <Subjects text={"Fag3"} path={"SubjecScreen"} navigation={navigation}/>
                <Subjects text={"Fag4"} path={"SubjecScreen"} navigation={navigation}/>
                <Subjects text={"Fag5"} path={"SubjecScreen"} navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "grey",
        padding: 20,
    },
    subjectListContainer: {
        gap: 20,
        flexDirection: "row",
    },
});

export default MainScreen;