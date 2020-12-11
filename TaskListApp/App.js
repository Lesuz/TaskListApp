// Susanna Hämäläinen 1751501

// importing components
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, FlatList, Switch, Linking } from 'react-native';
import { NavigationContainer, TabActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';


// importing custom components
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

const Tab = createBottomTabNavigator();

// Task page
function TaskList() {

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
        <Text style={styles.header}>Task List</Text>
        <TaskInput visible={isAddMode} onAddTask={addTaskHandler} onCancel={cancelAddTaskHandler}/>
        {/* Placement for list of tasks*/ }
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
}
// Setting page
function Settings() {
  return (
    <View style={styles.MainContainer}>
    {/*Background for app*/}
    <Image 
      style={styles.backgroundImage} 
      source={require('./images/AppBackground.png')}></Image>
      <View>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.setting}>
          <Text style={styles.settingstext}>Dark Mode</Text>
          <Switch 
            trackColor= {{ false: "#767577", true: "#81b0ff"}} />
        </View>
      </View>
    </View>
  )
}
// About page
function About(){
  return (
    <View style={styles.MainContainer}>
    {/*Background for app*/}
    <Image 
      style={styles.backgroundImage} 
      source={require('./images/AppBackground.png')}></Image>
      {/* Content of page */}
      <View>
        <Text style={styles.header}>About</Text>
        <Text style={styles.header2}> Current Version</Text>
        <Text style={styles.text}> A simple task list app with a comfortable UI. Tasks can be added and deleted. 
          This app is part of a hands-on practical test and a big part of my learning journey with React native.</Text>
        <Text style={styles.header2}> Future Version</Text>
        <Text style={styles.text}> I will be practising different things on this app. Some things I will be adding to this app: dark mode, different color themes,
        log in so this app can be used on multiple platforms and connect the app to a database. Also different language options is one addition I could make.</Text>
      </View>
    </View>
  )
}
function Manual(){
  return (
    <View style={styles.MainContainer}>
    {/*Background for app*/}
    <Image 
      style={styles.backgroundImage} 
      source={require('./images/AppBackground.png')}></Image>
      <View>
        {/* Content of page */}
        <Text style={styles.header}>Manual</Text>
        <Text style={styles.header2}>Adding Task</Text>
        <Text style={styles.text}>To add a task, tap the + -sign located on the bottom right corner. 
          A new page will be opened in which the task can input after tapping it. Then press Add or Cancel. Add will add it 
          to the task list and will bring the user back to the task list. Cancel does not add the task into the task list and will bring the user back to the task list -page.</Text>
        <Text style={styles.header2}>Deleting Task</Text>
        <Text style={styles.text}>To delete a task, press long on it and it will dissapear after letting go.</Text>
      </View>
    </View>
  )
}
function Contact(){
  return(
    <View style={styles.MainContainerContact}>
    {/*Background for app*/}
    <Image 
      style={styles.backgroundImage} 
      source={require('./images/AppBackground.png')}></Image>
      <View>
        {/* Content of page */}
        <Text style={styles.header}>Contact Information</Text>
        <Text style={styles.text}>Feel free to connect with me on LinkedIn. 
        The code for this app can also be found on GitHub.</Text>
        {/* Icons when pressed open link */}
        <View  style={styles.socials}>
          <TouchableOpacity style={styles.social2} onPress={() => Linking.openURL("https://www.linkedin.com/in/susanna-h%C3%A4m%C3%A4l%C3%A4inen-81557616b/")}>
            <Image style={styles.social} source={require('./images/linkedinwhite.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social2} onPress={() => Linking.openURL("https://github.com/Lesuz/TaskListApp")}>
            <Image style={styles.social} source={require('./images/githubwhite.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const App: () => React$Node = () => {
    {/* Tab Navigation */}
    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="TaskList"
          tabBarOptions={{
            tabStyle: { 
              backgroundColor: "#6A49C7",
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderLeftColor: "#4E3B86",
              borderRightColor: "#4E3B86",
              borderTopColor: "#4E3B86"
            },
            labelStyle: {
              fontSize: 22,
              color: "white",
              fontFamily: "Caveat-Regular",
              height: 40,
              paddingHorizontal: 2
            }
          }}
          >
          <Tab.Screen name="Settings" component={Settings}/>
          <Tab.Screen name="About" component={About}/>
          <Tab.Screen name="Task List" component={TaskList}/>
          <Tab.Screen name="Manual" component={Manual}/>
          <Tab.Screen name="Contact" component={Contact}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }


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
  header: {
    flexDirection: "row",
    color: "white",
    fontFamily: "Caveat-Bold",
    fontSize: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    textDecorationLine: "underline"
  },
  header2: {
    flexDirection: "row",
    color: "white",
    fontFamily: "Caveat-Regular",
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    textDecorationLine: "underline"
  },
  text: {
    flexDirection: "row",
    color: "white",
    fontFamily: "Caveat-Regular",
    fontSize: 25,
    paddingHorizontal: 35
  },
  setting: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  settingstext: {
    color: "white",
    fontFamily:"Caveat-Regular",
    fontSize: 30,
    paddingRight: 100
  },
  addButtonImage: {
    height: 50,
    width: 50
  },
  roundAddButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#6A49C7",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20
  },
  MainContainerContact: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  socials: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  social: {
    height: 100,
    width: 100,
    marginHorizontal: 30,
  }
});

export default App;
