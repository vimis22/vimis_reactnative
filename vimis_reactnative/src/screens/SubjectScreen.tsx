import React from 'react';
import {StyleSheet, View} from 'react-native';
import SquaredButtons from "../banners/SquaredButtons";
import LocationPage from "../banners/LocationPage";
import LongSquareButton from "../banners/LongSquareButton";

const SubjectScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <View>
                <LocationPage circletext={""} text={"Subjects"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.subjectListContainer}>
                <View>
                    <SquaredButtons text={"1"} path={"MainScreen"} navigation={navigation}/>
                </View>
                <View>
                    <LongSquareButton text={"Lecture1"} path={"MainScreen"} navigation={navigation}/>
                </View>
                <View>
                    <LongSquareButton text={"LINK"} path={"MainScreen"} navigation={navigation}/>
                </View>
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