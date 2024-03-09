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
    this.setState({ newGroc: event.target.value })
  }
  handleQtyChange = event => {
    this.setState({ qty: event.target.value })
  }

  handleSubmit = event => {
    console.log('here1')
    const newGrocData = {
      name: this.state.newGroc,
      quantity: this.state.qty,
    }
    console.log('YAHR')
    axios.post('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc', { newGrocData })
      .then(res => {
        console.log(res);
        console.log('here4')
      });
    console.log('YEET')
    console.log('here2')
  }

  componentDidMount() {
    // axios.get('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc')
    //   .then(res => {
    //     console.log(res.data)
    //     const grocList = res.data;
    //     this.setState({ groceries: grocList });
    //   })
  }

  render() {
    return (
      <div>
        {
        this.state.groceries
        .map(grocery =>
          <Grocery grocery={grocery} ></Grocery>
        )
        }
        <form onSubmit={this.handleSubmit}>
          <label>
            Grocery:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label htmlFor="qty">Quantity</label>
          <input type="number" id="qty" name="qty" onChange={this.handleQtyChange}/>
          <button type="submit" value="submit">Add</button>
        </form>
      </div>
      
    )
  }
}