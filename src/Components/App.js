import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import PostsList from '../Containers/PostsList'
import NewPost from './NewPost';
import ShowPost from './ShowPost'


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <h1 className="display-4 text-center m-3 border-bottom">MY BLOG</h1>
        <Switch>
          <Route exact path="/posts/new" component={NewPost} /> 
          <Route path="/posts/:id" component={ShowPost} />
          <Route exact path="/" component={PostsList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
}

export default App;
