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
import { UserPage } from './features/users/UserPage';
import { UsersList } from './features/users/UsersList';
import { NotificationsList } from './features/notifications/NotificationsList'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route  index path="posts" element={<PostsList/>}/>
            <Route  path="posts/:postId" element={<SinglePostPage/>}/>
            <Route  path="editPost/:postId" element={<EditPostForm/>}/>
            <Route  path="users" element={<UsersList />} />
            <Route  path="users/:userId" element={<UserPage />} />
            <Route  path="notifications" element={<NotificationsList />} />
            <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
            } />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
