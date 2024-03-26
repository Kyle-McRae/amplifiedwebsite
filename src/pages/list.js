import React from 'react';
import './list.css'
import GrocList from '../components/Grocery/GrocList';
const List = () => {
  return (
    <div>
    <GrocList/>
    <h2 className='main'>How it works</h2>
    <p className='main'>This grocery list uses HTTP requests to receive and send grocery data to my API. This API uses AWS API gateway to receive requests, a Lambda function to handle the logic, and a DynamoDB table to store the data. When the page is first loaded, the Lambda function scans the database for the grocery list. White using the list, additions and deletions are sent to the database and the website in parallel to create a seamless experience. </p>
    </div>
  );
};

export default List;
