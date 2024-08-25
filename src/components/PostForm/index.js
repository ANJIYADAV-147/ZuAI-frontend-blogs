import { Component } from 'react';
import Header from '../Header';
import './index.css'
import Footer from '../Footer';


class PostForm extends Component {
  state = {
    tasks: [],
    title: '',
    content: '',
    selectedTaskId: null,
    errorMessage: '',
  };

  // Fetch tasks from the backend when the component mounts
  componentDidMount() {
    this.fetchTasks();
  }

  // Fetch tasks from the backend
  fetchTasks = async () => {
    try {
      // Fetch tasks from the backend API
      const response = await fetch('https://zuai-backend-1-0nu6.onrender.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const tasks = await response.json();
      this.setState({ tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Handle input change for title and content fields
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  // Handle form submission (creating or updating a task)
  handleSubmit = async (e) => {
    e.preventDefault();
  
    const { title, content, selectedTaskId } = this.state;
  
    if (selectedTaskId) {
      // Update existing task
      try {
        // Sending PUT request to update task
        const response = await fetch(`https://zuai-backend-1-0nu6.onrender.com/posts/${selectedTaskId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
        
          if (Array.isArray(errorData.errors)) {
            throw new Error(errorData.errors.join('\n'));
          } else if (typeof errorData.errors === 'string') {
            throw new Error(errorData.errors);
          } else {
            // Handle other cases if needed
            throw new Error('An unexpected error occurred.');
          }
        }
  
        console.log('Task updated successfully');
  
        // Reset the form and selectedTaskId after updating
        this.setState({ title: '', content: '', selectedTaskId: null, errorMessage: null });
  
        // Fetch tasks again after updating
        this.fetchTasks();
        // Handle response and errors
      } catch (error) {
        console.error('Error updating task:', error);
        this.setState({ errorMessage: error.message });
      }
    } else {
      // Create new task
      try {
        const response = await fetch('https://zuai-backend-1-0nu6.onrender.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
        
          if (Array.isArray(errorData.errors)) {
            throw new Error(errorData.errors.join('\n'));
          } else if (typeof errorData.errors === 'string') {
            throw new Error(errorData.errors);
          } else {
            // Handle other cases if needed
            throw new Error('An unexpected error occurred.');
          }
        }
        
  
        console.log('Task created successfully');
  
        // Reset the form after creating
        this.setState({ title: '', content: '', errorMessage: "" });
  
        // Fetch tasks again after creating
        this.fetchTasks();
      } catch (error) {
        console.log('Error creating task:', error);

        this.setState({ errorMessage: error.message });
      }
    }
  };
  

  // Handle updating a task
  handleUpdate = (taskId) => {
    // Set the selectedTaskId for the task being updated
    const selectedTask = this.state.tasks.find((task) => task.id === taskId);
    if (selectedTask) {
      this.setState({
        title: selectedTask.title,
        content: selectedTask.content,
        selectedTaskId: taskId,
      });
    }
  };

  // Handle deleting a task
 
  handleDelete = async (taskId) => {
    try {
      const response = await fetch(`https://zuai-backend-1-0nu6.onrender.com/posts/${taskId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors ? errorData.errors.join('\n') : 'Failed to delete task');
      }
  
      console.log('Task deleted successfully');
  
      // Update state by removing the deleted task
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
        errorMessage: '',
      }));
    } catch (error) {
      console.error('Error deleting task:', error);
      this.setState({ errorMessage: error.message });
    }
  };
  


  // Render the TaskForm component
  render() {
    
    const {errorMessage,tasks,selectedTaskId}=this.state
    const noTasksAssigned = tasks.length === 0;
    return (
      <div className="main-app-container">
       <Header/>
        <div className="form-app-container">
          {/* Form for creating or updating tasks */}
        <form onSubmit={this.handleSubmit} className="form-container">
          <h1 className="task-head">{selectedTaskId ? 'Update Post' : 'Post Schedule'}</h1>
          <div className='input-container'>
          <label className="form-header">Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}  style={{ width: '100%' }}/>
          </div>
          <br />
          <div className='input-container'>
          <label className="form-content">Content</label>
          <textarea 
          name="content" 
          className="content" 
          value={this.state.content} 
          onChange={this.handleInputChange} 
          style={{ width: '100%', resize: 'none' }}
          />

          </div>
          <br />
          <button type="submit" className="submit-task">{selectedTaskId ? 'Update Post' : 'Create Post'}</button>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </form>
        </div>
        

        <div className="tasks-list">
          {/* Display list of assigned tasks */}
        <h1 className="assigned-task-head"> Assigned Blogs</h1>
        <ul className="task-container" type='none'>
          { noTasksAssigned ? (
                    <div className="finished-task"></div>
                ):( tasks.map((task) => (
            <li key={task.id} className="task-overview" >
            <div>
                <h1 className="task-title">{task.title}</h1>
                <hr className="title-divider" />
                <p className="task-description">{task.description}</p>
            </div>
            <div className="button-container">
                <button onClick={() => this.handleUpdate(task.id)} className="update-button">Update posts</button>
                <button onClick={() => this.handleDelete(task.id)} className="delete-button">Delete</button>
            </div>
        </li>)
          ))}
        </ul>
        </div>
        
        <Footer/>
      </div>
    );
  }
}

export default PostForm;