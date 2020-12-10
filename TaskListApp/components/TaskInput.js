// Susanna Hämäläinen 1751501

import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const TaskInput = props => {

    // creating variables to save what user input
    const [enteredTask, setEnteredTask] = useState('');

    // function to save the entered task into variable
    const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
    };

    // function to clear input
    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.InputSite}>
                {/*Input field for the task to be input*/}
                <TextInput  
                style={styles.TaskInput} 
                placeholder= "Task" 
                onChangeText={taskInputHandler}
                value={enteredTask} />
                {/*Button which starts the fucntion addTaskhandler*/}
                <View style={styles.buttonContainer}>
                    <View style= {styles.button}>
                        <Button title="Add" onPress={addTaskHandler} color="#8A11C2" />
                    </View>
                    <View style= {styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#DA3164" />
                    </View>
                </View>
            </View>
        </Modal>
        
    );
};

const styles = StyleSheet.create ({
    InputSite: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1, 
        backgroundColor: "#C47CFF"
    },
    TaskInput: {
        fontSize: 35,
        fontFamily: "Caveat-Regular",
        color: "#7C60A0",
        backgroundColor: "#FFECFE",
        width: 300,
        paddingHorizontal: 20,
        paddingVertical: 5,
        height: 55,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8

    },
    buttonContainer: {
        flexDirection: "column",
        
    },
    button: {
        width: 150,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
        fontFamily: "Caveat-Bold"
    }
});
export default TaskInput;