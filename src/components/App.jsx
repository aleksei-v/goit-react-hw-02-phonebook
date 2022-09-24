// import { Box } from "./Box";
import React, { Component } from "react";
import { Form } from "./Form/Form";

export class App extends Component {

    state = {
        contacts: [],
    }
    receivedData = data => {
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, data]
        }))
    };
    
    render() {
        return (
            <>
                <Form onSubmit={this.receivedData} />
                {this.state.contacts.map((contact => {
                    return (
                        <li key={contact}>
                            {contact}
                        </li>
                    )
                }))}
            </>
        )
    }};