import React, { Component } from 'react';
import axios from 'axios';

import './styles.css';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    // await axios.post(
    //   'https://me0onlzvoa.execute-api.us-east-1.amazonaws.com/dev/api',
    //   { key1: `${name}, ${message}` }
    // );


    axios.post('https://me0onlzvoa.execute-api.us-east-1.amazonaws.com/dev/api', {
      "key1" : `${name} ${message}`,
    },
      alert('Mensagem enviada, muito obrigada!')
      

    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ name: '' })
    this.setState({ message: '' })
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Nome"
          />

          <textarea
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Mensagem"
          />

          <button type="submit">Send</button>
          </form>


      </div>
    );
  }
}