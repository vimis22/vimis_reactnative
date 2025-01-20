import React from "react";
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

interface NavbarProps {
    path: string;
    image: any;
    navigation: any;
}

const Navbar: React.FC<NavbarProps> = ({path,navigation, image}) => {
    return(
        <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(path)}>
                <Image source={image} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#330099",
        height: 100,
        width: "100%",
        padding: 10,
        margin: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
});

export default Navbar;