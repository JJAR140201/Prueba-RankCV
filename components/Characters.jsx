import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Characters = ({ characters = [] }) => {
    return (
        <View style={styles.row}>
            {
                characters.map((item, index) => (
                    <View key={index} style={styles.col}>
                        <View style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <View style={styles.hr} />
                            <Text>Species: {item.species}</Text>
                            <Text>Location: {item.location.name}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    col: {
        marginBottom: 10,
        flex: 1,
    },
    card: {
        minWidth: 200,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 5,
    },
});

export default Characters;
