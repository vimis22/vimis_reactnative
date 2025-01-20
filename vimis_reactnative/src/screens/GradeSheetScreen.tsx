import React from "react";
import {StyleSheet, View} from 'react-native';
import LocationPage from "../banners/LocationPage";
import SquaredButtons from "../banners/SquaredButtons";
import LongSquareButton from "../banners/LongSquareButton";
import TextTitle from "../banners/TextTitle";

const GradeSheetScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <View>
                <LocationPage circletext={""} text={"Subjects"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.subjectListContainer}>
                <View>
                    <TextTitle text={"Subject Name"}/>
                    <LongSquareButton text={"Mobile Development"} path={"MainScreen"} navigation={navigation}/>
                </View>
                <View>
                    <TextTitle text={"Published by"}/>
                    <SquaredButtons text={"Vivek Misra"} path={"MainScreen"} navigation={navigation}/>
                </View>
                <View>
                    <TextTitle text={"Grade"}/>
                    <SquaredButtons text={"10"} path={"MainScreen"} navigation={navigation}/>
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

export default GradeSheetScreen;