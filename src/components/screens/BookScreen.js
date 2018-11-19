import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Book from '../Book';
import Loading from '../common/Loading';
import { colors } from '../_base';

export default class BookScreen extends Component {
    static navigationOptions = {
        title: 'Book'
    }

    constructor(props) {
        super(props);
        this.state= {
            loading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const { navigation } = this.props;
        fetch(`https://acamicaexample.herokuapp.com/books/${navigation.state.params.id}`)
        .then( response => response.json() )
        .then( data => this.setState({data}) )
        .catch( err => Alert.alert('Oh snap! Something went wrong!') )
        .finally( () => this.setState({loading: false}));
    }
    
    render() {
        let { loading, data: book } = this.state;
        return loading ? <Loading isLoading={true} /> : (
            <View style={styles.container}>
                <Book
                    author={ book.author }
                    image={ book.image }
                    description={ book.description }
                    url={ book.url }
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
