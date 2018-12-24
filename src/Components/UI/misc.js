import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const template = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Righteous'
        }}
    >
        {props.children}
    </div>

    if (props.link) {
        return (
            <Link to={props.linkto}>
                {template}
            </Link>
        )
    } else {
        return template
    }
}

export const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}

// Reversing the list from the database to display the items in chronological order
// Data gotten from the database 6>5>4>3>2>1
// Reversing the list to display 1>2>3>4>5>6
export const reverseArray = (actualArray) => {
    let reversedArray = [];
    for (let i = actualArray.length - 1; i >= 0; i--) {
        reversedArray.push(actualArray[i])
    }
    return reversedArray;
}

export const validate = (element) => {
    let error = [true, ''];

    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`;
        error =!valid ? [valid, message] : error;
    }

    return error
}