import React, { Component } from "react";

class Posts extends Component {
  
  render() {
    
    return (
      <div>
        {PostsList(this.props.posts)}
      </div>
    );
  }
}

export default Posts;

function PostsList(post) {  
  const arr = post.map((elem,i) => {    
    return (
      <div key={i}>
        <img className='blogPage__posts-image'  src={elem.image} alt={elem.author}/> 
        <h1 >{elem.text}</h1>
        <h1 className='blogPage__posts-name'>{elem.author}, {elem.source}</h1>
        
        
               
      </div>
    )
  })
  return arr;
}

// "author": "Lesale Christoper",
//       "source": "pinterest",
//       "text": "Fusce dapibus, tellus ac cursus commodo, tortor mauris \ncondimentum. Duis mollis, est non commodo luctus, nisi erat.",
//       "image": "https://tanuhaua.github.io/datas-file-json/bhagaskara/blog-images/autumn.jpg"