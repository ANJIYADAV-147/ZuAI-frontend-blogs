import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blogList' element={<PostList/>}/>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path='/postForm' element={<PostForm/>}/>
        </Routes>
      
      </Router>
    );
  }
}

export default App;
