// Susanna Hämäläinen 1751501

// importing needed libraries and components
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// this will be a new component that is going to be used in App.js
// This component will return the the task with its styles
const TaskItem = props => {

    return (
        <TouchableOpacity onLongPress={props.onDelete}>
            <View style={styles.list}>
                <Text style={styles.listText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    list: {
        padding: 10,
        borderBottomColor: "#7A5AA1",
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        padding: 20
      },
      listText: {
        fontSize: 30,
        fontFamily: "Caveat-Regular",
        color: "white"
      }
})
export default TaskItem;