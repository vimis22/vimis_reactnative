import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

interface SectionTitleProps {
    title: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
    return(
        <Text style={styles.sectionTitle}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default SectionTitle;