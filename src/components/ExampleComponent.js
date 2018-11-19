import React from 'react';
import { View, Text } from 'react-native';

const ExampleComponent = (props) => {
    return (
        <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'column'}}>
            <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'gold', justifyContent: 'space-around', alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>
                    A
                </Text>
                <Text style={{fontSize: 30}}>
                    A
                </Text>
                <Text style={{fontSize: 30}}>
                    A
                </Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'orange'}}>
                <Text>
                    B
                </Text>
           </View>
           <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <Text>
                    C
                </Text>
            </View>
        </View>
    )
}

export default ExampleComponent;