import React from "react";
import firebase from '../../utilities/firebase';
import styles from "./toDo.css";
import {Button} from 'react-bootstrap';

function ToDo({todo}){
    const completeToDo = () => {
        const todoRef = firebase.database().ref('crud-app').child(todo.id);

        todoRef.update({
            complete:!todo.complete,
    })
    }

    const deleteToDo = () => {
        const todoRef = firebase.database().ref('crud-app').child(todo.id);

        todoRef.remove();
    }
    

    return(
        <div>
            <h1 className={todo.complete ? 'complete' : 'incomplete'}>{todo.title}</h1>
            <Button onClick={deleteToDo} variant="secondary">Delete</Button> {}  
            <Button className={todo.complete ? 'hide-button' : ''} onClick={completeToDo} variant="success">Complete</Button>
            <Button className={todo.complete ? '' : 'hide-button'}  onClick={completeToDo} variant="danger">Incomplete</Button>
        </div>
    );
}

export default ToDo;