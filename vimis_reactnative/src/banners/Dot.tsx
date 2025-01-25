import React from 'react';
import { View, StyleSheet } from 'react-native';

type DotProps = {
    size?: number;
    color?: string;
};

const Dot: React.FC<DotProps> = ({ size = 20, color = '#000' }) => {
    return <View style={[styles.dot, { width: size, height: size, backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
    dot: {
        borderRadius: 50,
        margin: 5,
    },
});

export default Dot;
