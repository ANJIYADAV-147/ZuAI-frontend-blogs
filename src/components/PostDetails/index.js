import React, { Component } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import './index.css'

class PostDetails extends Component {
  state = {
    post: null,
    loading: true,
  };

  componentDidMount() {
    this.getPostDetails();
  }

  getPostDetails = async () => {
    const { id } = this.props.router.params;
    const apiUrl = `https://zuai-backend-1-0nu6.onrender.com/posts/${id}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    this.setState({ post: data, loading: false });
  };

  render() {
    const { post, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header/>
      <div className='details-container'>
        <h2 className='title'>{post.title}</h2>
        <p className='title'>{post.content}</p>
      </div>
      </div>
    );
  }
}

// This function creates a wrapper that will provide the necessary router props
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(PostDetails);
