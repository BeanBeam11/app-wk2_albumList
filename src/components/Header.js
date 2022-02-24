import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Albums</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#fff',
        shadowColor: '#484848',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10, //Android only
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C4C4C4',
    }
});

export default Header;