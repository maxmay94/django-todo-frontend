import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
  console.log('App executed');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/todos/');
      // const response = await axios.get('http://YOUR_API_BASE_URL/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text>ToDo List</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default App;