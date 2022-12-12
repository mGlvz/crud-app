import logo from './logo.svg';
import './App.css';

import Form from './components/form/form';
import ToDoList from './components/toDoList/toDoList';

function App() {
  return (
    <div className="App">
      <h1>GROCERY LIST</h1>
      <Form></Form>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
