import React, { Component } from 'react';
import Header from '../Header';
import PostItem from '../PostItem';
import './index.css'
import Footer from '../Footer';

class PostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const apiUrl = 'https://zuai-backend-1-0nu6.onrender.com/posts';
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok === true) {
      
      const updatedData = data.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
      }));
      console.log(updatedData);
      
      this.setState({ posts: updatedData });
    } else {
      console.error('Failed to fetch posts');
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className='list-blogs-container'>
          <h2 className='blog-heading'>Blog Posts</h2>
          <ul type='none'>
            {posts.map(eachPost => (
              <PostItem key={eachPost.id} postDetails={eachPost} />
            ))}
          </ul>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default PostList;
