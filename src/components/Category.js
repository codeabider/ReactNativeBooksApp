import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableHighlight, StyleSheet, Alert } from 'react-native';

import { colors, padding } from './_base';
import Loading from './common/Loading';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: props.page || 1,
            limit: props.limit || 3,
            noMore: props.disableInfiniteScroll || false
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const { data, page, limit, noMore } = this.state;
        const { id } = this.props;
        this.setState({ loading: true }, () => {
            fetch(`https://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`)
            .then( response => response.json() )
            .then( updatedData => this.setState({
                data: [...data, ...updatedData],    // append updated data received to existing data
                noMore: noMore || updatedData.length < limit
            }) )
            .catch( err => Alert.alert('Oh snap!', 'Something went wrong!') )
            .finally( () => this.setState({ loading: false }))
        })
    }

    // explicitly using bind while calling this method, since not an arrow function
    loadMore() {
        const { page, loading, noMore } = this.state;
        if (loading || noMore) return;    // prevent page increment if data is already loading
        this.setState({ page: page + 1 }, () => this.getData());
    }

    render() {
        const { data, loading } = this.state; 
        const { onBookSelect } = this.props; 
        return (
            <View>
                <FlatList
                    data={ data }
                    keyExtractor={ item => item.id }
                    renderItem={ ({item}) => 
                        <TouchableHighlight 
                            underlayColor={ colors.primary }
                            style={ styles.listItem }
                            onPress={ onBookSelect.bind(this, item.id) }
                        >
                            <Text>{ item.name }</Text>
                        </TouchableHighlight>
                    }
                    onEndReached={ this.loadMore.bind(this) }
                    onEndReachedThreshold={ 0.01 }  // 0.5 will be somewhere middle of the list
                    ListFooterComponent={ <Loading isLoading={ loading } /> }
                />
            </View>
        )
    }
}

Category.propTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number,
    page: PropTypes.number,
    disableInfiniteScroll: PropTypes.bool,
    onBookSelect: PropTypes.func
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: padding.md,
        backgroundColor: colors.background
    }
});

export default Category;