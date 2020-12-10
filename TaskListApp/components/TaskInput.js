// Susanna Hämäläinen 1751501

import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const TaskInput = props => {

    // creating variables to save what user input
    const [enteredTask, setEnteredTask] = useState('');

    // function to save the entered task into variable
    const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
    };

    return (
        <View>
          {/*Input field for the task to be input*/}
          <TextInput  
            style={styles.TaskInput} 
            placeholder= "Task" 
            onChangeText={taskInputHandler}
            value={enteredTask} />
            {/*Button which starts the fucntion addTaskhandler*/}
          <Button title="Add" onPress={props.onAddTask.bind(this, enteredTask)} />
        </View>
    );
};

const styles = StyleSheet.create ({
    TaskInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
      }
});
export default TaskInput;