//importing
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

//creating
class App extends React.Component {
  state = {
    text: '',
    todo: [],
  };
  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: '' });
  };
  deleteTodo = t => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  };
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.note}
            onPress={() => {
              this.deleteTodo(t);
            }}>
            {t}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.view}>
          <Text style={styles.header}>To-Do List</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button title="Add ToDo" color="#263238" onPress={this.addTodo} />
          <View style={{ marginTop: 25 }} />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = {
  bg: {
    backgroundColor: '#4db6ac',
    flex: 1,
  },
  view: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    width: 350,
    borderColor: '#263238',
    borderWidth: 1,
  },
  header: {
    fontSize: 30,
    color: '#263238',
    fontWeight: 'bold',
  },
  note: {
    fontSize: 25,
    color: '#263238',
  },
};

//exporting
export default App;
