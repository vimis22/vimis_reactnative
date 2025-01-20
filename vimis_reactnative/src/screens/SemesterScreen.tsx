import React from "react";
import {StyleSheet, View} from 'react-native';
import SquaredButtons from "../banners/SquaredButtons";
import SectionTitle from "../banners/SectionTitle";
import CircularButtons from "../banners/CircularButtons";
import TextTitle from "../banners/TextTitle";
import LocationPage from "../banners/LocationPage";

const SemesterScreen = ({navigation}: any) => {
    return(
        <View style={styles.pageContainer}>
            <View>
                <LocationPage circletext={""} text={"Semester"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.subjectListContainer}>
                <SquaredButtons text={"Subject1"} path={"SubjectScreen"} navigation={navigation}/>
                <SquaredButtons text={"Subject2"} path={"SubjectScreen"} navigation={navigation}/>
                <SquaredButtons text={"Subject3"} path={"SubjectScreen"} navigation={navigation}/>
                <SquaredButtons text={"Subject4"} path={"SubjectScreen"} navigation={navigation}/>
                <SquaredButtons text={"Subject5"} path={"SubjectScreen"} navigation={navigation}/>
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

export default SemesterScreen;