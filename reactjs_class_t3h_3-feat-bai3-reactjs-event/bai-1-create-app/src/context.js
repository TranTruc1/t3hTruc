
import React, { Component, createContext } from 'react'

const Context = createContext();


export class Provider extends Component {
      state = {
        contacts: [
            {   id: 1,
                name: "test1",
                email: "test1@gamil.com",
                phone: "+84 333 5555"
            },
            {
                id: 2,
                name: "test2",
                email: "test2@gamil.com",
                phone: "+84 444 5555"
            },
            {
                id: 3,
                name: "test3",
                email: "test3@gamil.com",
                phone: "+84 555 5555"
            },
        ]
      }

render(){
  return (
    <Context.Provider value = {this.state}>
      {this.props.children}
    </Context.Provider>
  )
}
  
}

export const Consumer = Context.Consumer;