import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { UsersList } from './features/users/UsersList'
import { UserPage } from './features/users/UserPage'
import { NotificationsList } from './features/notifications/NotificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/notifications" element={<NotificationsList />} />
        
        </Routes>
      </div>
    </Router>
  )
}

export default App
