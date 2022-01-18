import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const UserDetailsScreen = ({ route }) => {
    const id = route.params.id;
    const user = useSelector(state => state.users.find(x => x.id === id));
    return (
        <View style={styles.container}>
            <Text>
                {JSON.stringify(user)}
            </Text>
        </View>
    );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
    container: {

    },
});
