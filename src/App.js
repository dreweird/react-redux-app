import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';

import { Navbar } from './app/Navbar'
import { EditPostForm } from './features/posts/EditPostForm';
import { PostsList } from './features/posts/PostsList';
import { SinglePostPage } from './features/posts/SinglePostPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route  path="posts" element={<PostsList/>}/>
            <Route  path="posts/:postId" element={<SinglePostPage/>}/>
            <Route  path="editPost/:postId" element={<EditPostForm/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
