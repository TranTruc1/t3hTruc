import React, { Component } from 'react'

const Context = React.createContext();

const Reducer = (state, action) => {
    switch (action.type){
        case 'DELETE_CLICK':
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact !== contact.payload)
            }
        default:
            return state;
    }
}