import React, { Component } from "react";

const Posts = (props) => {
  const PostsList = (elem) => {  
    
    if (elem) {
      return (
        <div >
          <img className='blogPage__posts-image'  src={elem.image} alt={elem.author}/> 
          <h1 >{elem.text}</h1>
          <h1 className='blogPage__posts-name'>{elem.author}, {elem.source}</h1>
        </div>
      )
    }
  }
  const changeCurrent = (value) => {
    props.changeState({curent: value})
  }
  
  const sliderButtons = (post) => {
    let arr = [];
    
    for (let i = 0; i < post.length; i++) {
      arr.push(<input onClick={changeCurrent.bind(null, i)} name='name' key={i}  type='radio'/>)
      
    }
    
    return arr;
  }

  return (
    <div>
      {PostsList(props.curentPost)}
      {sliderButtons(props.posts)}
    </div>
  );
}
export default Posts;