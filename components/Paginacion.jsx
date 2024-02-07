import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Paginacion = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }

    return (
        <View style={styles.nav}>
            <View style={styles.pagination}>
                {prev && (
                    <View style={styles.pageItem}>
                        <Button title="Previous" onPress={handlePrevious} />
                    </View>
                )}
                {next && (
                    <View style={styles.pageItem}>
                        <Button title="Next" onPress={handleNext} />
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginTop: 20,
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pageItem: {
        marginHorizontal: 5,
    },
});

export default Paginacion;
