import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert, Image } from 'react-native';

import { colors, padding, fonts } from './_base';

const Book = (props) => {
    const { author, image, description, url } = props;
    return (
        <View style={styles.bookContainer}>
            <View style={styles.bookHeaderContainer}>
                <View style={styles.bookImage}>
                    <Image
                        style={{width: 60, height: 90}}
                        source={{uri: image}}
                    />
                </View>
                <View style={styles.bookAuthor}>
                    <Text>by <Text style={styles.bookAuthorText}>{ author }</Text></Text>
                </View>
            </View>
            <View style={styles.bookDescriptionContainer}>
                <Text>{ description }</Text>
            </View>
            <View style={styles.bookButtonContainer}>
                <TouchableOpacity
                    style={styles.bookOrderButton}
                    onPress={() => { 
                        Linking.openURL(url)
                        .catch(err => {
                            Alert.alert('Something went wrong!')
                        })
                    }}>
                    <Text>Order on Amazon</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    bookHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.primary
    },
    bookImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthorText: {
        fontSize: fonts.lg
    },
    bookDescriptionContainer: {
        flex: 3,
        padding: padding.sm,
        backgroundColor: colors.background,
    },
    bookButtonContainer: {
        backgroundColor: colors.background,
        height: 50
    },
    bookOrderButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 10
    }
});

export default Book;