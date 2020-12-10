// Susanna Hämäläinen 1751501

// importing components
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, FlatList } from 'react-native';
// importing custom components
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

const App: () => React$Node = () => {
  // empty array for tasks
  const [tasks, setTasks] = useState([]);
  // a state for if a task is being added or not
  const [isAddMode, setIsAddMode] = useState(false);

  // function that executed when add button is pressed
  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
    ...tasks, 
    {id: Math.random().toString(), value: taskTitle }
    ]);
    setIsAddMode(false);
  }; 
  // function for cancel button
  const cancelAddTaskHandler = () => {
    setIsAddMode(false);
  }

  // function which removes task
  // removes only when item is pressed for longer - tapping does not delete it
  const removeTaskHandler = taskId => {
    setTasks(currentTasks => {
          return currentTasks.filter((task) => task.id !== taskId);
    })}


  return (
    <>
    <View style={styles.MainContainer}>
      {/*Background for app*/}
      <Image 
        style={styles.backgroundImage} 
        source={require('./images/AppBackground.png')}></Image>
        <TaskInput visible={isAddMode} onAddTask={addTaskHandler} onCancel={cancelAddTaskHandler}/>
        <FlatList 
        keyExtractor={(item, index) => item.id}
          data={tasks} 
          renderItem={itemData => <TaskItem  onDelete={removeTaskHandler.bind(this, itemData.item.id)} title={itemData.item.value}/>}
        />
        {/*TouchableOpacity used as a button here*/}
        {/*Setting setIsAddMode to true to open modal where task can be input*/}
        <TouchableOpacity 
          onPress={() => setIsAddMode(true)}
          style={styles.roundAddButton}>
            <Image 
              style={styles.addButtonImage}
              source={require('./images/plusIconWhite.png')}></Image>
        </TouchableOpacity> 
    </View>
    </>
  );
};

// Styling on page and images
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  backgroundImage: {
    position:"absolute",
    top: 0,
    left: 0,
    bottom: 0, 
    right: 0
  },
  addButtonImage: {
    height: 50,
    width: 50
  },
  roundAddButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#c349c7",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30
  }
  
    
});

export default App;
