import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = taskToDelete => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO DO LIST</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nouvelle tâche"
        onChangeText={text => setNewTask(text)}
        value={newTask}
      />
      <Button title="Ajouter" onPress={() => addTask()} />
      <View style={styles.view}>
        {tasks.map(task => (
          <View key={task} style={styles.input}>
            <Text style={styles.text}>{task}</Text>
            <Button title="Supprimer" onPress={() => deleteTask(task)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  },
  view: {
    marginTop: 20
  },
  text: {
    marginTop: 10
  },
  title: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
  }
});