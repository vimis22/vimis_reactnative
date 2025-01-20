import React from 'react';
import {StyleSheet, View} from 'react-native';
import SquaredButtons from "../banners/SquaredButtons";
import SectionTitle from "../banners/SectionTitle";
import LocationPage from "../banners/LocationPage";

const SubjectScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <View>
                <LocationPage circletext={""} text={"Subjects"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.subjectListContainer}>
                <SquaredButtons text={"Lecture1"} path={"SemesterScreen"} navigation={navigation}/>
                <SquaredButtons text={"Lecture2"} path={"SemesterScreen"} navigation={navigation}/>
                <SquaredButtons text={"Lecture3"} path={"SemesterScreen"} navigation={navigation}/>
                <SquaredButtons text={"Lecture4"} path={"SemesterScreen"} navigation={navigation}/>
                <SquaredButtons text={"Lecture5"} path={"SemesterScreen"} navigation={navigation}/>
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

export default SubjectScreen;