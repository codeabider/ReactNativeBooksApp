import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
// import ExampleComponent from './src/components/ExampleComponent';
// import Books from './src/components/Books';
import { StackNavigator } from 'react-navigation';
import Category from '../Category';
import { colors } from '../_base';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'RN Books'
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                {/* Note: Button component has a bug in React Native v0.57.3 | downgraded to v0.57.1 */}
                <Button
                    title="Check Categories"
                    onPress={ () => navigation.navigate('Categories') }
                />
                <Category
                    id={ '0' }
                    limit={ 3 }
                    disableInfiniteScroll={ true }
                    onBookSelect={ id => navigation.navigate('Book', {id}) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.secondaryBackground
    }
});
