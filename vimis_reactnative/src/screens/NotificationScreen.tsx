import React from "react";
import {StyleSheet, View} from "react-native";
import AddButton from "../banners/AddButton";
import SectionTitle from "../banners/SectionTitle";
import SquaredButtons from "../banners/SquaredButtons";
import LongSquareButton from "../banners/LongSquareButton";

const NotificationScreen = ({navigation}:any) => {
    return(
        <View style={styles.pageContainer}>
            <SectionTitle title={"Notifications"}/>
            <View>
                <AddButton text={"+"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.subjectListContainer}>
                <View>
                    <SquaredButtons text={""} path={"MainScreen"} navigation={navigation}/>
                </View>
                <View>
                    <LongSquareButton text={""} path={"MainScreen"} navigation={navigation}/>
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
        gap: 5,
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default NotificationScreen;