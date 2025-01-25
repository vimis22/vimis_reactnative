import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import LocationPage from "../banners/LocationPage";
import Dot from "../banners/Dot";

const SettingScreen = ({navigation}: any) => {
    return(
        <View style={styles.pageContainer}>
            <View>
                <LocationPage circletext={""} text={"Settings"} path={"MainScreen"} navigation={navigation}/>
            </View>
            <View style={styles.pageContainer}>
                <View style={styles.subjectListContainer}>
                    <Dot size={10} color="red" />
                    <Dot size={10} color="blue" />
                    <Dot size={10} color="green" />
                    <Dot size={10} color="purple" />
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
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 100,
        padding: 20,
    },
});

export default SettingScreen;