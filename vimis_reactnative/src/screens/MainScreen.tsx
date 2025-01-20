import React from 'react';
import {StyleSheet, View} from 'react-native';
import CircularButtons from "../banners/CircularButtons";
import SectionTitle from "../banners/SectionTitle";

const MainScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <SectionTitle title={"MainPage"}/>
            <View style={styles.subjectListContainer}>
                <CircularButtons text={"Semester1"} path={"SemesterScreen"} navigation={navigation}/>
                <CircularButtons text={"Semester2"} path={"SemesterScreen"} navigation={navigation}/>
                <CircularButtons text={"Semester3"} path={"SemesterScreen"} navigation={navigation}/>
                <CircularButtons text={"Semester4"} path={"SemesterScreen"} navigation={navigation}/>
                <CircularButtons text={"Semester5"} path={"SemesterScreen"} navigation={navigation}/>
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
        justifyContent: "center",
    },
});

export default MainScreen;