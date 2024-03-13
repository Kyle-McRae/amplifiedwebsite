import React from 'react';
import axios from 'axios';
import Grocery from './Grocery';
import './GrocList.css';

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

  handleSubmit = async event => {
    event.preventDefault();
    const newGrocData = {
      name: this.state.newGroc,
      quantity: this.state.qty,
    }
    axios.post('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc', {newGrocData})
      .then(res => {
      }).catch(err =>{
        console.log(err);
      });
    this.setState({ groceries: this.state.groceries.concat({"Name":{"S": this.state.newGroc}, "Quantity": {"N": this.state.qty}}) })
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
      <div className="fulllist">
        <div className="list">
        {
        this.state.groceries
        .map(grocery =>
          <Grocery grocery={grocery} ></Grocery>
        )
        }
        </div>
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