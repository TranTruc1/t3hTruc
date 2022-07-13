import React, { Component } from 'react'
import { Consumer } from '../context';
import Contact from './Contact';

export default class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact =>
                                <Contact
                                    contact={contact}
                                    key={contact.id}
                                    deleclickHandler={this.deleteContact}
                                />
                            )}
                        </React.Fragment>
                    )
                }
                }
            </Consumer>
        )
    }
}
