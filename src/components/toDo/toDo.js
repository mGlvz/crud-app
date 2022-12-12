import React from "react";
import firebase from '../../utilities/firebase';
import styles from "./toDo.css";
import {Button} from 'react-bootstrap/Button';

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
            <Button onClick={deleteToDo} variant="outline-secondary">Delete</Button>
            <button className={todo.complete ? 'hide-button' : ''} onClick={completeToDo}>Complete</button>
            <button className={todo.complete ? '' : 'hide-button'}  onClick={completeToDo}>Incomplete</button>
        </div>
    );
}

export default ToDo;

// import {Button, Stack} from 'react-bootstrap';

// function ToDo({todo}) {
//     const completeToDo = () => {
//         const todoRef = firebase.database().ref('crud-app').child(todo.id);

//         todoRef.update({
//             complete:!todo.complete,
//     })
//     }

//     const deleteToDo = () => {
//         const todoRef = firebase.database().ref('crud-app').child(todo.id);

//         todoRef.remove();
//     }
    
//   return (
//     <Stack className="listItem" direction="horizontal" gap={3}>
//       <h1 className={todo.complete ? 'complete' : 'incomplete'}>{todo.title}</h1>
//       <Button onClick={deleteToDo} variant="secondary">Delete</Button>
//       <div className="vr" />
//       <Button className={todo.complete ? 'hide-button' : ''} onClick={completeToDo} variant="outline-danger">Complete</Button>
//       <Button className={todo.complete ? '' : 'hide-button'} onClick={completeToDo} variant="outline-danger">Incomplete</Button>
//     </Stack>
//   );
// }

// export default ToDo;