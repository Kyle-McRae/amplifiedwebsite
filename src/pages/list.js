import React from 'react';
import './list.css'
import GrocList from '../components/Grocery/GrocList';
const List = () => {
  return (
    <div>
    <GrocList/>
    <h2>How it works</h2>
    <p>This grocery list uses HTTP requests to recieve and send grocery data to my API. This API uses AWS API gateway to recieve requests, a Lambda function to handle the logic, and a DynamoDB table to store the data. When the page is first loaded, the Lambda scans the database for the grocery list, and later additions and deletions are sent to the database while the list is being used. </p>
    </div>
  );
};

export default List;
