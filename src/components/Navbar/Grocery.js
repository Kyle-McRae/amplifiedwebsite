import React from 'react';
import axios from 'axios';

export default class Grocery extends React.Component {
  state = {
    grocery:'',
    qty: '',
  }

  handleChange = event => {
    this.setState({newGroc: event.target.value})
  }

  handleSubmit = event => {
    const 
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const groceries = res.data;
        this.setState({ groceries });
      })
  }

  render() {
    return (
      this.state.groceries
      .map(person =>
        <li key={person.id}>{person.name}</li>
      )

      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}