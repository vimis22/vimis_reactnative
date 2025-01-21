import React from "react";
import {StyleSheet, View} from 'react-native';
import LocationPage from "../banners/LocationPage";
import TextTitle from "../banners/TextTitle";
import SquaredButtons from "../banners/SquaredButtons";
import LongSquareButton from "../banners/LongSquareButton";

const AssessmentScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <View>
                <LocationPage circletext={""} text={"Assessment"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.subjectListContainer}>
                <View>
                    <TextTitle text={"Subject Name"}/>
                    <LongSquareButton text={"Mobile Development"} path={"MainScreen"} navigation={navigation}/>
                </View>
                <View>
                    <TextTitle text={"Assignment"}/>
                    <LongSquareButton text={"Practice Hooks"} path={"MainScreen"} navigation={navigation}/>
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

export default AssessmentScreen;