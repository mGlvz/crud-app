import React, {useState} from "react";
import firebase from '../../utilities/firebase'

function Form(){
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = () => {
        const todoRef = firebase.database().ref('crud-app');
        const todo = {
            title,
            complete: false
        }
        todoRef.push(todo)
    }

    return(
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            <button onClick = {createTodo}>Add Item</button>
        </div>
    );
}

export default Form;