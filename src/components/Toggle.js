import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Toggle extends Component {

    render() {
        const { render, data } = this.props;
        return (<View>
            <Text> Toggle Component </Text>
            <View>
                {data?.map(element => render(element))}
            </View>
        </View>
        );
    }
}

export default Toggle;
