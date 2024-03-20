import React from 'react';
import axios from 'axios';
import Grocery from './Grocery';
import './GrocList.css';

export default class GrocList extends React.Component {
  state = {
    groceries: [],
    newGroc: '',
    qty: 0,
    error: '',
  }

  handleChange = event => {
    this.setState({ newGroc: event.target.value })
  }
  handleQtyChange = event => {
    this.setState({ qty: event.target.value })
  }

  handleDelete = name => 
    event => {
      this.setState({ groceries: this.state.groceries.filter(grocery => grocery.Name.S != name) });

      axios.delete('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc/' + name)
        .then(res => {
        }).catch(err => {
          console.log(err);
        });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const newGrocData = {
      name: this.state.newGroc,
      quantity: this.state.qty,
    }
    axios.post('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc', { newGrocData })
      .then(res => {
        let inList = false;
        let grocList = this.state.groceries;
        for (let grocery of grocList) {
          if (grocery.Name.S === this.state.newGroc) {
            grocery.Quantity.N = this.state.qty;
            this.setState({ groceries: grocList })
            inList = true;
          }
        }
        if (!inList) {
          this.setState({ groceries: this.state.groceries.concat({ "Name": { "S": this.state.newGroc }, "Quantity": { "N": this.state.qty } }) })
        }
      }).catch(err => {
        console.log(err);
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
      <div className="fulllist">
        <div className="list">
          {
            this.state.groceries
              .map(grocery =>
                <Grocery grocery={grocery} del={this.handleDelete(grocery.Name.S)}></Grocery>
              )
          }
        </div>
        <form onSubmit={this.handleSubmit} className="newGrocForm">
          <label>
            Grocery:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label htmlFor="qty">Quantity:</label>
          <input type="number" id="qty" name="qty" min="1" max="99" onChange={this.handleQtyChange} />
          <button type="submit" value="submit" className="newGrocSubmit">Add</button>
        </form>
      </div>

    )
  }
}