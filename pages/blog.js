import React from 'react';
import './blog.css'
const Blog = () => {
  return (
    <div className="container">
      <h1>{'Blog'}</h1>
      <div className='post'>
        <h2>2/12/2024</h2>
        <p>I recently finished my first try at this <a href="https://www.kaggle.com/competitions/titanic/overview"> Kaggle competition</a>, where I made a model to predict titanic survivors from a list. My first attempt got me 58.9% percent accuracy, which is only 8.9% better than guessing randomly. I just used the standard scikit classification tree and to fill missing data, I used the average for the relevant column. In the future, I hope to improve the score by tuning some variables in the classification tree, like max leaf nodes. I also want to fill in missing data by extrapolating other data, like calculating the passenger class from their ticket fare. As for the website, I am looking to add some fun stuff, like a tab that adds a mustache to any picture uploaded.</p>
      </div>
      <div className='post'>
        <h2>11/1/2023 - myFirstBlogPost</h2>
        <p>Welcome to my blog! As of now, this is the only post, but I plan on updating it with fun tech projects or interesting developments in the tech world. My biggest project right now is this website. I've never used AWS amplify and also never handled a full react project solo, so it is proving to be a fun and very educational experience as well. I have a few ideas for the website, but I will have more as I implement them, and I can't wait to see where this takes me. In other news, halloween was yesterday and I carved a very handsome pumpkin for my porch.</p>
        <img className="blogimg" src="mypumpkin.jpg" alt="pumpkin"></img>
      </div>
    </div>
  );
};

export default Blog;
