import React from 'react';

export const User = () => {

    const deleteUser = () => {
        alert ('user have been deleted')
    }

    const saveUser = () => {
        alert ('user have been saved')
    }

    const nameChanged = () => {
        console.log('nameChanged')
    }

    const lostFocus = () => {
        console.log('lostFocus')
    }

    return (
        <div>
            <textarea onChange={nameChanged} onBlur={lostFocus}>User1</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}