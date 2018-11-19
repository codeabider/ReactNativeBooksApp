import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Categories from '../Categories';
import { colors } from '../_base';

export default class CategoriesScreen extends Component {
    static navigationOptions = {
        title: 'Categories'
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Categories
                    onCategorySelect={ id => {
                        navigation.navigate('Category', {id});
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryBackground
    }
});
