// Susanna Hämäläinen 1751501

// importing components
import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image, FlatList } from 'react-native';
// importing custom components
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

const App: () => React$Node = () => {
  // empty array for tasks
  const [tasks, setTasks] = useState([]);

  // function that executed when add button is pressed
  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
    ...tasks, 
    {id: Math.random().toString(), value: taskTitle }
    ]);
  }; 

  return (
    <>
    <View style={styles.MainContainer}>
      {/*Background for app*/}
      <Image 
        style={styles.backgroundImage} 
        source={require('./images/AppBackground.png')}></Image>
        <TaskInput onAddTask={addTaskHandler}/>
        <FlatList 
        keyExtractor={(item, index) => item.id}
          data={tasks} 
          renderItem={itemData => <TaskItem title={itemData.item.value}/>}
        />
        {/*TouchableOpacity used as a button here
        <TouchableOpacity
          style={styles.roundAddButton}>
            <Image 
              style={styles.addButtonImage}
              source={require('./images/plusIconWhite.png')}></Image>
        </TouchableOpacity> */}
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
