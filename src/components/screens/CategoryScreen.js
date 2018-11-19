import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Category from '../Category';
import { colors } from '../_base';

export default class CategoryScreen extends Component {
    static navigationOptions = {
        title: 'Category'
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Category
                    id={ navigation.state.params.id }
                    onBookSelect={ id => navigation.navigate('Book', {id}) }
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
