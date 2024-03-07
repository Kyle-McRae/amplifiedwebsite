import React from 'react';
import axios from 'axios';
import Grocery from './Grocery';

export default class GrocList extends React.Component {
  state = {
    groceries: [],
    newGroc: '',
    qty: '',
  }

  handleChange = event => {
    this.setState({newGroc: event.target.value})
  }

  handleSubmit = event => {
    const newGrocData = {
        name: this.state.newGroc,
        quantity: this.state.qty,
    }

    axios.post('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc', {newGrocData})
        .then(res => {
            console.log(res);
        });
  }

  componentDidMount() {
    axios.get('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc')
      .then(res => {
        const grocList = res.data;
        this.setState({ groceries: grocList });
      })
  }

  render() {
    return (
      this.state.groceries
      .map(grocery =>
        <Grocery>{grocery}</Grocery>
      )
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label for="qty">Quantity</label>
        <input type="number" id="qty" name="qty" value={1}/>
        <button type="submit" value="submit"></button>
      </form>
    </div>
    )
  }
}