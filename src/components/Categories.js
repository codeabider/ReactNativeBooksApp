import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableHighlight, StyleSheet, Alert } from 'react-native';

import { colors, padding } from './_base';
import Loading from './common/Loading';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({ loading: true }, () => {
            fetch('https://acamicaexample.herokuapp.com/categories')
            .then( response => response.json() )
            .then( data => this.setState({ data }) )
            .catch( err => Alert.alert('Oh snap!', 'Something went wrong!') )
            .finally( () => this.setState({ loading: false }))
        })
    }

    render() {
        const { data, loading } = this.state; 
        const { onCategorySelect } = this.props; 
        return (
            <View>
                <Loading isLoading={ loading }/>
                <FlatList
                    data={ data }
                    keyExtractor={ item => item.id }
                    renderItem={ ({item}) => 
                        <TouchableHighlight 
                            underlayColor={colors.primary}
                            style={styles.listItem}
                            onPress={ onCategorySelect.bind(this, item.id) }
                        >
                            <Text>{item.name}</Text>
                        </TouchableHighlight>
                    }
                />
            </View>
        )
    }
}

Categories.propTypes = {
    onCategorySelect: PropTypes.func
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: padding.md,
        backgroundColor: colors.background
    }
});

export default Categories;