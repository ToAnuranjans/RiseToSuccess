import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../themes/Colors';
import store from '../../store/Store';
import { getAllUsers } from './action';
import { useSelector } from 'react-redux';
import { USER_DETAILS } from '../constants';


const UserScreen = ({ navigation }) => {
    const users = useSelector(state => state.users);

    useEffect(() => {
        store.dispatch(getAllUsers());
        return () => {

        };
    }, []);

    const goToDetails = (id) => {
        navigation.navigate(USER_DETAILS, {
            id: id,
        });
    };

    return (
        <View style={styles.container}>
            {users && users.length && users?.map(user => (
                <View key={user.id} style={styles.textContainer}>
                    <TouchableOpacity onPress={() => goToDetails(user.id)}>
                        <Text style={styles.text}> {user.name} </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 24,
        color: Colors.textColor,

    },
    textContainer: {
        margin: 5,
        padding: 5,
    },
});

export default UserScreen;
